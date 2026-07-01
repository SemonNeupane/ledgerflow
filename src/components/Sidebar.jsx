import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import {
  LayoutDashboard,
  Landmark,
  ScrollText,
  Users,
  Plus,
  ChartColumn,
  Menu,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={18} strokeWidth={2} />,
  },
  {
    label: "Transactions",
    path: "/transactions",
    icon: <ScrollText size={18} strokeWidth={2} />,
  },
  {
    label: "Customers",
    path: "/customers",
    icon: <Users size={18} strokeWidth={2} />,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: <ChartColumn size={18} strokeWidth={2} />,
  },
  {
    label: "Ledger",
    path: "/ledger",
    icon: <Landmark size={18} strokeWidth={2} />,
  },
];

export default function Sidebar({ activeItem = "Transactions" }) {
  // const [active, setActive] = useState(activeItem);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
     {/* Mobile Top Header */}
<header className="mobile-header">
  <button
    className="menu-toggle-inline"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <Menu size={22} />
  </button>

  <span className="mobile-header-title">LedgerFlow</span>

  <div className="mobile-header-avatar">AR</div>
</header>



      <aside
        className={`sidebar ${menuOpen ? "open" : ""}`}
        style={{
          width: 210,
          minWidth: 210,
          height: "100vh",
          backgroundColor: "#e6ebf5",
          borderRight: "1px solid #d0d8e8",
          display: "flex",
          flexDirection: "column",
          padding: "24px 0 20px 0",
          boxSizing: "border-box",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
        }}
      >
        {/* Brand */}
        <div style={{ padding: "0 20px 28px 20px" }}>
          <div
            className="brand-title"
            style={{
              marginRight: 120,
              fontWeight: 700,
              fontSize: 26,
              color: "#1d4ed8",
              letterSpacing: "-0.5px",
            }}
          >
            LedgerFlow
          </div>

          <div
            className="brand-subtitle"
            style={{
              marginRight: 61,
              fontSize: 12,
              color: "#333",
              fontWeight: 500,
              marginTop: 2,
            }}
          >
            Enterprise Finance
          </div>
        </div>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: "0 12px",
            flex: 1,
          }}
        >
          {navItems.map((item) => (
            <NavLink
  key={item.label}
  to={item.path}
  className={({ isActive }) =>
    `nav-btn ${isActive ? "active" : ""}`
  }
  onClick={() => setMenuOpen(false)}
  style={{ textDecoration: "none" }}
>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#363b43",
                }}
              >
                {item.icon}
              </span>

              <span className="nav-label">
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>
                {/* Bottom */}
        <div
          style={{
            padding: "0 12px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* New Transaction Button */}
          <button
            className="new-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              width: "100%",
              padding: "9px 0",
              borderRadius: 10,
              border: "none",
              background: "#1d4ed8",
              color: "#fff",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            <Plus size={16} strokeWidth={2.5} />

            <span className="new-btn-text">
              New Transaction
            </span>
          </button>

          {/* User */}
          <div
            className="user-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "6px 4px",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #1d4ed8, #60a5fa)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 11,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              AR
            </div>

            <div
              className="user-info"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <div
                style={{
                  fontSize: 14.5,
                  fontWeight: 700,
                  color: "#000",
                  lineHeight: "12px",
                  margin: 0,
                  padding: 0,
                }}
              >
                Alex Rivera
              </div>

              <div
                style={{
                  fontSize: 8.5,
                  color: "#363b43",
                  fontWeight: 700,
                  letterSpacing: "0.4px",
                  lineHeight: "13px",
                  textTransform: "uppercase",
                  margin: 0,
                  padding: 0,
                }}
              >
                Admin Account
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}