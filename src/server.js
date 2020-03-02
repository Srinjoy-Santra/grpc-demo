var grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('./grpc/sample.proto');

const moviesProto = grpc.loadPackageDefinition(packageDefinition);
const reservationProto = grpc.loadPackageDefinition(protoLoader.loadSync('./grpc/reservation.proto'))

var server = new grpc.Server();

server.addService(moviesProto.movieDetails.MovieDetailService.service, {
    getDetails: function(call,callback) {
    console.log("Request", call.request.ping, call.request.sample)
    return callback(null,{title: call.request.ping, desc: 'Adventure by Tom Cruise', numbers: [1,3,2,5,7], sample: 
      [
        {
          code: 'Srinjoy',
          ratings: [0.4, 0.5, 0.6]
        },
        {
          code: 'X',
          ratings: [0.3, 0.5, 0.7],
          is_eligible_quikpay: true
        }
      ]
    
  })
  }
});

server.addService(reservationProto.Reservation.ReservationService.service, {
  getDetails: function(call, callback) {
    console.log("Request", call.request.ping, call.request.sample)
    return callback(null,{title: call.request.ping, desc: 'Adventure by Tom Cruise', numbers: [1,3,2,5,7], sample: 
      [
        {
          code: 'Srinjoy',
          ratings: [0.4, 0.5, 0.6]
        },
        {
          code: 'X',
          ratings: [0.3, 0.5, 0.7],
          is_eligible_quikpay: true
        }
      ]
    
  })
  }
  }
})
server.

server.bind('localhost:8081',grpc.ServerCredentials.createInsecure());
server.start();