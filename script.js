// ===== Translations =====
const translations = {
  sv: {
    flag: "🇸🇪", name: "Svenska",
    title: "Vill du bli min Valentine?",
    subtitle: "Du gör varje dag magisk ✨",
    btnYes: "Ja, absolut! 💖",
    btnNo: "Nej 😢",
    celTitle: "JAAAAA! 🎉💖🎉",
    celSubtitle: "Jag visste det! 🥰",
    celText: "Du är den bästa i hela världen!",
    celFooter: "Älskar dig för alltid 💕",
    noMessages: [
      "Är du säker? 🥺", "Tänk om en gång till... 💭", "Titta på den andra knappen! 👀",
      "Du vet att du vill! 😏", "Sista chansen att ångra dig! 💖", "Okej nu blir det löjligt... 😤",
      "JAG GER MIG INTE! 💪", "Knappen växer ju bara... 🤭", "Tryck på JA istället! 🙏", "Du kan inte neka! 💕"
    ]
  },
  en: {
    flag: "🇬🇧", name: "English",
    title: "Will you be my Valentine?",
    subtitle: "You make every day magical ✨",
    btnYes: "Yes, absolutely! 💖",
    btnNo: "No 😢",
    celTitle: "YESSSSS! 🎉💖🎉",
    celSubtitle: "I knew it! 🥰",
    celText: "You are the best in the world!",
    celFooter: "Love you forever 💕",
    noMessages: [
      "Are you sure? 🥺", "Think one more time... 💭", "Look at the other button! 👀",
      "You know you want to! 😏", "Last chance to change your mind! 💖", "Okay now it's getting ridiculous... 😤",
      "I AM NOT GIVING UP! 💪", "The button is just growing... 🤭", "Press YES instead! 🙏", "You can't deny! 💕"
    ]
  },
  es: {
    flag: "🇪🇸", name: "Español",
    title: "¿Quieres ser mi San Valentín?",
    subtitle: "Haces que cada día sea mágico ✨",
    btnYes: "¡Sí, por supuesto! 💖",
    btnNo: "No 😢",
    celTitle: "¡SÍIIIII! 🎉💖🎉",
    celSubtitle: "¡Lo sabía! 🥰",
    celText: "¡Eres la mejor persona del mundo!",
    celFooter: "Te amo por siempre 💕",
    noMessages: [
      "¿Estás segura? 🥺", "Piénsalo una vez más... 💭", "¡Mira el otro botón! 👀",
      "¡Sabes que quieres! 😏", "¡Última oportunidad para arrepentirte! 💖", "Vale, ahora es ridículo... 😤",
      "¡NO ME RINDO! 💪", "El botón solo crece... 🤭", "¡Presiona SÍ en su lugar! 🙏", "¡No puedes decir que no! 💕"
    ]
  },
  zh: {
    flag: "🇨🇳", name: "中文",
    title: "你愿意做我的情人吗？",
    subtitle: "你让每一天都变得神奇 ✨",
    btnYes: "愿意，当然愿意！ 💖",
    btnNo: "不要 😢",
    celTitle: "太好了！ 🎉💖🎉",
    celSubtitle: "我就知道！ 🥰",
    celText: "你是世界上最好的人！",
    celFooter: "永远爱你 💕",
    noMessages: [
      "你确定吗？ 🥺", "再考虑一下吧... 💭", "看看另一个按钮！ 👀",
      "你知道你想选的！ 😏", "最后一次反悔的机会！ 💖", "好吧，现在有点过离谱了... 😤",
      "我绝不放弃！ 💪", "按钮只会越变越大... 🤭", "还是按“愿意”吧！ 🙏", "你无法拒绝！ 💕"
    ]
  },
  hi: {
    flag: "🇮🇳", name: "हिन्दी",
    title: "क्या तुम मेरी वैलेंटाइन बनोगी?",
    subtitle: "तुम हर दिन को जादुई बनाती हो ✨",
    btnYes: "हाँ, बिल्कुल! 💖",
    btnNo: "नहीं 😢",
    celTitle: "हाँ! 🎉💖🎉",
    celSubtitle: "मुझे पता था! 🥰",
    celText: "तुम दुनिया में सबसे अच्छी हो!",
    celFooter: "हमेशा के लिए प्यार 💕",
    noMessages: [
      "क्या तुम वाकई यकीन रखती हो? 🥺", "एक बार फिर सोचो... 💭", "दूसरे बटन को देखो! 👀",
      "तुम जानती हो तुम चाहती हो! 😏", "अपना मन बदलने का आखिरी मौका! 💖", "ठीक है, अब यह मज़ाक लग रहा है... 😤",
      "मैं हार नहीं मानूँगा! 💪", "बटन बस बड़ा होता जा रहा है... 🤭", "इसके बजाय हाँ दबाएं! 🙏", "तुम मना नहीं कर सकती! 💕"
    ]
  },
  no: {
    flag: "🇳🇴", name: "Norsk",
    title: "Vil du bli min Valentine?",
    subtitle: "Du gjør hver dag magisk ✨",
    btnYes: "Ja, absolutt! 💖",
    btnNo: "Nei 😢",
    celTitle: "JAAAAA! 🎉💖🎉",
    celSubtitle: "Jeg visste det! 🥰",
    celText: "Du er den beste i hele verden!",
    celFooter: "Elsker deg for alltid 💕",
    noMessages: [
      "Er du sikker? 🥺", "Tenk deg om en gang til... 💭", "Se på den andre knappen! 👀",
      "Du vet du vil! 😏", "Siste sjanse til å ombestemme deg! 💖", "Ok, nå blir det latterlig... 😤",
      "JEG GIR MEG IKKE! 💪", "Knappen bare vokser... 🤭", "Trykk på JA i stedet! 🙏", "Du kan ikke nekte! 💕"
    ]
  },
  da: {
    flag: "🇩🇰", name: "Dansk",
    title: "Vil du være min Valentine?",
    subtitle: "Du gør hver dag magisk ✨",
    btnYes: "Ja, absolut! 💖",
    btnNo: "Nej 😢",
    celTitle: "JAAAAA! 🎉💖🎉",
    celSubtitle: "Jeg vidste det! 🥰",
    celText: "Du er den bedste i hele verden!",
    celFooter: "Elsker dig for evigt 💕",
    noMessages: [
      "Er du sikker? 🥺", "Tænk dig om en gang til... 💭", "Se på den anden knap! 👀",
      "Du ved du vil! 😏", "Sidste chance for at fortryde! 💖", "Ok, nu bliver det fjollet... 😤",
      "JEG GIVER MIG IKKE! 💪", "Knappen vokser bare... 🤭", "Tryk på JA i stedet! 🙏", "Du kan ikke nægte! 💕"
    ]
  },
  fi: {
    flag: "🇫🇮", name: "Suomi",
    title: "Haluatko olla minun Valentinuksena?",
    subtitle: "Teet jokaisesta päivästä taianomaisen ✨",
    btnYes: "Kyllä, ehdottomasti! 💖",
    btnNo: "Ei 😢",
    celTitle: "JEEEEE! 🎉💖🎉",
    celSubtitle: "Tiesin sen! 🥰",
    celText: "Olet maailman paras!",
    celFooter: "Rakastan sinua ikuisesti 💕",
    noMessages: [
      "Oletko varma? 🥺", "Mieti vielä kerran... 💭", "Katso toista painiketta! 👀",
      "Tiedät haluavasi! 😏", "Viimeinen mahdollisuus muuttaa mielesi! 💖", "Okei, nyt menee jo naurettavaksi... 😤",
      "EN ANNA PERIKSI! 💪", "Painike vain kasvaa... 🤭", "Paina KYLLÄ sen sijaan! 🙏", "Et voi kieltäytyä! 💕"
    ]
  },
  ar: {
    flag: "🇸🇦", name: "العربية",
    title: "هل تقبلين أن تكوني الفالنتاين الخاص بي؟",
    subtitle: "أنتِ تجعلين كل يوم ساحراً ✨",
    btnYes: "نعم، بالتأكيد! 💖",
    btnNo: "لا 😢",
    celTitle: "نعممممم! 🎉💖🎉",
    celSubtitle: "كنت أعرف! 🥰",
    celText: "أنتِ الأفضل في العالم!",
    celFooter: "أحبك للأبد 💕",
    noMessages: [
      "هل أنتِ متأكدة؟ 🥺", "فكري مرة أخرى... 💭", "انظري إلى الزر الآخر! 👀",
      "أنتِ تعرفين أنكِ تريدين! 😏", "الفرصة الأخيرة لتغيير رأيك! 💖", "حسناً، أصبح الأمر سخيفاً الآن... 😤",
      "لن أستسلم! 💪", "الزر يكبر فقط... 🤭", "اضغطي على نعم بدلاً من ذلك! 🙏", "لا يمكنكِ الرفض! 💕"
    ]
  },
  fr: {
    flag: "🇫🇷", name: "Français",
    title: "Veux-tu être ma Valentine ?",
    subtitle: "Tu rends chaque jour magique ✨",
    btnYes: "Oui, absolument ! 💖",
    btnNo: "Non 😢",
    celTitle: "OUI IIIII ! 🎉💖🎉",
    celSubtitle: "Je le savais ! 🥰",
    celText: "Tu es la meilleure personne au monde !",
    celFooter: "Je t'aime pour toujours 💕",
    noMessages: [
      "Es-tu sûre ? 🥺", "Réfléchis encore une fois... 💭", "Regarde l'autre bouton ! 👀",
      "Tu sais que tu en as envie ! 😏", "Dernière chance de changer d'avis ! 💖", "Ok, ça devient ridicule là... 😤",
      "JE NE LÂCHE RIEN ! 💪", "Le bouton ne fait que grossir... 🤭", "Appuie sur OUI plutôt ! 🙏", "Tu ne peux pas nier ! 💕"
    ]
  },
  bn: {
    flag: "🇧🇩", name: "বাংলা",
    title: "তুমি কি আমার ভ্যালেন্টাইন হবে?",
    subtitle: "তুমি প্রতিটি দিনকে মায়াবী করে তোলো ✨",
    btnYes: "হ্যাঁ, অবশ্যই! 💖",
    btnNo: "না 😢",
    celTitle: "হ্যাঁ! 🎉💖🎉",
    celSubtitle: "আমি জানতাম! 🥰",
    celText: "তুমি পৃথিবীর সেরা!",
    celFooter: "তোমাকে চিরকাল ভালোবাসব 💕",
    noMessages: [
      "তুমি কি নিশ্চিত? 🥺", "আরও একবার ভাবো... 💭", "অন্য বোতামটি দেখো! 👀",
      "তুমি জানো তুমি চাও! 😏", "মত বদলানোর শেষ সুযোগ! 💖", "ঠিক আছে, এখন এটা হাস্যকর হয়ে যাচ্ছে... 😤",
      "আমি হাল ছাড়ছি না! 💪", "বোতামটি শুধু বড় হচ্ছে... 🤭", "এর পরিবর্তে হ্যাঁ চাপুন! 🙏", "তুমি অস্বীকার করতে পারবে না! 💕"
    ]
  },
  pt: {
    flag: "🇵🇹", name: "Português",
    title: "Queres ser a minha Valentine?",
    subtitle: "Tu tornas todos os dias mágicos ✨",
    btnYes: "Sim, com certeza! 💖",
    btnNo: "Não 😢",
    celTitle: "SIMMMMMM! 🎉💖🎉",
    celSubtitle: "Eu já sabia! 🥰",
    celText: "És a melhor pessoa do mundo!",
    celFooter: "Amo-te para sempre 💕",
    noMessages: [
      "Tens a certeza? 🥺", "Pensa mais uma vez... 💭", "Olha para o outro botão! 👀",
      "Sabes que queres! 😏", "Última oportunidade para mudar de ideias! 💖", "Ok, agora está a ficar ridículo... 😤",
      "EU NÃO DESISTO! 💪", "O botão só está a crescer... 🤭", "Prime SIM em vez disso! 🙏", "Não podes negar! 💕"
    ]
  },
  id: {
    flag: "🇮🇩", name: "Indonesia",
    title: "Maukah kamu menjadi Valentine-ku?",
    subtitle: "Kamu membuat setiap hari ajaib ✨",
    btnYes: "Ya, tentu saja! 💖",
    btnNo: "Tidak 😢",
    celTitle: "YEEEEEES! 🎉💖🎉",
    celSubtitle: "Aku sudah tahu! 🥰",
    celText: "Kamu yang terbaik di dunia!",
    celFooter: "Mencintaimu selamanya 💕",
    noMessages: [
      "Kamu yakin? 🥺", "Pikirkan sekali lagi... 💭", "Lihat tombol satunya! 👀",
      "Kamu tahu kamu mau! 😏", "Kesempatan terakhir untuk berubah pikiran! 💖", "Oke, sekarang ini sudah konyol... 😤",
      "AKU TIDAK MENYERAH! 💪", "Tombolnya terus membesar... 🤭", "Tekan YA saja! 🙏", "Kamu tidak bisa menolak! 💕"
    ]
  },
  ur: {
    flag: "🇵🇰", name: "اردو",
    title: "کیا تم میری ویلنٹائن بنو گی؟",
    subtitle: "تم ہر دن کو جادوئی بناتی ہو ✨",
    btnYes: "ہاں، بالکل! 💖",
    btnNo: "نہیں 😢",
    celTitle: "ہاں! 🎉💖🎉",
    celSubtitle: "مجھے معلوم تھا! 🥰",
    celText: "تم دنیا میں سب سے اچھی ہو!",
    celFooter: "ہمیشہ کے لیے پیار 💕",
    noMessages: [
      "کیا آپ کو یقین ہے؟ 🥺", "ایک بار پھر سوچیں... 💭", "دوسرے بٹن کو دیکھیں! 👀",
      "آپ کو معلوم ہے کہ آپ چاہتی ہیں! 😏", "اپنا ذہن بدلنے کا آخری موقع! 💖", "ٹھیک ہے، اب یہ مضحکہ خیز ہو رہا ہے... 😤",
      "میں ہار نہیں مانوں گا! 💪", "بٹن بس بڑا ہو رہا ہے... 🤭", "اس کے بجائے ہاں دبائیں! 🙏", "آپ انکار نہیں کر سکتیں! 💕"
    ]
  },
  de: {
    flag: "🇩🇪", name: "Deutsch",
    title: "Willst du meine Valentine sein?",
    subtitle: "Du machst jeden Tag magisch ✨",
    btnYes: "Ja, absolut! 💖",
    btnNo: "Nein 😢",
    celTitle: "JAAAAAA! 🎉💖🎉",
    celSubtitle: "Ich wusste es! 🥰",
    celText: "Du bist die Beste auf der Welt!",
    celFooter: "Liebe dich für immer 💕",
    noMessages: [
      "Bist du sicher? 🥺", "Überleg es dir noch einmal... 💭", "Schau dir den anderen Button an! 👀",
      "Du weißt, dass du willst! 😏", "Letzte Chance, es dir anders zu überlegen! 💖", "Okay, jetzt wird es lächerlich... 😤",
      "ICH GEBE NICHT AUF! 💪", "Der Button wird immer größer... 🤭", "Drück lieber JA! 🙏", "Du kannst nicht ablehnen! 💕"
    ]
  },
  ja: {
    flag: "🇯🇵", name: "日本語",
    title: "私のバレンタインになってくれますか？",
    subtitle: "あなたは毎日を魔法のように変えてくれます ✨",
    btnYes: "はい、もちろんです！ 💖",
    btnNo: "いいえ 😢",
    celTitle: "やったー！ 🎉💖🎉",
    celSubtitle: "知ってたよ！ 🥰",
    celText: "君は世界で一番最高だよ！",
    celFooter: "一生愛してる 💕",
    noMessages: [
      "本当にいいの？ 🥺", "もう一度だけ考えて... 💭", "もう一つのボタンを見て！ 👀",
      "本当は「はい」って言いたいんでしょ？ 😏", "考え直す最後のチャンスだよ！ 💖", "もう、いい加減にして... 😤",
      "僕は諦めないよ！ 💪", "ボタンがどんどん大きくなってる... 🤭", "代わりに「はい」を押して！ 🙏", "拒否できないよ！ 💕"
    ]
  }
};

let currentLang = 'sv';

// ===== Floating Background Elements =====
function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  const hearts = ['💖', '💗', '💕', '❤️', '💘', '💝', '♥️'];

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('span');
    heart.classList.add('floating-heart');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (16 + Math.random() * 24) + 'px';
    heart.style.animationDuration = (6 + Math.random() * 8) + 's';
    heart.style.animationDelay = (Math.random() * 10) + 's';
    if (container) container.appendChild(heart);
  }
}

function createFloatingFlowers() {
  const container = document.getElementById('floatingFlowers');
  const flowers = ['🌹', '🌷', '🌺', '🌸', '💐', '🪻', '🌻'];

  for (let i = 0; i < 10; i++) {
    const flower = document.createElement('span');
    flower.classList.add('floating-flower');
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * 100 + '%';
    flower.style.fontSize = (16 + Math.random() * 20) + 'px';
    flower.style.animationDuration = (8 + Math.random() * 10) + 's';
    flower.style.animationDelay = (Math.random() * 12) + 's';
    if (container) container.appendChild(flower);
  }
}

// ===== Language Picker UI =====
function initLanguagePicker() {
  const langMenu = document.getElementById('langMenu');
  Object.keys(translations).forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'lang-item';
    btn.innerHTML = `<span class="flag">${translations[lang].flag}</span> ${translations[lang].name}`;
    btn.onclick = () => setLanguage(lang);
    langMenu.appendChild(btn);
  });
}

function toggleLangMenu() {
  document.getElementById('langMenu').classList.toggle('hidden');
}

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  // Update flag and name
  document.getElementById('currentFlag').textContent = t.flag;
  document.getElementById('currentLangName').textContent = t.name;
  
  // Update UI texts
  document.getElementById('mainTitle').textContent = t.title;
  document.getElementById('mainSubtitle').textContent = t.subtitle;
  document.getElementById('txtYes').textContent = t.btnYes;
  document.getElementById('txtNo').textContent = t.btnNo;
  
  document.getElementById('celTitle').textContent = t.celTitle;
  document.getElementById('celSubtitle').textContent = t.celSubtitle;
  document.getElementById('celText').textContent = t.celText;
  document.getElementById('celFooter').textContent = t.celFooter;
  
  // Update current hint if visible
  if (noClickCount > 0) {
    const msgIndex = Math.min(noClickCount - 1, t.noMessages.length - 1);
    document.getElementById('hint').textContent = t.noMessages[msgIndex];
  }
  
  // Update document lang
  document.documentElement.lang = lang;
  
  // Close menu
  document.getElementById('langMenu').classList.add('hidden');
}

// Close lang menu when clicking outside
document.addEventListener('click', (e) => {
  const switcher = document.querySelector('.lang-switcher');
  if (!switcher.contains(e.target)) {
    document.getElementById('langMenu').classList.add('hidden');
  }
});

// ===== Button Logic =====
let noClickCount = 0;

function sayNo() {
  noClickCount++;
  const btnYes = document.getElementById('btnYes');
  const btnNo = document.getElementById('btnNo');
  const hint = document.getElementById('hint');
  const t = translations[currentLang];

  // 1. Grow the YES button using BOTH scale and padding for the original 'feel'
  const scale = 1 + noClickCount * 0.4;
  const paddingBase = 16;
  const paddingIncrease = noClickCount * 4;
  const fontSizeBase = 1.15;
  const fontSizeIncrease = noClickCount * 0.1;

  btnYes.style.transform = `scale(${scale})`;
  btnYes.style.padding = `${paddingBase + paddingIncrease}px ${(paddingBase + paddingIncrease) * 2.2}px`;
  btnYes.style.fontSize = `${fontSizeBase + fontSizeIncrease}rem`;

  // 2. To keep hint text UNDER the visually scaling button, we increase its margin
  // Since scale() grows from center, we need to push hint down by roughly half the visual growth
  const visualHeightIncrease = (scale - 1) * 60; // Approximate button height
  hint.style.marginTop = `${30 + visualHeightIncrease}px`;

  // 3. Shrink the NO button
  const noScale = Math.max(0.4, 1 - noClickCount * 0.08);
  btnNo.style.transform = `scale(${noScale})`;
  btnNo.style.opacity = Math.max(0.4, 1 - noClickCount * 0.08);

  // 4. Forced YES logic - Center NO button behind the massive YES button
  if (noClickCount >= 10) {
    btnNo.style.position = 'absolute';
    btnNo.style.left = '50%';
    btnNo.style.top = '50%';
    btnNo.style.transform = 'translate(-50%, -50%) scale(0.1)';
    btnNo.style.opacity = '0'; // Completely hide it visually
    btnNo.style.pointerEvents = 'none'; // Make it unclickable
    
    btnYes.style.width = '95%';
    btnYes.style.transform = `scale(${Math.max(scale, 1.8)})`;
    btnYes.style.zIndex = '100'; // Ensure YES is on top
    return;
  }

  // 5. Move NO button outside YES button's visual area
  if (noClickCount >= 1) {
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    const yesRect = btnYes.getBoundingClientRect();
    
    const margin = 40;
    const maxX = (cardRect.width / 2) - margin;
    const maxY = (cardRect.height / 2) - margin;

    let randomX, randomY;
    let validPosition = false;
    let attempts = 0;

    while (!validPosition && attempts < 25) {
      randomX = (Math.random() * maxX * 2) - maxX;
      randomY = (Math.random() * maxY * 2) - maxY;

      const parentRect = btnNo.parentElement.getBoundingClientRect();
      const parentCenterX = parentRect.left + parentRect.width / 2;
      const parentCenterY = parentRect.top + parentRect.height / 2;
      
      const targetScreenX = parentCenterX + randomX;
      const targetScreenY = parentCenterY + randomY;

      // Check against yesRect (the visually scaled area)
      const buffer = 30;
      const overlaps = (
        targetScreenX > yesRect.left - buffer &&
        targetScreenX < yesRect.right + buffer &&
        targetScreenY > yesRect.top - buffer &&
        targetScreenY < yesRect.bottom + buffer
      );

      if (!overlaps) validPosition = true;
      attempts++;
    }

    btnNo.style.position = 'absolute';
    btnNo.style.left = `calc(50% + ${randomX}px)`;
    btnNo.style.top = `calc(50% + ${randomY}px)`;
    btnNo.style.transform = `translate(-50%, -50%) scale(${noScale})`;
  }

  const msgIndex = Math.min(noClickCount - 1, t.noMessages.length - 1);
  hint.textContent = t.noMessages[msgIndex];
  hint.style.animation = 'none';
  hint.offsetHeight;
  hint.style.animation = 'fadeIn 0.5s ease';
}

function sayYes() {
  document.getElementById('questionScreen').style.display = 'none';
  const celebrationScreen = document.getElementById('celebrationScreen');
  celebrationScreen.classList.remove('hidden');

  startFireworks();
  launchConfetti();
  heartExplosion();

  setInterval(launchConfetti, 3000);
  setInterval(heartExplosion, 4000);
}

// ===== Fireworks, Confetti, HeartExplosion (Simplified for length) =====
// [Keeping existing animation code but ensuring IDs exist]
function startFireworks() {
  const canvas = document.getElementById('fireworksCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const particles = [];
  const rockets = [];

  class Particle {
    constructor(x, y, color, velocity, size = 3) {
      this.x = x; this.y = y; this.color = color; this.velocity = velocity;
      this.alpha = 1; this.decay = 0.012 + Math.random() * 0.015;
      this.size = size; this.gravity = 0.04;
    }
    update() {
      this.velocity.x *= 0.99; this.velocity.y *= 0.99; this.velocity.y += this.gravity;
      this.x += this.velocity.x; this.y += this.velocity.y; this.alpha -= this.decay;
    }
    draw(ctx) {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 10; ctx.shadowColor = this.color; ctx.fill();
      ctx.restore();
    }
  }

  class Rocket {
    constructor() {
      this.x = Math.random() * canvas.width; this.y = canvas.height;
      this.targetY = canvas.height * 0.15 + Math.random() * canvas.height * 0.35;
      this.velocity = { x: (Math.random() - 0.5) * 3, y: -(8 + Math.random() * 4) };
      this.color = `hsl(${330 + Math.random() * 60}, 100%, 70%)`;
      this.exploded = false; this.trail = [];
    }
    update() {
      this.trail.push({ x: this.x, y: this.y });
      if (this.trail.length > 10) this.trail.shift();
      this.x += this.velocity.x; this.y += this.velocity.y; this.velocity.y += 0.05;
      if (this.y <= this.targetY) { this.explode(); this.exploded = true; }
    }
    explode() {
      const colors = ['#FFD700', '#FF69B4', '#FF1493', '#FF6B9D', '#fff'];
      for (let i = 0; i < 80; i++) {
        const angle = (Math.PI * 2 / 80) * i;
        const speed = 2 + Math.random() * 4;
        particles.push(new Particle(this.x, this.y, colors[Math.floor(Math.random() * colors.length)], {
          x: Math.cos(angle) * speed, y: Math.sin(angle) * speed
        }, 2 + Math.random() * 2));
      }
    }
    draw(ctx) {
      this.trail.forEach((p, i) => {
        ctx.save(); ctx.globalAlpha = (i / this.trail.length) * 0.5;
        ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      });
      ctx.save(); ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(this.x, this.y, 3, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    }
  }

  function launchRocket() { rockets.push(new Rocket()); }
  function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = rockets.length - 1; i >= 0; i--) {
      rockets[i].update(); if (!rockets[i].exploded) rockets[i].draw(ctx); else rockets.splice(i, 1);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update(); particles[i].draw(ctx); if (particles[i].alpha <= 0) particles.splice(i, 1);
    }
    requestAnimationFrame(animate);
  }
  setInterval(() => { if (rockets.length < 5) launchRocket(); }, 1200);
  animate();
}

function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  if (!container) return;
  const colors = ['#FF6B9D', '#FF4081', '#FFD700', '#FF69B4', '#fff'];
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.textContent = ['●', '■', '▲', '★', '♥'][Math.floor(Math.random() * 5)];
    piece.style.left = Math.random() * 100 + '%';
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = (8 + Math.random() * 15) + 'px';
    piece.style.animationDuration = (2 + Math.random() * 3) + 's';
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

function heartExplosion() {
  const container = document.getElementById('heartExplosion');
  if (!container) return;
  const emojis = ['❤️', '💖', '💗', '💕', '💘'];
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('span');
    heart.className = 'explosion-heart';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = '50%'; heart.style.top = '50%';
    heart.style.setProperty('--dx', (Math.random() - 0.5) * 800 + 'px');
    heart.style.setProperty('--dy', (Math.random() - 0.5) * 800 + 'px');
    heart.style.setProperty('--rot', (Math.random() - 0.5) * 720 + 'deg');
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

// Initialize everything
window.onload = () => {
  createFloatingHearts();
  createFloatingFlowers();
  initLanguagePicker();
};

