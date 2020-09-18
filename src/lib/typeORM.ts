import { ConnectionOptions, getConnectionManager } from "typeorm";

function getConnectionOrCreate(options: ConnectionOptions) {
  const name = options.name ?? "default";

  const connectionManager = getConnectionManager();
  const isAvailable = connectionManager.has(name);

  if (!isAvailable) {
    return connectionManager.create(options);
  }
  return connectionManager.get(name);
}

export async function connectDatabase(options: ConnectionOptions) {
  const connection = getConnectionOrCreate(options);
  if (!connection.isConnected) {
    await connection.connect();
  }
  return connection;
}
