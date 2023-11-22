import { defineCollection, z } from 'astro:content';

const schoolCollection = defineCollection({
	type: 'data',
	schema: z.object({
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

const coursesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		type: z.enum(['yearly', 'single']),
		description: z.string(),
		cover: z.string(),
		illustration: z.string(),
		schedules: z.array(z.string()),
	}),
});

const teachersCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			first: z.string(),
			last: z.string(),
			rank: z.string(),
			cover: image(),
			avatar: image(),
			introduction: z.string(),
			description: z.string(),
			year: z.number(),
			diploma: z.string(),
			palmares: z.string(),
		}),
});

export const collections = {
	school: schoolCollection,
	course: coursesCollection,
	teacher: teachersCollection,
};