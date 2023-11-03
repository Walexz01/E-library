interface price {
  title: string;
  price: string;
  lists: string[];
  tag?: string;
}
export const Prices: price[] = [
  {
    title: "Basic Plan",
    price: "Free",
    lists: [
      "Unlimited access to the e-book library.",
      "Personalized reading settings.",
      "Access to the community for discussions and recommendations.",
      "Monthly newsletter with reading recommendations.",
    ],
  },
  {
    title: "Premium Plan",
    price: "$10/month",
    tag: "popular",
    lists: [
      "All Basic Plan privileges.",
      "Early access to new e-book releases.",
      "Exclusive webinars with authors.",
      "Enhanced customer support.",
    ],
  },
  {
    title: "Pro Plan",
    price: "$20/month",
    lists: [
      "All Premium Plan privileges.",
      "Offline reading with downloadable e-books.",
      "Priority access to community events.",
      "Ad-free experience.",
      "Quarterly e-book giveaways.",
    ],
  },
];
