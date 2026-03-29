const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function scoreColor(score: number) {
  if (score >= 90) return "#0cce6b";
  if (score >= 50) return "#ffa400";
  return "#ff4e42";
}

interface Props {
  label: string;
  score: number;
}

export default function Gauge({ label, score }: Props) {
  const rounded = Math.round(score);
  const color = scoreColor(rounded);
  const progress = (rounded / 100) * CIRCUMFERENCE;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        viewBox="0 0 100 100"
        className="w-full max-w-20 sm:max-w-24"
        role="img"
        aria-label={`${label}: ${rounded}`}
      >
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          stroke="#3f3f46"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${progress} ${CIRCUMFERENCE}`}
          transform="rotate(-90 50 50)"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fill={color}
          fontSize="22"
          fontWeight="bold"
        >
          {rounded}
        </text>
      </svg>
      <span className="text-zinc-600 dark:text-zinc-300 text-center text-xs">
        {label}
      </span>
    </div>
  );
}
