import { autoComplete } from '../../API';

describe(
  'queries for the input',
  () => {
    test('returns an array of objects that are consist of book properties', async () => {
      await autoComplete()
        .then(
          response => {
            expect(response.length).toEqual(5);
            expect(response[0]).toHaveProperty('title');
          },
        );
    });
  },
);
