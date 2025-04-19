function burner(C, H, O) {
  let water = Math.min(Math.floor(H / 2), O);
  H -= water * 2;
  O -= water;

  let carbonDioxide = Math.min(Math.floor(O / 2), C);
  C -= carbonDioxide;
  O -= carbonDioxide * 2;

  let methane = Math.min(C, Math.floor(H / 4));
  C -= methane;
  H -= methane * 4;

  return [water, carbonDioxide, methane];
}

console.log(burner(45, 11, 100));
