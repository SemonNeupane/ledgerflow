import Sidebar from "../components/Sidebar";

export default function Customers() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
          background: "#f8fafc",
        }}
      >
        <h1>Customers</h1>
        <p>This is the Customers page.</p>
      </div>
    </div>
  );
}