"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  stars: number;
}

export default function StarCount({ stars }: Props) {
  return (
    stars > 0 && (
      <>
        <FontAwesomeIcon icon={faStar} aria-hidden />
        <span className="sr-only">stars: </span>
        {stars}
      </>
    )
  );
}
