# PokeGlow Salon

A Pokémon-inspired beauty and salon landing app built with React, Vite, and a lightweight Express API. The project combines luxury salon branding, an appointment booking flow, and an AI-powered beauty recommendation experience.

## Overview

PokeGlow Salon is a fictional high-end beauty brand that blends Pokémon aesthetics with premium salon services. The project is designed as a polished frontend experience with:

- a premium home page
- salon service and pricing sections
- a booking interface
- an AI Lab page showcasing an ML/RAG-inspired architecture
- an API endpoint that generates beauty recommendations

## Features

### Frontend
- responsive landing page with luxury product-style layout
- service cards and package pricing
- booking form with stylist, time slot, and appointment summary
- navigation between Home, Booking, and AI Lab screens
- Pokémon-inspired branding and visual identity

### AI Experience
- AI Lab page explaining a retrieval-augmented generation pipeline
- demo recommendation mode when no API key is configured
- live OpenAI-powered recommendation API when `OPENAI_API_KEY` is provided

### Backend
- Express server for API routes
- CORS enabled for frontend communication
- structured recommendation endpoint

## Tech Stack

- React
- Vite
- React Router
- Express
- OpenAI SDK
- CSS for custom styling

## Project Structure

```bash
pokemon-beauty-parlor/
├── src/
│   ├── assets/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── server.js
├── vite.config.js
├── package.json
├── .env
├── .env.example
├── README.md
└── index.html
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file:

```bash
cp .env.example .env
```

Then update the file with your own OpenAI key if you want live AI responses:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=5001
```

If no valid key is set, the app still works in demo mode with generated beauty advice.

### 3. Run the backend

```bash
npm run server
```

### 4. Run the frontend

```bash
npm run dev -- --host 0.0.0.0
```

The frontend is typically served at:

- http://localhost:5173/
- or another available Vite port if 5173 is in use

## API Endpoint

### POST /api/beauty-advice

Request body:

```json
{
  "prompt": "Recommend a glow-up plan for dry skin and pastel styling."
}
```

Response:

```json
{
  "answer": "For this beauty brief...",
  "mode": "demo"
}
```

When a valid OpenAI key is configured, the response will come from the live OpenAI model with `mode: "live"`.

## Design Inspiration

The app is inspired by premium beauty-brand aesthetics with a Pokémon-inspired color palette, playful character energy, and a polished luxury salon presentation.

## Notes

This project is meant as a creative front-end and AI concept demo. It can be expanded into a production-ready platform with:

- a database for bookings
- user authentication
- real salon inventory and service management
- stronger retrieval-augmented generation pipelines
- admin dashboards for stylists

## License

This project is for educational and demo purposes.
