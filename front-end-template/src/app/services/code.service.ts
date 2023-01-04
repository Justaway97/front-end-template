import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  private code: any = {};
  constructor() {}

  addCode(codeList: any[]) {
    let cList = codeList.map((c) => c.code);
    let cT = codeList.map((c) => c.code_type)[0];
    this.code[cT] = cList;
  }

  getCodes(codeType: string) {
    return this.code[codeType];
  }

  isCodeTypeExist(optionRule: string) {
    return this.code[optionRule] != undefined;
  }
}
