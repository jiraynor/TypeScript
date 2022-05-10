// import * as 심벌 from '파일 상대 경로'
// import * as U from "../utils/makeRandomNumber";
import { makeRandomNumber } from "../utils/makeRandomNumber";
// export default로 내보낸 기능은 {} 없이 import 가능
import IPerson from "./IPerson";

export default class Person implements IPerson {
  constructor(public name: string, public age: number = makeRandomNumber()) {}
}

export const makePerson = (name: string, age: number = makeRandomNumber()) => ({
  name,
  age,
});
