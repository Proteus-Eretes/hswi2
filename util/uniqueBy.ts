export default (data, key) => {
    const seen = [];
    return data.filter(item => {
        if (seen.includes(item[key])) {
            return false;
        }
        seen.push(item[key]);
        return true;
    });
};