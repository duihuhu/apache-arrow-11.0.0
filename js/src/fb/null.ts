// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

/**
 * These are stored in the flatbuffer in the Type union below
 */
export class Null {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):Null {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsNull(bb:flatbuffers.ByteBuffer, obj?:Null):Null {
  return (obj || new Null()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsNull(bb:flatbuffers.ByteBuffer, obj?:Null):Null {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Null()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startNull(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endNull(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createNull(builder:flatbuffers.Builder):flatbuffers.Offset {
  Null.startNull(builder);
  return Null.endNull(builder);
}
}
