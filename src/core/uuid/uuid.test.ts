import { uuid } from './uuid';

describe('uuid', () => {
  test('Empty', () => {
    expect(uuid().length).toEqual(36);
    expect(uuid()).toMatch(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/);
  });
});
