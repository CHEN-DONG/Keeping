import { IResult } from "../interfaces/result.interface";
import { HttpException } from "@nestjs/common";
import { HTTP_CODE_ENUM } from "../enums/http-code.enum";

function createResult(
  dataOrError: any | Error | HttpException,
  code?: number,
): IResult {
  let data = {};
  if (dataOrError instanceof HttpException) {
    if (code === undefined) {
      code = HTTP_CODE_ENUM.INTERNAL_SERVER_ERROR;
    }
  } else if (dataOrError instanceof Error) {
    if (code === undefined) {
      code = HTTP_CODE_ENUM.INTERNAL_SERVER_ERROR;
    }
  } else {
    data = dataOrError;
    code = HTTP_CODE_ENUM.OK;
  }
  return { data, code };
}

export {
  createResult
}
