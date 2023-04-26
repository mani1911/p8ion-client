import { Button,Card, Image, Text, Badge, Group, Spoiler, Modal } from '@mantine/core';
import ModalComponents from './ModalComponents';
import { useDisclosure } from '@mantine/hooks';
import { Content } from "./objects";
function Temp({content} : {content : Content}) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder >
    <div>
    <Modal opened={opened} size="auto" onClose={close} radius='lg' >
    <ModalComponents content={content}/>
    </Modal>
      <Card.Section>
        <Group position="center">
        <Image
          src={content.image}
          height={500}
          alt="Prescription"
        />
        </Group>
        
      </Card.Section>

      <Group position="center" mt="xl" mb="xs">
        <Text weight={500} size="lg">{content.title}</Text>
        <Badge color="pink" variant="light" size='lg' pos='inherit'>
          New
        </Badge>
        
      </Group>

      <Text size="md" color="dimmed">
      <Spoiler maxHeight={120} showLabel="" hideLabel="Hide">
      {content.description}
      </Spoiler> 
      <Group position='center' mt='md'>
      <Button onClick={open}>
        <Text size='sm'>
        Show more
        </Text>
        
      </Button>
      </Group>
      
      </Text>
      </div>
      </Card>
  );
}

export default Temp;