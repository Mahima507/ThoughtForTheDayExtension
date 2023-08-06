function getQuote(){
const quotes = [
    "THINK Positively, PLAN Creatively And ACT Differently Is the way of SUCCESS.......",
    "Every day may not be good… but there’s something good in every day",
    "There is no such thing as failure. It’s a life lesson for future",
    "If you cannot do great things, do small things in a great way.",
    "Aim for the moon. If you miss, you may hit a star.",
    "It always seems impossible until it's done.",
    "Success is a journey not a destination.",
    "All our dreams can come true — if we have the courage to pursue them.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "Don’t compare your life to others. There's no comparison between the sun and the moon, they shine when it's their time.",
    "The art of life is to know how to enjoy a little and to endure very much.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "uccess is always for those who don't wait for things to happen, just make it happen.",
    "Happiness is the only thing that multiplies when you share it.",
    "Change is the end result of all true learning.",
    "Education is the movement from darkness to light.",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    "When something is important enough, you do it even if the odds are not in your favor.",
    "Hold the vision, trust the process.",
    "An investment in knowledge pays the best interest.",
    "A good education is a foundation for a better future.",
    "Focus on making yourself better, not on thinking that you are better.",
    "The past is a place of reference, not a place of residence; the past is a place of learning, not a place of living.",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can, and you’re halfway there.",
    "Definiteness of purpose is the starting point of all achievement.",
    "Lock & Key are of the same, Metal But Lock is always Bigger than Key.  Problems are like Lock & Solutions are like a Key.  So, Don't Focus on Problems, Focus on solution.",
    "Never back down from a real challenge. They give the best lessons in life.",
    "We cannot change the past. We can only take action in the present and, therefore, change the future.",
    "There are certain life lessons that you can only learn in the struggle.",
    "Rock bottom became the solid foundation on which I rebuilt my life.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Life is a succession of lessons which must be lived to be understood.",
    "Success is a process that continues, not a status that you reach. If you are alive, there are lessons to be learned.",
    "Kites rise highest against the wind, not with it",
    "Education is not preparation for life; education is life itself.",
    "The roots of education are bitter, but the fruit is sweet.",
    "The purpose of education is to turn mirrors into windows.",
    "EDUCATION IS ONE THING THAT NO CAN TAKE AWAY FROM YOU",

    // Add more quotes here
  ];
  const index = Math.floor(Math.random()* quotes.length);
  return quotes[index]; 
  }
 document.addEventListener("DOMContentLoaded", function(){
    const quoteElement = document.getElementById("quote");
    const newQuoteButton = document.getElementById("new-quote");
    newQuoteButton.addEventListener("click", function(){
        const quote = getQuote();
        quoteElement.textContent = quote;
 });
    
 });  
 
