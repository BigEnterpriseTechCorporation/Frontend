const compareDates = (d1:string, d2:string):boolean => {
	const date1 = new Date(d1).getTime()
	const date2 = new Date(d2).getTime()

	return date1 < date2
}

export default compareDates