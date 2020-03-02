/**
 * @fileoverview gRPC-Web generated client stub for reservation
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var googleapis_google_api_annotations_pb = require('./googleapis/google/api/annotations_pb.js')
const proto = {};
proto.reservation = require('./reservation_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reservation.ReservationServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.reservation.ReservationServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.reservation.CreateReservationRequest,
 *   !proto.reservation.Reservation>}
 */
const methodDescriptor_ReservationService_CreateReservation = new grpc.web.MethodDescriptor(
  '/reservation.ReservationService/CreateReservation',
  grpc.web.MethodType.UNARY,
  proto.reservation.CreateReservationRequest,
  proto.reservation.Reservation,
  /**
   * @param {!proto.reservation.CreateReservationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reservation.Reservation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.reservation.CreateReservationRequest,
 *   !proto.reservation.Reservation>}
 */
const methodInfo_ReservationService_CreateReservation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.reservation.Reservation,
  /**
   * @param {!proto.reservation.CreateReservationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.reservation.Reservation.deserializeBinary
);


/**
 * @param {!proto.reservation.CreateReservationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.reservation.Reservation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.reservation.Reservation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.reservation.ReservationServiceClient.prototype.createReservation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/reservation.ReservationService/CreateReservation',
      request,
      metadata || {},
      methodDescriptor_ReservationService_CreateReservation,
      callback);
};


/**
 * @param {!proto.reservation.CreateReservationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.reservation.Reservation>}
 *     A native promise that resolves to the response
 */
proto.reservation.ReservationServicePromiseClient.prototype.createReservation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/reservation.ReservationService/CreateReservation',
      request,
      metadata || {},
      methodDescriptor_ReservationService_CreateReservation);
};


module.exports = proto.reservation;

