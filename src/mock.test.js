function forEach (items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i], i);
  }
}


test('forEach', () => {
  const mockCallback = jest.fn();
  forEach([1, 2, 3], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(3);
  expect(mockCallback.mock.calls[0][0]).toBe(1); // 调用的参数
})