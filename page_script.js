document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    // ตรวจสอบว่ามีปุ่มนี้ในหน้าหรือไม่
    if (themeToggle) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // กำหนดค่าเริ่มต้นเป็น dark ถ้าไม่มีการตั้งค่าไว้
        const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', savedTheme);

        themeToggle.addEventListener('click', () => {
            let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- Language Translation ---
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        const translations = {
            en: { shop_title: "Shop", shop_subtitle: "Exclusive items from NosuTeam.", product1_name: "Nosu 1st Anniversary LINE Sticker", product1_price: "THB 35", buy_button: "Buy Now" },
            th: { shop_title: "ร้านค้า", shop_subtitle: "สินค้าสุดพิเศษจาก NosuTeam", product1_name: "สติ๊กเกอร์ไลน์ Nosu ครบรอบ 1 ปี", product1_price: "฿35", buy_button: "ซื้อเลย" },
            ja: { shop_title: "ショップ", shop_subtitle: "NosuTeamからの限定アイテム", product1_name: "ノス1周年記念LINEスタンプ", product1_price: "THB 35", buy_button: "今すぐ購入" }
        };

        const setLanguage = (lang) => {
            document.documentElement.lang = lang;
            // Logic for data-lang attributes
            document.querySelectorAll('[data-lang]').forEach(el => {
                const key = el.getAttribute('data-lang');
                if (translations[lang]?.[key]) {
                    el.textContent = translations[lang][key];
                }
            });
            // Logic for full-content divs (for terms/privacy)
            document.querySelectorAll('.lang-content').forEach(div => {
                div.style.display = 'none';
            });
            const activeDiv = document.getElementById(lang + '-content');
            if (activeDiv) {
                activeDiv.style.display = 'block';
            }
            localStorage.setItem('xo-arena-lang', lang);
            langSwitcher.value = lang;
        };

        langSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));
        setLanguage(localStorage.getItem('xo-arena-lang') || 'en');
    }
});
