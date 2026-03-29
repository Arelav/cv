"use client";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition;
  className?: string;
  "aria-hidden"?: boolean;
  "aria-label"?: string;
}

export default function Icon({ icon, ...props }: Props) {
  return <FontAwesomeIcon icon={icon} {...props} />;
}
