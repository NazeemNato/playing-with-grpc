const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH  = require("./todo.proto")

const pacakgeDef = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const grpcPackgeDef = grpc.loadPackageDefinition(pacakgeDef);


const server = new grpc.Server();
server.bindAsync(
  "0.0.0.0:40000",
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.addService(grpcPackgeDef.Todo.service, {
      getAllNews,
    });
    server.start();
  }
);

function getAllNews(call, callback) {
  console.log(call);
  callback(null, { id: 1, text: "122" });
}

// function readTodos(call, callback) {
//   callback(null, { items: [] });
// }
