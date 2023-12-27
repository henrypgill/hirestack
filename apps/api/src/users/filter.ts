import { UserFilter } from "@hirestack/database";

export function parseFilterString(filterString): UserFilter {
  const filters: UserFilter = {
    skills: [],
    education: [],
  };

  const params = new URLSearchParams(filterString);

  params.forEach((value, key) => {
    if (key.startsWith("skills")) {
      const skillData = value.split(",");
      if (skillData.length === 3) {
        const [name, type, experience] = skillData;
        filters.skills.push({
          name,
          type,
          experience: parseInt(experience, 10),
        });
      }
    } else if (key.startsWith("education")) {
      const educationData = value.split(",");
      if (educationData.length === 3) {
        const [specialization, type, provider] = educationData;
        filters.education.push({ specialization, type, provider });
      }
    } else if (key === "experience") {
      filters.experience = parseInt(value, 10);
    }
  });

  return filters;
}
