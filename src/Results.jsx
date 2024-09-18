import React from 'react'

export function Results({ score, total }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl">
          Your score: {score} out of {total}
        </p>
        <p className="mt-4 text-lg">
          {score === total
            ? "Perfect score! Congratulations!"
            : score > total / 2
            ? "Great job! You passed!"
            : "Keep practicing. You'll do better next time!"}
        </p>
      </div>
    </div>
  )
}