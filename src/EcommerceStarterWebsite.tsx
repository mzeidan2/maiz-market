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
  { id: 1, name: "Lay's Classic Chips 1 oz", category: "Chips", price: 1.25, rating: 4.8, badge: "Classic", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Doritos Nacho Cheese 1 oz", category: "Chips", price: 1.35, rating: 4.8, badge: "Popular", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Cheetos Crunchy 1 oz", category: "Chips", price: 1.35, rating: 4.7, badge: "Popular", image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Takis Fuego 4 oz", category: "Chips", price: 2.49, rating: 4.9, badge: "Spicy", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, name: "Takis Blue Heat 4 oz", category: "Chips", price: 2.69, rating: 4.8, badge: "Hot", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, name: "Pringles Original Can", category: "Chips", price: 2.29, rating: 4.7, badge: "Stackable", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200&auto=format&fit=crop" },
  { id: 7, name: "Ruffles Cheddar & Sour Cream", category: "Chips", price: 1.49, rating: 4.7, badge: "Crunchy", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200&auto=format&fit=crop" },
  { id: 8, name: "Fritos Original Corn Chips", category: "Chips", price: 1.39, rating: 4.6, badge: "Classic", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200&auto=format&fit=crop" },

  { id: 9, name: "Maiz Spring Water 16.9 oz", category: "Water", price: 0.99, rating: 4.8, badge: "Value", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop" },
  { id: 10, name: "Dasani Water 16.9 oz", category: "Water", price: 1.19, rating: 4.6, badge: "Hydrate", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop" },
  { id: 11, name: "Aquafina Water 16.9 oz", category: "Water", price: 1.19, rating: 4.6, badge: "Hydrate", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop" },
  { id: 12, name: "Essentia Alkaline Water 20 oz", category: "Water", price: 2.49, rating: 4.8, badge: "Alkaline", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop" },
  { id: 13, name: "Smartwater 20 oz", category: "Water", price: 2.29, rating: 4.7, badge: "Premium", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop" },
  { id: 14, name: "Liquid Death Sparkling Water", category: "Water", price: 2.49, rating: 4.7, badge: "Sparkling", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1200&auto=format&fit=crop" },

  { id: 15, name: "Coca-Cola 12 oz Can", category: "Soft Drinks", price: 1.25, rating: 4.8, badge: "Classic", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop" },
  { id: 16, name: "Pepsi 12 oz Can", category: "Soft Drinks", price: 1.25, rating: 4.7, badge: "Classic", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop" },
  { id: 17, name: "Sprite 12 oz Can", category: "Soft Drinks", price: 1.25, rating: 4.7, badge: "Lemon Lime", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop" },
  { id: 18, name: "Dr Pepper 12 oz Can", category: "Soft Drinks", price: 1.29, rating: 4.8, badge: "Favorite", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop" },
  { id: 19, name: "Mountain Dew 12 oz Can", category: "Soft Drinks", price: 1.29, rating: 4.7, badge: "Energy", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop" },
  { id: 20, name: "Jarritos Mandarin Soda", category: "Soft Drinks", price: 1.99, rating: 4.8, badge: "Imported", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop" },
  { id: 21, name: "Mexican Coca-Cola Glass Bottle", category: "Soft Drinks", price: 2.49, rating: 4.9, badge: "Glass Bottle", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop" },

  { id: 22, name: "Travel Hand Sanitizer 2 oz", category: "Sanitizer", price: 1.99, rating: 4.7, badge: "Travel", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1200&auto=format&fit=crop" },
  { id: 23, name: "Hand Sanitizer Gel 8 oz", category: "Sanitizer", price: 3.49, rating: 4.8, badge: "Daily Use", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1200&auto=format&fit=crop" },
  { id: 24, name: "Sanitizing Wipes 40 Count", category: "Sanitizer", price: 3.99, rating: 4.7, badge: "Wipes", image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=1200&auto=format&fit=crop" },
  { id: 25, name: "Pocket Sanitizer Spray", category: "Sanitizer", price: 2.49, rating: 4.6, badge: "Pocket", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1200&auto=format&fit=crop" },
  { id: 26, name: "Antibacterial Hand Wipes 20 Count", category: "Sanitizer", price: 2.99, rating: 4.6, badge: "Clean", image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=1200&auto=format&fit=crop" },

  { id: 27, name: "Premium Facial Tissues Box", category: "Paper Goods", price: 2.49, rating: 4.7, badge: "Soft", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop" },
  { id: 28, name: "Paper Towels Single Roll", category: "Paper Goods", price: 2.99, rating: 4.8, badge: "Strong", image: "https://images.unsplash.com/photo-1605365070248-299a182a2ca1?q=80&w=1200&auto=format&fit=crop" },
  { id: 29, name: "Napkins 100 Count", category: "Paper Goods", price: 2.29, rating: 4.6, badge: "Party", image: "https://images.unsplash.com/photo-1605365070248-299a182a2ca1?q=80&w=1200&auto=format&fit=crop" },
  { id: 30, name: "Toilet Paper 4 Pack", category: "Paper Goods", price: 4.99, rating: 4.7, badge: "Essential", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop" },
  { id: 31, name: "Disposable Plates 25 Count", category: "Paper Goods", price: 3.49, rating: 4.6, badge: "Events", image: "https://images.unsplash.com/photo-1605365070248-299a182a2ca1?q=80&w=1200&auto=format&fit=crop" },
  { id: 32, name: "Disposable Cups 50 Count", category: "Paper Goods", price: 4.49, rating: 4.6, badge: "Events", image: "https://images.unsplash.com/photo-1605365070248-299a182a2ca1?q=80&w=1200&auto=format&fit=crop" },

  { id: 33, name: "Salted Peanuts 2 oz", category: "Nuts", price: 1.49, rating: 4.7, badge: "Protein", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=1200&auto=format&fit=crop" },
  { id: 34, name: "Honey Roasted Peanuts 2 oz", category: "Nuts", price: 1.69, rating: 4.8, badge: "Sweet", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=1200&auto=format&fit=crop" },
  { id: 35, name: "Roasted Almonds 2 oz", category: "Nuts", price: 2.49, rating: 4.8, badge: "Healthy", image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=1200&auto=format&fit=crop" },
  { id: 36, name: "Cashews 2 oz", category: "Nuts", price: 2.79, rating: 4.8, badge: "Premium", image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=1200&auto=format&fit=crop" },
  { id: 37, name: "Trail Mix 3 oz", category: "Nuts", price: 2.99, rating: 4.7, badge: "Energy", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=1200&auto=format&fit=crop" },
  { id: 38, name: "Pistachios 2 oz", category: "Nuts", price: 2.99, rating: 4.8, badge: "Crunchy", image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=1200&auto=format&fit=crop" },

  { id: 39, name: "Snickers Bar", category: "Candy", price: 1.49, rating: 4.8, badge: "Classic", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 40, name: "M&M's Peanut Pack", category: "Candy", price: 1.49, rating: 4.8, badge: "Classic", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 41, name: "Reese's Cups", category: "Candy", price: 1.49, rating: 4.9, badge: "Favorite", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 42, name: "Skittles Original", category: "Candy", price: 1.39, rating: 4.7, badge: "Fruity", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 43, name: "Sour Patch Kids", category: "Candy", price: 1.79, rating: 4.8, badge: "Sour", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 44, name: "Nerds Gummy Clusters", category: "Candy", price: 2.49, rating: 4.9, badge: "Viral", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 45, name: "KitKat Bar", category: "Candy", price: 1.49, rating: 4.8, badge: "Crunch", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop" },
  { id: 46, name: "Twix Bar", category: "Candy", price: 1.49, rating: 4.7, badge: "Caramel", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop" },
  { id: 47, name: "Hi-Chew Fruit Mix", category: "Candy", price: 2.99, rating: 4.7, badge: "Imported", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 48, name: "Pocky Strawberry", category: "Candy", price: 2.79, rating: 4.7, badge: "Japan", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 49, name: "Gushers Tropical Pack", category: "Candy", price: 1.99, rating: 4.6, badge: "Fruity", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1200&auto=format&fit=crop" },
  { id: 50, name: "Dubai Chocolate Bar", category: "Candy", price: 8.99, rating: 4.9, badge: "Premium", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop" },
];

const categories = ["All", "Chips", "Water", "Soft Drinks", "Sanitizer", "Paper Goods", "Nuts", "Candy"];

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
