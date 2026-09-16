// Katalog produk untuk alur pemesanan lewat WhatsApp — HARUS tetap sinkron dengan
// site/server/src/products.js (satu-satunya sumber kebenaran harga di project ini).
// Update kedua file ini bersamaan kalau ada perubahan harga/produk.

const PRODUCTS = [
  { id: "sd-roasted-sesame", category: "Salad Dressing", name: "Roasted Sesame Dressing", price: 36053, unit: "250 ml" },
  { id: "sd-italian-vinaigrette", category: "Salad Dressing", name: "Italian Vinaigrette Dressing", price: 33350, unit: "250 ml" },
  { id: "sd-caesar", category: "Salad Dressing", name: "Caesar Dressing", price: 40250, unit: "250 ml" },
  { id: "my-garlic-mayo", category: "Mayonnaise", name: "Garlic Mayo", price: 36000, unit: "250 ml" },
  { id: "my-spicy-mayo", category: "Mayonnaise", name: "Spicy Mayo", price: 31625, unit: "250 ml" },
  { id: "my-truffle-mayo", category: "Mayonnaise", name: "Truffle Mayo", price: 67800, unit: "250 ml" },
  { id: "cs-honey-garlic", category: "Artisan Cooking Sauce", name: "Honey Garlic Sauce", price: 37950, unit: "250 ml" },
  { id: "cs-pesto", category: "Artisan Cooking Sauce", name: "Pesto Sauce", price: 75900, unit: "250 ml" },
  { id: "cs-mushroom", category: "Artisan Cooking Sauce", name: "Mushroom Sauce", price: 37950, unit: "250 ml" },
  { id: "sp-chicken-rub", category: "Seasoning Powder", name: "Chicken Seasoning Rub Powder", price: 45000, unit: "pouch" },
  { id: "sp-steak-rub", category: "Seasoning Powder", name: "Steak Seasoning Rub Powder", price: 45000, unit: "pouch" },
  { id: "sp-curry-rub", category: "Seasoning Powder", name: "Curry Seasoning Rub Powder", price: 45000, unit: "pouch" },
  { id: "bs-truffle-butter", category: "Butter & Soup Base Product", name: "Truffle Herbs Butter", price: 88200, unit: "jar" },
  { id: "bs-garlic-butter", category: "Butter & Soup Base Product", name: "Garlic Herbs Butter", price: 78200, unit: "jar" },
  { id: "bs-collagen-broth", category: "Butter & Soup Base Product", name: "Collagen Broth Original", price: 73500, unit: "pack" },
  { id: "rte-lasagna", category: "Ready to Eat", name: "Italian Meat Lasagna", price: 50000, unit: "pack" },
  { id: "rte-mac-cheese", category: "Ready to Eat", name: "Mac & Cheese", price: 48000, unit: "pack" },
  { id: "rte-katsu-curry", category: "Ready to Eat", name: "Japanese Chicken Katsu Curry", price: 50000, unit: "pack" },
];

/** Nomor menu di chat WA itu 1-based sesuai urutan array ini. */
function findProductByNumber(number) {
  return PRODUCTS[number - 1] || null;
}

function formatRupiah(amount) {
  return "Rp" + amount.toLocaleString("id-ID");
}

module.exports = { PRODUCTS, findProductByNumber, formatRupiah };
