
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter">
          <span className="bg-gradient-to-r from-green-500 via-white to-orange-500 text-transparent bg-clip-text">
            My Ireland
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">
          A tribute to the Emerald Isle.
        </p>
      </div>
    </main>
  );
};

export default App;
