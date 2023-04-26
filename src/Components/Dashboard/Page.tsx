import {
	Grid,
	Text,
	Group,
	createStyles,
	Container,
	Image,
} from '@mantine/core';
import Temp from './Card';
import { useGetImagesQuery } from '../../Slices/User/userActions';
import { Content } from './types';

const useStyles = createStyles((theme) => ({
	header: {
		fontSize: '1.7rem',
		fontWeight: 300,
		borderBottom: `1px solid ${'#ede9df'}`,
		width: '80%',
		textAlign: 'center',
		paddingBottom: '8px',
		marginBottom: '25px',
	},
	header2: {
		fontSize: '1rem',
		fontWeight: 200,

		textAlign: 'center',
	},
}));

function ContentItem({ content }: { content: Content }) {
	return (
		<Grid.Col style={{ maxWidth: 250 }} sm={12} xs={6}>
			<Temp content={content} />
		</Grid.Col>
	);
}

function Page() {
	const { classes } = useStyles();
	const { data, isLoading } = useGetImagesQuery();

	return (
		<div>
			<Group position="center" mt="50px">
				<Text className={classes.header}>Dashboard</Text>
			</Group>
			<Group position="center">
				{data && data.message && data.message.length != 0 ? (
					<Grid justify="space-around">
						{data?.message.map((content: Content) => (
							<ContentItem key={content.ID} content={content} />
						))}
					</Grid>
				) : (
					<Container>
						<Image src="/not-found.jpg" />
						<Text className={classes.header2}>
							Uh Ohhh, There is nothing in your Dashboard.
						</Text>
					</Container>
				)}
			</Group>
		</div>
	);
}
export default Page;
