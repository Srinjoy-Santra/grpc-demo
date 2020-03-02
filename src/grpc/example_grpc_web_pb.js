/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = require('./example_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.ProductServiceClient =
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
proto.proto.ProductServicePromiseClient =
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
 *   !proto.proto.ProductRequest,
 *   !proto.proto.Products>}
 */
const methodDescriptor_ProductService_Get = new grpc.web.MethodDescriptor(
  '/proto.ProductService/Get',
  grpc.web.MethodType.UNARY,
  proto.proto.ProductRequest,
  proto.proto.Products,
  /**
   * @param {!proto.proto.ProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Products.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ProductRequest,
 *   !proto.proto.Products>}
 */
const methodInfo_ProductService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.Products,
  /**
   * @param {!proto.proto.ProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Products.deserializeBinary
);


/**
 * @param {!proto.proto.ProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Products)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Products>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ProductServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ProductService/Get',
      request,
      metadata || {},
      methodDescriptor_ProductService_Get,
      callback);
};


/**
 * @param {!proto.proto.ProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Products>}
 *     A native promise that resolves to the response
 */
proto.proto.ProductServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ProductService/Get',
      request,
      metadata || {},
      methodDescriptor_ProductService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ProductRequest,
 *   !proto.proto.Product>}
 */
const methodDescriptor_ProductService_GetOne = new grpc.web.MethodDescriptor(
  '/proto.ProductService/GetOne',
  grpc.web.MethodType.UNARY,
  proto.proto.ProductRequest,
  proto.proto.Product,
  /**
   * @param {!proto.proto.ProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ProductRequest,
 *   !proto.proto.Product>}
 */
const methodInfo_ProductService_GetOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.Product,
  /**
   * @param {!proto.proto.ProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Product.deserializeBinary
);


/**
 * @param {!proto.proto.ProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ProductServiceClient.prototype.getOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ProductService/GetOne',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetOne,
      callback);
};


/**
 * @param {!proto.proto.ProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Product>}
 *     A native promise that resolves to the response
 */
proto.proto.ProductServicePromiseClient.prototype.getOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ProductService/GetOne',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ProductUpdateRequest,
 *   !proto.proto.UpdateProductQuantityRes>}
 */
const methodDescriptor_ProductService_UpdateQuantity = new grpc.web.MethodDescriptor(
  '/proto.ProductService/UpdateQuantity',
  grpc.web.MethodType.UNARY,
  proto.proto.ProductUpdateRequest,
  proto.proto.UpdateProductQuantityRes,
  /**
   * @param {!proto.proto.ProductUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateProductQuantityRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ProductUpdateRequest,
 *   !proto.proto.UpdateProductQuantityRes>}
 */
const methodInfo_ProductService_UpdateQuantity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.UpdateProductQuantityRes,
  /**
   * @param {!proto.proto.ProductUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateProductQuantityRes.deserializeBinary
);


/**
 * @param {!proto.proto.ProductUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.UpdateProductQuantityRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UpdateProductQuantityRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ProductServiceClient.prototype.updateQuantity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ProductService/UpdateQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_UpdateQuantity,
      callback);
};


/**
 * @param {!proto.proto.ProductUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UpdateProductQuantityRes>}
 *     A native promise that resolves to the response
 */
proto.proto.ProductServicePromiseClient.prototype.updateQuantity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ProductService/UpdateQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_UpdateQuantity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.Product,
 *   !proto.proto.Product>}
 */
const methodDescriptor_ProductService_Insert = new grpc.web.MethodDescriptor(
  '/proto.ProductService/Insert',
  grpc.web.MethodType.UNARY,
  proto.proto.Product,
  proto.proto.Product,
  /**
   * @param {!proto.proto.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.Product,
 *   !proto.proto.Product>}
 */
const methodInfo_ProductService_Insert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.Product,
  /**
   * @param {!proto.proto.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Product.deserializeBinary
);


/**
 * @param {!proto.proto.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ProductServiceClient.prototype.insert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ProductService/Insert',
      request,
      metadata || {},
      methodDescriptor_ProductService_Insert,
      callback);
};


/**
 * @param {!proto.proto.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Product>}
 *     A native promise that resolves to the response
 */
proto.proto.ProductServicePromiseClient.prototype.insert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ProductService/Insert',
      request,
      metadata || {},
      methodDescriptor_ProductService_Insert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ProductUpdateRequest,
 *   !proto.proto.Product>}
 */
const methodDescriptor_ProductService_Update = new grpc.web.MethodDescriptor(
  '/proto.ProductService/Update',
  grpc.web.MethodType.UNARY,
  proto.proto.ProductUpdateRequest,
  proto.proto.Product,
  /**
   * @param {!proto.proto.ProductUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ProductUpdateRequest,
 *   !proto.proto.Product>}
 */
const methodInfo_ProductService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.Product,
  /**
   * @param {!proto.proto.ProductUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Product.deserializeBinary
);


/**
 * @param {!proto.proto.ProductUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ProductServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ProductService/Update',
      request,
      metadata || {},
      methodDescriptor_ProductService_Update,
      callback);
};


/**
 * @param {!proto.proto.ProductUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Product>}
 *     A native promise that resolves to the response
 */
proto.proto.ProductServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ProductService/Update',
      request,
      metadata || {},
      methodDescriptor_ProductService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ProductRequest,
 *   !proto.proto.Product>}
 */
const methodDescriptor_ProductService_ClearCache = new grpc.web.MethodDescriptor(
  '/proto.ProductService/ClearCache',
  grpc.web.MethodType.UNARY,
  proto.proto.ProductRequest,
  proto.proto.Product,
  /**
   * @param {!proto.proto.ProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ProductRequest,
 *   !proto.proto.Product>}
 */
const methodInfo_ProductService_ClearCache = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.Product,
  /**
   * @param {!proto.proto.ProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Product.deserializeBinary
);


/**
 * @param {!proto.proto.ProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.Product)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Product>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ProductServiceClient.prototype.clearCache =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ProductService/ClearCache',
      request,
      metadata || {},
      methodDescriptor_ProductService_ClearCache,
      callback);
};


/**
 * @param {!proto.proto.ProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Product>}
 *     A native promise that resolves to the response
 */
proto.proto.ProductServicePromiseClient.prototype.clearCache =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ProductService/ClearCache',
      request,
      metadata || {},
      methodDescriptor_ProductService_ClearCache);
};


module.exports = proto.proto;

