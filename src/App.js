import React, { useState } from 'react'
import { Question } from './Question'
import { Results } from './Results'

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
{
    question: "Who is the most badass character of GTA trilogy?",
    options: ["Franklin", "Michael", "Cj", "Trever"],
    correctAnswer: "Trever"
  },
{
    question: "Who wrote "Brown Rang"?",
    options: ["Honey singh", "Badshah", "Ikka", "None of above"],
    correctAnswer: "Honey singh"
  }
]

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer])
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score
    }, 0)
  }

  if (showResults) {
    return <Results score={calculateScore()} total={questions.length} />
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
        />
        <div className="mt-4 text-sm text-gray-500">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>
    </div>
  )
}