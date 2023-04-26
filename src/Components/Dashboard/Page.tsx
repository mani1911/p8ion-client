import { Grid, Text, Group } from '@mantine/core';
import Temp from './Card';
import { useGetImagesQuery } from '../../Slices/User/userActions';
import { Content } from './types';

function ContentItem({ content }: { content: Content }) {
	return (
		<Grid.Col style={{ maxWidth: 250 }} sm={12} xs={6}>
			<Temp content={content} />
		</Grid.Col>
	);
}

function Page() {
	const { data, isLoading } = useGetImagesQuery();
	console.log(data?.message);
	return (
		<div>
			<Group position='center'>
				<Text size="1.7rem">Dashboard</Text>
			</Group>
			<Group position="center">
				<Grid justify="space-around">
					{data?.message.map((content: Content) => (
						<ContentItem key={content.ID} content={content} />
					))}
				</Grid>
			</Group>
		</div>
	);
}
export default Page;
