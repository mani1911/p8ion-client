import { useState } from 'react';
import {
	Drawer,
	Burger,
	Group,
	Text,
	Button,
	Flex,
	createStyles,
	Avatar,
} from '@mantine/core';
import { AiOutlineInfoCircle, AiOutlineHome } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { RiContactsLine, RiLinksFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
	link: {
		borderBottom: `1px solid ${theme.colors.gray}`,
	},
}));
interface NavigationDrawerProps {
	opened: boolean;
	onClose: () => void;
}

function NavigationDrawer({ opened, onClose }: NavigationDrawerProps) {
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
			name: 'About',
			route: '/about',
			icon: <AiOutlineInfoCircle />,
		},
		{
			name: 'Contact',
			route: '/contact',
			icon: <RiContactsLine />,
		},
	];
	return (
		<Drawer
			title={
				<Avatar
					src="/mask-icon.png"
					onClick={() => {
						navigate('/home');
					}}
				/>
			}
			opened={opened}
			onClose={onClose}
			overlayProps={{ opacity: 0.5, blur: 4 }}
			size="40%"
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
							style={{ textDecoration: 'none', color: `#000000` }}
						>
							<Text>{link.name}</Text>
						</Link>
					</Flex>
				))}
			</Flex>
		</Drawer>
	);
}

function Draw() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleToggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<Group>
			<Burger opened={isDrawerOpen} onClick={handleToggleDrawer} />
			<NavigationDrawer
				opened={isDrawerOpen}
				onClose={handleToggleDrawer}
			/>
		</Group>
	);
}

export default Draw;
``;
