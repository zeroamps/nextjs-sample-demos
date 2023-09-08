import { NextApiRequest, NextApiResponse } from 'next';
import { findPost } from '@/sources/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.id) throw "'req.query.id' is not defined.";
  res.status(200).json(await findPost(+req.query.id));
}
