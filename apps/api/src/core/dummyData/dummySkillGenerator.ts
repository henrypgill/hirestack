import { Prisma } from "@hirestack/database";
import { generateLoremIpsum, randomArrayElement } from "../utils.js";

export function dummyManySkillGenerator(
  count,
): Prisma.SkillCreateWithoutUserInput[] {
  const skills: Prisma.SkillCreateWithoutUserInput[] = [];
  for (let i = 0; i < count; i++) {
    skills.push(dummySkillGenerator());
  }
  return skills;
}

export function dummySkillGenerator(): Prisma.SkillCreateWithoutUserInput {
  const randomName = () =>
    randomArrayElement([
      "javascript",
      "python",
      "java",
      "c++",
      "c#",
      "ruby",
      "php",
      "swift",
      "kotlin",
      "typescript",
      "go",
      "rust",
      "scala",
      "perl",
      "html",
      "css",
      "sql",
      "r",
      "objective-c",
      "shell",
      "c",
      "matlab",
      "assembly",
      "vb.net",
      "dart",
      "f#",
      "haskell",
      "lua",
      "groovy",
      "julia",
      "powershell",
      "clojure",
      "elixir",
      "fortran",
      "rust",
      "erlang",
      "cobol",
      "lisp",
      "scheme",
      "prolog",
      "ada",
      "scratch",
      "smalltalk",
      "pl/sql",
      "apex",
      "django",
      "react",
      "angular",
      "vue.js",
      "node.js",
      "express.js",
      "flask",
      "spring",
      "asp.net",
      "ruby on rails",
      "laravel",
      "react native",
    ]);

  const randomType = () =>
    randomArrayElement(["language", "technology", "software", "other"]);

  return {
    name: randomName(),
    type: randomType(),
    experience: Math.floor(Math.random() * 10),
    description: generateLoremIpsum(50),
  };
}
