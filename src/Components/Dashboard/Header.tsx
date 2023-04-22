
import {
  createStyles,
  Header,
  Container,
  Avatar,
  Text,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#f5c71a ',
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: 'auto',
  },

  Text:{
    fontSize: 'xl',
  }
}));
function HeaderResponsive() {
  const { classes } = useStyles();

  return (
    <Header height={100} mb={30} className={classes.root}>
      <Container className={classes.header}>
        <Avatar src="./mask.png"  radius='xl' alt="P8ion"/>
        <Text>
            Dashboard
        </Text>
      </Container>
    </Header>
  );
}
export default HeaderResponsive;