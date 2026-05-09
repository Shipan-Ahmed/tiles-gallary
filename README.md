# 🧱 Tiles Gallery

A modern, responsive web application for showcasing and exploring premium tiles. Browse through a curated collection of ceramic, glass, and stone tiles with detailed product information, user authentication, and a seamless shopping experience.

## 🌐 Live URL

[Live Website Link](https://tile-vogue.vercel.app)

## ✨ Key Features

- **User Authentication**
  - Email/Password login and registration
  - Google OAuth integration
  - Secure user profile management
  - Session persistence

- **Tile Gallery**
  - Browse all tiles with search functionality
  - Filter tiles by category and price
  - Detailed product pages with high-res images
  - Responsive tile card layout

- **Home Page**
  - Eye-catching banner with call-to-action
  - Animated marquee with latest updates
  - Featured tiles showcase (top 4 tiles)
  - Smooth navigation experience

- **User Profile**
  - View user information
  - Update profile name and image URL
  - Account management

- **Responsive Design**
  - Mobile-first approach
  - Fully responsive on mobile, tablet, and desktop
  - Optimized performance

- **Additional Features**
  - Loading spinners during data fetching
  - 404 Not Found page
  - Toast notifications for user feedback
  - Environment variable configuration for security

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **UI Library:** DaisyUI / HeroUI
- **Styling:** Tailwind CSS
- **Authentication:** BetterAuth with MongoDB Adapter
- **Database:** MongoDB
- **Backend:** JSON Server (for development) / Custom API
- **Deployment:** Vercel / Render

## 📦 npm Packages Used

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "daisyui": "^3.x.x",
    "tailwindcss": "^3.x.x",
    "better-auth": "^0.x.x",
    "mongodb": "^6.x.x",
    "axios": "^1.x.x",
    "react-hot-toast": "^2.x.x",
    "animate.css": "^4.x.x",
    "swiper": "^11.x.x",
    "react-spring": "^9.x.x"
  }
}
```

## 📋 Project Structure

```
tiles-gallery/
├── app/
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Home page
│   ├── login/
│   │   └── page.js              # Login page
│   ├── register/
│   │   └── page.js              # Registration page
│   ├── all-tiles/
│   │   └── page.js              # Gallery page
│   ├── tile/
│   │   └── [id]/
│   │       └── page.js          # Single tile details
│   ├── my-profile/
│   │   └── page.js              # User profile
│   ├── update-profile/
│   │   └── page.js              # Update profile
│   └── not-found.js             # 404 page
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── TileCard.js
│   ├── Loader.js
│   └── ...other components
├── lib/
│   ├── auth.js                  # Authentication logic
│   ├── api.js                   # API calls
│   └── utils.js
├── public/
│   ├── images/
│   │   └── tiles/
│   └── ...static files
├── .env.local                   # Environment variables
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed
- MongoDB account (Atlas or local)
- Google OAuth credentials (for social login)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Shipan-Ahmed/tiles-gallary
cd tiles-gallery
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. // okk

5. **Build for production**
```bash
npm run build
npm start
```

## 📄 Pages & Routes

### Public Routes
- `/` - Home Page
- `/all-tiles` - Tiles Gallery
- `/login` - User Login
- `/register` - User Registration

### Private Routes (Requires Authentication)
- `/tile/[id]` - Single Tile Details Page
- `/my-profile` - User Profile
- `/update-profile` - Update Profile Information

## 🔐 Authentication

### Login
- Email and password authentication
- Google OAuth sign-in
- Error handling with toast notifications
- Redirect to home on successful login

### Registration
- User registration with email, password, name, and photo URL
- Google OAuth sign-up
- Email already exists validation
- Redirect to login on successful registration

### Password & Email Reset
*Note: Email verification and forgot password features are not implemented to avoid inconvenience during assessment. These can be added after assignment completion.*

## 👤 User Profile Features

- View current user information
- Update user name
- Update user profile image
- Secure token-based updates using BetterAuth

## 🎨 Design Features

- **Responsive Navigation Bar**
  - Logo on the left (navigates to home)
  - Center menu links (Home, All Tiles, My Profile)
  - Right side (Login/Logout & Profile)

- **Custom Footer**
  - Social media links
  - Contact Us section
  - Additional navigation links

- **Loading States**
  - Spinner during API calls
  - Skeleton loaders on tile cards

- **User Feedback**
  - Toast notifications for actions
  - Error messages for failed operations
  - Success confirmations

## 📱 Responsive Design

- **Mobile:** Optimized for screens 320px and above
- **Tablet:** Enhanced layout for 768px and above
- **Desktop:** Full-featured experience for 1024px and above

All pages are fully responsive and tested across multiple devices.

## 🎬 Animation & Libraries

Choose one of the following for enhanced user experience:
- **Animate.css** - CSS animation library
- **React-Spring** - Physics-based animation library
- **SwiperJS** - Touch slider for tile carousel

## 📊 Data Format

Tile data follows this JSON structure:
```json
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Premium ceramic tile with blue glaze finish",
  "image": "/images/tiles/tile_001.jpg",
  "category": "ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "inStock": true
}
```

## 🔄 Git Commits

This project includes meaningful commits following best practices:
- Feature implementations
- Bug fixes
- Documentation updates
- Code refactoring

View commit history: `git log --oneline`

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Render
1. Push your code to GitHub
2. Connect your repository to Render
3. Set environment variables in Render dashboard
4. Deploy

**Important:** Configure your deployment platform to handle client-side routing (single-page application). This prevents 404 errors on route reloads.

## 🛠️ Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL |
| `MONGODB_URI` | MongoDB connection string |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret |
| `JWT_SECRET` | JWT signing secret |
| `NEXT_PUBLIC_APP_URL` | Frontend application URL |

## 📝 Usage Examples

### Search Tiles
1. Navigate to "All Tiles" page
2. Use the search bar to find tiles by title
3. Click "Details" to view full product information

### Create an Account
1. Click "Login" button in navbar
2. Click "Register" link
3. Fill in name, email, photo URL, and password
4. Account created and redirected to login

### Update Profile
1. Navigate to "My Profile" (requires login)
2. Click "Update Information"
3. Modify name and/or image URL
4. Save changes

## 🤝 Contributing

This is an assignment project. However, improvements and suggestions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📞 Contact & Support

- **Email:** shipanahmed69@gmail.com
- **GitHub:** [Your GitHub Profile](https://github.com/Shipan-Ahmed)
- **Live Site:** [Tiles Gallery](https://tile-vogue.vercel.app)

## 🎯 Project Goals

✅ Implement a modern tile gallery website  
✅ Integrate user authentication with BetterAuth  
✅ Create responsive design for all devices  
✅ Deploy to production-ready platform  
✅ Follow best practices with meaningful Git commits  
✅ Secure sensitive data with environment variables  
✅ Provide excellent user experience  

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI Components](https://daisyui.com)
- [BetterAuth Documentation](https://better-auth.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Vercel Deployment](https://vercel.com)

---

**Last Updated:** 2026  
**Version:** 1.0.0

Made with ❤️ for the Tiles Gallery Project
