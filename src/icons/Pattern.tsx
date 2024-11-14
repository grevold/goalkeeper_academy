interface Props {
  width: string;
  height: string;
}

export function Pattern({ width, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M353.076 0H271.812L382.499 243.476H463.762L353.076 0Z"
        fill="#e52d27"
      />
      <path
        d="M215.766 0H134.502L245.189 243.476H326.452L215.766 0Z"
        fill="#e52d27"
      />
      <path
        d="M81.2636 0H-5.28097e-05L110.687 243.476H191.95L81.2636 0Z"
        fill="#e52d27"
      />
    </svg>
  );
}
