# 🏥 Medify - Healthcare Appointment Booking Platform

Medify is a responsive healthcare appointment booking application that enables users to search for hospitals and medical centers based on location, view available facilities, select appointment slots, and manage their bookings seamlessly.

## 🚀 Features

- Search hospitals by State and City
- View available medical centers
- Book appointments with preferred date and time slots
- View and manage booked appointments
- Dynamic data fetching from APIs
- Local storage persistence for bookings
- Fully responsive user interface
- Clean and reusable component architecture

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- JavaScript (ES6+)
- CSS Modules

### APIs
- REST APIs provided by Crio.Do

### Storage
- Local Storage

---

## 📂 Project Structure

```bash
src/
│
├── Pages/
│   ├── Home.jsx
│   ├── DetailsPage.jsx
│   └── BookingsPg.jsx
│
├── assets/
│   ├── Consultation/
│   ├── Dept/
│   ├── Doctors/
│   ├── Families/
│   ├── Hospital/
│   ├── Patient/
│   ├── Search/
│   └── hero/
│
├── styles/
│   ├── Articles.module.css
│   ├── Consultation.module.css
│   ├── Details.module.css
│   ├── Doctors.module.css
│   ├── FAQ.module.css
│   ├── Families.module.css
│   ├── Footer.module.css
│   ├── Home.module.css
│   ├── Navbar.module.css
│   ├── Patient.module.css
│   ├── SearchForm.module.css
│   └── Specialisation.module.css
│
├── Articles.jsx
├── ConsultationImages.jsx
├── Doctors.jsx
├── FAQ.jsx
├── Families.jsx
├── FooterPage.jsx
├── Navbar.jsx
├── Patients.jsx
├── SearchForm.jsx
├── Specialisation.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/medify.git
```

### Navigate to Project Directory

```bash
cd medify
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:5173
```

---

## 📋 Application Flow

1. User selects a State.
2. User selects a City.
3. Medical centers are fetched using APIs.
4. User browses available hospitals.
5. User selects a hospital.
6. User chooses a preferred date and time slot.
7. Booking details are saved to Local Storage.
8. User can view bookings on the Bookings page.

---

## 💾 Booking Data Structure

```javascript
const booking = {
  hospitalName: selectedCenter["Hospital Name"],
  address: selectedCenter["Address"],
  city: selectedCenter["City"],
  state: selectedCenter["State"],
  day: selectedDay,
  time: selectedTime,
};
```

---

## 🎯 Key Concepts Practiced

- React Components
- Props & State Management
- React Hooks (useState, useEffect)
- Conditional Rendering
- Event Handling
- API Integration
- React Router
- CSS Modules
- Local Storage
- Responsive Design

---

## 🔗 Live Demo

https://medifyapp-rho.vercel.app/

## 👨‍💻 Author

**Akash Tirkey**

Aspiring MERN Stack Developer

GitHub: https://github.com/AkashTirkey

LinkedIn: https://www.linkedin.com/in/akashtirkey-swe/

---

## 📄 License

This project was developed for learning, skill development, and portfolio purposes.
