const grpc = require("@grpc/grpc-js");
const PROTO_PATH = "./news.proto";
var protoLoader = require("@grpc/proto-loader");

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
let packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const NewsProto = grpc.loadPackageDefinition(packageDefinition).NewsService;

const client = new NewsProto(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

// client.createNews(
//   {
//     title: "gRPC service in Node.js: Tutorial, Examples and Best practices",
//     body: "gRPC is a new technology here for building APIs to achieve high load time and fast network latency. In this article, we will demonstrate how to build a gRPC-powered API in Nodejs. First, let's learn what gRPC is.",
//   },
//   (err, response) => {
//     console.log("from server", response);
//   }
// );


client.getAllNews({}, (err,response)=> {
    console.log(response)
})