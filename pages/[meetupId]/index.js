import React, { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
	return (
		<MeetupDetail
			image='https://upload.wikimedia.org/wikipedia/commons/a/a8/The_hedgehog_named_%22Sunao%22.jpg'
			title='A Title'
			address='444 MyAdd st Micy, MD'
			description='Hello from desc'
		/>
	);
};

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{ params: { meetupId: 'm1' } },
			{ params: { meetupId: 'm2' } },
			{ params: { meetupId: 'm3' } },
			{ params: { meetupId: 'm4' } },
		],
	};
}

export async function getStaticProps(context) {
	//fetch data for single meetup
	const params = context.params.meetupId;
	console.log(params);
	return {
		props: {
			singleMeet: {
				image: '',
				id: '',
				title: '',
				address: '',
				description: '',
			},
		},
	};
}

export default MeetupDetails;
