import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import DesignCanvas from "./design-components/DesignCanvas";
import { useDesignContext } from "../contexts/DesignContext";
import { PAGES } from "../types";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { currentPage, setCurrentPage } = useDesignContext();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      const containerHeight = scrollContainerRef.current.offsetHeight;
      const middlePoint = scrollTop + containerHeight / 2;

      React.Children.forEach(children, (child, index) => {
        if (React.isValidElement(child) && sectionRefs.current[index]) {
          const sectionTop = sectionRefs.current[index]!.offsetTop;
          const sectionBottom =
            sectionTop + sectionRefs.current[index]!.offsetHeight;

          if (middlePoint >= sectionTop && middlePoint < sectionBottom) {
            switch (index) {
              case 0:
                setCurrentPage(PAGES.HERO);
                break;
              case 1:
                setCurrentPage(PAGES.WASY);
                break;
              case 2:
                setCurrentPage(PAGES.MOLEQLAR);
                break;
              case 3:
                setCurrentPage(PAGES.BLACKROCK);
                break;
              case 4:
                setCurrentPage(PAGES.CONTACT);
                break;
              default:
                break;
            }
          }
        }
      });
    }
  }, [children, setCurrentPage]);

  const throttledHandleScroll = useCallback(
    throttle(handleScroll, 100), // delay of 100ms
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

  const validChildren = React.Children.toArray(children).filter(
    React.isValidElement
  );

  return (
    <div className={"LAYOUT h-screen w-screen flex flex-col"}>
      <DesignCanvas />
      {/* scroll container */}
      <main
        className="relative z-1 h-full w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory"
        ref={scrollContainerRef}
      >
        {/* navbar */}
        <nav className="flex absolute justify-end items-center px-6 h-[80px] w-full">
          <a href="#contact">
            <button className="bg-primary text-white py-2 px-6 rounded-md font-montserrat font-bold">
              Let's Chat
            </button>
          </a>
        </nav>
        {/* main body */}
        {validChildren.map((child, index) =>
          React.cloneElement(child as React.ReactElement, {
            ref: (el: HTMLElement | null) => (sectionRefs.current[index] = el),
            key: index,
          })
        )}
        {/* footer */}
      </main>
    </div>
  );
};

// Simple throttle function
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

export default Layout;
