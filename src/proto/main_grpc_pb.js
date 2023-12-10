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


var ShopServiceService = exports.ShopServiceService = {
  createTask: {
    path: '/ShopService/CreateTask',
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
    path: '/ShopService/AppendLog',
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
    path: '/ShopService/EndTask',
    requestStream: false,
    responseStream: false,
    requestType: proto_main_pb.EndTaskRequest,
    responseType: proto_main_pb.EndTaskResponse,
    requestSerialize: serialize_EndTaskRequest,
    requestDeserialize: deserialize_EndTaskRequest,
    responseSerialize: serialize_EndTaskResponse,
    responseDeserialize: deserialize_EndTaskResponse,
  },
};

exports.ShopServiceClient = grpc.makeGenericClientConstructor(ShopServiceService);
