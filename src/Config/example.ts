interface IConfig {
	backend_url: string;
	env: 'development' | 'production';
}

const config: IConfig = {
	backend_url: 'http://127.0.0.1:3000',
	env: 'development',
};

export default config;
