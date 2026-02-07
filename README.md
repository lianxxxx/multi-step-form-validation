# Multi-Step Form - Frontend Mentor Challenge

A responsive multi-step form built with Next.js, React Hook Form, Zod validation, and Tailwind CSS.

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── forms/
│   │   │   ├── Step1Form.jsx    # Personal info form
│   │   │   ├── Step2Form.jsx    # Plan selection
│   │   │   ├── Step3Form.jsx    # Add-ons selection
│   │   │   ├── Step4Form.jsx    # Summary & confirmation
│   │   │   └── ThankYouCard.jsx # Success message
│   │   └── StepIndicator.jsx    # Step progress indicator
│   ├── globals.css              # Global styles & Tailwind directives
│   ├── page.js                  # Main page with form logic
│   └── layout.js
├── public/
│   └── (icons and images)
├── tailwind.config.js
└── package.json
```

## 🚀 Features

- **Multi-step form flow** with 4 steps
- **Form validation** using React Hook Form + Zod
- **Responsive design** - Mobile-first approach
- **Plan selection** - Monthly/Yearly billing toggle
- **Add-ons selection** - Optional service upgrades
- **Dynamic pricing** - Real-time price calculations
- **Form persistence** - Data saved across steps
- **Clean UI** - Tailwind CSS styling

## 🛠️ Technologies Used

- **Next.js 14** (App Router)
- **React 18**
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Tailwind CSS** - Styling
- **JavaScript (ES6+)**

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/lianxxxx/multi-step-form-validation.git
```

2. Navigate to project directory

```bash
cd multi-step-form-validation
```

3. Install dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📝 Form Steps

### Step 1: Personal Info

- Name (required)
- Email (required, validated)
- Phone (required, min 10 characters)

### Step 2: Select Plan

- Choose between Arcade, Advanced, or Pro
- Toggle Monthly/Yearly billing

### Step 3: Add-ons

- Online service
- Larger storage
- Customizable profile
- Each add-on has monthly/yearly pricing

### Step 4: Finishing Up

- Summary of selected plan and add-ons
- Total price calculation
- Option to change plan (go back to Step 2)
- Confirm button to submit

### Thank You

- Success message after form submission

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Desktop**: md breakpoint (≥ 768px)

## 🔧 Key Components

### StepIndicator

Displays current step number with visual indicator

### Step1Form

- Uses React Hook Form with Zod validation
- Real-time error messages
- Saves data to parent state on submit

### Step2Form

- Plan selection with visual cards
- Monthly/Yearly toggle switch
- Highlights selected plan

### Step3Form

- Checkbox-based add-on selection
- Dynamic pricing based on billing cycle

### Step4Form

- Summary view with price breakdown
- Dynamic total calculation
- Change plan functionality

### ThankYouCard

- Final success message with icon

## 🐛 Known Issues

- Fixed button positioning on mobile may need adjustment for very small screens
- Form doesn't persist data on page refresh (no localStorage)

## 🚧 Future Improvements

- Add localStorage for form persistence
- Add animations between steps

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Design by [Frontend Mentor](https://www.frontendmentor.io)

---

Built with Next.js, React Hook Form, Zod, and Tailwind CSS
