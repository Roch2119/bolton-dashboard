'use client';

import React, { useState, useEffect } from 'react';
import { X, Trash2 } from 'lucide-react';

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

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddNote();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-lg z-50 
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Notes</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Notes List */}
        <div className="h-[calc(100%-8rem)] overflow-y-auto p-4">
          {notes.length === 0 ? (
            <p className="text-gray-500 text-center">No notes yet. Add one below!</p>
          ) : (
            <ul className="space-y-3">
              {notes.map((note) => (
                <li 
                  key={note.id} 
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="flex-grow text-sm">{note.text}</span>
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Delete note"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Add a note..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddNote}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesSidebar;