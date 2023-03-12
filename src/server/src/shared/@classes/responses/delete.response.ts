import { AbstractResponse } from "src/shared/@abstracts/response.abstract";

export class DeleteResponse<T> extends AbstractResponse<T> {
  public constructor(
    resourceId: string,
    resourceArgs: T,
    private readonly _resourceURL: string
  ) {
    super(resourceId, resourceArgs);
  }

  public get resourceURL(): string {
    return this._resourceURL;
  }
}