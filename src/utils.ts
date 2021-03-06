export function mapSmilefjesToEmoji(smilefjes: string): string {
  if (smilefjes == "BLID") {
    return "π";
  } else if (smilefjes == "NΓYTRAL") {
    return "π";
  } else {
    return "π ";
  }
}

export function mapSmilefjesScoreToEmoji(score: number): string {
  switch (score) {
    case 0:
    case 1:
      return "π";
    case 2:
      return "π";
    case 3:
      return "π ";
    default:
      return "π";
  }
}
