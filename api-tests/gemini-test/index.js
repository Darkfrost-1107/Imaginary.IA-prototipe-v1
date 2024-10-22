require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const readline = require('readline');

// Inicializar el modelo con la clave de API
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function startChat() {
  try {
    const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // Preguntar al usuario el tema y el número de escenas
    rl.question('Introduce el tema del cuento: ', (tema) => {
      rl.question('¿Cuántas escenas tendrá el cuento? (número entero): ', async (numEscenas) => {
        
        const prompt = `Escribe un cuento interactivo sobre ${tema}. El cuento debe tener exactamente ${numEscenas} escenas, cada una de aproximadamente 100 palabras. Al final de cada escena, presenta 3 opciones para que el usuario elija cómo continuar la historia. Asegúrate de que el cuento llegue a un final satisfactorio en ese número exacto de escenas y no se sobrepase.`;
        
        // Crear el chat inicial
        let chat = await model.startChat({
          history: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            },
          ]
        });

        // Inicializamos el conteo de escenas
        let currentScene = 1;

        // Función para procesar cada escena
        const handleScene = async (sceneNumber) => {
          try {
            // Generar la escena actual
            const response = await chat.sendMessage(`Genera la escena ${sceneNumber}.`);
            console.log(`Escena ${sceneNumber}:`);
            console.log(response.response.text());

            // Suponemos que las opciones están incluidas en la respuesta
            rl.question('¿Qué opción eliges (1, 2 o 3)?: ', async (userChoice) => {
              // Enviar la elección del usuario al modelo para continuar la historia
              const continuationResponse = await chat.sendMessage(`Elijo la opción ${userChoice}.`);
              console.log(continuationResponse.response.text());

              // Verificamos si hemos llegado a la última escena
              if (sceneNumber < numEscenas) {
                currentScene++;
                handleScene(currentScene); // Pasar a la siguiente escena
              } else {
                console.log("La historia ha llegado a su fin.");
                rl.close();
              }
            });
          } catch (error) {
            console.error('Error al enviar el mensaje:', error.message);
          }
        };

        // Iniciar el proceso con la primera escena
        handleScene(currentScene);
      });
    });

  } catch (error) {
    console.error('Error al conectar con la API:', error.message);
  }
}

// Iniciar la conversación
startChat();
