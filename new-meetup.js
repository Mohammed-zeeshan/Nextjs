// /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://mohammedzeeshan440:vxFaEVGFTlab3hZW@cluster0.fffqgk6.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();

        const meetupscollection = db.collection('meetups');

        const result = await meetupscollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;
