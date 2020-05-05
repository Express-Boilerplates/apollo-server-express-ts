const Query = {
	appName(parent: any, args: any) {
		return 'Apollo server express'
	},
	helloWithAuth(parent: any, args: any) {
		return 'A very secret msg'
	}
}

export default Query
