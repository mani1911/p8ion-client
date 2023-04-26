
import {
  createStyles,
  Header,
  Container,
  Avatar,
  Text,
  Group,
} from '@mantine/core';
import Draw from '../Drawer/Drawer';
const useStyles = createStyles((theme) => ({
  root: {
    position: 'absolute',
    backgroundColor: '#f5c71a ',
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    // margin: 'auto',
    width: '30%',
  },

  Text:{
    fontSize: 'xl',
  },
}));
function HeaderResponsive() {
  const { classes } = useStyles();

  return (
    <Header height={100} mb={30} className={classes.root}>
      <Group position='center'>
        <Draw />
        <Avatar src="./mask.png"  radius='xl' alt="P8ion"/>
        <Text>
            Dashboard
        </Text>
      </Group>
    </Header>
  );
}
export default HeaderResponsive;