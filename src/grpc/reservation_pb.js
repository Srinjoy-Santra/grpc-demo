// source: reservation.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var googleapis_google_api_annotations_pb = require('./googleapis/google/api/annotations_pb.js');
goog.object.extend(proto, googleapis_google_api_annotations_pb);
goog.exportSymbol('proto.reservation.CreateReservationRequest', null, global);
goog.exportSymbol('proto.reservation.CreateReservationResponse', null, global);
goog.exportSymbol('proto.reservation.Person', null, global);
goog.exportSymbol('proto.reservation.Reservation', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.reservation.Reservation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.reservation.Reservation.repeatedFields_, null);
};
goog.inherits(proto.reservation.Reservation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reservation.Reservation.displayName = 'proto.reservation.Reservation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.reservation.Person = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reservation.Person, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reservation.Person.displayName = 'proto.reservation.Person';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.reservation.CreateReservationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reservation.CreateReservationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reservation.CreateReservationRequest.displayName = 'proto.reservation.CreateReservationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.reservation.CreateReservationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reservation.CreateReservationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reservation.CreateReservationResponse.displayName = 'proto.reservation.CreateReservationResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.reservation.Reservation.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.reservation.Reservation.prototype.toObject = function(opt_includeInstance) {
  return proto.reservation.Reservation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reservation.Reservation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reservation.Reservation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    venue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    room: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, ""),
    attendeesList: jspb.Message.toObjectList(msg.getAttendeesList(),
    proto.reservation.Person.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.reservation.Reservation}
 */
proto.reservation.Reservation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reservation.Reservation;
  return proto.reservation.Reservation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reservation.Reservation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reservation.Reservation}
 */
proto.reservation.Reservation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVenue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = new proto.reservation.Person;
      reader.readMessage(value,proto.reservation.Person.deserializeBinaryFromReader);
      msg.addAttendees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.reservation.Reservation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reservation.Reservation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reservation.Reservation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reservation.Reservation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVenue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRoom();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAttendeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.reservation.Person.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.reservation.Reservation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.reservation.Reservation} returns this
 */
proto.reservation.Reservation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.reservation.Reservation.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.reservation.Reservation} returns this
 */
proto.reservation.Reservation.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string venue = 3;
 * @return {string}
 */
proto.reservation.Reservation.prototype.getVenue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.reservation.Reservation} returns this
 */
proto.reservation.Reservation.prototype.setVenue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string room = 4;
 * @return {string}
 */
proto.reservation.Reservation.prototype.getRoom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.reservation.Reservation} returns this
 */
proto.reservation.Reservation.prototype.setRoom = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string timestamp = 5;
 * @return {string}
 */
proto.reservation.Reservation.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.reservation.Reservation} returns this
 */
proto.reservation.Reservation.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Person attendees = 6;
 * @return {!Array<!proto.reservation.Person>}
 */
proto.reservation.Reservation.prototype.getAttendeesList = function() {
  return /** @type{!Array<!proto.reservation.Person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.reservation.Person, 6));
};


/**
 * @param {!Array<!proto.reservation.Person>} value
 * @return {!proto.reservation.Reservation} returns this
*/
proto.reservation.Reservation.prototype.setAttendeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.reservation.Person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.reservation.Person}
 */
proto.reservation.Reservation.prototype.addAttendees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.reservation.Person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.reservation.Reservation} returns this
 */
proto.reservation.Reservation.prototype.clearAttendeesList = function() {
  return this.setAttendeesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.reservation.Person.prototype.toObject = function(opt_includeInstance) {
  return proto.reservation.Person.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reservation.Person} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reservation.Person.toObject = function(includeInstance, msg) {
  var f, obj = {
    ssn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.reservation.Person}
 */
proto.reservation.Person.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reservation.Person;
  return proto.reservation.Person.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reservation.Person} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reservation.Person}
 */
proto.reservation.Person.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSsn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.reservation.Person.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reservation.Person.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reservation.Person} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reservation.Person.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSsn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string ssn = 1;
 * @return {string}
 */
proto.reservation.Person.prototype.getSsn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.reservation.Person} returns this
 */
proto.reservation.Person.prototype.setSsn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string firstName = 2;
 * @return {string}
 */
proto.reservation.Person.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.reservation.Person} returns this
 */
proto.reservation.Person.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string lastName = 3;
 * @return {string}
 */
proto.reservation.Person.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.reservation.Person} returns this
 */
proto.reservation.Person.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.reservation.CreateReservationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.reservation.CreateReservationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reservation.CreateReservationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reservation.CreateReservationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reservation: (f = msg.getReservation()) && proto.reservation.Reservation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.reservation.CreateReservationRequest}
 */
proto.reservation.CreateReservationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reservation.CreateReservationRequest;
  return proto.reservation.CreateReservationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reservation.CreateReservationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reservation.CreateReservationRequest}
 */
proto.reservation.CreateReservationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.reservation.Reservation;
      reader.readMessage(value,proto.reservation.Reservation.deserializeBinaryFromReader);
      msg.setReservation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.reservation.CreateReservationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reservation.CreateReservationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reservation.CreateReservationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reservation.CreateReservationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReservation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.reservation.Reservation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Reservation reservation = 2;
 * @return {?proto.reservation.Reservation}
 */
proto.reservation.CreateReservationRequest.prototype.getReservation = function() {
  return /** @type{?proto.reservation.Reservation} */ (
    jspb.Message.getWrapperField(this, proto.reservation.Reservation, 2));
};


/**
 * @param {?proto.reservation.Reservation|undefined} value
 * @return {!proto.reservation.CreateReservationRequest} returns this
*/
proto.reservation.CreateReservationRequest.prototype.setReservation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reservation.CreateReservationRequest} returns this
 */
proto.reservation.CreateReservationRequest.prototype.clearReservation = function() {
  return this.setReservation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reservation.CreateReservationRequest.prototype.hasReservation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.reservation.CreateReservationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.reservation.CreateReservationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reservation.CreateReservationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reservation.CreateReservationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reservation: (f = msg.getReservation()) && proto.reservation.Reservation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.reservation.CreateReservationResponse}
 */
proto.reservation.CreateReservationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reservation.CreateReservationResponse;
  return proto.reservation.CreateReservationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reservation.CreateReservationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reservation.CreateReservationResponse}
 */
proto.reservation.CreateReservationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.reservation.Reservation;
      reader.readMessage(value,proto.reservation.Reservation.deserializeBinaryFromReader);
      msg.setReservation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.reservation.CreateReservationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reservation.CreateReservationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reservation.CreateReservationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reservation.CreateReservationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReservation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.reservation.Reservation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Reservation reservation = 1;
 * @return {?proto.reservation.Reservation}
 */
proto.reservation.CreateReservationResponse.prototype.getReservation = function() {
  return /** @type{?proto.reservation.Reservation} */ (
    jspb.Message.getWrapperField(this, proto.reservation.Reservation, 1));
};


/**
 * @param {?proto.reservation.Reservation|undefined} value
 * @return {!proto.reservation.CreateReservationResponse} returns this
*/
proto.reservation.CreateReservationResponse.prototype.setReservation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reservation.CreateReservationResponse} returns this
 */
proto.reservation.CreateReservationResponse.prototype.clearReservation = function() {
  return this.setReservation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reservation.CreateReservationResponse.prototype.hasReservation = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.reservation);