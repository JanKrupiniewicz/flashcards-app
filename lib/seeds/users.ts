import { faker } from "@faker-js/faker";
import { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mockUsers = () => {
  const data: User[] = [];

  for (let i = 0; i < 50; i++) {
    data.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      emailVerified: faker.date.recent(),
      image: faker.image.avatar(),
      isAdmin: false,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    });
  }

  return data;
};

const seedUsers = async () => {
  const users = mockUsers();

  await prisma.user.createMany({
    data: users,
  });

  return users;
};

export { seedUsers };
