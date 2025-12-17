# EcomStore - Premium Home Furniture & Decor

A modern, responsive e-commerce application built with React, Vite, and Tailwind CSS. This project features a complete online store for furniture and home decor with user authentication, shopping cart, and order management.

## 🚀 Features

### 🔐 Authentication
- **Login/Register System**: Email and password authentication
- **User Session Management**: Persistent login with localStorage
- **Protected Routes**: Cart and orders require authentication

### 🏠 Home Page
- **Hero Section**: Eye-catching gradient background with call-to-action
- **Feature Cards**: Showcase different product categories
- **Statistics Section**: Display store metrics
- **Featured Products**: Highlight popular items
- **Why Choose Us**: Benefits and guarantees

### 🛍️ Products Page
- **Product Grid**: Responsive card layout
- **Search Functionality**: Search by name or description
- **Category Filtering**: Filter by product categories
- **Sorting Options**: Sort by name, price, or rating
- **Product Cards**: Image, name, price, rating, and category

### 📱 Product Details Page
- **Comprehensive Information**: Detailed product description
- **Image Gallery**: Product images with thumbnails
- **Quantity Selection**: Adjustable quantity selector
- **Add to Cart**: Add products to shopping cart
- **Buy Now**: Direct purchase option
- **Features List**: Product specifications
- **Delivery Information**: Shipping and return details
- **Breadcrumb Navigation**: Easy navigation

### 🛒 Shopping Cart
- **Cart Management**: Add, remove, and view cart items
- **Quantity Display**: Show quantity for each item
- **Price Calculation**: Subtotal, delivery fee, and total
- **Free Delivery**: Free shipping on orders above ₹10,000
- **Checkout Process**: Secure checkout flow
- **Empty Cart State**: Helpful message when cart is empty

### 📦 Orders Page
- **Order History**: View all placed orders
- **Order Tracking**: Visual progress indicator
- **Order Details**: Complete order information
- **Status Updates**: Real-time order status
- **Delivery Information**: Expected delivery dates

### 🎨 UI/UX Features
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean and professional design
- **Loading States**: Smooth user experience
- **Success Messages**: Order confirmation modal
- **Error Handling**: User-friendly error messages
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Storage**: localStorage for persistence
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash API

## 📁 Project Structure

```
mern-ecom-full-tailwind/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Products.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.cjs
├── postcss.config.cjs
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-ecom-full-tailwind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.cjs`.

### Vite Configuration
Vite configuration is in `vite.config.js` for build optimization.

## 📱 Demo Credentials

For testing purposes, you can use any email and password combination. The app will automatically log you in.

**Example:**
- Email: `demo@example.com`
- Password: `demo123`

## 🎯 Key Features Explained

### Context API State Management
- **StoreContext**: Manages global state for cart, orders, and user authentication
- **Persistent Storage**: Uses localStorage to maintain state across sessions
- **Real-time Updates**: Automatic UI updates when state changes

### Responsive Design
- **Mobile-First**: Designed for mobile devices first
- **Breakpoints**: Responsive across all screen sizes
- **Touch-Friendly**: Optimized for touch interactions

### Performance Optimizations
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Optimized images from Unsplash
- **Minimal Bundle**: Tree-shaking and code splitting

## 🔮 Future Enhancements

- [ ] Payment Gateway Integration
- [ ] User Profile Management
- [ ] Product Reviews and Ratings
- [ ] Wishlist Functionality
- [ ] Advanced Search Filters
- [ ] Email Notifications
- [ ] Admin Dashboard
- [ ] Inventory Management
- [ ] Multi-language Support
- [ ] Dark Mode Theme

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Heroicons](https://heroicons.com/) - Icon Library
- [Unsplash](https://unsplash.com/) - Stock Photos

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using React and Tailwind CSS**