let height = undefined;
let result = (a) => {
  return a ?? "Height is not defined";
};
console.log(result(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
