const { getFormattedDate } = require('./index');

test('Deve retornar uma string de data no formato ISO', () => {
    const data = getFormattedDate();
    expect(typeof data).toBe('string');
    expect(data).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
});