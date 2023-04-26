import { useEffect } from 'react';
import { getCookie } from '../../Utils/General';

type childrenProp = {
	children: string | JSX.Element | JSX.Element[];
};

const Protected = ({ children }: childrenProp) => {
	useEffect(() => {
		const jwt = getCookie('jwt');
		if (jwt == null || jwt == '') {
			location.replace('/');
		}
	});
	return <>{children}</>;
};

export default Protected;
