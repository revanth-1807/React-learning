let db;
let client;

async function connectDB() {
  if (db) {
    return db; // reuse existing connection
  }

  try {
    const uri = "mongodb://localhost:27017";
    const dbName = "studentDB";

    if (!uri || !dbName) {
      throw new Error("DB url and dbName must be set");
    }

    const { MongoClient } = require("mongodb");

    client = new MongoClient(uri);
    await client.connect();

    db = client.db(dbName);

    console.log('MongoDB connected: ${dbName}');

    return db;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
}

// Clean shutdown
process.on("SIGINT", async () => {
  if (client) {
    await client.close();
    console.log("MongoDB connection closed");
    process.exit(0);
  }
});

module.exports = connectDB;