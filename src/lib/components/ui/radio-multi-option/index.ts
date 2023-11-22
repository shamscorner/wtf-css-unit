import Root from './radio-multi-option.svelte';
import type { WhatDeclaringType } from '$lib/types';

type ItemType = {
	title: string;
	value: WhatDeclaringType | '';
	hint: string;
};

type Props = {
	title: string;
	value: WhatDeclaringType | '';
	items: ItemType[];
};

export {
	Root,
	type Props,
	//
	Root as RadioMultiOption,
	type Props as RadioMultiOptionProps,
	type ItemType as RadioMultiOptionItemType
};
