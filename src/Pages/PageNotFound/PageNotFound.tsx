import { Image, Text } from '@mantine/core';
const PageNotFound: React.FC = () => {
	return (
		<>
			<Image src="/not-found.jpg" />
			<Text
				style={{
					textAlign: 'center',
					fontWeight: '200',
					fontSize: '1.2rem',
				}}
			>
				Seems like you lost your Way. Shit Happens Sometimes !
			</Text>
		</>
	);
};

export default PageNotFound;
