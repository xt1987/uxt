
// 对象深复制
export const deepCopy = obj => {
    if (typeof obj !== 'object') {
		return obj
	}
	return JSON.parse(JSON.stringify(obj))
}