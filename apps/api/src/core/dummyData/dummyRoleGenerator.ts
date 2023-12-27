import { Prisma } from "@hirestack/database";
import { generateLoremIpsum, randomArrayElement } from "../utils.js";

export function dummyManyRoleGenerator(
  count,
): Prisma.RoleCreateWithoutUserInput[] {
  const roles: Prisma.RoleCreateWithoutUserInput[] = [];
  for (let i = 0; i < count; i++) {
    roles.push(dummyRoleGenerator());
  }
  return roles;
}

export function dummyRoleGenerator(): Prisma.RoleCreateWithoutUserInput {
  const randomTitle = () =>
    randomArrayElement([
      "software engineer",
      "data scientist",
      "web developer",
      "product manager",
      "ux/ui designer",
      "network engineer",
      "systems analyst",
      "cybersecurity analyst",
      "ai/machine learning engineer",
      "business analyst",
      "devops engineer",
      "database administrator",
      "cloud architect",
      "frontend developer",
      "backend developer",
      "full stack developer",
      "mobile app developer",
      "game developer",
      "it project manager",
      "quality assurance engineer",
      "technical support specialist",
      "ui/ux developer",
      "systems administrator",
      "it consultant",
      "hardware engineer",
      "software architect",
      "network administrator",
      "it manager",
      "digital marketing specialist",
      "seo specialist",
      "content writer",
      "social media manager",
      "graphic designer",
      "financial analyst",
      "accountant",
      "sales manager",
      "hr manager",
      "operations manager",
      "supply chain manager",
      "customer success manager",
      "business development manager",
      "marketing manager",
      "event coordinator",
      "project coordinator",
      "research analyst",
      "legal counsel",
      "executive assistant",
      "administrative assistant",
      "human resources coordinator",
    ]);

  const randomCompany = () =>
    randomArrayElement([
      "google",
      "apple",
      "amazon",
      "microsoft",
      "facebook",
      "tesla",
      "netflix",
      "twitter",
      "uber",
      "airbnb",
      "salesforce",
      "ibm",
      "intel",
      "cisco",
      "oracle",
      "adobe",
      "samsung",
      "hp",
      "nvidia",
      "paypal",
      "sony",
      "linkedin",
      "dropbox",
      "reddit",
      "spacex",
      "slack",
      "shopify",
      "zoom",
      "square",
      "twitch",
      "pinterest",
      "etsy",
      "snapchat",
      "vmware",
      "qualcomm",
      "ford",
      "general motors",
      "boeing",
      "toyota",
      "nestle",
      "coca-cola",
      "pepsico",
      "mcdonald's",
      "starbucks",
      "walmart",
      "target",
      "nike",
      "adidas",
      "l'oreal",
      "procter & gamble",
      "unilever",
      "nest",
      "panasonic",
      "general electric",
      "siemens",
      "dell",
      "lenovo",
      "uber",
      "airbnb",
      "dropbox",
      "spacex",
      "reddit",
      "tencent",
      "alibaba",
      "baidu",
      "jd.com",
      "huawei",
      "booking.com",
      "booking holdings",
      "expedia group",
      "tripadvisor",
      "skyscanner",
      "uber eats",
      "doordash",
      "grab",
      "zomato",
      "delivery hero",
      "instacart",
      "postmates",
      "wayfair",
      "ebay",
      "alibaba group",
      "softbank",
      "sony",
      "nintendo",
      "electronic arts",
      "activision blizzard",
      "take-two interactive",
      "ubisoft",
      "rockstar games",
      "epic games",
      "warner bros. interactive entertainment",
    ]);

  return {
    title: randomTitle(),
    company: randomCompany(),
    description: generateLoremIpsum(100),
    startMonth: Math.floor(Math.random() * 12),
    startYear: 2000 + Math.floor(Math.random() * 23),
    endMonth: Math.floor(Math.random() * 12),
    endYear: 2000 + Math.floor(Math.random() * 23),
  };
}
