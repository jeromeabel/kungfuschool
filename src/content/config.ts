import { defineCollection, z } from 'astro:content';

const schoolCollection = defineCollection({
	type: 'data',
	schema: () =>
		z.object({
			name: z.string(),
			address: z.object({
				street: z.string(),
				zip: z.number(),
				city: z.string(),
				openstreetmap: z.string(),
			}),
			infos: z.object({
				date: z.date(),
				surface: z.number(),
				studentsPerYear: z.number(),
				medals: z.number(),
			}),
			telephone: z.string(),
			email: z.string(),
			schedules: z.string(),
			socials: z.array(
				z.object({
					label: z.string(),
					href: z.string(),
					icon: z.string(),
				}),
			),
		}),
});

export const collections = {
	school: schoolCollection,
};
