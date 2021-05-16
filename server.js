// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.post("/", async function (request, reply) {
  let res = {};
  res.Codigo = "01";
  res.Descripcion = "Todo ok";
  return res;
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
