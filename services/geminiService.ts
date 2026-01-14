import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from '../constants';

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual de un prestigioso estudio de arquitectura llamado "ArchiVision".
Tu tono debe ser sofisticado, profesional, minimalista y amable.
Tu objetivo es responder preguntas sobre el portafolio, la filosofía de diseño y servicios del estudio.

Información clave del estudio:
- Especialidad: Arquitectura minimalista, sostenible y residencial de lujo.
- Filosofía: "Menos es más", integración con la naturaleza, uso honesto de materiales.
- Proyectos destacados: ${PROJECTS.map(p => p.title + " (" + p.category + ")").join(", ")}.

Si te preguntan por precios, invita amablemente al usuario a la sección de contacto para una cotización personalizada.
Responde siempre en español de manera concisa.
`;

export const sendMessageToGemini = async (history: { role: 'user' | 'model'; parts: { text: string }[] }[], message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Lo siento, no puedo procesar tu solicitud en este momento (API Key missing).";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "No pude generar una respuesta.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Tuve un problema técnico momentáneo. Por favor intenta de nuevo.";
  }
};