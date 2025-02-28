const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "visitorCount.json"); // JSON file to store count

exports.handler = async () => {
    let count = 250; // Default starting count

    try {
        // Read the current visitor count from file
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, "utf8");
            const json = JSON.parse(data);
            count = json.count + 1; // Increment visitor count
        }
        
        // Save updated visitor count back to file
        fs.writeFileSync(filePath, JSON.stringify({ count }), "utf8");

        return {
            statusCode: 200,
            body: JSON.stringify({ count }),
        };
    } catch (error) {
        console.error("Error updating visitor count:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
