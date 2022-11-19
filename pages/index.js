import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import handler from './api/meetups';

const HomePage = (props) => {
	return (
		<div>
			<MeetupList meetups={props.meetups} />
		</div>
	);
};

//page prerendering during build with getStaticProps
export async function getStaticProps() {
	// fetch data from api or database
	debugger;
	const meetups = await handler();
	console.log(meetups);
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				description: meetup.description,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 10, //seconds for page to update
	};
}

// //page prerendering on server
// export async function getServerSideProps(context) {
// 	const req = context.req
// 	const res = context.res
// 	//fetch data from DB or api
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export default HomePage;
