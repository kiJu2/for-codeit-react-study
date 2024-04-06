import React from 'react';

export default function Modal ({ title, children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <header className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </header>
        <main className="modal-content">
          {children}
        </main>
      </div>
    </div>
  );
};
