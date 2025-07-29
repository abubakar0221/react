
import astroliteLogo from './Astolite_Logo-removebg-preview.png';
import profilePic from './iheb-ab-OBufvGMaBaQ-unsplash.jpg';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

const Sidebar = ({ isOpen, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.className.includes('sidebar') || e.target.tagName === 'A') return;
    onClose();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={handleClickOutside} style={{ width: '240px' }}>
      <a href="#products" onClick={() => onClose('products')}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 7h18M3 12h18m-6 5h6"></path>
        </svg>
        Products
      </a>
      <a href="#sales" onClick={() => onClose('sales')}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v7h8v-7c0-2.21-1.79-4-4-4zm-6-6h12v2H6V4zm0 4h12v2H6V8zm0 6h12v2H6v-2z"></path>
        </svg>
        Sales
      </a>
      <a href="#cart" onClick={() => onClose('cart')}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 7h18M3 12h18m-6 5h6"></path>
        </svg>
        Cart
      </a>
      <a href="#orders" onClick={() => onClose('orders')}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Orders
      </a>
      <a href="#analysis" onClick={() => onClose('analysis')}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
        Analysis
      </a>
      <a href="#profile" onClick={() => onClose('profile')}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        Profile
      </a>
      <a href="#settings" onClick={() => onClose('settings')}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        Settings
      </a>
      <a href="#logout" onClick={() => alert('Logged out')} className="logout">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
        </svg>
        Logout
      </a>
    </div>
  );
};

const Card = ({ title, image, price, discount, description, onClick, style, onAddToCart, onBuyNow }) => {
  return (
    <div className="card" onClick={onClick} style={{ ...style, cursor: price ? 'pointer' : 'default' }}>
      <img src={image} alt={title} className="card-img" />
      <h3 className="mt-3 text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      {price && (
        <div>
          <p className="mt-2 text-green-600 font-bold dark:text-green-400">₹{price.toFixed(2)} <span className="line-through text-red-500">₹{(price / (1 - discount / 100)).toFixed(2)}</span></p>
          <p className="text-sm text-yellow-600">{discount}% off</p>
        </div>
      )}
      {description && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>}
      <div className="flex justify-between mt-2 w-full">
        {onAddToCart && (
          <button onClick={(e) => { e.stopPropagation(); onAddToCart(); }} className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition duration-200">Add to Cart</button>
        )}
        {onBuyNow && (
          <button onClick={(e) => { e.stopPropagation(); onBuyNow(); }} className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition duration-200">Buy Now</button>
        )}
      </div>
    </div>
  );
};



const Header = ({ onMenuToggle, cartCount, onDarkModeToggle, darkMode, onLanguageChange, language }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery} at ${new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
  };

  return (
    <header className="header flex items-center justify-between">
      <div className="flex items-center">
        <img src={astroliteLogo} alt="Logo" className="w-40 h-20 mr-4" />
        <button onClick={onMenuToggle} className="text-black text-2xl focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <input
          type="text"
          placeholder='Search for "chocolate box"'
          className="p-3 border border-green-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-3 rounded-r-lg hover:bg-purple-700 transition duration-200">
          Search
        </button>
      </form>
      <div className="flex items-center relative">
        <button onClick={() => alert(`You have 3 new notifications!`)} className="text-black mr-4 focus:outline-none relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center -mt-1 -mr-1">3</span>
        </button>
        <button onClick={onDarkModeToggle} className="text-black mr-4 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={darkMode ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}></path>
          </svg>
        </button>
        <select
          onChange={(e) => onLanguageChange(e.target.value)}
          value={language}
          className="bg-green-600 text-white px-3 py-2 rounded-lg focus:outline-none"
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="ar">العربية</option>
        </select>
        <button className="bg-white text-green-600 px-4 py-2 rounded-lg flex items-center hover:bg-gray-100 transition duration-200">
          Cart <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
        </button>
        <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-full mr-3 border-2 border-white ml-4" />
        <div className="grid items-center">
        <span className="text-black font-medium mr-4 ">arjun</span>
        <span className="text-sm text-green-600 dark:text-purple-400">Premium Member</span>
        </div>
      </div>
    </header>
  );
};



const Profile = ({ onBack }) => {
  const [userData, setUserData] = React.useState({
    name: "Arjun",
    email: "arjun@example.com",
    phone: "+91 9876543210",
    address: "56-7-4A, santhosh nagar, karnataka, India",
    orders: 10,
    joined: "January 2024",
  });

  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState({ ...userData });
  const [showPopup, setShowPopup] = React.useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setUserData({ ...formData });
      setShowPopup(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="mt-20">
      
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center dark:text-gray-200">
        Your Profile
      </h1>
      <div className="profile-container p-6 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-purple-600 mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {userData.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{userData.email}</p>
          </div>
        </div>
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Phone:</strong> {userData.phone}
            </p>
            <p>
              <strong>Address:</strong> {userData.address}
            </p>
            <p>
              <strong>Total Orders:</strong> {userData.orders}
            </p>
            <p>
              <strong>Joined:</strong> {userData.joined}
            </p>
          </div>
        )}
        <button
          onClick={handleEditToggle}
          className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          {isEditing ? "Save Profile" : "Edit Profile"}
        </button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Profile Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your profile has been updated successfully!
            </p>
            <button
              onClick={handleClosePopup}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



  


const CategoryDetail = ({ category, onBack, addToCart, setCurrentPage }) => {
  const categoriesData = {
    fruits: [
      { name: "Apple (Variety 1)", price: 50, discount: 10, image: "https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg?sfvrsn=f86f2644_5", description: "A crisp red apple rich in antioxidants." },
      { name: "Banana (Variety 2)", price: 60, discount: 5, image: "https://images.pexels.com/photos/2875814/pexels-photo-2875814.jpeg", description: "A sweet yellow banana full of potassium." },
      { name: "Orange (Variety 3)", price: 70, discount: 15, image: "https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg", description: "A juicy orange packed with vitamin C." },
      { name: "Mango (Variety 4)", price: 80, discount: 20, image: "https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg", description: "A ripe mango with a tropical flavor." },
      { name: "Grapes (Variety 5)", price: 90, discount: 10, image: "https://images.pexels.com/photos/23042/pexels-photo.jpg", description: "Sweet green grapes, perfect for snacking." },
      { name: "Pineapple (Variety 6)", price: 100, discount: 15, image: "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg", description: "A tangy pineapple slice, rich in vitamins." },
      { name: "Strawberry (Variety 7)", price: 110, discount: 20, image: "https://images.pexels.com/photos/1258264/pexels-photo-1258264.jpeg", description: "Juicy strawberries with a sweet taste." },
      { name: "Kiwi (Variety 8)", price: 120, discount: 10, image: "https://images.pexels.com/photos/3904800/pexels-photo-3904800.jpeg", description: "A fuzzy kiwi loaded with vitamin C." },
      { name: "Blueberry (Variety 9)", price: 130, discount: 15, image: "https://images.pexels.com/photos/670685/pexels-photo-670685.jpeg", description: "Small blueberries with a burst of flavor." },
      { name: "Pomegranate (Variety 10)", price: 140, discount: 20, image: "https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg", description: "A healthy pomegranate with juicy seeds." },
      { name: "Pear (Variety 11)", price: 150, discount: 10, image: "https://images.pexels.com/photos/917012/pexels-photo-917012.jpeg", description: "A soft pear with a sweet taste." },
      { name: "Cherry (Variety 12)", price: 160, discount: 15, image: "https://images.pexels.com/photos/162689/cherry-pair-fruits-sweet-162689.jpeg", description: "Bright red cherries, perfect for desserts." },
      { name: "Watermelon (Variety 13)", price: 170, discount: 20, image: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-109932142/109932142.jpg", description: "A refreshing watermelon slice." },
      { name: "Papaya (Variety 14)", price: 180, discount: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYT1tOS5o7hV4hje57tDhYLYd-f6WwZdDpg&s", description: "A tropical papaya rich in enzymes." },
      { name: "Guava (Variety 15)", price: 190, discount: 15, image: "https://www.health.com/thmb/XlWTD8TZF5574DVtMEfD-XSj5Lg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Guava-15d1050d22034909bfca038ef1f8aaa2.jpg", description: "A tangy guava with health benefits." },
      { name: "Peach (Variety 16)", price: 200, discount: 20, image: "https://www.truebasics.com/blog/wp-content/uploads/2023/09/peach-benefits-for-skin.jpg", description: "A juicy peach with a sweet aroma." },
      { name: "Plum (Variety 17)", price: 210, discount: 10, image: "https://m.media-amazon.com/images/I/91FS9nT6g2L._UF1000,1000_QL80_.jpg", description: "A purple plum with a tart flavor." },
      { name: "Apricot (Variety 18)", price: 220, discount: 15, image: "https://satvikk.com/wp-content/uploads/2023/05/Satvikk-apricot1.jpg", description: "A small apricot packed with nutrients." },
      { name: "Coconut (Variety 19)", price: 230, discount: 20, image: "https://static1.squarespace.com/static/5c1074accc8fed6a4251da8f/5ca503f60d9297e2f8ae11aa/627a902f1ada5a09d7e0e247/1739917837082/shutterstock_490174816.jpg?format=1500w", description: "A fresh coconut with hydrating water." },
      { name: "Fig (Variety 20)", price: 240, discount: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMr_upFiKhbevx03Q_W0T3TnqNYoHl4S2vQ&s", description: "A sweet fig with a unique texture." },
      { name: "Lychee (Variety 21)", price: 250, discount: 15, image: "https://saturn.health/cdn/shop/articles/WhatsApp_Image_2022-04-25_at_12.14.29_PM_2.jpg?v=1651050368", description: "A juicy lychee with a floral taste." },
      { name: "Raspberry (Variety 22)", price: 260, discount: 20, image: "https://mr-fothergills.co.uk/cdn/shop/collections/MRF_Raspberry_collection_banner.jpg?v=1691682859&width=3642", description: "Tart raspberries perfect for smoothies." },
      { name: "Blackberry (Variety 23)", price: 270, discount: 10, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/black-raspberries-1296x728-header.jpg?w=1155&h=1528", description: "Dark blackberries rich in antioxidants." },
      { name: "Cranberry (Variety 24)", price: 280, discount: 15, image: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/cranberries-101-732x549-thumbnail-732x549.jpg", description: "Tart cranberries good for health." },
      { name: "Dragon Fruit (Variety 27)", price: 310, discount: 15, image: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/what_are_the_benefits_of_dragon_fruit_bigbead/1800ss_getty_rf_dragon_fruit_pitaya.jpg", description: "A vibrant dragon fruit with tiny seeds." },
      { name: "Jackfruit (Variety 28)", price: 320, discount: 20, image: "https://images.everydayhealth.com/images/diet-nutrition/jackfruit-101-1440x810.jpg?w=508", description: "A large jackfruit with a sweet taste." },
      { name: "Custard Apple (Variety 29)", price: 330, discount: 10, image: "https://www.bbassets.com/media/uploads/p/xxl/10000349_22-fresho-custard-apple.jpg", description: "A creamy custard apple with a unique flavor." },
      { name: "Starfruit (Variety 30)", price: 340, discount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YEo8BqvDduQqpZja6YR131yAcpKehbVbyA&s", description: "A star-shaped fruit with a tangy taste." },

      { name: "Passion Fruit", price: 350, discount: 10, image: "https://images.pexels.com/photos/1171118/pexels-photo-1171118.jpeg", description: "Tart and sweet passion fruit for smoothies." },
    { name: "Persimmon", price: 280, discount: 15, image: "https://images.pexels.com/photos/1333559/pexels-photo-1333559.jpeg", description: "Sweet persimmon with a honey-like flavor." },
    { name: "Rambutan", price: 400, discount: 20, image: "https://images.pexels.com/photos/1011322/pexels-photo-1011322.jpeg", description: "Juicy rambutan with a spiky exterior." },
    { name: "Mangosteen", price: 450, discount: 10, image: "https://images.pexels.com/photos/1011323/pexels-photo-1011323.jpeg", description: "Creamy mangosteen, queen of fruits." },
    { name: "Durian", price: 500, discount: 15, image: "https://images.pexels.com/photos/1171119/pexels-photo-1171119.jpeg", description: "Strong-scented durian with rich flesh." },
    { name: "Tangerine", price: 200, discount: 5, image: "https://images.pexels.com/photos/161559/pexels-photo-161559.jpeg", description: "Easy-peel tangerine with sweet tang." },
    { name: "Blood Orange", price: 250, discount: 10, image: "https://images.pexels.com/photos/1297503/pexels-photo-1297503.jpeg", description: "Vibrant red blood orange, rich in flavor." },
    { name: "Clementine", price: 220, discount: 15, image: "https://images.pexels.com/photos/1297504/pexels-photo-1297504.jpeg", description: "Seedless clementine for snacking." },
    { name: "Nectarine", price: 270, discount: 20, image: "https://images.pexels.com/photos/162689/pexels-photo-162689.jpeg", description: "Smooth-skinned nectarine with sweet flesh." },
    { name: "Pomelo", price: 300, discount: 10, image: "https://images.pexels.com/photos/1171120/pexels-photo-1171120.jpeg", description: "Large pomelo with mild citrus taste." },
    { name: "Gooseberry", price: 180, discount: 5, image: "https://images.pexels.com/photos/1333560/pexels-photo-1333560.jpeg", description: "Tart gooseberries for jams." },
    { name: "Kumquat", price: 260, discount: 15, image: "https://images.pexels.com/photos/1011324/pexels-photo-1011324.jpeg", description: "Bite-sized kumquat with edible skin." },
    { name: "Soursop", price: 380, discount: 20, image: "https://images.pexels.com/photos/1171121/pexels-photo-1171121.jpeg", description: "Creamy soursop with tropical notes." },
    { name: "Longan", price: 290, discount: 10, image: "https://images.pexels.com/photos/1011325/pexels-photo-1011325.jpeg", description: "Sweet longan similar to lychee." },
    { name: "Salak", price: 320, discount: 15, image: "https://images.pexels.com/photos/1171122/pexels-photo-1171122.jpeg", description: "Snake fruit with a crisp texture." },
    { name: "Star Apple", price: 340, discount: 10, image: "https://images.pexels.com/photos/1333561/pexels-photo-1333561.jpeg", description: "Purple star apple with milky flesh." },
    { name: "Tamarind", price: 200, discount: 5, image: "https://images.pexels.com/photos/1171123/pexels-photo-1171123.jpeg", description: "Tangy tamarind for sauces." },
    { name: "Chiku", price: 230, discount: 15, image: "https://images.pexels.com/photos/1011326/pexels-photo-1011326.jpeg", description: "Sweet chiku with grainy texture." },
    { name: "Acerola Cherry", price: 360, discount: 20, image: "https://images.pexels.com/photos/1333562/pexels-photo-1333562.jpeg", description: "Vitamin C-rich acerola cherry." },
    { name: "Jujube", price: 250, discount: 10, image: "https://images.pexels.com/photos/1171124/pexels-photo-1171124.jpeg", description: "Crunchy jujube with apple-like taste." },
  
    ],
    vegetables: [
      { name: "Carrot (KG)", price: 70, discount: 5, image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg", description: "Fresh orange carrots rich in beta-carotene." },
      { name: "Broccoli (Single)", price: 30, discount: 10, image: "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg", description: "Green broccoli packed with vitamins." },
      { name: "Spinach (Box)", price: 25, discount: 15, image: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg", description: "Leafy spinach for healthy meals." },
      { name: "Tomato (KG)", price: 35, discount: 5, image: "https://images.pexels.com/photos/53588/tomatoes-vegetables-food-frisch-53588.jpeg", description: "Juicy red tomatoes for cooking." },
      { name: "Cucumber (Type 5)", price: 20, discount: 10, image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg", description: "Crisp cucumbers for salads." },
      { name: "Potato (Type 6)", price: 25, discount: 15, image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg", description: "Starchy potatoes for various dishes." },
      { name: "Onion (Type 7)", price: 15, discount: 5, image: "https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg", description: "Sharp onions for flavoring." },
      { name: "Bell Pepper (Type 8)", price: 30, discount: 10, image: "https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg", description: "Colorful bell peppers for stir-fry." },
      { name: "Zucchini (Type 9)", price: 25, discount: 15, image: "https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg", description: "Tender zucchini for grilling." },
      { name: "Cauliflower (Type 10)", price: 35, discount: 5, image: "https://images.pexels.com/photos/6065185/pexels-photo-6065185.jpeg", description: "White cauliflower for roasting." },
      { name: "Eggplant (Type 11)", price: 20, discount: 10, image: "https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg", description: "Purple eggplant for stews." },
      { name: "Green Beans (Type 12)", price: 25, discount: 15, image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/1296x728_Green_Beans_Nutrition_Facts_and_Health_Benefits-IMAGE_1.jpg?w=1155&h=1528", description: "Fresh green beans for sides." },
      { name: "Peas (Type 13)", price: 30, discount: 5, image: "https://www.health.com/thmb/eDK-f0g5sEaNX8M0gW8P6dnUzz0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-111963801-6ef5085506ff4ca5b5b2de30192e6aa7.jpg", description: "Sweet peas for soups." },
      { name: "Radish (Type 14)", price: 15, discount: 10, image: "https://www.jiomart.com/images/product/original/590000136/white-radish-1-kg-product-images-o590000136-p590000136-0-202409171905.jpg?im=Resize=(1000,1000)", description: "Spicy radish for salads." },
      { name: "Cabbage (Type 15)", price: 20, discount: 15, image: "https://www.jiomart.com/images/product/original/590002370/cabbage-1-pc-approx-600-g-1000-g-product-images-o590002370-p590002370-0-202409171904.jpg?im=Resize=(1000,1000)", description: "Crisp cabbage for slaws." },
      { name: "Celery (Type 16)", price: 25, discount: 5, image: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2020/12/06172801/shutterstock_1426538330-1.jpg", description: "Crunchy celery for snacks." },
      { name: "Lettuce (Type 17)", price: 20, discount: 10, image: "https://www.thespruceeats.com/thmb/B5JYUWpIq9T5R1D6w7ogfvgv_Fo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-varieties-of-lettuce-4065606-iceburg-3eee6823351a43b188e1a55d7ccd9e42.jpg", description: "Fresh lettuce for wraps." },
      { name: "Asparagus (Type 18)", price: 40, discount: 15, image: "https://images.pexels.com/photos/351679/pexels-photo-351679.jpeg", description: "Tender asparagus for grilling." },
      { name: "Brussels Sprouts (Type 19)", price: 35, discount: 5, image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/12/Bowl-of-sprouts-8305212.jpg", description: "Mini sprouts for roasting." },
      { name: "Kale (Type 20)", price: 30, discount: 10, image: "https://m.media-amazon.com/images/I/51dlaq2stAL._UF1000,1000_QL80_.jpg", description: "Nutrient-rich kale for salads." },
      { name: "Leek (Type 21)", price: 25, discount: 15, image: "https://www.simplyrecipes.com/thmb/8Fy_jAD6mzaFVR-ZLIBEK8y4vPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-How-To-Clean-Leeks-LEAD-03-7ecf9ec6ec9a45c4b3d62417f3339c2e.jpg", description: "Mild leek for soups." },
      { name: "Okra (Type 22)", price: 20, discount: 5, image: "https://cdn2.stylecraze.com/wp-content/uploads/2021/11/May-Contain-Anti-cancer-Properties.jpg.webp", description: "Slippery okra for stews." },
      { name: "Turnip (Type 23)", price: 15, discount: 10, image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/284/284815/a-bunch-of-turnips-on-a-table.jpg", description: "Earthy turnip for roasting." },
      { name: "Beetroot (Type 24)", price: 25, discount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGCOm-COZLRuzaaKF9uJNtRXBDRt3rNwLgw&s", description: "Red beetroot for health." },
      { name: "Fennel (Type 27)", price: 35, discount: 15, image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/fennel.jpg", description: "Aromatic fennel for salads." },
      { name: "Sweet Potato (Type 28)", price: 30, discount: 5, image: "https://c.ndtvimg.com/gws/ms/health-benefits-of-sweet-potatoes/assets/5.png", description: "Sweet potato for roasting." },
      { name: "Butternut Squash (Type 29)", price: 35, discount: 10, image: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/health_benefits_of_butternut_squash_bigbead/1800x1200_health_benefits_of_butternut_squash_bigbead.jpg", description: "Nutty squash for soups." },
      { name: "Pumpkin (Type 30)", price: 40, discount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3GidUVX2dg12mH-QSStcOXzSIZZTb3dMgg&s", description: "Versatile pumpkin for baking." },

       { name: "Artichoke", price: 50, discount: 10, image: "https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg", description: "Tender artichoke for steaming." },
    { name: "Arugula", price: 40, discount: 15, image: "https://images.pexels.com/photos/2325844/pexels-photo-2325844.jpeg", description: "Peppery arugula for salads." },
    { name: "Bok Choy", price: 45, discount: 5, image: "https://images.pexels.com/photos/2325845/pexels-photo-2325845.jpeg", description: "Crisp bok choy for stir-fries." },
    { name: "Chard", price: 35, discount: 10, image: "https://images.pexels.com/photos/2325846/pexels-photo-2325846.jpeg", description: "Colorful chard for sautéing." },
    { name: "Daikon Radish", price: 30, discount: 15, image: "https://images.pexels.com/photos/2325847/pexels-photo-2325847.jpeg", description: "Mild daikon radish for pickles." },
    { name: "Endive", price: 50, discount: 20, image: "https://images.pexels.com/photos/2325848/pexels-photo-2325848.jpeg", description: "Bitter endive for salads." },
    { name: "Fiddlehead Ferns", price: 60, discount: 10, image: "https://images.pexels.com/photos/2325849/pexels-photo-2325849.jpeg", description: "Delicate ferns for gourmet dishes." },
    { name: "Jicama", price: 40, discount: 5, image: "https://images.pexels.com/photos/2325850/pexels-photo-2325850.jpeg", description: "Crunchy jicama for raw snacks." },
    { name: "Kohlrabi", price: 45, discount: 15, image: "https://images.pexels.com/photos/2325851/pexels-photo-2325851.jpeg", description: "Sweet kohlrabi for roasting." },
    { name: "Mizuna", price: 35, discount: 10, image: "https://images.pexels.com/photos/2325852/pexels-photo-2325852.jpeg", description: "Mild mizuna for greens." },
    { name: "Parsnip", price: 50, discount: 20, image: "https://images.pexels.com/photos/2325853/pexels-photo-2325853.jpeg", description: "Sweet parsnip for soups." },
    { name: "Radicchio", price: 55, discount: 10, image: "https://images.pexels.com/photos/2325854/pexels-photo-2325854.jpeg", description: "Bitter radicchio for grilling." },
    { name: "Romanesco", price: 60, discount: 15, image: "https://images.pexels.com/photos/2325855/pexels-photo-2325855.jpeg", description: "Fractal romanesco for roasting." },
    { name: "Salsify", price: 45, discount: 5, image: "https://images.pexels.com/photos/2325856/pexels-photo-2325856.jpeg", description: "Nutty salsify for stews." },
    { name: "Sorrel", price: 40, discount: 10, image: "https://images.pexels.com/photos/2325857/pexels-photo-2325857.jpeg", description: "Tangy sorrel for sauces." },
    { name: "Tatsoi", price: 35, discount: 15, image: "https://images.pexels.com/photos/2325858/pexels-photo-2325858.jpeg", description: "Mild tatsoi for stir-fries." },
    { name: "Watercress", price: 50, discount: 20, image: "https://images.pexels.com/photos/2325859/pexels-photo-2325859.jpeg", description: "Peppery watercress for salads." },
    { name: "Yuca", price: 45, discount: 10, image: "https://images.pexels.com/photos/2325860/pexels-photo-2325860.jpeg", description: "Starchy yuca for frying." },
    { name: "Collard Greens", price: 40, discount: 5, image: "https://images.pexels.com/photos/2325861/pexels-photo-2325861.jpeg", description: "Hearty collards for braising." },
    { name: "Mustard Greens", price: 35, discount: 15, image: "https://images.pexels.com/photos/2325862/pexels-photo-2325862.jpeg", description: "Spicy mustard greens for cooking." },
  
    ],
    grains: [
      { name: "Rice (Kind 1)", price: 70, discount: 10, image: "https://images.pexels.com/photos/4187615/pexels-photo-4187615.jpeg", description: "White rice for everyday meals." },
      { name: "Wheat (Kind 2)", price: 80, discount: 5, image: "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg", description: "Whole wheat for baking." },
      { name: "Oats (Kind 4)", price: 60, discount: 10, image: "https://images.pexels.com/photos/3639181/pexels-photo-3639181.jpeg", description: "Healthy oats for breakfast." },
      { name: "Barley (Kind 5)", price: 70, discount: 5, image: "https://images.pexels.com/photos/6103856/pexels-photo-6103856.jpeg", description: "Hearty barley for soups." },
      { name: "Millet (Kind 6)", price: 80, discount: 15, image: "https://wisemama.in/cdn/shop/articles/FoxtailMillet_1200x.webp?v=1741263141", description: "Gluten-free millet for porridge." },
      { name: "Corn (Kind 7)", price: 50, discount: 10, image: "https://www.grainmart.in/wp-content/uploads/2021/02/fresh-healthy-maize-grain.jpg", description: "Sweet corn for snacks." },
      { name: "Rye (Kind 8)", price: 90, discount: 5, image: "https://www.sattvicfoods.in/cdn/shop/files/HimalayanRyeGrainsLoose.jpg?v=1714454802&width=1946", description: "Rye for hearty bread." },
      { name: "Sorghum (Kind 9)", price: 70, discount: 15, image: "https://crazy-crops.com/wp-content/uploads/2024/01/Red-Sorghum-Large.jpg", description: "Versatile sorghum for cooking." },
      { name: "Buckwheat (Kind 10)", price: 85, discount: 10, image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/buckwheat-1296x728-feature.jpg?w=1155&h=1528", description: "Nutty buckwheat for pancakes." },
      { name: "Triticale (Kind 21)", price: 90, discount: 15, image: "https://cdn.britannica.com/69/160769-050-89642E12/Triticale-rye-wheat.jpg", description: "Hybrid triticale for bread." },
      { name: "Semolina (Kind 24)", price: 60, discount: 15, image: "https://5.imimg.com/data5/SELLER/Default/2023/5/305231397/BY/CA/RV/3771864/natural-wheat-semolina-500x500.jpg", description: "Coarse semolina for pasta." },
      { name: "Spelt Wheat (Kind 30)", price: 100, discount: 15, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/10/spelt-grain-in-bowl-1296x728-header.jpg?w=1155&h=1528", description: "Ancient spelt wheat for bread." },

       { name: "Quinoa", price: 120, discount: 10, image: "https://images.pexels.com/photos/4110250/pexels-photo-4110250.jpeg", description: "Protein-rich quinoa for salads." },
    { name: "Farro", price: 100, discount: 15, image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg", description: "Chewy farro for hearty dishes." },
    { name: "Amaranth", price: 110, discount: 5, image: "https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg", description: "Nutty amaranth for porridge." },
    { name: "Teff", price: 130, discount: 20, image: "https://images.pexels.com/photos/4110253/pexels-photo-4110253.jpeg", description: "Tiny teff for injera bread." },
    { name: "Freekeh", price: 115, discount: 10, image: "https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg", description: "Smoky freekeh for pilafs." },
    { name: "Kaniwa", price: 125, discount: 15, image: "https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg", description: "Mild kaniwa for soups." },
    { name: "Wild Rice", price: 140, discount: 10, image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg", description: "Nutty wild rice for side dishes." },
    { name: "Kamut", price: 135, discount: 5, image: "https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg", description: "Ancient kamut for pasta." },
    { name: "Einkorn", price: 145, discount: 15, image: "https://images.pexels.com/photos/4110258/pexels-photo-4110258.jpeg", description: "Sweet einkorn for baking." },
    { name: "Fonio", price: 150, discount: 20, image: "https://images.pexels.com/photos/4110259/pexels-photo-4110259.jpeg", description: "Light fonio for couscous." },
    { name: "Durum Wheat", price: 105, discount: 10, image: "https://images.pexels.com/photos/4110260/pexels-photo-4110260.jpeg", description: "Hard durum for semolina." },
    { name: "Red Rice", price: 110, discount: 15, image: "https://images.pexels.com/photos/4110261/pexels-photo-4110261.jpeg", description: "Nutty red rice for bowls." },
    { name: "Black Rice", price: 120, discount: 5, image: "https://images.pexels.com/photos/4110262/pexels-photo-4110262.jpeg", description: "Antioxidant-rich black rice." },
    { name: "Job’s Tears", price: 130, discount: 10, image: "https://images.pexels.com/photos/4110263/pexels-photo-4110263.jpeg", description: "Chewy grain for soups." },
    { name: "Emmer", price: 140, discount: 15, image: "https://images.pexels.com/photos/4110264/pexels-photo-4110264.jpeg", description: "Ancient emmer for salads." },
    { name: "Triticale Flakes", price: 115, discount: 20, image: "https://images.pexels.com/photos/4110265/pexels-photo-4110265.jpeg", description: "Flaked triticale for cereal." },
    { name: "Pearl Millet", price: 100, discount: 10, image: "https://images.pexels.com/photos/4110266/pexels-photo-4110266.jpeg", description: "Mild pearl millet for flatbreads." },
    { name: "Brown Rice", price: 95, discount: 5, image: "https://images.pexels.com/photos/4110267/pexels-photo-4110267.jpeg", description: "Whole grain brown rice." },
    { name: "Jasmine Rice", price: 110, discount: 15, image: "https://images.pexels.com/photos/4110268/pexels-photo-4110268.jpeg", description: "Fragrant jasmine rice for curries." },
    { name: "Basmati Rice", price: 120, discount: 10, image: "https://images.pexels.com/photos/4110269/pexels-photo-4110269.jpeg", description: "Long-grain basmati for biryani." },

    ],
     oils: [
      { name: "Olive Oil", price: 200, discount: 10, image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg", description: "Extra virgin olive oil for cooking." },
      { name: "Coconut Oil", price: 150, discount: 5, image: "https://images.pexels.com/photos/11809347/pexels-photo-11809347.jpeg", description: "Pure coconut oil for baking." },
      { name: "Sunflower Oil", price: 120, discount: 15, image: "https://ases.in/cdn/shop/files/1_7c9cf6f2-d570-4f62-9a2f-8bdcbb84927a.jpg?v=1714507689", description: "Light sunflower oil for frying." },
      { name: "Canola Oil", price: 130, discount: 10, image: "https://www.ficsi.in/blog/wp-content/uploads/2024/07/Blog-3-3.jpg", description: "Healthy canola oil for salads." },
      { name: "Sesame Oil", price: 180, discount: 20, image: "https://ecosureoils.com/wp-content/uploads/2023/05/Black-Sesame-Oil-1.jpg", description: "Aromatic sesame oil for Asian dishes." },
      { name: "Peanut Oil", price: 140, discount: 15, image: "https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2021/12/19.webp", description: "Rich peanut oil for stir-fry." },
      { name: "Mustard Oil", price: 160, discount: 10, image: "https://cdn.shopify.com/s/files/1/0552/5159/9557/files/iriola-mustard-oil_1024x1024.jpg?v=1680066130", description: "Pungent mustard oil for Indian cooking." },
      { name: "Avocado Oil", price: 250, discount: 15, image: "https://baskinnature.in/wp-content/uploads/2024/08/avocado-oil-on-rustic-wooden-table-royalty-free-image-1622142886.webp", description: "Premium avocado oil for gourmet dishes." },
      { name: "Grapeseed Oil", price: 170, discount: 10, image: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/grape-seed-oil-1296x728-feature.jpg", description: "Light grapeseed oil for high-heat cooking." },
      { name: "Flaxseed Oil", price: 190, discount: 20, image: "https://5.imimg.com/data5/SELLER/Default/2022/8/US/QN/UR/2324264/flaxseed-oil.jpg", description: "Nutritious flaxseed oil for smoothies." },
      { name: "Almond Oil", price: 220, discount: 15, image: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/almond-oil-and-almonds-thumb.jpg", description: "Sweet almond oil for baking." },
      { name: "Walnut Oil", price: 210, discount: 10, image: "https://www.jaindryfruits.com/image/cache/catalog/Berry/w22-800x800-product_popup.jpg", description: "Rich walnut oil for salads." },
      { name: "Soybean Oil", price: 130, discount: 5, image: "https://5.imimg.com/data5/SELLER/Default/2024/3/396726873/RE/HR/LG/58856/refined-soybean-oil.jpg", description: "Versatile soybean oil for cooking." },
      { name: "Corn Oil", price: 140, discount: 10, image: "https://www.ariyancorp.com/wp-content/uploads/2020/04/Refined-Corn-Oil.jpg", description: "Corn oil for frying and baking." },
      { name: "Rice Bran Oil", price: 160, discount: 15, image: "https://static.toiimg.com/photo/71669973.cms", description: "Healthy rice bran oil for stir-fry." },
      { name: "Safflower Oil", price: 180, discount: 20, image: "https://www.ficsi.in/blog/wp-content/uploads/2024/07/Blog-4-2-1.jpg", description: "Safflower oil for heart-healthy cooking." },
      { name: "Palm Oil", price: 120, discount: 10, image: "https://suyashayurveda.com/wp-content/uploads/2022/04/Palm-Oil-Suyash.jpg", description: "Palm oil for versatile cooking." },
      { name: "Hazelnut Oil", price: 230, discount: 15, image: "https://5.imimg.com/data5/SELLER/Default/2024/6/427744567/QO/CU/VN/14546023/organic-hazelnut-oil.jpg", description: "Nutty hazelnut oil for dressings." },
      { name: "Pumpkin Seed Oil", price: 240, discount: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgBnuGBckloWz3RcRqosc34mpT73SDiRl3w&s", description: "Rich pumpkin seed oil for salads." },
      { name: "Macadamia Oil", price: 260, discount: 10, image: "https://static.toiimg.com/thumb/msid-94969001,width-400,resizemode-4/94969001.jpg", description: "Premium macadamia oil for gourmet dishes." },

       { name: "Hemp Seed Oil", price: 280, discount: 10, image: "https://images.pexels.com/photos/11809348/pexels-photo-11809348.jpeg", description: "Nutty hemp oil for smoothies." },
    { name: "Chia Seed Oil", price: 300, discount: 15, image: "https://images.pexels.com/photos/11809349/pexels-photo-11809349.jpeg", description: "Omega-rich chia oil for health." },
    { name: "Black Seed Oil", price: 320, discount: 20, image: "https://images.pexels.com/photos/11809350/pexels-photo-11809350.jpeg", description: "Potent black seed oil for wellness." },
    { name: "Camelina Oil", price: 290, discount: 10, image: "https://images.pexels.com/photos/11809351/pexels-photo-11809351.jpeg", description: "Mild camelina oil for cooking." },
    { name: "Perilla Oil", price: 310, discount: 5, image: "https://images.pexels.com/photos/11809352/pexels-photo-11809352.jpeg", description: "Aromatic perilla oil for Asian dishes." },
    { name: "Poppy Seed Oil", price: 270, discount: 15, image: "https://images.pexels.com/photos/11809353/pexels-photo-11809353.jpeg", description: "Delicate poppy seed oil for baking." },
    { name: "Baobab Oil", price: 350, discount: 20, image: "https://images.pexels.com/photos/11809354/pexels-photo-11809354.jpeg", description: "Nutrient-rich baobab oil for salads." },
    { name: "Marula Oil", price: 340, discount: 10, image: "https://images.pexels.com/photos/11809355/pexels-photo-11809355.jpeg", description: "Exotic marula oil for gourmet dishes." },
    { name: "Sacha Inchi Oil", price: 330, discount: 15, image: "https://images.pexels.com/photos/11809356/pexels-photo-11809356.jpeg", description: "Protein-rich sacha inchi oil." },
    { name: "Tamanu Oil", price: 360, discount: 10, image: "https://images.pexels.com/photos/11809357/pexels-photo-11809357.jpeg", description: "Healing tamanu oil for cooking." },
    { name: "Argan Oil", price: 400, discount: 20, image: "https://images.pexels.com/photos/11809358/pexels-photo-11809358.jpeg", description: "Premium argan oil for drizzling." },
    { name: "Rosehip Oil", price: 380, discount: 15, image: "https://images.pexels.com/photos/11809359/pexels-photo-11809359.jpeg", description: "Vitamin-rich rosehip oil for salads." },
    { name: "Moringa Oil", price: 370, discount: 10, image: "https://images.pexels.com/photos/11809360/pexels-photo-11809360.jpeg", description: "Nutritious moringa oil for health." },
    { name: "Kukui Nut Oil", price: 350, discount: 5, image: "https://images.pexels.com/photos/11809361/pexels-photo-11809361.jpeg", description: "Light kukui oil for cooking." },
    { name: "Borage Oil", price: 390, discount: 15, image: "https://images.pexels.com/photos/11809362/pexels-photo-11809362.jpeg", description: "Omega-rich borage oil for wellness." },
    { name: "Evening Primrose Oil", price: 400, discount: 20, image: "https://images.pexels.com/photos/11809363/pexels-photo-11809363.jpeg", description: "Health-boosting primrose oil." },
    { name: "Pomegranate Seed Oil", price: 410, discount: 10, image: "https://images.pexels.com/photos/11809364/pexels-photo-11809364.jpeg", description: "Antioxidant-rich pomegranate oil." },
    { name: "Sea Buckthorn Oil", price: 420, discount: 15, image: "https://images.pexels.com/photos/11809365/pexels-photo-11809365.jpeg", description: "Vibrant sea buckthorn oil for drizzling." },
    { name: "Neem Oil", price: 300, discount: 5, image: "https://images.pexels.com/photos/11809366/pexels-photo-11809366.jpeg", description: "Pungent neem oil for specialty dishes." },
    { name: "Castor Oil", price: 280, discount: 10, image: "https://images.pexels.com/photos/11809367/pexels-photo-11809367.jpeg", description: "Versatile castor oil for cooking." },

    ],
    dryfruits: [
      { name: "Almonds", price: 300, discount: 10, image: "https://m.media-amazon.com/images/I/51JJ7tebKAL._UF1000,1000_QL80_.jpg", description: "Crunchy almonds rich in protein." },
      { name: "Cashews", price: 350, discount: 15, image: "https://kingnqueenz.com/cdn/shop/products/cashewnuts120orderonlinekingnqueenzkaju.jpg?v=1669110881", description: "Creamy cashews for snacking." },
      { name: "Walnuts", price: 400, discount: 20, image: "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/premium-walnut-kernels-250g-2pc-halves-coorg-dryfruits.20240824022559.webp", description: "Nutty walnuts for brain health." },
      { name: "Pistachios", price: 380, discount: 10, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/nut-dry-fruit/h/u/x/0-5-raw-pistachios-i-raw-pista-dry-fruit-i-raw-pista-1-pouch-original-imaggzg6gjhj8g7s.jpeg?q=90&crop=false", description: "Salty pistachios for snacking." },
      { name: "Raisins", price: 150, discount: 5, image: "https://mangalorespice.com/cdn/shop/products/DF_06-02.jpg?v=1734798708&width=1445", description: "Sweet raisins for baking." },
      { name: "Dates", price: 200, discount: 15, image: "https://mangalorespice.com/cdn/shop/files/Dry_Dates_Chuara_Mangalore_Spice.jpg?v=1734787401", description: "Juicy dates for energy." },
      { name: "Figs", price: 250, discount: 20, image: "https://www.goingnuts.in/wp-content/uploads/2023/03/361A2505-scaled-1.jpg", description: "Chewy figs for desserts." },
      { name: "Apricots", price: 220, discount: 10, image: "https://rukminim2.flixcart.com/image/300/300/xif0q/nut-dry-fruit/v/o/r/200-premium-quality-dried-apricot-i-dry-fruits-apricots-i-pack-original-imahff8gtyth4fe3.jpeg", description: "Dried apricots for snacking." },
      { name: "Hazelnuts", price: 360, discount: 15, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQiIw3KDeoVVyD6B_DPsH-zZI22GnfzCO8Le4m_MA6KKXNxKs-eOqpXQY13tYj0djAQNTWGXSy70g2ywKbrMxaQViyGgi7z-e7TG3hNkRU", description: "Rich hazelnuts for baking." },
      { name: "Macadamia Nuts", price: 450, discount: 20, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0U_4V5Hl80K2khLXWSV2CwtXU0fMKzfB-h0STDTCAkPfaH26UZMxKW4NYk6UOJH8yyzkur7UN6O5BBfoQGt7fRQ", description: "Buttery macadamia nuts for luxury." },
      { name: "Brazil Nuts", price: 400, discount: 10, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQn7nm8aaZxuVmnH9Vp5Wz68BTHONzXCd5fJWXmIY_dtm2WpSJHj7ASFOWkMP3272vw_olDE2ZJ1a9ZFkKkrzTcqw", description: "Nutrient-rich Brazil nuts." },
      { name: "Pecans", price: 380, discount: 15, image: "https://pitbarrelcooker.com/cdn/shop/articles/Smoked-Bourbon-Caramel-Pecans_936x.png?v=1598627410", description: "Sweet pecans for pies." },
      { name: "Pine Nuts", price: 500, discount: 20, image: "https://m.media-amazon.com/images/I/61MjLekQWWL._UF350,350_QL80_.jpg", description: "Delicate pine nuts for pesto." },
      { name: "Prunes", price: 180, discount: 10, image: "https://assets.clevelandclinic.org/transform/a6a71c65-af28-4354-b32a-ebcfc6cde556/prunes-Juice-Fruit-600154290-770x533-1_jpg", description: "Juicy prunes for digestion." },
      { name: "Cranberries", price: 200, discount: 15, image: "https://www.thegreenfuels.com/cdn/shop/products/Cranberriesdried.jpg?v=1741668241&width=1445", description: "Tart dried cranberries for salads." },
      { name: "Sunflower Seeds", price: 120, discount: 10, image: "https://static.wixstatic.com/media/5f378b_cfc7fbfd9df74b8aae0393776b9416f4~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5f378b_cfc7fbfd9df74b8aae0393776b9416f4~mv2.jpg", description: "Crunchy sunflower seeds for snacking." },
      { name: "Pumpkin Seeds", price: 150, discount: 15, image: "https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Bowl-of-pumpkin-seeds-b4a5510.jpg?quality=90&resize=440,400", description: "Nutritious pumpkin seeds for roasting." },
      { name: "Chia Seeds", price: 180, discount: 20, image: "https://m.media-amazon.com/images/I/51Z9BNZOgNL._UF1000,1000_QL80_.jpg", description: "Healthy chia seeds for smoothies." },
      { name: "Flax Seeds", price: 130, discount: 10, image: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1039600298_hero-1024x575.jpg?w=1155&h=1528", description: "Omega-rich flax seeds for health." },

      { name: "Dried Mango", price: 250, discount: 10, image: "https://images.pexels.com/photos/128422/pexels-photo-128422.jpeg", description: "Chewy dried mango slices." },
    { name: "Dried Pineapple", price: 220, discount: 15, image: "https://images.pexels.com/photos/128423/pexels-photo-128423.jpeg", description: "Sweet dried pineapple rings." },
    { name: "Dried Papaya", price: 230, discount: 5, image: "https://images.pexels.com/photos/128424/pexels-photo-128424.jpeg", description: "Tropical dried papaya chunks." },
    { name: "Dried Kiwi", price: 260, discount: 20, image: "https://images.pexels.com/photos/128425/pexels-photo-128425.jpeg", description: "Tart dried kiwi slices." },
    { name: "Dried Cherries", price: 280, discount: 10, image: "https://images.pexels.com/photos/128426/pexels-photo-128426.jpeg", description: "Sweet dried cherries for baking." },
    { name: "Dried Blueberries", price: 300, discount: 15, image: "https://images.pexels.com/photos/128427/pexels-photo-128427.jpeg", description: "Antioxidant-rich dried blueberries." },
    { name: "Dried Strawberries", price: 270, discount: 10, image: "https://images.pexels.com/photos/128428/pexels-photo-128428.jpeg", description: "Juicy dried strawberries for snacks." },
    { name: "Dried Peaches", price: 240, discount: 5, image: "https://images.pexels.com/photos/128429/pexels-photo-128429.jpeg", description: "Soft dried peaches for trail mix." },
    { name: "Dried Pears", price: 250, discount: 15, image: "https://images.pexels.com/photos/128430/pexels-photo-128430.jpeg", description: "Sweet dried pear slices." },
    { name: "Dried Bananas", price: 200, discount: 20, image: "https://images.pexels.com/photos/128431/pexels-photo-128431.jpeg", description: "Crispy dried banana chips." },
    { name: "Dried Figs", price: 290, discount: 10, image: "https://images.pexels.com/photos/128432/pexels-photo-128432.jpeg", description: "Chewy dried figs for desserts." },
    { name: "Dried Goji Berries", price: 320, discount: 15, image: "https://images.pexels.com/photos/128433/pexels-photo-128433.jpeg", description: "Nutrient-rich dried goji berries." },
    { name: "Dried Mulberries", price: 310, discount: 10, image: "https://images.pexels.com/photos/128434/pexels-photo-128434.jpeg", description: "Sweet dried mulberries for snacking." },
    { name: "Dried Apricots", price: 260, discount: 5, image: "https://images.pexels.com/photos/128435/pexels-photo-128435.jpeg", description: "Soft dried apricots for baking." },
    { name: "Dried Dates", price: 280, discount: 15, image: "https://images.pexels.com/photos/128436/pexels-photo-128436.jpeg", description: "Juicy dried dates for energy." },
    { name: "Dried Raisins", price: 200, discount: 20, image: "https://images.pexels.com/photos/128437/pexels-photo-128437.jpeg", description: "Sweet dried raisins for cereal." },
    { name: "Dried Cranberries", price: 250, discount: 10, image: "https://images.pexels.com/photos/128438/pexels-photo-128438.jpeg", description: "Tart dried cranberries for salads." },
    { name: "Dried Prunes", price: 240, discount: 15, image: "https://images.pexels.com/photos/128439/pexels-photo-128439.jpeg", description: "Juicy dried prunes for digestion." },
    { name: "Dried Coconut", price: 230, discount: 10, image: "https://images.pexels.com/photos/128440/pexels-photo-128440.jpeg", description: "Shredded dried coconut for baking." },
    { name: "Dried Persimmons", price: 270, discount: 5, image: "https://images.pexels.com/photos/128441/pexels-photo-128441.jpeg", description: "Sweet dried persimmons for snacks." },

    ],
    meat: [
      { name: "Chicken Breast", price: 250, discount: 10, image: "https://assets.tendercuts.in/product/C/H/594e4559-f6b7-417d-9aac-d0643b5711d3.jpg", description: "Lean chicken breast for grilling." },
      { name: "Mutton Curry Cut", price: 400, discount: 15, image: "https://www.bbassets.com/media/uploads/p/l/40048913_4-fresho-mutton-curry-cut-from-whole-carcass-8-10-pcs-antibiotic-residue-free-growth-hormone-free.jpg", description: "Tender mutton for curries." },
      { name: "Beef Steak", price: 500, discount: 20, image: "https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY=", description: "Juicy beef steak for barbecues." },
      { name: "Chicken Wings", price: 200, discount: 15, image: "https://assets.tendercuts.in/product/C/H/ec648622-2e91-4a53-b22a-35c0900aca70.jpg", description: "Spicy chicken wings for snacks." },
      { name: "Lamb Chops", price: 450, discount: 20, image: "https://www.themeatman.co.uk/cdn/shop/files/rsz_lambchops2023_3f2f5629-85f3-4dc6-a239-2d4daadfe70a.jpg?v=1698139251", description: "Premium lamb chops for grilling." },
      { name: "Chicken Thighs", price: 220, discount: 10, image: "https://www.artisanmeats.in/cdn/shop/products/CHICKEN-THIGH-BONELESS-1.jpg?v=1622481502", description: "Juicy chicken thighs for curries." },
      { name: "Beef Mince", price: 380, discount: 15, image: "https://www.paknsave.co.nz/-/media/Project/Sitecore/Brands/Brand-PAKnSAVE/Articles/Shopping-guides/Raw-beef-mince-1.jpg?h=auto&w=80%25&hash=8495B94D9BCF26974CBE9495A708EE7D", description: "Versatile beef mince for burgers." },
      { name: "Chicken Drumsticks", price: 230, discount: 15, image: "https://assets.tendercuts.in/product/C/H/a62a73e9-a7d5-4f79-86c1-9f6127e7026e.jpg", description: "Crispy chicken drumsticks for frying." },
      { name: "Mutton Ribs", price: 420, discount: 20, image: "https://assets.tendercuts.in/product/G/T/a4346b56-c071-40a2-b4b3-0085e23ad842.webp", description: "Rich mutton ribs for slow cooking." },
      { name: "Beef Ribs", price: 480, discount: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd1eqzN1bpOlHksMlUoes2bG3dIZhtQD6RA&s", description: "Hearty beef ribs for barbecues." },
      { name: "Lamb Mince", price: 400, discount: 10, image: "https://www.bbassets.com/media/uploads/p/l/40227628_1-fresho-mutton-lamb-mince-juicy-tender.jpg", description: "Versatile lamb mince for kebabs." },
      { name: "Chicken Sausages", price: 280, discount: 15, image: "https://t4.ftcdn.net/jpg/03/87/05/27/360_F_387052789_AFRo8R6VinKiq813JkfsAjQUIRHbh3Jh.jpg", description: "Flavorful chicken sausages for grilling." },
      { name: "Beef Brisket", price: 450, discount: 20, image: "https://media.istockphoto.com/id/1300960753/photo/raw-brisket-beef-cut-on-a-wooden-cutting-board-black-angus-beef-black-background-top-view.jpg?s=612x612&w=0&k=20&c=XPcJV-wk4nZFZgVuhj29sRj_sBM4nByivLPD1BtNuLE=", description: "Tender beef brisket for slow cooking." },
      { name: "Chicken Keema", price: 200, discount: 15, image: "https://assets.tendercuts.in/product/R/M/7e88fd38-f531-427f-b331-d25a54d53ff8.jpg", description: "Spicy chicken keema for curries." },
      { name: "Mutton Shoulder", price: 420, discount: 20, image: "https://thumbs.dreamstime.com/b/whole-raw-lamb-shoulder-leg-meat-garlic-mint-dark-wooden-background-top-view-whole-raw-lamb-shoulder-leg-meat-garlic-203544267.jpg", description: "Tender mutton shoulder for roasting." },

      { name: "Turkey Breast", price: 300, discount: 15, image: "https://images.pexels.com/photos/128443/pexels-photo-128443.jpeg", description: "Juicy turkey breast for sandwiches." },
    { name: "Duck Breast", price: 450, discount: 20, image: "https://images.pexels.com/photos/128444/pexels-photo-128444.jpeg", description: "Rich duck breast for gourmet dishes." },
    
    { name: "Turkey Drumsticks", price: 320, discount: 5, image: "https://images.pexels.com/photos/128446/pexels-photo-128446.jpeg", description: "Hearty turkey drumsticks for roasting." },
    { name: "Venison Steak", price: 500, discount: 15, image: "https://images.pexels.com/photos/128447/pexels-photo-128447.jpeg", description: "Lean venison steak for grilling." },
    
    { name: "Turkey Mince", price: 280, discount: 15, image: "https://images.pexels.com/photos/128449/pexels-photo-128449.jpeg", description: "Versatile turkey mince for burgers." },
    { name: "Bacon Strips", price: 400, discount: 20, image: "https://images.pexels.com/photos/128450/pexels-photo-128450.jpeg", description: "Crispy bacon for breakfast." },
    { name: "Sausage Links", price: 350, discount: 10, image: "https://images.pexels.com/photos/128451/pexels-photo-128451.jpeg", description: "Flavorful pork sausages for grilling." },
    { name: "Lamb Shank", price: 450, discount: 15, image: "https://images.pexels.com/photos/128452/pexels-photo-128452.jpeg", description: "Tender lamb shank for slow cooking." },
    { name: "Chicken Liver", price: 200, discount: 5, image: "https://images.pexels.com/photos/128453/pexels-photo-128453.jpeg", description: "Rich chicken liver for pâté." },
    { name: "Beef Liver", price: 250, discount: 10, image: "https://images.pexels.com/photos/128454/pexels-photo-128454.jpeg", description: "Nutrient-dense beef liver for frying." },
   
    { name: "Rabbit Meat", price: 500, discount: 20, image: "https://images.pexels.com/photos/128456/pexels-photo-128456.jpeg", description: "Lean rabbit meat for stews." },
    { name: "Quail", price: 400, discount: 10, image: "https://images.pexels.com/photos/128457/pexels-photo-128457.jpeg", description: "Delicate quail for roasting." },
    { name: "Goat Curry Cut", price: 420, discount: 15, image: "https://images.pexels.com/photos/128458/pexels-photo-128458.jpeg", description: "Tender goat for spicy curries." },
    { name: "Chicken Gizzards", price: 220, discount: 5, image: "https://images.pexels.com/photos/128459/pexels-photo-128459.jpeg", description: "Chewy gizzards for soups." },
    { name: "Beef Tongue", price: 350, discount: 10, image: "https://images.pexels.com/photos/128460/pexels-photo-128460.jpeg", description: "Rich beef tongue for slow cooking." },
    { name: "Corned Beef", price: 400, discount: 15, image: "https://images.pexels.com/photos/128461/pexels-photo-128461.jpeg", description: "Cured corned beef for sandwiches." },

    ],
    electronics: [
      { name: "Smartphone", price: 15000, discount: 15, image: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1750752645694/9954a3e08c8124dde99fb52052c3946a.png", description: "Latest smartphone with 5G support." },
      { name: "Laptop", price: 50000, discount: 20, image: "https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg", description: "High-performance laptop for work." },
      { name: "Smartwatch", price: 8000, discount: 10, image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw66fe4c98/images/Titan/Catalog/90188AP06_1.jpg?sw=600&sh=600", description: "Fitness tracking smartwatch." },
      { name: "Bluetooth Earbuds", price: 3000, discount: 15, image: "https://m.media-amazon.com/images/I/51fkoZe-K6L.jpg", description: "Wireless earbuds with noise cancellation." },
      { name: "Tablet", price: 20000, discount: 20, image: "https://aws-obg-image-lb-5.tcl.com/content/dam/brandsite/region/global/products/tablets/tcl-nxtpaper-14/id/1.png?t=1721272443153&w=800&webp=true&dpr=2.625&rendition=1068", description: "Portable tablet for entertainment." },
      { name: "Wireless Speaker", price: 5000, discount: 10, image: "https://unixindia.in/cdn/shop/files/1_a49e04c6-7f94-488b-87ed-9f4ad8a03ee6.jpg?v=1747996557", description: "High-quality Bluetooth speaker." },
      { name: "Gaming Console", price: 35000, discount: 15, image: "https://m.media-amazon.com/images/I/71d4Z5wr+AL.jpg", description: "Next-gen gaming console." },
      { name: "Smart TV", price: 40000, discount: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuOZeVS65b7YBe60_Dj7UI6063tZWmplzsRg&s", description: "4K smart TV with streaming apps." },
      { name: "Wireless Mouse", price: 1500, discount: 10, image: "https://m.media-amazon.com/images/I/51vMo-pHZ5L.jpg", description: "Ergonomic wireless mouse." },
      { name: "Keyboard", price: 2000, discount: 15, image: "https://www.coconutlife.in/cdn/shop/files/jpeg-optimizer_K20Wired.jpg?v=1703142603", description: "Mechanical keyboard for typing." },
      { name: "Headphones", price: 4000, discount: 20, image: "https://m.media-amazon.com/images/I/41tp0JPPlmL.jpg", description: "Over-ear headphones with bass." },
      { name: "Power Bank", price: 2500, discount: 10, image: "https://m.media-amazon.com/images/I/61s+OTDUsKL._UF1000,1000_QL80_.jpg", description: "High-capacity power bank." },
      { name: "Smart Bulb", price: 1000, discount: 15, image: "https://m.media-amazon.com/images/I/51yBOvORkPL.jpg", description: "Wi-Fi enabled smart bulb." },
      { name: "Action Camera", price: 10000, discount: 20, image: "https://fotocentreindia.com/wp-content/uploads/GoPro-HERO-Compact-Action-Camera-Online-Buy-in-India_1-1000x1000.jpg", description: "Waterproof action camera for adventures." },
      { name: "Fitness Tracker", price: 3000, discount: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXdtfgsn90qKhRnmTf_QkbHx7kfVe9HhnXA&s", description: "Affordable fitness tracker." },
      { name: "Portable Charger", price: 2000, discount: 15, image: "https://image.made-in-china.com/202f0j00PkZbHKACSecf/Hot-Sale-Girls-Love-Gifts-Cute-Portable-Phone-Charging-Power-Bank.webp", description: "Compact charger for travel." },
      { name: "Wireless Router", price: 3500, discount: 20, image: "https://m.media-amazon.com/images/I/41kHxeOdw+L._UF1000,1000_QL80_.jpg", description: "High-speed wireless router." },
      { name: "Smart Speaker", price: 6000, discount: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMx_oEwcUXmH_egdSEZyv6ZCg6ZGYeuTUew&s", description: "Voice-activated smart speaker." },
      { name: "External Hard Drive", price: 5000, discount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfHQ_M90drTLmeHpLpz1aPiOa9K-EZ7yFfg&s", description: "1TB external hard drive." },
      { name: "Webcam", price: 2500, discount: 20, image: "https://cdn.thewirecutter.com/wp-content/media/2023/09/webcams-2048px-02112.jpg?auto=webp&quality=75&width=1024", description: "HD webcam for video calls." },

       { name: "AI Smart Speaker", price: 7000, discount: 10, image: "https://images.pexels.com/photos/341524/pexels-photo-341524.jpeg", description: "Voice-activated AI speaker with smart home control." },
    { name: "Foldable Smartphone", price: 20000, discount: 15, image: "https://images.pexels.com/photos/341525/pexels-photo-341525.jpeg", description: "5G foldable phone with dual screens." },
    { name: "Wireless Charging Pad", price: 2000, discount: 5, image: "https://images.pexels.com/photos/341526/pexels-photo-341526.jpeg", description: "Fast wireless charger for multiple devices." },
    { name: "AR Glasses", price: 15000, discount: 20, image: "https://images.pexels.com/photos/341527/pexels-photo-341527.jpeg", description: "Augmented reality glasses for gaming." },
    { name: "Smart Doorbell", price: 6000, discount: 10, image: "https://images.pexels.com/photos/341528/pexels-photo-341528.jpeg", description: "Wi-Fi doorbell with HD camera." },
    { name: "Portable Projector", price: 12000, discount: 15, image: "https://images.pexels.com/photos/341529/pexels-photo-341529.jpeg", description: "Compact projector for home theater." },
    { name: "Noise-Cancelling Headphones", price: 8000, discount: 10, image: "https://images.pexels.com/photos/341530/pexels-photo-341530.jpeg", description: "Premium headphones with ANC." },
    { name: "Smart Thermostat", price: 5000, discount: 5, image: "https://images.pexels.com/photos/341531/pexels-photo-341531.jpeg", description: "Energy-saving smart thermostat." },
    { name: "Gaming Mouse", price: 3000, discount: 15, image: "https://images.pexels.com/photos/341532/pexels-photo-341532.jpeg", description: "RGB gaming mouse with high DPI." },
    { name: "Smart Light Strip", price: 2500, discount: 20, image: "https://images.pexels.com/photos/341533/pexels-photo-341533.jpeg", description: "Color-changing LED light strip." },
    { name: "Drone with Camera", price: 18000, discount: 10, image: "https://images.pexels.com/photos/341534/pexels-photo-341534.jpeg", description: "4K camera drone for aerial photography." },
    { name: "USB-C Hub", price: 2000, discount: 15, image: "https://images.pexels.com/photos/341535/pexels-photo-341535.jpeg", description: "Multi-port USB-C hub for laptops." },
    { name: "Smart Lock", price: 7000, discount: 10, image: "https://images.pexels.com/photos/341536/pexels-photo-341536.jpeg", description: "Keyless smart lock with app control." },
    { name: "VR Headset", price: 25000, discount: 20, image: "https://images.pexels.com/photos/341537/pexels-photo-341537.jpeg", description: "Immersive VR headset for gaming." },
    { name: "Portable SSD", price: 6000, discount: 15, image: "https://images.pexels.com/photos/341538/pexels-photo-341538.jpeg", description: "High-speed portable SSD with 1TB." },
    { name: "Smart Plug", price: 1500, discount: 10, image: "https://images.pexels.com/photos/341539/pexels-photo-341539.jpeg", description: "Wi-Fi smart plug for home automation." },
    { name: "Wireless Keyboard", price: 3500, discount: 5, image: "https://images.pexels.com/photos/341540/pexels-photo-341540.jpeg", description: "Sleek wireless keyboard for productivity." },
    { name: "Smart Security Camera", price: 4000, discount: 15, image: "https://images.pexels.com/photos/341541/pexels-photo-341541.jpeg", description: "HD security camera with motion detection." },
    { name: "E-Reader", price: 9000, discount: 10, image: "https://images.pexels.com/photos/341542/pexels-photo-341542.jpeg", description: "E-ink reader for books on the go." },
    { name: "Smart Scale", price: 3000, discount: 20, image: "https://images.pexels.com/photos/341543/pexels-photo-341543.jpeg", description: "Wi-Fi scale with body metrics." },

    
    ],
    accessories: [
      { name: "Leather Wallet", price: 300, discount: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTEXQTH3N2N3yPYmOqJlh4l9hsj2yE2fktA&s", description: "Premium leather wallet for men." },
      { name: "Sunglasses", price: 1200, discount: 15, image: "https://m.media-amazon.com/images/I/51wwVl2r-WL.jpg", description: "Stylish UV-protective sunglasses." },
      { name: "Watch Strap", price: 500, discount: 20, image: "https://sylvi.in/cdn/shop/files/brown_Strap_1_20d8e676-1471-4f5b-a565-747b6f444013_1080x.webp?v=1747729335", description: "Durable watch strap for smartwatches." },
      { name: "Necklace", price: 1500, discount: 10, image: "https://m.media-amazon.com/images/I/61xUQIASFkL._UY1100_.jpg", description: "Elegant gold necklace for women." },
      { name: "Belt", price: 700, discount: 15, image: "https://imagescdn.peterengland.com/img/app/product/3/39691909-14204120.jpg?auto=format&w=390", description: "Classic leather belt for formal wear." },
      { name: "Earrings", price: 1000, discount: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dYu1BtKH0tph5s0WmGYX0rnnidzEiurcdQ&s", description: "Sparkling diamond earrings." },
      { name: "Bracelet", price: 900, discount: 10, image: "https://silverpalace.in/uploads/products/img-213935771765cc885786de60.83186877.jpg", description: "Stylish silver bracelet." },
      { name: "Handbag", price: 2000, discount: 15, image: "https://mokobara.com/cdn/shop/files/The-Reign-Handbag_Starlight-1_305eefb9-f68a-4c9f-a77d-9298050d61eb.jpg?v=1716287477", description: "Chic handbag for daily use." },
      { name: "Scarf", price: 600, discount: 20, image: "https://m.media-amazon.com/images/I/51wBE9ggYUL._SX522_.jpg", description: "Soft silk scarf for all seasons." },
      { name: "Hat", price: 800, discount: 10, image: "https://m.media-amazon.com/images/I/71VhajyqrcL._SX466_.jpg", description: "Trendy cap for casual wear." },
      { name: "Ring", price: 1200, discount: 15, image: "https://m.media-amazon.com/images/I/41Tu9g4GAuL._SY395_.jpg", description: "Elegant silver ring." },
      { name: "Backpack", price: 1500, discount: 20, image: "https://m.media-amazon.com/images/I/41l-6+q1kzL.jpg", description: "Durable backpack for travel." },
      { name: "Tie", price: 500, discount: 10, image: "https://m.media-amazon.com/images/I/515SQQbh2oL._SX385_.jpg", description: "Formal silk tie for suits." },
      { name: "Keychain", price: 300, discount: 15, image: "https://m.media-amazon.com/images/I/51R4awjMHhL._SX522_.jpg", description: "Stylish keychain for daily use." },
      { name: "Cufflinks", price: 700, discount: 20, image: "https://m.media-amazon.com/images/I/71bcSNN1SgL._SX395_.jpg", description: "Elegant cufflinks for formal shirts." },
      { name: "Tote Bag", price: 1000, discount: 10, image: "https://m.media-amazon.com/images/I/71rHIIluZsL._SX425_.jpg", description: "Spacious tote bag for shopping." },
      { name: "Anklet", price: 600, discount: 15, image: "https://m.media-amazon.com/images/I/512oouRGNhL._SY500_.jpg", description: "Delicate silver anklet." },
      { name: "Hairband", price: 400, discount: 20, image: "https://m.media-amazon.com/images/I/61YueBiTTTL._SY395_.jpg", description: "Stylish hairband for women." },
      { name: "Watch Case", price: 800, discount: 10, image: "https://m.media-amazon.com/images/I/51REdeeMlUL._SX300_SY300_QL70_FMwebp_.jpg", description: "Protective case for watches." },
      { name: "Pendant", price: 1100, discount: 15, image: "https://m.media-amazon.com/images/I/51jNgl5WPFL._SY395_.jpg", description: "Elegant pendant for necklaces." },

      { name: "Smartphone Case", price: 800, discount: 10, image: "https://images.pexels.com/photos/1460839/pexels-photo-1460839.jpeg", description: "Durable case for phone protection." },
    { name: "Laptop Sleeve", price: 1200, discount: 15, image: "https://images.pexels.com/photos/1460840/pexels-photo-1460840.jpeg", description: "Stylish sleeve for laptops." },
    { name: "Wireless Earbud Case", price: 600, discount: 5, image: "https://images.pexels.com/photos/1460841/pexels-photo-1460841.jpeg", description: "Protective case for earbuds." },
    { name: "Travel Adapter", price: 1000, discount: 20, image: "https://images.pexels.com/photos/1460842/pexels-photo-1460842.jpeg", description: "Universal travel power adapter." },
    { name: "Phone Stand", price: 500, discount: 10, image: "https://images.pexels.com/photos/1460843/pexels-photo-1460843.jpeg", description: "Adjustable stand for smartphones." },
    { name: "Cable Organizer", price: 400, discount: 15, image: "https://images.pexels.com/photos/1460844/pexels-photo-1460844.jpeg", description: "Neat organizer for cables." },
    { name: "Smartwatch Band", price: 700, discount: 10, image: "https://images.pexels.com/photos/1460845/pexels-photo-1460845.jpeg", description: "Silicone band for smartwatches." },
    { name: "Luggage Tag", price: 300, discount: 5, image: "https://images.pexels.com/photos/1460846/pexels-photo-1460846.jpeg", description: "Personalized luggage tag." },
    { name: "Passport Holder", price: 600, discount: 15, image: "https://images.pexels.com/photos/1460847/pexels-photo-1460847.jpeg", description: "Leather passport holder for travel." },
    { name: "Sunglass Case", price: 500, discount: 20, image: "https://images.pexels.com/photos/1460848/pexels-photo-1460848.jpeg", description: "Hard case for sunglasses." },
    { name: "Jewelry Organizer", price: 800, discount: 10, image: "https://images.pexels.com/photos/1460849/pexels-photo-1460849.jpeg", description: "Compact jewelry travel case." },
    { name: "Money Clip", price: 400, discount: 15, image: "https://images.pexels.com/photos/1460850/pexels-photo-1460850.jpeg", description: "Sleek metal money clip." },
    { name: "Cardholder", price: 600, discount: 10, image: "https://images.pexels.com/photos/1460851/pexels-photo-1460851.jpeg", description: "Slim leather cardholder." },
    { name: "Umbrella", price: 900, discount: 5, image: "https://images.pexels.com/photos/1460852/pexels-photo-1460852.jpeg", description: "Compact travel umbrella." },
    { name: "Travel Pillow", price: 700, discount: 15, image: "https://images.pexels.com/photos/1460853/pexels-photo-1460853.jpeg", description: "Memory foam travel pillow." },
    { name: "Bottle Opener", price: 300, discount: 20, image: "https://images.pexels.com/photos/1460854/pexels-photo-1460854.jpeg", description: "Stylish bottle opener keychain." },
    { name: "Hair Clip", price: 400, discount: 10, image: "https://images.pexels.com/photos/1460855/pexels-photo-1460855.jpeg", description: "Elegant hair clip for styling." },
    { name: "Wristlet", price: 600, discount: 15, image: "https://images.pexels.com/photos/1460856/pexels-photo-1460856.jpeg", description: "Small wristlet for essentials." },
    { name: "Glasses Chain", price: 500, discount: 10, image: "https://images.pexels.com/photos/1460857/pexels-photo-1460857.jpeg", description: "Fashionable glasses chain." },
    { name: "Lapel Pin", price: 300, discount: 5, image: "https://images.pexels.com/photos/1460858/pexels-photo-1460858.jpeg", description: "Decorative lapel pin for suits." },

    ],
    toys: [
      { name: "Action Figure", price: 500, discount: 10, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRlH8TKHoM72YteiqYgWK46SGG0ky69EH-_s95KpeVPm6Qm_qwxW-SDRpN9J_JLJHnEti2L_utJSMKUsq-o--5nOu93Rqz_BmR3Q31yUDdEwbiSS57bXgmFCpg", description: "Superhero action figure for kids." },
      { name: "Building Blocks", price: 800, discount: 15, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZLJ2aFwh-KN98M98eNLD7IGspxQw4G-hWzafedBfA6YEAgOaKBTQtYGQIrXB0KU1bgp4kxb_dtpilK4oprsfnZ2eJ8VdPgQMd9N47bvo809EEn17zllHTrw", description: "Creative building blocks set." },
      { name: "Puzzle Game", price: 600, discount: 20, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5KiEP17gtSdZ-3y8AZmRPZIjP7b1Vy603gPmNHyXtmyg9fab1y30w8juGQ3Cf6TIP2SXQfx1IG4uUU2hlLoQWF0ScbtpW25SoTGto3vmkBd1JyeLflXxqlQ", description: "Educational puzzle for children." },
      { name: "Remote Control Car", price: 1500, discount: 10, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_jFjT0SAYRyElbr3dFh1akysFYy0b-2-J7psnK2l8TzQKTJFg5eHLLmiBCaOKplT4CUZa0nHuyxKphLYh36FuW0kK7HXRwvyXj_ny9WXbqYddbRXYVjufqw", description: "Fast RC car for fun." },
      { name: "Doll", price: 700, discount: 15, image: "https://m.media-amazon.com/images/I/41PMFo5LDYL._SX300_SY300_QL70_FMwebp_.jpg", description: "Cute doll for imaginative play." },
      { name: "Board Game", price: 1000, discount: 20, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScDQ700U5g1O-OXnos91GXTpWR_lXF-kog7JPZSjQ3Cos0i8AtgATEM-8bBUrLXyClKyJIVkoImNtmyHa6spZEaGVF7AQe8tVKuN8Rpuldbyo-vnp7dkK_H-U", description: "Family-friendly board game." },
      { name: "Toy Train", price: 900, discount: 10, image: "https://m.media-amazon.com/images/I/61yWJfaCR0L._SY355_.jpg", description: "Electric toy train set." },
      { name: "Stuffed Animal", price: 600, discount: 15, image: "https://m.media-amazon.com/images/I/41SMFsDvi2L._SX300_SY300_QL70_FMwebp_.jpg", description: "Soft teddy bear for cuddling." },
      { name: "Toy Robot", price: 1200, discount: 20, image: "https://m.media-amazon.com/images/I/61OVEWnV6zL._SY355_.jpg", description: "Interactive toy robot for kids." },
      { name: "Play Dough", price: 300, discount: 10, image: "https://m.media-amazon.com/images/I/51C2bqcv9kL._SX300_SY300_QL70_FMwebp_.jpg", description: "Colorful play dough for creativity." },
      { name: "Toy Gun", price: 500, discount: 15, image: "https://m.media-amazon.com/images/I/6103B5Jq+TL._SY355_.jpg", description: "Safe toy gun for play." },
      { name: "Lego Set", price: 2000, discount: 20, image: "https://m.media-amazon.com/images/I/51MrfGpkX9L._SX300_SY300_QL70_FMwebp_.jpg", description: "Advanced Lego set for building." },
      { name: "Toy Plane", price: 800, discount: 10, image: "https://m.media-amazon.com/images/I/41FmZqHg8ZL._SX300_SY300_QL70_FMwebp_.jpg", description: "Model airplane for kids." },
      { name: "Puzzle Cube", price: 400, discount: 15, image: "https://m.media-amazon.com/images/I/41eRCljIjZL._SX300_SY300_QL70_FMwebp_.jpg", description: "Challenging puzzle cube." },
      { name: "Toy Car", price: 600, discount: 20, image: "https://m.media-amazon.com/images/I/61rzcNGkIwL._SY355_.jpg", description: "Miniature toy car for racing." },
      { name: "Building Kit", price: 1000, discount: 10, image: "https://m.media-amazon.com/images/I/71Zaf5C9q9L._SX355_.jpg", description: "STEM building kit for kids." },
      { name: "Toy Helicopter", price: 900, discount: 15, image: "https://m.media-amazon.com/images/I/718vJN4+nML._SY355_.jpg", description: "Remote-controlled toy helicopter." },
      { name: "Art Set", price: 700, discount: 20, image: "https://m.media-amazon.com/images/I/81lFzDHQjgL._SY355_.jpg", description: "Complete art set for creativity." },
      { name: "Toy Dinosaur", price: 500, discount: 10, image: "https://m.media-amazon.com/images/I/61k9EQAVoAL._SX355_.jpg", description: "Realistic dinosaur model." },
      { name: "Musical Toy", price: 800, discount: 15, image: "https://m.media-amazon.com/images/I/415RgkdbQzL._SX300_SY300_QL70_FMwebp_.jpg", description: "Musical toy for toddlers." },

      { name: "STEM Robot Kit", price: 1500, discount: 10, image: "https://images.pexels.com/photos/12212/pexels-photo-12212.jpeg", description: "Educational robot-building kit." },
    { name: "Magnetic Tiles", price: 1000, discount: 15, image: "https://images.pexels.com/photos/12213/pexels-photo-12213.jpeg", description: "Colorful magnetic tiles for construction." },
    { name: "Interactive Globe", price: 1200, discount: 5, image: "https://images.pexels.com/photos/12214/pexels-photo-12214.jpeg", description: "AR-enabled globe for learning." },
    { name: "Coding Game", price: 800, discount: 20, image: "https://images.pexels.com/photos/12215/pexels-photo-12215.jpeg", description: "Fun coding board game for kids." },
    { name: "Toy Drone", price: 2000, discount: 10, image: "https://images.pexels.com/photos/12216/pexels-photo-12216.jpeg", description: "Kid-friendly drone with camera." },
    { name: "Plush Unicorn", price: 600, discount: 15, image: "https://images.pexels.com/photos/12217/pexels-photo-12217.jpeg", description: "Soft unicorn for cuddling." },
    { name: "Science Experiment Kit", price: 900, discount: 10, image: "https://images.pexels.com/photos/12218/pexels-photo-12218.jpeg", description: "Hands-on science experiments for kids." },
    { name: "Toy Kitchen Set", price: 1500, discount: 5, image: "https://images.pexels.com/photos/12219/pexels-photo-12219.jpeg", description: "Pretend play kitchen with accessories." },
    { name: "Remote Control Boat", price: 1200, discount: 15, image: "https://images.pexels.com/photos/12220/pexels-photo-12220.jpeg", description: "RC boat for water play." },
    { name: "Dinosaur Playset", price: 1000, discount: 20, image: "https://images.pexels.com/photos/12221/pexels-photo-12221.jpeg", description: "Realistic dinosaur figures with habitat." },
    { name: "Toy Guitar", price: 700, discount: 10, image: "https://images.pexels.com/photos/12222/pexels-photo-12222.jpeg", description: "Musical toy guitar for kids." },
    { name: "Art Easel", price: 1100, discount: 15, image: "https://images.pexels.com/photos/12223/pexels-photo-12223.jpeg", description: "Double-sided easel for painting." },
    { name: "Toy Microscope", price: 900, discount: 10, image: "https://images.pexels.com/photos/12224/pexels-photo-12224.jpeg", description: "Functional microscope for young scientists." },
    { name: "Marble Run", price: 800, discount: 5, image: "https://images.pexels.com/photos/12225/pexels-photo-12225.jpeg", description: "Creative marble run construction set." },
    { name: "Toy Spaceship", price: 1000, discount: 15, image: "https://images.pexels.com/photos/12226/pexels-photo-12226.jpeg", description: "Light-up spaceship for imaginative play." },
    { name: "Wooden Puzzle", price: 600, discount: 20, image: "https://images.pexels.com/photos/12227/pexels-photo-12227.jpeg", description: "Eco-friendly wooden puzzle." },
    { name: "Toy Farm Set", price: 1200, discount: 10, image: "https://images.pexels.com/photos/12228/pexels-photo-12228.jpeg", description: "Farm playset with animals." },
    { name: "Bubble Machine", price: 700, discount: 15, image: "https://images.pexels.com/photos/12229/pexels-photo-12229.jpeg", description: "Automatic bubble machine for fun." },
    { name: "Toy Doctor Kit", price: 800, discount: 10, image: "https://images.pexels.com/photos/12230/pexels-photo-12230.jpeg", description: "Pretend play doctor set." },
    { name: "Construction Truck", price: 900, discount: 5, image: "https://images.pexels.com/photos/12231/pexels-photo-12231.jpeg", description: "Durable toy construction truck." },

    ],

    milkproducts: [
  { name: "Amul Full Cream Milk", price: 60, discount: 10, image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142", description: "Rich full cream milk for daily use." },
  { name: "Amul Toned Milk", price: 50, discount: 5, image: "https://cdn.grofers.com/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143", description: "Light toned milk for health-conscious." },
  { name: "Amul Gold Milk", price: 70, discount: 15, image: "https://gharstuff.sirv.com/WP_gharstuff.com/2019/03/Amul-Gold-Milk-500ml.jpg", description: "Premium gold milk with extra cream." },
  { name: "Nestlé Everyday Milk", price: 55, discount: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7OjGiteGy2n2f98sgKKMvQOYmIC6RupfTA&s", description: "Everyday dairy milk for cooking." },
  { name: "Mother Dairy Milk", price: 52, discount: 5, image: "https://cdn.grofers.com/app/assets/products/sliding_images/jpeg/8f6bfafc-ad44-422a-8e96-7e2d2994012a.jpg?ts=1707998856", description: "Fresh milk from Mother Dairy." },
  { name: "Amul Fresh Curd", price: 40, discount: 10, image: "https://www.bbassets.com/media/uploads/p/l/40332424_1-amul-curd-creamy-tasty.jpg", description: "Thick and creamy curd." },
  { name: "Nestlé Dahi", price: 45, discount: 15, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Smooth and tangy yogurt." },
  { name: "Amul Butter", price: 60, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Creamy butter for spreads." },
  { name: "Amul Cheese Slices", price: 120, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Cheese slices for sandwiches." },
  { name: "Britannia Cheese Block", price: 150, discount: 15, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Natural cheese block." },
  { name: "Amul Paneer", price: 100, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Fresh paneer for cooking." },
  { name: "Nestlé Milk Powder", price: 250, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Milk powder for beverages." },
  { name: "Amul Shrikhand", price: 80, discount: 15, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Sweetened yogurt dessert." },
  { name: "Parmalat UHT Milk", price: 90, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Long-life milk for convenience." },
  { name: "Amul Ghee", price: 300, discount: 15, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Pure clarified butter." },
  { name: "Mother Dairy Curd", price: 35, discount: 5, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Natural curd for health." },
  { name: "Amul Lassi", price: 40, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Refreshing yogurt drink." },
  { name: "Nestlé Yogurt", price: 50, discount: 15, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Creamy fruit yogurt." },
  { name: "Amul Cream", price: 70, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Rich cream for desserts." },
  { name: "Britannia Milkshake", price: 60, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Ready-to-drink milkshake." },
  { name: "Amul Probiotic Dahi", price: 55, discount: 15, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Health-boosting probiotic curd." },
  { name: "Nestlé Condensed Milk", price: 120, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Sweetened condensed milk." },
  { name: "Amul Flavored Milk", price: 30, discount: 5, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Flavored milk in various tastes." },
  { name: "Mother Dairy Paneer", price: 90, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Fresh paneer cubes." },
  { name: "Amul Fresh Cream", price: 80, discount: 15, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Whipping cream for baking." },
  { name: "Nestlé Coffee Mate", price: 200, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Creamer for coffee." },
  { name: "Amul Slim Milk", price: 55, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Low-fat milk option." },
  { name: "Britannia Cheese Spread", price: 100, discount: 15, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Creamy cheese spread." },
  { name: "Amul Taaza Milk", price: 50, discount: 5, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Freshly packed milk." },
  { name: "Mother Dairy Lassi", price: 45, discount: 10, image: "https://images.pexels.com/photos/594566/pexels-photo-594566.jpeg", description: "Traditional lassi drink." },

  { name: "Goat Milk", price: 80, discount: 10, image: "https://images.pexels.com/photos/594567/pexels-photo-594567.jpeg", description: "Fresh goat milk for health." },
    { name: "Almond Milk", price: 100, discount: 15, image: "https://images.pexels.com/photos/594568/pexels-photo-594568.jpeg", description: "Creamy plant-based almond milk." },
    { name: "Oat Milk", price: 90, discount: 5, image: "https://images.pexels.com/photos/594569/pexels-photo-594569.jpeg", description: "Smooth oat milk for coffee." },
    { name: "Soy Milk", price: 85, discount: 10, image: "https://images.pexels.com/photos/594570/pexels-photo-594570.jpeg", description: "Nutritious soy milk for smoothies." },
    { name: "Coconut Milk", price: 110, discount: 15, image: "https://images.pexels.com/photos/594571/pexels-photo-594571.jpeg", description: "Rich coconut milk for curries." },
    { name: "Greek Yogurt", price: 60, discount: 20, image: "https://images.pexels.com/photos/594572/pexels-photo-594572.jpeg", description: "Thick Greek yogurt for dips." },
    { name: "Kefir", price: 70, discount: 10, image: "https://images.pexels.com/photos/594573/pexels-photo-594573.jpeg", description: "Probiotic-rich kefir for gut health." },
    { name: "Skimmed Milk", price: 50, discount: 5, image: "https://images.pexels.com/photos/594574/pexels-photo-594574.jpeg", description: "Low-fat skimmed milk for diets." },
    { name: "Lactose-Free Milk", price: 75, discount: 15, image: "https://images.pexels.com/photos/594575/pexels-photo-594575.jpeg", description: "Lactose-free milk for sensitive stomachs." },
    { name: "Flavored Yogurt", price: 55, discount: 10, image: "https://images.pexels.com/photos/594576/pexels-photo-594576.jpeg", description: "Sweet flavored yogurt for snacks." },
    { name: "Cottage Cheese", price: 90, discount: 20, image: "https://images.pexels.com/photos/594577/pexels-photo-594577.jpeg", description: "Protein-rich cottage cheese." },
    { name: "Mozzarella Cheese", price: 150, discount: 10, image: "https://images.pexels.com/photos/594578/pexels-photo-594578.jpeg", description: "Fresh mozzarella for pizzas." },
    { name: "Cheddar Cheese", price: 160, discount: 15, image: "https://images.pexels.com/photos/594579/pexels-photo-594579.jpeg", description: "Sharp cheddar for sandwiches." },
    { name: "Cream Cheese", price: 100, discount: 10, image: "https://images.pexels.com/photos/594580/pexels-photo-594580.jpeg", description: "Smooth cream cheese for bagels." },
    { name: "Sour Cream", price: 80, discount: 5, image: "https://images.pexels.com/photos/594581/pexels-photo-594581.jpeg", description: "Tangy sour cream for dips." },
    { name: "Whipping Cream", price: 120, discount: 15, image: "https://images.pexels.com/photos/594582/pexels-photo-594582.jpeg", description: "Heavy cream for desserts." },
    { name: "Buttermilk", price: 60, discount: 10, image: "https://images.pexels.com/photos/594583/pexels-photo-594583.jpeg", description: "Traditional buttermilk for baking." },
    { name: "Ricotta Cheese", price: 110, discount: 20, image: "https://images.pexels.com/photos/594584/pexels-photo-594584.jpeg", description: "Soft ricotta for lasagnas." },
    { name: "Parmesan Cheese", price: 200, discount: 10, image: "https://images.pexels.com/photos/594585/pexels-photo-594585.jpeg", description: "Aged parmesan for grating." },
    { name: "Evaporated Milk", price: 90, discount: 15, image: "https://images.pexels.com/photos/594586/pexels-photo-594586.jpeg", description: "Canned evaporated milk for cooking." },

],
   
  cooldrinks: [
    { name: "Coca-Cola Zero Sugar", price: 50, discount: 10, image: "https://images.pexels.com/photos/594587/pexels-photo-594587.jpeg", description: "Sugar-free cola with classic taste." },
    { name: "Pepsi Max", price: 50, discount: 15, image: "https://images.pexels.com/photos/594588/pexels-photo-594588.jpeg", description: "Bold Pepsi flavor, no sugar." },
    { name: "Sprite Zero", price: 45, discount: 5, image: "https://images.pexels.com/photos/594589/pexels-photo-594589.jpeg", description: "Crisp lemon-lime, sugar-free." },
    { name: "Fanta Orange", price: 50, discount: 10, image: "https://images.pexels.com/photos/594590/pexels-photo-594590.jpeg", description: "Zesty orange soda." },
    { name: "Mirinda Citrus", price: 45, discount: 15, image: "https://images.pexels.com/photos/594591/pexels-photo-594591.jpeg", description: "Tangy citrus soda for refreshment." },
    { name: "7UP Free", price: 50, discount: 20, image: "https://images.pexels.com/photos/594592/pexels-photo-594592.jpeg", description: "Sugar-free lemon-lime soda." },
    { name: "Mountain Dew Spark", price: 55, discount: 10, image: "https://images.pexels.com/photos/594593/pexels-photo-594593.jpeg", description: "Energizing raspberry-lemon soda." },
    { name: "Dr Pepper Zero", price: 50, discount: 15, image: "https://images.pexels.com/photos/594594/pexels-photo-594594.jpeg", description: "Unique flavor, no sugar." },
    { name: "Tonic Water", price: 60, discount: 5, image: "https://images.pexels.com/photos/594595/pexels-photo-594595.jpeg", description: "Schweppes tonic for cocktails." },
    { name: "Ginger Ale", price: 55, discount: 10, image: "https://images.pexels.com/photos/594596/pexels-photo-594596.jpeg", description: "Spicy ginger ale for mixers." },
    { name: "Sparkling Water", price: 40, discount: 15, image: "https://images.pexels.com/photos/594597/pexels-photo-594597.jpeg", description: "Pure sparkling water, no calories." },
    { name: "Lemon Iced Tea", price: 60, discount: 20, image: "https://images.pexels.com/photos/594598/pexels-photo-594598.jpeg", description: "Refreshing lemon-flavored iced tea." },
    { name: "Peach Iced Tea", price: 60, discount: 10, image: "https://images.pexels.com/photos/594599/pexels-photo-594599.jpeg", description: "Sweet peach iced tea." },
    { name: "Energy Drink", price: 80, discount: 15, image: "https://images.pexels.com/photos/594600/pexels-photo-594600.jpeg", description: "Red Bull energy drink for a boost." },
    { name: "Coconut Water", price: 70, discount: 10, image: "https://images.pexels.com/photos/594601/pexels-photo-594601.jpeg", description: "Natural coconut water for hydration." },
    { name: "Pomegranate Juice", price: 100, discount: 5, image: "https://images.pexels.com/photos/594602/pexels-photo-594602.jpeg", description: "Antioxidant-rich pomegranate juice." },
    { name: "Mango Juice", price: 90, discount: 15, image: "https://images.pexels.com/photos/594603/pexels-photo-594603.jpeg", description: "Sweet mango juice for refreshment." },
    { name: "Orange Juice", price: 80, discount: 10, image: "https://images.pexels.com/photos/594604/pexels-photo-594604.jpeg", description: "Freshly squeezed orange juice." },
    { name: "Apple Juice", price: 80, discount: 20, image: "https://images.pexels.com/photos/594605/pexels-photo-594605.jpeg", description: "Crisp apple juice, no added sugar." },
    { name: "Grape Juice", price: 90, discount: 10, image: "https://images.pexels.com/photos/594606/pexels-photo-594606.jpeg", description: "Rich grape juice for a sweet sip." },
    { name: "Kombucha Ginger", price: 120, discount: 15, image: "https://images.pexels.com/photos/594607/pexels-photo-594607.jpeg", description: "Probiotic ginger kombucha." },
    { name: "Kombucha Berry", price: 120, discount: 10, image: "https://images.pexels.com/photos/594608/pexels-photo-594608.jpeg", description: "Berry-flavored probiotic kombucha." },
    { name: "Electrolyte Drink", price: 70, discount: 5, image: "https://images.pexels.com/photos/594609/pexels-photo-594609.jpeg", description: "Hydrating electrolyte sports drink." },
    { name: "Aloe Vera Drink", price: 80, discount: 15, image: "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg", description: "Soothing aloe vera juice." },
    { name: "Pineapple Juice", price: 90, discount: 20, image: "https://images.pexels.com/photos/594611/pexels-photo-594611.jpeg", description: "Tropical pineapple juice." },
    { name: "Cranberry Juice", price: 100, discount: 10, image: "https://images.pexels.com/photos/594612/pexels-photo-594612.jpeg", description: "Tart cranberry juice for health." },
    { name: "Guava Juice", price: 90, discount: 15, image: "https://images.pexels.com/photos/594613/pexels-photo-594613.jpeg", description: "Sweet guava juice for refreshment." },
    { name: "Lychee Juice", price: 100, discount: 10, image: "https://images.pexels.com/photos/594614/pexels-photo-594614.jpeg", description: "Floral lychee juice." },
    { name: "Passion Fruit Juice", price: 110, discount: 5, image: "https://images.pexels.com/photos/594615/pexels-photo-594615.jpeg", description: "Tangy passion fruit juice." },
    { name: "Watermelon Juice", price: 80, discount: 15, image: "https://images.pexels.com/photos/594616/pexels-photo-594616.jpeg", description: "Hydrating watermelon juice." },
    { name: "Green Tea Drink", price: 60, discount: 20, image: "https://images.pexels.com/photos/594617/pexels-photo-594617.jpeg", description: "Lightly sweetened green tea." },
    { name: "Black Tea Drink", price: 60, discount: 10, image: "https://images.pexels.com/photos/594618/pexels-photo-594618.jpeg", description: "Bold black tea with lemon." },
    { name: "Hibiscus Cooler", price: 70, discount: 15, image: "https://images.pexels.com/photos/594619/pexels-photo-594619.jpeg", description: "Floral hibiscus iced tea." },
    { name: "Blueberry Juice", price: 100, discount: 10, image: "https://images.pexels.com/photos/594620/pexels-photo-594620.jpeg", description: "Antioxidant-rich blueberry juice." },
    { name: "Cherry Juice", price: 110, discount: 5, image: "https://images.pexels.com/photos/594621/pexels-photo-594621.jpeg", description: "Sweet cherry juice for sipping." },
    { name: "Soda Water", price: 40, discount: 15, image: "https://images.pexels.com/photos/594622/pexels-photo-594622.jpeg", description: "Plain soda water for mixers." },
    { name: "Lemonade", price: 50, discount: 20, image: "https://images.pexels.com/photos/594623/pexels-photo-594623.jpeg", description: "Classic refreshing lemonade." },
    { name: "Raspberry Soda", price: 55, discount: 10, image: "https://images.pexels.com/photos/594624/pexels-photo-594624.jpeg", description: "Fizzy raspberry-flavored soda." },
    { name: "Mango Lassi", price: 70, discount: 15, image: "https://images.pexels.com/photos/594625/pexels-photo-594625.jpeg", description: "Creamy mango yogurt drink." },
    { name: "Rose Lemonade", price: 60, discount: 10, image: "https://images.pexels.com/photos/594626/pexels-photo-594626.jpeg", description: "Floral rose-flavored lemonade." },
  ],
  snacks: [
    { name: "Potato Chips", price: 30, discount: 10, image: "https://images.pexels.com/photos/594627/pexels-photo-594627.jpeg", description: "Classic salted potato chips." },
    { name: "Cheese Puffs", price: 35, discount: 15, image: "https://images.pexels.com/photos/594628/pexels-photo-594628.jpeg", description: "Crunchy cheese-flavored puffs." },
    { name: "Tortilla Chips", price: 40, discount: 5, image: "https://images.pexels.com/photos/594629/pexels-photo-594629.jpeg", description: "Corn tortilla chips for dipping." },
    { name: "Popcorn", price: 25, discount: 10, image: "https://images.pexels.com/photos/594630/pexels-photo-594630.jpeg", description: "Buttered popcorn for movie nights." },
    { name: "Pretzels", price: 30, discount: 15, image: "https://images.pexels.com/photos/594631/pexels-photo-594631.jpeg", description: "Salty pretzels for snacking." },
    { name: "Veggie Chips", price: 45, discount: 20, image: "https://images.pexels.com/photos/594632/pexels-photo-594632.jpeg", description: "Mixed vegetable chips for health." },
    { name: "Rice Crackers", price: 35, discount: 10, image: "https://images.pexels.com/photos/594633/pexels-photo-594633.jpeg", description: "Light rice crackers with soy flavor." },
    { name: "Peanut Brittle", price: 50, discount: 15, image: "https://images.pexels.com/photos/594634/pexels-photo-594634.jpeg", description: "Sweet and crunchy peanut brittle." },
    { name: "Granola Bars", price: 40, discount: 5, image: "https://images.pexels.com/photos/594635/pexels-photo-594635.jpeg", description: "Chewy granola bars with nuts." },
    { name: "Trail Mix", price: 60, discount: 10, image: "https://images.pexels.com/photos/594636/pexels-photo-594636.jpeg", description: "Nut and fruit trail mix." },
    { name: "Corn Nuts", price: 30, discount: 15, image: "https://images.pexels.com/photos/594637/pexels-photo-594637.jpeg", description: "Crunchy roasted corn nuts." },
    { name: "Pita Chips", price: 35, discount: 20, image: "https://images.pexels.com/photos/594638/pexels-photo-594638.jpeg", description: "Baked pita chips for hummus." },
    { name: "Cheese Crackers", price: 40, discount: 10, image: "https://images.pexels.com/photos/594639/pexels-photo-594639.jpeg", description: "Savory cheese-flavored crackers." },
    { name: "Wasabi Peas", price: 45, discount: 15, image: "https://images.pexels.com/photos/594640/pexels-photo-594640.jpeg", description: "Spicy wasabi-coated peas." },
    { name: "Fruit Leather", price: 30, discount: 10, image: "https://images.pexels.com/photos/594641/pexels-photo-594641.jpeg", description: "Chewy fruit leather strips." },
    { name: "Seaweed Snacks", price: 50, discount: 5, image: "https://images.pexels.com/photos/594642/pexels-photo-594642.jpeg", description: "Crispy roasted seaweed sheets." },
    { name: "Chickpea Snacks", price: 40, discount: 15, image: "https://images.pexels.com/photos/594643/pexels-photo-594643.jpeg", description: "Roasted chickpeas with spices." },
    { name: "Energy Balls", price: 60, discount: 20, image: "https://images.pexels.com/photos/594644/pexels-photo-594644.jpeg", description: "Nut-based energy bites." },
    { name: "Baked Lentil Chips", price: 45, discount: 10, image: "https://images.pexels.com/photos/594645/pexels-photo-594645.jpeg", description: "Protein-rich lentil chips." },
    { name: "Coconut Chips", price: 50, discount: 15, image: "https://images.pexels.com/photos/594646/pexels-photo-594646.jpeg", description: "Toasted coconut chips for snacking." },
    { name: "Salsa Dip", price: 70, discount: 10, image: "https://images.pexels.com/photos/594647/pexels-photo-594647.jpeg", description: "Spicy salsa for chip dipping." },
    { name: "Hummus Dip", price: 60, discount: 15, image: "https://images.pexels.com/photos/594648/pexels-photo-594648.jpeg", description: "Creamy hummus for veggie sticks." },
    { name: "Guacamole Dip", price: 80, discount: 20, image: "https://images.pexels.com/photos/594649/pexels-photo-594649.jpeg", description: "Fresh guacamole for tortilla chips." },
    { name: "Nut Butter Pack", price: 50, discount: 10, image: "https://images.pexels.com/photos/594650/pexels-photo-594650.jpeg", description: "Single-serve almond butter packs." },
    { name: "Beef Jerky", price: 100, discount: 15, image: "https://images.pexels.com/photos/594651/pexels-photo-594651.jpeg", description: "High-protein beef jerky." },
    { name: "Turkey Jerky", price: 90, discount: 10, image: "https://images.pexels.com/photos/594652/pexels-photo-594652.jpeg", description: "Lean turkey jerky for snacking." },
    { name: "Kale Chips", price: 50, discount: 5, image: "https://images.pexels.com/photos/594653/pexels-photo-594653.jpeg", description: "Baked kale chips with sea salt." },
    { name: "Popped Sorghum", price: 40, discount: 15, image: "https://images.pexels.com/photos/594654/pexels-photo-594654.jpeg", description: "Light popped sorghum snacks." },
    { name: "Banana Chips", price: 35, discount: 10, image: "https://images.pexels.com/photos/594655/pexels-photo-594655.jpeg", description: "Sweet fried banana chips." },
    { name: "Mixed Nut Pack", price: 70, discount: 20, image: "https://images.pexels.com/photos/594656/pexels-photo-594656.jpeg", description: "Assorted roasted nuts." },
    { name: "Dried Edamame", price: 45, discount: 10, image: "https://images.pexels.com/photos/594657/pexels-photo-594657.jpeg", description: "Crunchy roasted edamame." },
    { name: "Protein Bar", price: 60, discount: 15, image: "https://images.pexels.com/photos/594658/pexels-photo-594658.jpeg", description: "High-protein snack bar." },
    { name: "Oatmeal Bites", price: 50, discount: 10, image: "https://images.pexels.com/photos/594659/pexels-photo-594659.jpeg", description: "Bite-sized oatmeal snacks." },
    { name: "Quinoa Puffs", price: 40, discount: 5, image: "https://images.pexels.com/photos/594660/pexels-photo-594660.jpeg", description: "Light quinoa puffs with spices." },
    { name: "Spicy Cashews", price: 80, discount: 15, image: "https://images.pexels.com/photos/594661/pexels-photo-594661.jpeg", description: "Chili-roasted cashews." },
    { name: "Almond Clusters", price: 70, discount: 20, image: "https://images.pexels.com/photos/594662/pexels-photo-594662.jpeg", description: "Sweet almond clusters with honey." },
    { name: "Pea Protein Chips", price: 45, discount: 10, image: "https://images.pexels.com/photos/594663/pexels-photo-594663.jpeg", description: "High-protein pea chips." },
    { name: "Sweet Potato Chips", price: 50, discount: 15, image: "https://images.pexels.com/photos/594664/pexels-photo-594664.jpeg", description: "Crispy sweet potato chips." },
    { name: "Apple Chips", price: 40, discount: 10, image: "https://images.pexels.com/photos/594665/pexels-photo-594665.jpeg", description: "Baked apple chips for snacking." },
    { name: "Mushroom Jerky", price: 90, discount: 15, image: "https://images.pexels.com/photos/594666/pexels-photo-594666.jpeg", description: "Vegan mushroom jerky with spices." },
  ],



  };


   const categoryBanners = {
    fruits: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    vegetables: "https://images.unsplash.com/photo-1706784694581-4c6e001c3c37?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    grains: "https://plus.unsplash.com/premium_photo-1705085602290-40206a057387?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    oils: "https://images.squarespace-cdn.com/content/v1/5374f73ee4b0ccfe943858f6/1513122390284-5DJBSOHC0KJA4U3551O8/Cooking+Oils",
    dryfruits: "https://media.gettyimages.com/id/175544379/photo/snacks.jpg?s=612x612&w=0&k=20&c=Bt9XnMxBL4T2wPK5jkWX5aMu3ddRpdP70ALByybie1A=",
    meat: "https://media.istockphoto.com/id/923692030/photo/variety-of-raw-black-angus-prime-meat-steaks.jpg?s=612x612&w=0&k=20&c=QWs-aEHfLMF74kWVHt5srGB-1noX-st5I3Ntg-kAJ9s=",
    electronics: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg",
    accessories: "https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg",
    toys: "https://images.pexels.com/photos/12211/pexels-photo-12211.jpeg",
    milkproducts: "https://static.vecteezy.com/system/resources/previews/040/561/318/non_2x/ai-generated-assorted-dairy-products-on-table-free-photo.jpg",
    cooldrinks: "https://images.unsplash.com/photo-1624282883502-90d99a7818c5?q=80&w=870&auto=format&fit=crop",
   snacks: "https://images.unsplash.com/photo-1608039661191-4f7b2f0e312b?q=80&w=870&auto=format&fit=crop",

  };








  const items = categoriesData[category] || [];
  return (
    <div className="mt-20">
      <button onClick={onBack} className="mb-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200">Back to Categories</button>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>



      <div className="category-banner mb-6">
        <img
          src={categoryBanners[category]}
          alt={`${category} banner`}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>







      <div className="product-grid">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.name}
            image={item.image}
            price={item.price}
            discount={item.discount}
            description={item.description}
            onAddToCart={() => addToCart(item, setCurrentPage)}
            onBuyNow={() => {
              const order = {
                ...item,
                id: `${item.name}_${Date.now()}`,
                quantity: 1,
                orderDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
              };
              const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
              localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));
              setCurrentPage('orders');
              alert('Order placed successfully!');
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Orders = ({ onBack }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(storedOrders);
  }, []);

  return (
    <div className="mt-20">
      <button
        onClick={onBack}
        className="mb-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
      >
        Back to Home
      </button>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-600">You have no orders yet.</p>
      ) : (
        <div className="orders-container">
          {orders.map((order) => (
            <div key={order.id} className="cart-item">
              <img src={order.image} alt={order.name} />
              <div className="cart-item-details">
                <h3>{order.name}</h3>
                <p className="text-green-600 font-bold">
                  ₹{(order.price * (order.quantity || 1)).toFixed(2)}
                  {order.discount && (
                    <span className="line-through text-red-500 text-sm ml-2">
                      ₹{(((order.price * 100) / (100 - order.discount)) * (order.quantity || 1)).toFixed(2)}
                    </span>
                  )}
                </p>
                {order.discount && (
                  <p className="text-sm text-yellow-600">{order.discount}% off</p>
                )}
                <p className="text-sm text-gray-600">Quantity: {order.quantity || 1}</p>
                <p className="text-sm text-gray-600">Ordered on: {order.orderDate}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Cart = ({ cartItems, onBack, setCartCount, coupon, setCoupon, setCartItems, setCurrentPage }) => {
  const deliveryCharge = 50;

  const applyCoupon = () => {
    if (coupon === 'siddiq10') {
      setCartItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          price: item.price * 0.9,
        }))
      );
      setCoupon('');
      alert('Coupon applied! 10% discount added.');
    } else {
      alert('Invalid coupon code.');
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );
  const total = subtotal + deliveryCharge;

  useEffect(() => {
    setCartCount(cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0));
  }, [cartItems, setCartCount]);

  return (
    <div className="mt-20 cart-container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">Shopping Cart</h1>
        <button
          onClick={onBack}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Back to Home
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty. Start shopping now!</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item flex flex-col sm:flex-row items-start sm:items-center p-4 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4" />
                <div className="cart-item-details flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{item.name}</h3>
                  <p className="text-green-600 font-bold">
                    ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                    {item.discount && (
                      <span className="line-through text-red-500 text-sm ml-2">
                        ₹{(((item.price * 100) / (100 - item.discount)) * (item.quantity || 1)).toFixed(2)}
                      </span>
                    )}
                  </p>
                  {item.discount && (
                    <p className="text-sm text-yellow-600">{item.discount}% off</p>
                  )}
                  <div className="flex items-center mt-3 space-x-4">
                    <label className="text-gray-600 dark:text-gray-300">Quantity:</label>
                    <select
                      value={item.quantity || 1}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                    >
                      {[0, 1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          {qty === 0 ? 'Remove' : qty}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => updateQuantity(item.id, 0)}
                      className="text-red-600 hover:underline dark:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-200">Order Summary</h2>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300">
                Subtotal ({cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)} items): ₹{subtotal.toFixed(2)}
              </p>
              <p className="text-gray-600 dark:text-gray-300">Delivery Charge: ₹{deliveryCharge.toFixed(2)}</p>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">Total: ₹{total.toFixed(2)}</p>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              />
              <button
                onClick={applyCoupon}
                className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Apply Coupon
              </button>
              <button
                onClick={() => {
                  const orders = cartItems.map((item) => ({
                    ...item,
                    orderDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                  }));
                  const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
                  localStorage.setItem('orders', JSON.stringify([...existingOrders, ...orders]));
                  setCartItems([]);
                  setCartCount(0);
                  setCurrentPage('orders');
                  alert('Order placed successfully!');
                }}
                className="mt-3 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};








const SpecialSectionDetail = ({ section, onBack, products, addToCart, setCurrentPage }) => {
  return (
    <div className="mt-20 max-w-7xl mx-auto p-4">
      <button
        onClick={onBack}
        className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
      >
        Back to Home
      </button>
      <h2 className="text-3xl font-bold mb-6">{section}</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.name}
            image={product.image}
            price={product.price}
            discount={product.discount}
            description={product.description}
            onAddToCart={() => addToCart(product, setCurrentPage)}
            onBuyNow={() => {
              const order = {
                ...product,
                id: `${product.name}_${Date.now()}`,
                quantity: 1,
                orderDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
              };
              const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
              localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));
              setCurrentPage('orders');
              alert('Order placed successfully!');
            }}
          />
        ))}
      </div>
    </div>
  );
};

const specialSectionsData = {
  hotSales: [
    { name: "iPhone 14 Pro", price: 129900, discount: 10, image: "https://iplanet.one/cdn/shop/files/r1598_Silver_PDP_Image_Position-1b_Avail__en-IN_c9439779-65e4-4ad4-aa97-fafe4be9f6c8.jpg?v=1691141925&width=823", description: "Latest iPhone with A16 Bionic chip." },
    { name: "Samsung Galaxy Watch 5", price: 27999, discount: 15, image: "https://m.media-amazon.com/images/I/21JgtoI8+4L._SX300_SY300_.jpg", description: "Smartwatch with advanced health tracking." },
    { name: "Lay's Classic Chips", price: 50, discount: 20, image: "https://m.media-amazon.com/images/I/71Ge9n3gmYL.jpg", description: "Crispy potato chips for snacking." },
    { name: "Sony WH-1000XM5 Headphones", price: 34990, discount: 12, image: "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg", description: "Noise-canceling wireless headphones." },
    { name: "Cadbury Dairy Milk", price: 100, discount: 10, image: "https://m.media-amazon.com/images/I/61Iy5XrzC-L.jpg", description: "Creamy milk chocolate bar." },
    { name: "OnePlus Nord 3", price: 33999, discount: 15, image: "https://cdnmedia.placewellretail.com/pub/media/catalog/product/cache/d2f155c8ae3423b25125c336aa39579e/v/i/vitamin-spec-green.webp", description: "5G smartphone with fast charging." },
    { name: "Fitbit Charge 5", price: 14999, discount: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93kpcgGVWJFX2OjXco2DRs3f14P0HiZuCGA&s", description: "Fitness tracker with heart rate monitor." },
    { name: "Maggi Noodles", price: 25, discount: 5, image: "https://velocitymarketplace.in/wp-content/uploads/2024/08/8b6d83fb56ddb329d4656168533d6816.png", description: "Quick-cook spicy noodles." },
    { name: "JBL Flip 6 Speaker", price: 12999, discount: 20, image: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw593abf39/2_JBL_FLIP6_3_4_RIGHT_BLACK_30195_x1.png?sw=535&sh=535", description: "Portable Bluetooth speaker with bass." },
    { name: "Amul Butter", price: 60, discount: 10, image: "https://cdn.grofers.com/app/assets/products/sliding_images/jpeg/7514beed-37f7-4c8c-b50a-4b39842009b8.jpg?ts=1707312315", description: "Creamy butter for breakfast." },
    { name: "Xiaomi 13 Pro", price: 79999, discount: 15, image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/03/xiaomi-13-pro-image-1678447794.jpg", description: "Premium smartphone with Leica camera." },
    { name: "Apple AirPods Pro 2", price: 24900, discount: 10, image: "https://www.apple.com/v/airpods-pro/m/images/meta/og__eui2mpgzwyaa_overview.png", description: "Wireless earbuds with spatial audio." },
    { name: "Pringles Original", price: 150, discount: 15, image: "https://tceurope.nl/cdn/shop/files/Pringles_Original_5.82OZ_165G.png?v=1718881652&width=1946", description: "Stackable potato chips for parties." },
    { name: "Fossil Gen 6 Smartwatch", price: 23995, discount: 20, image: "https://m.media-amazon.com/images/I/71Vqggkd8hL._UF1000,1000_QL80_.jpg", description: "Stylish smartwatch with Wear OS." },
    { name: "Haldiram's Bhujia", price: 80, discount: 10, image: "https://ik.imagekit.io/wlfr/wellness/images/products/369643-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end", description: "Spicy Indian snack mix." },
    { name: "Samsung Galaxy S23", price: 74999, discount: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj3_Oz7Rej9BhXrgGIVBfR2qltvt1ZWC-YQ&s", description: "Flagship phone with Snapdragon 8 Gen 2." },
    { name: "Bose SoundLink Mini", price: 18990, discount: 15, image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_mini_ii/product_silo_images/soundlink_mini_II_carbon_EC_03.psd/jcr:content/renditions/cq5dam.web.1280.1280.jpeg", description: "Compact speaker with deep bass." },
    { name: "Kurkure Masala Munch", price: 30, discount: 10, image: "https://quickpickkangra.com/wp-content/uploads/2024/09/kurkure.jpg", description: "Crunchy corn puffs with spices." },
    { name: "Garmin Instinct 2", price: 31990, discount: 10, image: "https://m.media-amazon.com/images/I/61Z2H0MspJL._UF1000,1000_QL80_.jpg", description: "Rugged smartwatch for outdoor use." },
    { name: "Nestlé KitKat", price: 40, discount: 15, image: "https://ik.imagekit.io/wlfr/wellness/images/products/208487-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end", description: "Wafer chocolate bar for breaks." },
  ],
  trendingNow: [
    { name: "Google Pixel 8", price: 75999, discount: 10, image: "https://www.dxomark.com/wp-content/uploads/medias/post-157488/Google-Pixel-8-Pro-Yoast-image-packshot-review.jpg", description: "AI-powered smartphone with great camera." },
    { name: "Apple Watch Series 9", price: 41900, discount: 12, image: "https://m.media-amazon.com/images/I/61+M2eJpNvL._SY355_.jpg", description: "Advanced smartwatch with ECG." },
    { name: "Doritos Nacho Cheese", price: 70, discount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpaBLx_PrnH7y-qJT1jZBvtSbcyLpWxtnDWg&s", description: "Bold nacho cheese flavored chips." },
    { name: "Sony PlayStation 5", price: 49990, discount: 10, image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1712137796/Croma%20Assets/Gaming/Gaming%20Consoles/Images/305985_ilpfe3.png?tr=w-360", description: "Next-gen gaming console with 4K." },
    { name: "Ferrero Rocher", price: 500, discount: 20, image: "https://deq64r0ss2hgl.cloudfront.net/images/opt/products_gallery_images/ferrero-rocher-premium-24pcs-300g-57048071985417.jpg?v=8787", description: "Premium hazelnut chocolates." },
    { name: "Realme GT 6", price: 40999, discount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFaZTYJkKL7kQdvBFLXF0WMHQF_sekq02kw&s", description: "High-performance 5G smartphone." },
    { name: "Fitbit Versa 4", price: 22999, discount: 10, image: "https://m.media-amazon.com/images/I/61jUiN1bCrL._UF1000,1000_QL80_.jpg", description: "Sleek fitness tracker with GPS." },
    { name: "Balaji Wafers", price: 35, discount: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-21q_q2xJE50OSYCNMqd8u8gdBhnY_h5J5A&s", description: "Tasty potato wafers with spices." },
    { name: "JBL Tune 760NC", price: 7999, discount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0F-NHaxKNqpyTsm2p2qwCrLam_lOQ3ITwA&s", description: "Wireless headphones with ANC." },
    { name: "Amul Cheese Slices", price: 120, discount: 10, image: "https://m.media-amazon.com/images/I/71vM-znOuDL.jpg", description: "Creamy cheese slices for sandwiches." },
    { name: "Poco F6", price: 29999, discount: 12, image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202406/6668e9abc7ee6-poco-f6-5g-121954533-16x9.jpg", description: "Budget-friendly 5G phone." },
    { name: "Samsung Galaxy Buds 2", price: 11999, discount: 15, image: "https://i.rtings.com/assets/products/Mdj6H2Ow/samsung-galaxy-buds2-pro-true-wireless/design-medium.jpg?format=auto", description: "Wireless earbuds with clear sound." },
    { name: "Bikano Namkeen", price: 90, discount: 10, image: "https://m.media-amazon.com/images/I/61VPzj5dBML._UF1000,1000_QL80_.jpg", description: "Savory Indian snack mix." },
    { name: "Huawei Watch GT 4", price: 24999, discount: 20, image: "https://www.gizmochina.com/wp-content/uploads/2023/09/Huawei-Watch-GT-4-500x500.jpg?x70461", description: "Elegant smartwatch with long battery." },
    { name: "Snickers Bar", price: 50, discount: 15, image: "https://www.snickers.co.uk/sites/g/files/fnmzdf751/files/migrate-product-files/upjxw9mxuydktugrpav0.png", description: "Peanut-filled chocolate bar." },
    { name: "Asus ROG Phone 8", price: 79999, discount: 10, image: "https://images.cnbctv18.com/wp-content/uploads/2024/03/asus-rog-phone-8-pro-edition.jpeg", description: "Gaming phone with 165Hz display." },
    { name: "Anker Soundcore Q30", price: 6999, discount: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSETFrOvKbQCpyokT-6530vcPXdPerUe7_PA&s", description: "Affordable ANC headphones." },
    { name: "Parle-G Biscuits", price: 20, discount: 5, image: "https://www.apnasupermarkt.com/cdn/shop/files/Parle-G-Gluco-Biscuits-80gm_600x_773791c0-7b5b-48a5-98d0-36241a028d56.webp?v=1735165053", description: "Classic biscuits for tea time." },
    { name: "Garmin Venu 3", price: 49990, discount: 15, image: "https://www.garmin.com.sg/m/sg/g/products/venu-3s-ivory-cf-lg.jpg", description: "Smartwatch with AMOLED display." },
    { name: "Hershey's Kisses", price: 200, discount: 10, image: "https://swagilo.com/wp-content/uploads/2023/10/Hersheys-Kisses.jpg", description: "Bite-sized milk chocolates." },
  ],
  exclusiveDeals: [
    { name: "iPhone 15", price: 79900, discount: 10, image: "https://m.media-amazon.com/images/I/31Q14qzdoZL._SX300_SY300_QL70_FMwebp_.jpg", description: "New iPhone with USB-C charging." },
    { name: "Samsung Galaxy Watch 6", price: 32999, discount: 15, image: "https://m.media-amazon.com/images/I/71sRBqqrOpL._SY450_.jpg", description: "Smartwatch with sleep tracking." },
    { name: "Cheetos Puffs", price: 60, discount: 20, image: "https://m.media-amazon.com/images/I/81B5IBWSYiL._SX522_.jpg", description: "Cheesy puffs for snacking." },
    { name: "Bose QuietComfort 45", price: 29990, discount: 12, image: "https://avshack.in/cdn/shop/files/cq5dam04_9094fbf2-edf8-4d51-b3cf-5278942498de.jpg?v=1689658292&width=160", description: "Premium noise-canceling headphones." },
    { name: "Lindor Chocolates", price: 600, discount: 15, image: "https://www.foodstories.shop/_next/image/?url=https%3A%2F%2Ffoodstories-backend-production.s3.ap-south-1.amazonaws.com%2Ffs_%2Fmedia%2Fcatalog%2Fproduct%2Fl%2Fi%2Flindt-lindor-white-200g-1_iqgmtwfqxtapzad6.jpg&w=3840&q=75", description: "Smooth Swiss chocolate truffles." },
    { name: "Vivo X100", price: 69999, discount: 10, image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/vivo-x100-060811705-16x9_0.jpg?VersionId=PLsMGcUxzYNLaCiXzeqUGepoUtqrLBQ8&size=690:388", description: "Smartphone with advanced camera." },
    { name: "Fitbit Inspire 3", price: 9999, discount: 10, image: "https://media.assettype.com/evoindia/2022-12/e0f6e693-3751-4e21-a4f4-116bd88511be/Fitbit_Inspire_3_hero.jpg", description: "Compact fitness tracker." },
    { name: "Haldiram's Soan Papdi", price: 150, discount: 15, image: "https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/s/o/soan-papdi-250g-front.jpg", description: "Traditional Indian sweet." },
    { name: "Sony WF-1000XM5 Earbuds", price: 24990, discount: 20, image: "https://sm.pcmag.com/pcmag_me/review/s/sony-wf-10/sony-wf-1000xm5_3hrs.jpg", description: "Wireless earbuds with ANC." },
    { name: "Amul Dark Chocolate", price: 120, discount: 10, image: "https://t20auctions.com/wp-content/uploads/2024/10/Amul-55-Cocoa-Dark-1.jpg", description: "Rich dark chocolate bar." },
    { name: "Oppo Find X7", price: 64999, discount: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTlA7ZjXF8-KwM9F0lGroRoTjrOeScSbQVQ&s", description: "Sleek 5G phone with fast charging." },
    { name: "JBL Charge 5", price: 15999, discount: 15, image: "https://m.media-amazon.com/images/I/71N8si9jomL._UF1000,1000_QL80_.jpg", description: "Portable speaker with power bank." },
    { name: "Bingo Mad Angles", price: 40, discount: 10, image: "https://homedelivery.ramachandran.in/media/catalog/product/cache/04c5c5c4276fe9dba74400abc896c29c/4/1/411416a001008.jpeg", description: "Crispy triangular snack." },
    { name: "Tissot Le Locle Watch", price: 39990, discount: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQOWr3nVUgvI2-CSGmhLuyGU5v-GYFa86MA&s", description: "Classic Swiss automatic watch." },
    { name: "Munchies Snack Mix", price: 80, discount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGBEwTKKUpU-aq-Y4jm4_rvrW0kUEwftsaQ&s", description: "Mixed savory snack pack." },
    { name: "Motorola Edge 50 Pro", price: 54999, discount: 10, image: "https://motorolaroe.vtexassets.com/arquivos/ids/157969/motorola-edge-50-pro-PDP-ecomm-render-color5-5-.png?v=638653952985730000", description: "5G phone with OLED display." },
    { name: "Anker PowerCore 10000", price: 2499, discount: 12, image: "https://files.vplak.com/images/anker/POWERCORE-10000/black/image-1.jpg", description: "Compact 10000mAh power bank." },
    { name: "Parle Hide & Seek", price: 50, discount: 10, image: "https://m.media-amazon.com/images/I/713ZERAwHEL.jpg", description: "Choco-chip biscuits for tea." },
    { name: "Casio G-Shock", price: 9995, discount: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg12tgm0VLU9Itl31DLLk97SETctK6Fln0rw&s", description: "Durable sports watch." },
    { name: "Mars Bar", price: 60, discount: 10, image: "https://www.nutshouse.in/wp-content/uploads/2022/05/208776.jpg", description: "Caramel-filled chocolate bar." },
  ],
  specialOffers: [
    { name: "Samsung Galaxy Z Fold 6", price: 164999, discount: 10, image: "https://m.media-amazon.com/images/I/31gL5t+5gUL._SY300_SX300_.jpg", description: "Foldable phone with multitasking." },
    { name: "Apple Watch Ultra 2", price: 89900, discount: 15, image: "https://m.media-amazon.com/images/I/41qU2vJ79mL._SX300_SY300_QL70_FMwebp_.jpg", description: "Rugged smartwatch for adventures." },
    { name: "Lays Magic Masala", price: 50, discount: 20, image: "https://m.media-amazon.com/images/I/71J93R3+TkL._SX522_.jpg", description: "Spicy masala flavored chips." },
    { name: "Sony Bravia 55-inch 4K TV", price: 69990, discount: 12, image: "https://m.media-amazon.com/images/I/41o2t9sgo8L._SY300_SX300_QL70_FMwebp_.jpg", description: "Smart TV with vibrant display." },
    { name: "Cadbury Celebrations", price: 300, discount: 15, image: "https://m.media-amazon.com/images/I/61-+g39vzcL._SX522_PIbundle-2,TopRight,0,0_AA522SH20_.jpg", description: "Assorted chocolates gift pack." },
    { name: "iQOO Neo 9 Pro", price: 36999, discount: 10, image: "https://www.livemint.com/lm-img/img/2024/02/19/600x338/GD7_FPOWIAAhgGI_1705397167761_1708333989110.jpg", description: "Gaming phone with 144Hz display." },
    { name: "Fitbit Luxe", price: 12999, discount: 10, image: "https://m.media-amazon.com/images/I/41vTvVS4gKL._SX300_SY300_QL70_FMwebp_.jpg", description: "Stylish fitness tracker for women." },
    { name: "Haldiram's Rasgulla", price: 200, discount: 15, image: "https://thedailybazaar.com/wp-content/uploads/2024/02/Haldiram-s-1kg-Rasgulla.jpg", description: "Soft and spongy Indian sweet." },
    { name: "Bose Soundbar 700", price: 59990, discount: 20, image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_soundbar_700_pkg/product_silo_images/BSS700_2x1_more_everything.psd/jcr:content/renditions/cq5dam.web.320.320.jpeg", description: "Premium soundbar for home theater." },
    { name: "Amul Ice Cream", price: 150, discount: 10, image: "https://m.media-amazon.com/images/I/41Uk7GBITCS._SY300_SX300_QL70_FMwebp_.jpg", description: "Creamy vanilla ice cream tub." },
    { name: "OnePlus 12", price: 64999, discount: 12, image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202402/65c06d6333d11-oneplus-12-5g-is-launched-in-india-at-a-starting-price-of-rs-64-999-050849768-16x9.jpg?size=1280:720", description: "Flagship phone with Hasselblad camera." },
    { name: "Sony WF-C510/B Earbuds", price: 4990, discount: 15, image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg", description: "Affordable wireless earbuds." },
    { name: "Kurkure Green Chutney", price: 30, discount: 10, image: "https://m.media-amazon.com/images/I/71kOfSi3VjL._SX522_.jpg", description: "Tangy green chutney snack." },
    { name: "Seiko Prospex Watch", price: 49990, discount: 20, image: "https://watchfactory.in/cdn/shop/products/261.1_361768b4-1d0b-4005-a61d-642cb3d98524.jpg?v=1711796350&width=1080", description: "Diver’s watch with high durability." },
    { name: "Bikaneri Bhujia", price: 90, discount: 15, image: "https://m.media-amazon.com/images/I/81K6gzmxl9L._SX522_.jpg", description: "Spicy Indian namkeen." },
    { name: "Poco X6 Pro", price: 26999, discount: 10, image: "https://static.digit.in/DSC05281-scaled.jpg", description: "Budget 5G phone with AMOLED." },
    { name: "JBL Live 660NC", price: 13999, discount: 12, image: "https://www.soundguys.com/wp-content/uploads/2023/02/JBL-Live-660NC-flat-shot-scaled.jpg", description: "Wireless headphones with long battery." },
    { name: "Hide & Seek Black Bourbon", price: 60, discount: 10, image: "https://m.media-amazon.com/images/I/71aIffG-kCL.jpg", description: "Chocolate cream biscuits." },
    { name: "Citizen Eco-Drive Watch", price: 29990, discount: 15, image: "https://hodinkee.imgix.net/uploads/images/1490135196734-4ust1qtva2oj69ps-276587ba39cc293654a17d6012cf5266/citizen.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12", description: "Solar-powered elegant watch." },
    { name: "Milkybar", price: 40, discount: 10, image: "https://m.media-amazon.com/images/I/41p8QHPcuWL._UF1000,1000_QL80_.jpg", description: "Creamy white chocolate bar." },
  ],
};


 const CarouselCard = ({ title, image, onClick, style }) => {
      return (
        <div className="carousel-card" onClick={onClick} style={{ ...style, cursor: 'pointer' }}>
          <img src={image} alt={title} className="carousel-card-img" />
          <h3 className="mt-3 text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        </div>
      );
    };



const Home = ({ onNavigate, addToCart, setCurrentPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const categories = [
    { name: "Fruits", image: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/healing_foods_slideshow/1800ss_getty_rf_apples.jpg?resize=750px:*&output-quality=75" },
    { name: "Vegetables", image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg" },
    { name: "Grains", image: "https://images.pexels.com/photos/4110253/pexels-photo-4110253.jpeg" },
    { name: "Oils", image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg" },
    { name: "dryfruits", image: "https://images.pexels.com/photos/4499219/pexels-photo-4499219.jpeg" },
    { name: "Meat", image: "https://images.pexels.com/photos/29095933/pexels-photo-29095933.jpeg" },
    { name: "Electronics", image: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg" },
    { name: "Accessories", image: "https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg" },
    { name: "Toys", image: "https://images.pexels.com/photos/12211/pexels-photo-12211.jpeg" },
    { name: "milkproducts" , image: "https://images.squarespace-cdn.com/content/v1/638d8044b6fc77648ebcedba/f205c9f1-7e48-4c08-96bf-c659f878dd00/5+Tips+for+Buying+Health+Dairy+Products-f.jpg"},
    { name: "cooldrinks", image: "https://tiimg.tistatic.com/fp/1/007/193/cold-drink-delicious-taste-with-meals-100ml-300ml-500ml-1l-1-25l-2l--403.jpg" },
    { name: "snacks", image: "https://www.eatthis.com/wp-content/uploads/sites/4/2024/06/unhealthiest-snacks-on-the-planet.jpg?quality=82&strip=1" },
   
    
  ];

  
  // Duplicate categories for infinite looping
  const extendedCategories = [...categories, ...categories, ...categories];
  const totalItems = categories.length;
  const initialIndex = totalItems; // Start in the middle set of categories
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    // Reset to initial index on mount
    setCurrentIndex(initialIndex);
  }, []);

 

   const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < totalItems) {
        // Jump to the end of the middle set without transition
        setTimeout(() => {
          setTransitionEnabled(false);
          setCurrentIndex(newIndex + totalItems);
          setTimeout(() => setTransitionEnabled(true), 0);
        }, 500); // Match transition duration
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= totalItems * 2) {
        // Jump to the start of the middle set without transition
        setTimeout(() => {
          setTransitionEnabled(false);
          setCurrentIndex(newIndex - totalItems);
          setTimeout(() => setTransitionEnabled(true), 0);
        }, 500); // Match transition duration
      }
      return newIndex;
    });
  };


  

  if (selectedCategory) {
    return <CategoryDetail category={selectedCategory} onBack={() => setSelectedCategory(null)} addToCart={addToCart} setCurrentPage={setCurrentPage} />;
  }

  if (selectedSection) {
    const sectionProducts = {
      'hot sales': specialSectionsData.hotSales,
      'exclusive deals': specialSectionsData.exclusiveDeals,
      'trending now': specialSectionsData.trendingNow,
      'special offers': specialSectionsData.specialOffers,
    }[selectedSection.toLowerCase()];
    return <SpecialSectionDetail section={selectedSection} onBack={() => setSelectedSection(null)} products={sectionProducts} addToCart={addToCart} setCurrentPage={setCurrentPage} />;
  }




  return (
    <div className="mt-20">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Welcome to E-Commerce Hub</h1>
      <p className="text-gray-600 text-center mb-8">Discover the freshest groceries, trendy fashion, and exclusive deals delivered to your doorstep in minutes! Current time: 02:03 PM IST, Thursday, July 10, 2025.</p>
      <div className="category-carousel relative">
        <button className="carousel-arrow left" onClick={handlePrev}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <div className="category-carousel-inner" style={{ 
          transform: `translateX(-${currentIndex * 280}px)`, 
          transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none',
          display: 'flex',
          width: `${extendedCategories.length * 280}px`, // Dynamic width based on number of items
        }}>
          {extendedCategories.map((category, index) => (
            <Card
              key={`${category.name}-${index}`}
              title={category.name}
              image={category.image}
              onClick={() => setSelectedCategory(category.name.toLowerCase())}
              style={{ 
                width: '300px', 
                flexShrink: 0, // Prevent cards from shrinking
                marginRight: '0px', // Remove gaps between cards
                height: '360px' // Consistent height
              }}
            />
          ))}
        </div>
        <button className="carousel-arrow right" onClick={handleNext}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <div className="mt-12 sales-section">
        <h2 className="text-3xl font-bold">Hot Sales</h2>
        <p className="mt-4 text-lg">Grab up to 50% off on selected items! Offer valid until July 10, 2025. Save ₹500 on orders above ₹2000.</p>
        <div className="product-grid">
          {specialSectionsData.hotSales.slice(0, 4).map((product, index) => (
            <Card
              key={index}
              title={product.name}
              image={product.image}
              price={product.price}
              discount={product.discount}
              description={product.description}
            />
          ))}
        </div>
        <button onClick={() => setSelectedSection('Hot Sales')} className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">Shop Now</button>
      </div>
      <div className="mt-12 deals-section">
        <h2 className="text-3xl font-bold">Exclusive Deals</h2>
        <p className="mt-4 text-lg">Unlock special discounts with every purchase today! Limited stock. Get 20% off on electronics.</p>
        <div className="product-grid">
          {specialSectionsData.exclusiveDeals.slice(0, 4).map((product, index) => (
            <Card
              key={index}
              title={product.name}
              image={product.image}
              price={product.price}
              discount={product.discount}
              description={product.description}
            />
          ))}
        </div>
        <button onClick={() => setSelectedSection('Exclusive Deals')} className="mt-6 bg-white text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">Check Deals</button>
      </div>
      <div className="mt-12 trending-section">
        <h2 className="text-3xl font-bold">Trending Now</h2>
        <p className="mt-4 text-lg">Explore the most popular items this week! Updated daily. Top pick: Smartphones.</p>
        <div className="product-grid">
          {specialSectionsData.trendingNow.slice(0, 4).map((product, index) => (
            <Card
              key={index}
              title={product.name}
              image={product.image}
              price={product.price}
              discount={product.discount}
              description={product.description}
            />
          ))}
        </div>
        <button onClick={() => setSelectedSection('Trending Now')} className="mt-6 bg-white text-purple-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">View Trends</button>
      </div>
      <div className="mt-12 offers-section">
        <h2 className="text-3xl font-bold">Special Offers</h2>
        <p className="mt-4 text-lg">Enjoy free delivery on orders above ₹1000! Offer ends at midnight today. Extra 10% off on first order.</p>
        <div className="product-grid">
          {specialSectionsData.specialOffers.slice(0, 4).map((product, index) => (
            <Card
              key={index}
              title={product.name}
              image={product.image}
              price={product.price}
              discount={product.discount}
              description={product.description}
            />
          ))}
        </div>
        <button onClick={() => setSelectedSection('Special Offers')} className="mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">Claim Offer</button>
      </div>
    </div>
  );
};








 


 const Footer = () => {
      return (
        <footer className="footer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">E-Commerce Hub</h3>
                <p className="text-sm text-gray-400">
                  Your one-stop shop for groceries, electronics, and more. Shop with ease and get fast delivery!
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-sm">Home</a></li>
                  <li><a href="#products" className="text-sm">Products</a></li>
                  <li><a href="#cart" className="text-sm">Cart</a></li>
                  <li><a href="#orders" className="text-sm">Orders</a></li>
                  <li><a href="#profile" className="text-sm">Profile</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-sm text-gray-400">Email: support@ecommercehub.com</p>
                <p className="text-sm text-gray-400">Phone: +91 123 456 7890</p>
                <p className="text-sm text-gray-400">Address: 123 Commerce Street, Bangalore, India</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4 social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
              <p className="text-sm text-gray-400">© 2025 E-Commerce Hub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    };




const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [coupon, setCoupon] = useState('');
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target) && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const addToCart = (item, setPage) => {
    const newItem = { ...item, id: `${item.name}_${Date.now()}`, quantity: 1 };
    setCartItems((prevItems) => [...prevItems, newItem]);
    setCartCount((prev) => prev + 1);
    setPage('cart');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className={`relative min-h-screen ${darkMode ? 'dark-mode' : ''}`} ref={sidebarRef}>
      <Sidebar isOpen={isSidebarOpen} onClose={handleNavigation} />
      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
        <Header
          onMenuToggle={toggleSidebar}
          cartCount={cartCount}
          onDarkModeToggle={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
          onLanguageChange={setLanguage}
          language={language}
        />
        {currentPage === 'home' && <Home onNavigate={handleNavigation} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'products' && <Home onNavigate={handleNavigation} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'sales' && <Home onNavigate={handleNavigation} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        
        {currentPage === 'cart' && (
          <Cart
            cartItems={cartItems}
            onBack={() => setCurrentPage('home')}
            setCartCount={setCartCount}
            coupon={coupon}
            setCoupon={setCoupon}
            setCartItems={setCartItems}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 'orders' && <Orders onBack={() => setCurrentPage('home')} />}
        {currentPage === 'analysis' && <Home onNavigate={handleNavigation} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'Profile' && <Profile onNavigate={handleNavigation}  setCurrentPage={setCurrentPage} />}
        {currentPage === 'settings' && <Home onNavigate={handleNavigation} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'fruits' && <CategoryDetail category="fruits" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'vegetables' && <CategoryDetail category="vegetables" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'grains' && <CategoryDetail category="grains" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'oils' && <CategoryDetail category="oils" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'dryfruits' && <CategoryDetail category="dryfruits" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'meat' && <CategoryDetail category="meat" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'electronics' && <CategoryDetail category="electronics" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'accessories' && <CategoryDetail category="accessories" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'toys' && <CategoryDetail category="toys" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'milkproducts' && <CategoryDetail category="milkproducts" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'cooldrinks' && <CategoryDetail category="cooldrinks" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
        {currentPage === 'snacks' && <CategoryDetail category="snacks" onBack={() => setCurrentPage('home')} addToCart={addToCart} setCurrentPage={setCurrentPage} />}
         {currentPage === 'profile' && <Profile  setCurrentPage={setCurrentPage} />}
         <Footer />
      </div>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);