import { faker } from "@faker-js/faker";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export function generateFakeUserData() {
  const users: User[] = [];
  for (let i = 1; i <= 10; i++) {
    users.push({
      id: i,
      name: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    });
  }
  return users;
}
