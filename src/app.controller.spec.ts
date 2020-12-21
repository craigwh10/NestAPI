import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('health checker', () => {
    it('Should return healthy when calling health checker', async () => {
      expect(await appController.healthCheck()).toEqual('Healthy');
    });
  });
});
