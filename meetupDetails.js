import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.MeetupData.image}
      title={props.MeetupData.title}
      address={props.MeetupData.address}
      description={props.MeetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://mohammedzeeshan440:vxFaEVGFTlab3hZW@cluster0.fffqgk6.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db();

  const meetupscollection = db.collection('meetups');

  const meetups = await meetupscollection.find({}, {_id: 1}).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {meetupId: meetup._id.toString()}
    })),
  }
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://mohammedzeeshan440:vxFaEVGFTlab3hZW@cluster0.fffqgk6.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db();

  const meetupscollection = db.collection('meetups');

  const selectedMeetups = await meetupscollection.findOne({
    _id: ObjectId(meetupId),
  });

  console.log(selectedMeetups)

  client.close();

  console.log(meetupId)

  return {
    props: {
      MeetupData: {
        id: selectedMeetups._id.toString(),
        title: selectedMeetups.title,
        address: selectedMeetups.address,
        description: selectedMeetups.description,
        image: selectedMeetups.image,
      }
    }
  }
}

export default MeetupDetails;
