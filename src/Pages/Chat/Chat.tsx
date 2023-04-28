import {
	Button,
	Container,
	Flex,
	Group,
	Input,
	createStyles,
} from '@mantine/core';
import Typewriter from 'typewriter-effect';
import { FiSearch } from 'react-icons/fi';
import React, { useState } from 'react';
import config from '../../Config';
import axios from 'axios';

const useStyles = createStyles((theme) => ({
	input: {
		border: '1px solid black',
	},

	container: {
		border: '1px solid grey',
		marginTop: '2rem',
		width: '70%',
		borderRadius: '7px',
		height: '70vh',
		padding: '20px',
	},
}));

const Chat = () => {
	const { classes } = useStyles();
	const [searchText, setSearchText] = useState<string>('');
	const [res, setRes] = useState<string>('Hi I am your AI Health assistant');
	const searchHandler = async () => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${config.openAIApiKey}`,
		};
		const response = await axios.post(
			config.openAiURL,
			{
				temperature: 0.5,
				model: 'gpt-3.5-turbo',
				messages: [
					{
						role: 'user',
						content: `${searchText} - Healthcare Related - in 40 words`,
					},
				],
			},
			{ headers }
		);
		console.log(response.data.choices[0].message.content.trim());
		setRes(response.data.choices[0].message.content.trim());
	};
	return (
		<Flex mt="50px" direction="column" align="center" w="100vw">
			<Input
				onChange={(e) => {
					setSearchText(e.target.value);
				}}
				value={searchText}
				icon={<FiSearch />}
				rightSection={
					<Button
						disabled={searchText.length == 0}
						onClick={() => {
							searchHandler();
						}}
					>
						Go
					</Button>
				}
				placeholder="Ask me Anything"
				radius="md"
				width="90vw"
			/>
			<Container className={classes.container}>
				<Typewriter
					options={{
						strings: [res],
						autoStart: true,
						loop: false,
					}}
				/>
			</Container>
		</Flex>
	);
};

export default Chat;
