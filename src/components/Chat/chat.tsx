"use client";  // Make the component a client component

import React, { useState, useEffect } from "react";

export default function Table() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(true);
  const [messages, setMessages] = useState([
    { text: "hello", isUser: true },
    { text: "This is a response from the chatbot.", isUser: false },
    { text: "this example of chat", isUser: true },
    { text: "This is a response from the chatbot.", isUser: false },
    { text: "design with tailwind", isUser: true },
    { text: "This is a response from the chatbot.", isUser: false },
  ]);
  const [userMessage, setUserMessage] = useState("");

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      setMessages([...messages, { text: userMessage, isUser: true }]);
      setUserMessage("");
      respondToUser(userMessage);
    }
  };

  const respondToUser = (message) => {
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "This is a response from the chatbot.", isUser: false },
      ]);
    }, 500);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <button
          onClick={toggleChatbox}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          Chat with Admin Bot
        </button>
      </div>
      {isChatboxOpen && (
        <div className="fixed bottom-16 right-4 w-96">
          <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
            <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
              <p className="text-lg font-semibold">Admin Bot</p>
              <button
                onClick={toggleChatbox}
                className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-4 h-80 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    message.isUser ? "text-right" : "text-left"
                  }`}
                >
                  <p
                    className={`${
                      message.isUser
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    } rounded-lg py-2 px-4 inline-block`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t flex">
              <input
                id="user-input"
                type="text"
                placeholder="Type a message"
                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                id="send-button"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
