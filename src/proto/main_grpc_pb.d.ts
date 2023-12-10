// package: 
// file: proto/main.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_main_pb from "../proto/main_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IShopServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTask: IShopServiceService_ICreateTask;
    appendLog: IShopServiceService_IAppendLog;
    endTask: IShopServiceService_IEndTask;
}

interface IShopServiceService_ICreateTask extends grpc.MethodDefinition<proto_main_pb.CreateTaskRequest, proto_main_pb.CreateTaskResponse> {
    path: "/ShopService/CreateTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_main_pb.CreateTaskRequest>;
    requestDeserialize: grpc.deserialize<proto_main_pb.CreateTaskRequest>;
    responseSerialize: grpc.serialize<proto_main_pb.CreateTaskResponse>;
    responseDeserialize: grpc.deserialize<proto_main_pb.CreateTaskResponse>;
}
interface IShopServiceService_IAppendLog extends grpc.MethodDefinition<proto_main_pb.AppendLogRequest, proto_main_pb.AppendLogResponse> {
    path: "/ShopService/AppendLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_main_pb.AppendLogRequest>;
    requestDeserialize: grpc.deserialize<proto_main_pb.AppendLogRequest>;
    responseSerialize: grpc.serialize<proto_main_pb.AppendLogResponse>;
    responseDeserialize: grpc.deserialize<proto_main_pb.AppendLogResponse>;
}
interface IShopServiceService_IEndTask extends grpc.MethodDefinition<proto_main_pb.EndTaskRequest, proto_main_pb.EndTaskResponse> {
    path: "/ShopService/EndTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_main_pb.EndTaskRequest>;
    requestDeserialize: grpc.deserialize<proto_main_pb.EndTaskRequest>;
    responseSerialize: grpc.serialize<proto_main_pb.EndTaskResponse>;
    responseDeserialize: grpc.deserialize<proto_main_pb.EndTaskResponse>;
}

export const ShopServiceService: IShopServiceService;

export interface IShopServiceServer {
    createTask: grpc.handleUnaryCall<proto_main_pb.CreateTaskRequest, proto_main_pb.CreateTaskResponse>;
    appendLog: grpc.handleUnaryCall<proto_main_pb.AppendLogRequest, proto_main_pb.AppendLogResponse>;
    endTask: grpc.handleUnaryCall<proto_main_pb.EndTaskRequest, proto_main_pb.EndTaskResponse>;
}

export interface IShopServiceClient {
    createTask(request: proto_main_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: proto_main_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    createTask(request: proto_main_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_main_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    createTask(request: proto_main_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_main_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    appendLog(request: proto_main_pb.AppendLogRequest, callback: (error: grpc.ServiceError | null, response: proto_main_pb.AppendLogResponse) => void): grpc.ClientUnaryCall;
    appendLog(request: proto_main_pb.AppendLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_main_pb.AppendLogResponse) => void): grpc.ClientUnaryCall;
    appendLog(request: proto_main_pb.AppendLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_main_pb.AppendLogResponse) => void): grpc.ClientUnaryCall;
    endTask(request: proto_main_pb.EndTaskRequest, callback: (error: grpc.ServiceError | null, response: proto_main_pb.EndTaskResponse) => void): grpc.ClientUnaryCall;
    endTask(request: proto_main_pb.EndTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_main_pb.EndTaskResponse) => void): grpc.ClientUnaryCall;
    endTask(request: proto_main_pb.EndTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_main_pb.EndTaskResponse) => void): grpc.ClientUnaryCall;
}

export class ShopServiceClient extends grpc.Client implements IShopServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createTask(request: proto_main_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: proto_main_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    public createTask(request: proto_main_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_main_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    public createTask(request: proto_main_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_main_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    public appendLog(request: proto_main_pb.AppendLogRequest, callback: (error: grpc.ServiceError | null, response: proto_main_pb.AppendLogResponse) => void): grpc.ClientUnaryCall;
    public appendLog(request: proto_main_pb.AppendLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_main_pb.AppendLogResponse) => void): grpc.ClientUnaryCall;
    public appendLog(request: proto_main_pb.AppendLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_main_pb.AppendLogResponse) => void): grpc.ClientUnaryCall;
    public endTask(request: proto_main_pb.EndTaskRequest, callback: (error: grpc.ServiceError | null, response: proto_main_pb.EndTaskResponse) => void): grpc.ClientUnaryCall;
    public endTask(request: proto_main_pb.EndTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_main_pb.EndTaskResponse) => void): grpc.ClientUnaryCall;
    public endTask(request: proto_main_pb.EndTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_main_pb.EndTaskResponse) => void): grpc.ClientUnaryCall;
}
