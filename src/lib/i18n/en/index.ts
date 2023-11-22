import type { BaseTranslation } from '../i18n-types';

const productName = 'wtf-css-unit';
const slogan =
	'Figure out your CSS unit with ease. All you need to do is just answer some questions.';
const title = `${productName} - ${slogan}`;
const description = `${productName} is created by Shamim Hossain who is a full-stack developer and a tech enthusiast currently working as frontend lead @secureship inc. He loves to build products that help people to solve their problems. Sometimes finding the right css units can be a pain. This tool will help you to figure out the right css units for your project.`;

const common = {
	etc: 'etc',
	andManyMore: 'and many more...',
	slogan,
	show: 'Show',
	hide: 'Hide'
};

const en: BaseTranslation = {
	appName: productName,
	title,
	description,
	keywords: `CSS units tool, HTML SEO optimization, web design CSS units, CSS unit converter, responsive design units, pixel to em converter, CSS length units, web development tools, CSS best practices, HTML coding tips, web design optimization, pixel conversion tool, EM and REM units, CSS measurement guide, design unit calculator, responsive web units, CSS layout tips, web development resources, HTML coding optimization, pixel-perfect design, ${productName}`,
	appTwitterAccount: '@shamscorner',

	common,

	appLogo: {
		hrefTitle: description,
		alt: `${productName} Logo`
	},

	schemaMarkup: {
		type: 'Corporation',
		name: 'shamscorner',
		markupDescription: description,
		founder: [
			{
				type: 'Person',
				name: 'Shamim Hossain'
			}
		],
		foundingDate: '2021-07-04',
		contactPoint: [
			{
				type: 'ContactPoint',
				email: 'hossains159@gmail.com',
				telephone: '',
				contactType: 'customer service'
			}
		]
	},

	errorPage: {
		title: '404',
		subtitle: 'Not found',
		pageTitle: '404',
		description: 'Looking for help? Reach out to me at hossains159@gmail.com',
		keywords: 'Support, Contact, Help, 404, Not found'
	},

	onboarding: {
		greeting: 'Hi, I\'m <span class="font-semibold">Shamim Hossain</span>',
		title:
			'Answer some questions and I will help you to figure out the right CSS unit for your project.',
		subtitle:
			'Assuming you are only using these units for web development, not for print media.',
		callToAction: {
			letsStart: "Let's Start"
		}
	},

	questionaries: {
		whatDeclaring: {
			title: 'What are you declaring?',
			items: [
				{
					title: 'Font size',
					value: 'font-size',
					hint: ''
				},
				{
					title: 'Spacing',
					value: 'spacing',
					hint: 'Margin, padding, gap, etc.'
				},
				{
					title: 'Positioning',
					value: 'positioning',
					hint: 'Top, right, bottom, left, etc.'
				},
				{
					title: 'Details/effects',
					value: 'details-effects',
					hint: 'Border, box-shadow, outlines, etc.'
				},
				{
					title: 'Flex or grid',
					value: 'flex-grid',
					hint: ''
				},
				{
					title: 'Width or height on an element',
					value: 'width-height',
					hint: ''
				}
			]
		},
		fontSize: {
			title: 'Which of these are you selecting to declare the font-size?',
			item: [
				{
					title: 'The <html> element',
					value: 'html',
					hint: ''
				},
				{
					title: 'The <body> element',
					value: 'body',
					hint: ''
				},
				{
					title: 'Text related element',
					value: 'text-related',
					hint: '<h1> - <h6>, <p>, <ol>, <ul>, etc.'
				},
				{
					title: 'Inline element',
					value: 'inline',
					hint: '<a>, <span>, <strong>, etc.'
				},
				{
					title: 'Layout element',
					value: 'layout',
					hint: '<div>, <nav>, <main>, <aside>, <footer>, etc.'
				}
			]
		}
	},

	errors: {
		somethingWentWrong: 'Something went wrong'
	}
};

export default en;
