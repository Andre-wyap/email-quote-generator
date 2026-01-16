import React from 'react';
import { EmailContent, PlanDetails } from '../types';
import { Edit3, Info, Layout, Link as LinkIcon, MessageSquare, ShieldCheck, UserCircle } from 'lucide-react';

interface ContentEditorProps {
  content: EmailContent;
  setContent: (content: EmailContent) => void;
  plan1: PlanDetails;
  setPlan1: (plan: PlanDetails) => void;
  plan2: PlanDetails;
  setPlan2: (plan: PlanDetails) => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ 
  content, 
  setContent,
  plan1,
  setPlan1,
  plan2,
  setPlan2
}) => {
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handlePlan1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlan1({ ...plan1, [e.target.name]: e.target.value });
  };

  const handlePlan2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlan2({ ...plan2, [e.target.name]: e.target.value });
  };

  // High contrast style for inputs
  const inputStyle = "w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-slate-900 bg-white placeholder:text-slate-400 text-sm";
  const labelStyle = "block text-[10px] font-bold text-slate-600 uppercase mb-1";
  const sectionHeaderStyle = "text-sm font-bold text-indigo-700 flex items-center gap-2 mb-4 bg-indigo-50 p-2 rounded";

  const renderPlanInputs = (plan: PlanDetails, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, planNumber: number) => (
    <div className="space-y-3 p-4 border border-slate-200 rounded-lg bg-slate-50/50">
      <h4 className="font-bold text-slate-800 text-sm border-b border-slate-200 pb-2 mb-3">Plan {planNumber} Details</h4>
      
      <div>
        <label className={labelStyle}>Plan Name</label>
        <input
          type="text"
          name="name"
          value={plan.name}
          onChange={handleChange}
          className={inputStyle}
          placeholder="e.g. {{var:Plan Name}}"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelStyle}>Annual Limit</label>
          <input
            type="text"
            name="annualLimit"
            value={plan.annualLimit}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
        <div>
          <label className={labelStyle}>Room & Board</label>
          <input
            type="text"
            name="roomAndBoard"
            value={plan.roomAndBoard}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelStyle}>Deductible</label>
          <input
            type="text"
            name="deductible"
            value={plan.deductible}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
        <div>
          <label className={labelStyle}>Copayment</label>
          <input
            type="text"
            name="copayment"
            value={plan.copayment}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className={labelStyle}>Premium</label>
        <input
          type="text"
          name="premium"
          value={plan.premium}
          onChange={handleChange}
          className={`${inputStyle} font-bold text-indigo-900`}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-full overflow-y-auto">
      <div className="mb-6 pb-4 border-b border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-blue-600" /> Edit Content
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Customize the email text, plan details, and button links.
        </p>
      </div>

      <div className="space-y-8">
        
        {/* Section: Plan Details */}
        <div>
          <h3 className={sectionHeaderStyle}>
            <ShieldCheck className="w-4 h-4" /> Plan Configuration
          </h3>
          <div className="space-y-6">
            {renderPlanInputs(plan1, handlePlan1Change, 1)}
            {renderPlanInputs(plan2, handlePlan2Change, 2)}
          </div>
        </div>

        {/* Section: Message Content */}
        <div>
           <h3 className={sectionHeaderStyle}>
            <MessageSquare className="w-4 h-4" /> Message Body
          </h3>
          <div className="space-y-4">
            <div>
              <label className={labelStyle}>Welcome Message</label>
              <textarea
                name="welcomeMessage"
                value={content.welcomeMessage}
                onChange={handleContentChange}
                className={`${inputStyle} h-32`}
                placeholder="Enter welcome message..."
              />
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
              <div>
                <label className={labelStyle}>
                  Section Title (Explanation)
                </label>
                <input
                  type="text"
                  name="deductibleExplanationTitle"
                  value={content.deductibleExplanationTitle}
                  onChange={handleContentChange}
                  className={inputStyle}
                />
              </div>
              <div>
                <label className={labelStyle}>
                  Section Content (Explanation)
                </label>
                <textarea
                  name="deductibleExplanation"
                  value={content.deductibleExplanation}
                  onChange={handleContentChange}
                  className={`${inputStyle} h-40`}
                  placeholder="Explain what deductible and copayment are..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Buttons */}
        <div>
          <h3 className={sectionHeaderStyle}>
            <LinkIcon className="w-4 h-4" /> Buttons & Links
          </h3>
          <div className="space-y-4">
            {/* WhatsApp Button */}
            <div className="p-3 border border-slate-100 rounded-lg bg-slate-50">
              <label className="text-xs font-bold text-green-700 mb-2 block">Primary Button (WhatsApp)</label>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] text-slate-500 block mb-1">Button Text</span>
                  <input
                    type="text"
                    name="whatsappButtonText"
                    value={content.whatsappButtonText}
                    onChange={handleContentChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block mb-1">Link URL</span>
                  <input
                    type="text"
                    name="whatsappLink"
                    value={content.whatsappLink}
                    onChange={handleContentChange}
                    className={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="p-3 border border-slate-100 rounded-lg bg-slate-50">
              <label className="text-xs font-bold text-blue-700 mb-2 block">Secondary Button (Download)</label>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] text-slate-500 block mb-1">Button Text</span>
                  <input
                    type="text"
                    name="downloadButtonText"
                    value={content.downloadButtonText}
                    onChange={handleContentChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block mb-1">Link URL (Variable)</span>
                  <input
                    type="text"
                    name="downloadLink"
                    value={content.downloadLink}
                    onChange={handleContentChange}
                    className={inputStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: About Me */}
        <div>
          <h3 className={sectionHeaderStyle}>
            <UserCircle className="w-4 h-4" /> Footer (About Me)
          </h3>
          <div className="space-y-3">
             <div>
                <label className={labelStyle}>Section Title</label>
                <input
                  type="text"
                  name="aboutSectionTitle"
                  value={content.aboutSectionTitle}
                  onChange={handleContentChange}
                  className={inputStyle}
                />
             </div>
             <div>
                <label className={labelStyle}>Content (HTML Supported)</label>
                <textarea
                  name="aboutSectionContent"
                  value={content.aboutSectionContent}
                  onChange={handleContentChange}
                  className={`${inputStyle} h-24 font-mono text-xs`}
                  placeholder="Enter details about yourself..."
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  Tip: Use &lt;strong&gt;bold&lt;/strong&gt; for bold text and &lt;br/&gt; for line breaks.
                </p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContentEditor;