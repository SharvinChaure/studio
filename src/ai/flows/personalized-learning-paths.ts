'use server';

/**
 * @fileOverview An AI agent that analyzes user performance and suggests personalized practice paths.
 *
 * - suggestLearningPath - A function that analyzes performance and suggests a learning path.
 * - LearningPathInput - The input type for the suggestLearningPath function.
 * - LearningPathOutput - The return type for the suggestLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LearningPathInputSchema = z.object({
  quizPerformance: z.array(
    z.object({
      quizId: z.string().describe('The ID of the quiz.'),
      score: z.number().describe('The score achieved on the quiz.'),
      maxScore: z.number().describe('The maximum possible score on the quiz.'),
      topic: z.string().describe('The topic of the quiz (e.g., Java, Python, Aptitude).'),
    })
  ).describe('An array of quiz performance data for the user.'),
  codingChallengePerformance: z.array(
    z.object({
      challengeId: z.string().describe('The ID of the coding challenge.'),
      score: z.number().describe('The score achieved on the coding challenge.'),
      maxScore: z.number().describe('The maximum possible score on the coding challenge.'),
      language: z.string().describe('The programming language used (e.g., Python, Java, C++).'),
      topic: z.string().describe('The topic of the challenge (e.g., Data Structures, Algorithms).'),
    })
  ).describe('An array of coding challenge performance data for the user.'),
  userGoals: z.string().describe('The users goals (e.g. become proficient in React)'),
});

export type LearningPathInput = z.infer<typeof LearningPathInputSchema>;

const LearningPathOutputSchema = z.object({
  suggestedPaths: z.array(
    z.object({
      topic: z.string().describe('The topic to focus on (e.g., Java, Python, Aptitude, React).'),
      reason: z.string().describe('Why this topic is suggested based on performance.'),
      resources: z.array(z.string()).describe('List of resource URLs or descriptions.'),
    })
  ).describe('An array of suggested learning paths based on performance.'),
});

export type LearningPathOutput = z.infer<typeof LearningPathOutputSchema>;

export async function suggestLearningPath(input: LearningPathInput): Promise<LearningPathOutput> {
  return suggestLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'learningPathPrompt',
  input: {schema: LearningPathInputSchema},
  output: {schema: LearningPathOutputSchema},
  prompt: `You are an AI career coach. You will analyze the user's quiz and coding challenge performance, then suggest personalized learning paths that help the user to focus on their weaknesses and improve their skills efficiently.

  Consider the user's stated goals when generating a path.

Quiz Performance:
{{#each quizPerformance}}
  - Quiz ID: {{quizId}}, Score: {{score}}/{{maxScore}}, Topic: {{topic}}
{{/each}}

Coding Challenge Performance:
{{#each codingChallengePerformance}}
  - Challenge ID: {{challengeId}}, Score: {{score}}/{{maxScore}}, Language: {{language}}, Topic: {{topic}}
{{/each}}

User Goals: {{{userGoals}}}

Suggest learning paths based on this information. Explain why each path is suggested and provide some resources for each topic.`,
});

const suggestLearningPathFlow = ai.defineFlow(
  {
    name: 'suggestLearningPathFlow',
    inputSchema: LearningPathInputSchema,
    outputSchema: LearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
