"use client";

import { useState, useEffect } from "react";

const FILTERS = ["all", "unread", "read"];

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replyLoading, setReplyLoading] = useState(false);
  const [replySuccess, setReplySuccess] = useState(false);
  const [toast, setToast] = useState(null);

  // ── Fetch messages ──────────────────────────────────────
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/messages?filter=${filter}`);
      const data = await res.json();
      setMessages(data.messages || []);
    } catch (e) {
      showToast("Failed to load messages.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchMessages(); }, [filter]);

  // ── Toast helper ────────────────────────────────────────
  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // ── Mark read/unread ────────────────────────────────────
  const toggleRead = async (id, current) => {
    try {
      await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: !current }),
      });
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, read: !current } : m))
      );
      if (selected?.id === id) setSelected((s) => ({ ...s, read: !current }));
      showToast(!current ? "Marked as read." : "Marked as unread.");
    } catch {
      showToast("Failed to update.", "error");
    }
  };

  // ── Delete ───────────────────────────────────────────────
  const deleteMessage = async (id) => {
    if (!confirm("Delete this message? This cannot be undone.")) return;
    try {
      await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
      setMessages((prev) => prev.filter((m) => m.id !== id));
      if (selected?.id === id) setSelected(null);
      showToast("Message deleted.");
    } catch {
      showToast("Failed to delete.", "error");
    }
  };

  // ── Reply ────────────────────────────────────────────────
  const sendReply = async () => {
    if (!replyText.trim()) return;
    setReplyLoading(true);
    try {
      const res = await fetch(`/api/admin/messages/${selected.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          replyText,
          toEmail: selected.email,
          toName: selected.name,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setReplySuccess(true);
      setReplyText("");
      setMessages((prev) =>
        prev.map((m) => (m.id === selected.id ? { ...m, read: true } : m))
      );
      setSelected((s) => ({ ...s, read: true }));
      showToast("Reply sent successfully!");
      setTimeout(() => setReplySuccess(false), 3000);
    } catch (e) {
      showToast(e.message || "Failed to send reply.", "error");
    } finally {
      setReplyLoading(false);
    }
  };

  // ── Stats ────────────────────────────────────────────────
  const total  = messages.length;
  const unread = messages.filter((m) => !m.read).length;
  const read   = messages.filter((m) => m.read).length;

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-KE", {
      day: "numeric", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f4", fontFamily: "'Trebuchet MS', sans-serif" }}>

      {/* ── Toast ── */}
      {toast && (
        <div style={{
          position: "fixed", top: "20px", right: "20px", zIndex: 9999,
          background: toast.type === "error" ? "#c62828" : "#2e7d32",
          color: "#fff", padding: "12px 20px", borderRadius: "8px",
          fontSize: "0.88rem", fontWeight: 600,
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        }}>
          {toast.type === "error" ? "⚠️" : "✅"} {toast.msg}
        </div>
      )}

      {/* ── Header ── */}
      <div style={{
        background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
        padding: "20px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "1.5rem" }}>🚗</span>
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.3px" }}>
              AutoHub Admin
            </div>
            <div style={{ color: "#a5d6a7", fontSize: "0.78rem" }}>Contact Messages Dashboard</div>
          </div>
        </div>
        <a href="/" style={{ color: "#a5d6a7", fontSize: "0.85rem", textDecoration: "none" }}>
          ← Back to Site
        </a>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px" }}>

        {/* ── Stats Cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "28px" }}>
          {[
            { label: "Total Messages", value: total,  icon: "📬", color: "#1b5e20" },
            { label: "Unread",         value: unread, icon: "🔴", color: "#c62828" },
            { label: "Read",           value: read,   icon: "✅", color: "#2e7d32" },
          ].map((s) => (
            <div key={s.label} style={{
              background: "#fff", borderRadius: "12px", padding: "20px 24px",
              border: "1px solid #e0e0e0", display: "flex", alignItems: "center", gap: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}>
              <div style={{ fontSize: "1.8rem" }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "0.8rem", color: "#888", marginTop: "2px" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Main Panel ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "20px", alignItems: "start" }}>

          {/* ── Left: Message List ── */}
          <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e0e0e0", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>

            {/* Filter tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid #e0e0e0" }}>
              {FILTERS.map((f) => (
                <button key={f} onClick={() => setFilter(f)} style={{
                  flex: 1, padding: "12px 8px", border: "none", cursor: "pointer",
                  background: filter === f ? "#e8f5e9" : "#fff",
                  color: filter === f ? "#1b5e20" : "#666",
                  fontWeight: filter === f ? 700 : 500,
                  fontSize: "0.82rem", textTransform: "capitalize",
                  borderBottom: filter === f ? "2px solid #2e7d32" : "2px solid transparent",
                  transition: "all 0.15s",
                }}>
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            {/* List */}
            <div style={{ maxHeight: "600px", overflowY: "auto" }}>
              {loading ? (
                <div style={{ padding: "40px", textAlign: "center", color: "#888" }}>Loading...</div>
              ) : messages.length === 0 ? (
                <div style={{ padding: "40px", textAlign: "center", color: "#888" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>📭</div>
                  No messages found.
                </div>
              ) : (
                messages.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => { setSelected(m); setReplyText(""); setReplySuccess(false); }}
                    style={{
                      padding: "16px 20px", cursor: "pointer",
                      borderBottom: "1px solid #f0f0f0",
                      background: selected?.id === m.id ? "#e8f5e9" : m.read ? "#fff" : "#f9fffe",
                      borderLeft: m.read ? "3px solid transparent" : "3px solid #4caf50",
                      transition: "background 0.15s",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                      <div style={{ fontWeight: m.read ? 500 : 700, fontSize: "0.9rem", color: "#1a1a1a" }}>
                        {m.name}
                      </div>
                      {!m.read && (
                        <span style={{ background: "#4caf50", color: "#fff", fontSize: "0.65rem", padding: "2px 7px", borderRadius: "10px", fontWeight: 700 }}>
                          NEW
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#4caf50", marginBottom: "4px", textTransform: "capitalize" }}>
                      {m.subject.replace("-", " ")}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#888", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {m.message}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#bbb", marginTop: "6px" }}>
                      {formatDate(m.createdAt)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* ── Right: Message Detail ── */}
          <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e0e0e0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            {!selected ? (
              <div style={{ padding: "60px 40px", textAlign: "center", color: "#aaa" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>👈</div>
                <div style={{ fontWeight: 600 }}>Select a message to view</div>
              </div>
            ) : (
              <div>
                {/* Detail header */}
                <div style={{ padding: "20px 24px", borderBottom: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <h3 style={{ margin: "0 0 4px", fontSize: "1.1rem", fontWeight: 700, color: "#1b5e20" }}>
                      {selected.name}
                    </h3>
                    <div style={{ fontSize: "0.83rem", color: "#666" }}>{selected.email}</div>
                    {selected.phone && <div style={{ fontSize: "0.83rem", color: "#666" }}>{selected.phone}</div>}
                  </div>
                  {/* Action buttons */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      onClick={() => toggleRead(selected.id, selected.read)}
                      style={{
                        padding: "7px 14px", borderRadius: "7px", border: "1.5px solid #4caf50",
                        background: "#fff", color: "#2e7d32", fontSize: "0.78rem",
                        fontWeight: 600, cursor: "pointer",
                      }}
                    >
                      {selected.read ? "Mark Unread" : "Mark Read"}
                    </button>
                    <button
                      onClick={() => deleteMessage(selected.id)}
                      style={{
                        padding: "7px 14px", borderRadius: "7px", border: "1.5px solid #ffcdd2",
                        background: "#fff", color: "#c62828", fontSize: "0.78rem",
                        fontWeight: 600, cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Subject + date */}
                <div style={{ padding: "16px 24px", borderBottom: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ fontSize: "0.72rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.5px" }}>Subject </span>
                    <span style={{ fontSize: "0.88rem", color: "#333", fontWeight: 600, textTransform: "capitalize" }}>
                      {selected.subject.replace("-", " ")}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#aaa" }}>{formatDate(selected.createdAt)}</div>
                </div>

                {/* Message body */}
                <div style={{ padding: "20px 24px", borderBottom: "1px solid #f0f0f0" }}>
                  <div style={{ fontSize: "0.72rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px" }}>Message</div>
                  <p style={{ fontSize: "0.93rem", color: "#333", lineHeight: 1.8, margin: 0 }}>
                    {selected.message}
                  </p>
                </div>

                {/* Reply box */}
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ fontSize: "0.72rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px" }}>
                    Reply to {selected.name}
                  </div>

                  {replySuccess ? (
                    <div style={{ background: "#e8f5e9", border: "1px solid #c8e6c9", borderRadius: "8px", padding: "14px", color: "#2e7d32", fontSize: "0.88rem", fontWeight: 600, textAlign: "center" }}>
                      ✅ Reply sent to {selected.email}
                    </div>
                  ) : (
                    <>
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder={`Write your reply to ${selected.name}...`}
                        rows={4}
                        style={{
                          width: "100%", padding: "12px 14px",
                          border: "1.5px solid #e0e0e0", borderRadius: "8px",
                          fontSize: "0.9rem", color: "#333", resize: "vertical",
                          fontFamily: "inherit", boxSizing: "border-box",
                          outline: "none", marginBottom: "12px",
                        }}
                      />
                      <button
                        onClick={sendReply}
                        disabled={replyLoading || !replyText.trim()}
                        style={{
                          width: "100%", padding: "12px",
                          background: replyLoading || !replyText.trim() ? "#a5d6a7" : "#2e7d32",
                          color: "#fff", border: "none", borderRadius: "8px",
                          fontWeight: 700, fontSize: "0.95rem",
                          cursor: replyLoading || !replyText.trim() ? "not-allowed" : "pointer",
                          transition: "background 0.2s",
                        }}
                      >
                        {replyLoading ? "Sending..." : `Send Reply to ${selected.email} →`}
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}