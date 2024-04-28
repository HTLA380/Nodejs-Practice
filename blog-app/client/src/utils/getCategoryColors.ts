export function getCategoryColors(category: string): {
  backgroundColor: string;
  textColor: string;
} {
  let backgroundColor: string;
  let textColor: string;

  switch (category.toLowerCase()) {
    case "change":
      backgroundColor = "#F9F5FF";
      textColor = "#6941C6";
      break;
    case "research":
      backgroundColor = "#EEF4FF";
      textColor = "#3538CD";
      break;
    case "challenges":
      backgroundColor = "#FDF2FA";
      textColor = "#C11574";
      break;
    case "interface":
      backgroundColor = "#F0F9FF";
      textColor = "#026AA2";
      break;
    default:
      backgroundColor = "#F0F9FF";
      textColor = "#026AA2";
      break;
  }

  return { backgroundColor, textColor };
}
