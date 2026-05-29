export async function POST(req) {
  const body = await req.json()
  const message = body.message.toLowerCase().trim()

  let reply = "Sorry, I didn't understand that. Try asking about prices, location, contact, available cars, financing, or test drives."

  // Greetings
  if (message.match(/^(hello|hi|hey|good morning|good afternoon|good evening|good night|howdy|sup|hie|habari|jambo|mambo|sasa|niaje|vipi|salaam|assalamu|shikamoo|karibu|oya|yo|what'?s up|wazzup|hallo|hola|bonjour|greetings|morning|afternoon|evening)/)) {
    const greetings = [
      "Hello! Welcome to Auto Hub 🚗 How can I help you today?",
      "Hey there! Great to have you at Auto Hub. Looking for a car?",
      "Hi! Welcome! Are you looking to buy, inquire about prices, or book a test drive?",
      "Habari! Karibu Auto Hub 🚗 Tunauza magari bora na ya bei nafuu. Naweza kukusaidia vipi?",
      "Jambo! Welcome to Auto Hub. Are you looking for a car today?",
      "Mambo! Poa sana. Karibu Auto Hub — tuna magari mazuri kwa bei nzuri!",
      "Niaje! Karibu sana. Una swali kuhusu gari au bei?",
      "Assalamu Alaikum! Welcome to Auto Hub. How may we assist you today?",
      "Good morning! ☀️ Welcome to Auto Hub. A great day to find your dream car!",
      "Good afternoon! 🌤️ Welcome to Auto Hub. How can we help you today?",
      "Good evening! 🌙 Welcome to Auto Hub. Looking for a car tonight?",
      "Yo! Welcome to Auto Hub 🚗 What can we do for you?",
      "Hey hey! Glad you stopped by Auto Hub. What are you looking for today?",
      "Hola! Welcome to Auto Hub. We've got great cars at great prices — how can I help?",
      "Shikamoo! Karibu sana Auto Hub. Tunafurahi kukuhudumia leo.",
      "Greetings! Welcome to Auto Hub — quality, trusted and affordable vehicles. How can I assist?",
      "Sasa! Fit? Karibu Auto Hub. Una swali gani leo?",
      "Bonjour! Welcome to Auto Hub 🚗 How can we help you today?",
      "Hi there! You've reached Auto Hub's support. Ask me about cars, prices, location or financing!",
      "Welcome! 👋 I'm the Auto Hub assistant. Ask me anything about our cars, prices, or services!",
    ]
    reply = greetings[Math.floor(Math.random() * greetings.length)]

  // Price / Cost
  } else if (message.match(/price|cost|how much|budget|afford|cheap|expensive|range/)) {
    const prices = [
      "Our cars range from Ksh 500,000 to Ksh 5,000,000 depending on the model and year. What's your budget?",
      "We have options for every budget! Entry-level from Ksh 500K, mid-range Ksh 1M–2.5M, and premium above Ksh 3M. Which range suits you?",
      "Prices start at Ksh 500,000. Would you like me to help you find something within a specific budget?",
      "It depends on the model! Budget cars start at Ksh 500K. Want me to suggest something specific?",
      "We have affordable options starting Ksh 500,000. Tell me your budget and I'll help narrow it down!",
    ]
    reply = prices[Math.floor(Math.random() * prices.length)]

  // Location
  } else if (message.match(/location|where|address|find you|directions|place|situated|located/)) {
    const locations = [
      "We are located in Mombasa, Likoni. Easy to find — just off the Likoni ferry! 📍",
      "Auto Hub is in Likoni, Mombasa. Would you like directions or a contact number to reach us?",
      "We're based in Likoni, Mombasa. Swing by any day and our team will be happy to assist!",
      "Find us in Likoni, Mombasa — right near the ferry. Come check out our cars in person! 📍",
      "We're in Likoni, Mombasa. Call +254706839535 and we'll guide you straight to us!",
    ]
    reply = locations[Math.floor(Math.random() * locations.length)]

  // Contact / Phone
  } else if (message.match(/contact|phone|whatsapp|call|reach|number|email/)) {
    const contacts = [
      "You can reach us on WhatsApp: +254706839535 📲 We reply quickly!",
      "Call or WhatsApp us on +254706839535. We're available Mon–Sat, 8am–6pm.",
      "Drop us a WhatsApp message on +254706839535 and our team will get back to you shortly!",
      "Our phone number is +254706839535. Feel free to call or WhatsApp anytime! 📞",
      "Reach us on +254706839535 via call or WhatsApp. We're always happy to help!",
    ]
    reply = contacts[Math.floor(Math.random() * contacts.length)]

  // Available cars / Models / Brands
  } else if (message.match(/car|vehicle|stock|available|models|brands|toyota|honda|mazda|subaru|nissan|mitsubishi|isuzu|mercedes|bmw|audi|land cruiser|prado|hilux|axio|fielder|demio|cx5|harrier|rav4|premio/)) {
    const cars = [
      "We stock Toyota, Honda, Mazda, Subaru, Nissan and more! Any specific brand or model you're looking for?",
      "Our inventory includes sedans, SUVs, pickups and hatchbacks. What type of vehicle are you interested in?",
      "We have a wide selection of Japanese and European cars. Visit our Cars page or ask me about a specific model!",
      "Popular models include Toyota Axio, Fielder, Harrier, Mazda Demio, Subaru Forester and more. Interested in any?",
      "We carry both new arrivals and quality used cars. Want to know what's currently in stock?",
      "Looking for an SUV, sedan or pickup? We have them all! Tell me more about what you need.",
    ]
    reply = cars[Math.floor(Math.random() * cars.length)]

  // Test drive
  } else if (message.match(/test drive|test|drive|try|sample/)) {
    const testDrives = [
      "We offer free test drives! Just visit us in Likoni, Mombasa or call +254706839535 to book your slot. 🚘",
      "Yes! Test drives are free and available daily. Come to Likoni, Mombasa or WhatsApp us to schedule. 🚗",
      "Absolutely! We encourage test drives before buying. Book yours by calling +254706839535 today!",
    ]
    reply = testDrives[Math.floor(Math.random() * testDrives.length)]

  // Financing / Loan
  } else if (message.match(/financ|loan|installment|pay|deposit|credit|bank|lipa|mkopo/)) {
    const financing = [
      "Yes, we offer flexible financing options! You can pay in installments through partner banks. Contact us on +254706839535 for details.",
      "We have financing plans available! Low deposit options and easy monthly installments. Call +254706839535 to learn more.",
      "Don't have the full amount? No worries — we offer bank financing and installment plans. WhatsApp +254706839535 for details!",
      "You can buy your car with as low as 30% deposit and pay the rest in installments. Interested? Call us!",
    ]
    reply = financing[Math.floor(Math.random() * financing.length)]

  // Opening hours
  } else if (message.match(/open|hours|time|when|working|days|schedule|closed/)) {
    const hours = [
      "We are open Monday to Saturday, 8:00 AM – 6:00 PM. Come visit us in Likoni, Mombasa! 🕗",
      "Our working hours are Mon–Sat, 8am to 6pm. We're closed on Sundays. See you soon!",
      "Pop in any weekday or Saturday between 8am and 6pm. We'd love to show you our cars!",
    ]
    reply = hours[Math.floor(Math.random() * hours.length)]

  // Insurance
  } else if (message.match(/insur|cover|bima|comprehensive|third party/)) {
    const insurance = [
      "We can connect you with trusted insurance providers for comprehensive or third-party cover. Ask us when you visit!",
      "Yes, we assist with car insurance! Both comprehensive and third-party options are available. Call +254706839535.",
      "We'll help you sort insurance before you drive off. Just mention it when you contact us on +254706839535.",
    ]
    reply = insurance[Math.floor(Math.random() * insurance.length)]

  // Condition of cars
  } else if (message.match(/condition|new|used|second hand|mileage|accident|history|japan|import/)) {
    const condition = [
      "We sell both brand new and quality used/second-hand cars. All used cars are inspected before sale!",
      "Our used cars are imported directly from Japan and are thoroughly inspected. No hidden surprises!",
      "We deal in new and second-hand vehicles. All cars come with mileage history and inspection reports.",
      "All our cars go through a full inspection before listing. We only sell what we'd drive ourselves! 🚗",
    ]
    reply = condition[Math.floor(Math.random() * condition.length)]

  // Negotiation / Discount
  } else if (message.match(/negotiat|discount|deal|offer|lower|reduce|bargain|best price/)) {
    const deals = [
      "We always try to give our best prices! Visit us or call +254706839535 to discuss a deal. 😊",
      "Prices are competitive but we're open to discussion. Come in and let's talk! Call +254706839535.",
      "We have occasional offers and discounts. WhatsApp us on +254706839535 to find out current deals!",
    ]
    reply = deals[Math.floor(Math.random() * deals.length)]

  // Appointment / Booking
  } else if (message.match(/appointment|book|visit|schedule|come|meet|when can i/)) {
    const appointments = [
      "You can visit us anytime Mon–Sat, 8am–6pm in Likoni, Mombasa. No appointment needed!",
      "Walk-ins are welcome! Or call +254706839535 to schedule a specific time that works for you.",
      "Book a visit or test drive by WhatsApping us on +254706839535. We'll be ready for you! 📅",
    ]
    reply = appointments[Math.floor(Math.random() * appointments.length)]

  // Thanks
  } else if (message.match(/thank|thanks|asante|appreciate|sawa|nice|great|good/)) {
    const thanks = [
      "You're welcome! 😊 Feel free to ask if you need anything else. Happy car hunting!",
      "Asante! We're happy to help. Let us know if you have more questions.",
      "Glad I could help! 🚗 Visit us in Likoni anytime or call +254706839535.",
      "No problem at all! Is there anything else I can help you with?",
    ]
    reply = thanks[Math.floor(Math.random() * thanks.length)]

  // Bye
  } else if (message.match(/bye|goodbye|see you|later|ciao|kwaheri|tutaonana|baadaye/)) {
    const byes = [
      "Goodbye! Thank you for visiting Auto Hub. Hope to see you soon! 🚗",
      "Kwaheri! Asante kwa kutembelea Auto Hub. Tutaonana!",
      "See you soon! Don't hesitate to reach out anytime on +254706839535. 👋",
      "Take care! We hope to see you at Auto Hub in Likoni soon. 🚗",
    ]
    reply = byes[Math.floor(Math.random() * byes.length)]
  }

  return Response.json({ reply })
}