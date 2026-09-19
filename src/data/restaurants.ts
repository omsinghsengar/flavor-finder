export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  rating: number;
  distance: number;
  avgPrice: number;
  status: string;
  open: boolean;
  image: string;
};

import trattoriaLume from "@/assets/restaurants/trattoria-lume.jpg";
import kansoIzakaya from "@/assets/restaurants/kanso-izakaya.jpg";
import casaBrisa from "@/assets/restaurants/casa-brisa.jpg";
import kanemuraRamen from "@/assets/restaurants/kanemura-ramen.jpg";
import bistroVerre from "@/assets/restaurants/bistro-verre.jpg";
import spiceMeridian from "@/assets/restaurants/spice-meridian.jpg";
import saltTide from "@/assets/restaurants/salt-tide.jpg";
import mashruq from "@/assets/restaurants/mashruq.jpg";
import seoulHand from "@/assets/restaurants/seoul-hand.jpg";

export const RESTAURANTS: Restaurant[] = [
  { id: "1", name: "Trattoria Lume", cuisine: "Italian", location: "Riverside", rating: 4.9, distance: 0.8, avgPrice: 45, status: "Open now", open: true, image: trattoriaLume },
  { id: "2", name: "Kanso Izakaya", cuisine: "Japanese", location: "Riverside", rating: 4.8, distance: 1.2, avgPrice: 60, status: "Open now", open: true, image: kansoIzakaya },
  { id: "3", name: "Casa Brisa", cuisine: "Mexican", location: "Downtown", rating: 4.7, distance: 1.9, avgPrice: 30, status: "Opens 5pm", open: false, image: casaBrisa },
  { id: "4", name: "Kanemura Ramen", cuisine: "Japanese", location: "East Village", rating: 4.8, distance: 0.4, avgPrice: 22, status: "Open now", open: true, image: kanemuraRamen },
  { id: "5", name: "Bistro Verre", cuisine: "French", location: "Old Town", rating: 4.6, distance: 2.1, avgPrice: 70, status: "Open now", open: true, image: bistroVerre },
  { id: "6", name: "Spice Meridian", cuisine: "Indian", location: "Downtown", rating: 4.5, distance: 1.5, avgPrice: 28, status: "Open now", open: true, image: spiceMeridian },
  { id: "7", name: "Salt & Tide", cuisine: "Seafood", location: "Riverside", rating: 4.7, distance: 0.5, avgPrice: 55, status: "Open now", open: true, image: saltTide },
  { id: "8", name: "Mashruq", cuisine: "Levantine", location: "East Village", rating: 4.8, distance: 0.6, avgPrice: 35, status: "Open now", open: true, image: mashruq },
  { id: "9", name: "Seoul Hand", cuisine: "Korean", location: "Old Town", rating: 4.6, distance: 1.8, avgPrice: 32, status: "Opens 4pm", open: false, image: seoulHand },
  { id: "10", name: "Forno Basso", cuisine: "Italian", location: "East Village", rating: 4.4, distance: 0.7, avgPrice: 38, status: "Open now", open: true, image: trattoriaLume },
  { id: "11", name: "La Milpa", cuisine: "Mexican", location: "Riverside", rating: 4.3, distance: 0.9, avgPrice: 18, status: "Open now", open: true, image: casaBrisa },
  { id: "12", name: "Le Comptoir", cuisine: "French", location: "Downtown", rating: 3.9, distance: 2.3, avgPrice: 65, status: "Opens 6pm", open: false, image: bistroVerre },
];

export const CUISINES = ["All", ...Array.from(new Set(RESTAURANTS.map((r) => r.cuisine)))];
export const LOCATIONS = ["All", ...Array.from(new Set(RESTAURANTS.map((r) => r.location)))];
