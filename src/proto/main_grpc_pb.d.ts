// package: 
// file: proto/main.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_main_pb from "../proto/main_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ILoggingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTask: ILoggingServiceService_ICreateTask;
    appendLog: ILoggingServiceService_IAppendLog;
    endTask: ILoggingServiceService_IEndTask;
}

interface ILoggingServiceService_ICreateTask extends grpc.MethodDefinition<proto_main_pb.CreateTaskRequest, proto_main_pb.CreateTaskResponse> {
    path: "/LoggingService/CreateTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_main_pb.CreateTaskRequest>;
    requestDeserialize: grpc.deserialize<proto_main_pb.CreateTaskRequest>;
    responseSerialize: grpc.serialize<proto_main_pb.CreateTaskResponse>;
    responseDeserialize: grpc.deserialize<proto_main_pb.CreateTaskResponse>;
}
interface ILoggingServiceService_IAppendLog extends grpc.MethodDefinition<proto_main_pb.AppendLogRequest, proto_main_pb.AppendLogResponse> {
    path: "/LoggingService/AppendLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_main_pb.AppendLogRequest>;
    requestDeserialize: grpc.deserialize<proto_main_pb.AppendLogRequest>;
    responseSerialize: grpc.serialize<proto_main_pb.AppendLogResponse>;
    responseDeserialize: grpc.deserialize<proto_main_pb.AppendLogResponse>;
}
interface ILoggingServiceService_IEndTask extends grpc.MethodDefinition<proto_main_pb.EndTaskRequest, proto_main_pb.EndTaskResponse> {
    path: "/LoggingService/EndTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_main_pb.EndTaskRequest>;
    requestDeserialize: grpc.deserialize<proto_main_pb.EndTaskRequest>;
    responseSerialize: grpc.serialize<proto_main_pb.EndTaskResponse>;
    responseDeserialize: grpc.deserialize<proto_main_pb.EndTaskResponse>;
}

export const LoggingServiceService: ILoggingServiceService;

export interface ILoggingServiceServer {
    createTask: grpc.handleUnaryCall<proto_main_pb.CreateTaskRequest, proto_main_pb.CreateTaskResponse>;
    appendLog: grpc.handleUnaryCall<proto_main_pb.AppendLogRequest, proto_main_pb.AppendLogResponse>;
    endTask: grpc.handleUnaryCall<proto_main_pb.EndTaskRequest, proto_main_pb.EndTaskResponse>;
}

export interface ILoggingServiceClient {
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

export class LoggingServiceClient extends grpc.Client implements ILoggingServiceClient {
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
