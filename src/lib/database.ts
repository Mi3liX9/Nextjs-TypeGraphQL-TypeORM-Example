import { ConnectionOptions, ConnectionManager } from "typeorm";
import { options } from "./database-options";

function setupConnection(options: ConnectionOptions) {
  const name = options.name ?? "default";

  const connectionManager = new ConnectionManager();
  const isAvailable = connectionManager.has(name);

  if (!isAvailable) {
    return connectionManager.create(options);
  }
  return connectionManager.get(name);
}

export function database() {
  return setupConnection(options);
}

// export async function connectDatabase(options: ConnectionOptions) {
//   const connection = getConnectionOrCreate(options);
//   if (!connection.isConnected) {
//     await connection.connect();
//     console.info("ready - database is ready to use");
//   }
//   return connection;
// }
