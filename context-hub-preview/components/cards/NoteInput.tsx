"use client";

import { useState } from "react";
import styles from "./cards.module.css";

type Note = { text: string; time: string };

function nowTime() {
  return new Date()
    .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
    .toLowerCase();
}

export default function NoteInput({ initialNote = "" }: { initialNote?: string }) {
  const [notes, setNotes] = useState<Note[]>(
    initialNote ? [{ text: initialNote, time: "10:30 am" }] : []
  );
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const submit = () => {
    const t = value.trim();
    if (!t) return;
    setNotes((n) => [...n, { text: t, time: nowTime() }]);
    setValue("");
  };

  return (
    <>
      {/* input row */}
      <div className={styles.ctxNote}>
        <span className={styles.avatar} aria-hidden />
        <input
          type="text"
          className={`type-body2 ${styles.noteInput} ${focused ? styles.noteInputFocused : ""}`}
          placeholder="Write a Note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          aria-label="Write a note"
        />
      </div>

      {/* saved notes */}
      {notes.length > 0 && (
        <div className={styles.ctxNotes}>
          <span className={`type-body1-medium ${styles.ctxNotesLabel}`}>Note(s)</span>
          {notes.map((n, i) => (
            <div className={styles.noteRow} key={i}>
              <span className={`type-body2 ${styles.noteRowText}`}>{n.text}</span>
              <span className={`type-body2 ${styles.noteRowTime}`}>{n.time}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
