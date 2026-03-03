"use client";

import { useState } from "react";
import { updateSection, deleteSection } from "@/src/actions/adminActions";
import ReactMarkdown from "react-markdown";
import { Save, Loader2, Trash2, Eye, Edit, ChevronDown, ChevronRight } from "lucide-react";

interface SectionEditorProps {
  section: {
    id: string;
    title: string;
    content: string | null;
    order_index: number;
  };
  index: number;
}

export default function SectionEditor({ section, index }: SectionEditorProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(section.title);
  const [content, setContent] = useState(section.content || "");
  const [previewMode, setPreviewMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      await updateSection(section.id, { title, content });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (error) {
      console.error("Failed to save:", error);
      alert("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm(`Delete section "${title}"? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      await deleteSection(section.id);
    } catch (error) {
      console.error("Failed to delete:", error);
      alert("Failed to delete section");
      setDeleting(false);
    }
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      {/* Header - always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
          <span className="text-sm font-mono text-muted-foreground">
            {index + 1}.
          </span>
          <span className="font-medium">{title}</span>
        </div>
        {saved && (
          <span className="text-xs text-green-600 dark:text-green-400">
            Saved!
          </span>
        )}
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="border-t border-border p-4 space-y-4">
          {/* Title input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Section Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Content editor with preview toggle */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Content (Markdown)</label>
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {previewMode ? (
                  <>
                    <Edit className="h-3 w-3" /> Edit
                  </>
                ) : (
                  <>
                    <Eye className="h-3 w-3" /> Preview
                  </>
                )}
              </button>
            </div>

            {previewMode ? (
              <div className="rounded-md border border-border bg-background p-4 min-h-[300px] max-h-[500px] overflow-y-auto">
                <div className="lesson-content prose prose-sm dark:prose-invert max-w-none">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>
              </div>
            ) : (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-accent resize-y"
                placeholder="# Section Title&#10;&#10;Your markdown content here..."
              />
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {saving ? "Saving..." : "Save Section"}
            </button>

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="inline-flex items-center gap-2 rounded-md border border-red-300 dark:border-red-800 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-colors disabled:opacity-50"
            >
              {deleting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4" />
              )}
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
