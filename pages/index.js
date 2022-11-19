import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		tite: 'First Annual Conference',
		image:
			'https://en.wikipedia.org/wiki/United_Nations_Climate_Change_conference#/media/File:COP21_participants_-_30_Nov_2015_(23430273715).jpg',
		address: '342 UN Hall rd, Magic City, UN 11111',
		description: 'The First Annual Conference of People',
	},
	{
		id: 'm2',
		tite: 'National Pet Conference',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/a/a8/The_hedgehog_named_%22Sunao%22.jpg',
		address: '4532 Companion st, Halo, NJ 23277',
		description: 'All pets welcome domestic and exotic!',
	},
	{
		id: 'm3',
		tite: 'The Big Tech Gathering',
		image:
			'https://en.wikipedia.org/wiki/Big_Tech#/media/File:AAAMM_Big_Tech.svg',
		address: '10110 Hard Drive blvd, Testor, CA 90101',
		description: 'The biggest tech gathering of the decade.',
	},
	{
		id: 'm4',
		tite: 'National Food Lover Committee',
		image:
			'https://en.wikipedia.org/wiki/Food#/media/File:Good_Food_Display_-_NCI_Visuals_Online.jpg',
		address: '554 MLK blvd, Candid, PA 43255',
		description: 'The Great Feast!',
	},
];

const HomePage = (props) => {
	const [loadedMeets, setLoadedMeets] = useState([]);
	useEffect(() => {
		//send http request to fetch data
		const data = DUMMY_MEETUPS;

		setLoadedMeets(data);
	}, []);

	return (
		<div>
			<MeetupList meetups={props.meetups} />
		</div>
	);
};

//page prerendering during build with getStaticProps
export async function getStaticProps() {
	// fetch data from api or database
	return {
		props: {
			meetups: DUMMY_MEETUPS,
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
