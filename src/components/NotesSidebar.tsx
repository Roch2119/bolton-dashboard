'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

export interface Note {
  id: number;
  text: string;
}

export interface NotesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotesSidebar: React.FC<NotesSidebarProps> = ({ isOpen, onClose }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    const note: Note = {
      id: Date.now(),
      text: newNote,
    };
    setNotes([...notes, note]);
    setNewNote('');
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Notes</h2>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      <ul className="mb-4">
        {notes.map((note) => (
          <li key={note.id} className="flex justify-between items-center mb-2">
            <span>{note.text}</span>
            <button
              onClick={() => handleDeleteNote(note.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          placeholder="Add a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="flex-grow border p-2 rounded-l"
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NotesSidebar;