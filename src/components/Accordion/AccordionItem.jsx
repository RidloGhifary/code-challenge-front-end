"use client";

import { useState, useEffect, useRef } from "react";

export default function AccordionItem({ question, answer, isOpen, toggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b">
      <button onClick={toggle} className="w-full text-left focus:outline-none">
        <div
          className={`flex items-center justify-between p-4 ${
            isOpen && "bg-mainColor text-white"
          }`}>
          <span>{question}</span>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}>
        <div
          className="p-4 text-secondaryTextGray opacity-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: isOpen ? 1 : 0 }}>
          {answer}
        </div>
      </div>
    </div>
  );
}
