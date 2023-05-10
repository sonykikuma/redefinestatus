import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopPage() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    typeof window !== "undefined" &&
      window.scrollTo({ top: 0, behavior: "smooth" });
  }
  typeof window !== "undefined" && window.scrollTo();

  function ScrollToTopButton() {
    return (
      <button className="absolute bottom-0 p-10" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    );
  }
  ScrollToTopButton();

  return (
    <div className="relative flex h-[500vh] w-full flex-col items-center justify-center bg-stone-900 text-3xl text-white">
      <ul className="absolute flex h-full flex-col items-center justify-between p-20">
        <li> This is a really long div...</li>
        <li>Halfway there!</li>
        <li>👋</li>
      </ul>
    </div>
  );
}
