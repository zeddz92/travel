const categories = require('../mocks/categories');
const posts = [
    {
        id: 1,
        title: "Planetyze Hostel was featured in NHK world news",
        body: "Our newly opened Planetyze Hostel was featured on NHK world news on February 22nd. You can check the video with our CEO Hashimoto’s interview, from the link below. (The link might expire after a certain period) Dealing with Tokyo Hotel Shortage Our company is open to any inquiries, interviews, etc. on trends of foreign travelers […] ",
        date: "2017/02/23",
        categories: [
             categories[1],
             categories[3]
        ]
    },
    {
        id: 2,
        title: "Travelience was featured in RAFU SHIMPO on 6th Dec. 2014.",
        body: "Travelience was featured in RAFU SHIMPO on 6th Dec. 2014.",
        date: "2015/12/04",
        categories: [
             categories[1],
             categories[4]
        ]
    },
    {
        id: 3,
        title: "Travelience awarded 2015 Tripadvisor certificate of excellence!",
        body: "Travelience today announced that it has received a TripAdvisor® Certificate of Excellence award. The accolade, which honors hospitality excellence, is given only to establishments that consistently achieve outstanding traveller reviews on TripAdvisor, and is extended to qualifying businesses worldwide. Establishments awarded the Certificate of Excellence are located all over the world and represent the upper […] ",
        date: "2015/05/25",
        categories: [
             categories[0],
             categories[4]
        ]
    },
    {
        id: 4,
        title: "TRAVELIENCE AWARDED 2014 TRIPADVISOR CERTIFICATE OF EXCELLENCE",
        body: "Travelience today announced that it has received a TripAdvisor® Certificate of Excellence award. The accolade, which honors hospitality excellence, is given only to establishments that consistently achieve outstanding traveller reviews on TripAdvisor, and is extended to qualifying businesses worldwide. Establishments awarded the Certificate of Excellence are located all over the world and represent the upper […] ",
        date: "2014/05/22",
        categories: [
             categories[0],
             categories[4]
        ]
    },
    {
        id: 5,
        title: "TripleLights was featured in Nichi Bei Weekly on 30th Oct. 2014.",
        body: "TripleLights was featured in Nichi Bei Weekly on 30th Oct. 2014. ",
        date: "2015/11/07",
        categories: [
             categories[1],
             categories[5]
        ]
    },
    {
        id: 6,
        title: "TripleLights was featured in Tech in Asia on 13th Nov. 2014.",
        body: "TripleLights was featured in Tech in Asia on 13th Nov. 2014. Who’s going to Startup Asia Jakarta? The winner of last night’s Tech in Asia Tokyo meetup",
        date: "2014/11/14",
        categories: [
             categories[1],
             categories[5]
        ]
    },

    {
        id: 6,
        title: "Planetyze Hostel was featured in NHK world news",
        body: "Our newly opened Planetyze Hostel was featured on NHK world news on February 22nd. You can check the video with our CEO Hashimoto’s interview, from the link below. (The link might expire after a certain period) Dealing with Tokyo Hotel Shortage Our company is open to any inquiries, interviews, etc. on trends of foreign travelers […] ",
        date: "2017/02/23",
        categories: [
             categories[1],
             categories[3]
        ]
    },
    {
        id: 7,
        title: "Travelience was featured in RAFU SHIMPO on 6th Dec. 2014.",
        body: "Travelience was featured in RAFU SHIMPO on 6th Dec. 2014.",
        date: "2015/12/04",
        categories: [
             categories[1],
             categories[4]
        ]
    },
    {
        id: 8,
        title: "Travelience awarded 2015 Tripadvisor certificate of excellence!",
        body: "Travelience today announced that it has received a TripAdvisor® Certificate of Excellence award. The accolade, which honors hospitality excellence, is given only to establishments that consistently achieve outstanding traveller reviews on TripAdvisor, and is extended to qualifying businesses worldwide. Establishments awarded the Certificate of Excellence are located all over the world and represent the upper […] ",
        date: "2015/05/25",
        categories: [
             categories[0],
             categories[4]
        ]
    },
    {
        id: 9,
        title: "TRAVELIENCE AWARDED 2014 TRIPADVISOR CERTIFICATE OF EXCELLENCE",
        body: "Travelience today announced that it has received a TripAdvisor® Certificate of Excellence award. The accolade, which honors hospitality excellence, is given only to establishments that consistently achieve outstanding traveller reviews on TripAdvisor, and is extended to qualifying businesses worldwide. Establishments awarded the Certificate of Excellence are located all over the world and represent the upper […] ",
        date: "2014/05/22",
        categories: [
             categories[0],
             categories[4]
        ]
    },
    {
        id: 10,
        title: "TripleLights was featured in Nichi Bei Weekly on 30th Oct. 2014.",
        body: "TripleLights was featured in Nichi Bei Weekly on 30th Oct. 2014. ",
        date: "2015/11/07",
        categories: [
             categories[1],
             categories[5]
        ]
    },
    {
        id: 11,
        title: "TripleLights was featured in Tech in Asia on 13th Nov. 2014.",
        body: "TripleLights was featured in Tech in Asia on 13th Nov. 2014. Who’s going to Startup Asia Jakarta? The winner of last night’s Tech in Asia Tokyo meetup",
        date: "2014/11/14",
        categories: [
             categories[1],
             categories[5]
        ]
    },

    {
        id: 12,
        title: "Planetyze Hostel was featured in NHK world news",
        body: "Our newly opened Planetyze Hostel was featured on NHK world news on February 22nd. You can check the video with our CEO Hashimoto’s interview, from the link below. (The link might expire after a certain period) Dealing with Tokyo Hotel Shortage Our company is open to any inquiries, interviews, etc. on trends of foreign travelers […] ",
        date: "2017/02/23",
        categories: [
             categories[1],
             categories[3]
        ]
    },
    {
        id: 13,
        title: "Travelience was featured in RAFU SHIMPO on 6th Dec. 2014.",
        body: "Travelience was featured in RAFU SHIMPO on 6th Dec. 2014.",
        date: "2015/12/04",
        categories: [
             categories[1],
             categories[4]
        ]
    },
    {
        id: 14,
        title: "Travelience awarded 2015 Tripadvisor certificate of excellence!",
        body: "Travelience today announced that it has received a TripAdvisor® Certificate of Excellence award. The accolade, which honors hospitality excellence, is given only to establishments that consistently achieve outstanding traveller reviews on TripAdvisor, and is extended to qualifying businesses worldwide. Establishments awarded the Certificate of Excellence are located all over the world and represent the upper […] ",
        date: "2015/05/25",
        categories: [
             categories[0],
             categories[4]
        ]
    },
    {
        id: 15,
        title: "TRAVELIENCE AWARDED 2014 TRIPADVISOR CERTIFICATE OF EXCELLENCE",
        body: "Travelience today announced that it has received a TripAdvisor® Certificate of Excellence award. The accolade, which honors hospitality excellence, is given only to establishments that consistently achieve outstanding traveller reviews on TripAdvisor, and is extended to qualifying businesses worldwide. Establishments awarded the Certificate of Excellence are located all over the world and represent the upper […] ",
        date: "2014/05/22",
        categories: [
             categories[0],
             categories[4]
        ]
    },
    {
        id: 16,
        title: "TripleLights was featured in Nichi Bei Weekly on 30th Oct. 2014.",
        body: "TripleLights was featured in Nichi Bei Weekly on 30th Oct. 2014. ",
        date: "2015/11/07",
        categories: [
             categories[1],
             categories[5]
        ]
    },
    {
        id: 17,
        title: "TripleLights was featured in Tech in Asia on 13th Nov. 2014.",
        body: "TripleLights was featured in Tech in Asia on 13th Nov. 2014. Who’s going to Startup Asia Jakarta? The winner of last night’s Tech in Asia Tokyo meetup",
        date: "2014/11/14",
        categories: [
             categories[1],
             categories[5]
        ]
    }

];

module.exports = posts;