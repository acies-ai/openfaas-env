const fs = require("fs");

const OPENFAAS_SECRETS_DIR = process.env.OPENFAAS_SECRETS_DIR || "/var/openfaas/secrets/";

if (process.env.KUBERNETES_SERVICE_HOST && fs.existsSync(OPENFAAS_SECRETS_DIR)) {
    const secretsDir = fs.readdirSync(OPENFAAS_SECRETS_DIR);
    secretsDir.forEach((secret) =>
    {
        if (!secret.startsWith("..")) {
            const variable = (fs.readFileSync(`${OPENFAAS_SECRETS_DIR}${secret}`).toString());
            const properCase = secret.toUpperCase().replace(/-/g, "_");
            process.env[properCase] = variable;
            if(process.env.LOG) console.log("Initialized secret:", properCase);
        }
    });
} else {
    console.log("Not running in Kubernetes");
}