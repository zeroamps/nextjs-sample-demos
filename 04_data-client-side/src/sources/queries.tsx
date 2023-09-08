import prisma from './prisma';

export async function findPosts() {
  return await prisma.post.findMany();
}

export async function findPost(id: number) {
  return await prisma.post.findUniqueOrThrow({ where: { id } });
}
