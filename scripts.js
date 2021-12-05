const quotes = [
  "sometimes when I close my eyes, I can't see",
  "If Cinderella's shoe fit perfectly, then why did it fall off?",
  "My grandpa started walking five miles a day when he was 60. Now he’s 97 years old and we have no clue where he is.",
  "After twelve years of therapy my psychiatrist said something that brought tears to my eyes. He said, ‘No hablo ingles",
  "Knock knock who’s there? a broken pencil. a broken pencil who? never mind it’s pointless",
  "I can only please one person a day. today isn’t your day. tomorrow doesn’t look good either",
  "Old people at weddings always poke me and say you’re next so I started doing the same thing to them at funerals",
  "No matter how smart you are, you can never convince someone stupid that they are stupid",
  "The downside of playing dumb is that you sound dumb",
  "There are more airplanes in the water than there are submarines in the sky",
  "Those who laugh last thinks slowest"
];

function newQuote() {
    const randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('useme').innerHTML = quotes[randomNumber];
}
