import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export class GeminiService {
    private chat: any;

    constructor(apiKey: string) {
        const genAI = new GoogleGenerativeAI(apiKey);

        // Definir el esquema para la respuesta
        const schema = {
            description: "Cuento interactivo",
            type: SchemaType.OBJECT,
            properties: {
                scene: {
                    type: SchemaType.OBJECT,
                    properties: {
                        content: {
                            type: SchemaType.STRING,
                            description: "Contenido de la escena",
                            nullable: false,
                        },
                        options: {
                            type: SchemaType.ARRAY,
                            items: {
                                type: SchemaType.STRING,
                            },
                            description: "Opciones al final de la escena",
                            nullable: false,
                        }
                    },
                    required: ["content", "options"]
                }
            },
            required: ["scene"],
        };

        // Configurar el modelo con el esquema
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: schema,
            },
        });

        // Inicializar el chat
        this.chat = model.startChat();
    }

    async sendMessage(prompt: string) {
        try {
            const result = await this.chat.sendMessage(prompt);
            return result.response.text();
        } catch (error) {
            console.error("Error al enviar mensaje:", error);
            throw new Error("Error al conectar con la API de Gemini");
        }
    }


    async sendOptionMessage(option: string) {
        const prompt = `El usuario ha elegido la opción: ${option}.`;
        
        try {
            const result = await this.chat.sendMessage(prompt);
            return result.response.text();
        } catch (error) {
            console.error("Error al enviar mensaje:", error);
            throw new Error("Error al conectar con la API de Gemini");
        }
    }
}