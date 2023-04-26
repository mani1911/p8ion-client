export interface IUser {
	username: string;
}

export interface IImageParsed {
	name: string;
	description: string;
}

export interface IImage {
	ID: string;
	Title: string;
	UserID: number;
	ImageBase64: string;
	Content: string;
}
