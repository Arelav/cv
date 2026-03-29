"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  count: number;
}

export default function StarCount({ count }: Props) {
  return (
    <span>
      <FontAwesomeIcon icon={faStar} aria-hidden /> {count}
    </span>
  );
}
