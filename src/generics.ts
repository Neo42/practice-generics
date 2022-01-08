/* eslint-disable @typescript-eslint/no-unused-vars */
// Change these functions into generic functions by altering the
// type signatures. There should be no `unknown` types when you are done
function randomFromList<Type>(list: Type[]) {
  const length = list.length;
  const index = Math.floor(Math.random() * length);
  return list[index];
}
function duplicateList<Type>(list: Type[], count: number = 1) {
  let output: Type[] = [];
  for (let i = 0; i < count; i++) {
    output = output.concat(list);
  }
  return output;
}
function createTuple<TypeA, TypeB>(item1: TypeA, item2: TypeB) {
  return [item1, item2] as const;
}

// Use the following interface to constrain the generic in the next function
interface Length {
  length: number;
}
function getLength<Type extends Length>(item: Type): number {
  return item.length;
}
