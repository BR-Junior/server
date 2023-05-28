import {UserUseCaseCreate} from './UserUseCaseCreate';
import {UserRepositoryFake} from '../../../domain/repositories/repository/UserRepositoryFake';


describe('', () => {
  const userRepository = new UserRepositoryFake;
  const userUseCaseCreate = new UserUseCaseCreate(userRepository);

  test('', async () => {
    const result = await userUseCaseCreate.create({
      name: 'teste jest',
      email: 'testejest@teste.com',
      password: '123456'
    });

    expect(result).toEqual({
      id: expect.any(String),
      name: 'teste jest',
      email: 'testejest@teste.com',
      password: '123456'
    });
  });
});