const apiToken = 'e9a1f72fb3b5b57b31eb95e6afa6d201';

async function fetchImageData(input: string) {
    const data = {
        id: "cm1hnjbth000a12puy0dk7rxv", // ID del modelo de Glif
        inputs: [input],
    };

    const response = await fetch('https://simple-api.glif.app', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Error al obtener la imagen de la API de Glif');
    }

    const result = await response.json();
    return result.output; // Retorna la URL de la imagen
}

export async function create_and_upload_image(input: string): Promise<string> {
    try {
        const imageUrl = await fetchImageData(input);
        return imageUrl; // Retorna la URL de la imagen generada
    } catch (error) {
        console.error('Error al crear y subir la imagen:', error);
        throw error;
    }
}
