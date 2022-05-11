/*
 *  타입 단언 (타입 변환)
 */

// (<타입>객체)
// (객체 as 타입)

export default interface INameable {
  name: string;
}

let obj: object = { name: 'Jack' };

let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;
console.log(name1, name2);
