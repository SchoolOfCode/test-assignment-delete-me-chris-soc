const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson",
];

const makeLegend = name => `${name} is now a legend.`;

const legendaryCelebs = celebs.map(celeb => makeLegend(celeb));

const vowelCelebs = celebs.filter(celeb => /^[aeiou]/i.test(celeb.toLowerCase()));
