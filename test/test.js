process.env.OPENFAAS_SECRETS_DIR = `${__dirname}/secrets/`;
process.env.KUBERNETES_SERVICE_HOST = true;
process.env.LOG = true;

require("..");

if(process.env.MY_SECRET === "Hello world")
{
    console.log("MY_SECRET was successfully set");
}
else
{
    throw "Secret wasn't set";
}