import React from 'react';

const MobileWarningPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Please Use a Laptop</h1>
      <p className="text-lg">
        This site is best viewed on a laptop or desktop computer.
        Please switch to a larger screen for the best experience.
      </p>
    </div>
  );
};

export default MobileWarningPage;
