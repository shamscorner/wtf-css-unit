import type { Icon as LucideIcon } from 'lucide-svelte';
import {
	Loader2,
	X,
	ChevronsUpDown,
	ArrowRight,
	Twitter,
	Github,
	Linkedin,
	Facebook,
	Home
} from 'lucide-svelte';

import Google from './google.svelte';

export type Icon = LucideIcon;

export const Icons = {
	spinner: Loader2,
	google: Google,
	close: X,
	select: ChevronsUpDown,
	arrowRight: ArrowRight,
	twitter: Twitter,
	github: Github,
	linkedin: Linkedin,
	facebook: Facebook,
	home: Home
};

export type IconType = any;
