export interface Card {
  title: string;
  logo: string;
  link: string;
}
type Cards = Card[];
export const cards: Cards = [
  {
    title: "Search for your Project Topic",
    logo: "/search-analysis.png",
    link: "/topic",
  },
  {
    title: "Hire an Expert for your Research",
    logo: "/employee.png",
    link: "",
  },
  {
    title: "Submit your Data for Analysis ",
    logo: "/analytics-monitoring.png",
    link: "",
  },
];
