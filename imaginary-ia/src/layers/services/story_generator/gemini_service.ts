import { GoogleGenerativeAI } from "@google/generative-ai";

export class GeminiService {
    private chat: any;

    constructor(apiKey: string) {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        this.chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: "Hello" }],
                },
                {
                    role: "model",
                    parts: [{ text: "Great to meet you. What would you like to know?" }],
                },
            ],
        });
    }

    async sendMessage(message: string) {
        try {
            const result = await this.chat.sendMessage(message);
            return result.response.text();
        } catch (error) {
            console.error("Error al enviar mensaje:", error);
            throw new Error("Error al conectar con la API de Gemini");
        }
    }
}