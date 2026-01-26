import { useState } from 'react';

export function OmIcon({ className }: { className?: string }) {
  const [useImage, setUseImage] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Golden Om symbol with lotus design SVG (matching the screenshot)
  const goldenOmSvg = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Lotus petals - outer decorative layer */}
      <g fill="#D4AF37" opacity="0.85">
        <ellipse cx="50" cy="15" rx="8" ry="12" transform="rotate(0 50 15)" />
        <ellipse cx="70" cy="25" rx="8" ry="12" transform="rotate(40 70 25)" />
        <ellipse cx="82" cy="42" rx="8" ry="12" transform="rotate(80 82 42)" />
        <ellipse cx="82" cy="58" rx="8" ry="12" transform="rotate(120 82 58)" />
        <ellipse cx="70" cy="75" rx="8" ry="12" transform="rotate(160 70 75)" />
        <ellipse cx="50" cy="85" rx="8" ry="12" transform="rotate(200 50 85)" />
        <ellipse cx="30" cy="75" rx="8" ry="12" transform="rotate(240 30 75)" />
        <ellipse cx="18" cy="58" rx="8" ry="12" transform="rotate(280 18 58)" />
        <ellipse cx="18" cy="42" rx="8" ry="12" transform="rotate(320 18 42)" />
        <ellipse cx="30" cy="25" rx="8" ry="12" transform="rotate(360 30 25)" />
      </g>
      
      {/* Lotus petals - inner decorative layer */}
      <g fill="#FFD700" opacity="0.9">
        <ellipse cx="50" cy="22" rx="6" ry="9" transform="rotate(0 50 22)" />
        <ellipse cx="65" cy="30" rx="6" ry="9" transform="rotate(40 65 30)" />
        <ellipse cx="75" cy="45" rx="6" ry="9" transform="rotate(80 75 45)" />
        <ellipse cx="75" cy="55" rx="6" ry="9" transform="rotate(120 75 55)" />
        <ellipse cx="65" cy="70" rx="6" ry="9" transform="rotate(160 65 70)" />
        <ellipse cx="50" cy="78" rx="6" ry="9" transform="rotate(200 50 78)" />
        <ellipse cx="35" cy="70" rx="6" ry="9" transform="rotate(240 35 70)" />
        <ellipse cx="25" cy="55" rx="6" ry="9" transform="rotate(280 25 55)" />
        <ellipse cx="25" cy="45" rx="6" ry="9" transform="rotate(320 25 45)" />
        <ellipse cx="35" cy="30" rx="6" ry="9" transform="rotate(360 35 30)" />
      </g>

      {/* White circle background for Om */}
      <circle cx="50" cy="50" r="20" fill="white" />

      {/* Traditional Om symbol in golden color */}
      <g fill="#D4AF37">
        {/* Large base curve - sweeps from bottom left, up, and down to right */}
        <path d="M22 68 Q18 55, 22 42 Q25 30, 35 34 Q42 37, 46 44 Q48 50, 48 58" />
        
        {/* Second smaller curve - emerges from middle, extends up and right, curves down */}
        <path d="M48 58 Q50 53, 56 48 Q61 43, 66 46 Q69 48, 69 53 Q68 58, 64 60" />
        
        {/* Third smallest curve - positioned above and to the right */}
        <path d="M64 60 Q62 56, 64 53 Q66 50, 68 52 Q69 53, 68 55" />
        
        {/* Chandrabindu - semi-circular shape above */}
        <path d="M50 30 Q46 28, 43 30 Q41 32, 41 35 Q41 38, 43 40 Q46 42, 50 42 Q54 42, 57 40 Q59 38, 59 35 Q59 32, 57 30 Q54 28, 50 30 Z" />
        
        {/* Bindu - dot above chandrabindu */}
        <circle cx="50" cy="26" r="3" />
      </g>
    </svg>
  );

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {useImage && (
        <img
          src="/images/Om_symbol.svg.webp"
          alt="Om Symbol"
          className={className}
          style={{ 
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            display: imageLoaded ? 'block' : 'none',
            background: 'transparent',
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setUseImage(false);
            console.warn('Om icon image not found, using SVG fallback');
          }}
        />
      )}
      {(!useImage || !imageLoaded) && goldenOmSvg}
    </div>
  );
}
