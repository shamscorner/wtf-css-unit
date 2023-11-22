export type linkTarget = '_blank' | '_self' | '_parent' | '_top';

export type FpType = {
	landing: string;
	referrer: string;
	referrerUrl: string;
	ua: string;
	rc: string;
};

export type WhatDeclaringType =
	| 'font-size'
	| 'spacing'
	| 'positioning'
	| 'details-effects'
	| 'flex-grid'
	| 'width-height';

export type FontSizeType =
	| 'html'
	| 'body'
	| 'text-related'
	| 'inline'
	| 'layout';
