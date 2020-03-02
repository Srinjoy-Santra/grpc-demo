const protobuf = require("protobufjs");

const convertJSONtoMessage = async (payload) => {
  let message;
  await protobuf.load("./src/grpc/sample.proto")
    .then(function(root) {
      //console.log('>',root)
      var MessageType = root.lookupType("movieDetails.Category");
    
      // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
      var errMsg = MessageType.verify(payload);
      if (errMsg)
          throw Error(errMsg);
    
      // Create a new message
      message = MessageType.fromObject(payload); // or use .fromObject if conversion is necessary
      console.log('>',message)
    });
  //return message
}

convertJSONtoMessage({code: 'XY', ratings: [0.1, 0.4], isEligibleQuikPay: false})