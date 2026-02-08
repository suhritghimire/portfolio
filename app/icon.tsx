import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const dynamic = 'force-static';

export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: '#4285F4', // Google Blue
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '8px', // Rounded square
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                }}
            >
                S
            </div>
        ),
        {
            ...size,
        }
    );
}
