import { notifications } from '@mantine/notifications';

const Toast = (color: string, title: string, message: string) => {
	notifications.show({
		title: title,
		message: message,
		color: color,
	});
};

export default Toast;
