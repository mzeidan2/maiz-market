import { useMemo, useState } from "react";
import { ShoppingCart, Search, Star, Truck, ShieldCheck, PackageCheck } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Takis Blue Heat",
    category: "Spicy Snacks",
    price: 6.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Samyang Buldak Ramen",
    category: "Korean Snacks",
    price: 8.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Japanese Matcha KitKat",
    category: "Imported Candy",
    price: 7.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Korean Honey Butter Chips",
    category: "Imported Chips",
    price: 5.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Prime Hydration",
    category: "Drinks",
    price: 3.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Ramune Japanese Soda",
    category: "Imported Drinks",
    price: 4.49,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Dubai Chocolate Bar",
    category: "Premium Sweets",
    price: 12.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Mystery Snack Box",
    category: "Snack Bundles",
    price: 24.99,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function EcommerceStarterWebsite() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={{ minHeight: "100vh", background: "#fffaf3", color: "#1f2937", fontFamily: "Arial, sans-serif" }}>
      <header style={{ padding: "22px 7%", background: "white", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 4px 20px rgba(0,0,0,.06)", position: "sticky", top: 0, zIndex: 10 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 30 }}>Maiz Market</h1>
          <p style={{ margin: "4px 0 0", color: "#6b7280" }}>Global snacks, drinks & treats</p>
        </div>

        <div style={{ position: "relative", width: 360 }}>
          <Search size={18} style={{ position: "absolute", left: 14, top: 13, color: "#9ca3af" }} />
          <input
            placeholder="Search snacks, drinks, candy..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", padding: "13px 16px 13px 42px", borderRadius: 999, border: "1px solid #e5e7eb", outline: "none" }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#111827", color: "white", padding: "12px 18px", borderRadius: 999 }}>
          <ShoppingCart size={22} />
          <strong>{cart.length}</strong>
        </div>
      </header>

      <section style={{ padding: "70px 7%", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 40, alignItems: "center" }}>
        <div>
          <span style={{ background: "#fef3c7", color: "#92400e", padding: "10px 16px", borderRadius: 999, fontWeight: 700 }}>
            New Store Launch • Trending Snacks
          </span>
          <h2 style={{ fontSize: 58, lineHeight: 1.05, margin: "24px 0 16px" }}>
            Snacks, drinks, and sweet finds delivered with style.
          </h2>
          <p style={{ fontSize: 18, color: "#6b7280", lineHeight: 1.7, maxWidth: 650 }}>
            Shop imported snacks, viral candy, energy drinks, premium sweets, and curated snack boxes from Maiz Market.
          </p>
          <a href="#shop" style={{ display: "inline-block", marginTop: 24, background: "#111827", color: "white", padding: "16px 28px", borderRadius: 999, textDecoration: "none", fontWeight: 800 }}>
            Shop Now
          </a>
        </div>

        <div style={{ background: "white", padding: 16, borderRadius: 32, boxShadow: "0 20px 50px rgba(0,0,0,.12)" }}>
          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1200&auto=format&fit=crop"
            alt="Snacks"
            style={{ width: "100%", height: 430, objectFit: "cover", borderRadius: 24 }}
          />
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, padding: "0 7% 50px" }}>
        {[
          [Truck, "Fast Shipping", "Quick shipping on snacks and bundles."],
          [ShieldCheck, "Secure Checkout", "Built to connect with Stripe payments."],
          [PackageCheck, "Fresh Picks", "Trending items updated regularly."],
        ].map(([Icon, title, text]: any) => (
          <div key={title} style={{ background: "white", padding: 26, borderRadius: 24, boxShadow: "0 8px 25px rgba(0,0,0,.06)" }}>
            <Icon size={30} />
            <h3>{title}</h3>
            <p style={{ color: "#6b7280" }}>{text}</p>
          </div>
        ))}
      </section>

      <section id="shop" style={{ padding: "40px 7% 80px" }}>
        <p style={{ color: "#f97316", fontWeight: 900, letterSpacing: 3 }}>FEATURED PRODUCTS</p>
        <h2 style={{ fontSize: 42, marginTop: 0 }}>Shop Maiz Market</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 26 }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ background: "white", borderRadius: 28, overflow: "hidden", boxShadow: "0 12px 30px rgba(0,0,0,.08)" }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", height: 240, objectFit: "cover" }} />
              <div style={{ padding: 22 }}>
                <p style={{ color: "#f97316", fontWeight: 800, margin: 0 }}>{product.category}</p>
                <h3 style={{ fontSize: 21 }}>{product.name}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Star size={17} fill="#facc15" color="#facc15" />
                  <span>{product.rating}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
                  <strong style={{ fontSize: 24 }}>${product.price.toFixed(2)}</strong>
                  <button
                    onClick={() => setCart([...cart, product.id])}
                    style={{ background: "#111827", color: "white", border: 0, padding: "12px 18px", borderRadius: 999, fontWeight: 800, cursor: "pointer" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: "#111827", color: "white", padding: "32px 7%", display: "flex", justifyContent: "space-between" }}>
        <p>© 2026 Maiz Market</p>
        <p>support@maizmarket.com</p>
      </footer>
    </div>
  );
}
