
import { Prisma } from "@hirestack/database"
import { generateLoremIpsum, randomArrayElement } from "../utils.js";


export function dummyManyEducationGenerator(count): Prisma.EducationCreateWithoutUserInput[] {
    const education:  Prisma.EducationCreateWithoutUserInput[] = []
    for (let i = 0; i < count; i++) {
        education.push(dummyEducationGenerator())
    }
    return education
}


export function dummyEducationGenerator(): Prisma.EducationCreateWithoutUserInput {
    const randomSpecialisation = () => randomArrayElement(["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Aerospace Engineering", "Software Engineering", "Mathematics", "Physics", "Chemistry", "Biology", "Environmental Science", "Information Technology", "Data Science", "Astrophysics", "Materials Science", "Geology", "Statistics", "Robotics Engineering"]);
    
    const randomProvider = () => randomArrayElement([
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

    const randomType = () => randomArrayElement(["undergraduate", "masters", "phd", "bootcamp", "course"])
    
    return {
        specialization: randomSpecialisation(),
        provider: randomProvider(),
        type: randomType(),
        description: generateLoremIpsum(100)
    }
}

