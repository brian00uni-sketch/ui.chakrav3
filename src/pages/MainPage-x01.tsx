import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MainPage: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    // sessionStorage.setItem("isAuthenticated", "false");
    // localStorage.removeItem("accessToken");
    // navigate("/login");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      <aside
        style={{ width: 240, padding: 16, borderRight: "1px solid #e2e8f0" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong>Logo</strong>
          <button onClick={() => {}}>✕</button>
        </div>
        <nav style={{ marginTop: 16 }}>
          <div style={{ padding: "8px 0" }}>
            <Link to="#">Customized AI</Link>
          </div>
          <div style={{ padding: "8px 0" }}>
            <Link to="#">Data Explore</Link>
          </div>
        </nav>
      </aside>

      <div style={{ flex: 1 }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 12,
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button onClick={() => {}}>☰</button>
            <strong>Logo</strong>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button aria-label="notifications">🔔</button>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img
                src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                alt="avatar"
                style={{ width: 28, height: 28, borderRadius: "50%" }}
              />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14 }}>Justina Clark</div>
                <div style={{ fontSize: 12, color: "#718096" }}>Admin</div>
              </div>
              <button onClick={onLogout}>Sign out</button>
            </div>
          </div>
        </header>

        <main style={{ padding: 16 }}>{children}</main>
      </div>
    </div>
  );
};

export default MainPage;
