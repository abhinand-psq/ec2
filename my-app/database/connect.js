
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://abhinandpsq2:3uulOjZfUlXy5QFE@cluster0.vxab3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let connect = null;

 async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    let val = await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return val
  }catch(e){
    console.log("error ", e);
  }
}


module.exports={
    run,
    connect
}
