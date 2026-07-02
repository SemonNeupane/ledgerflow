import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../App.css";
import {
  Search,
  Bell,
  Settings,
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export default function Transactions() {
  const [direction, setDirection] = useState("received"); // "received" | "paid"
  const [amount, setAmount] = useState("0.00");
  const [customer, setCustomer] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const handleSaveTransaction = async () => {
  try {
    const response = await axios.post(
      "http://localhost/ledgerflow/backend/transactions/create.php",
      {
        customer_id: customer,          
        transaction_type: direction,
        amount: amount,
        transaction_date: date,
        notes: notes,
      }
    );

    if (response.data.status) {
      alert(response.data.message);

      
      setAmount("0.00");
      setCustomer("");
      setDate("");
      setNotes("");
      setDirection("received");
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Unable to connect to server.");
  }
};


  return (
    <div style={styles.app}>
      <Sidebar activeItem="Transactions" />

      {/* Main content */}
      <div style={styles.main}>
        {/* Top bar */}
        <header className="top-bar" style={styles.topBar}>
          <div style={styles.topLeft}>
            <span style={styles.pageTitle}>Transactions</span>
            <div style={styles.searchBox}>
              <Search size={14} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search entries..."
                style={styles.searchInput}
              />
            </div>
          </div>

          <div style={styles.topRight}>
            <button style={styles.iconBtn} aria-label="Notifications">
              <Bell size={18} color="#64748b" strokeWidth={2} />
            </button>
            <button style={styles.iconBtn} aria-label="Settings">
              <Settings size={18} color="#64748b" strokeWidth={2} />
            </button>
          </div>
        </header>

        {/* Page body */}
        <div style={styles.body}>
          <div style={styles.card}>
            {/* Left info panel */}
            <div style={styles.leftPanel}>
              <div style={styles.leftPanelContent}>
                <a href="#" style={styles.backLink} onClick={(e) => e.preventDefault()}>
                  <ArrowLeft size={13} strokeWidth={2.5} />
                  Back to Ledger
                </a>

                <h2 style={styles.heading}>Record New Flow</h2>

                <p style={styles.description}>
                  Input your transaction details to keep your enterprise
                  ledger synchronized in real-time.
                </p>

                <div style={styles.quickHelp}>
                  <div style={styles.quickHelpLabel}>QUICK HELP</div>
                  <div style={styles.quickHelpText}>
                    Ensure the amount matches your bank statement for
                    automated reconciliation.
                  </div>
                </div>
              </div>

              <div style={styles.secureRow}>
                <div style={styles.secureIcon}>
                  <ShieldCheck size={14} color="#1d4ed8" strokeWidth={2} />
                </div>
                <div style={styles.secureText}>
                  Secured with
                  <br />
                  AES-256 Encryption
                </div>
              </div>
            </div>

            {/* Right form panel */}
            <div style={styles.rightPanel}>
              <div style={styles.formScroll}>
                <label style={styles.fieldLabel}>TRANSACTION AMOUNT</label>
                <div style={styles.amountBox}>
                  <span style={styles.amountPrefix}>$</span>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={styles.amountInput}
                  />
                </div>

                <div style={styles.toggleRow}>
                  <button
                    type="button"
                    onClick={() => setDirection("received")}
                    style={{
                      ...styles.toggleBtn,
                      ...(direction === "received"
                        ? styles.toggleBtnActive
                        : styles.toggleBtnInactive),
                    }}
                  >
                    <ArrowDownLeft
                      size={15}
                      strokeWidth={2.5}
                      color={direction === "received" ? "#fff" : "#475569"}
                    />
                    Received
                  </button>
                  <button
                    type="button"
                    onClick={() => setDirection("paid")}
                    style={{
                      ...styles.toggleBtn,
                      ...(direction === "paid"
                        ? styles.toggleBtnActive
                        : styles.toggleBtnInactive),
                    }}
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={2.5}
                      color={direction === "paid" ? "#fff" : "#475569"}
                    />
                    Paid
                  </button>
                </div>

                <div style={styles.twoColRow}>
                  <div style={styles.col}>
                    <label style={styles.fieldLabel}>CUSTOMER / ENTITY</label>
                    <div style={styles.inputWithIcon}>
                      <Search size={14} color="#94a3b8" />
                      <input
                        type="text"
                        placeholder="Search customer..."
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                        style={styles.plainInput}
                      />
                    </div>
                  </div>

                  <div style={styles.col}>
                    <label style={styles.fieldLabel}>TRANSACTION DATE</label>
                    <div style={styles.inputWithIcon}>
                      <Calendar size={14} color="#94a3b8" />
                      <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    style={styles.plainInput}
/>
                    </div>
                  </div>
                </div>

                <label style={{ ...styles.fieldLabel, marginTop: 18 }}>
                  ADDITIONAL NOTES
                </label>
                <textarea
                  placeholder="Reference ID, project name, or purpose..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={styles.textarea}
                />
              </div>

              <div style={styles.formFooter}>
                <button type="button" style={styles.cancelBtn}>
                  Cancel
                </button>
                <button type="button" style={styles.saveBtn} onClick={handleSaveTransaction}>
                  <CheckCircle2 size={16} strokeWidth={2.2} />
                  Save Transaction
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#f1f5f9",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    overflow: "hidden",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    minWidth: 0,
  },
  topBar: {
    height: 56,
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e8edf3",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    flexShrink: 0,
  },
  topLeft: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  pageTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#1d4ed8",
    letterSpacing: "-0.2px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: "6px 12px",
    width: 200,
  },
  searchInput: {
    border: "none",
    background: "transparent",
    outline: "none",
    fontSize: 13,
    color: "#64748b",
    width: "100%",
    fontFamily: "inherit",
  },
  topRight: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  iconBtn: {
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    background: "transparent",
    borderRadius: 8,
    cursor: "pointer",
    transition: "background 0.15s",
  },
  body: {
    flex: 1,
    overflowY: "auto",
    padding: 24,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  },

  /* Card */
  card: {
    display: "flex",
    width: "100%",
    maxWidth: 780,
    height: "fit-content",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    border: "1px solid #e8edf3",
    boxShadow: "0 4px 18px rgba(15, 23, 42, 0.06)",
    overflow: "hidden",
  },

  /* Left panel */
  leftPanel: {
    width: 220,
    minWidth: 220,
    backgroundColor: "#dfe6fb",
    padding: "24px 22px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },
  leftPanelContent: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    fontWeight: 600,
    color: "#1d4ed8",
    textDecoration: "none",
  },
  heading: {
    fontSize: 22,
    fontWeight: 700,
    color: "#0f172a",
    margin: 0,
    lineHeight: "26px",
    letterSpacing: "-0.3px",
  },
  description: {
    fontSize: 12.5,
    color: "#475569",
    lineHeight: "18px",
    margin: 0,
  },
  quickHelp: {
    backgroundColor: "#eef2fd",
    border: "1px solid #cdd9f7",
    borderRadius: 10,
    padding: "12px 14px",
    marginTop: 6,
  },
  quickHelpLabel: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.5px",
    color: "#334155",
    marginBottom: 6,
  },
  quickHelpText: {
    fontSize: 11.5,
    color: "#475569",
    lineHeight: "16px",
  },
  secureRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  secureIcon: {
    width: 26,
    height: 26,
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  secureText: {
    fontSize: 10.5,
    fontWeight: 600,
    color: "#334155",
    lineHeight: "14px",
  },

  /* Right panel */
  rightPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "24px 26px",
    boxSizing: "border-box",
  },
  formScroll: {
    display: "flex",
    flexDirection: "column",
  },
  fieldLabel: {
    fontSize: 10.5,
    fontWeight: 700,
    letterSpacing: "0.5px",
    color: "#64748b",
    marginBottom: 8,
    display: "block",
  },
  amountBox: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    padding: "10px 14px",
    marginBottom: 14,
  },
  amountPrefix: {
    fontSize: 18,
    fontWeight: 700,
    color: "#0f172a",
  },
  amountInput: {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: 18,
    fontWeight: 700,
    color: "#0f172a",
    fontFamily: "inherit",
  },
  toggleRow: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
  },
  toggleBtn: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    padding: "10px 0",
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  toggleBtnActive: {
    backgroundColor: "#1d4ed8",
    border: "1px solid #1d4ed8",
    color: "#fff",
  },
  toggleBtnInactive: {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    color: "#475569",
  },
  twoColRow: {
    display: "flex",
    gap: 14,
  },
  col: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  inputWithIcon: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 9,
    padding: "9px 12px",
  },
  plainInput: {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: 12.5,
    color: "#334155",
    fontFamily: "inherit",
  },
  textarea: {
    marginTop: 0,
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 9,
    padding: "10px 12px",
    fontSize: 12.5,
    color: "#334155",
    fontFamily: "inherit",
    resize: "none",
    minHeight: 70,
    outline: "none",
  },
  formFooter: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 18,
    marginTop: 20,
  },
  cancelBtn: {
    border: "none",
    background: "transparent",
    fontSize: 13,
    fontWeight: 600,
    color: "#475569",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  saveBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    border: "none",
    background: "#1d4ed8",
    color: "#fff",
    fontSize: 13,
    fontWeight: 600,
    padding: "10px 18px",
    borderRadius: 10,
    cursor: "pointer",
    fontFamily: "inherit",
  },
};
