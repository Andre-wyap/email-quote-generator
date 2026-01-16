import React from 'react';
import { QuoteData, EmailContent } from '../types';
import { generateEmailHtml } from '../utils/emailTemplate';

interface EmailPreviewProps {
  data: QuoteData;
  setContent: (content: EmailContent) => void;
}

const EmailPreview: React.FC<EmailPreviewProps> = ({ data }) => {
  // Use the HTML generator to ensure preview matches the code exactly
  const htmlContent = generateEmailHtml(data);

  return (
    <div className="h-full w-full bg-white overflow-hidden flex flex-col">
       <div className="bg-yellow-50 text-yellow-800 px-4 py-2 text-xs text-center border-b border-yellow-100">
         This is how your email will look. The parts in <strong>&lt; &gt;</strong> will be replaced by your email sender software.
       </div>
       <div className="flex-1 w-full h-full overflow-y-auto bg-slate-200 p-8">
         <div className="max-w-[600px] mx-auto shadow-2xl">
           <iframe 
             srcDoc={htmlContent}
             className="w-full h-[800px] bg-white rounded-lg"
             title="Email Preview"
             style={{ border: 'none' }}
           />
         </div>
       </div>
    </div>
  );
};

export default EmailPreview;