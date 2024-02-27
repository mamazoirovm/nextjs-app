const names = new Map();

export const getNames = () => {
  let arr: string[] = [];

  names.forEach(name => {
    arr.push(name);
  });

  return arr;
};
export const createNames = (nomi: string) => {
names.set(nomi, nomi)
};
