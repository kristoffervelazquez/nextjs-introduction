// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";


interface DataResponse {
  name: string,
  ok: boolean
}

export default function handler(req: NextApiRequest, res: NextApiResponse<DataResponse>) {
  res.status(200).json({ name: 'John Doe', ok: true })
}
