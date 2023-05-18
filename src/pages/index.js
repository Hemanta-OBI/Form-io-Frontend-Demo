import Link from "next/link";

export default function Home() {
  return (
    <main className="container-sm flex min-h-screen flex-col items-center justify-between p-24">
      <ul
        style={{
          display: "flex",
          height: "300px",
          marginTop: "100px",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        <li
          style={{
            padding: "1rem",
            borderRadius: "4px",
            backgroundColor: "#28a745",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Link
            href="/form-builder"
            style={{ backgroundColor: "transparent", color: "#fff" }}
          >
            Create Forms
          </Link>
        </li>
        <li
          style={{
            padding: "1rem",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "#fff",
            textAlign: "center",
            marginLeft: "1rem",
          }}
        >
          <Link
            href="/registration-form"
            style={{ backgroundColor: "transparent", color: "#fff" }}
          >
            View Forms
          </Link>
        </li>
      </ul>
    </main>
  );
}
