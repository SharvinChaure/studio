import { placeholderImages } from "./placeholder-images.json";

export const progressData = {
  quizzesCompleted: 42,
  codingChallengesSolved: 28,
  resumeAtsScore: 88,
  streak: 14,
  xp: 12540,
  badges: ["Python Pro", "Aptitude Ace"],
};

export const skills = [
  { name: "Java", level: 85 },
  { name: "Python", level: 95 },
  { name: "Data Structures", level: 75 },
  { name: "Algorithms", level: 80 },
  { name: "React", level: 60 },
  { name: "Logical Reasoning", level: 90 },
  { name: "SQL", level: 70 },
  { name: "System Design", level: 50 },
];

export const suggestedPaths = [
  {
    topic: "System Design",
    reason: "Your performance in system design challenges is lower than other areas. Strengthening this will be crucial for senior roles.",
    resources: ["Grokking the System Design Interview", "System Design Primer on GitHub"],
  },
  {
    topic: "React",
    reason: "Based on your goal to become proficient in frontend development, focusing on React will help you build modern web applications.",
    resources: ["Official React Docs", "Full-Stack Open Course"],
  },
];

export const leaderboardData = [
  {
    id: 1,
    rank: 1,
    name: "Sumit",
    xp: 18230,
    avatarUrl: placeholderImages[1].imageUrl,
    badges: ["Code Master", "Quiz Whiz", "Top Contributor"],
  },
  {
    id: 2,
    rank: 2,
    name: "Abhi",
    xp: 12540,
    avatarUrl: placeholderImages[0].imageUrl,
    badges: ["Python Pro", "Aptitude Ace"],
  },
  {
    id: 3,
    rank: 3,
    name: "Ayush",
    xp: 11980,
    avatarUrl: placeholderImages[2].imageUrl,
    badges: ["Java Guru", "Streak Keeper"],
  },
  {
    id: 4,
    rank: 4,
    name: "Saisha",
    xp: 10500,
    avatarUrl: placeholderImages[3].imageUrl,
    badges: ["Problem Solver", "Aptitude Ace"],
  },
  {
    id: 5,
    rank: 5,
    name: "Rohan",
    xp: 9850,
    avatarUrl: placeholderImages[4].imageUrl,
    badges: ["Python Pro", "Streak Starter"],
  },
];

export const communityPosts = [
  {
    id: 1,
    title: "How to approach dynamic programming problems?",
    content: "I always struggle with identifying the subproblems and the recurrence relation. Any tips or resources that helped you 'get' DP?",
    author: { name: "Ayush", avatarUrl: placeholderImages[2].imageUrl },
    timestamp: "2 hours ago",
    votes: 28,
    comments: 12,
  },
  {
    id: 2,
    title: "Best way to prepare for FAANG company interviews?",
    content: "I have an interview coming up in a few weeks. What should be my main focus? LeetCode, system design, or behavioral questions?",
    author: { name: "Saisha", avatarUrl: placeholderImages[3].imageUrl },
    timestamp: "1 day ago",
    votes: 15,
    comments: 8,
  },
  {
    id: 3,
    title: "Share your resume success stories!",
    content: "Has anyone seen a significant increase in interview calls after using the ATS checker here? I just improved my score from 60% to 85%!",
    author: { name: "Sumit", avatarUrl: placeholderImages[1].imageUrl },
    timestamp: "3 days ago",
    votes: 45,
    comments: 22,
  },
];

export const quizzes = [
  {
    id: "logical-reasoning-1",
    title: "Logical Reasoning Practice",
    description: "A set of questions to test your logical deduction and reasoning skills.",
    duration: 15,
    questions: [
      { id: 1, text: "If all cats are mammals and all mammals have hearts, do all cats have hearts?", options: ["Yes", "No", "Cannot be determined"] },
      { id: 2, text: "Which number should come next in the series: 1, 4, 9, 16, __?", options: ["20", "25", "30"] },
      { id: 3, text: "Find the odd one out: Car, Bicycle, Truck, Bus", options: ["Bicycle", "Car", "Truck"] },
    ],
  },
  {
    id: "quantitative-aptitude-1",
    title: "Quantitative Aptitude Basics",
    description: "Assess your basic quantitative and mathematical problem-solving abilities.",
    duration: 20,
    questions: [
      { id: 1, text: "A train running at 60 km/hr crosses a pole in 9 seconds. What is the length of the train?", options: ["120 meters", "150 meters", "180 meters"] },
      { id: 2, text: "If the price of an item is decreased by 10% and then increased by 10%, the net effect on the price is:", options: ["No change", "Decrease of 1%", "Increase of 1%"] },
    ],
  },
  {
    id: "verbal-ability-1",
    title: "Verbal Ability Challenge",
    description: "Test your vocabulary, grammar, and comprehension skills.",
    duration: 10,
    questions: [
      { id: 1, text: "Choose the synonym for 'Ephemeral'", options: ["Eternal", "Transient", "Weak"] },
    ],
  },
];

export const challenges = [
  {
    id: "two-sum",
    title: "Two Sum",
    description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "Easy",
    languages: ["Python", "Java", "C++"],
  },
  {
    id: "lru-cache",
    title: "LRU Cache",
    description: "Design and implement a data structure for Least Recently Used (LRU) cache.",
    difficulty: "Medium",
    languages: ["Python", "Java", "C++"],
  },
  {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    description: "Given two sorted arrays, find the median of the two sorted arrays.",
    difficulty: "Hard",
    languages: ["Python", "Java"],
  },
    {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    description: "Reverse a singly linked list.",
    difficulty: "Easy",
    languages: ["Python", "Java", "C++"],
  },
];

export const hrInterviewQuestions = [
  { id: 1, question: "Tell me about yourself." },
  { id: 2, question: "What are your strengths and weaknesses?" },
  { id: 3, question: "Why do you want to work for this company?" },
  { id: 4, question: "Where do you see yourself in five years?" },
  { id: 5, question: "Describe a challenging situation you faced and how you handled it." },
];
