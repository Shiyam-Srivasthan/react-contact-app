# React Contact List App

A **single-page React application** to manage contacts efficiently.  
The app allows users to **view contacts, search by name, and add new contacts**. Smooth scrolling enhances the user experience when adding new contacts.

---

## **Features**

- View a list of contacts with details: Name, Role, Company, Email, Phone  
- Search contacts by name in real-time  
- Add a new contact dynamically   
- Fully responsive and styled using CSS  

---

## **Setup & Installation**

1. **Clone the repository**

```bash
git clone https://github.com/<your-username>/<repo-name>.git
````

2. **Navigate into the project folder**

```bash
cd <repo-name>
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## **Deployment**

The app is deployed using **Vercel**:
[Live App Link](https://your-vercel-link.vercel.app)

---

## **Assumptions / Design Choices**

* SPA architecture without routing to keep it simple and fast
* All contact data is stored in React state (no backend API)
* Each contact includes: **Name, Role, Company, Email, Phone**
* Search is **case-insensitive** and filters the list in real-time

---

## **Libraries / Tools Used**

* **React**: Core framework for building the SPA
* **CSS**: For styling and layout

---

## **Future Improvements**

* Add persistent storage (e.g., localStorage or backend API)
* Add edit/delete contact functionality
* Improve form validation and user feedback
* Use routing to separate views for Add Contact and Contact Details
* Smooth scroll feature for better UX when accessing the Add Contact form

---
