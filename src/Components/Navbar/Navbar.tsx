import { useAppSelector, useAppDispatch } from '../../App/hooks';
import { toggleDrawer } from '../../Slices/User/userSlice';
import {
	Drawer,
	Burger,
	Text,
	Flex,
	createStyles,
	Avatar,
} from '@mantine/core';
import { AiOutlineInfoCircle, AiOutlineHome } from 'react-icons/ai';
import { BiLogOut ,BiMap} from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import { RiContactsLine, RiLinksFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
	link: {
		borderBottom: `1px solid ${theme.colors.gray}`,
	},
}));

const Navbar = () => {
	const isDrawerOpen = useAppSelector((state) => state.User.isDrawerOpen);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { classes } = useStyles();
	const links = [
		{
			name: 'Home',
			route: '/home',
			icon: <AiOutlineHome />,
		},
		{
			name: 'Dashboard',
			route: '/dashboard',
			icon: <RxDashboard />,
		},
		{
			name: 'Map',
			route: '/map',
			icon: <BiMap />,
		},
		{
			name: 'Chat',
			route: '/chat',
			icon: <RiContactsLine />,
		},
		{
			name: 'About',
			route: '/about',
			icon: <AiOutlineInfoCircle />,
		},
		{
			name: 'Logout',
			route: '/logout',
			icon: <BiLogOut />,
		},
	];
	return (
		<>
			<Drawer
				title={
					<Avatar
						src="/mask-icon.png"
						onClick={() => {
							navigate('/home');
						}}
					/>
				}
				opened={isDrawerOpen}
				onClose={() => dispatch(toggleDrawer())}
				overlayProps={{ opacity: 0.5, blur: 4 }}
				size="50vw"
				withCloseButton={false}
				transitionProps={{
					transition: 'fade',
					duration: 250,
					timingFunction: 'linear',
				}}
			>
				<Flex direction="column" gap="2rem" mt={'30px'}>
					{links.map((link) => (
						<Flex
							align="center"
							gap="lg"
							pb={'10px'}
							className={classes.link}
						>
							{link.icon}
							<Link
								to={link.route}
								style={{
									textDecoration: 'none',
									color: `#000000`,
								}}
							>
								<Text>{link.name}</Text>
							</Link>
						</Flex>
					))}
				</Flex>
			</Drawer>
			<Burger
				style={{ zIndex: '200' }}
				pos="fixed"
				top="10px"
				left="10px"
				opened={isDrawerOpen}
				onClick={() => {
					dispatch(toggleDrawer());
				}}
			/>
		</>
	);
};

export default Navbar;
