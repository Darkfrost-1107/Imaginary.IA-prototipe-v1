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

    async sendMessage(tema: string, numEscenas: number) {
        const prompt = `
        Escribe un cuento interactivo sobre "${tema}". 
        El cuento debe tener exactamente ${numEscenas} escenas, cada una de aproximadamente 100 palabras. 
        Al final de cada escena, presenta 3 opciones para que el usuario elija cómo continuar la historia, 
        incluyendo una opción adicional para que el usuario elija continuar la historia de manera libre. 
        Asegúrate de que el cuento llegue a un final satisfactorio en ese número exacto de escenas y no se sobrepase.

        Detente después de cada escena y espera a que el usuario seleccione una opción para avanzar.
        `;

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