"use client";

import { useState } from "react";
import AccordionItem from "../AccordionItem";
import faqDatas from "@/data/faq.json";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="mx-auto mt-12 w-[80%] rounded-md bg-white shadow-lg">
      {faqDatas.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          toggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
