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
	hide: 'Hide',
	yes: 'Yes',
	no: 'No',
	reset: 'Reset',
	back: 'Back'
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
					hint: '',
					to: '/questionaries/font-size'
				},
				{
					title: 'Spacing',
					value: 'spacing',
					hint: 'Margin, padding, gap, etc.',
					to: '/questionaries/spacing'
				},
				{
					title: 'Positioning',
					value: 'positioning',
					hint: 'Top, right, bottom, left, etc.',
					to: '/questionaries/positioning'
				},
				{
					title: 'Details/effects',
					value: 'details-effects',
					hint: 'Border, box-shadow, outlines, etc.',
					to: '/questionaries/details-effects'
				},
				{
					title: 'Flex or grid',
					value: 'flex-grid',
					hint: '',
					to: '/questionaries/flex-grid'
				},
				{
					title: 'Width or height on an element',
					value: 'width-height',
					hint: '',
					to: '/questionaries/width-height'
				}
			]
		},
		whichFontSize: {
			title: 'Which of these are you selecting to declare the font-size?',
			question: {
				items: {
					htmlSetHere: {
						title: 'The <html> element',
						value: 'html',
						hint: '',
						to: '/questionaries/font-size/html',
						question: {
							title: 'Do you need to set a font-size here?',
							items: {
								no: {
									title: 'No, I guess not.',
									value: 'no',
									hint: '',
									to: '/questionaries/font-size/html/no',
									answer: [
										{
											title: '',
											description:
												"You probably don't need to bother (and the 62.5% tends to be something you should avoid.)"
										}
									]
								},
								yes: {
									title: 'Yes!',
									value: 'yes',
									hint: '',
									to: '/questionaries/font-size/responsive'
								}
							}
						}
					},
					bodyElement: {
						title: 'The <body> element',
						value: 'body',
						hint: '',
						to: '/questionaries/font-size/responsive'
					},
					textRelatedElement: {
						title: 'Text related element',
						value: 'text-related',
						hint: '<h1> - <h6>, <p>, <ol>, <ul>, etc.',
						to: '/questionaries/font-size/text-related',
						question: {
							title:
								'Does the font-size need to be relative to another element?',
							items: {
								no: {
									title: 'No, I guess not.',
									value: 'no',
									hint: '',
									to: '/questionaries/font-size/responsive'
								},
								yes: {
									title: 'Yes!',
									value: 'yes',
									hint: '',
									to: '/questionaries/font-size/relative-to-parent'
								}
							}
						}
					},
					inlineElement: {
						title: 'Inline element',
						value: 'inline-element',
						hint: '<a>, <span>, <strong>, etc.',
						to: '/questionaries/font-size/relative-to-parent'
					}
				}
			},
			responsive: {
				question: {
					title: 'Do you want it to be responsive?',
					items: {
						no: {
							title: 'No!',
							value: 'no',
							hint: '',
							to: '/questionaries/font-size/responsive/no',
							answer: [
								{
									title: 'rem',
									description:
										"Most of the time, you will probably use rem when declaring font sizes. It's easy to use, predictable, and very importantly, respects the users choice if they have made changes to their default font size at the OS or browser level."
								}
							]
						},
						yes: {
							title: 'Yes!',
							value: 'yes',
							hint: '',
							to: '/questionaries/font-size/responsive/yes',
							answer: [
								{
									title: 'Clamp()',
									description:
										'You need 3 values for clamp, a minimum, "growth factor", and maximum. The minimum and maximum should probably be in rem and the growth factor a viewport unit, but also with rem added to it. For example: clamp(1.25rem, 7.5vw + .5rem, 2rem).<br><br>You can learn more about it <a href="https://www.youtube.com/watch?v=U9VF-4euyRo" target="_blank" rel="noopener noreferrer">in this video</a>. There is also a fantastic tool called <a href="https://utopia.fyi/type/calculator/" target="_blank" rel="noopener noreferrer">Utopia</a> that you can use to generate a responsive type scale.'
								},
								{
									title: 'cqi',
									description:
										'If you don\'t mind trying something that doesn\'t have the best browser support, you could substitute the `vw` unit with a `cqi`, which is a container query unit that gets the inline size of it\'s container. This does mean you need a container though. You can learn more about it <a href="https://www.youtube.com/watch?v=ZSaAHb5dRwQ" target="_blank" rel="noopener noreferrer">in this video</a>.'
								}
							]
						}
					}
				}
			},
			relativeToParent: {
				question: {
					title:
						'Do you want it to be relative to the font-size of the parent element, or something more precise?',
					items: {
						fontSize: {
							title: 'The font-size',
							value: 'font-size',
							hint: '',
							to: '/questionaries/font-size/relative-to-parent/font-size',
							answer: [
								{
									title: 'em',
									description:
										"The `em` unit, when used to declare font-size, will be relative it's ancestor's font-size.<br><br>For example, if you have a heading with a font-size of 3rem, and a span inside with a font-size of .5rem, the span will have a font-size of 1.5rem (3rem x .5)."
								}
							]
						},
						morePrecise: {
							title: 'Something more precise',
							value: 'more-precise',
							hint: '',
							to: '/questionaries/font-size/relative-to-parent/more-precise',
							answer: [
								{
									title: 'lh',
									description: 'Line-height'
								},
								{
									title: 'ex',
									description: 'Ex height'
								},
								{
									title: 'cap',
									description: 'Cap height'
								}
							]
						}
					}
				}
			}
		}
	},

	errors: {
		somethingWentWrong: 'Something went wrong'
	}
};

export default en;
