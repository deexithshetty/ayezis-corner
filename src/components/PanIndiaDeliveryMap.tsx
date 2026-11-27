import React, { useEffect, useState } from 'react';
import indiaMap from '@svg-maps/india';

interface CityMarker {
  id: string;
  name: string;
  region: 'North' | 'West' | 'South' | 'East' | 'Northeast';
  lat: number;
  lon: number;
  labelDx: number;
  labelDy: number;
  textAnchor: 'start' | 'middle' | 'end';
  delay: string;
}

interface DeliveryRoute {
  id: string;
  d: string;
  delay: string;
  sparkDur: string;
  sparkBegin: string;
}

/**
 * Exact Mercator projection calibrated to @svg-maps/india (viewBox 0 0 612 696).
 * Verified within ~1–2px against official state/UT centroids (Delhi, Chandigarh, Goa).
 */
const LON_MIN = 68.18;
const LON_MAX = 97.4;
const LAT_MAX = 37.09;
const LAT_MIN = 8.08;
const MAP_WIDTH = 611.9;
const MAP_HEIGHT = 667.8;

const mercatorY = (lat: number): number =>
  Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));

const MERC_TOP = mercatorY(LAT_MAX);
const MERC_BOTTOM = mercatorY(LAT_MIN);

const projectGeo = (lat: number, lon: number): { x: number; y: number } => ({
  x: Number((((lon - LON_MIN) / (LON_MAX - LON_MIN)) * MAP_WIDTH).toFixed(1)),
  y: Number((((MERC_TOP - mercatorY(lat)) / (MERC_TOP - MERC_BOTTOM)) * MAP_HEIGHT).toFixed(1)),
});

const UDUPI = projectGeo(13.3409, 74.7421);

const DESTINATION_CITIES: CityMarker[] = [
  // North
  {
    id: 'srinagar',
    name: 'Srinagar',
    region: 'North',
    lat: 34.0837,
    lon: 74.7973,
    labelDx: 11,
    labelDy: 4,
    textAnchor: 'start',
    delay: '4.6s',
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    region: 'North',
    lat: 30.7333,
    lon: 76.7794,
    labelDx: 11,
    labelDy: 3,
    textAnchor: 'start',
    delay: '3.8s',
  },
  {
    id: 'new-delhi',
    name: 'New Delhi',
    region: 'North',
    lat: 28.6139,
    lon: 77.209,
    labelDx: 11,
    labelDy: 4,
    textAnchor: 'start',
    delay: '3.1s',
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    region: 'North',
    lat: 26.9124,
    lon: 75.7873,
    labelDx: -11,
    labelDy: 4,
    textAnchor: 'end',
    delay: '2.5s',
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    region: 'North',
    lat: 26.8467,
    lon: 80.9462,
    labelDx: 0,
    labelDy: -12,
    textAnchor: 'middle',
    delay: '2.9s',
  },

  // West / Central
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    region: 'West',
    lat: 23.0225,
    lon: 72.5714,
    labelDx: -10,
    labelDy: 19,
    textAnchor: 'middle',
    delay: '2.3s',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    region: 'West',
    lat: 19.076,
    lon: 72.8777,
    labelDx: -12,
    labelDy: 4,
    textAnchor: 'end',
    delay: '1.2s',
  },
  {
    id: 'bhopal',
    name: 'Bhopal',
    region: 'West',
    lat: 23.2599,
    lon: 77.4126,
    labelDx: 0,
    labelDy: 19,
    textAnchor: 'middle',
    delay: '1.9s',
  },

  // South (excluding Udupi origin)
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    region: 'South',
    lat: 17.385,
    lon: 78.4867,
    labelDx: 12,
    labelDy: 4,
    textAnchor: 'start',
    delay: '1.1s',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    region: 'South',
    lat: 12.9716,
    lon: 77.5946,
    labelDx: -2,
    labelDy: -13,
    textAnchor: 'middle',
    delay: '0.7s',
  },
  {
    id: 'chennai',
    name: 'Chennai',
    region: 'South',
    lat: 13.0827,
    lon: 80.2707,
    labelDx: 12,
    labelDy: 4,
    textAnchor: 'start',
    delay: '1.5s',
  },
  {
    id: 'kochi',
    name: 'Kochi',
    region: 'South',
    lat: 9.9312,
    lon: 76.2673,
    labelDx: -12,
    labelDy: 4,
    textAnchor: 'end',
    delay: '0.9s',
  },

  // East
  {
    id: 'patna',
    name: 'Patna',
    region: 'East',
    lat: 25.5941,
    lon: 85.1376,
    labelDx: 0,
    labelDy: -12,
    textAnchor: 'middle',
    delay: '3.7s',
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    region: 'East',
    lat: 22.5726,
    lon: 88.3639,
    labelDx: 10,
    labelDy: 16,
    textAnchor: 'start',
    delay: '3.2s',
  },

  // Northeast
  {
    id: 'guwahati',
    name: 'Guwahati',
    region: 'Northeast',
    lat: 26.1445,
    lon: 91.7362,
    labelDx: 6,
    labelDy: 19,
    textAnchor: 'middle',
    delay: '4.4s',
  },
];

const PROJECTED_CITIES = DESTINATION_CITIES.map((city) => ({
  ...city,
  ...projectGeo(city.lat, city.lon),
}));

const cityPoint = (id: string) => {
  const found = PROJECTED_CITIES.find((c) => c.id === id);
  return found ? { x: found.x, y: found.y } : UDUPI;
};

// Build non-crossing regional delivery corridors radiating gracefully from Udupi
const buildRoutes = (): DeliveryRoute[] => {
  const mumbai = cityPoint('mumbai');
  const ahmedabad = cityPoint('ahmedabad');
  const bhopal = cityPoint('bhopal');
  const jaipur = cityPoint('jaipur');
  const delhi = cityPoint('new-delhi');
  const chandigarh = cityPoint('chandigarh');
  const srinagar = cityPoint('srinagar');
  const lucknow = cityPoint('lucknow');
  const patna = cityPoint('patna');
  const hyderabad = cityPoint('hyderabad');
  const kolkata = cityPoint('kolkata');
  const guwahati = cityPoint('guwahati');
  const bengaluru = cityPoint('bengaluru');
  const chennai = cityPoint('chennai');
  const kochi = cityPoint('kochi');

  return [
    {
      // Corridor 1: West Coast & Gujarat (Udupi -> Mumbai -> Ahmedabad)
      id: 'route-west',
      d: `M ${UDUPI.x},${UDUPI.y} Q 100,498 ${mumbai.x},${mumbai.y} Q 80,388 ${ahmedabad.x},${ahmedabad.y}`,
      delay: '0.2s',
      sparkDur: '6.8s',
      sparkBegin: '0.4s',
    },
    {
      // Corridor 2: Central to North & Himalayas (Udupi -> Bhopal -> Jaipur -> New Delhi -> Chandigarh -> Srinagar)
      id: 'route-north',
      d:
        `M ${UDUPI.x},${UDUPI.y} ` +
        `Q 144,440 ${bhopal.x},${bhopal.y} ` +
        `Q 166,298 ${jaipur.x},${jaipur.y} ` +
        `Q 168,228 ${delhi.x},${delhi.y} ` +
        `Q 192,186 ${chandigarh.x},${chandigarh.y} ` +
        `Q 164,116 ${srinagar.x},${srinagar.y}`,
      delay: '0.5s',
      sparkDur: '8.6s',
      sparkBegin: '1.2s',
    },
    {
      // Corridor 3: Heartland to East & Northeast (Bhopal -> Lucknow -> Patna -> Guwahati)
      id: 'route-heartland',
      d:
        `M ${bhopal.x},${bhopal.y} ` +
        `Q 226,282 ${lucknow.x},${lucknow.y} ` +
        `Q 314,254 ${patna.x},${patna.y} ` +
        `Q 426,258 ${guwahati.x},${guwahati.y}`,
      delay: '1.4s',
      sparkDur: '7.4s',
      sparkBegin: '2.6s',
    },
    {
      // Corridor 4: Deccan to East & Northeast (Udupi -> Hyderabad -> Kolkata -> Guwahati)
      id: 'route-east',
      d:
        `M ${UDUPI.x},${UDUPI.y} ` +
        `Q 176,506 ${hyderabad.x},${hyderabad.y} ` +
        `Q 314,402 ${kolkata.x},${kolkata.y} ` +
        `Q 468,320 ${guwahati.x},${guwahati.y}`,
      delay: '0.8s',
      sparkDur: '8.2s',
      sparkBegin: '2.0s',
    },
    {
      // Corridor 5a: Southern Peninsula East (Udupi -> Bengaluru -> Chennai)
      id: 'route-south-east',
      d: `M ${UDUPI.x},${UDUPI.y} Q 168,566 ${bengaluru.x},${bengaluru.y} Q 226,568 ${chennai.x},${chennai.y}`,
      delay: '0s',
      sparkDur: '5.8s',
      sparkBegin: '0.8s',
    },
    {
      // Corridor 5b: Southern Coast (Udupi -> Kochi)
      id: 'route-south-west',
      d: `M ${UDUPI.x},${UDUPI.y} Q 146,596 ${kochi.x},${kochi.y}`,
      delay: '0.15s',
      sparkDur: '5.2s',
      sparkBegin: '1.6s',
    },
  ];
};

const DELIVERY_ROUTES = buildRoutes();

export const PanIndiaDeliveryMap: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();

    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Subtle warm ambient glow behind the India map */}
      <div
        aria-hidden="true"
        className="absolute inset-8 rounded-full bg-[#DFBE7A]/[0.07] blur-3xl pointer-events-none"
      />

      <svg
        viewBox="-48 -20 704 740"
        className="relative w-full h-auto block"
        role="img"
        aria-label="Geographically accurate map of India showing Ayezis Corner gifting routes radiating from Udupi, Karnataka to Srinagar, Chandigarh, New Delhi, Jaipur, Lucknow, Ahmedabad, Mumbai, Bhopal, Hyderabad, Bengaluru, Chennai, Kochi, Patna, Kolkata, and Guwahati."
      >
        <defs>
          <linearGradient id="indiaMapFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBE7A" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#C5A059" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#DFBE7A" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="goldRouteStroke" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF5D9" />
            <stop offset="50%" stopColor="#DFBE7A" />
            <stop offset="100%" stopColor="#C5A059" />
          </linearGradient>

          <filter id="goldSoftGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="2.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="originBadgeGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="#DFBE7A" floodOpacity="0.55" />
          </filter>
        </defs>

        {/* Accurate Geographical State-by-State India Map (@svg-maps/india) */}
        <g aria-hidden="true">
          {indiaMap.locations.map((state) => (
            <path
              key={state.id}
              d={state.path}
              fill={state.id === 'ka' ? 'rgba(223, 190, 122, 0.20)' : 'url(#indiaMapFill)'}
              stroke="#DFBE7A"
              strokeOpacity={state.id === 'ka' ? '0.68' : '0.38'}
              strokeWidth={state.id === 'ka' ? '1.15' : '0.8'}
              strokeLinejoin="round"
            />
          ))}
        </g>

        {/* Subtle permanent dotted route guides (visible in reduced-motion and between sweeps) */}
        <g fill="none" stroke="#DFBE7A" strokeOpacity="0.24" strokeWidth="1.25" strokeDasharray="2.5 6.5" strokeLinecap="round">
          {DELIVERY_ROUTES.map((route) => (
            <path key={`${route.id}-base`} d={route.d} />
          ))}
        </g>

        {/* Animated gradual champagne-gold glowing routes radiating from Udupi */}
        <g fill="none" strokeLinecap="round">
          {DELIVERY_ROUTES.map((route) => (
            <React.Fragment key={route.id}>
              {/* Gradual draw-in luminous glow ribbon */}
              <path
                id={route.id}
                d={route.d}
                pathLength={100}
                stroke="url(#goldRouteStroke)"
                strokeWidth="2.4"
                strokeOpacity="0.45"
                filter="url(#goldSoftGlow)"
                className="pan-india-route-reveal"
                style={{ animationDelay: route.delay }}
              />
              {/* Animated shimmering champagne-gold dotted overlay */}
              <path
                d={route.d}
                stroke="#F7E4B2"
                strokeWidth="1.5"
                strokeOpacity="0.88"
                strokeDasharray="2 7.5"
                className="pan-india-route-flow"
              />
              {/* Subtle traveling golden spark moving smoothly outward from Udupi */}
              {!reducedMotion && (
                <circle r="2.7" fill="#FFFDF9" filter="url(#goldSoftGlow)" opacity="0.9">
                  <animateMotion
                    dur={route.sparkDur}
                    begin={route.sparkBegin}
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1"
                    keyTimes="0;1"
                  >
                    <mpath href={`#${route.id}`} />
                  </animateMotion>
                </circle>
              )}
            </React.Fragment>
          ))}
        </g>

        {/* 15 Destination City Markers with Subtle Glowing Animation & Readable Labels */}
        <g>
          {PROJECTED_CITIES.map((city) => (
            <g key={city.id}>
              {/* Soft expanding gold halo */}
              <circle
                cx={city.x}
                cy={city.y}
                r="6.2"
                fill="none"
                stroke="#DFBE7A"
                strokeWidth="1.2"
                className="pan-india-hub-ring"
                style={{ animationDelay: city.delay }}
              />
              {/* Glowing city marker dot */}
              <circle
                cx={city.x}
                cy={city.y}
                r="4"
                fill="#DFBE7A"
                fillOpacity="0.28"
              />
              <circle
                cx={city.x}
                cy={city.y}
                r="3.2"
                fill="#FFFDF9"
                stroke="#DFBE7A"
                strokeWidth="1.5"
                className="pan-india-hub-dot"
                style={{ animationDelay: city.delay }}
              />
              {/* Readable city name label with subtle dark burgundy contrast halo */}
              <text
                x={city.x + city.labelDx}
                y={city.y + city.labelDy}
                textAnchor={city.textAnchor}
                fill="#FAF7F2"
                fontSize="12.5"
                fontWeight="500"
                letterSpacing="0.02em"
                paintOrder="stroke"
                stroke="#1B0307"
                strokeWidth="4.2"
                strokeLinejoin="round"
              >
                {city.name}
              </text>
            </g>
          ))}
        </g>

        {/* Highlighted Main Origin: Udupi, Karnataka with Small Elegant Gift Box Icon */}
        <g>
          {/* Expanding pulsing champagne-gold rings */}
          <circle
            cx={UDUPI.x}
            cy={UDUPI.y}
            r="13"
            fill="none"
            stroke="#DFBE7A"
            strokeWidth="1.6"
            className="pan-india-origin-pulse"
          />
          <circle
            cx={UDUPI.x}
            cy={UDUPI.y}
            r="13"
            fill="none"
            stroke="#DFBE7A"
            strokeWidth="1.2"
            className="pan-india-origin-pulse"
            style={{ animationDelay: '1.4s' }}
          />

          {/* Leader hairline connecting Udupi label pill in the Arabian Sea to the icon */}
          <line
            x1={UDUPI.x - 16}
            y1={UDUPI.y}
            x2={UDUPI.x - 42}
            y2={UDUPI.y}
            stroke="#DFBE7A"
            strokeOpacity="0.78"
            strokeWidth="1.2"
          />

          {/* Refined Udupi Origin Badge */}
          <g transform={`translate(${UDUPI.x - 134}, ${UDUPI.y - 20})`}>
            <rect
              width="90"
              height="40"
              rx="12"
              fill="#2B060D"
              fillOpacity="0.96"
              stroke="#DFBE7A"
              strokeOpacity="0.75"
              strokeWidth="1.25"
            />
            <text
              x="45"
              y="17"
              textAnchor="middle"
              fill="#DFBE7A"
              fontSize="12.5"
              fontWeight="700"
              letterSpacing="0.09em"
            >
              UDUPI
            </text>
            <text
              x="45"
              y="31"
              textAnchor="middle"
              fill="#EAE0D2"
              fillOpacity="0.88"
              fontSize="9.5"
              letterSpacing="0.04em"
            >
              Karnataka
            </text>
          </g>

          {/* Small Elegant Gift Box Icon Highlighted at Udupi */}
          <g transform={`translate(${UDUPI.x}, ${UDUPI.y})`} filter="url(#originBadgeGlow)">
            <circle cx="0" cy="0" r="14" fill="#32070F" stroke="#DFBE7A" strokeWidth="1.8" />
            {/* Gift box base */}
            <rect x="-6.4" y="-1.8" width="12.8" height="8.6" rx="1.4" fill="#DFBE7A" />
            {/* Gift box lid */}
            <rect x="-7.4" y="-5" width="14.8" height="3.3" rx="1.1" fill="#FFFDF9" />
            {/* Vertical burgundy ribbon */}
            <rect x="-1.25" y="-5" width="2.5" height="11.8" fill="#7D1D2C" />
            {/* Delicate gold top bow */}
            <path
              d="M 0,-5 C -3.2,-9.4 -6.8,-7.8 -4.6,-5.2 C -3.2,-4.6 -1.1,-4.9 0,-5 Z M 0,-5 C 3.2,-9.4 6.8,-7.8 4.6,-5.2 C 3.2,-4.6 1.1,-4.9 0,-5 Z"
              fill="none"
              stroke="#DFBE7A"
              strokeWidth="1.35"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
