import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { Server } from "http";
import config from "../config.json";

// App Variables

if (!config.port) {
    console.error("Port not defined.");
    process.exit(1);
}

const app: express.Application = express();

// App Configuration

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"]
        }
    })
);
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public/app")));

app.get("/", (req, res) => {
    res.sendFile("public/app/index.html", {
        root: __dirname,
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true
        }
    });
});

app.get("/admin", (req, res) => {
    res.sendFile("index.html", {
        root: __dirname,
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true
        }
    });
});

//Server Activation

const server: Server = app.listen(config.port, () => {
    console.log(`Server started at http://localhost:${config.port}`);
});

// Webpack HMR Activation

type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: any;
        accept(dependencies: string[], callback?: (updatedDependencies: ModuleId[]) => void): void;
        accept(dependency: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: any) => void): void;
    };
}

declare const module: WebpackHotModule;

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
