import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <main className="min-h-screen  from-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Counter App
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        
        <div className="text-center mb-8">
          <p className="text-7xl font-bold text-gray-800 mb-2">
            {count}
          </p>
         
        </div>

        
        <div className="flex gap-4 justify-center">
          <button
            onClick={increment}
            className="
              h-14 w-32 
              bg-green-500 
              hover:bg-green-600 
              active:bg-green-700
              text-white          
              flex 
              rounded-lg
              shadow-lg
              items-center 
              justify-center
              gap-2
            "
          >
            <span className="text-xl">+</span>
            Increment
          </button>
          
          <button
            onClick={decrement}
            className="h-14 w-32 
              bg-red-500 
              hover:bg-red-800      
              font-semibold 
              rounded-lg 
              shadow-lg 
              flex 
              items-center 
              justify-center
              gap-2
            "
          >
            <span className="text-xl">-</span>
            Decrement
          </button>
        </div>

        {/* Reset Button (Optional) */}
        <div className="text-center mt-6">
          <button
            onClick={() => setCount(0)}
            className="
              px-6 py-2 
              bg-gray-500 
              hover:bg-gray-600 
              text-white 
              text-sm 
              rounded-lg 
              transition-colors 
              duration-200
            "
          >
            Reset
          </button>
        </div>

      </div>
    </main>
  );
}

export default CounterApp;