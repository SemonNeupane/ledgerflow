import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .ledger-app {
    display: flex;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background: #F0F2F8;
  }

  /* ─── SIDEBAR ─── */
  .sidebar {
    width: 210px;
    min-height: 100vh;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 0;
    box-shadow: 2px 0 12px rgba(0, 0, 0, 0.06);
    position: relative;
    flex-shrink: 0;
  }

  /* Brand */
  .sidebar-brand {
    padding: 24px 20px 20px;
    border-bottom: 1px solid #F0F2F8;
  }

  .brand-name {
    font-size: 20px;
    font-weight: 700;
    color: #1A2B6B;
    letter-spacing: -0.3px;
    line-height: 1.1;
  }

  .brand-sub {
    font-size: 11px;
    font-weight: 500;
    color: #8A94A6;
    margin-top: 2px;
    letter-spacing: 0.2px;
  }

  /* Nav */
  .sidebar-nav {
    flex: 1;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
    border: none;
    background: transparent;
    width: 100%;
    text-align: left;
  }

  .nav-item span {
    font-size: 14px;
    font-weight: 500;
    color: #6B7A99;
    transition: color 0.15s ease;
  }

  .nav-item svg {
    flex-shrink: 0;
    color: #6B7A99;
    transition: color 0.15s ease;
  }

  .nav-item:hover {
    background: #F0F4FF;
  }

  .nav-item:hover span,
  .nav-item:hover svg {
    color: #2D52CC;
  }

  .nav-item.active {
    background: #EEF2FF;
  }

  .nav-item.active span {
    color: #2D52CC;
    font-weight: 600;
  }

  .nav-item.active svg {
    color: #2D52CC;
  }

  /* New Transaction Button */
  .sidebar-cta {
    padding: 16px 16px 12px;
    border-top: 1px solid #F0F2F8;
  }

  .btn-new-transaction {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    width: 100%;
    padding: 11px 16px;
    background: #2D52CC;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.1s ease;
    letter-spacing: 0.1px;
  }

  .btn-new-transaction:hover {
    background: #1A3EB8;
  }

  .btn-new-transaction:active {
    transform: scale(0.98);
  }

  /* User Profile */
  .sidebar-user {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
    border-top: 1px solid #F0F2F8;
    cursor: pointer;
    transition: background 0.15s ease;
    border-radius: 0 0 0 0;
  }

  .sidebar-user:hover {
    background: #F8F9FF;
  }

  .user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2D52CC 0%, #5B7FE8 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
  }

  .user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .user-avatar-initials {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
  }

  .user-info {
    flex: 1;
    min-width: 0;
  }

  .user-name {
    font-size: 13px;
    font-weight: 600;
    color: #1A2B6B;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .user-role {
    font-size: 10.5px;
    font-weight: 500;
    color: #8A94A6;
    margin-top: 1px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  /* ─── MAIN CONTENT PLACEHOLDER ─── */
  .main-content {
    flex: 1;
    padding: 28px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #8A94A6;
    font-size: 15px;
    font-family: 'Inter', sans-serif;
  }

  .main-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    opacity: 0.5;
  }

  .main-placeholder svg {
    color: #C0C8DC;
  }
`;

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconDashboard = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
  </svg>
);

const IconTransactions = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <path d="M9 12h6M9 16h4"/>
  </svg>
);

const IconCustomers = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="4"/>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87"/>
  </svg>
);

const IconReports = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

const IconLedger = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <line x1="9" y1="10" x2="15" y2="10"/>
    <line x1="9" y1="14" x2="13" y2="14"/>
  </svg>
);

const IconPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

// ─── Nav data ────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "dashboard",     label: "Dashboard",     icon: <IconDashboard /> },
  { id: "transactions",  label: "Transactions",  icon: <IconTransactions /> },
  { id: "customers",     label: "Customers",     icon: <IconCustomers /> },
  { id: "reports",       label: "Reports",       icon: <IconReports /> },
  { id: "ledger",        label: "Ledger",        icon: <IconLedger /> },
];

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({ activeItem, onNav }) {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="brand-name">LedgerFlow</div>
        <div className="brand-sub">Enterprise Finance</div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav-item${activeItem === item.id ? " active" : ""}`}
            onClick={() => onNav(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* New Transaction CTA */}
      <div className="sidebar-cta">
        <button className="btn-new-transaction">
          <IconPlus />
          New Transaction
        </button>
      </div>

      {/* User Profile */}
      <div className="sidebar-user">
        <div className="user-avatar">
          <span className="user-avatar-initials">AR</span>
        </div>
        <div className="user-info">
          <div className="user-name">Alex Rivera</div>
          <div className="user-role">Admin Account</div>
        </div>
      </div>
    </aside>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState("dashboard");

  return (
    <>
      <style>{styles}</style>
      <div className="ledger-app">
        <Sidebar activeItem={active} onNav={setActive} />

        {/* Placeholder main area */}
        <main className="main-content">
          <div className="main-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3"/>
              <path d="M3 9h18"/>
            </svg>
            <span>
              {NAV_ITEMS.find((n) => n.id === active)?.label} content goes here
            </span>
          </div>
        </main>
      </div>
    </>
  );
}
