interface IConfig {
	backend_url: string;
	env: 'development' | 'production';
	oauthClientId: string;
	oauthRedirectUrl: string;
	openAIApiKey: string;
	openAiURL: string;
	mapAPIKey:string;
}

const config: IConfig = {
	backend_url: 'http://127.0.0.1:',
	env: 'development',
	oauthClientId: '',
	oauthRedirectUrl: '',
	openAIApiKey: '',
	openAiURL: '',
	mapAPIKey:''
};

export default config;
