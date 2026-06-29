import { useState } from "react";

const navItems = [
  {
    label: "Dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Transactions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="4" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    label: "Customers",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
      </svg>
    ),
  },
  {
    label: "Reports",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    label: "Ledger",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="9" x2="9" y2="21" />
      </svg>
    ),
  },
];

export default function Sidebar({ activeItem = "Dashboard" }) {
  const [active, setActive] = useState(activeItem);

  return (
    <aside style={styles.sidebar}>
      {/* Brand */}
      <div style={styles.brand}>
        {/* <div style={styles.brandIcon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div> */}
        <div style={styles.brandText}>
          <div style={styles.brandName}>LedgerFlow</div>
          <div style={styles.brandSub}>Enterprise Finance</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={styles.nav}>
        {navItems.map((item) => {
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              style={{
                ...styles.navItem,
                ...(isActive ? styles.navItemActive : {}),
              }}
            >
              <span style={{ ...styles.navIcon, ...(isActive ? styles.navIconActive : {}) }}>
                {item.icon}
              </span>
              <span
  style={{
    ...styles.navLabel,
    fontWeight: isActive ? 700 : 500,
  }}
>
  {item.label}
</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      {/* <div style={styles.bottom}>
        <button style={styles.newTxnBtn}>
          <span style={{ fontSize: 18, fontWeight: 300 }}>+</span>
          New Transaction
        </button> */}

        {/* <div style={styles.userRow}>
          <div style={styles.avatar}>AR</div>
          <div>
            <div style={styles.userName}>Alex Rivera</div>
            <div style={styles.userRole}>ADMIN ACCOUNT</div>
          </div>
        </div> */}
      {/* </div> */}
    </aside>
  );
}

const styles = {
  sidebar: {
    width: 210,
    minWidth: 210,
    height: "100vh",
    backgroundColor: "#ffffff",
    borderRight: "1px solid #e8edf3",
    display: "flex",
    flexDirection: "column",
    padding: "24px 0 20px 0",
    boxSizing: "border-box",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "0 20px 28px 20px",
  },
//   brandIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 8,
//     background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0,
//   },
brandText: {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // Makes both texts start at the same point
},
  brandName: {
    fontWeight: 700,
    fontSize: 25,
    color: "#1d4ed8",
    letterSpacing: "-0.3px",
  },
  brandSub: {
  fontSize: 10,
  color: "black",
  fontWeight: 500,
  marginTop: 2,
  marginLeft: 0,      // Ensure no left offset
  paddingLeft: 0,     // Ensure no padding
  letterSpacing: 0,
},
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: "0 12px",
    flex: 1,
  },
  navItem: {
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "9px 12px",
  borderRadius: 8,
  border: "none",
  backgroundColor: "transparent", // <-- important
  cursor: "pointer",
  width: "100%",
  textAlign: "left",
  transition: "all 0.2s ease",
  color: "#64748b",
  outline: "none",
  boxShadow: "none",
  appearance: "none",
},
  navItemActive: {
    backgroundColor: "#eff6ff",
    color: "#64748b",
  },
  navIcon: {
    display: "flex",
    alignItems: "center",
    color: "#94a3b8",
  },
  navIconActive: {
    color: "#64748b",
  },
  navLabel: {
    fontSize: 13.5,
    fontWeight: 500,
  },
  bottom: {
    padding: "0 12px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  newTxnBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: "100%",
    padding: "10px 0",
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: 13,
    cursor: "pointer",
    letterSpacing: "0.1px",
  },
  userRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 8px",
    borderRadius: 8,
    backgroundColor: "#f8fafc",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #1d4ed8, #60a5fa)",
    color: "#fff",
    fontWeight: 700,
    fontSize: 11,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  userName: {
    fontSize: 12.5,
    fontWeight: 600,
    color: "#0f172a",
  },
  userRole: {
    fontSize: 9.5,
    color: "#94a3b8",
    fontWeight: 500,
    letterSpacing: "0.4px",
  },
};