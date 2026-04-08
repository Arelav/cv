import { cx } from "class-variance-authority";

const resumePdfHref = "/downloads/Valery_Kharshats_Resume.pdf";
const resumeDocxHref = "/downloads/Valery_Kharshats_Resume.docx";

interface Props {
  placement?: "top" | "bottom";
}

export default function ResumeDownloadLinks({ placement = "top" }: Props) {
  const ariaLabel =
    placement === "bottom"
      ? "Download résumé — end of page"
      : "Download résumé";

  return (
    <div
      aria-label={ariaLabel}
      className={cx(
        "resume-download-nav",
        placement === "top" && "resume-download-nav--before-content",
        placement === "bottom" && "resume-download-nav--after-content",
      )}
    >
      <span className="resume-download-nav-label">Download résumé:</span>
      <a
        className="resume-download-button"
        href={resumePdfHref}
        download="Valery_Kharshats_Resume.pdf"
      >
        PDF
      </a>
      <a
        className="resume-download-button"
        href={resumeDocxHref}
        download="Valery_Kharshats_Resume.docx"
      >
        Word (.docx)
      </a>
    </div>
  );
}
