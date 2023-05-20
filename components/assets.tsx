import { v4 as uuid } from "uuid";
export interface Card {
  title: string;
  logo: string;
  link: string;
  id: string;
}
type Cards = Card[];
export const cards: Cards = [
  {
    title: "Search for your Project Topic",
    logo: "/search-analysis.png",
    link: "/topics",
    id: "12345qweryugry45",
  },
  {
    title: "Hire an Expert for your Research",
    logo: "/employee.png",
    link: "/hire-writer",
    id: "3675hj76rhj56uyh",
  },
  {
    title: "Submit your Data for Analysis ",
    logo: "/analytics-monitoring.png",
    link: "/hire-writer",
    id: "99707ghmcnkfvhhkf",
  },
];
interface FAQ {
  question: string;
  answer: string;
  id: string;
}
const UniqueId = uuid();
export const faq = [
  {
    question: "How do i choose a Good Project Topic? ",
    answer:
      "Look for your department and select any project topic of your choice based on your area of interest",
    id: UniqueId,
  },
  {
    question:
      "I have a new project topic that is not on your website. How do I go about it? ",
    answer: "Hire a writer or contact us",
    id: UniqueId,
  },
  {
    question: "How fast can i get a complete project from your website?",
    answer: " Within 15 minutes if the exact project topic is on our website",
    id: UniqueId,
  },
  {
    question: "Is it a complete research project or just materials?",
    answer:
      "It is a Complete Research Project i.e Chapters 1-5 including Abstract, Table of Contents, Full References, Questionnaires / Secondary Data",
    id: UniqueId,
  },
  {
    question: "How do i get my complete project?",
    answer:
      "  Your Complete Project Material will be sent to your Email Address in Ms Word document format or PDF format.",
    id: UniqueId,
  },
  {
    question: "Can I get my Complete Project through WhatsApp?",
    answer:
      "  Yes! We can send your Complete Research Project to your WhatsApp Number. Chat with us on +234 814 010 7220 Now!",
    id: UniqueId,
  },
  {
    question:
      "What if my Project Supervisor made some changes to a project topic i picked from your website?",
    answer:
      " Chat with Our Instant Help Desk Now: +234 814 010 7220 and you will be responded to immediately",
    id: UniqueId,
  },
  {
    question: "Do you assist students with Assignment and Project Proposal?",
    answer:
      "Yes! Chat with Our Instant Help Desk Now: +234 814 010 7220 and you will be responded to immediately",
    id: UniqueId,
  },
  {
    question: "How can i trust this site?",
    answer:
      "We are well aware of fraudulent activities that have been happening on the internet. It is regrettable, but hopefully declining. However, we wish to reinstate to our esteemed clients that we are genuine and duly registered with the Corporate Affairs Commission as 'PRIMED TECHNOLOGY'. This site runs on Secure Sockets Layer (SSL), therefore all transactions on this site are HIGHLY secure and safe!",
    id: UniqueId,
  },
];
export interface Comment {
  id: number;
  firstName: string;
  surname: string;
  institution: string;
  comment: string;
}

export interface Comment {
  surname: string;
  firstName: string;
  comment: string;
  institution: string;
  _id: string;
}
export type Comments = Comment[];
