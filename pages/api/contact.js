import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input!" });
      return;
    }

    // Store to db
    let client;
    const newMessage = { email, name, message };
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster_name}.cennj.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
      );
    } catch (err) {
      res.status(500).json({ message: "Could not connect to the database!" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Failed in storing the message!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Succesfully stored the data!" });
  }
}

export default handler;
