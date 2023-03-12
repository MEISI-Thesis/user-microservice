import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Client } from "pg";
import { AbstractDatabase } from "../../@abstracts/database.abstract";
import { EnvCollection } from "./../../../shared/@constants/env.collection";

@Injectable()
export class DatabaseService extends AbstractDatabase {
  private readonly _client: Client | null = null;

  public constructor(
    private readonly _configService: ConfigService
  ) {
    super();
    
    this._client = new Client({
      user: this._configService.get(EnvCollection.DATABASE_USER),
      password: this._configService.get(EnvCollection.DATABASE_PASSWORD),
      database: this._configService.get(EnvCollection.DATABASE_NAME),
      host: this._configService.get(EnvCollection.DATABASE_HOST),
      port: this._configService.get(EnvCollection.DATABASE_PORT),
    });
  }

  public async connect(): Promise<void> {
    await this._client?.connect().catch((error) => {
      throw new HttpException('InternalServerError', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error
      });
    })
  }

  public async disconnect(): Promise<void> {
    await this._client?.end().catch((error) => {
      throw new HttpException('InternalServerError', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error
      });
    })
  }

  public async execute<T>(operator: string): Promise<T> {
    return await this._client?.query(operator).catch((error) => {
      throw new HttpException('InternalServerError', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error
      });
    }) as T
  }

}