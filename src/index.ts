import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { schema } from './schema';

const SERVER_PORT = 3000;

export const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(SERVER_PORT).then(({ url }) => {
  console.log(`  🚀 Server started at ${url}  `);
})
