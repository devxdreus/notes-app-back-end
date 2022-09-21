const Hapi = require('@hapi/hapi');
const notesPlugin = require('./notesPlugin');

const init = async () => {
  const server = Hapi.server();

  // Registrasi plugin
  await server.register({
    plugin: notesPlugin,
    options: { notes: [] },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
