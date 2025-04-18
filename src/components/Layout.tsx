// /src/components/Layout.tsx

import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import DesignCanvas from "./design-components/DesignCanvas";
import { useDesignContext } from "../contexts/DesignContext";
import { PAGES } from "../types";

interface LayoutProps {
  children: ReactNode;
}

// Throttle function moved outside component to avoid recreation
function throttle<F extends (...args: any[]) => any>(
  func: F,
  delay: number
): (...args: Parameters<F>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastArgs: Parameters<F> | null = null;

  return (...args: Parameters<F>) => {
    lastArgs = args;
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func(...lastArgs!);
        timeoutId = null;
        lastArgs = null;
      }, delay);
    }
  };
}

// Memoized navbar component
const NavBar = React.memo(function NavBar({
  currentPage,
}: {
  currentPage: keyof typeof PAGES;
}) {
  console.log("NavBar rendering");

  const nav_bg_color = {
    HERO: "bg-orange-500",
    WASY: "bg-orange-500",
    MOLEQLAR: "bg-purple-400",
    BLACKROCK: "bg-yellow-500",
    HOBBIES: "bg-blue-500",
    CONTACT: "hidden",
  };

  return (
    <nav className="flex fixed justify-end items-center px-6 h-[80px] w-full max-w-[1440px] z-[1]">
      <a href="#contact">
        <button
          className={`${nav_bg_color[currentPage]} text-white py-2 px-6 rounded-md font-montserrat font-bold text-sm sm:text-lg`}
        >
          Let's Chat
        </button>
      </a>
    </nav>
  );
});

const Layout = ({ children }: LayoutProps) => {
  console.log("Layout rendering");

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { currentPage, setCurrentPage } = useDesignContext();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Map index to page type - only created once
  const indexToPageMapping = useMemo(
    () => [
      PAGES.HERO,
      PAGES.WASY,
      PAGES.MOLEQLAR,
      PAGES.BLACKROCK,
      PAGES.HOBBIES,
      PAGES.CONTACT,
    ],
    []
  );

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      const containerHeight = scrollContainerRef.current.offsetHeight;
      const middlePoint = scrollTop + containerHeight / 2;

      // Find the section that's in the middle of the viewport
      for (let index = 0; index < sectionRefs.current.length; index++) {
        const section = sectionRefs.current[index];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (middlePoint >= sectionTop && middlePoint < sectionBottom) {
            const newPage = indexToPageMapping[index];
            // Only update state if page has changed
            if (newPage !== currentPage) {
              setCurrentPage(newPage);
            }
            break; // Exit the loop once we find the current section
          }
        }
      }
    }
  }, [indexToPageMapping, currentPage, setCurrentPage]);

  // Create throttled function once
  const throttledHandleScroll = useMemo(
    () => throttle(handleScroll, 200),
    [handleScroll]
  );

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", throttledHandleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", throttledHandleScroll);
      }
    };
  }, [throttledHandleScroll]);

  // Memoize the children cloning logic
  const clonedChildren = useMemo(() => {
    const validChildren = React.Children.toArray(children).filter(
      React.isValidElement
    );

    return validChildren.map((child, index) =>
      React.cloneElement(child as React.ReactElement, {
        ref: (el: HTMLElement | null) => (sectionRefs.current[index] = el),
        key: (child as React.ReactElement).key, // defined in index.tsx
      })
    );
  }, [children]); // Will only re-run if children changes

  return (
    <div
      className={"LAYOUT relative h-screen w-screen flex flex-col items-center"}
    >
      <DesignCanvas />
      {/* scroll container */}
      <main
        className="relative h-full w-full max-w-[1440px] overflow-y-auto overflow-x-hidden sm:snap-y sm:snap-mandatory scroll-smooth"
        ref={scrollContainerRef}
      >
        {/* Use memoized navbar */}
        <NavBar currentPage={currentPage} />

        {/* Use memoized children */}
        {clonedChildren}
      </main>
    </div>
  );
};

export default Layout;
