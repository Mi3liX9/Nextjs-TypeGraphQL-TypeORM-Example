import {
  ConnectionOptions,
  ConnectionManager,
  Repository,
  Connection,
} from "typeorm";
import { options } from "./database-options";

export function useConnection(options: ConnectionOptions) {
  const name = options.name ?? "default";

  const connectionManager = new ConnectionManager();
  const isAvailable = connectionManager.has(name);

  if (!isAvailable) {
    return connectionManager.create(options);
  }
  return connectionManager.get(name);
}

export async function useRepository<T>(
  target: string
): Promise<[Repository<T>, Connection]> {
  const database = useConnection(options);
  const connectedDatabase = await database.connect();
  const reposetory = connectedDatabase.getRepository<T>(target);
  return [reposetory, database];
}

// export async function connectDatabase(options: ConnectionOptions) {
//   const connection = getConnectionOrCreate(options);
//   if (!connection.isConnected) {
//     await connection.connect();
//     console.info("ready - database is ready to use");
//   }
//   return connection;
// }
