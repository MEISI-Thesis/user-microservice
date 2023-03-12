import { ConfigService } from "@nestjs/config";
import { DatabaseService } from "./database.service";

/**
 * TestSuit might need some looking into
 */

describe('DBService', () => {
  const databaseService = new DatabaseService(
    new ConfigService()
  );

  describe('should', () => {
    beforeEach(() => {
      jest.mock(('pg'), () => {
        const mockClient = {
          connect: jest.fn().mockReturnValue(true),
          query: jest.fn(),
          end: jest.fn().mockReturnValue(true)
        }
  
        return { Client: jest.fn(() => mockClient) };
      })
    })

    afterEach(async () => { 
      await databaseService.disconnect();
      jest.clearAllMocks();
    })
    
    it('connect to the server', () => {
      expect(databaseService.connect()).toBeTruthy();
    })

    it('execute an operation on the server', () => {
      void expect(async () => await databaseService.execute('dummyOperation')).rejects.toThrow();
    })
  })
})