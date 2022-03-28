require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });
  it('Verifica se retorna erro ao chamar sem parâmetro', async () => {
    const failedRequest = await fetchCharacter();
    expect(failedRequest).toEqual(new Error('You must provide an url'));
  });
  // no exemplo abaixo observe que mesmo que estejamos testando um erro, a promise foi resolvida
  it('Verifica se retorna \'Invalid id\' ao executar a função com um parâmetro inválido', async () => {
    await expect(fetchCharacter('invalidid'))
      .resolves
      .toBe('Invalid id');
  });
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  })
});