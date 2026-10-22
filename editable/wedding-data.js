/**
 * wedding-data.js — Customer-facing editable data layer for kalyana-mandapam
 * Edit this file to update couple names, Telugu text, families, dates, venue, and images.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Vinay",
    groom: "Aparna",
    brideFirst: "Vinay",
    groomFirst: "Aparna",
    hashtag: "#VinayWedsAparna",
    brideFamily: "The Apparao Family",
    groomFamily: "The Seetharam Family",
  },

  ceremony: {
    blessing: "॥ శ్రీ మహాగణాధిపతయే నమః ॥",
    occasionTelugu: "శుభ ముహూర్తం",
    weekdayLabel: "Friday",
    dateLabel: "October 30th, 2026",
    muhurthamTimeLabel: "Muhurtham at 10:59 AM",
    muhurthamISO: "2026-10-30T10:59:00+05:30",
    inviteLine1: "With the divine blessings of Lord Ganesha and our elders,",
    inviteLine2: "we joyfully invite you and our family to the wedding celebrations of our beloved children. Your presence is the greatest gift — please come, bless the couple, and celebrate with us.",
  },

  events: [
    {
      id: "muhurtham",
      title: "Muhurtham",
      telugu: "శుభ ముహూర్తం",
      dateLabel: "Friday, 30th October 2026",
      timeLabel: "10:59 AM sharp",
      startISO: "2026-10-30T10:59:00+05:30",
      endISO: "2026-10-30T13:00:00+05:30",
      note: "The sacred ceremony — please be seated by 10:30 AM.",
      icon: "fire",
    },
    {
      id: "reception",
      title: "Reception & Dinner",
      telugu: "రిసెప్షన్ మరియు విందు",
      dateLabel: "Friday, 30th October 2026",
      timeLabel: "7:00 PM onwards",
      startISO: "2026-10-30T19:00:00+05:30",
      endISO: "2026-10-30T22:30:00+05:30",
      note: "Celebrations, blessings, and dinner at the same function hall.",
      icon: "sparkles",
    },
  ],

  venue: {
    name: "Pentakota Convention (Function Halls)",
    line1: "Anakapalli",
    line2: "Andhra Pradesh – 531002, India",
    address: "Ring Rd, Woodpeta, Anakapalli, Andhra Pradesh 531002",
    mapsQuery: "PENTAKOTA CONVENTION (FUNCTION HALLS), Ring Rd, Woodpeta, Anakapalli, Andhra Pradesh 531002",
    mapsUrl: "https://maps.app.goo.gl/K38xLGwUVYsA8vbG9?g_st=ic",
    osmEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=82.9879%2C17.6806%2C83.0279%2C17.7046&layer=mapnik&marker=17.6926%2C83.0079",
  },

  music: {
    url: "https://youtu.be/LG6PANt6sM8?si=h1MIGA6Z8J7TIaQS",
    src: "editable/assets/bgm.mp3",
    title: "Seetha Kalyanam",
  },

  images: {
    couple: "./editable/assets/couple.webp",
    garlandTop: "./editable/assets/garland-top.webp",
    mandapFooter: "./editable/assets/mandap-footer.webp",
  },
};
