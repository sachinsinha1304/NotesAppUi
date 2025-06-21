import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import "./css/notes.css";
import "./css/ui.css"; // Custom CSS file for this component

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:3000/api/notes";

  const fetchNotes = async () => {
    try {
      const res = await axios.get(API_BASE);
      setNotes(res.data);
    } catch (err) {
      console.error("Failed to fetch notes:", err.message);
    }
  };

  const createNote = async () => {
    if (!title.trim()) return;
    try {
      await axios.post(API_BASE, { title, content });
      setTitle("");
      setContent("");
      fetchNotes();
    } catch (err) {
      console.error("Failed to create note:", err.message);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      fetchNotes();
    } catch (err) {
      console.error("Failed to delete note:", err.message);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="notes-app-container">
      <div className="notes-app-wrapper">
        <h1 className="notes-app-title">📝 My Personal Notes</h1>

        <div className="note-form">
          <h2 className="note-form-title">Create a New Note</h2>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="note-input"
          />
          <Textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="note-input"
          />
          <Button onClick={createNote} className="note-add-button">
            ➕ Add Note
          </Button>
        </div>

        <div className="notes-list">
          {notes.length === 0 ? (
            <p className="empty-message">No notes available.</p>
          ) : (
            notes.map((note) => (
              <Card key={note.id} className="note-card">
                <CardHeader className="note-card-header">
                  <span>{note.title}</span>
                  <span className="note-timestamp">{new Date(note.created_at).toLocaleString()}</span>
                </CardHeader>
                <CardContent>
                  <p className="note-card-content">{note.content}</p>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteNote(note.id)}
                    className="note-delete-button"
                  >
                    🗑️ Delete
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}