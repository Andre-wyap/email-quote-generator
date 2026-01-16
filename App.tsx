import React, { useState } from 'react';
import { QuoteData, ClientDetails, PlanDetails, EmailContent } from './types';
import ContentEditor from './components/QuoteForm';
import EmailPreview from './components/EmailPreview';
import { Code, Eye, FileText } from 'lucide-react';
import { generateEmailHtml } from './utils/emailTemplate';

const App: React.FC = () => {
  // Initialize with the requested variable format {{var:Name:""}}
  const [client] = useState<ClientDetails>({
    name: '{{var:Name:""}}',
    age: '{{var:Age:""}}',
    gender: '{{var:Gender:""}}',
    smoker: '{{var:Smoker Status:""}}'
  });

  const [plan1, setPlan1] = useState<PlanDetails>({
    name: '{{var:Plan 1 Name:""}}',
    annualLimit: '{{var:Plan 1 Annual Limit:""}}',
    roomAndBoard: '{{var:Plan 1 Room & Board:""}}',
    deductible: '{{var:Plan 1 Deductible:""}}',
    copayment: '{{var:Plan 1 Copayment:""}}',
    premium: '{{var:Plan 1 Premium:""}}'
  });

  const [plan2, setPlan2] = useState<PlanDetails>({
    name: '{{var:Plan 2 Name:""}}',
    annualLimit: '{{var:Plan 2 Annual Limit:""}}',
    roomAndBoard: '{{var:Plan 2 Room & Board:""}}',
    deductible: '{{var:Plan 2 Deductible:""}}',
    copayment: '{{var:Plan 2 Copayment:""}}',
    premium: '{{var:Plan 2 Premium:""}}'
  });

  const [content, setContent] = useState<EmailContent>({
    welcomeMessage: `Dear {{var:Name:""}},

I hope this email finds you well.

As we discussed, I have prepared two personalized insurance plan options for you. These plans are designed to give you the best medical coverage while keeping the premiums affordable.`,
    deductibleExplanationTitle: 'What are Deductibles & Copayments?',
    deductibleExplanation: `A **Deductible** is the initial amount you pay for medical costs before your insurance starts paying.
    
A **Copayment** (or Co-takaful) is a small fixed amount or percentage you pay for a specific service.

**Why choose these?**
Opting for a plan with a deductible or copayment allows you to enjoy a significantly **lower annual premium**. It’s a smart way to save money on fixed costs while still being fully protected against large hospital bills.`,
    whatsappButtonText: 'WhatsApp Andrew: +60 12-291 7463',
    whatsappLink: 'https://wa.me/60122917463',
    downloadButtonText: 'Download Quote',
    downloadLink: '{{var:Quote Link:""}}',
    aboutSectionTitle: 'About Andrew',
    aboutSectionContent: 'Insurance agent for <strong>7 years</strong> in Allianz Life.<br/>Focusing on family insurance and retirement medical insurance.'
  });

  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  const quoteData: QuoteData = {
    client,
    plan1,
    plan2,
    content
  };

  const rawHtml = generateEmailHtml(quoteData);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="bg-indigo-600 p-2 rounded-lg text-white">
               <FileText className="w-5 h-5" />
             </div>
             <div>
               <h1 className="text-lg font-bold text-slate-800 leading-tight">SmartQuote Template Builder</h1>
               <p className="text-xs text-slate-500 font-medium">Generate HTML for your Email Sender</p>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-[800px]">
          
          {/* Left Column: Content Editor */}
          <div className="lg:col-span-4 h-full">
            <ContentEditor 
              content={content}
              setContent={setContent}
              plan1={plan1}
              setPlan1={setPlan1}
              plan2={plan2}
              setPlan2={setPlan2}
            />
          </div>

          {/* Right Column: Preview & Code */}
          <div className="lg:col-span-8 h-full flex flex-col">
            <div className="bg-white border-b border-slate-200 rounded-t-xl px-4 py-3 flex gap-4">
              <button
                onClick={() => setViewMode('preview')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  viewMode === 'preview' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Eye className="w-4 h-4" /> Visual Preview
              </button>
              <button
                onClick={() => setViewMode('code')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  viewMode === 'code' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Code className="w-4 h-4" /> Raw HTML Code
              </button>
            </div>

            <div className="flex-1 bg-slate-100 border border-slate-200 rounded-b-xl overflow-hidden relative">
              {viewMode === 'preview' ? (
                <div className="h-full">
                   <EmailPreview data={quoteData} setContent={setContent} />
                </div>
              ) : (
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-center bg-slate-800 text-slate-200 px-4 py-2 text-xs font-mono">
                    <span>index.html</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(rawHtml)}
                      className="text-white hover:text-indigo-300 transition-colors font-bold"
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                  <textarea 
                    className="flex-1 w-full bg-slate-900 text-indigo-100 font-mono text-xs p-4 resize-none outline-none"
                    value={rawHtml}
                    readOnly
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;