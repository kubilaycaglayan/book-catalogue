import { getAuthor } from '../../API';

describe(
  'queries for author information with a unique id',
  () => {
    test('returns an object with the properties name and books', async () => {
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
