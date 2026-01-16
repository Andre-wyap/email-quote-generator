import { QuoteData } from "../types";

export const generateEmailHtml = (data: QuoteData): string => {
  const { client, plan1, plan2, content } = data;

  return `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e2e8f0;">
    
    <!-- Welcome Section -->
    <h2 style="color: #003781; margin-top: 0;">Medical Insurance Proposal</h2>
    <p style="white-space: pre-line;">${content.welcomeMessage.replace(/\n/g, '<br/>')}</p>
    
    <!-- Educational Section -->
    <div style="background-color: #f0f9ff; border-left: 4px solid #003781; padding: 15px; margin: 20px 0;">
      <h3 style="color: #003781; margin: 0 0 10px 0;">${content.deductibleExplanationTitle}</h3>
      <p style="margin: 0; font-size: 14px; white-space: pre-line;">${content.deductibleExplanation.replace(/\n/g, '<br/>')}</p>
    </div>

    <!-- Client Summary Placeholder -->
    <p style="font-size: 12px; color: #666; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">
      <strong>Prepared for:</strong> ${client.name} | Age: ${client.age} | ${client.gender} | ${client.smoker}
    </p>

    <!-- Plans Comparison -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
      <tr>
        <td width="48%" style="vertical-align: top; border: 1px solid #ddd; border-radius: 8px; padding: 15px; background-color: #fafafa;">
          <h3 style="color: #003781; margin-top: 0; border-bottom: 2px solid #003781; padding-bottom: 8px;">${plan1.name}</h3>
          <p style="margin: 5px 0; font-size: 13px;"><strong>Annual Limit:</strong><br/>${plan1.annualLimit}</p>
          <p style="margin: 5px 0; font-size: 13px;"><strong>Room & Board:</strong><br/>${plan1.roomAndBoard}</p>
          <p style="margin: 5px 0; font-size: 13px;"><strong>Deductible:</strong><br/>${plan1.deductible}</p>
          <p style="margin: 5px 0; font-size: 13px;"><strong>Copayment:</strong><br/>${plan1.copayment}</p>
          <div style="margin-top: 15px; font-size: 16px; color: #003781; font-weight: bold;">${plan1.premium}</div>
        </td>
        <td width="4%"></td>
        <td width="48%" style="vertical-align: top; border: 1px solid #ddd; border-radius: 8px; padding: 15px; background-color: #fafafa;">
          <h3 style="color: #003781; margin-top: 0; border-bottom: 2px solid #003781; padding-bottom: 8px;">${plan2.name}</h3>
          <p style="margin: 5px 0; font-size: 13px;"><strong>Annual Limit:</strong><br/>${plan2.annualLimit}</p>
          <p style="margin: 5px 0; font-size: 13px;"><strong>Room & Board:</strong><br/>${plan2.roomAndBoard}</p>
          <p style="margin: 5px 0; font-size: 13px;"><strong>Deductible:</strong><br/>${plan2.deductible}</p>
          <p style="margin: 5px 0; font-size: 13px;"><strong>Copayment:</strong><br/>${plan2.copayment}</p>
          <div style="margin-top: 15px; font-size: 16px; color: #003781; font-weight: bold;">${plan2.premium}</div>
        </td>
      </tr>
    </table>

    <!-- About Section -->
    <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
       <table width="100%">
         <tr>
           <td style="vertical-align: top;">
              <h3 style="margin-top: 0; color: #333; font-size: 16px;">${content.aboutSectionTitle}</h3>
              <p style="margin: 0; font-size: 14px; color: #555;">
                ${content.aboutSectionContent}
              </p>
           </td>
         </tr>
       </table>
    </div>

    <!-- CTA Buttons -->
    <div style="text-align: center; margin-top: 30px; padding-bottom: 10px;">
      <!-- WhatsApp Button -->
      <a href="${content.whatsappLink}" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; display: inline-block; margin: 5px;">
        ${content.whatsappButtonText}
      </a>
      
      <!-- Download Quote Button -->
      <a href="${content.downloadLink}" style="background-color: #003781; color: white; padding: 12px 24px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 14px; display: inline-block; margin: 5px;">
        ${content.downloadButtonText}
      </a>
      
      <p style="font-size: 12px; color: #999; margin-top: 10px;">Click the buttons above to respond</p>
    </div>

  </div>
</body>
</html>`;
};