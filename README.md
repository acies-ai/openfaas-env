# openfaas-env
Loads the OpenFaas secrets in a pod into the ENV variables automagically.

## Installation
```dosini
npm i openfaas-env
```

## Usage
Place as high-up in the execution as possible:
```dosini
require("openfaas-env");
```

## Case transformation
Automatically transforms lowercase secrets (e.g. my-secret) to uppercase nodejs ENVs (e.g. MY_SECRET).