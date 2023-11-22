import Root from './radio-multi-option.svelte';

type ItemType = {
	title: string;
	value: string;
	hint: string;
};

type Props = {
	title: string;
	value: string;
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
