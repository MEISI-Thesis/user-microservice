export abstract class AbstractResponse<T> {
  protected constructor(
    private readonly _resourceId: string,
    private readonly _resourceArgs: T
  ) {}

  protected get resourceId(): string {
    return this._resourceId;
  }

  protected get resourceArgs(): T {
    return this._resourceArgs;
  }
}