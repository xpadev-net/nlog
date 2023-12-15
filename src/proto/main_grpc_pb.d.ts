// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: proto/main.proto

import * as proto_main_pb from "../proto/main_pb";
import * as grpc from "@grpc/grpc-js";

interface ILoggingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createTask: grpc.MethodDefinition<proto_main_pb.CreateTaskRequest, proto_main_pb.CreateTaskResponse>;
  appendLog: grpc.MethodDefinition<proto_main_pb.AppendLogRequest, proto_main_pb.AppendLogResponse>;
  endTask: grpc.MethodDefinition<proto_main_pb.EndTaskRequest, proto_main_pb.EndTaskResponse>;
  ping: grpc.MethodDefinition<proto_main_pb.PingRequest, proto_main_pb.PingResponse>;
}

export const LoggingServiceService: ILoggingServiceService;

export interface ILoggingServiceServer extends grpc.UntypedServiceImplementation {
  createTask: grpc.handleUnaryCall<proto_main_pb.CreateTaskRequest, proto_main_pb.CreateTaskResponse>;
  appendLog: grpc.handleUnaryCall<proto_main_pb.AppendLogRequest, proto_main_pb.AppendLogResponse>;
  endTask: grpc.handleUnaryCall<proto_main_pb.EndTaskRequest, proto_main_pb.EndTaskResponse>;
  ping: grpc.handleUnaryCall<proto_main_pb.PingRequest, proto_main_pb.PingResponse>;
}

export class LoggingServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createTask(argument: proto_main_pb.CreateTaskRequest, callback: grpc.requestCallback<proto_main_pb.CreateTaskResponse>): grpc.ClientUnaryCall;
  createTask(argument: proto_main_pb.CreateTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_main_pb.CreateTaskResponse>): grpc.ClientUnaryCall;
  createTask(argument: proto_main_pb.CreateTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_main_pb.CreateTaskResponse>): grpc.ClientUnaryCall;
  appendLog(argument: proto_main_pb.AppendLogRequest, callback: grpc.requestCallback<proto_main_pb.AppendLogResponse>): grpc.ClientUnaryCall;
  appendLog(argument: proto_main_pb.AppendLogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_main_pb.AppendLogResponse>): grpc.ClientUnaryCall;
  appendLog(argument: proto_main_pb.AppendLogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_main_pb.AppendLogResponse>): grpc.ClientUnaryCall;
  endTask(argument: proto_main_pb.EndTaskRequest, callback: grpc.requestCallback<proto_main_pb.EndTaskResponse>): grpc.ClientUnaryCall;
  endTask(argument: proto_main_pb.EndTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_main_pb.EndTaskResponse>): grpc.ClientUnaryCall;
  endTask(argument: proto_main_pb.EndTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_main_pb.EndTaskResponse>): grpc.ClientUnaryCall;
  ping(argument: proto_main_pb.PingRequest, callback: grpc.requestCallback<proto_main_pb.PingResponse>): grpc.ClientUnaryCall;
  ping(argument: proto_main_pb.PingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_main_pb.PingResponse>): grpc.ClientUnaryCall;
  ping(argument: proto_main_pb.PingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_main_pb.PingResponse>): grpc.ClientUnaryCall;
}
