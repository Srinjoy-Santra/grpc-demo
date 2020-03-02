/**
 * @fileoverview gRPC-Web generated client stub for movieDetails
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */

const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.movieDetails = require('./sample_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.movieDetails.MovieDetailServiceClient =
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
proto.movieDetails.MovieDetailServicePromiseClient =
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
 *   !proto.movieDetails.MovieRequest,
 *   !proto.movieDetails.MovieResponse>}
 */
const methodDescriptor_MovieDetailService_getDetails = new grpc.web.MethodDescriptor(
  '/movieDetails.MovieDetailService/getDetails',
  grpc.web.MethodType.UNARY,
  proto.movieDetails.MovieRequest,
  proto.movieDetails.MovieResponse,
  /**
   * @param {!proto.movieDetails.MovieRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.movieDetails.MovieResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.movieDetails.MovieRequest,
 *   !proto.movieDetails.MovieResponse>}
 */
const methodInfo_MovieDetailService_getDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.movieDetails.MovieResponse,
  /**
   * @param {!proto.movieDetails.MovieRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.movieDetails.MovieResponse.deserializeBinary
);


/**
 * @param {!proto.movieDetails.MovieRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.movieDetails.MovieResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.movieDetails.MovieResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.movieDetails.MovieDetailServiceClient.prototype.getDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/movieDetails.MovieDetailService/getDetails',
      request,
      metadata || {},
      methodDescriptor_MovieDetailService_getDetails,
      callback);
};


/**
 * @param {!proto.movieDetails.MovieRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.movieDetails.MovieResponse>}
 *     A native promise that resolves to the response
 */
proto.movieDetails.MovieDetailServicePromiseClient.prototype.getDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/movieDetails.MovieDetailService/getDetails',
      request,
      metadata || {},
      methodDescriptor_MovieDetailService_getDetails);
};


module.exports = proto.movieDetails;

