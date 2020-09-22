import { getBook } from '../../API';

describe(
  'queries for book information with a unique id',
  () => {
    test('returns an object with the properties id, title', async () => {
      await getBook()
        .then(
          response => {
            expect(response).toHaveProperty('id');
            expect(response).toHaveProperty('title');
            expect(response.title[0]).toMatch(/De wereld van Sofie/);
          },
        );
    });
  },
);
