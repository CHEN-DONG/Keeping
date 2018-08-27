import { Injectable } from "@nestjs/common";
import _ from 'lodash';

@Injectable()
export class UtilService {
  createResult(content: {}, code: number = 200) {
    return { content, code }
  }
  createError(error: string, code: number = 500) {
    return { error, code }
  }
}