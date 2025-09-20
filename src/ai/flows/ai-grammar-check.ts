'use server';

/**
 * @fileOverview Provides AI-powered grammar and clarity checks for interview responses.
 *
 * - aiGrammarCheck - A function that analyzes text for grammar and clarity.
 * - AIGrammarCheckInput - The input type for the aiGrammarCheck function.
 * - AIGrammarCheckOutput - The return type for the aiGrammarCheck function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIGrammarCheckInputSchema = z.object({
  text: z
    .string()
    .describe('The text to be analyzed for grammar and clarity.'),
});
export type AIGrammarCheckInput = z.infer<typeof AIGrammarCheckInputSchema>;

const AIGrammarCheckOutputSchema = z.object({
  feedback: z
    .string()
    .describe('AI-powered feedback on the grammar and clarity of the provided text.'),
});
export type AIGrammarCheckOutput = z.infer<typeof AIGrammarCheckOutputSchema>;

export async function aiGrammarCheck(input: AIGrammarCheckInput): Promise<AIGrammarCheckOutput> {
  return aiGrammarCheckFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiGrammarCheckPrompt',
  input: {schema: AIGrammarCheckInputSchema},
  output: {schema: AIGrammarCheckOutputSchema},
  prompt: `You are an AI assistant that provides feedback on the grammar and clarity of the given text.

  Analyze the text and provide specific suggestions for improvement. Focus on grammar, sentence structure, word choice, and overall clarity. Be concise and constructive.

  Text: {{{text}}}`,
});

const aiGrammarCheckFlow = ai.defineFlow(
  {
    name: 'aiGrammarCheckFlow',
    inputSchema: AIGrammarCheckInputSchema,
    outputSchema: AIGrammarCheckOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
