import { useMemo, useState } from "react";
import { ShoppingCart, Search, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Wireless Earbuds",
    price: 79.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Luxury Coffee Mug",
    price: 24.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 129.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function EcommerceStarterWebsite() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          Maiz Market
        </h1>

        <div style={{ position: "relative", width: "300px" }}>
          <Search
            size={18}
            style={{
              position: "absolute",
              left: "10px",
              top: "10px",
              color: "#94a3b8",
            }}
          />

          <input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 10px 10px 35px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
            }}
          />
        </div>

        <div style={{ position: "relative" }}>
          <ShoppingCart size={28} />
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              background: "red",
              borderRadius: "999px",
              padding: "2px 7px",
              fontSize: "12px",
            }}
          >
            {cart.length}
          </span>
        </div>
      </header>

      <section style={{ padding: "50px 40px" }}>
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Trending Products
        </h2>

        <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
          Premium products curated for Maiz Market customers.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#1e293b",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                  {product.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginBottom: "12px",
                  }}
                >
                  <Star size={16} fill="gold" color="gold" />
                  <span>{product.rating}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <strong style={{ fontSize: "20px" }}>
                    ${product.price}
                  </strong>

                  <button
                    onClick={() =>
                      setCart([...cart, product.id])
                    }
                    style={{
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
