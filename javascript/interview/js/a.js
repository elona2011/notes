function flatten(arr) {
    return arr.reduce((a, b) => {
        if (Array.isArray(b)) {
            return [...a, ...flatten(b)]
        } else {
            return [...a, b]
        }
    }, [])
}