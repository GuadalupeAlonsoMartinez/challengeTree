function tree(num) {
  let countRows = num;

  for (let index = 1; index <= countRows; index++) {
    let row = "";
    for (let indexSpace = index; indexSpace < countRows; indexSpace++) {
      row += " ";
    }

    for (
      let indexCharacter = 1;
      indexCharacter <= 2 * index - 1;
      indexCharacter++
    ) {
      row += "0";
    }

    if (index == 1) {
      console.log(row.replace("0", "*"));
    }
    console.log(row);
  }
}

tree(10);
