export const getSelectedMessage = () => ({
  id: 'mock-message-id',
  content: 'Mock message content',
});
export const getState = () => ({
  selectedMessage: getSelectedMessage(),
});
