const { login } = require('./login');

describe('login()', () => {
  test('trả về true khi đúng user và pass', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('trả về false khi sai mật khẩu', () => {
    expect(login('admin', 'wrong')).toBe(false);
  });

  test('trả về false khi sai username', () => {
    expect(login('user', '123')).toBe(false);
  });

  test('trả về false khi để trống', () => {
    expect(login('', '')).toBe(false);
  });
});
