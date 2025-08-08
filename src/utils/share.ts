export const RESUME_PATH = "/Kevin_Diesenberg_Resume.pdf";

export async function shareResume(): Promise<void> {
  // build URL inside the fn so we don’t SSR-crash
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const resumeUrl = `${origin}${RESUME_PATH}`;

  try {
    if (navigator.share) {
      // try the native share sheet
      await navigator.share({
        title: "Kevin Diesenberg Resume",
        text: "Check out Kevin Diesenberg's resume!",
        url: resumeUrl,
      });
      return;
    }

    // fallback: copy to clipboard
    await navigator.clipboard.writeText(resumeUrl);
    alert(
      "Nice! The resume link’s now in your clipboard—paste it wherever you like.",
    );
  } catch (err: unknown) {
    // if it’s an AbortError from the share dialog, bail quietly
    if (err instanceof Error && err.name === "AbortError") {
      return;
    }

    // otherwise we’ve got some genuine problem
    const message = err instanceof Error ? err.message : "an unexpected error";

    alert(
      `Oops! Something went wrong sharing this resume (${message}). Please try again in a moment.`,
    );
  }
}
