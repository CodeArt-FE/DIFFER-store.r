// ==========================================================================
// 1. قاموس الترجمة (يغير النصوص بالكامل مع الإبقاء على اتجاه الصفحة RTL)
// ==========================================================================
const translations = {
    ar: {
        pageTitle: "Brand || DIFFER ",
        announcement: "خصم 20% على تشكيلة الشتاء الجديدة | الشحن مجاني للطلبات فوق 1000 جنيه",
        searchPlaceholder: "ابحث عن هودي، تيشيرت، بنطال...",
        allProducts: "جميع المنتجات",
        winterCollection: "التشكيلة الشتوية",
        summerCollection: "التشكيلة الصيفية",
        menuTitle: "الأقسام والتشكيلات",
        heroTitle: "BRAND DIFFER COLLECTION",
        heroDesc: "تصاميم الستريت وير العصرية لخريف وشتاء 2026",
        heroBtn: "تسوق المجموعة الآن",
        aboutTitle: "عن براند DIFFER",
        aboutText: "نحن في Brand DIFFER نمزج بين بساطة التصميم وأعلى جودة خامات الشارع العصري (Streetwear). نسعى لتقديم قطع ملابس فريدة تناسب أسلوب حياتك اليومي.",
        filterAll: "الكل",
        filterWinter: "شتوي",
        filterSummer: "صيفي",
        addToCartBtn: "إضافة للسلة",
        modalSize: "اختر المقاس:",
        modalColor: "اختر اللون:",
        modalQuantity: "الكمية المطلوبة:",
        cartTitle: "سلة المشتريات",
        emptyCart: "السلة فارغة حالياً.",
        deliveryTitle: "بيانات توصيل الطلب",
        nameLabel: "الاسم بالكامل",
        namePlaceholder: "أدخل اسمك الثلاثي",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "01xxxxxxxx",
        addressLabel: "العنوان بالتفصيل",
        addressPlaceholder: "المحافظة - المنطقة - الشارع",
        totalLabel: "إجمالي المبلغ:",
        confirmWhatsapp: "تأكيد الطلب",
        footerDesc: "علامة تجارية مصرية مخصصة للستريت وير والأزياء العصرية.",
        quickLinks: "روابط سريعة",
        aboutLink: "عن البراند",
        devTitle: "Design via",
        devName: "Developed with:(𝓑𝓪 𝓼 𝓴𝓸 🥱♥️)",
        rights: "جميع الحقوق محفوظة لبراند DIFFER."
    },
    en: {
        pageTitle: "Brand || DIFFER ",
        announcement: "20% OFF on New Winter Collection | Free shipping over 1000 EGP",
        searchPlaceholder: "Search for hoodie, t-shirt, pants...",
        allProducts: "All Products",
        winterCollection: "Winter Collection",
        summerCollection: "Summer Collection",
        menuTitle: "Categories & Collections",
        heroTitle: "BRAND DIFFER COLLECTION",
        heroDesc: "Modern streetwear designs for Autumn & Winter 2026",
        heroBtn: "Shop Collection Now",
        aboutTitle: "About Brand DIFFER",
        aboutText: "At Brand DIFFER, we blend minimalist design with premium streetwear quality. We strive to provide unique clothing pieces that match your daily lifestyle.",
        filterAll: "All",
        filterWinter: "Winter",
        filterSummer: "Summer",
        addToCartBtn: "Add to Cart",
        modalSize: "Select Size:",
        modalColor: "Select Color:",
        modalQuantity: "Quantity:",
        cartTitle: "Shopping Cart",
        emptyCart: "Your cart is currently empty.",
        deliveryTitle: "Delivery Information",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your full name",
        phoneLabel: "Phone Number",
        phonePlaceholder: "01xxxxxxxx",
        addressLabel: "Detailed Address",
        addressPlaceholder: "Governorate - Area - Street",
        totalLabel: "Total Amount:",
        confirmWhatsapp: "Confirm Order",
        footerDesc: "Egyptian brand dedicated to streetwear and modern fashion.",
        quickLinks: "Quick Links",
        aboutLink: "About Brand",
        devTitle: "Design via",
        devName: "Developed with:(𝓑𝓪 𝓼 𝓴𝓸 🥱♥️)",
        rights: "All rights reserved to DIFFER Brand."
    }
};

let currentLang = 'ar';

// ==========================================================================
// 2. قاعدة بيانات المنتجات بالصور الحقيقية والألوان والأسعار والمقاسات
// ==========================================================================
const productsData = [
    {
        id: 1,
        title: { ar: "هودي شتوي ثقيل DIFFER Boxy Hoodie", en: "DIFFER Heavy Winter Boxy Hoodie" },
        season: "winter",
        priceCurrent: 950,
        priceOld: 1250,
        colors: { ar: ["أسود", "رمادي", "زيتي"], en: ["Black", "Grey", "Olive"] },
        description: { 
            ar: "هودي شتوي ثقيل قطن ميلتون 100% مع قصة أفرسايز مريحة وتصميم عصري. متوفر بألوان متعددة وخامات مقاومة للوبر.", 
            en: "Heavy winter 100% cotton fleece hoodie with comfortable oversized cut." 
        },
        images: [
            { url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون الأسود", en: "Black Color" } },
            { url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون الرمادي", en: "Grey Color" } },
            { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون الزيتي", en: "Olive Color" } }
        ]
    },
    {
        id: 2,
        title: { ar: "تيشيرت صيفي مطبوع Graphic Tee", en: "Summer Graphic Printed Tee" },
        season: "summer",
        priceCurrent: 450,
        priceOld: 600,
        colors: { ar: ["أبيض", "رصاصي فاتح", "بيج"], en: ["White", "Light Grey", "Beige"] },
        description: { 
            ar: "تيشيرت صيفي خفيف بخامات قطنية ممتازة وطباعة عالية الجودة مقاومة للغسيل المتكرر.", 
            en: "Light summer t-shirt made of premium cotton with high quality print." 
        },
        images: [
            { url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون الأبيض", en: "White Color" } },
            { url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون الرصاصي", en: "Light Grey" } },
            { url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون البيج", en: "Beige Color" } }
        ]
    },
    {
        id: 3,
        title: { ar: "بنطال رياضي واسع Wide-Leg Sweatpants", en: "Wide-Leg Curved Sweatpants" },
        season: "winter",
        priceCurrent: 800,
        priceOld: 1050,
        colors: { ar: ["رمادي داكن", "أسود"], en: ["Dark Grey", "Black"] },
        description: { 
            ar: "بنطال شتوي رياضي واسع بقصة مريحة وأنيقة تناسب الإطلالات العصرية مع حزام مطاطي مرن.", 
            en: "Comfortable and stylish wide-leg winter sweatpants." 
        },
        images: [
            { url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون الرمادي الداكن", en: "Dark Grey" } },
            { url: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون الأسود", en: "Black Color" } }
        ]
    },
    {
        id: 4,
        title: { ar: "جاكيت بومبر شتوي عازل للبرودة", en: "Insulated Winter Bomber Jacket" },
        season: "winter",
        priceCurrent: 1400,
        priceOld: 1800,
        colors: { ar: ["أسود", "زيتي عسكري"], en: ["Black", "Military Olive"] },
        description: { 
            ar: "جاكيت شتوي مبطن بفايبر عالي الجودة لعزل البرودة القارسة بتصميم فخم وجيوب جانبية آمنة.", 
            en: "Quilted winter jacket insulated against severe cold with a luxurious design." 
        },
        images: [
            { url: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون الأسود", en: "Black Color" } },
            { url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون الزيتي العسكري", en: "Military Olive" } }
        ]
    },
    {
        id: 5,
        title: { ar: "شورت صيفي كاجوال Casual Summer Shorts", en: "Casual Summer Shorts" },
        season: "summer",
        priceCurrent: 500,
        priceOld: 700,
        colors: { ar: ["بيج", "أسود"], en: ["Beige", "Black"] },
        description: { 
            ar: "شورت صيفي مريح جداً للخروج وأيام المصيف الحارة بتصميم أنيق وخامات قطن برمودا خفيفة.", 
            en: "Very comfortable summer shorts for outings and hot beach days." 
        },
        images: [
            { url: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون البيج", en: "Beige Color" } },
            { url: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&q=80", title: { ar: "اللون الأسود", en: "Black Color" } }
        ]
    }
];

let cart = [];
let selectedProductForModal = null;
let currentImageIndex = 0;
let activeSize = "M";
let activeColor = "";
let modalQuantity = 1;

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsData);
    setupEventListeners();
    updateCartUI();
    updateStaticTexts();
});

// ==========================================================================
// 3. دوال تحديث الترجمة وعرض المنتجات والخصومات
// ==========================================================================
function updateStaticTexts() {
    const t = translations[currentLang];
    
    document.getElementById('pageTitle').textContent = t.pageTitle;
    document.getElementById('announcementText').textContent = t.announcement;
    document.getElementById('searchInput').placeholder = t.searchPlaceholder;
    document.getElementById('currentCategoryTitle').textContent = t.allProducts;
    document.getElementById('menuTitleHeading').textContent = t.menuTitle;
    
    document.getElementById('nav-all').textContent = t.allProducts;
    document.getElementById('nav-winter').textContent = t.winterCollection;
    document.getElementById('nav-summer').textContent = t.summerCollection;

    document.getElementById('filterAllBtn').textContent = t.filterAll;
    document.getElementById('filterWinterBtn').textContent = t.filterWinter;
    document.getElementById('filterSummerBtn').textContent = t.filterSummer;

    document.getElementById('heroTitleText').textContent = t.heroTitle;
    document.getElementById('heroDescText').textContent = t.heroDesc;
    document.getElementById('heroBtnText').textContent = t.heroBtn;

    document.getElementById('aboutTitleText').innerHTML = `عن براند <span class="highlight">DIFFER</span>`;
    document.getElementById('aboutDescText').textContent = t.aboutText;

    document.getElementById('modalSizeLabel').textContent = t.modalSize;
    document.getElementById('modalColorLabel').textContent = t.modalColor;
    document.getElementById('modalQuantityLabel').textContent = t.modalQuantity;
    document.getElementById('modalAddText').textContent = t.addToCartBtn;

    document.getElementById('cartTitleText').innerHTML = `${t.cartTitle} (<span id="cartHeaderCount">${cart.reduce((s,i)=>s+i.quantity,0)}</span>)`;
    document.getElementById('deliveryTitleText').textContent = t.deliveryTitle;
    document.getElementById('nameLabelText').innerHTML = `<i class="fa-solid fa-user"></i> ${t.nameLabel}`;
    document.getElementById('clientName').placeholder = t.namePlaceholder;
    document.getElementById('phoneLabelText').innerHTML = `<i class="fa-solid fa-phone"></i> ${t.phoneLabel}`;
    document.getElementById('clientPhone').placeholder = t.phonePlaceholder;
    document.getElementById('addressLabelText').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${t.addressLabel}`;
    document.getElementById('clientAddress').placeholder = t.addressPlaceholder;
    document.getElementById('totalLabelText').textContent = t.totalLabel;
    document.getElementById('whatsappBtnText').textContent = t.confirmWhatsapp;

    document.getElementById('footerDescText').textContent = t.footerDesc;
    document.getElementById('footerQuickLinksTitle').textContent = t.quickLinks;
    document.getElementById('footerProdLink').textContent = t.allProducts;
    document.getElementById('footerAboutLink').textContent = t.aboutLink;
    document.getElementById('footerDevTitle').textContent = t.devTitle;
    document.getElementById('footerDevName').textContent = t.devName;
    document.getElementById('footerRightsText').textContent = t.rights;
}

function renderProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    if(!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `<p style="width: 100%; text-align: center; padding: 40px; color: #777;">${currentLang === 'ar' ? 'لم يتم العثور على أي منتجات مطابقة.' : 'No matching products found.'}</p>`;
        return;
    }

    products.forEach(product => {
        const discountPercent = Math.round(((product.priceOld - product.priceCurrent) / product.priceOld) * 100);
        const titleText = product.title[currentLang];
        const currency = currentLang === 'ar' ? 'ج.م' : 'EGP';
        const saleBadge = currentLang === 'ar' ? `خصم ${discountPercent}%` : `${discountPercent}% OFF`;
        const addBtnText = translations[currentLang].addToCartBtn;
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper" onclick="openProductModal(${product.id})">
                <img src="${product.images[0].url}" alt="${titleText}">
                <span class="badge-sale">${saleBadge}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="openProductModal(${product.id})">${titleText}</h3>
                <div class="product-price">
                    <span class="current-price">${product.priceCurrent} ${currency}</span>
                    <span class="old-price">${product.priceOld} ${currency}</span>
                </div>
                <div class="card-actions">
                    <button class="btn-card-add" onclick="quickAddToCart(${product.id})">${addBtnText}</button>
                    <button class="btn-card-view" onclick="openProductModal(${product.id})"><i class="fa-regular fa-eye"></i></button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// ==========================================================================
// 4. دوال المودال وتحديث السلايدر الداخلي وتحديد الكمية
// ==========================================================================
function selectSize(btn, size) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeSize = size;
}

function openProductModal(productId) {
    selectedProductForModal = productsData.find(p => p.id === productId);
    if (!selectedProductForModal) return;

    currentImageIndex = 0;
    modalQuantity = 1;
    document.getElementById('modalQtyInput').value = modalQuantity;

    updateSliderImage();

    const currency = currentLang === 'ar' ? 'ج.م' : 'EGP';
    const discountPercent = Math.round(((selectedProductForModal.priceOld - selectedProductForModal.priceCurrent) / selectedProductForModal.priceOld) * 100);

    document.getElementById('modalTitle').textContent = selectedProductForModal.title[currentLang];
    document.getElementById('modalPriceCurrent').textContent = `${selectedProductForModal.priceCurrent} ${currency}`;
    document.getElementById('modalPriceOld').textContent = `${selectedProductForModal.priceOld} ${currency}`;
    document.getElementById('modalDiscountBadge').textContent = currentLang === 'ar' ? `بخصم ${discountPercent}%` : `${discountPercent}% OFF`;
    document.getElementById('modalDescription').textContent = selectedProductForModal.description[currentLang];

    const colorContainer = document.getElementById('colorOptions');
    if(colorContainer) {
        colorContainer.innerHTML = '';
        const availableColors = selectedProductForModal.colors[currentLang];
        activeColor = availableColors[0] || '';

        availableColors.forEach((color, index) => {
            const colorBtn = document.createElement('button');
            colorBtn.className = `color-btn ${index === 0 ? 'active' : ''}`;
            colorBtn.textContent = color;
            colorBtn.onclick = () => {
                document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
                colorBtn.classList.add('active');
                activeColor = color;
                if(selectedProductForModal.images[index]) {
                    currentImageIndex = index;
                    updateSliderImage();
                }
            };
            colorContainer.appendChild(colorBtn);
        });
    }

    const productModal = document.getElementById('productModal');
    if(productModal) productModal.classList.add('active');
}

function updateSliderImage() {
    if (!selectedProductForModal || !selectedProductForModal.images[currentImageIndex]) return;
    const imgObj = selectedProductForModal.images[currentImageIndex];
    document.getElementById('modalMainImg').src = imgObj.url;
    document.getElementById('modalImageCaption').textContent = imgObj.title[currentLang];
}

// ==========================================================================
// 5. إدارة السلة وإرسال الأوردر عبر الواتساب لرقم البراند (0123456789)
// ==========================================================================
function quickAddToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if(product) addToCartHandler(product, "M", product.colors[currentLang][0] || '', 1);
}

function addToCartHandler(product, size, color, qty) {
    cart.push({
        id: product.id,
        title: product.title[currentLang],
        price: product.priceCurrent,
        image: product.images[0].url,
        size: size,
        color: color,
        quantity: qty
    });
    updateCartUI();
    openCartDrawer();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartCount = document.getElementById('cartCount');
    const cartHeaderCount = document.getElementById('cartHeaderCount');
    const cartTotalPrice = document.getElementById('cartTotalPrice');

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const currency = currentLang === 'ar' ? 'ج.م' : 'EGP';

    if(cartCount) cartCount.textContent = totalCount;
    if(cartHeaderCount) cartHeaderCount.textContent = totalCount;
    if(cartTotalPrice) cartTotalPrice.textContent = `${totalPrice} ${currency}`;

    if (!cartItemsContainer) return;
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; color: #888; padding: 30px 0;">${translations[currentLang].emptyCart}</p>`;
        return;
    }

    cartItemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-meta">المقاس: ${item.size} | اللون: ${item.color} | الكمية: ${item.quantity}</div>
                    <div class="cart-item-price">${item.price * item.quantity} ${currency}</div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function sendOrderToWhatsApp() {
    if (cart.length === 0) {
        alert(currentLang === 'ar' ? "سلة المشتريات فارغة!" : "Shopping cart is empty!");
        return;
    }

    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const address = document.getElementById('clientAddress').value.trim();

    if (!name || !phone || !address) {
        alert(currentLang === 'ar' ? "يرجى ملء كافة بيانات التوصيل قبل تأكيد الطلب." : "Please fill in all delivery details.");
        return;
    }

    let itemsDetailsText = "";
    let totalPrice = 0;
    const currency = currentLang === 'ar' ? 'ج.م' : 'EGP';

    cart.forEach((item, i) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        itemsDetailsText += `${i + 1}️⃣ ${item.title} (${item.size} | ${item.color} | الكمية: ${item.quantity}) - ${itemTotal} ${currency}\n`;
    });

    const messageText = 
`🛍️ *طلب جديد من متجر Brand DIFFER*
----------------------------------
👤 *بيانات العميل:*
• *الاسم:* ${name}
• *الهاتف:* ${phone}
• *العنوان:* 📍 ${address}

📦 *تفاصيل المنتجات:*
${itemsDetailsText}
----------------------------------
💳 *إجمالي المبلغ:* ${totalPrice} ${currency}
----------------------------------
✨ شكراً لتسوقك من Brand DIFFER! ✨`;

    // رقم تواصل البراند الأساسي للأوردرات
    const brandWhatsAppNumber = "201029053373"; 
    const whatsappUrl = `https://wa.me/${brandWhatsAppNumber}?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, '_blank');

    cart = [];
    document.getElementById('whatsappCheckoutForm').reset();
    updateCartUI();
    closeCartDrawer();
}

function scrollToProducts() {
    const productsSection = document.getElementById('productsSection');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================================================
// 6. تفعيل الأحداث التفاعلية (الأسهم، القوائم، البحث، الترجمة)
// ==========================================================================
function setupEventListeners() {
    const sideDrawer = document.getElementById('sideDrawer');
    const cartDrawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');
    const productModal = document.getElementById('productModal');

    // أزرار التنقل بالأسهم في الصفحة الرئيسية
    const homePrevBtn = document.getElementById('homePrevBtn');
    const homeNextBtn = document.getElementById('homeNextBtn');
    const productsGrid = document.getElementById('productsGrid');

    if (homePrevBtn && productsGrid) {
        homePrevBtn.onclick = () => {
            productsGrid.scrollBy({ left: 300, behavior: 'smooth' });
        };
    }

    if (homeNextBtn && productsGrid) {
        homeNextBtn.onclick = () => {
            productsGrid.scrollBy({ left: -300, behavior: 'smooth' });
        };
    }

    // أزرار التنقل بالأسهم في نافذة تفاصيل المنتج
    const prevBtn = document.getElementById('sliderPrevBtn');
    const nextBtn = document.getElementById('sliderNextBtn');

    if(prevBtn) {
        prevBtn.onclick = () => {
            if (!selectedProductForModal) return;
            currentImageIndex = (currentImageIndex - 1 + selectedProductForModal.images.length) % selectedProductForModal.images.length;
            updateSliderImage();
        };
    }

    if(nextBtn) {
        nextBtn.onclick = () => {
            if (!selectedProductForModal) return;
            currentImageIndex = (currentImageIndex + 1) % selectedProductForModal.images.length;
            updateSliderImage();
        };
    }

    // أزرار الكمية (+ و -)
    const qtyPlusBtn = document.getElementById('qtyPlusBtn');
    const qtyMinusBtn = document.getElementById('qtyMinusBtn');
    const qtyInput = document.getElementById('modalQtyInput');

    if(qtyPlusBtn && qtyInput) {
        qtyPlusBtn.onclick = () => {
            modalQuantity++;
            qtyInput.value = modalQuantity;
        };
    }

    if(qtyMinusBtn && qtyInput) {
        qtyMinusBtn.onclick = () => {
            if(modalQuantity > 1) {
                modalQuantity--;
                qtyInput.value = modalQuantity;
            }
        };
    }

    const openMenuBtn = document.getElementById('openMenuBtn');
    if (openMenuBtn) {
        openMenuBtn.onclick = () => {
            if(sideDrawer) sideDrawer.classList.add('active');
            if(overlay) overlay.classList.add('active');
        };
    }

    const closeMenuBtn = document.getElementById('closeMenuBtn');
    if (closeMenuBtn) closeMenuBtn.onclick = closeDrawers;

    const openCartBtn = document.getElementById('openCartBtn');
    if (openCartBtn) openCartBtn.onclick = openCartDrawer;

    const closeCartBtn = document.getElementById('closeCartBtn');
    if (closeCartBtn) closeCartBtn.onclick = closeCartDrawer;

    if (overlay) overlay.onclick = closeDrawers;

    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.onclick = () => {
            if(productModal) productModal.classList.remove('active');
        };
    }

    const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
    if(modalAddToCartBtn) {
        modalAddToCartBtn.onclick = () => {
            if (selectedProductForModal) {
                addToCartHandler(selectedProductForModal, activeSize, activeColor, modalQuantity);
                productModal.classList.remove('active');
            }
        };
    }

    const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
    if (sendWhatsappBtn) sendWhatsappBtn.onclick = sendOrderToWhatsApp;

    const searchToggleBtn = document.getElementById('toggleSearchBtn');
    const searchBarContainer = document.getElementById('searchBarContainer');
    const searchInput = document.getElementById('searchInput');

    if (searchToggleBtn && searchBarContainer) {
        searchToggleBtn.onclick = () => {
            searchBarContainer.classList.toggle('active');
            if (searchBarContainer.classList.contains('active') && searchInput) {
                searchInput.focus();
            }
        };
    }

    if (searchInput) {
        searchInput.oninput = (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filtered = productsData.filter(p => 
                p.title.ar.toLowerCase().includes(query) || 
                p.title.en.toLowerCase().includes(query) || 
                p.season.toLowerCase().includes(query)
            );
            renderProducts(filtered);
            scrollToProducts();
        };
    }

    const clearSearchBtn = document.getElementById('clearSearchBtn');
    if (clearSearchBtn && searchInput) {
        clearSearchBtn.onclick = () => {
            searchInput.value = '';
            renderProducts(productsData);
        };
    }

    // زر تغيير اللغة بدون تغيير اتجاه الصفحة
    const toggleLangBtn = document.getElementById('toggleLangBtn');
    const langText = document.getElementById('langText');
    if (toggleLangBtn) {
        toggleLangBtn.onclick = () => {
            if (currentLang === 'ar') {
                currentLang = 'en';
                if(langText) langText.textContent = 'AR';
            } else {
                currentLang = 'ar';
                if(langText) langText.textContent = 'EN';
            }
            updateStaticTexts();
            renderProducts(productsData);
            updateCartUI();
        };
    }

    document.querySelectorAll('.filter-category, .quick-filter-btn').forEach(element => {
        element.onclick = (e) => {
            e.preventDefault();
            const category = element.getAttribute('data-category');
            
            document.querySelectorAll('.filter-category, .quick-filter-btn').forEach(el => el.classList.remove('active'));
            element.classList.add('active');

            if (category === 'all') {
                renderProducts(productsData);
                document.getElementById('currentCategoryTitle').textContent = translations[currentLang].allProducts;
            } else {
                const filtered = productsData.filter(p => p.season === category);
                renderProducts(filtered);
                document.getElementById('currentCategoryTitle').textContent = element.textContent.trim();
            }
            closeDrawers();
            scrollToProducts();
        };
    });
}

function openCartDrawer() {
    const cartDrawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');
    if(cartDrawer) cartDrawer.classList.add('active');
    if(overlay) overlay.classList.add('active');
}

function closeCartDrawer() {
    const cartDrawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');
    if(cartDrawer) cartDrawer.classList.remove('active');
    if(overlay) overlay.classList.remove('active');
}

function closeDrawers() {
    const sideDrawer = document.getElementById('sideDrawer');
    const cartDrawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');
    if(sideDrawer) sideDrawer.classList.remove('active');
    if(cartDrawer) cartDrawer.classList.remove('active');
    if(overlay) overlay.classList.remove('active');
}