const fetch = require("node-fetch");

exports.handler = async () => {
    try {
        const response = await fetch("https://api.countapi.xyz/hit/vidhaanviswas.netlify.app//visits");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify({ count: data.value }),
        };
    } catch (error) {
        console.error("Error fetching visitor count:", error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch visitor count" }),
        };
    }
};
