import React, { createContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [messages, setMessages] = useState([]);

  function pushToast(message, id = Date.now()) {
    setMessages([...messages, { id, message }]);

    return id;
  }

  function removeToast(id) {
    setMessages(messages.filter((t) => t.id !== id));
  }

  function toast(message, time = 3000) {
    const toastId = pushToast(message);
    setTimeout(() => {
      removeToast(toastId);
    }, time);
  }

  return (
    <ToastContext.Provider value={{ toast, messages }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
