import { useRouter } from 'next/router';
import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
	const router = useRouter();
	const handleAddMeetup = async (meetupData) => {
		const res = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(meetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		console.log(data);
		router.push('/');
	};
	return (
		<div>
			<NewMeetupForm onAddMeetup={handleAddMeetup} />
		</div>
	);
};

export default NewMeetupPage;
