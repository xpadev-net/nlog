// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_main_pb = require('../proto/main_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_AppendLogRequest(arg) {
  if (!(arg instanceof proto_main_pb.AppendLogRequest)) {
    throw new Error('Expected argument of type AppendLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AppendLogRequest(buffer_arg) {
  return proto_main_pb.AppendLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AppendLogResponse(arg) {
  if (!(arg instanceof proto_main_pb.AppendLogResponse)) {
    throw new Error('Expected argument of type AppendLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AppendLogResponse(buffer_arg) {
  return proto_main_pb.AppendLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateTaskRequest(arg) {
  if (!(arg instanceof proto_main_pb.CreateTaskRequest)) {
    throw new Error('Expected argument of type CreateTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateTaskRequest(buffer_arg) {
  return proto_main_pb.CreateTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateTaskResponse(arg) {
  if (!(arg instanceof proto_main_pb.CreateTaskResponse)) {
    throw new Error('Expected argument of type CreateTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateTaskResponse(buffer_arg) {
  return proto_main_pb.CreateTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EndTaskRequest(arg) {
  if (!(arg instanceof proto_main_pb.EndTaskRequest)) {
    throw new Error('Expected argument of type EndTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_EndTaskRequest(buffer_arg) {
  return proto_main_pb.EndTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EndTaskResponse(arg) {
  if (!(arg instanceof proto_main_pb.EndTaskResponse)) {
    throw new Error('Expected argument of type EndTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_EndTaskResponse(buffer_arg) {
  return proto_main_pb.EndTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PingRequest(arg) {
  if (!(arg instanceof proto_main_pb.PingRequest)) {
    throw new Error('Expected argument of type PingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PingRequest(buffer_arg) {
  return proto_main_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PingResponse(arg) {
  if (!(arg instanceof proto_main_pb.PingResponse)) {
    throw new Error('Expected argument of type PingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PingResponse(buffer_arg) {
  return proto_main_pb.PingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LoggingServiceService = exports.LoggingServiceService = {
  createTask: {
    path: '/LoggingService/CreateTask',
    requestStream: false,
    responseStream: false,
    requestType: proto_main_pb.CreateTaskRequest,
    responseType: proto_main_pb.CreateTaskResponse,
    requestSerialize: serialize_CreateTaskRequest,
    requestDeserialize: deserialize_CreateTaskRequest,
    responseSerialize: serialize_CreateTaskResponse,
    responseDeserialize: deserialize_CreateTaskResponse,
  },
  appendLog: {
    path: '/LoggingService/AppendLog',
    requestStream: false,
    responseStream: false,
    requestType: proto_main_pb.AppendLogRequest,
    responseType: proto_main_pb.AppendLogResponse,
    requestSerialize: serialize_AppendLogRequest,
    requestDeserialize: deserialize_AppendLogRequest,
    responseSerialize: serialize_AppendLogResponse,
    responseDeserialize: deserialize_AppendLogResponse,
  },
  endTask: {
    path: '/LoggingService/EndTask',
    requestStream: false,
    responseStream: false,
    requestType: proto_main_pb.EndTaskRequest,
    responseType: proto_main_pb.EndTaskResponse,
    requestSerialize: serialize_EndTaskRequest,
    requestDeserialize: deserialize_EndTaskRequest,
    responseSerialize: serialize_EndTaskResponse,
    responseDeserialize: deserialize_EndTaskResponse,
  },
  ping: {
    path: '/LoggingService/Ping',
    requestStream: false,
    responseStream: false,
    requestType: proto_main_pb.PingRequest,
    responseType: proto_main_pb.PingResponse,
    requestSerialize: serialize_PingRequest,
    requestDeserialize: deserialize_PingRequest,
    responseSerialize: serialize_PingResponse,
    responseDeserialize: deserialize_PingResponse,
  },
};

exports.LoggingServiceClient = grpc.makeGenericClientConstructor(LoggingServiceService);
