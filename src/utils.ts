export function mapSmilefjesToEmoji(smilefjes: string): string {
  if (smilefjes == "BLID") {
    return "😃";
  } else if (smilefjes == "NØYTRAL") {
    return "😐";
  } else {
    return "😠";
  }
}
