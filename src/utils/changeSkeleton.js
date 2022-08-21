export const changeSkeleton = (status, fn, delay) => {
	setTimeout(() => {
		fn(status)
	}, delay)
}
