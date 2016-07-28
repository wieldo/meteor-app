export function messages(userId, recipientId) {
  return {
    $or: [{
      'recipient.id': recipientId,
      'author.id': userId
    }, {
      'recipient.id': userId,
      'author.id': recipientId
    }]
  };
};
