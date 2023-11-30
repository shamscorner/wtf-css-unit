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
					htmlElement: {
						title: 'The <html> element',
						value: 'html',
						hint: '',
						to: '/questionaries/font-size/html-set-here'
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
						value: 'inline',
						hint: '<a>, <span>, <strong>, etc.',
						to: '/questionaries/font-size/relative-to-parent'
					},
					layoutElement: {
						title: 'Layout element',
						value: 'layout',
						hint: '<div>, <nav>, <main>, <aside>, <footer>, etc.',
						to: '/questionaries/font-size/html-set-here'
					}
				}
			},
			htmlSetHere: {
				question: {
					title: 'Do you need to set a font-size here?',
					items: {
						no: {
							title: 'No, I guess not.',
							value: 'no',
							hint: '',
							to: '/questionaries/font-size/html-set-here/no',
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
		},
		whatSpacingTo: {
			title: 'What are you adding spacing to?',
			questions: {
				items: {
					text: {
						title: 'Text',
						value: 'text',
						hint: '(like spacing between paragraphs)',
						to: '/questionaries/spacing/text',
						answers: [
							{
								title: 'em &nbsp;&nbsp; rem',
								description:
									'There are times you can use rem as well, but by using em,you keep the spacing relative to the font size of the text, <a href="https://www.youtube.com/watch?v=Gx0iZrN-0L4" target="_blank" rel="noopener noreferrer">making for a better overall flow</a>.'
							}
						]
					},
					padding: {
						title: 'Padding',
						value: 'padding',
						hint: '',
						to: '/questionaries/spacing/space-for-fixed-size'
					},
					spaceBetween: {
						title: 'Space between elements and/or components',
						value: 'spaceBetween',
						hint: '',
						to: '/questionaries/spacing/space-for-fixed-size'
					}
				}
			},
			spaceForFixedSize: {
				questions: {
					title: 'Do you want the space to be a fixed size?',
					items: {
						no: {
							title: 'No',
							value: 'no',
							hint: '',
							to: '/questionaries/spacing/space-for-fixed-size/no',
							answers: [
								{
									title: 'vw/vh + main() &nbsp;&nbsp; clamp()',
									description:
										'You may want to adjust the size according to how much space is available, for example, having <a href="https://www.youtube.com/watch?v=7khSaA91e04" target="_blank" rel="noopener noreferrer">more padding at larger screen sizes</a>. In those cases we can use viewport units (container query units), but it\'s usually best to do so inside a clamp to avoid the spacing from getting too big or too small.'
								}
							]
						},
						yes: {
							title: 'Yes',
							value: 'yes',
							hint: '',
							to: '/questionaries/spacing/space-for-fixed-size/yes',
							answers: [
								{
									title: 'em &nbsp;&nbsp; rem &nbsp;&nbsp; px',
									description:
										'It depends a lot on the use case. If you want a fixed value, rem or px are fine. If you want something that is a bit more adaptable, em is great. I love using it for buttons, so that the padding adjusts automatically if I make small and large variants by changing the font size.'
								}
							]
						}
					}
				}
			}
		},
		whatPositionAndDetailsTo: {
			questions: {
				answers: [
					{
						title: 'px &nbsp;&nbsp; rem',
						description:
							"px is probably find and can be easier for small adjustments, but if your're using rem for most things, you could stay with that for consistency. You can use em too, if you prefer."
					}
				]
			}
		},
		whichFlexOrGrid: {
			questions: {
				items: [
					{
						title: 'a gap between the elements ',
						value: 'gap-element',
						hint: '',
						to: '/questionaries/spacing/space-for-fixed-size'
					},
					{
						title: 'grid columns ',
						value: 'grid-columns',
						hint: '',
						to: '/questionaries/flex-grid/grid-columns-rows/'
					},
					{
						title: 'grid rows ',
						value: 'grid-rows',
						hint: '',
						to: '/questionaries/flex-grid/grid-columns-rows/'
					},
					{
						title: 'flex item widths ',
						value: 'items-widths',
						hint: '',
						to: '/questionaries/flex-grid/flex-item-widths'
					}
				]
			},

			fixedOrFluid: {
				questions: {
					title: 'Do you want them to be fixed sizes, of fluid? ',
					items: {
						fixedSized: {
							title: 'Fixed sizes',
							value: 'fixed-size',
							hint: '',
							to: '/questionaries/flex-grid/grid-columns-rows/fixed-sizes',
							answers: [
								{
									title: 'px &nbsp;&nbsp;rem',
									description:
										"px is probably fine, but if yo're using rem for most things,you could stay with that for consistency. "
								}
							]
						},
						fluid: {
							title: 'Fluid',
							value: 'fluid',
							hint: '',
							to: '/questionaries/flex-grid/grid-columns-rows/fluid',
							answers: [
								{
									title: 'fr',
									description:
										"The fr unit uses the leftover space. If you have three columns each with 1fr, they will adapt to whatever space is available, and generally all be the same size. It tends to be the best choice. % can also work, but can lead to overflow if you don't take into account gaps, whereas fr avoids that issue. "
								}
							]
						},
						someFixedFluid: {
							title: 'Some fixed, some fluid',
							value: 'fixed-fluid',
							hint: '',
							to: '/questionaries/flex-grid/grid-columns-rows/some-fixed-fluid',
							answers: [
								{
									title:
										'fr &nbsp;&nbsp;px &nbsp;&nbsp;rem &nbsp;&nbsp;auto &nbsp;&nbsp;min-content ',
									description:
										' The fluid stuff can use fr to take up available space, or auto or min-content if you want it to match the size of the content in a given column/row.Other parts can be defined with px or rem, if you want fixed sizes.'
								}
							]
						}
					}
				}
			},
			flexItemsWidths: {
				questions: {
					title:
						"Flex item sizing can be hard, but that's sort of the point of using flex, we want things to be flexible. what do you prefer?",
					items: {
						preventLargerSize: {
							title:
								'I want to prevent an element getting larger than a specific size',
							value: 'prevent-size',
							hint: '',
							to: '/questionaries/flex-grid/flex-item-widths/larger-size',
							answers: [
								{
									title:
										'max-width  + px&nbsp;&nbsp; rem &nbsp;&nbsp; or &nbsp;&nbsp; %',
									description:
										'Flex items, by default, will not grow, so normally you only need this if you have declared a flex-grow other than O on your flex items. In that scenario, if they are allowed to grow, but if you also declare a max-width, they will not be able to grow bigger than that size. '
								}
							]
						},
						preventSmallerSize: {
							title:
								'I want to prevent an element getting smaller than a specific size',
							value: 'prevent-size',
							hint: '',
							to: '/questionaries/flex-grid/flex-item-widths/smaller-size',
							answers: [
								{
									title: 'min-width + rem &nbsp;&nbsp; or &nbsp;&nbsp; %',
									description:
										'Flex items, by default, will not grow, so normally you only need this if you have declared a flex-grow other than O on your flex items. In that scenario, if they are allowed to grow, but if you also declare a max-width, they will not be able to grow bigger than that size. '
								}
							]
						},
						specificSize: {
							title: 'I want an element to be a specific size',
							value: 'specific-size',
							hint: '',
							to: '/questionaries/flex-grid/flex-item-widths/specific-size',
							answers: [
								{
									title:
										'flex-grow and flex-shrink: 0 + px &nbsp;&nbsp;  rem &nbsp; or &nbsp; % ',
									description:
										'Flex items, by default, will not grow, so normally you only need this if you have declared a flex-grow other than O on your flex items. In that scenario, if they are allowed to grow, but if you also declare a max-width, they will not be able to grow bigger than that size. '
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
