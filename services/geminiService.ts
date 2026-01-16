import { GoogleGenAI, Type } from "@google/genai";
import { ClientDetails, PlanDetails, EmailContent } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePersonalizedContent = async (
  client: ClientDetails,
  plan1: PlanDetails,
  plan2: PlanDetails
): Promise<Partial<EmailContent>> => {
  const prompt = `
    You are a professional assistant for Andrew, an insurance agent at Allianz Life.
    Write a personalized email introduction and an educational explanation about deductibles for a client with the following details:
    
    Client: ${client.name}, ${client.age} years old, ${client.gender}, ${client.smoker}.
    
    Plan Option 1: Deductible ${plan1.deductible}, Copay ${plan1.copayment}.
    Plan Option 2: Deductible ${plan2.deductible}, Copay ${plan2.copayment}.

    1. Welcome Message: A warm, professional opening tailored to the client's age and profile.
    2. Educational Explanation: Explain "What is deductible and copayment" simply. Explain why choosing these options makes the plan cheaper (lower premium) for the customer.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            welcomeMessage: { type: Type.STRING },
            deductibleExplanation: { type: Type.STRING }
          },
          required: ["welcomeMessage", "deductibleExplanation"]
        }
      }
    });

    const jsonText = response.text || "{}";
    return JSON.parse(jsonText) as Partial<EmailContent>;
  } catch (error) {
    console.error("Error generating content:", error);
    // Fallback content if AI fails
    return {
      welcomeMessage: `Dear ${client.name},\n\nI hope this email finds you well. Based on our discussion, I have prepared two tailored insurance plan options for your review.`,
      deductibleExplanation: "A deductible is the amount you pay for covered health care services before your insurance plan starts to pay. A copayment is a fixed amount you pay for a covered health care service. Choosing a plan with these options significantly reduces your annual premium, making it a cost-effective choice without compromising on high medical coverage limits."
    };
  }
};