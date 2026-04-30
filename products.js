// ==================== JO JO ELECTRONIC - LOCAL STORAGE DATABASE ====================
// Products stored in browser localStorage - No external database needed

// Default products (first time setup)
const defaultProducts = [
    { id: 1, name: "EcoStar AC 1.5 Ton", category: "Air Conditioner", price: 145000, image: "ac-1.jpg", description: "DC Inverter • Cooling & Heating • Energy Saving", inStock: true },
    { id: 2, name: "EcoStar AC 1 Ton", category: "Air Conditioner", price: 95000, image: "ac-2.jpg", description: "Standard Cooling • Budget Friendly • Reliable", inStock: true },
    { id: 3, name: "EcoStar AC 1 Ton Inverter", category: "Air Conditioner", price: 115000, image: "ac-3.jpg", description: "Inverter Technology • Energy Efficient • Fast Cooling", inStock: true },
    { id: 4, name: "EcoStar AC 1.5 Ton Premium", category: "Air Conditioner", price: 135000, image: "ac-4.jpg", description: "DC Inverter • Golden Fin • Anti-Corrosion", inStock: true },
    { id: 5, name: "EcoStar Air Fryer 4.2L", category: "Air Fryer", price: 28500, image: "air-fryer-1.jpg", description: "Digital Display • 7 Pre-set Menus • Easy Clean", inStock: true },
    { id: 6, name: "EcoStar Air Fryer 3.5L", category: "Air Fryer", price: 15500, image: "air-fryer-2.jpg", description: "360° Hot Air Circulation • Timer • Non-Stick", inStock: true },
    { id: 7, name: "EcoStar Floor Dispenser", category: "Home Appliance", price: 18500, image: "dispenser-1.jpg", description: "Hot/Cold/Room • Child Safety Lock • Steel Tank", inStock: true },
    { id: 8, name: "EcoStar Table Dispenser", category: "Home Appliance", price: 9500, image: "dispenser-2.jpg", description: "Compact Design • Hot & Cold • Energy Saving", inStock: true },
    { id: 9, name: "EcoStar Dry Iron", category: "Personal Care", price: 2200, image: "iron-1.jpg", description: "Non-Stick Soleplate • Lightweight • Comfortable", inStock: true },
    { id: 10, name: "EcoStar Steam Iron 1200W", category: "Personal Care", price: 3800, image: "iron-2.jpg", description: "Steam Burst • Anti-Drip • Vertical Steaming", inStock: true },
    { id: 11, name: "EcoStar Steam Iron 1800W", category: "Personal Care", price: 5500, image: "iron-3.jpg", description: "OptimalTemp • No Burns • Auto Shut-Off", inStock: true },
    { id: 12, name: "EcoStar Dry Iron 750W", category: "Personal Care", price: 1500, image: "iron-4.jpg", description: "Compact • Lightweight • Quick Ironing", inStock: true },
    { id: 13, name: "EcoStar Juicer", category: "Kitchen Appliance", price: 5500, image: "juicer-1.jpg", description: "Centrifugal • Wide Feed • 2 Speeds • Easy Clean", inStock: true },
    { id: 14, name: "EcoStar Slow Juicer", category: "Kitchen Appliance", price: 8500, image: "juicer-2.jpg", description: "Cold Press • Maximum Yield • Silent Motor", inStock: true },
    { id: 15, name: "EcoStar LED 12W", category: "LED Lighting", price: 350, image: "led-1.jpg", description: "Energy Saving • Cool Daylight • Long Life", inStock: true },
    { id: 16, name: "EcoStar LED 15W", category: "LED Lighting", price: 450, image: "led-2.jpg", description: "Bright White • Wide Beam • Instant Start", inStock: true },
    { id: 17, name: "EcoStar LED 10W", category: "LED Lighting", price: 500, image: "led-3.jpg", description: "Eye Comfort • Flicker Free • 15000 Hours", inStock: true },
    { id: 18, name: "EcoStar Oven 20L", category: "Microwave Oven", price: 14500, image: "oven-1.jpg", description: "Digital Display • 7 Menus • Child Lock", inStock: true },
    { id: 19, name: "EcoStar Oven 25L", category: "Microwave Oven", price: 18500, image: "oven-2.jpg", description: "Grill • Convection • Auto Cook • Steel", inStock: true },
    { id: 20, name: "EcoStar Oven 20L Solo", category: "Microwave Oven", price: 15500, image: "oven-3.jpg", description: "Solo Microwave • 5 Power Levels • Defrost", inStock: true },
    { id: 21, name: "EcoStar Oven 27L", category: "Microwave Oven", price: 22500, image: "oven-4.jpg", description: "Inverter • Genius Sensor • Keep Warm", inStock: true },
    { id: 22, name: "EcoStar Sandwich 2", category: "Kitchen Appliance", price: 2800, image: "sandwich-1.jpg", description: "Non-Stick Plates • Power Indicator • Compact", inStock: true },
    { id: 23, name: "EcoStar Sandwich 4", category: "Kitchen Appliance", price: 4200, image: "sandwich-2.jpg", description: "Large Capacity • Easy Clean • Cool Touch", inStock: true },
    { id: 24, name: "EcoStar Thermos 1L", category: "Home Essentials", price: 1800, image: "thermos-1.jpg", description: "Hot/Cold 12H • Leak Proof • BPA Free", inStock: true },
    { id: 25, name: "EcoStar Thermos 1.5L", category: "Home Essentials", price: 2500, image: "thermos-2.jpg", description: "24H Hot • Copper Coated • Gift Box", inStock: true },
    { id: 26, name: "EcoStar WM 9100", category: "Washing Machine", price: 45000, image: "washing-machine-1.jpg", description: "Fully Automatic • Top Load • 9kg • Grey", inStock: true },
    { id: 27, name: "EcoStar WM HWM-120", category: "Washing Machine", price: 52000, image: "washing-machine-2.jpg", description: "Fully Automatic • Front Load • 8kg • White", inStock: true },
    { id: 28, name: "EcoStar WM 7kg", category: "Washing Machine", price: 68000, image: "washing-machine-3.jpg", description: "Eco Bubble • Digital Inverter • Diamond Drum", inStock: true },
    { id: 29, name: "EcoStar WM 8kg", category: "Washing Machine", price: 72000, image: "washing-machine-4.jpg", description: "Smart Diagnosis • 6 Motion • Steel", inStock: true },
    { id: 30, name: "EcoStar Vacuum", category: "Home Appliance", price: 12500, image: "vacuum-1.jpg", description: "Bagless • HEPA Filter • 2L Tank", inStock: true },
    { id: 31, name: "EcoStar Hand Mixer", category: "Kitchen Appliance", price: 3200, image: "hand-mixer-1.jpg", description: "5 Speeds • Turbo • Steel Beaters", inStock: true },
    { id: 32, name: "EcoStar Chopper", category: "Kitchen Appliance", price: 1800, image: "chopper-1.jpg", description: "Manual • Sharp Blades • Easy Clean", inStock: true },
    { id: 33, name: "GFC Fan 56 Inch", category: "Ceiling Fan", price: 5500, image: "fan-1.jpg", description: "AeroDynamic • High Speed • Low Noise", inStock: true },
    { id: 34, name: "Sonex Pedestal Fan", category: "Ceiling Fan", price: 8500, image: "fan-pedestal.jpg", description: "Powerful Airflow • 3 Speed Settings", inStock: true },
    { id: 35, name: "EcoStar Hair Dryer", category: "Personal Care", price: 3500, image: "hair-dryer-1.jpg", description: "ThermoProtect • 3 Heat Settings", inStock: true },
    { id: 36, name: "EcoStar Fries Cutter", category: "Kitchen Appliance", price: 2500, image: "fries-cutter-1.jpg", description: "Steel Blade • Easy to Use • Perfect Fries", inStock: true }
];

// Load products from localStorage OR use defaults
let products = [];

function loadProducts() {
    const storedData = localStorage.getItem('jojo-products');
    
    if (storedData) {
        products = JSON.parse(storedData);
        console.log("✅ Products loaded from localStorage. Total:", products.length);
    } else {
        products = [...defaultProducts];
        saveProducts();
        console.log("✅ Default products loaded. Total:", products.length);
    }
    
    return products;
}

function saveProducts() {
    localStorage.setItem('jojo-products', JSON.stringify(products));
}

// Initialize
loadProducts();