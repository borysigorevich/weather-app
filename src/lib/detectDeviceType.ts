import { headers } from 'next/headers';

type DeviceType = 'desktop' | 'mobile';

export const detectDeviceType = (): DeviceType => {
    const userAgent = headers().get('user-agent');

    if (!userAgent) return 'desktop';

    const deviceTypes = {
        mobile: [
            'Android',
            'iPhone',
            'iPad',
            'iPod',
            'Windows Phone',
            'Mobile',
            'BlackBerry',
            'Opera Mini',
            'Opera Mobi',
        ],
        desktop: ['Windows NT', 'Macintosh', 'Linux', 'Ubuntu'],
    };

    for (const [deviceType, keywords] of Object.entries(deviceTypes)) {
        if (keywords.some((keyword) => userAgent.includes(keyword))) {
            return deviceType as keyof typeof deviceTypes;
        }
    }

    return 'desktop';
};
