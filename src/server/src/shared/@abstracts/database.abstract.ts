export abstract class AbstractDatabase {
  public abstract connect(): Promise<void>;
  public abstract disconnect(): Promise<void>;
  public abstract execute<T>(operator: string): Promise<T>;
}