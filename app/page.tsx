"use client";
import { useEffect, useRef } from "react";
import Textarea from "react-textarea-autosize";
import { useChat } from "ai/react";
import Image from "next/image";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api",
  });

  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    // @ts-ignore
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // @ts-ignore
  const replaceText = (text) => {
    // Replace "OpenAI" with "RoxFord" in the provided text
    return text
      .replace(/OpenAI/g, "RoxFord AI")
      .replace(/GPT-3/g, "AI assistance");
  };

  return (
    <div className="min-h-screen bg-neutral-800">
       <Image
          src="/Roxfordlogo.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={150}
          height={24}
          style={{position:"absolute", paddingLeft: 20}}
          priority
        />
      <div className="min-h-screen mx-auto max-w-3xl">
        <div style={{ color: "white", marginLeft: 10, marginBottom: 20, paddingTop: '25%' }}>
          <b className="font-bold text-3xl text-white w-2/3">Our Location:</b>
          <h1 style={{ margin: 10 }}></h1>
          <h2>80 4th floor R.J mall, Rashid minhas road, karachi, Pakistan.</h2>
          <h1 style={{ margin: 30 }}></h1>
          <b className="font-bold text-3xl text-white w-2/3">Our Email:</b>
          <h1 style={{ margin: 10 }}></h1>
          <h2 style={{ color: "Green" }}>Info@roxford.us</h2>
        </div>
        {messages.length !== 0 ? (
          <div className="pb-32 pt-5 space-y-5 w-full mx-auto relative">
            {messages.map((message) => (
              <div key={message.id} className="w-full">
                {message.role === "user" ? (
                  <div className="flex gap-x-2">
                    <div className="bg-gray-500 h-12 w-12 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-full h-full text-white p-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <p className="rounded-lg p-3 w-full border-gray-500 border-2 text-sm text-white">
                      {replaceText(message.content)}
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-x-2">
                    <div className="bg-teal-500 h-12 w-12 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-full h-full text-white p-1"
                      >
                        <path d="M16.5 7.5h-9v9h9v-9z" />
                        <path
                          fillRule="evenodd"
                          d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <p className="rounded-lg p-3 w-full border-teal-500 border-2 text-sm text-white">
                      {replaceText(message.content)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex justify-center pt-32">
            <h1 className="font-bold text-3xl text-white w-full text-center">
              Roxford AI Assistance, How may I help you.
            </h1>
          </div>
        )}
      </div>
      <div ref={messageEndRef}></div>
      <form
        onSubmit={handleSubmit}
        className="p-5 fixed bottom-0 left-0 w-full mx-auto bg-neutral-800"
      >
        <div className="relative flex items-center justify-center">
          <Textarea
            tabIndex={0}
            required
            rows={1}
            value={input}
            onChange={handleInputChange}
            autoFocus
            placeholder="Ask Here..."
            spellCheck={false}
            className="w-1/3 focus:outline-none shadow-teal-700 shadow-xl placeholder:text-gray-200 text-sm text-white p-5 pr-16 rounded-xl bg-neutral-600"
            style={{ minWidth: "200px" }}
          />
          <button
            type="submit"
            className="absolute bg-teal-500 p-2 rounded-lg"
            style={{ marginLeft: "30% " }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
