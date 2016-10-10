export function all(userId) {
    return {
        $or: [{
            "authorId": userId
        }, {
            "users.id": userId
        }]
    };
}

export function one(userId, channelId) {
    return {
        _id: channelId,
        $or: [{
            authorId: userId
        }, {
            "users.id": userId
        }]
    };
}

export function messages(channelId) {
    return {
        channelId
    };
}
