// Greece 2026 Journal - Easy Day-by-Day Editing
// Simply fill in the content for each day between the quotes!

const journalEntries = [
    // ============================================
    // DAY 1 - June 20, 2026
    // ============================================
    {
        day: 1,
        date: "June 20, 2026",
        locations: "My house, Joel's house",
        events: "Yummy steak, bye moms",
        people: "Mom, Joel",
        food: ["Steak", "Cheese bread thingy"],
        feelings: "I am very sad",
        highlights: "Packing, plane",
        mood: "😖",
        rating: 1.5
    },
    // ============================================
    // DAY 2 - June 21, 2026
    // ============================================
    {
        day: 2,
        date: "June 21, 2026",
        locations: "Konstantinos House, Plane",
        events: " See dad again",
        people: "Konstantionos",
        food: ["Cheese Pie"],
        feelings: "Feel motion sick on plane and throw up a lot",
        highlights: "Cheese Pie",
        mood: "😵‍💫",
        rating: 4
    },
    // ============================================
    // DAY 3 - June 22, 2026
    // ============================================
    {
        day: 3,
        date: "June 22, 2026",
        locations: "K House, Doukas Camp, Beach",
        events: "First day at camp, I went to Doukas camp.",
        people: "Another person named Irini at camp, Camp people, funny boys",
        food: [" Breakfast Yougurt", "Sesamee bread thing I dislike", "Breakfast and Lunch: Juice", "lunch: Cheese, ham, lettuce and tommato Sandwich", "dinner after arriving back: Roasted Chicken dad got"],
        feelings: "😴🫪😬Tired bus trip 4 hours to beach, way too much. There was this game that I did not understand at the beack trip, and I wanted to stop playing so badly. I did not like that I had to change in public with towel in front of others into normal clothes. I was so slow and almost was late to lunch",
        highlights: "Travel time is same as play time. The camp kids think I know 0 words and were asking me stuff like What does good morning mean? ",
        mood: "😴",
        rating: 2.5
    },
    // ============================================
    // DAY 4 - June 23, 2026
    // ============================================
    {
        day: 4,
        date: "June 23, 2026",
        locations: "Camp, House",
        events: "Go to camp and then go to Adventure Park",
        people: "IvI was a friend I met at lunch. She's from Sweden and moved here. (pernounced Eve with all e's being eeeee sound)",
        food: ["Lunch: Noodle pasta, 3/5 rating", "Breakfast:Buiscut Yougurt, 3/5 rating "],
        feelings: "🙂‍↕️I first did not want to go to Adventure park and I was tired a lot. But when I got there I has some fun.",
        highlights: "Because I got happier in previous years after 2 days, I told myself that I would be better on day 3",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 5 - June 24, 2026
    // ============================================
    {
        day: 5,
        date: "June 24, 2026",
        locations: "House, camp, natural-looking beach",
        events: "I went to beach, one hour trip. I was better at changing at towel and 8 could change behind big bush with other girls which was nicer too.",
        people: "[Names and descriptions of interesting people you met]",
        food: ["Breakfast: Yougurt, 3/5", "[Meal or dish eaten]"],
        feelings: "It did get better. Natural looking beach was more clean and nicer than 1st day beach.",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 6 - June 25, 2026
    // ============================================
    {
        day: 6,
        date: "June 25, 2026",
        locations: "House, camp, waterpark",
        events: "I went to waterpark. I went here many times before. There was a big kid and little kid section.",
        people: "Played with Ivi on waterpaek but she could only go to little kid section. Then she went on the little kid section. ",
        food: ["Breakfast at camp: Sandwich", "Lunch: Pasta with sauce and cheese. Some people did not want sauce but I liked it. Dinner: Cheese pie."],
        feelings: "I did not feel like eating yogurt today",
        highlights: "I got stuck on the King Cobra ride, the scariest ride in the park. It had this massive dip at the end and i got stuck right before it and then this lifeguard had to come and push me. ",
        mood: "😊",
        rating: 3
    },
    // ============================================
    // DAY 7 - June 26, 2026
    // ============================================
    {
        day: 7,
        date: "June 26, 2026",
        locations: "Home, camp",
        events: "I went to pool in camp. Part of my bite plate fell off at bus ride to camp. I did not leave camp. ",
        people: "[Names and descriptions of interesting people you met]",
        food: ["Yogurt", "Lunch: Burger with horrible meat and potatoes, 1/5", "Dinner with Nikoleta mom but no Nikoleta, Tiwan food. I only ate rice and chicken."],
        feelings: "😕😟I was scared when I found out that I could only get the bite plate restored on Tuesday when the dentist called it a dental emergency",
        highlights: "Pool was nice but I did not really like the water games before that when I had to lay on the scorching hot grass",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 8 - June 27, 2026
    // ============================================
    {
        day: 8,
        date: "June 27, 2026",
        locations: "House",
        events: "All I did was stay at home and do hours of math",
        people: "Dad",
        food: ["Breakfast: Peppa Pig Yogurt", "Lunch: Pizza and garlic breadsticks from Flower shop"],
        feelings: "Very boring and sad. Dad was at work whole day. Dad was thinking of delivery lunch but he decided not to.",
        highlights: "Not much did end of unit 1 and unit 2 of Khan Academy. Diana and Nikos was at wedding somewhere I think on island.",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 9 - June 28, 2026
    // ============================================
    {
        day: 9,
        date: "June 28, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 10 - June 29, 2026
    // ============================================
    {
        day: 10,
        date: "June 29, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 11 - June 30, 2026
    // ============================================
    {
        day: 11,
        date: "June 30, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 12 - July 1, 2026
    // ============================================
    {
        day: 12,
        date: "July 1, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 13 - July 2, 2026
    // ============================================
    {
        day: 13,
        date: "July 2, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 14 - July 3, 2026
    // ============================================
    {
        day: 14,
        date: "July 3, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 15 - July 4, 2026
    // ============================================
    {
        day: 15,
        date: "July 4, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 16 - July 5, 2026
    // ============================================
    {
        day: 16,
        date: "July 5, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 17 - July 6, 2026
    // ============================================
    {
        day: 17,
        date: "July 6, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 18 - July 7, 2026
    // ============================================
    {
        day: 18,
        date: "July 7, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 19 - July 8, 2026
    // ============================================
    {
        day: 19,
        date: "July 8, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 20 - July 9, 2026
    // ============================================
    {
        day: 20,
        date: "July 9, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 21 - July 10, 2026
    // ============================================
    {
        day: 21,
        date: "July 10, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 22 - July 11, 2026
    // ============================================
    {
        day: 22,
        date: "July 11, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 23 - July 12, 2026
    // ============================================
    {
        day: 23,
        date: "July 12, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 24 - July 13, 2026
    // ============================================
    {
        day: 24,
        date: "July 13, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 25 - July 14, 2026
    // ============================================
    {
        day: 25,
        date: "July 14, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 26 - July 15, 2026
    // ============================================
    {
        day: 26,
        date: "July 15, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 27 - July 16, 2026
    // ============================================
    {
        day: 27,
        date: "July 16, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 28 - July 17, 2026
    // ============================================
    {
        day: 28,
        date: "July 17, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 29 - July 18, 2026
    // ============================================
    {
        day: 29,
        date: "July 18, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 30 - July 19, 2026
    // ============================================
    {
        day: 30,
        date: "July 19, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 31 - July 20, 2026
    // ============================================
    {
        day: 31,
        date: "July 20, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 32 - July 21, 2026
    // ============================================
    {
        day: 32,
        date: "July 21, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 33 - July 22, 2026
    // ============================================
    {
        day: 33,
        date: "July 22, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 34 - July 23, 2026
    // ============================================
    {
        day: 34,
        date: "July 23, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 35 - July 24, 2026
    // ============================================
    {
        day: 35,
        date: "July 24, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 36 - July 25, 2026
    // ============================================
    {
        day: 36,
        date: "July 25, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 37 - July 26, 2026
    // ============================================
    {
        day: 37,
        date: "July 26, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 38 - July 27, 2026
    // ============================================
    {
        day: 38,
        date: "July 27, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 39 - July 28, 2026
    // ============================================
    {
        day: 39,
        date: "July 28, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 40 - July 29, 2026
    // ============================================
    {
        day: 40,
        date: "July 29, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 41 - July 30, 2026
    // ============================================
    {
        day: 41,
        date: "July 30, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 42 - July 31, 2026
    // ============================================
    {
        day: 42,
        date: "July 31, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 43 - August 1, 2026
    // ============================================
    {
        day: 43,
        date: "August 1, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 44 - August 2, 2026
    // ============================================
    {
        day: 44,
        date: "August 2, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 45 - August 3, 2026
    // ============================================
    {
        day: 45,
        date: "August 3, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 46 - August 4, 2026
    // ============================================
    {
        day: 46,
        date: "August 4, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 47 - August 5, 2026
    // ============================================
    {
        day: 47,
        date: "August 5, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 48 - August 6, 2026
    // ============================================
    {
        day: 48,
        date: "August 6, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 49 - August 7, 2026
    // ============================================
    {
        day: 49,
        date: "August 7, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 50 - August 8, 2026
    // ============================================
    {
        day: 50,
        date: "August 8, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 51 - August 9, 2026
    // ============================================
    {
        day: 51,
        date: "August 9, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 52 - August 10, 2026
    // ============================================
    {
        day: 52,
        date: "August 10, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 53 - August 11, 2026
    // ============================================
    {
        day: 53,
        date: "August 11, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 54 - August 12, 2026
    // ============================================
    {
        day: 54,
        date: "August 12, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 55 - August 13, 2026
    // ============================================
    {
        day: 55,
        date: "August 13, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    },
    // ============================================
    // DAY 56 - August 14, 2026 (FINAL DAY!)
    // ============================================
    {
        day: 56,
        date: "August 14, 2026",
        locations: "[Enter locations visited today]",
        events: "[Describe the events and activities of the day]",
        people: "[Names and descriptions of interesting people you met]",
        food: ["[Meal or dish eaten]", "[Meal or dish eaten]"],
        feelings: "[Your emotions and feelings about today]",
        highlights: "[Other memorable moments or thoughts]",
        mood: "😊",
        rating: 5
    }
];

// ============================================
// DISPLAY LOGIC - Do not edit below this line
// ============================================

class JournalApp {
    constructor() {
        this.currentIndex = 0;
        this.entries = journalEntries;
        this.init();
    }

    init() {
        this.setupDropdown();
        this.setupButtons();
        this.setupDots();
        this.displayEntry(0);
    }

    createEntryHTML(entry) {
        return `
            <div class="entry-header">
                <div class="day-number-tag">Day ${entry.day}</div>
                <h2 class="entry-title">Greece 2026</h2>
                <p class="entry-date">${entry.date}</p>
            </div>

            <div class="entry-content">
                <div class="entry-section">
                    <h3 class="section-title">📍 Locations</h3>
                    <p class="entry-text">${entry.locations}</p>
                </div>

                <div class="entry-section">
                    <h3 class="section-title">🎯 Events & Activities</h3>
                    <p class="entry-text">${entry.events}</p>
                </div>

                <div class="entry-section">
                    <h3 class="section-title">👥 People Met</h3>
                    <p class="entry-text">${entry.people}</p>
                </div>

                <div class="entry-section">
                    <h3 class="section-title">🍽️ Food Adventures</h3>
                    <ul class="food-list">
                        ${entry.food.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="entry-section">
                    <h3 class="section-title">💭 How I Felt Today</h3>
                    <p class="entry-text">${entry.feelings}</p>
                </div>

                <div class="entry-section">
                    <h3 class="section-title">✨ Other Highlights</h3>
                    <p class="entry-text">${entry.highlights}</p>
                </div>

                <div class="entry-section photos-section">
                    <h3 class="section-title">📸 Photos</h3>
                    <div class="photos-grid">
                        <div class="photo-placeholder">
                            <span class="photo-text">Add photo</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    createQuickFactsHTML(entry) {
        const weatherEmojis = ['☀️', '⛅', '☁️', '🌧️', '🌞', '🌤️'];
        const weatherTexts = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy', 'Very Sunny', 'Mostly Sunny'];
        const weatherIndex = (entry.day - 1) % weatherEmojis.length;

        return `
            <h3 class="quick-facts-title">✨ Quick facts</h3>
            
            <div class="quick-fact">
                <div class="quick-fact-emoji">🌤️</div>
                <div class="quick-fact-content">
                    <p class="quick-fact-label">Weather</p>
                    <p class="quick-fact-value">${weatherEmojis[weatherIndex]} ${weatherTexts[weatherIndex]}, ${24 + (entry.day % 9)}°C</p>
                </div>
            </div>

            <div class="quick-fact">
                <div class="quick-fact-emoji">📍</div>
                <div class="quick-fact-content">
                    <p class="quick-fact-label">Day</p>
                    <p class="quick-fact-value">Day ${entry.day} of ${this.entries.length}</p>
                </div>
            </div>

            <div class="quick-fact">
                <div class="quick-fact-emoji">😊</div>
                <div class="quick-fact-content">
                    <p class="quick-fact-label">Mood</p>
                    <div class="mood-emojis">
                        <span class="mood-option">😊</span>
                        <span class="mood-option">😍</span>
                        <span class="mood-option">🥰</span>
                        <span class="mood-option">😂</span>
                        <span class="mood-option">🤩</span>
                    </div>
                </div>
            </div>

            <div class="quick-fact">
                <div class="quick-fact-emoji">⭐</div>
                <div class="quick-fact-content">
                    <p class="quick-fact-label">Rating</p>
                    <div class="rating-stars">
                        <span class="star">⭐</span>
                        <span class="star">⭐</span>
                        <span class="star">⭐</span>
                        <span class="star">⭐</span>
                        <span class="star">⭐</span>
                    </div>
                </div>
            </div>
        `;
    }

    setupDropdown() {
        const select = document.getElementById('daySelect');
        this.entries.forEach((entry) => {
            const option = document.createElement('option');
            option.value = entry.day - 1;
            option.textContent = `Day ${entry.day} - ${entry.date}`;
            select.appendChild(option);
        });
        select.addEventListener('change', (e) => {
            this.currentIndex = parseInt(e.target.value);
            this.displayEntry(this.currentIndex);
        });
    }

    setupButtons() {
        document.getElementById('prevBtn').addEventListener('click', () => {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.displayEntry(this.currentIndex);
            }
        });
        document.getElementById('nextBtn').addEventListener('click', () => {
            if (this.currentIndex < this.entries.length - 1) {
                this.currentIndex++;
                this.displayEntry(this.currentIndex);
            }
        });
    }

    setupDots() {
        const dotsContainer = document.getElementById('dotsContainer');
        this.entries.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.addEventListener('click', () => {
                this.currentIndex = index;
                this.displayEntry(index);
            });
            dotsContainer.appendChild(dot);
        });
    }

    displayEntry(index) {
        const entry = this.entries[index];
        document.getElementById('currentEntry').innerHTML = this.createEntryHTML(entry);
        document.getElementById('quickFacts').innerHTML = this.createQuickFactsHTML(entry);
        document.getElementById('daySelect').value = index;
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        document.getElementById('prevBtn').disabled = index === 0;
        document.getElementById('nextBtn').disabled = index === this.entries.length - 1;
        window.scrollTo(0, 0);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new JournalApp();
});
