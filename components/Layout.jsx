import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <Navbar />

      <main className="container mx-auto px-4 py-10">{children}</main>

      <footer className="bg-slate-200 text-center py-4 mt-8 text-slate-600 text-sm ">
        my blog 2026
      </footer>
    </div>
  );
}

export default Layout;
