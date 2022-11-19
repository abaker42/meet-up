import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	// const data = req.body;

	// const { title, image, address, description } = data;
	const client = await MongoClient.connect(
		'mongodb+srv://anthony:Pearl1990@cluster0.usequ.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetupCollection = db.collection('Trials');

	const result = await meetupCollection.find().toArray();
	client.close();

	return result;
};

export default handler;
