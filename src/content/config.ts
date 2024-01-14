import { defineCollection, z } from 'astro:content';

const schoolCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			cover: image(),
			intro: z.string(),
			address: z.object({
				street: z.string(),
				zip: z.number(),
				city: z.string(),
				openstreetmap: z.string().url(),
				googlemap: z.string().url(),
				imageMap: image(),
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
	schema: ({ image }) =>
		z.object({
			order: z.number().default(0),
			title: z.string(),
			type: z.enum(['yearly', 'single']),
			description: z.string(),
			cover: image(),
			illustration: z.string(),
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
			description: z.string(),
			year: z.number(),
			diploma: image(),
			palmares: image(),
			diploma_text: z.array(z.string()).optional(),
			palmares_text: z.array(z.record(z.array(z.string()))).optional(),
			images: z.array(image()),
		}),
});

const studentsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			first: z.string(),
			last: z.string(),
			avatar: image(),
			testimonial: z.string(),
			yearOfPractice: z.number(),
		}),
});

const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			headline: z.string(),
			cover: image(),
			date: z.date(),
			description: z.string(),
		}),
});

export const collections = {
	school: schoolCollection,
	course: coursesCollection,
	teacher: teachersCollection,
	student: studentsCollection,
	blog: blogCollection,
};
