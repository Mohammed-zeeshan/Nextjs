import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';

function NewMeetupPage() {
    async function addMeetupHanlder(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        console.log(data);
    }

    return (
        <Fragment>
          <Head>
            <title>Add a new Meetups</title>
            <meta
              name="description"
              content="Add your own meetups and create amazing opportunities."
            />
          </Head>
          <NewMeetupForm onAddMeetup={addMeetupHanlder} />
        </Fragment>
      );
}

export default NewMeetupPage;
