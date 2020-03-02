import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const { MovieDetailServiceClient } = require('./grpc/sample_grpc_web_pb');
const { MovieRequest, serializeBinaryToWriter , Category } = require('./grpc/sample_pb');

const protobuf = require("protobufjs");
const convertJSONtoMessage = async (payload) => {
  let message;
  await protobuf.load("awesome.proto")
    .then(function(root) {
      console.log('>',root)
      var MessageType = root.lookupType("movieDetails.Category");
    
      // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
      var errMsg = MessageType.verify(payload);
      if (errMsg)
          throw Error(errMsg);
    
      // Create a new message
      message = MessageType.fromObject(payload); // or use .fromObject if conversion is necessary
      console.log('>',message)
    });
  return message
}


var client = new MovieDetailServiceClient('http://localhost:9090', null, null);
console.log(client)
class App extends Component {
   callGrpcService = async () => {
    const request = new MovieRequest();
    request.setPing('Mission Impossible');
    
    const cat = new Category();
    cat.setCode('XY')
    cat.setRatingsList([0.1, 0.6, 0.9])
    cat.setIsEligibleQuikpay(true)
    //console.log('>',cat)

    const catJson = {code: 'XY', ratings: [0.1, 0.4], isEligibleQuikPay: false}
    const catJsonStr = JSON.stringify(catJson)
    const catBase64 = Buffer.from(catJsonStr).toString("base64");
    console.log(catBase64)
    await request.setSample(catBase64)
    console.log(':', request)
    client.getDetails(request, {}, (err, response) => {
      if (response == null) {
        console.log('BUG:',err)
      }else {
        console.log(response.getTitle(), response.getDesc(), response.getNumbersList(), response.getSampleList())
        console.log(response.toObject())
        console.log(response.getSampleList().map(it => it.getRatingsList()))
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button style={{padding:10}} onClick={this.callGrpcService}>Click for grpc request</button>
        </header>
      </div>
    );
  }
}

export default App;