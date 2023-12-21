export const useNavigation = () => {
    return (path) => {
        const lowerPath = path.toLowerCase()
        if (lowerPath === 'home') {
            return '/'
        }
        if (lowerPath === 'shows') {
            return `${path}/1`
        }
        if (lowerPath === 'people') {
            return `${path}/1`
        }
        return lowerPath
    };
}