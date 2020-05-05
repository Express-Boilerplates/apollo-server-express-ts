const Mutation = {
	hello(parent: MutationCallback, args: any) {
		return `Heyyy, you name is ${args.name} right? I guess is with AI :D`
	}
}

export default Mutation
