import { Button,Card, Image, Text, Badge, Group, Spoiler, Modal } from '@mantine/core';
import ModalComponents from './ModalComponents';
import { useDisclosure } from '@mantine/hooks';
import { Content } from "./objects";
function Temp({content} : {content : Content}) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder >
    <div>
    {/* <Modal centered opened={opened} size="auto" onClose={close} radius='lg' transitionProps={{ transition: 'fade', duration: 450, timingFunction: 'linear'}}>
    <ModalComponents content={content}/>
    </Modal> */}
    <Modal.Root centered opened={opened} size="auto" onClose={close} radius='lg' transitionProps={{ transition: 'fade', duration: 450, timingFunction: 'linear' }}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title><Group position='center'><Text weight={500} size="md">{content.title}</Text></Group></Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body><ModalComponents content={content}/></Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <Card.Section>
        <Group position="center">
        <Image
          src={content.image}
          height={200}
          alt="Prescription"
        />
        </Group>
        
      </Card.Section>

      <Group position="center" mt="md" mb="xs">
        <Text weight={500} size="md">{content.title}</Text>
        <Badge color="pink" variant="light" size='xs' pos='inherit'>
          New
        </Badge>
        
      </Group>

      <Text size="0.6rem" color="dimmed">
      <Spoiler maxHeight={60} showLabel="" hideLabel="Hide">
      {content.description}
      </Spoiler>
      </Text>
      <Group position='center'>
      {/* <Button onClick={open} size='sm'>
        <Text size='xs'>
        Show more
        </Text> */}
        <Button variant="light" color="blue"  mt="0" radius="md" size='sm' mb="0" onClick={open} compact={true}>
          Show more
          </Button>
      {/* </Button> */}
      </Group>
      </div>
      </Card>
  );
}

export default Temp;