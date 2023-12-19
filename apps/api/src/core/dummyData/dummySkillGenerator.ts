
import { Prisma } from "@hirestack/database"
import { generateLoremIpsum, randomArrayElement } from "../utils.js";



export function dummyManySkillGenerator(count): Prisma.SkillCreateWithoutUserInput[] {
    const skills:  Prisma.SkillCreateWithoutUserInput[] = []
    for (let i = 0; i < count; i++) {
        skills.push(dummySkillGenerator())
    }
    return skills
}

export function dummySkillGenerator(): Prisma.SkillCreateWithoutUserInput {
    
    const randomName = () => randomArrayElement([
        "University of Cambridge",
        "Imperial College London",
        "University of Oxford",
        "University College London (UCL)",
        "University of Edinburgh",
        "University of Manchester",
        "University of Bristol",
        "University of Warwick",
        "University of Glasgow",
        "University of Southampton",
        "University of Birmingham",
        "University of Leeds",
        "University of Sheffield",
        "University of Nottingham",
        "University of York",
        "King's College London",
        "Queen Mary University of London",
        "University of Liverpool",
        "University of Bath",
        "Lancaster University",
        "Le Wagon London",
        "General Assembly London",
        "Makers Academy London",
        "Flatiron School London",
        "Northcoders Manchester",
        "Tech Talent Academy Edinburgh",
        "CodeClan Glasgow",
        "School of Code Birmingham",
        "DevelopMe Bristol",
        "Cyber Retraining Academy London"
      ]);

    const randomType = () => randomArrayElement(["language", "technology", "software", "other"])
    
    return {
        name: randomName(),
        type: randomType(),
        experience: Math.floor(Math.random() * 10),
        description: generateLoremIpsum(50),
    }
}

