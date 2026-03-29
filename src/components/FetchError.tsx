import type { ReactNode } from "react";
import ApiUnavailable from "@/components/ApiUnavailable";

interface Props {
  headingId: string;
  children: ReactNode;
}

export default function FetchError({ headingId, children }: Props) {
  return (
    <section aria-labelledby={headingId}>
      {children}
      <ApiUnavailable>
        <p>Something went wrong. Try again later.</p>
      </ApiUnavailable>
    </section>
  );
}
