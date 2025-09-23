import { useEffect, useRef, useState } from "react";

function NetflixSearch({ onSearch }) {
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  // Quick-focus with "/" key
  useEffect(() => {
    const onKey = (e) => {
      // ignore if typing in an input/textarea already
      const tag = (e.target.tagName || "").toLowerCase();
      if (e.key === "/" && tag !== "input" && tag !== "textarea") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(q.trim());
      }}
      className="group relative flex items-center"
    >
      <div
        className={[
          "flex items-center gap-2 border px-3 py-1.5",
          "bg-black/70 border-white/30",
          "hover:border-white/50 focus-within:border-white/80",
          "transition-all duration-300 ease-out",
          "h-9",
          // width expands on focus or when there's text
          focused || q
            ? "w-40 md:w-[300px]"
            : "w-40 md:w-56"
        ].join(" ")}
      >
        {/* Icon */}
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          className="shrink-0 text-white/80"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
            fill="currentColor"
          />
        </svg>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Titles, people, genres"
          className={[
            "w-full bg-transparent outline-none",
            "text-sm text-gray-200 placeholder-gray-400"
          ].join(" ")}
          aria-label="Search for titles, people, or genres"
        />

        {/* Clear button */}
        {q && (
          <button
            type="button"
            onClick={() => {
              setQ("");
              inputRef.current?.focus();
              onSearch?.("");
            }}
            className="rounded-full px-1 text-white/70 hover:text-white"
            aria-label="Clear search"
            title="Clear"
          >
            ×
          </button>
        )}
      </div>

      {/* Optional hint for "/" shortcut */}
      <kbd className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:inline text-[10px] text-white/60">
        /
      </kbd>
    </form>
  );
}

export default NetflixSearch;
