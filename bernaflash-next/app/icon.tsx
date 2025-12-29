import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
    width: 32,
    height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #9d4edd 0%, #00d9ff 100%)',
                    borderRadius: '6px',
                }}
            >
                <div
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: 'Arial',
                    }}
                >
                    B
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
