"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { Product, Order, Lead } from "@/lib/supabase";
import { Lock, Package, ShoppingBag, Users, LogOut } from "lucide-react";

const ADMIN_PASSWORD = (
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "Lalitha.kumari"
).trim();

type Tab = "products" | "orders" | "leads";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [tab, setTab] = useState<Tab>("leads");
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("laxis_admin_v2") === "1") setAuthed(true);
  }, []);

  const fetchData = useCallback(async (t: Tab) => {
    setLoading(true);
    try {
      if (t === "products") {
        const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
        setProducts(data ?? []);
      } else if (t === "orders") {
        const { data } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
        setOrders(data ?? []);
      } else {
        const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
        setLeads(data ?? []);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchData(tab);
  }, [authed, tab, fetchData]);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw.trim() === ADMIN_PASSWORD) {
      sessionStorage.setItem("laxis_admin_v2", "1");
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("laxis_admin_v2");
    setAuthed(false);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2.5 justify-center mb-8">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-heading font-black text-sm"
              style={{ backgroundColor: "#CA8A04" }}
            >
              L
            </span>
            <span className="font-heading font-bold text-stone-950 text-base">
              Laxis Admin
            </span>
          </div>
          <form
            onSubmit={login}
            className="bg-white border border-stone-200 rounded-2xl p-8 space-y-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#FEF3C7" }}
              >
                <Lock size={18} style={{ color: "#CA8A04" }} />
              </div>
              <div>
                <p className="font-heading font-bold text-stone-950">Admin Login</p>
                <p className="text-xs font-body text-stone-400">Access your dashboard</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="pw"
                className="block text-xs font-body font-semibold text-stone-400 uppercase tracking-wide mb-2"
              >
                Password
              </label>
              <input
                id="pw"
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-950 font-body text-sm focus:outline-none focus:border-[#CA8A04] transition-colors duration-150"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-red-500 font-body text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-body font-semibold text-white cursor-pointer transition-colors duration-150"
              style={{ backgroundColor: "#CA8A04" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const TABS: { key: Tab; label: string; Icon: React.ElementType }[] = [
    { key: "leads", label: "Leads", Icon: Users },
    { key: "products", label: "Products", Icon: Package },
    { key: "orders", label: "Orders", Icon: ShoppingBag },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-heading font-black text-sm"
            style={{ backgroundColor: "#CA8A04" }}
          >
            L
          </span>
          <span className="font-heading font-bold text-stone-950">
            Laxis Admin
          </span>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm font-body text-stone-500 hover:text-stone-950 transition-colors duration-150 cursor-pointer"
        >
          <LogOut size={15} />
          Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-1 bg-stone-100 p-1 rounded-xl w-fit mb-8">
          {TABS.map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-body font-medium transition-all duration-150 cursor-pointer ${
                tab === key
                  ? "bg-white text-stone-950 shadow-sm"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-20 text-stone-400 font-body text-sm">
            Loading...
          </div>
        ) : tab === "leads" ? (
          <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm font-body">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  {["Name", "Phone", "Email", "Message", "Date"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3.5 text-left text-xs font-semibold text-stone-500 uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-10 text-center text-stone-400">
                      No leads yet.
                    </td>
                  </tr>
                ) : (
                  leads.map((l) => (
                    <tr key={l.id} className="hover:bg-stone-50 transition-colors duration-100">
                      <td className="px-5 py-4 font-medium text-stone-950">{l.name}</td>
                      <td className="px-5 py-4 text-stone-600">{l.phone}</td>
                      <td className="px-5 py-4 text-stone-600">{l.email ?? "—"}</td>
                      <td className="px-5 py-4 text-stone-500 max-w-xs truncate">{l.message ?? "—"}</td>
                      <td className="px-5 py-4 text-stone-400">
                        {new Date(l.created_at).toLocaleDateString("en-IN")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : tab === "products" ? (
          <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm font-body">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  {["Name", "Price", "Visible", "Created"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3.5 text-left text-xs font-semibold text-stone-500 uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-5 py-10 text-center text-stone-400">
                      No products yet.
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr key={p.id} className="hover:bg-stone-50 transition-colors duration-100">
                      <td className="px-5 py-4 font-medium text-stone-950">{p.name}</td>
                      <td className="px-5 py-4 text-stone-600">₹{p.price.toLocaleString("en-IN")}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            p.visible
                              ? "bg-green-50 text-green-700"
                              : "bg-stone-100 text-stone-500"
                          }`}
                        >
                          {p.visible ? "Visible" : "Hidden"}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-stone-400">
                        {new Date(p.created_at).toLocaleDateString("en-IN")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm font-body">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  {["Customer", "Phone", "Amount", "Status", "Date"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3.5 text-left text-xs font-semibold text-stone-500 uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-10 text-center text-stone-400">
                      No orders yet.
                    </td>
                  </tr>
                ) : (
                  orders.map((o) => (
                    <tr key={o.id} className="hover:bg-stone-50 transition-colors duration-100">
                      <td className="px-5 py-4 font-medium text-stone-950">{o.customer_name}</td>
                      <td className="px-5 py-4 text-stone-600">{o.customer_phone}</td>
                      <td className="px-5 py-4 text-stone-600">₹{o.amount.toLocaleString("en-IN")}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            o.status === "paid"
                              ? "bg-green-50 text-green-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {o.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-stone-400">
                        {new Date(o.created_at).toLocaleDateString("en-IN")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
