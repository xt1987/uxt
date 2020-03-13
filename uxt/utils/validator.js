/**
 * 判断是否为有效的大小值
 */
export const isSize = value => {
    if (typeof value === 'number') {
        if (value > 0) {
            return true
        }
    }
    if (typeof value === 'string') {
        return /^\d+(\.\d+)?r?px$/.test(value)
    }
    return false
}

export const allTag = (vNodes, tag) => {
    for (let vn of vNodes) {
        if (!vn.tag) {
            return false
        }
        if (!vn.tag.endsWith(tag)) {
            return false
        }
    }
    return true
}
