// Inclusão dos pacotes.
import Express from "express";
import cors from "cors";

// ----------------- Servidor e rotas --------------------
// Instancia o express.
const app = Express();

// Definição da interface de rede.
const port = 3000;

// Definição das aplicações externas que podem acessar a API.
const corsOptions = {
  origin: "http://127.0.0.1:5500",
  optionsSuccessStatus: 200, // Para legacy browsers (IE11, várias SmartsTVs)
};

// Aplica cors a todas as rotas.
app.use(cors(corsOptions));

// Serviço oferecido no endereço raiz.
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/button=0", (request, response) => {
  console.log("button_0");
  return response.status(200).json("opa");
});

app.get("/button=key_1", (request, response) => {
  setTimeout(() => {
    console.log("button_1");
    return response.status(200).json("opa");
  }, 1000);
});

app.get("/button=key_2", (request, response) => {
  console.log("button_2");
  return response.status(200).json("opa");
});

app.get("/button=key_3", (request, response) => {
  console.log("button_3");
  return response.status(200).json("opa");
});

app.get("/button=key_w", (request, response) => {
  console.log("button_4");
  return response.status(200).json("opa");
});

app.get("/button=key_a", (request, response) => {
  console.log("button_5");
  return response.status(200).json("opa");
});

app.get("/button=key_d", (request, response) => {
  console.log("button_6");
  return response.status(200).json("opa");
});

app.get("/button=key_s", (request, response) => {
  console.log("button_7");
  return response.status(200).json("opa");
});

app.get("/button=key_i", (request, response) => {
  console.log("button_8");
  return response.status(200).json("opa");
});

app.get("/button=key_7", (request, response) => {
  console.log("button_9");
  return response.status(200).json("opa");
});

app.get("/button=key_5", (request, response) => {
  console.log("button_10");
  return response.status(200).json("opa");
});

app.get("/button=key_k", (request, response) => {
  console.log("button_11");
  return response.status(200).json("opa");
});

app.get("/button=key_8", (request, response) => {
  console.log("button_12");
  return response.status(200).json("opa");
});

app.get("/button=key_6", (request, response) => {
  console.log("button_13");
  return response.status(200).json("opa");
});

// Alteração no servidor em 18:46 do vídeo.

app.get("/button=key_1", (request, response) => {
  setTimeout(() => {
    console.log("button_1");
    return response.status(200).json("opa");
  }, 1000);
});

app.get("/button=key_2", (request, response) => {
  console.log("button_2");
  return response.status(200).json("opa");
});

app.get("/button=key_3", (request, response) => {
  console.log("button_3");
  return response.status(200).json("opa");
});

app.get("/button=key_w", (request, response) => {
  console.log("button_w");
  return response.status(200).json("opa");
});

app.get("/button=key_a", (request, response) => {
  console.log("button_a");
  return response.status(200).json("opa");
});

app.get("/button=key_d", (request, response) => {
  console.log("button_d");
  return response.status(200).json("opa");
});

app.get("/button=key_s", (request, response) => {
  console.log("button_s");
  return response.status(200).json("opa");
});

app.get("/button=key_i", (request, response) => {
  console.log("button_i");
  return response.status(200).json("opa");
});

app.get("/button=key_7", (request, response) => {
  console.log("button_7");
  return response.status(200).json("opa");
});

app.get("/button=key_5", (request, response) => {
  console.log("button_5");
  return response.status(200).json("opa");
});

app.get("/button=key_k", (request, response) => {
  console.log("button_k");
  return response.status(200).json("opa");
});

app.get("/button=key_8", (request, response) => {
  console.log("button_8");
  return response.status(200).json("opa");
});

app.get("/button=key_6", (request, response) => {
  console.log("button_6");
  return response.status(200).json("opa");
});

app.get("/speed/:value", (request, response) => {
  console.log("speed - ", request.params.value);
  return response.status(200).json("opa");
});

// Escuta solicitações e serve a aplicação Node.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
