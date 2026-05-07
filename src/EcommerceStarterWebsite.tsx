import { useMemo, useState } from "react";
import { ShoppingCart, Search, Star, Truck, ShieldCheck, PackageCheck, Menu } from "lucide-react";
import "./style.css";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  badge: string;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Takis Fuego 9.9 oz", category: "Spicy Chips", price: 3.99, rating: 4.8, badge: "Best Seller", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Takis Blue Heat 9.9 oz", category: "Spicy Chips", price: 4.29, rating: 4.8, badge: "Hot Pick", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Flamin' Hot Cheetos 8.5 oz", category: "Spicy Chips", price: 4.49, rating: 4.7, badge: "Popular", image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Korean Honey Butter Chips", category: "Imported Chips", price: 5.49, rating: 4.6, badge: "Imported", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, name: "Samyang Buldak Ramen Pack", category: "Korean Ramen", price: 7.99, rating: 4.9, badge: "Spicy", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, name: "Shin Ramyun Noodle Pack", category: "Korean Ramen", price: 6.99, rating: 4.8, badge: "Classic", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop" },
  { id: 7, name: "Pocky Strawberry", category: "Imported Candy", price: 2.99, rating: 4.7, badge: "Sweet", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 8, name: "Japanese Matcha KitKat", category: "Imported Candy", price: 6.99, rating: 4.7, badge: "Japan", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop" },
  { id: 9, name: "Hi-Chew Fruit Mix", category: "Candy", price: 3.49, rating: 4.6, badge: "Fruity", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 10, name: "Nerds Gummy Clusters", category: "Candy", price: 3.99, rating: 4.8, badge: "Viral", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 11, name: "Sour Patch Kids", category: "Candy", price: 2.99, rating: 4.7, badge: "Sour", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 12, name: "Airheads Xtremes", category: "Candy", price: 2.79, rating: 4.6, badge: "Fun", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 13, name: "Prime Hydration Bottle", category: "Drinks", price: 2.49, rating: 4.5, badge: "Deal", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop" },
  { id: 14, name: "Celsius Energy Drink", category: "Energy Drinks", price: 2.79, rating: 4.6, badge: "Energy", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop" },
  { id: 15, name: "Alani Nu Energy Drink", category: "Energy Drinks", price: 2.79, rating: 4.6, badge: "Energy", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop" },
  { id: 16, name: "Ramune Japanese Soda", category: "Imported Drinks", price: 3.49, rating: 4.8, badge: "Japan", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop" },
  { id: 17, name: "Jarritos Mexican Soda", category: "Imported Drinks", price: 2.49, rating: 4.7, badge: "Mexico", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop" },
  { id: 18, name: "Mexican Coca-Cola Glass Bottle", category: "Imported Drinks", price: 2.99, rating: 4.8, badge: "Classic", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop" },
  { id: 19, name: "Dubai Chocolate Bar", category: "Premium Sweets", price: 9.99, rating: 4.9, badge: "Premium", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop" },
  { id: 20, name: "Pistachio Chocolate Bar", category: "Premium Sweets", price: 8.99, rating: 4.8, badge: "Premium", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop" },
  { id: 21, name: "Movie Night Snack Box", category: "Bundles", price: 19.99, rating: 4.9, badge: "Bundle", image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop" },
  { id: 22, name: "Spicy Challenge Bundle", category: "Bundles", price: 21.99, rating: 5.0, badge: "Bundle", image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop" },
  { id: 23, name: "International Snack Box", category: "Bundles", price: 24.99, rating: 5.0, badge: "Bundle", image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop" },
  { id: 24, name: "Office Snack Starter Box", category: "Bundles", price: 29.99, rating: 4.9, badge: "Office", image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop" },
];

const categories = ["All", "Spicy Chips", "Candy", "Drinks", "Energy Drinks", "Imported Drinks", "Bundles", "Premium Sweets"];

export default function EcommerceStarterWebsite() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="site">
      <header className="header">
        <div className="brand">
          <div className="brandMark">M</div>
          <div>
            <h1>Maiz Market</h1>
            <p>Global snacks, drinks & treats</p>
          </div>
        </div>

        <div className="searchBox">
          <Search size={18} />
          <input
            placeholder="Search snacks, drinks, candy..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <nav className="nav">
          <a href="#shop">Shop</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="cart">
          <ShoppingCart size={22} />
          <strong>{cart.length}</strong>
        </div>

        <Menu className="mobileMenu" />
      </header>

      <section className="hero">
        <div className="heroText">
          <span className="pill">New Store Launch • Trending Snacks</span>
          <h2>Snacks, drinks, and sweet finds delivered with style.</h2>
          <p>
            Maiz Market brings together spicy chips, imported candy, viral drinks,
            premium sweets, and curated snack boxes in one clean online store.
          </p>
          <a href="#shop" className="primaryBtn">Shop Now</a>
        </div>

        <div className="heroImageCard">
          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1200&auto=format&fit=crop"
            alt="Maiz Market snacks"
          />
        </div>
      </section>

      <section id="why" className="features">
        <div className="feature">
          <Truck size={30} />
          <h3>Fast Shipping</h3>
          <p>Quick shipping on snacks, drinks, and bundles.</p>
        </div>
        <div className="feature">
          <ShieldCheck size={30} />
          <h3>Secure Checkout</h3>
          <p>Ready to connect with Stripe, Apple Pay, and cards.</p>
        </div>
        <div className="feature">
          <PackageCheck size={30} />
          <h3>Fresh Picks</h3>
          <p>Trending items and bundle offers updated regularly.</p>
        </div>
      </section>

      <section id="shop" className="shop">
        <p className="sectionLabel">Featured Products</p>
        <h2>Shop Maiz Market</h2>

        <div className="categoryTabs">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "tab activeTab" : "tab"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="productGrid">
          {filteredProducts.map((product) => (
            <div className="productCard" key={product.id}>
              <div className="imageWrap">
                <img src={product.image} alt={product.name} />
                <span>{product.badge}</span>
              </div>

              <div className="productBody">
                <p className="category">{product.category}</p>
                <h3>{product.name}</h3>

                <div className="rating">
                  <Star size={17} fill="#facc15" color="#facc15" />
                  <span>{product.rating}</span>
                </div>

                <div className="priceRow">
                  <strong>${product.price.toFixed(2)}</strong>
                  <button onClick={() => setCart([...cart, product.id])}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Want snacks for your office or event?</h2>
        <p>Build custom snack boxes for offices, game nights, parties, and small businesses.</p>
        <a href="#shop">Start Shopping</a>
      </section>

      <footer id="contact" className="footer">
        <p>© 2026 Maiz Market</p>
        <p>support@maizmarket.com</p>
      </footer>
    </div>
  );
}
