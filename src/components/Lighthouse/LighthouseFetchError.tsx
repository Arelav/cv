import FetchError from "@/components/FetchError";
import LighthouseIntro from "./LighthouseIntro";

export default function LighthouseFetchError() {
  return (
    <FetchError headingId="lighthouse-heading">
      <LighthouseIntro />
    </FetchError>
  );
}
