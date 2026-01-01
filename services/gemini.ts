
import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getChatResponse = async (history: { role: 'user' | 'model', text: string }[]) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are "Bubbles", the friendly AI assistant for Sparkle & Shine Cleaning Services in Yonkers, NY. 
    You are cute, helpful, and love talking about a clean home. 
    Always mention that we serve Yonkers and surrounding Westchester areas.
    Your goal is to answer questions about our services (Standard, Deep, Move In/Out) and provide cleaning tips.
    Keep responses concise and use emojis. 
    If they ask for a price, tell them to use our interactive estimate tool on the page.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.text }] })),
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Oops, Bubbles got a little tangled in the mop! Can you try again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to the cleaning cloud. Try again in a second! ✨";
  }
};
