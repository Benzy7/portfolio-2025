import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const skills = await prisma.skillCategory.findMany();
    return res.status(200).json(skills);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
