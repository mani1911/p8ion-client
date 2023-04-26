import config from '../../Config';

export const getOauthUrl = () => {
	const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

	const options = {
		redirect_uri: config.oauthRedirectUrl,
		client_id: config.oauthClientId,
		access_type: 'offline',
		response_type: 'code',
		prompt: 'consent',
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email',
		].join(' '),
	};

	const qs = new URLSearchParams(options);
	return `${rootUrl}?${qs.toString()}`;
};
