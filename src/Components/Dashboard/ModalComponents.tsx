import { Input, Text, Image, Group, Button } from '@mantine/core';
import { SiGoogletranslate } from 'react-icons/si';
import Speech from './speech';
import { Content } from './types';
// import Translate from './Translate';
// import { useState } from "react"

function ModalComponents({ content }: { content: Content }) {
	return (
		<>
			<Group position="center" align="auto">
				<Image
					src={`data:image/jpeg;base64,${content.ImageBase64}`}
					height={350}
					width={300}
					radius="md"
				/>
			</Group>
			<Group position="center">
				<Button
					variant="light"
					color="blue"
					mt="sm"
					radius="md"
					size="sm"
					mb="sm"
					compact={true}
				>
					Translate<SiGoogletranslate></SiGoogletranslate>
				</Button>
				<Input component="select" size="sm">
					<option value="1">English</option>
					<option value="2">Tamil</option>
				</Input>
			</Group>
			{/* <Translate content= {content}/> */}
			<Group position="center">
				<Speech content={content} />
			</Group>
			{/* <Group position='center'>
          <Text size='md' mb='md'>
            {content.title}
          </Text>
        </Group> */}

			<Text size="sm">{content.Content}</Text>
		</>
	);
}
export default ModalComponents;
