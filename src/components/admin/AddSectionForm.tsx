"use client";

import { useState } from "react";
import { addSection } from "@/src/actions/adminActions";
import { Plus, Loader2 } from "lucide-react";

interface AddSectionFormProps {
  courseId: string;
}

export default function AddSectionForm({ courseId }: AddSectionFormProps) {
  const [title, setTitle] = useState("");
  const [adding, setAdding] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = async () => {
    if (!title.trim()) return;
    setAdding(true);
    try {
      await addSection(courseId, title.trim());
      setTitle("");
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to add section:", error);
      alert("Failed to add section");
    } finally {
      setAdding(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="h-4 w-4" />
        Add New Section
      </button>
    );
  }

  return (
    <div className="rounded-lg border border-border p-4 space-y-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Section title..."
        autoFocus
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <div className="flex items-center gap-2">
        <button
          onClick={handleAdd}
          disabled={adding || !title.trim()}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-white hover:bg-accent/90 transition-colors disabled:opacity-50"
        >
          {adding ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          Add
        </button>
        <button
          onClick={() => {
            setIsOpen(false);
            setTitle("");
          }}
          className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
