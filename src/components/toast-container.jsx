import React from "react";
import { useToast } from "../contexts/toast-context";

export default function ToastContainer() {
  const { messages } = useToast();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        margin: 20,
        padding: 20,
      }}
    >
      {messages.map(({ id, message }) => {
        return (
          <div
            key={id}
            style={{
              marginBottom: 10,
              padding: 10,
              border: "1px solid black",
              borderRadius: 5,
              backgroundColor: "lightgray",
            }}
          >
            {message}
          </div>
        );
      })}
    </div>
  );
}
