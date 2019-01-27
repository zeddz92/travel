const categories = require('../categories');

const jp = [
    {
        id: 1,
        title: "NHKワールドニュースにPlanetyze Hostelが掲載されました",
        body: "2月22日にNHKワールドニュースに新しくオープンしたPlanetyze Hostelが紹介されました。 下のリンクから、橋本CEOのインタビューでビデオをチェックすることができます。 （一定期間が過ぎるとリンクが切れる場合があります）東京ホテル不足への対応当社は外国人旅行者の動向についてのお問い合わせ、インタビューなどのお問い合わせを受け付けております。",
        date: "2017/02/23",
        categories: [
            categories['jp'][1],
            categories['jp'][3]
        ]
    },
    {
        id: 2,
        title: "2014年12月6日にRAFU SHIMPOにTravelienceが掲載されました。",
        body: "2014年12月6日にRAFU SHIMPOにTravelienceが掲載されました。",
        date: "2015/12/04",
        categories: [
            categories['jp'][1],
            categories['jp'][4]
        ]
    },
    {
        id: 3,
        title: "Travelienceは2015 Tripadvisorの優秀証明書を授与しました！",
        body: "Travelienceは本日、TripAdvisor®のCertificate of Excellence賞を受賞したと発表しました。 おもてなしの卓越性を称える賞賛は、常にトリップアドバイザーで際立った旅行者レビューを達成している施設にのみ与えられており、世界中の対象ビジネスに拡大されています。 優秀証明書を授与された事業所は世界中に配置され、上位を代表しています[…]",
        date: "2015/05/25",
        categories: [
            categories['jp'][0],
            categories['jp'][4]
        ]
    },
    {
        id: 4,
        title: "TRAVELIENCE AWARDED 2014 TRIPADVISOR CERTIFICATE OF EXCELLENCE",
        body: "Travelienceは本日、TripAdvisor®のCertificate of Excellence賞を受賞したと発表しました。 おもてなしの卓越性を称える賞賛は、常にトリップアドバイザーで際立った旅行者レビューを達成している施設にのみ与えられており、世界中の対象ビジネスに拡大されています。 優秀証明書を授与された事業所は世界中に配置され、上位を代表しています[…]",
        date: "2014/05/22",
        categories: [
            categories['jp'][0],
            categories['jp'][4]
        ]
    },
    {
        id: 5,
        title: "2014年10月30日、TripleLightsがNich Bei Weeklyに掲載されました。",
        body: "2014年10月30日、TripleLightsがNich Bei Weeklyに掲載されました。 ",
        date: "2015/11/07",
        categories: [
            categories['jp'][1],
            categories['jp'][5]
        ]
    },
    {
        id: 6,
        title: "TripleLightsは、2014年11月13日にTech in Asiaで紹介されました。",
        body: "TripleLightsは、2014年11月13日にTech in Asiaで紹介されました。 Who’s going to Startup Asia Jakarta? The winner of last night’s Tech in Asia Tokyo meetup",
        date: "2014/11/14",
        categories: [
            categories['jp'][1],
            categories['jp'][5]
        ]
    },

    {
        id: 6,
        title: "NHKワールドニュースにPlanetyze Hostelが掲載されました",
        body: "2月22日にNHKワールドニュースに新しくオープンしたPlanetyze Hostelが紹介されました。 下のリンクから、橋本CEOのインタビューでビデオをチェックすることができます。 （一定期間が過ぎるとリンクが切れる場合があります）東京ホテル不足への対応当社は外国人旅行者の動向についてのお問い合わせ、インタビューなどのお問い合わせを受け付けております。",
        date: "2017/02/23",
        categories: [
            categories['jp'][1],
            categories['jp'][3]
        ]
    },
    {
        id: 7,
        title: "2014年12月6日にRAFU SHIMPOにTravelienceが掲載されました。",
        body: "2014年12月6日にRAFU SHIMPOにTravelienceが掲載されました。",
        date: "2015/12/04",
        categories: [
            categories['jp'][1],
            categories['jp'][4]
        ]
    },
    {
        id: 8,
        title: "Travelienceは2015 Tripadvisorの優秀証明書を授与しました！",
        body: "Travelienceは本日、TripAdvisor®のCertificate of Excellence賞を受賞したと発表しました。 おもてなしの卓越性を称える賞賛は、常にトリップアドバイザーで際立った旅行者レビューを達成している施設にのみ与えられており、世界中の対象ビジネスに拡大されています。 優秀証明書を授与された事業所は世界中に配置され、上位を代表しています[…]",
        date: "2015/05/25",
        categories: [
            categories['jp'][0],
            categories['jp'][4]
        ]
    },
    {
        id: 9,
        title: "TRAVELIENCE AWARDED 2014 TRIPADVISOR CERTIFICATE OF EXCELLENCE",
        body: "Travelienceは本日、TripAdvisor®のCertificate of Excellence賞を受賞したと発表しました。 おもてなしの卓越性を称える賞賛は、常にトリップアドバイザーで際立った旅行者レビューを達成している施設にのみ与えられており、世界中の対象ビジネスに拡大されています。 優秀証明書を授与された事業所は世界中に配置され、上位を代表しています[…]",
        date: "2014/05/22",
        categories: [
            categories['jp'][0],
            categories['jp'][4]
        ]
    },
    {
        id: 10,
        title: "2014年10月30日、TripleLightsがNich Bei Weeklyに掲載されました。",
        body: "2014年10月30日、TripleLightsがNich Bei Weeklyに掲載されました。 ",
        date: "2015/11/07",
        categories: [
            categories['jp'][1],
            categories['jp'][5]
        ]
    },
    {
        id: 11,
        title: "TripleLightsは、2014年11月13日にTech in Asiaで紹介されました。",
        body: "TripleLightsは、2014年11月13日にTech in Asiaで紹介されました。 Who’s going to Startup Asia Jakarta? The winner of last night’s Tech in Asia Tokyo meetup",
        date: "2014/11/14",
        categories: [
            categories['jp'][1],
            categories['jp'][5]
        ]
    },

    {
        id: 12,
        title: "NHKワールドニュースにPlanetyze Hostelが掲載されました",
        body: "2月22日にNHKワールドニュースに新しくオープンしたPlanetyze Hostelが紹介されました。 下のリンクから、橋本CEOのインタビューでビデオをチェックすることができます。 （一定期間が過ぎるとリンクが切れる場合があります）東京ホテル不足への対応当社は外国人旅行者の動向についてのお問い合わせ、インタビューなどのお問い合わせを受け付けております。",
        date: "2017/02/23",
        categories: [
            categories['jp'][1],
            categories['jp'][3]
        ]
    },
    {
        id: 13,
        title: "2014年12月6日にRAFU SHIMPOにTravelienceが掲載されました。",
        body: "2014年12月6日にRAFU SHIMPOにTravelienceが掲載されました。",
        date: "2015/12/04",
        categories: [
            categories['jp'][1],
            categories['jp'][4]
        ]
    },
    {
        id: 14,
        title: "Travelienceは2015 Tripadvisorの優秀証明書を授与しました！",
        body: "Travelienceは本日、TripAdvisor®のCertificate of Excellence賞を受賞したと発表しました。 おもてなしの卓越性を称える賞賛は、常にトリップアドバイザーで際立った旅行者レビューを達成している施設にのみ与えられており、世界中の対象ビジネスに拡大されています。 優秀証明書を授与された事業所は世界中に配置され、上位を代表しています[…]",
        date: "2015/05/25",
        categories: [
            categories['jp'][0],
            categories['jp'][4]
        ]
    },
    {
        id: 15,
        title: "TRAVELIENCE AWARDED 2014 TRIPADVISOR CERTIFICATE OF EXCELLENCE",
        body: "Travelienceは本日、TripAdvisor®のCertificate of Excellence賞を受賞したと発表しました。 おもてなしの卓越性を称える賞賛は、常にトリップアドバイザーで際立った旅行者レビューを達成している施設にのみ与えられており、世界中の対象ビジネスに拡大されています。 優秀証明書を授与された事業所は世界中に配置され、上位を代表しています[…]",
        date: "2014/05/22",
        categories: [
            categories['jp'][0],
            categories['jp'][4]
        ]
    },
    {
        id: 16,
        title: "2014年10月30日、TripleLightsがNich Bei Weeklyに掲載されました。",
        body: "2014年10月30日、TripleLightsがNich Bei Weeklyに掲載されました。 ",
        date: "2015/11/07",
        categories: [
            categories['jp'][1],
            categories['jp'][5]
        ]
    },
    {
        id: 17,
        title: "TripleLightsは、2014年11月13日にTech in Asiaで紹介されました。",
        body: "TripleLightsは、2014年11月13日にTech in Asiaで紹介されました。 Who’s going to Startup Asia Jakarta? The winner of last night’s Tech in Asia Tokyo meetup",
        date: "2014/11/14",
        categories: [
            categories['jp'][1],
            categories['jp'][5]
        ]
    }

];

module.exports = jp;