const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Majlis Perkahwinan Adlina & Ikhwan",
    // Opening message/description of the invitation
    description:
      "Kami akan melangsungkan perkahwinan dan dengan penuh rasa gembira menjemput anda untuk bersama-sama meraikan detik istimewa ini.", // Nanti ini dibikin random
    // Groom's name
    groomName: "Ikhwan",
    // Bride's name
    brideName: "Adlina",
    // Groom's parents names
    parentGroom: "Bapak Groom & Ibu Groom",
    // Bride's parents names
    parentBride: "Bapak Bride & Ibu Bride",
    // Wedding date (format: YYYY-MM-DD)
    date: "2026-04-19",
    // Google Maps link for location (short clickable link)
    maps_url: "https://goo.gl/maps/abcdef",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d106.8270733147699!3d-6.175392995514422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4f1b6d7b1e7%3A0x2e69f4f1b6d7b1e7!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1633666820004!5m2!1sid!2sid",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "16:16 - 17:30 WIB",
    // Venue/building name
    location: "Putra Glass Hall",
    // Full address of the wedding venue
    address: "Putra Glass Hall",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // Second event name
        title: "Majlis Resepsi",
        date: "2026-04-19",
        startTime: "11:0",
        endTime: "16:30",
        location: "Putra Glass Hall",
        address: "Putra Glass Hall",
      }
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Fulfilling Humming", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "Bank Central Asia",
        // Account number
        accountNumber: "1234567890",
        // Account holder name (all uppercase)
        accountName: "FULAN",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "0987654321",
        accountName: "FULANA",
      }
      // You can add more banks with the same format
    ]
  }
};

export default config;
