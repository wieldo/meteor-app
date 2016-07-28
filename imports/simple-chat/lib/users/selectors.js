export function all(userId) {
    return {
        _id: {
            $ne: userId
        }
    };
}
