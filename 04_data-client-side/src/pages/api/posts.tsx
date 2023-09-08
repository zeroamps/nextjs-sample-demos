import { NextApiRequest, NextApiResponse } from 'next';
import { findPosts } from '@/sources/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(await findPosts());
}
