export const smoothScroll = (id: string) => {
	let element = document.getElementById(id) as HTMLElement;
	element.scrollIntoView({ behavior: 'smooth' });
};
