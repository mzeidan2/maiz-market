import React, { useMemo, useState } from "react";
import { ShoppingCart, Search, Star, Truck, ShieldCheck, RefreshCcw } from "lucide-react";
import "./style.css";

const products = [
  {
    id: 1,
    name: "Takis Blue Heat",
    category: "Spicy Snacks",
    price: 6.99,
    rating: 4.8,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Samyang Buldak Ramen",
    category: "International",
    price: 8.99,
    rating: 4.9,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Japanese Matcha KitKat",
    category: "Candy",
    price: 7.99,
    rating: 4.7,
    badge: "Imported",
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Korean Honey Butter Chips",
    category: "Imported Snacks",
    price: 5.99,
    rating: 4.6,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Prime Hydration",
    category: "Drinks",
    price: 3.99,
    rating: 4.5,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Ramune Japanese Soda",
    category: "Drinks",
    price: 4.49,
    rating: 4.8,
    badge: "Imported",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Dubai Chocolate Bar",
    category: "Premium",
    price: 12.99,
    rating: 4.9,
    badge: "Luxury",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Mystery Snack Box",
    category: "Bundles",
    price: 24.99,
    rating: 5.0,
    badge: "Bundle",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function EcommerceStarterWebsite() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<any[]>([]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="site">
      <header className="header">
        <div className="logo">
          <div className="logoBox">M</div>
          <div>
            <h2>Maiz Market</h2>
            <p>Global snacks, drinks & essentials</p>
          </div>
        </div>

        <nav>
          <a href="#shop">Shop</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="cart">
          <ShoppingCart size={20} />
          <span>{cart.length}</span>
          <strong>${cartTotal.toFixed(2)}</strong>
        </div>
      </header>

      <section className="hero">
        <div>
          <span className="pill">New Store Launch • Fast Delivery</span>
          <h1>Snacks, drinks, and trending treats delivered fast.</h1>
          <p>
            Maiz Market brings popular snacks, imported candy, drinks, coffee,
            and premium bundles in one clean online store.
          </p>
          <a href="#shop" className="mainBtn">Shop Products</a>
        </div>

        <div className="heroCard">
          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=80"
            alt="Maiz Market snacks"
          />
        </div>
      </section>

      <section id="why" className="features">
        <div>
          <Truck />
          <h3>Fast Shipping</h3>
          <p>Quick delivery on snacks, drinks, and bundles.</p>
        </div>
        <div>
          <ShieldCheck />
          <h3>Secure Checkout</h3>
          <p>Ready to connect with Stripe payments.</p>
        </div>
        <div>
          <RefreshCcw />
          <h3>Fresh Picks</h3>
          <p>Trending products updated regularly.</p>
        </div>
      </section>

      <section id="shop" className="shop">
        <div className="shopTop">
          <div>
            <p className="smallTitle">Featured Products</p>
            <h2>Shop Maiz Market</h2>
          </div>

          <div className="searchBox">
            <Search size={18} />
            <input
              placeholder="Search snacks, drinks, bundles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid">
          {filteredProducts.map((product) => (
            <div className="product" key={product.id}>
              <div className="imageWrap">
                <img src={product.image} alt={product.name} />
                <span>{product.badge}</span>
              </div>

              <div className="productBody">
                <p className="category">{product.category}</p>
                <h3>{product.name}</h3>

                <div className="rating">
                  <Star size={16} />
                  <span>{product.rating}</span>
                </div>

                <div className="priceRow">
                  <strong>${product.price.toFixed(2)}</strong>
                  <button onClick={() => setCart([...cart, product])}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Build your snack box today.</h2>
        <p>Choose your favorite snacks, drinks, and premium treats.</p>
        <a href="#shop">Start Shopping</a>
      </section>

      <footer id="contact">
        <p>© 2026 Maiz Market. All rights reserved.</p>
        <p>Contact: support@maizmarket.com</p>
      </footer>
    </div>
  );
}