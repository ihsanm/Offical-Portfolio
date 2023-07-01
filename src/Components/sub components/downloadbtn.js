import React from 'react';
import cvPdf from '../../assets/cv.pdf';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'cv.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload} className="bg-ihsan-blue hover:bg-cv-blue transition duration-500 ease-in-out text-white font-bold py-3 px-6 rounded-lg shadow-lg">
      Download CV
    </button>
  );
};

export default DownloadButton;
