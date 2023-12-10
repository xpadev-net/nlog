import { Server, ServerCredentials } from "@grpc/grpc-js";
import { LoggingServiceService } from "~/proto/main_grpc_pb";
import { getServerImplement } from "~/server/grpc/handler";

const globalForGrpc = globalThis as unknown as {
  grpcInited: boolean | undefined;
};

export const startServer = () => {
  if (globalForGrpc.grpcInited) {
    return;
  }
  globalForGrpc.grpcInited = true;
  // サーバインスタンスを生成
  const server = new Server();

  // APIのハンドラを紐づける
  server.addService(LoggingServiceService, getServerImplement());

  server.bindAsync(
    // http://localhost:9000 でアクセスできる様にする
    "0.0.0.0:9000",
    // SSLを利用しない場合の設定
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error);
        return;
      }

      // サーバを起動する
      server.start();
      console.log(`server start, port: ${port}`);
    },
  );
};
