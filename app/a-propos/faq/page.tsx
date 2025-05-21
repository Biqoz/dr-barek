"use client";
import { useState } from "react";
import Image from "next/image";

const FAQ = [
  { question: "Question 1", answer: "Espace pour la réponse à la question 1" },
  { question: "Question 2", answer: "Espace pour la réponse à la question 2" },
  { question: "Question 3", answer: "Espace pour la réponse à la question 3" },
  { question: "Question 4", answer: "Espace pour la réponse à la question 4" },
  { question: "Question 5", answer: "Espace pour la réponse à la question 5" },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 pt-28">
      <section className="w-full max-w-7xl space-y-6">
        <h2 className="center w-full rounded-xl border border-black bg-white p-6 text-xl font-bold shadow-[3px_3px_0px_0px]">
          FAQ
        </h2>

        <div className="w-full rounded-xl border border-black p-6 text-lg shadow-[3px_3px_0px_0px] space-y-4">
          {FAQ.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-black overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
              >
                <span className="font-medium">{item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="p-6 bg-gray-50 border-t border-black">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
