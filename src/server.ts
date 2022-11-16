import dotenv from "dotenv";
import { createServer } from "http";
import { app } from "~/app";

dotenv.config();

const PORT = process.env["PORT"] || 8000;

let server = createServer(app);

async function startServer() {
    // await dbConnect()
    server.listen(PORT, () => {
        console.log(`🚀 Up and running at port: ${PORT}`);
    });
}

startServer();
