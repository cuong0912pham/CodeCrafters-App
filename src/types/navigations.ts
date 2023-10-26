export interface NavigateCardType<T = any> {
	title: string;
	navigateTo: string;
	paramList?: T;
}
