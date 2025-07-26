import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const experiences = await prisma.experience.findMany();
    return res.status(200).json(experiences);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
