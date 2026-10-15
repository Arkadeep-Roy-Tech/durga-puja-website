export interface EventItem {
  id: string;
  time: string;
  title: string;
  bengaliTitle?: string;
  description: string;
  location: string;
  performer?: string;
  ritualNotes?: string;
  highlight?: boolean;
}

export interface DaySchedule {
  id: string;
  dayNumber: string;
  dayName: string;
  bengaliName: string;
  tithiInfo: string;
  date: string;
  subtitle: string;
  description: string;
  events: EventItem[];
}

export interface CommitteeLeader {
  role: string;
  name: string;
  phone?: string;
  details?: string;
}

export const FESTIVAL_YEAR = "2026";
export const FESTIVAL_EDITION = "43rd Year";
export const VENUE_NAME = "Hindi Prachar Bhavan";
export const VENUE_ADDRESS = "Lalbagh, Mangaluru, Karnataka, India";
export const IMMERSION_VENUE = "Gurupura River, Sultan Bathery, Mangaluru";

export const FESTIVAL_DATES = "15th October 2026 to 21st October 2026";

export const INAUGURATION_DETAILS = {
  date: "Friday, 16th October 2026",
  time: "7:30 P.M.",
  venue: "“Hindi Prachar Bhavan” Lalbagh, Mangaluru",
  chiefGuest: {
    name: "Swami Jitakamanandaji",
    title: "Adhyaksha – Sri Ramakrishna Math, Mangaluru",
    role: "Inaugurating the Pooja",
  },
  guestOfHonour: {
    name: "Dr. Abhay S. Nirgude",
    title: "Vice-Principal, Yenepoya Medical College & Prof. Community Medicine, Yenepoya University",
  },
  specialGuest: {
    name: "Sri Manjunath B. Singai",
    title: "General Manager (Circle Head), Canara Bank, Mangaluru",
  },
};

export const DEVI_ASTROLOGICAL_SIGN = {
  agamon: {
    vehicle: "Horse (ঘোড়া)",
    significance: "Unrest and conflict in the world (সামাজিক চঞ্চলতা)",
  },
  gomon: {
    vehicle: "Boat (নৌকা)",
    significance: "Good rainfall and increase in crops (সুবৃষ্টি ও শস্যবৃদ্ধি)",
  },
};

export const BHOG_SEVA_SCHEDULE = {
  duration: "16th October 2026 to 21st October 2026 (6 Days)",
  description: "Distribution of Bhog Prasadam Day & Night daily after completion of Pooja",
  dayTime: "01:30 PM to 03:00 PM",
  nightTime: "10:00 PM to 11:00 PM",
  venue: "Hindi Prachar Bhavan Dining Hall",
};

export const PROCESSION_ROUTE = [
  "Hindi Prachar Bhavan (Departure: 06:30 PM)",
  "City Corporation Circle",
  "SDM College Circle",
  "Lalbagh Circle",
  "Lady Hill Circle",
  "Urva Market",
  "Sultan Bathery Ghat (Immersion at Gurupura River)",
  "Urva Market",
  "Hindi Prachar Bhavan (Expected Return: 11:30 PM)",
];

export const KEY_OFFICE_BEARERS: CommitteeLeader[] = [
  {
    role: "President",
    name: "Dr. S.K. Tiwari",
    phone: "9448388097",
  },
  {
    role: "Vice President",
    name: "Sri Asis Kumar Roy",
    phone: "9880694988",
  },
  {
    role: "General Secretary",
    name: "Sri Sukumar Biswas",
    phone: "9449389189",
  },
  {
    role: "Treasurer",
    name: "Sri Krishna Kanta Biswas",
    phone: "7349674307",
  },
];

export const UPCOMING_POOJAS = [
  {
    title: "Sri Kojagari Lakshmi Pooja",
    date: "25th October 2026, Sunday",
    time: "8:40 P.M.",
    venue: "Hindi Prachar Bhavan",
  },
  {
    title: "Sri Kali Mata Pooja",
    date: "8th November 2026, Sunday",
    time: "8:30 P.M.",
    venue: "Hindi Prachar Bhavan",
  },
  {
    title: "Sri Saraswati Pooja",
    date: "11th February 2027",
    time: "9:00 AM – 11:30 AM",
    venue: "Hindi Prachar Bhavan",
  },
];

export const festivalSchedule: DaySchedule[] = [
  {
    id: "panchami",
    dayNumber: "Day 01",
    dayName: "Durga Panchami",
    bengaliName: "দুর্গাপঞ্চমী",
    tithiInfo: "27th Ashwin",
    date: "15th October 2026 (Thursday)",
    subtitle: "Commencement of Festivities & Welcoming",
    description:
      "The prelude to the 43rd annual celebrations of Sri Durga Pooja Committee, Mangaluru, gathering devotees and organizing sacred preparations.",
    events: [
      {
        id: "pan-1",
        time: "Evening",
        title: "Evening Cultural Gathering & Welcoming",
        bengaliTitle: "সন্ধ্যাকালীন প্রস্তুতি ও আগমনী সঙ্গীত",
        description:
          "Opening evening fellowship, sacred lighting, and initial invocation for the 43rd festival edition.",
        location: "Hindi Prachar Bhavan, Lalbagh",
      },
    ],
  },
  {
    id: "shashthi",
    dayNumber: "Day 02",
    dayName: "Durga Shashthi",
    bengaliName: "মহা ষষ্ঠী",
    tithiInfo: "28th Ashwin",
    date: "16th October 2026 (Friday)",
    subtitle: "Kalparambha, Devi Bodhan & Official Inaugural Ceremony",
    description:
      "The sacred awakening of Maa Durga followed by the solemn opening ceremony graced by revered dignitaries and spiritual leaders of Mangaluru.",
    events: [
      {
        id: "sh-1",
        time: "Morning",
        title: "Sri Sri Durga Shashthi Pooja, Kalparambha Pooja & Chandipath",
        bengaliTitle: "কল্পারম্ভ পূজা ও চণ্ডীপাঠ",
        description:
          "Sacred invocation of the Divine Mother with Vedic chanting, Chandipath recitation, and sacred vows.",
        location: "Main Mandap, Hindi Prachar Bhavan",
        ritualNotes: "Devotees participate in morning invocations.",
      },
      {
        id: "sh-2",
        time: "06:30 PM",
        title: "Devi Bodhan, Amantran & Adhibas",
        bengaliTitle: "দেবী বোধন, আমন্ত্রণ ও অধিবাস",
        description:
          "Ceremonial awakening of the Goddess under the sacred Bilva tree, filling the sanctum with shankha dhwani and dhaak beats.",
        location: "Sanctum Sanctorum",
        highlight: true,
      },
      {
        id: "sh-3",
        time: "07:30 PM – 09:00 PM",
        title: "Grand Inaugural Ceremony of the 43rd Sharodiya Durga Pooja",
        bengaliTitle: "উদ্বোধনী অনুষ্ঠান",
        description:
          "Official opening by Chief Guest Swami Jitakamanandaji (Adhyaksha, Sri Ramakrishna Math, Mangaluru), alongside Dr. Abhay S. Nirgude (Vice-Principal, Yenepoya Medical College) and Sri Manjunath B. Singai (General Manager, Canara Bank).",
        location: "Main Stage, Hindi Prachar Bhavan",
        highlight: true,
      },
      {
        id: "sh-4",
        time: "09:00 PM – 10:30 PM",
        title: "Devi Bandana / Agomoni Devotional Dance",
        bengaliTitle: "দেবী বন্দনা ও আগমনী নৃত্য",
        description:
          "Spectacular devotional dance programme presented in reverence and honor of Devi Durga.",
        location: "Cultural Stage",
        performer: "Cultural Troupe & Community Artists",
      },
      {
        id: "sh-5",
        time: "10:00 PM – 11:00 PM",
        title: "Night Bhog Prasadam Distribution",
        bengaliTitle: "রাত্রিকালীন মহাপ্রসাদ বিতরণ",
        description: "Distribution of sanctified Bhog Prasadam to all devotees.",
        location: "Dining Hall",
      },
    ],
  },
  {
    id: "saptami",
    dayNumber: "Day 03",
    dayName: "Durga Saptami",
    bengaliName: "মহা সপ্তমী",
    tithiInfo: "29th Ashwin",
    date: "17th October 2026 (Saturday)",
    subtitle: "Nabapatrika Prabesh, Pushpanjali & Children's Art Contest",
    description:
      "Nature veneration through Nabapatrika (Kola Bou), grand Pushpanjali, community bhog, youth drawing competition, and vibrant Bengali cultural evening.",
    events: [
      {
        id: "sa-1",
        time: "07:46 AM to 10:03 AM",
        title: "Nabapatrika Prabesh & Saptami Pooja",
        bengaliTitle: "নবপত্রিকা প্রবেশ ও সপ্তমী পূজা",
        description:
          "Ceremonial consecration of the nine sacred plants embodying nature's maternal power, followed by Sri Sri Sharodiya Durga Pooja, Pushpanjali, Bhog and Arati.",
        location: "Mandap & Sacred Entrance",
        highlight: true,
      },
      {
        id: "sa-2",
        time: "01:30 PM to 03:00 PM",
        title: "Day Bhog Prasadam (Anna Daan)",
        bengaliTitle: "মধ্যাহ্ন মহাপ্রসাদ ও অন্নদান",
        description:
          "Grand community lunch offering served with warmth to all visitors and devotees.",
        location: "Dining Hall",
      },
      {
        id: "sa-3",
        time: "04:00 PM to 05:00 PM",
        title: "Children's Drawing Competition (Age: 6 to 16 years)",
        bengaliTitle: "ছোটদের অঙ্কন প্রতিযোগিতা",
        description:
          "Annual creative drawing contest for young artists across Mangaluru celebrating culture, art, and festivities.",
        location: "Activity Hall, Hindi Prachar Bhavan",
      },
      {
        id: "sa-4",
        time: "06:45 PM – 08:00 PM",
        title: "Sandhya Arati",
        bengaliTitle: "সন্ধ্যা আরতি",
        description: "Twilight lamp offering accompanied by conch shells and rhythmic dhaak.",
        location: "Main Mandap",
      },
      {
        id: "sa-5",
        time: "08:00 PM – 10:15 PM",
        title: "Bengali Cultural Programme (Folk & Patriotic)",
        bengaliTitle: "বাঙালি সাংস্কৃতিক অনুষ্ঠান ও লোকনৃত্য",
        description:
          "Desh Bhakti anthems, devotional songs, and traditional Bengali folk dance performances by talented community members.",
        location: "Cultural Stage",
      },
      {
        id: "sa-6",
        time: "10:00 PM – 11:00 PM",
        title: "Night Bhog Prasadam",
        bengaliTitle: "রাত্রিকালীন মহাপ্রসাদ",
        description: "Sacred night prasad distribution.",
        location: "Dining Hall",
      },
    ],
  },
  {
    id: "ashtami",
    dayNumber: "Day 04",
    dayName: "Maha Ashtami",
    bengaliName: "মহা অষ্টমী",
    tithiInfo: "30th Ashwin",
    date: "18th October 2026 (Sunday)",
    subtitle: "Maha Ashtami Pooja, Pushpanjali, Dandiya & Ulu-Shanka Competitions",
    description:
      "The pinnacle of devotion. Huge gatherings for morning pushpanjali, followed by evening Garba/Dandiya and signature traditional competitions.",
    events: [
      {
        id: "as-1",
        time: "08:30 AM onwards",
        title: "Maha Ashtami Durga Pooja",
        bengaliTitle: "মহা অষ্টমী দুর্গাপূজা",
        description: "Solemn Vedic rituals honoring the Goddess in her supreme radiance.",
        location: "Sanctum Sanctorum",
      },
      {
        id: "as-2",
        time: "10:00 AM",
        title: "Pushpanjali, Bhog & Arati",
        bengaliTitle: "পুষ্পাঞ্জলি, ভোগ ও আরতি",
        description:
          "Mass floral offering where hundreds of devotees recite sacred mantras in unified devotion.",
        location: "Main Mandap",
        highlight: true,
      },
      {
        id: "as-3",
        time: "01:30 PM to 03:00 PM",
        title: "Day Bhog Prasadam",
        bengaliTitle: "অন্নদান ও মহাপ্রসাদ",
        description: "Traditional feast served to all attendees.",
        location: "Dining Hall",
      },
      {
        id: "as-4",
        time: "06:45 PM – 08:00 PM",
        title: "Sandhya Arati",
        bengaliTitle: "সন্ধ্যা আরতি",
        description: "Grand evening aarti with multiple brass lamps and dhaak cadence.",
        location: "Main Mandap",
      },
      {
        id: "as-5",
        time: "08:00 PM onwards",
        title: "Competitions, Garba / Dandiya & Traditional Sounds",
        bengaliTitle: "উলুধ্বনি ও শঙ্খধ্বনি প্রতিযোগিতা এবং ডান্ডিয়া নাচ",
        description:
          "Exciting cultural contests including the famous Ulu Dhwani (ululation) & Shanka Dhwani (conch blowing) competitions, plus community Garba and Dandiya dance.",
        location: "Main Auditorium",
        highlight: true,
      },
      {
        id: "as-6",
        time: "10:00 PM – 11:00 PM",
        title: "Night Bhog Prasadam",
        bengaliTitle: "রাত্রিকালীন মহাপ্রসাদ",
        description: "Sacred night prasad distribution.",
        location: "Dining Hall",
      },
    ],
  },
  {
    id: "sandhi-navami",
    dayNumber: "Day 05",
    dayName: "Sandhi Pooja & Maha Ashtami Continued",
    bengaliName: "সন্ধি পূজা ও ধুনুচি নাচ",
    tithiInfo: "1st Kartik",
    date: "19th October 2026 (Monday)",
    subtitle: "Auspicious Sandhi Pooja, Balidan & Grand Dhunuchi Dance Contest",
    description:
      "The sacred Sandhi moment when Chamunda vanquished the demon kings, celebrated with 108 lamps, followed in the evening by the thrilling Dhunuchi dance competition.",
    events: [
      {
        id: "sp-1",
        time: "07:25 AM",
        title: "Sandhi Pooja Commences",
        bengaliTitle: "সন্ধি পূজা আরম্ভ",
        description:
          "The critical junction of Ashtami and Navami. 108 lotuses offered and 108 earthen lamps illuminated.",
        location: "Main Sanctum",
        highlight: true,
      },
      {
        id: "sp-2",
        time: "Just after 07:49 AM",
        title: "Balidan Ritual",
        bengaliTitle: "বলিদান",
        description: "Traditional symbolic offering according to ancient Shastric rites.",
        location: "Sanctum",
      },
      {
        id: "sp-3",
        time: "Before 08:13 AM",
        title: "Completion of Sandhi Pooja",
        bengaliTitle: "সন্ধি পূজা সমাপন",
        description:
          "Concluding prayers followed by general Pooja, Pushpanjali, Bhog and Arati.",
        location: "Main Mandap",
      },
      {
        id: "sp-4",
        time: "01:30 PM to 03:00 PM",
        title: "Day Bhog Prasadam",
        bengaliTitle: "অন্নদান ও প্রসাদ",
        description: "Afternoon community bhog meal.",
        location: "Dining Hall",
      },
      {
        id: "sp-5",
        time: "06:45 PM – 08:00 PM",
        title: "Sandhya Arati",
        bengaliTitle: "সন্ধ্যা আরতি",
        description: "Resonant evening prayers.",
        location: "Main Mandap",
      },
      {
        id: "sp-6",
        time: "08:00 PM – 09:00 PM",
        title: "Stage Programme",
        bengaliTitle: "মঞ্চ অনুষ্ঠান",
        description: "Community artistic presentations and felicitations.",
        location: "Cultural Stage",
      },
      {
        id: "sp-7",
        time: "09:00 PM – 10:15 PM",
        title: "Grand Dhunuchi Dance Competition",
        bengaliTitle: "ধুনুচি নাচ প্রতিযোগিতা",
        description:
          "The highlight of the festival! Devotees and youth dance with smoking earthen braziers billowing fragrant incense to thunderous dhaak percussion.",
        location: "Central Mandap Floor",
        highlight: true,
      },
      {
        id: "sp-8",
        time: "10:00 PM – 11:00 PM",
        title: "Night Bhog Prasadam",
        bengaliTitle: "রাত্রিকালীন মহাপ্রসাদ",
        description: "Distribution of night prasad.",
        location: "Dining Hall",
      },
    ],
  },
  {
    id: "navami",
    dayNumber: "Day 06",
    dayName: "Maha Navami",
    bengaliName: "মহা নবমী",
    tithiInfo: "2nd Kartik",
    date: "20th October 2026 (Tuesday)",
    subtitle: "Maha Navami Pooja, Havan, Kumari Pooja & Mixed Dance Evening",
    description:
      "Completion of Navaratri Brata, sacred fire oblations, veneration of the Divine Child (Kumari Pooja), and vibrant evening music performances.",
    events: [
      {
        id: "na-1",
        time: "07:00 AM",
        title: "Maha Navami Pooja & Completion of Navaratri Brata",
        bengaliTitle: "মহা নবমী পূজা ও ব্রত সমাপন",
        description: "Consecration prayers marking the completion of fasts and sacred vows.",
        location: "Main Sanctum",
      },
      {
        id: "na-2",
        time: "10:00 AM",
        title: "Pushpanjali, Bhog, Arati, Havan & Kumari Pooja",
        bengaliTitle: "পুষ্পাঞ্জলি, হোম-যজ্ঞ ও কুমারী পূজা",
        description:
          "Solemn Vedic Homa (sacred fire oblation) invoking universal welfare, alongside Kumari Pooja honoring the young girl as the Mother Goddess.",
        location: "Main Mandap",
        highlight: true,
      },
      {
        id: "na-3",
        time: "01:30 PM to 03:00 PM",
        title: "Day Bhog Prasadam (Navami Feast)",
        bengaliTitle: "নবমী ভোগ ও প্রসাদ বিতরণ",
        description: "Grand community lunch.",
        location: "Dining Hall",
      },
      {
        id: "na-4",
        time: "06:45 PM – 08:00 PM",
        title: "Sandhya Arati",
        bengaliTitle: "সন্ধ্যা আরতি",
        description: "Twilight offering.",
        location: "Main Mandap",
      },
      {
        id: "na-5",
        time: "08:00 PM – 10:15 PM",
        title: "Hindi & Mixed Dance Programme",
        bengaliTitle: "নৃত্য ও সঙ্গীতানুষ্ঠান",
        description:
          "High-energy cultural music and dance performances celebrating unity in diversity in Mangaluru.",
        location: "Cultural Stage",
      },
      {
        id: "na-6",
        time: "10:00 PM – 11:00 PM",
        title: "Night Bhog Prasadam",
        bengaliTitle: "রাত্রিকালীন মহাপ্রসাদ",
        description: "Night prasad distribution.",
        location: "Dining Hall",
      },
    ],
  },
  {
    id: "dashami",
    dayNumber: "Day 07",
    dayName: "Vijaya Dashami",
    bengaliName: "বিজয়া দশমী",
    tithiInfo: "3rd Kartik",
    date: "21st October 2026 (Wednesday)",
    subtitle: "Dashami Pooja, Sindur Khela, Shobhayatra & Immersion at Gurupura River",
    description:
      "Tearful yet joyful farewell. Devi Baran, vibrant Sindur Khela, and grand ceremonial procession through Mangaluru leading to the sacred waters of Gurupura River at Sultan Bathery.",
    events: [
      {
        id: "da-1",
        time: "08:30 AM",
        title: "Durga Devi Dashami Pooja, Pushpanjali & Arati",
        bengaliTitle: "বিজয়া দশমী পূজা ও পুষ্পাঞ্জলি",
        description: "Final ceremonial morning pooja and offering of prayers.",
        location: "Main Sanctum",
      },
      {
        id: "da-2",
        time: "Before 10:46 AM",
        title: "Visarjan & Aparajita Pooja",
        bengaliTitle: "বিসর্জন ও অপরাজিতা পূজা",
        description:
          "Symbolic mirror immersion (Darpan Visarjan) and prayers to Aparajita for protection and victory.",
        location: "Sanctum Sanctorum",
        highlight: true,
      },
      {
        id: "da-3",
        time: "01:30 PM to 03:00 PM",
        title: "Final Day Bhog Prasadam",
        bengaliTitle: "দশমীর মহাপ্রসাদ",
        description: "Final afternoon meal offering.",
        location: "Dining Hall",
      },
      {
        id: "da-4",
        time: "04:00 PM – 06:00 PM",
        title: "Devi Baran & Sindur Khela",
        bengaliTitle: "মায়ের বরণ ও সিঁদুর খেলা",
        description:
          "Women offer sweets and betel leaves to Maa Durga, followed by applying auspicious red vermillion to each other, seeking longevity and prosperity.",
        location: "Main Mandap Floor",
        highlight: true,
      },
      {
        id: "da-5",
        time: "06:30 PM to 11:30 PM",
        title: "Grand Visarjan Shobhayatra (Procession)",
        bengaliTitle: "মহাশোভাযাত্রা ও নিরঞ্জন",
        description:
          "Majestic procession accompanied by beats of dhaak and slogans of 'Aschhe Bochhor Abar Hobe'. Route: Hindi Prachar Bhavan → City Corporation Circle → SDM College Circle → Lalbagh Circle → Lady Hill Circle → Urva Market → Sultan Bathery Ghat.",
        location: "Mangaluru City Streets to Sultan Bathery",
        highlight: true,
      },
      {
        id: "da-6",
        time: "Night (approx. 09:30 PM – 10:30 PM)",
        title: "Sacred Immersion (Bisarjan)",
        bengaliTitle: "শ্রী শ্রী দুর্গা প্রতিমা নিরঞ্জন",
        description:
          "Ceremonial immersion of Sri Sri Durga Pratima into the holy waters of the Gurupura River at Sultan Bathery Ghat, Mangaluru.",
        location: "Gurupura River, Sultan Bathery Ghat",
        highlight: true,
      },
    ],
  },
];
