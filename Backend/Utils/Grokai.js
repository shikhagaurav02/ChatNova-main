import "dotenv/config";

const getGroqAPIResponse = async (message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
            model: "openai/gpt-oss-120b",
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
        }),
    };

    try {
        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            options
        );

        const data = await response.json();

        console.log(data); // <-- add this

        if (!data.choices) {
            throw new Error(data.error?.message || "Groq API failed");
        }

        return data.choices[0].message.content;

    } catch (err) {
        console.log("Groq Error:", err.message);
        return "Sorry, I am unable to respond right now.";
    }
};

export default getGroqAPIResponse;