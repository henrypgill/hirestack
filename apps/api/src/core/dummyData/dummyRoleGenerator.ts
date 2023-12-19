import { Prisma } from "@hirestack/database";
import { generateLoremIpsum, randomArrayElement } from "../utils";

export function dummyManyRoleGenerator(count): Prisma.RoleCreateWithoutUserInput[] {
    const roles:  Prisma.RoleCreateWithoutUserInput[] = []
    for (let i = 0; i < count; i++) {
        roles.push(dummyRoleGenerator())
    }
    return roles
}

export function dummyRoleGenerator(): Prisma.RoleCreateWithoutUserInput {
    
    const randomTitle = () => randomArrayElement([  "Software Engineer",
    "Data Scientist",
    "Web Developer",
    "Product Manager",
    "UX/UI Designer",
    "Network Engineer",
    "Systems Analyst",
    "Cybersecurity Analyst",
    "AI/Machine Learning Engineer",
    "Business Analyst",
    "DevOps Engineer",
    "Database Administrator",
    "Cloud Architect",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "Game Developer",
    "IT Project Manager",
    "Quality Assurance Engineer",
    "Technical Support Specialist",
    "UI/UX Developer",
    "Systems Administrator",
    "IT Consultant",
    "Hardware Engineer",
    "Software Architect",
    "Network Administrator",
    "IT Manager",
    "Digital Marketing Specialist",
    "SEO Specialist",
    "Content Writer",
    "Social Media Manager",
    "Graphic Designer",
    "Financial Analyst",
    "Accountant",
    "Sales Manager",
    "HR Manager",
    "Operations Manager",
    "Supply Chain Manager",
    "Customer Success Manager",
    "Business Development Manager",
    "Marketing Manager",
    "Event Coordinator",
    "Project Coordinator",
    "Research Analyst",
    "Legal Counsel",
    "Executive Assistant",
    "Administrative Assistant",
    "Human Resources Coordinator"
    ]);

    const randomCompany = () => randomArrayElement(["Google",
    "Apple",
    "Amazon",
    "Microsoft",
    "Facebook",
    "Tesla",
    "Netflix",
    "Twitter",
    "Uber",
    "Airbnb",
    "Salesforce",
    "IBM",
    "Intel",
    "Cisco",
    "Oracle",
    "Adobe",
    "Samsung",
    "HP",
    "Nvidia",
    "PayPal",
    "Sony",
    "LinkedIn",
    "Dropbox",
    "Reddit",
    "SpaceX",
    "Slack",
    "Shopify",
    "Zoom",
    "Square",
    "Twitch",
    "Pinterest",
    "Etsy",
    "Snapchat",
    "VMware",
    "Qualcomm",
    "Ford",
    "General Motors",
    "Boeing",
    "Toyota",
    "Nestle",
    "Coca-Cola",
    "PepsiCo",
    "McDonald's",
    "Starbucks",
    "Walmart",
    "Target",
    "Nike",
    "Adidas",
    "L'Oreal",
    "Procter & Gamble",
    "Unilever",
    "Nest",
    "Panasonic",
    "General Electric",
    "Siemens",
    "Dell",
    "Lenovo",
    "Uber",
    "Airbnb",
    "Dropbox",
    "SpaceX",
    "Reddit",
    "Tencent",
    "Alibaba",
    "Baidu",
    "JD.com",
    "Huawei",
    "Booking.com",
    "Booking Holdings",
    "Expedia Group",
    "TripAdvisor",
    "Skyscanner",
    "Uber Eats",
    "DoorDash",
    "Grab",
    "Zomato",
    "Delivery Hero",
    "Instacart",
    "Postmates",
    "Wayfair",
    "Ebay",
    "Alibaba Group",
    "SoftBank",
    "Sony",
    "Nintendo",
    "Electronic Arts",
    "Activision Blizzard",
    "Take-Two Interactive",
    "Ubisoft",
    "Rockstar Games",
    "Epic Games",
    "Warner Bros. Interactive Entertainment"
    ]);

    
    return {
        title: randomTitle(),
        company: randomCompany(),
        description: generateLoremIpsum(100),
        startMonth: Math.floor(Math.random() * 12),
        startYear: 2000 + Math.floor(Math.random() * 23),
        endMonth: Math.floor(Math.random() * 12),
        endYear: 2000 + Math.floor(Math.random() * 23),
    }
}

