import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { schema } from "./schema.js";
import { expressMiddleware } from "@apollo/server/express4";

export function buildGraphQLServer(httpServer) {
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/gql",
  });

  const serverCleanUp = useServer({ schema }, wsServer);

  const server = new ApolloServer({
    schema,
    plugins: [
      // Http serverda xatolik bo'lsa serverni to'xtatish uchun plugin
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        // Ws serverda xatolik bo'lsa serverni to'xtatish uchun sozlama
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanUp.dispose();
            },
          };
        },
      },
    ],
  });

  const serverMiddleware = () => expressMiddleware(server);

  return { server, serverMiddleware };
}
