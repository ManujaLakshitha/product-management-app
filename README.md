# 🛍️ Product Management App

A simple Product Management web application built using **Next.js (App Router)** and **Tailwind CSS**.
Users can add, view, edit, and delete products with data stored in the browser using Local Storage.

---

## 🚀 Features

* ✅ Add Product
* ✅ View Products
* ✅ Edit Product
* ✅ Delete Product
* ✅ Local Storage data persistence
* ✅ Responsive UI with Tailwind CSS

### ⭐ Bonus (if implemented)

* 🔍 Search / Filter products
* 🌙 Dark mode
* ⚠️ Form validation
* 🔔 Toast notifications

---

## 🛠️ Tech Stack

* **Next.js 16 (App Router)**
* **React 19**
* **Tailwind CSS**
* **TypeScript**
* Local Storage (for data handling)

---

## 📁 Project Structure

```
product-management-app/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Product List (Home)
│   ├── add/
│   │   └── page.tsx          # Add Product
│   ├── edit/
│   │   └── [id]/
│   │       └── page.tsx      # Edit Product
│   └── globals.css
│
├── components/
│   ├── ui/
│   ├── DarkMode.tsx
│   ├── EmptyState.tsx
│   ├── NavBar.tsx
│   ├── ProductForm.tsx
│   ├── ProductCard.tsx
│   ├── ProductList.tsx
│   ├── SearchBar.tsx
│   └── theme-provider.tsx
│
├── hooks/
│   └── useProducts.ts        # Custom hook for product logic
│
├── lib/
│   ├── localStorage.ts       # Local storage handling
│   └── utils.ts
│
├── tailwind.config.ts
├── postcss.config.js
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd product-management-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

---

## 💾 Data Handling

* All product data is stored in **Local Storage**
* No backend or database is used
* Data persists even after page refresh

---

## 📌 Assumptions

* Each product has a unique ID (generated manually or via timestamp)
* Image is optional (URL-based)
* No authentication is required

---

## 🔧 Possible Improvements

* Add backend (Node.js / Firebase)
* Add authentication (login/register)
* Improve UI with component libraries (e.g., shadcn/ui)
* Add pagination for large product lists
* Improve form validation

---

## 👨‍💻 Author

* Your Name

---

## 📄 License

This project is for assessment purposes only.
