document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- Interactive Cursor Glow ---
    const glow = document.querySelector('.cursor-glow');
    if (glow) {
        document.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    }

    // --- Language Translation ---
    const translations = {
        en: { nav_features: "Features", nav_commands: "Commands", nav_support: "Support", hero_title: "The Ultimate Tic-Tac-Toe Experience.", hero_subtitle: "Challenge your friends or our smart AI. Simple, fun, and competitive.", hero_cta_add: "Add to Discord", hero_cta_vote: "Vote for Bot", stats_servers: "Servers", stats_users: "Users", features_title: "Powerful Features", feature_1_title: "Play with Friends or Bot", feature_1_desc: "Challenge a friend for a classic match or test your skills against our smart AI.", feature_2_title: "Leaderboards & Stats", feature_2_desc: "Track your wins, losses, and draws. Climb the leaderboard to become the champion.", feature_3_title: "Multi-Language Support", feature_3_desc: "Play in Thai, English, or Japanese. The bot adapts to your preferred language.", commands_title: "All Commands", cmd_play: "Starts a game with another player.", cmd_playbot: "Starts a game against the AI bot.", cmd_stop: "Stops the current game.", cmd_leaderboard: "Shows the server's top players.", cmd_stats: "View your or another player's stats.", cmd_setlanguage: "Changes the bot's language.", footer_terms: "Terms of Service", footer_privacy: "Privacy Policy" },
        th: { nav_features: "ฟีเจอร์", nav_commands: "คำสั่ง", nav_support: "สนับสนุน", hero_title: "สุดยอดประสบการณ์ Tic-Tac-Toe", hero_subtitle: "ท้าทายเพื่อนของคุณหรือ AI อัจฉริยะของเรา เรียบง่าย สนุก และแข่งขันได้", hero_cta_add: "เพิ่มเข้าสู่ Discord", hero_cta_vote: "โหวตให้บอท", stats_servers: "เซิร์ฟเวอร์", stats_users: "ผู้ใช้งาน", features_title: "ฟีเจอร์เด่น", feature_1_title: "เล่นกับเพื่อนหรือบอท", feature_1_desc: "ท้าทายเพื่อนในเกมคลาสสิก หรือทดสอบฝีมือของคุณกับ AI อัจฉริยะ", feature_2_title: "กระดานผู้นำและสถิติ", feature_2_desc: "ติดตามการชนะ, แพ้, และเสมอ ไต่อันดับเพื่อเป็นแชมป์เปี้ยน", feature_3_title: "รองรับหลายภาษา", feature_3_desc: "เล่นได้ทั้งภาษาไทย, อังกฤษ, หรือญี่ปุ่น บอทจะปรับตามภาษาที่คุณต้องการ", commands_title: "คำสั่งทั้งหมด", cmd_play: "เริ่มเกมกับผู้เล่นอื่น", cmd_playbot: "เริ่มเกมกับบอท AI", cmd_stop: "หยุดเกมปัจจุบัน", cmd_leaderboard: "แสดงอันดับผู้เล่นสูงสุด", cmd_stats: "ดูสถิติของคุณหรือผู้เล่นอื่น", cmd_setlanguage: "เปลี่ยนภาษาของบอท", footer_terms: "ข้อกำหนดในการให้บริการ", footer_privacy: "นโยบายความเป็นส่วนตัว" },
        ja: { nav_features: "特徴", nav_commands: "コマンド", nav_support: "サポート", hero_title: "究極の三目並べ体験", hero_subtitle: "友達や賢いAIに挑戦しよう。シンプルで楽しく、競争力があります。", hero_cta_add: "Discordに追加", hero_cta_vote: "ボットに投票", stats_servers: "サーバー", stats_users: "ユーザー", features_title: "強力な機能", feature_1_title: "友達やボットと対戦", feature_1_desc: "クラシックなマッチで友達に挑戦したり、賢いAIでスキルを試したりできます。", feature_2_title: "リーダーボードと統計", feature_2_desc: "勝ち、負け、引き分けを追跡します。リーダーボードを駆け上がってチャンピオンを目指しましょう。", feature_3_title: "多言語対応", feature_3_desc: "タイ語、英語、日本語でプレイできます。ボットはあなたの好みの言語に適応します。", commands_title: "すべてのコマンド", cmd_play: "他のプレイヤーとゲームを開始します。", cmd_playbot: "AIボットと対戦します。", cmd_stop: "現在のゲームを停止します。", cmd_leaderboard: "サーバーのトッププレイヤーを表示します。", cmd_stats: "自分または他のプレイヤーの統計を表示します。", cmd_setlanguage: "ボットの言語を変更します。", footer_terms: "利用規約", footer_privacy: "プライバシーポリシー" }
    };
    const langSwitcher = document.getElementById('lang-switcher');
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang]?.[key]) { el.textContent = translations[lang][key]; }
        });
        localStorage.setItem('xo-arena-lang', lang);
        langSwitcher.value = lang;
    };
    langSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));
    setLanguage(localStorage.getItem('xo-arena-lang') || 'en');

    // --- Real-time Bot Stats ---
    const serverCountEl = document.getElementById('server-count');
    const userCountEl = document.getElementById('user-count');

    function animateValueUpdate(element) {
        element.classList.add('updated');
        setTimeout(() => {
            element.classList.remove('updated');
        }, 500);
    }

    async function fetchBotStats() {
        // !! สำคัญ: ใส่ URL ของ API ที่คุณสร้างบนบอทของคุณตรงนี้
        const apiUrl = 'https://your-bot-api-endpoint.com/stats'; // <--- แทนที่ URL นี้

        try {
            /* โค้ดสำหรับดึงข้อมูลจริง (ตอนนี้ปิดไว้)
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            
            if (serverCountEl.textContent !== data.serverCount.toLocaleString()) {
                serverCountEl.textContent = data.serverCount.toLocaleString();
                animateValueUpdate(serverCountEl);
            }
            if (userCountEl.textContent !== data.userCount.toLocaleString()) {
                userCountEl.textContent = data.userCount.toLocaleString();
                animateValueUpdate(userCountEl);
            }
            */

            // --- โค้ดตัวอย่างสำหรับแสดงผล (ลบออกเมื่อใช้ API จริง) ---
            const randomServers = (75  + Math.floor(Math.random() * 100)).toLocaleString();
            const randomUsers = (11,250  + Math.floor(Math.random() * 1000)).toLocaleString();
            if (serverCountEl.textContent !== randomServers) {
                serverCountEl.textContent = randomServers;
                animateValueUpdate(serverCountEl);
            }
            if (userCountEl.textContent !== randomUsers) {
                userCountEl.textContent = randomUsers;
                animateValueUpdate(userCountEl);
            }
            // --- จบโค้ดตัวอย่าง ---

        } catch (error) {
            console.error("Failed to fetch bot stats:", error);
            serverCountEl.textContent = 'N/A';
            userCountEl.textContent = 'N/A';
        }
    }

    // Fetch stats immediately and then every 30 seconds
    fetchBotStats();
    setInterval(fetchBotStats, 30000);


    // --- Scroll Reveal Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
