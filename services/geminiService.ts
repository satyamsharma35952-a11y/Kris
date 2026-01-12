
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const generateCreativeCopy = async (industry: string) => {
  if (!API_KEY) return null;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a premium hero section copy for a ${industry} catering business. 
    It should sound upscale, professional, and trustworthy for corporate clients. 
    Brand name is 'Coriander'.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          heroTitle: { type: Type.STRING },
          heroSubtitle: { type: Type.STRING },
          ctaText: { type: Type.STRING },
          stats: { type: Type.STRING }
        },
        required: ["heroTitle", "heroSubtitle", "ctaText", "stats"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return null;
  }
};
