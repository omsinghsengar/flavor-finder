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
import kesarMahal from "@/assets/restaurants/kesar-mahal.jpg";
import dakshinHouse from "@/assets/restaurants/dakshin-house.jpg";
import chaatBazaar from "@/assets/restaurants/chaat-bazaar.jpg";
import siamOrchid from "@/assets/restaurants/siam-orchid.jpg";
import goldenLotus from "@/assets/restaurants/golden-lotus.jpg";
import zorbasTable from "@/assets/restaurants/zorbas-table.jpg";
import littleAddis from "@/assets/restaurants/little-addis.jpg";
import andesLime from "@/assets/restaurants/andes-lime.jpg";
import smokeOak from "@/assets/restaurants/smoke-oak.jpg";

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
  { id: "13", name: "Kesar Mahal", cuisine: "Indian", location: "Old Town", rating: 4.9, distance: 1.1, avgPrice: 42, status: "Open now", open: true, image: kesarMahal },
  { id: "14", name: "Dakshin House", cuisine: "Indian", location: "East Village", rating: 4.7, distance: 0.8, avgPrice: 24, status: "Open now", open: true, image: dakshinHouse },
  { id: "15", name: "Chaat Bazaar", cuisine: "Indian", location: "Riverside", rating: 4.4, distance: 0.6, avgPrice: 15, status: "Open now", open: true, image: chaatBazaar },
  { id: "16", name: "Siam Orchid", cuisine: "Thai", location: "Midtown", rating: 4.6, distance: 2.0, avgPrice: 26, status: "Open now", open: true, image: siamOrchid },
  { id: "17", name: "Golden Lotus", cuisine: "Vietnamese", location: "Midtown", rating: 4.7, distance: 1.7, avgPrice: 20, status: "Open now", open: true, image: goldenLotus },
  { id: "18", name: "Zorba's Table", cuisine: "Greek", location: "Harbor District", rating: 4.5, distance: 3.1, avgPrice: 34, status: "Opens 5pm", open: false, image: zorbasTable },
  { id: "19", name: "Little Addis", cuisine: "Ethiopian", location: "Northside", rating: 4.8, distance: 2.6, avgPrice: 22, status: "Open now", open: true, image: littleAddis },
  { id: "20", name: "Andes & Lime", cuisine: "Peruvian", location: "Harbor District", rating: 4.4, distance: 2.9, avgPrice: 38, status: "Open now", open: true, image: andesLime },
  { id: "21", name: "Smoke & Oak", cuisine: "American BBQ", location: "Northside", rating: 4.6, distance: 2.4, avgPrice: 29, status: "Open now", open: true, image: smokeOak },
  { id: "22", name: "Napoli Centrale", cuisine: "Italian", location: "Midtown", rating: 4.5, distance: 1.6, avgPrice: 40, status: "Open now", open: true, image: trattoriaLume },
  { id: "23", name: "Baan Street", cuisine: "Thai", location: "Northside", rating: 4.3, distance: 2.2, avgPrice: 19, status: "Opens 4pm", open: false, image: siamOrchid },
  { id: "24", name: "Mekong Kitchen", cuisine: "Vietnamese", location: "West End", rating: 4.5, distance: 3.4, avgPrice: 21, status: "Open now", open: true, image: goldenLotus },
  { id: "25", name: "Aegean Blue", cuisine: "Greek", location: "West End", rating: 4.2, distance: 3.8, avgPrice: 31, status: "Open now", open: true, image: zorbasTable },
  { id: "26", name: "Habesha Corner", cuisine: "Ethiopian", location: "Downtown", rating: 4.6, distance: 1.3, avgPrice: 23, status: "Opens 6pm", open: false, image: littleAddis },
  { id: "27", name: "El Puerto", cuisine: "Peruvian", location: "Riverside", rating: 4.3, distance: 1.0, avgPrice: 33, status: "Open now", open: true, image: andesLime },
  { id: "28", name: "Iron Pit", cuisine: "American BBQ", location: "West End", rating: 4.7, distance: 3.5, avgPrice: 27, status: "Open now", open: true, image: smokeOak },
];

export const CUISINES = ["All", ...Array.from(new Set(RESTAURANTS.map((r) => r.cuisine)))];
export const LOCATIONS = ["All", ...Array.from(new Set(RESTAURANTS.map((r) => r.location)))];
