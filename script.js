document.addEventListener('DOMContentLoaded', () => {

    // --- Language Translation Data ---
    const translations = {
        en: {
            nav_features: "Features",
            nav_commands: "Commands",
            nav_support: "Support Server",
            hero_title: "The Ultimate Tic-Tac-Toe Experience.",
            hero_subtitle: "Challenge your friends or our smart AI. Simple, fun, and competitive.",
            hero_cta_add: "Add to Discord",
            hero_cta_vote: "Vote for Bot",
            stats_servers: "Servers",
            stats_users: "Users",
            how_to_play_title: "How to Play",
            how_to_play_intro: "XO Arena brings the classic Tic-Tac-Toe game to your Discord server. It's simple: get three of your marks in a row (horizontally, vertically, or diagonally) to win. Games will time out after 60 seconds of inactivity.",
            how_to_play_step1: "Start a game with /play (vs. a friend) or /playbot (vs. the bot).",
            how_to_play_step2: "Take turns placing your mark by clicking the buttons on the grid.",
            how_to_play_step3: "The first to get three in a row wins. If the grid is full, it's a draw!",
            commands_title: "All Commands",
            cmd_play: "Starts a game with another player.",
            cmd_playbot: "Starts a game against the AI bot.",
            cmd_stop: "Stops the current game.",
            cmd_leaderboard: "Shows the server's top players.",
            cmd_stats: "View your or another player's stats.",
            cmd_setlanguage: "Changes the bot's language.",
            cmd_settimezone: "Sets your personal timezone.",
            cmd_feedback: "Send feedback directly to the developers.",
            features_title: "Powerful Features",
            feature_1_title: "Play with Friends or Bot",
            feature_1_desc: "Challenge a friend for a classic match or test your skills against our smart AI.",
            feature_2_title: "Leaderboards & Stats",
            feature_2_desc: "Track your wins, losses, and draws. Climb the leaderboard to become the champion.",
            feature_3_title: "Multi-Language Support",
            feature_3_desc: "Play in Thai, English, or Japanese. The bot adapts to your preferred language.",
            footer_developed_by: "Developed by NosuTeam",
        },
        th: {
            nav_features: "ฟีเจอร์",
            nav_commands: "คำสั่ง",
            nav_support: "เซิร์ฟเวอร์สนับสนุน",
            hero_title: "สุดยอดประสบการณ์ Tic-Tac-Toe",
            hero_subtitle: "ท้าทายเพื่อนของคุณหรือ AI อัจฉริยะของเรา เรียบง่าย สนุก และแข่งขันได้",
            hero_cta_add: "เพิ่มเข้าสู่ Discord",
            hero_cta_vote: "โหวตให้บอท",
            stats_servers: "เซิร์ฟเวอร์",
            stats_users: "ผู้ใช้งาน",
            how_to_play_title: "วิธีเล่น",
            how_to_play_intro: "XO Arena นำเกม Tic-Tac-Toe สุดคลาสสิกมาสู่เซิร์ฟเวอร์ Discord ของคุณ กติกาง่ายๆ: วางสัญลักษณ์ของคุณให้เรียงกันสามตัว (แนวนอน, แนวตั้ง, หรือแนวทแยง) เพื่อชนะ เกมจะหมดเวลาหลังจากไม่มีการใช้งาน 60 วินาที",
            how_to_play_step1: "เริ่มเกมด้วย /play (สู้กับเพื่อน) หรือ /playbot (สู้กับบอท)",
            how_to_play_step2: "ผลัดกันวางสัญลักษณ์โดยคลิกปุ่มบนตาราง",
            how_to_play_step3: "ใครวางครบสามตัวก่อนเป็นผู้ชนะ หากตารางเต็มจะถือว่าเสมอ",
            commands_title: "คำสั่งทั้งหมด",
            cmd_play: "เริ่มเกมกับผู้เล่นอื่น",
            cmd_playbot: "เริ่มเกมกับบอท AI",
            cmd_stop: "หยุดเกมปัจจุบัน",
            cmd_leaderboard: "แสดงอันดับผู้เล่นสูงสุดของเซิร์ฟเวอร์",
            cmd_stats: "ดูสถิติของคุณหรือผู้เล่นอื่น",
            cmd_setlanguage: "เปลี่ยนภาษาของบอท",
            cmd_settimezone: "ตั้งค่าเขตเวลาส่วนตัวของคุณ",
            cmd_feedback: "ส่งข้อเสนอแนะถึงผู้พัฒนาโดยตรง",
            features_title: "ฟีเจอร์เด่น",
            feature_1_title: "เล่นกับเพื่อนหรือบอท",
            feature_1_desc: "ท้าทายเพื่อนในเกมคลาสสิก หรือทดสอบฝีมือของคุณกับ AI อัจฉริยะของเรา",
            feature_2_title: "กระดานผู้นำและสถิติ",
            feature_2_desc: "ติดตามการชนะ, แพ้, และเสมอของคุณ ไต่อันดับบนกระดานผู้นำเพื่อเป็นแชมป์เปี้ยน",
            feature_3_title: "รองรับหลายภาษา",
            feature_3_desc: "เล่นได้ทั้งภาษาไทย, อังกฤษ, หรือญี่ปุ่น บอทจะปรับตามภาษาที่คุณต้องการ",
            footer_developed_by: "พัฒนาโดย NosuTeam",
        },
        ja: {
            nav_features: "特徴",
            nav_commands: "コマンド",
            nav_support: "サポートサーバー",
            hero_title: "究極の三目並べ体験",
            hero_subtitle: "友達や賢いAIに挑戦しよう。シンプルで楽しく、競争力があります。",
            hero_cta_add: "Discordに追加",
            hero_cta_vote: "ボットに投票",
            stats_servers: "サーバー",
            stats_users: "ユーザー",
            how_to_play_title: "遊び方",
            how_to_play_intro: "XO Arenaは、クラシックな三目並べゲームをあなたのDiscordサーバーにお届けします。ルールは簡単：自分のマークを3つ並べる（水平、垂直、または斜め）と勝ちです。60秒間操作がない場合、ゲームはタイムアウトします。",
            how_to_play_step1: "/play（友達と対戦）または/playbot（ボットと対戦）でゲームを開始します。",
            how_to_play_step2: "グリッド上のボタンをクリックして、順番にマークを置きます。",
            how_to_play_step3: "最初に3つ並べた方が勝ちです。グリッドが埋まった場合は引き分けです。",
            commands_title: "すべてのコマンド",
            cmd_play: "他のプレイヤーとゲームを開始します。",
            cmd_playbot: "AIボットと対戦します。",
            cmd_stop: "現在のゲームを停止します。",
            cmd_leaderboard: "サーバーのトッププレイヤーを表示します。",
            cmd_stats: "自分または他のプレイヤーの統計を表示します。",
            cmd_setlanguage: "ボットの言語を変更します。",
            cmd_settimezone: "個人のタイムゾーンを設定します。",
            cmd_feedback: "開発者に直接フィードバックを送信します。",
            features_title: "強力な機能",
            feature_1_title: "友達やボットと対戦",
            feature_1_desc: "クラシックなマッチで友達に挑戦したり、賢いAIでスキルを試したりできます。",
            feature_2_title: "リーダーボードと統計",
            feature_2_desc: "勝ち、負け、引き分けを追跡します。リーダーボードを駆け上がってチャンピオンを目指しましょう。",
            feature_3_title: "多言語対応",
            feature_3_desc: "タイ語、英語、日本語でプレイできます。ボットはあなたの好みの言語に適応します。",
            footer_developed_by: "NosuTeamによって開発されました",
        }
    };

    const langSwitcher = document.getElementById('lang-switcher');
    
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('xo-arena-lang', lang);
        langSwitcher.value = lang;
    };

    langSwitcher.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Set initial language (check local storage, then default to 'en')
    const savedLang = localStorage.getItem('xo-arena-lang') || 'en';
    setLanguage(savedLang);

    // --- Bot Stats Fetching ---
    // !! สำคัญ: คุณต้องสร้าง API endpoint บนบอทของคุณเพื่อส่งข้อมูลนี้
    // ตัวอย่าง endpoint: https://your-bot-api.com/stats
    // ซึ่งจะ return JSON แบบนี้: { "serverCount": 1234, "userCount": 56789 }
    const fetchBotStats = () => {
        // ใช้ URL จริงของ API ของคุณแทนที่ 'YOUR_API_ENDPOINT'
        // const apiUrl = 'https://your-bot-api.com/stats';
        // fetch(apiUrl)
        //     .then(response => response.json())
        //     .then(data => {
        //         document.getElementById('server-count').textContent = data.serverCount.toLocaleString();
        //         document.getElementById('user-count').textContent = data.userCount.toLocaleString();
        //     })
        //     .catch(error => {
        //         console.error('Error fetching bot stats:', error);
        //         document.getElementById('server-count').textContent = 'N/A';
        //         document.getElementById('user-count').textContent = 'N/A';
        //     });
        
        // --- โค้ดตัวอย่างสำหรับแสดงผลชั่วคราว (ลบออกเมื่อใช้ API จริง) ---
        setTimeout(() => {
            document.getElementById('server-count').textContent = "1,520";
            document.getElementById('user-count').textContent = "89,430";
        }, 1000);
        // --- สิ้นสุดโค้ดตัวอย่าง ---
    };

    fetchBotStats();

    // --- Scroll Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});
