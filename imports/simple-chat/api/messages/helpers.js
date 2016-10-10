/**
 * Check if message belongs to channel
 * @return {Boolean} true if channel
 */
function isFromChannel() {
    return this.channelId && !this.recipient;
}

/**
 * Check if message is a part of direct conversation with user
 * @return {Boolean} true if it is
 */
function isFromDirect() {
    return !this.isFromChannel();
}

/**
 * [isRead description]
 * @return {Boolean} [description]
 * @deprecated
 */
function isRead() {
    return !!this.readAt;
}

export default {
    isFromChannel,
    isFromDirect,
    isRead
};
