import { AbstractResponse } from "src/shared/@abstracts/response.abstract";

export class UpdateResponse<T> extends AbstractResponse<T> {
  public constructor(
    resourceId: string,
    resourceArgs: T,
    private readonly _oldResourceURL: string,
    private readonly _newResourceURL: string,
  ) {
    super(resourceId, resourceArgs);
  }

  public get oldResourceURL(): string {
    return this._oldResourceURL;
  }

  public get newResourceURL(): string {
    return this._newResourceURL;
  }
}