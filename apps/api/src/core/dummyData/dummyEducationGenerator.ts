import { Prisma } from "@hirestack/database";
import { generateLoremIpsum, randomArrayElement } from "../utils.js";

export function dummyManyEducationGenerator(
  count,
): Prisma.EducationCreateWithoutUserInput[] {
  const education: Prisma.EducationCreateWithoutUserInput[] = [];
  for (let i = 0; i < count; i++) {
    education.push(dummyEducationGenerator());
  }
  return education;
}

export function dummyEducationGenerator(): Prisma.EducationCreateWithoutUserInput {
  const randomSpecialisation = () =>
    randomArrayElement([
      "computer science",
      "electrical engineering",
      "mechanical engineering",
      "biomedical engineering",
      "chemical engineering",
      "civil engineering",
      "aerospace engineering",
      "software engineering",
      "mathematics",
      "physics",
      "chemistry",
      "biology",
      "environmental science",
      "information technology",
      "data science",
      "astrophysics",
      "materials science",
      "geology",
      "statistics",
      "robotics engineering",
    ]);

  const randomProvider = () =>
    randomArrayElement([
      "university of cambridge",
      "imperial college london",
      "university of oxford",
      "university college london (ucl)",
      "university of edinburgh",
      "university of manchester",
      "university of bristol",
      "university of warwick",
      "university of glasgow",
      "university of southampton",
      "university of birmingham",
      "university of leeds",
      "university of sheffield",
      "university of nottingham",
      "university of york",
      "king's college london",
      "queen mary university of london",
      "university of liverpool",
      "university of bath",
      "lancaster university",
      "le wagon london",
      "general assembly london",
      "makers academy london",
      "flatiron school london",
      "northcoders manchester",
      "tech talent academy edinburgh",
      "codeclan glasgow",
      "school of code birmingham",
      "developme bristol",
      "cyber retraining academy london",
    ]);

  const randomType = () =>
    randomArrayElement([
      "undergraduate",
      "masters",
      "phd",
      "bootcamp",
      "course",
    ]);

  return {
    specialization: randomSpecialisation(),
    provider: randomProvider(),
    type: randomType(),
    description: generateLoremIpsum(100),
  };
}
