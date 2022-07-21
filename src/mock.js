export const REVIEWS = [
  {
    feedUser: "Denny Hilguston",
    feedUserURL: "https://instagram.com",
    feedUserAdress: "@denny.hill",
    feedUserAvatar: "user-avatar-5.png",
    feedText: `“I know in real-time where the money is spent,and I don’t have to lend out the company’s 
credit card anymore. What a relief!”`,
  },
  {
    feedUser: "Vani Pandey",
    feedUserURL: "https://instagram.com",
    feedUserAdress: "@vani.pandey",
    feedUserAvatar: "user-avatar-6.png",
    feedText: `"VISUALS are much better. The improvements in optics and resolution and much more than a
 modern console generation leap."`,
  },
  {
    feedUser: "Milly Singh",
    feedUserURL: "https://instagram.com",
    feedUserAdress: "@milly.singh",
    feedUserAvatar: "user-avatar-7.png",
    feedText: `"I can actually see the improvent in the graphics, not having the external sensors is a big
 plus."`,
  },
];

export const CARDS = JSON.parse(localStorage.getItem("cards") || "[]");
