// losse equality checks if something is null OR undefined
interface Container {
  value: number | null | undefined;
}

function multiplyValue(value: number | null | undefined, factor: number) {
  // remove both null and undefined from the type
  console.log(value);
  value *= factor;
}
