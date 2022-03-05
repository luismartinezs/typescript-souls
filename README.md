# Typescript Souls

You want to learn Typescript. You probably have an idea of what Typescript is, so let's jump in.

NOTE: I assume you know how to use the terminal, and know some javascript

## BEGINNER

### 1.1

In a terminal:

1. Install typescript `npm i -g typescript` (or yarn, or pnpm)
2. Create a new directory somewhere, and a file named `index.ts` inside it: `mkdir ts-souls && cd ts-souls && touch index.ts`
3. Copypaste this in `index.ts`
  ```ts
  let id: number = 1;
  console.log(id);
  ```
4. `tsc index.ts`
5. Congratulations, you just run a typsecript file!