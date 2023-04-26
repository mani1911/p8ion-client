import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../../Config';

function getCookie(name: string): string | null {
	const nameLenPlus = name.length + 1;
	return (
		document.cookie
			.split(';')
			.map((c) => c.trim())
			.filter((cookie) => {
				return cookie.substring(0, nameLenPlus) === `${name}=`;
			})
			.map((cookie) => {
				return decodeURIComponent(cookie.substring(nameLenPlus));
			})[0] || null
	);
}

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: config.backend_url,
		credentials: 'include',
		prepareHeaders(headers) {
			headers.set('Authorization', `Bearer ${getCookie('jwt')}`);
			headers.set('Content-Type', 'application/json');
		},
	}),

	endpoints(builder) {
		return {
			getImages: builder.query<string, number | void>({
				query(userID) {
					return {
						url: `/user/images/${userID}`,
						method: 'GET',
					};
				},
			}),

			getUser: builder.query<string, string>({
				query() {
					return {
						url: '/user/getUser/',
						method: 'GET',
					};
				},
			}),

			parseImage: builder.mutation<void, string>({
				query(image64) {
					return {
						url: '/user/image',
						method: 'POST',
						body: JSON.stringify({ image64: image64 }),
					};
				},
			}),
		};
	},
});

export const { useGetUserQuery, useGetImagesQuery, useParseImageMutation } =
	apiSlice;
