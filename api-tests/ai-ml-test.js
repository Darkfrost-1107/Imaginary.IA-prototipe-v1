
async function testImageAPI(){
  const prompt = "crea una imagen de un mago peleando con otro mago estilo ghiblli"
  const key = "5f5ee8c5274f40bd8b232c6f106b3cc2"
  const model = "dall-e-2"
  const size = "512x512"
  const response = await fetch('https://api.aimlapi.com/images/generations', {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt,
      model,
      size
    }),
  });
  const data = await response.json();
  return data
}
  
testImageAPI().then(data => console.log(data));