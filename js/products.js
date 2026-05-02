// ==================== JO JO ELECTRONIC - GOOGLE SHEETS DATABASE ====================
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQ4pFjV8_sxEoHJwBMDCaG2piPGMGwCJp89ptezovThZeF6QuNRNYtG9vdz1b4xQXIZf4MB6caCE7U/pub?gid=0&single=true&output=csv";

let products = [];

async function loadProducts() {
    // First load from localStorage
    const storedData = localStorage.getItem('jojo-products');
    if (storedData) {
        products = JSON.parse(storedData);
        console.log("✅ Products loaded from localStorage. Total:", products.length);
        if (typeof renderProducts === 'function') renderProducts(products);
    }
    
    // Then try Google Sheets
    try {
        const response = await fetch(SHEET_CSV_URL);
        const csvText = await response.text();
        const rows = csvText.split('\n');
        
        if (rows.length > 1) {
            products = [];
            for (let i = 1; i < rows.length; i++) {
                if (!rows[i].trim()) continue;
                const values = rows[i].split(',').map(v => v.trim().replace(/"/g, ''));
                if (values.length < 6) continue;
                
                products.push({
                    id: i,
                    name: values[0] || '',
                    category: values[1] || '',
                    price: parseInt(values[2]) || 0,
                    description: values[3] || '',
                    image: values[4] || 'no-image.jpg',
                    inStock: values[5]?.toUpperCase() === 'TRUE'
                });
            }
            console.log("✅ Products loaded from Google Sheets. Total:", products.length);
            if (typeof renderProducts === 'function') renderProducts(products);
        }
    } catch (error) {
        console.warn("⚠️ Google Sheets failed. Using localStorage products.");
        if (products.length === 0 && typeof renderProducts === 'function') {
            renderProducts(products);
        }
    }
}

function saveProducts() {
    localStorage.setItem('jojo-products', JSON.stringify(products));
}

loadProducts();