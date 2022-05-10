// export default : 한 모듈이 내보내는 기능 중 오직 한개에만 붙일 수 있음
//                  import로 불러올 때 중괄호 {} 없이 사용 가능

export default interface IPerson {
  name: string;
  age: number;
}
