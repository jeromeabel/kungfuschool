interface PriceOption {
	title: string;
	price: number;
	description?: string;
}

export const pricesOptions: Record<string, PriceOption> = {
	suit: {
		title: 'School suit (required)',
		price: 50,
	},
	license: {
		title: 'Competition license',
		price: 7,
	},
	course: {
		title: 'Extra class',
		price: 50,
	},
	online: {
		title: 'Zoom video conference',
		price: 50,
	},
};

export const pricesCardsYearly = [
	{
		title: 'Kids',
		subtitle: 'Between 7 and 11 years old',
		price: 200,
		content: ['1 course / week', 'Federal license'],
		options: ['suit'],
	},
	{
		title: 'Premium',
		subtitle: 'From 12 years old and 3rd year',
		price: 350,
		content: ['All courses', 'Federal license'],
		options: ['suit', 'license', 'online'],
	},
	{
		title: 'Discovery',
		subtitle: 'From 12 years old',
		price: 250,
		content: ['1 course / week', 'Federal license'],
		options: ['suit', 'course', 'license', 'online'],
	},
];

export const pricesCardsSingle = [
	{
		title: 'Private course',
		price: 50,
		description: 'With Laoshi',
	},
	{
		title: 'Meditation',
		price: 5,
		description: 'Friday',
	},
	{
		title: 'Saturday',
		price: 5,
		description: 'Collective course 1h',
	},
];
