import { Prisma } from "@hirestack/database";
import { generateLoremIpsum, randomArrayElement } from "../utils";
import { dummyManyEducationGenerator } from "./dummyEducationGenerator";
import { dummyManySkillGenerator } from "./dummySkillGenerator";
import { dummyManyRoleGenerator } from "./dummyRoleGenerator";


export function dummyManyUserGenerator(count): Prisma.UserCreateManyInput[] {
    const users:  Prisma.UserCreateManyInput[] = []
    for (let i = 0; i < count; i++) {
        users.push(dummyUserGenerator())
    }
    return users
}


export function dummyUserGenerator(): Prisma.UserCreateInput {

    const firstName = randomFirstName()
    const lastName = randomLastName()
    
        return {
            name: firstName + " " + lastName,
            pronouns: randomPronoun(),
            jobTitle: randomJobTitle(),
            location: randomLocation(),
            email: generateEmail(firstName, lastName),
            phone: "07887396235",
            linkedin: "https://www.linkedin.com/in/henrypgill/",
            github: "https://github.com/henrypgill",
            website: "https://github.com/henrypgill",
            bio: generateLoremIpsum(100),
            education: {create: dummyManyEducationGenerator(Math.floor(Math.random() * 4) + 1)},
            skills: {create: dummyManySkillGenerator(Math.floor(Math.random() * 4) + 1)},
            roles: {create: dummyManyRoleGenerator(Math.floor(Math.random() * 4) + 1)},
        }
    
    }

const randomPronoun = () => randomArrayElement(["he/him", "she/her", "they/them", "other"])

const randomFirstName = () => randomArrayElement(["Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Charlotte", "William", "Sophia", "James", "Amelia", "Benjamin", "Isabella", "Lucas", "Mia", "Henry", "Harper", "Alexander", "Evelyn", "Mason", "Abigail", "Michael", "Emily", "Ethan", "Elizabeth", "Daniel", "Mila", "Matthew", "Ella", "Jackson", "Avery", "Sebastian", "Sofia", "Aiden", "Camila", "Joseph", "Scarlett", "Samuel", "Victoria", "David", "Madison", "Carter", "Luna", "Wyatt", "Grace", "Jayden", "Chloe", "John", "Penelope", "Owen", "Layla", "Dylan", "Riley", "Luke", "Zoey", "Gabriel", "Nora", "Anthony", "Lily", "Isaac", "Hannah", "Grayson", "Aria", "Lincoln", "Eleanor", "Julian", "Hazel", "Levi", "Violet", "Christopher", "Addison", "Joshua", "Willow", "Andrew", "Ellie", "Theodore", "Stella", "Caleb", "Natalie", "Ryan", "Emilia", "Asher", "Nova", "Nathan", "Skylar", "Thomas", "Zoe", "Leo", "Leah", "Isaiah", "Audrey", "Charles", "Bella"]);  
const randomLastName = () => randomArrayElement(["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales"]);
const randomJobTitle = () => randomArrayElement(["Software Engineer", "Data Scientist", "Web Developer", "Product Manager", "UX/UI Designer", "Network Engineer", "Systems Analyst", "Cybersecurity Analyst", "AI/Machine Learning Engineer", "Business Analyst", "DevOps Engineer", "Database Administrator", "Cloud Architect", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile App Developer", "Game Developer", "IT Project Manager", "Quality Assurance Engineer", "Technical Support Specialist", "UI/UX Developer", "Systems Administrator", "IT Consultant", "Hardware Engineer", "Software Architect", "Network Administrator", "IT Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer", "Social Media Manager", "Graphic Designer", "Financial Analyst", "Accountant", "Sales Manager", "HR Manager", "Operations Manager", "Supply Chain Manager", "Customer Success Manager", "Business Development Manager", "Marketing Manager", "Event Coordinator", "Project Coordinator", "Research Analyst", "Legal Counsel", "Executive Assistant", "Administrative Assistant", "Human Resources Coordinator"   ]);
const randomLocation = () => randomArrayElement(["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Leeds", "Sheffield", "Edinburgh", "Bristol", "Cardiff", "Newcastle", "Belfast", "Reading", "Nottingham", "Southampton", "Leicester", "Coventry", "Bradford", "Stoke-on-Trent", "Wolverhampton", "Derby", "Swansea", "Sunderland", "Portsmouth", "York", "Middlesbrough", "Peterborough", "Stockport", "Brighton", "Telford", "West Bromwich", "Slough", "Blackpool", "Dundee", "Luton", "Basildon", "Woking", "Rotherham", "Basingstoke", "Maidstone", "Eastbourne", "Carlisle", "Halifax", "Watford", "Ipswich", "Chelmsford", "Exeter", "Gloucester", "Cambridge"]);
const generateEmail = (fName, lName) => `${fName}.${lName}@${randomArrayElement(["yahoo.com", "gmail.com", "outlook.com", "mail.uk", "aol.live", "yahoo.co.uk"])}`

