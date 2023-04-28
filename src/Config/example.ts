interface IConfig {
	backend_url: string;
	env: 'development' | 'production';
	oauthClientId: string;
	oauthRedirectUrl: string;
	openAIApiKey: string;
	openAiURL: string;
}

const config: IConfig = {
	backend_url: 'http://127.0.0.1:',
	env: 'development',
	oauthClientId: '',
	oauthRedirectUrl: '',
	openAIApiKey: '',
	openAiURL: '',
};

export default config;
