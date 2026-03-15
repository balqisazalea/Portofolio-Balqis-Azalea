import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const imageUrl = "https://private-user-images.githubusercontent.com/184930985/563682579-14e238ce-f0c1-484d-858c-7e10bb722b10.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzM1NjIwMzksIm5iZiI6MTc3MzU2MTczOSwicGF0aCI6Ii8xODQ5MzA5ODUvNTYzNjgyNTc5LTE0ZTIzOGNlLWYwYzEtNDg0ZC04NThjLTdlMTBiYjcyMmIxMC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMxNVQwODAyMTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYWJiNzZmMDY3NzIzMDg3OWRlY2MwZDI2NmQ4YTFjMjI1N2I4YTZmNjIzNTI4MjkyY2I2MmFjNjY2M2IyMDk3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.IfWeGMlu7sR6kmSF-dRcoZMintZ4GXMbFxaCQ3krr3c";
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    
    const res = await ai.models.generateContent({
      model: 'gemini-3.1-flash-preview',
      contents: [
        {
          inlineData: {
            data: base64,
            mimeType: 'image/jpeg'
          }
        },
        "Describe this UI design in extreme detail. Focus on the Hero section layout, colors, typography, text content, buttons, images, and any decorative elements. I need to recreate this exactly in Tailwind CSS."
      ]
    });
    console.log(res.text);
  } catch (e) {
    console.error(e);
  }
}
run();
