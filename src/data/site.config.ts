interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Daniel medina', // Site author
	title: 'RootsYoga', // Site title.
	description: 'blog sobre yoga, reiki y registros akashicos', // Description to display in the meta tags
	lang: 'es',
	ogLocale: 'es',
	shareMessage: 'Compartir', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
