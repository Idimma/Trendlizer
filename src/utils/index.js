export Helper from './helper';
export {resource} from './locales';

export const orderBY = value => `orderBy=%22${value}%22`;
export const json = '.json';
export const equalTo = value => `&equalTo=%22${value}%22`;

export function limitTolast(value) {
	return `&limitToLast=${value}`;
}

export function limitTofirst(value) {
	return `&limitToFirst=${value}`;
}

export function pretty() {
// eslint-disable-next-line no-useless-escape
	return '&print=\"pretty\"';
}

