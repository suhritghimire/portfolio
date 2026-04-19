import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  const imagePath = path.join(process.cwd(), 'public', 'profile.jpeg');
  const imageData = fs.readFileSync(imagePath);
  const base64 = imageData.toString('base64');
  const dataUrl = `data:image/jpeg;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img
          src={dataUrl}
          width={32}
          height={32}
          style={{ objectFit: 'cover' }}
        />
      </div>
    ),
    { ...size }
  );
}
