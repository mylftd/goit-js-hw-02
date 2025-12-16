function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  }
  return message.slice(0, maxLength) + '...';
}
