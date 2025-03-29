function rps(p1, p2) {
  if (p1 === p2) {
    return "Draw!";
  }

  if (
    (p1 === "rock" && (p2 === "scissors" || p2 === "  ")) ||
    (p1 === "scissors" && (p2 === "paper" || p2 === "  ")) ||
    (p1 === "paper" && (p2 === "rock" || p2 === "  "))
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}
//   const rps = (p1, p2) => {
//     if (p1 === p2) {
//       return 'Draw!';
//     }
//     return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
//   };

// الفكرة عمل جميع الاحتمالات الصحيحة و مقارنتها مع ال 2
