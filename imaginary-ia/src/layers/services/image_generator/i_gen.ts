const apiToken = 
"d410af75-4e5c-4619-87b1-e62a71be39c0"
const modelId = 'e71a1c2f-4f80-4800-934f-2c68979d8cc8';

async function startGeneration(input: string) {
    console.log('Iniciando la generación de la imagen con el prompt:', input);
    
    const response = await fetch('https://cloud.leonardo.ai/api/rest/v1/generations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiToken}`,
            Accept: 'application/json',            
        },
        body: JSON.stringify({
            alchemy: true,
            height: 512,
            modelId: `${modelId}`,
            num_images: 1,
            presetStyle: 'DYNAMIC',
            prompt: input,
            width: 512
        }),
    });

    console.log('Respuesta de la API de generación:', response.status, response.statusText);

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Error en la respuesta de generación:', errorText);
        throw new Error('Error al iniciar la generación de la imagen en Leonardo AI');
    }

    const result = await response.json();
    console.log('Resultado de la generación:', result);

    return result.sdGenerationJob.generationId;
}

async function fetchImageData(generationId: string) {
    console.log('Consultando el estado del trabajo con ID:', generationId);

    let result;
    let isImageReady = false;
    const pollingInterval = 5000;
    const maxAttempts = 10;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const response = await fetch(`https://cloud.leonardo.ai/api/rest/v1/generations/${generationId}`, {
            headers: {
                Authorization: `Bearer ${apiToken}`,
                Accept: 'application/json',
            }
        });

        console.log('Respuesta de la API para obtener la imagen:', response.status, response.statusText);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error en la respuesta de obtención de imagen:', errorText);
            throw new Error('Error al obtener la imagen de la API de Leonardo AI');
        }

        result = await response.json();
        console.log('Resultado de la obtención de imagen:', result);

        if (result.generations_by_pk && result.generations_by_pk.generated_images.length > 0) {
            isImageReady = true;
            break; 
        }

        console.log(`Imagen no lista aún, esperando ${pollingInterval / 1000} segundos antes de volver a intentar...`);
        await new Promise(resolve => setTimeout(resolve, pollingInterval));
    }

    if (!isImageReady) {
        throw new Error('La imagen no se generó a tiempo. Inténtalo de nuevo más tarde.');
    }

    return result.generations_by_pk.generated_images[0].url; 
}

export async function create_and_upload_image(input: string): Promise<string> {
    try {
        console.log('Iniciando creación y carga de imagen...');
        const generationId = await startGeneration(input);
        console.log('ID de generación obtenido:', generationId);

        const imageUrl = await fetchImageData(generationId); // Obtiene la URL de la imagen
        console.log('URL de la imagen obtenida:', imageUrl);

        return imageUrl;
    } catch (error) {
        console.error('Error al crear y subir la imagen:', error);
        throw error;
    }
}
