// package: 
// file: proto/main.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Log extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): void;

  getType(): Log.LogTypeMap[keyof Log.LogTypeMap];
  setType(value: Log.LogTypeMap[keyof Log.LogTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasAt(): boolean;
  clearAt(): void;
  getAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log.AsObject;
  static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log;
  static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
  export type AsObject = {
    taskid: number,
    type: Log.LogTypeMap[keyof Log.LogTypeMap],
    message: string,
    at?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface LogTypeMap {
    STDOUT: 0;
    STDERR: 1;
  }

  export const LogType: LogTypeMap;
}

export class CreateTaskRequest extends jspb.Message {
  getItemid(): number;
  setItemid(value: number): void;

  getIssuer(): string;
  setIssuer(value: string): void;

  getProcessid(): number;
  setProcessid(value: number): void;

  getWorkdir(): string;
  setWorkdir(value: string): void;

  getCommand(): string;
  setCommand(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskRequest): CreateTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskRequest;
  static deserializeBinaryFromReader(message: CreateTaskRequest, reader: jspb.BinaryReader): CreateTaskRequest;
}

export namespace CreateTaskRequest {
  export type AsObject = {
    itemid: number,
    issuer: string,
    processid: number,
    workdir: string,
    command: string,
  }
}

export class CreateTaskResponse extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskResponse): CreateTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskResponse;
  static deserializeBinaryFromReader(message: CreateTaskResponse, reader: jspb.BinaryReader): CreateTaskResponse;
}

export namespace CreateTaskResponse {
  export type AsObject = {
    taskid: number,
  }
}

export class AppendLogRequest extends jspb.Message {
  hasLog(): boolean;
  clearLog(): void;
  getLog(): Log | undefined;
  setLog(value?: Log): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppendLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppendLogRequest): AppendLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppendLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppendLogRequest;
  static deserializeBinaryFromReader(message: AppendLogRequest, reader: jspb.BinaryReader): AppendLogRequest;
}

export namespace AppendLogRequest {
  export type AsObject = {
    log?: Log.AsObject,
  }
}

export class AppendLogResponse extends jspb.Message {
  getLogid(): number;
  setLogid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppendLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AppendLogResponse): AppendLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppendLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppendLogResponse;
  static deserializeBinaryFromReader(message: AppendLogResponse, reader: jspb.BinaryReader): AppendLogResponse;
}

export namespace AppendLogResponse {
  export type AsObject = {
    logid: number,
  }
}

export class EndTaskRequest extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): void;

  getExitcode(): number;
  setExitcode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EndTaskRequest): EndTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndTaskRequest;
  static deserializeBinaryFromReader(message: EndTaskRequest, reader: jspb.BinaryReader): EndTaskRequest;
}

export namespace EndTaskRequest {
  export type AsObject = {
    taskid: number,
    exitcode: number,
  }
}

export class EndTaskResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EndTaskResponse): EndTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndTaskResponse;
  static deserializeBinaryFromReader(message: EndTaskResponse, reader: jspb.BinaryReader): EndTaskResponse;
}

export namespace EndTaskResponse {
  export type AsObject = {
  }
}

export class PingRequest extends jspb.Message {
  getTaskid(): number;
  setTaskid(value: number): void;

  hasAt(): boolean;
  clearAt(): void;
  getAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    taskid: number,
    at?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
  }
}

