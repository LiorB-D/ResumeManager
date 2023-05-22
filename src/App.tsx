import React, {useState, useRef} from 'react';
import './App.css';
import {Resume} from './Types/ResumeTypes'
import ResumeDisplay from './ResumeComponents/ResumeDisplay'
import jsPDF from 'jspdf';
import {CVContextProvider} from './State/CVContext';

function App() {

  const resumeDocRef = useRef<HTMLDivElement | null>(null)

  const handleDownload = () => {
    
      const doc = new jsPDF({
        format: 'a4',
        unit: 'in',
      });

      // Adding the fonts.
      doc.setFont('Times New Roman', 'normal');
      if(resumeDocRef.current) {
        doc.html(resumeDocRef.current, {
          async callback(doc) {
            await doc.save('resume');
          },
          width: 8.27,
          windowWidth: 827
        });
      }
    
  }

  return (
    <div className='App'>
      <CVContextProvider>
      <div ref = {resumeDocRef}>
        <ResumeDisplay/>
      </div>
      <button onClick={handleDownload}>Download</button>
      </CVContextProvider>
    </div>
  );
}

export default App;
