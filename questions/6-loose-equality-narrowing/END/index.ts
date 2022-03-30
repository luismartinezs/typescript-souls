interface Container {
  value: number | null | undefined;
}

function multiplyValue(value: number | null | undefined, factor: number) {
  if (value != null) {
    console.log(value);
    value *= factor;
  }
}
