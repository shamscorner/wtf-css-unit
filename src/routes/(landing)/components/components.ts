import type { FontSizeType, WhatDeclaringType } from '$lib/types';
import FontSize from './font-size.svelte';
import FontSizeHtml from './font-size-html.svelte';
import FontSizeHtmlNo from './font-size-html-no.svelte';

export const whatDeclaringComponents: Record<WhatDeclaringType, any> = {
	'font-size': FontSize,
	spacing: FontSize,
	positioning: FontSize,
	'details-effects': FontSize,
	'flex-grid': FontSize,
	'width-height': FontSize
};

export const fontSizeComponents: Record<FontSizeType, any> = {
	html: {
		component: FontSizeHtml,
		options: {
			no: FontSizeHtmlNo,
			yes: ''
		}
	},
	body: {
		component: FontSizeHtml,
		options: {
			no: FontSizeHtmlNo,
			yes: ''
		}
	},
	'text-related': {
		component: FontSizeHtml,
		options: {
			no: FontSizeHtmlNo,
			yes: ''
		}
	},
	inline: {
		component: FontSizeHtml,
		options: {
			no: FontSizeHtmlNo,
			yes: ''
		}
	},
	layout: {
		component: FontSizeHtml,
		options: {
			no: FontSizeHtmlNo,
			yes: ''
		}
	}
};
