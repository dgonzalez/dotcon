import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

fastify.get('/hello-world', async (request, reply) => {
  reply.send('It works!');
})

await fastify.listen({host: '0.0.0.0', port: 3000});
