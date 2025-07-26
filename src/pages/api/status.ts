import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const uptimeHours = (process.uptime() / 3600).toFixed(1);

    res.status(200).json({
        status: 'active',
        uptime: `${uptimeHours} hours`,
        server: 'VPS1',
        message: 'Systems operational'
    });
}