import * as express from "express";
import * as dotenv from "dotenv";
dotenv.config();

class Server {
    public app: express.Application;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }

    private setMiddleware() {
        // json middleware
        this.app.use(express.json());

        // 404 middleware
        this.app.use((req, res, next) => {
            res.sendStatus(404);
        });
    }

    private setRoute() {}

    public listen() {
        this.setMiddleware();
        this.setRoute();
        const port = process.env.PORT;
        this.app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`);
        });
    }
}

const initialize = () => {
    const server = new Server();
    server.listen();
};

initialize();
