import React from 'react'


export function Question({ question, options, onAnswer }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{question}</h2>
      <div className="space-y-2 flex  text-white flex-col ">
        {options.map((option, index) => (
          
          <button className='my-2 bg-zinc-800 hover:bg-black transition-all rounded-md h-10' onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}