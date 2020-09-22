import { getAuthor } from '../../API';

describe(
  'queries for book information with a unique id',
  () => {
    test('returns an array of objects with user and score properties', async () => {
      await getAuthor()
        .then(
          response => {
            expect(response).toHaveProperty('name');
            expect(response).toHaveProperty('books');
            expect(response.name[0]).toMatch(/Tim O'Reilly/);
          },
        );
    });
  },
);
