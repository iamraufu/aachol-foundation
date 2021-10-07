const mediaData = [
    {
        name:'News Bangla 24',
        link:'https://www.newsbangla24.com/health/128965/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%AC%E0%A7%87%E0%A7%9C%E0%A7%87%E0%A6%9B%E0%A7%87-%E0%A6%B8%E0%A6%BE%E0%A7%9C%E0%A7%87-%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A6%9C%E0%A6%B0%E0%A6%BF%E0%A6%AA',
        title:'ডাকসু এবং আঁচলের উদ্যোগে আয়োজিত অ্যাওয়ারনেস সেমিনারে আসছেন পূর্ণিমা'
    },
    {
        name:'Dhaka Tribune',
        link:'https://www.dhakatribune.com/showtime/2020/02/20/suman-urges-youths-to-take-care-of-mental-health?fbclid=IwAR2fZEq-DRdbpgym0gK_6pHk26jrWzLIxuXPtZ4EwUZUXVsLQuyfHwDAwP4',
        title:'Suman urges youth to take care of mental health'
    },
    {
        name:'News Bangla 24',
        link:'https://www.newsbangla24.com/health/128965/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%AC%E0%A7%87%E0%A7%9C%E0%A7%87%E0%A6%9B%E0%A7%87-%E0%A6%B8%E0%A6%BE%E0%A7%9C%E0%A7%87-%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A6%9C%E0%A6%B0%E0%A6%BF%E0%A6%AA',
        title:'করোনাকালে আত্মহত্যা বেড়েছে সাড়ে ৪ হাজার: জরিপ'
    },
    {
        name:'Prothom Alo',
        link:'https://www.prothomalo.com/bangladesh/%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%9B%E0%A7%87-%E0%A7%A7%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%81%E0%A6%B7?fbclid=IwAR2NJYv7X0llZYDW0Ae6WFVbzDuQxOWQI0jYfCZxx7PYL4HCrZ_zI9lA16c',
        title:'এক বছরে আত্মহত্যা করেছে ১৪ হাজারের বেশি মানুষ'
    },
    {
        name:'Dhaka post',
        link:'https://www.dhakapost.com/national/16902?fbclid=IwAR29ih2qdqQsUWgmuaesGx2S-ZGBg-l0ih6anc9nHAIoeVHukR0YlrHtaMU',
        title:'করোনায় দেশে আত্মহত্যার নতুন রেকর্ড'
    },
    {
        name:'Bangladesh Journal',
        link:'https://www.bd-journal.com/bangladesh/152851/%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A7%9F-%E0%A6%AA%E0%A7%81%E0%A6%B0%E0%A7%81%E0%A6%B7%E0%A7%87%E0%A6%B0-%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A7%87-%E0%A6%8F%E0%A6%97%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%B0%E0%A6%BE?fbclid=IwAR2KVUhnR2LbuEMgzePCvf1y63c0ZU6y4QBAW2Iqexc8t6E3u9IamYguMaE',
        title:'আত্মহত্যায় পুরুষের চেয়ে এগিয়ে নারীরা'
    },
    {
        name:'Vinnabarta',
        link:'https://www.vinnabarta.com/%e0%a6%8f%e0%a6%95-%e0%a6%ac%e0%a6%9b%e0%a6%b0%e0%a7%87-%e0%a7%a7%e0%a7%aa-%e0%a6%b9%e0%a6%be%e0%a6%9c%e0%a6%be%e0%a6%b0%e0%a7%87%e0%a6%b0-%e0%a6%ac%e0%a7%87%e0%a6%b6%e0%a6%bf-%e0%a6%ae%e0%a6%be/?fbclid=IwAR1wC4jM7stAhoVeal4Aes7L0SrOtWYSjY6eAsgIJfPtViirPWRK_NpP9rU',
        title:'এক বছরে ১৪ হাজারের বেশি মানুষের আত্মহত্যা'
    },
    {
        name:'Desh Sanbad',
        link:'https://www.deshsangbad.com/details.php?id=116457&fbclid=IwAR39rttwixtpQjdnXGIbiCD6qGyzGHa16kot7Rj1V81_H5uIu_e2T3WjjuM',
        title:'এক বছরে ১৪ হাজারের বেশি মানুষের আত্মহত্যা'
    },
    {
        name:'Jai Jai din bd',
        link:'https://www.jaijaidinbd.com/national/152135/%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87--%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE--%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%9B%E0%A7%87-%E0%A7%A7%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A7%AA%E0%A7%A9%E0%A7%AC-%E0%A6%9C%E0%A6%A8?fbclid=IwAR3d60vr0hwjaPP4ETuXg6shEKSHcW01fIhA1T_toEn50TSbRZCl0pUj9Fw',
        title:'দেশে এক বছরে আত্মহত্যা করেছে ১৪ হাজার ৪৩৬ জন'
    },
    {
        name:'Dhaka times 24',
        link:'https://www.dhakatimes24.com/2021/03/13/206140/%E0%A6%AE%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%B0-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87-%E0%A7%A7%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE?fbclid=IwAR1wC4jM7stAhoVeal4Aes7L0SrOtWYSjY6eAsgIJfPtViirPWRK_NpP9rU',
        title:'মহামারির এক বছরে ১৪ হাজারের বেশি আত্মহত্যা'
    },
    {
        name:'Khola Kagoj',
        link:'http://www.kholakagojbd.com/national/73064?fbclid=IwAR0rBX7uxjrLJkhY2FBDQwInTETFw_H420GgBe6ow9DqjrOjlXeUnIBv9gY',
        title:'করোনার এক বছরে দেশে ১৪ হাজার ৪৩৬ জনের আত্মহত্যা'
    },
    {
        name:'Dainik shiksha',
        link:'https://m.dainikshiksha.com/%E0%A6%AE%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%B0-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87-%E0%A7%A7%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE/205101/?fbclid=IwAR3EXZCJ0V9O8deKHOrVMzLHLRHUhdVsqfGpTLg4OmMrque_KW58T-uy-QQ',
        title:'মহামারির এক বছরে ১৪ হাজারের বেশি আত্মহত্যা'
    },
    {
        name:'mzamin',
        link:'https://mzamin.com/article.php?mzamin=266088',
        title:'দেশে এক বছরে ১৪ হাজার ৪৩৬ জনের আত্মহত্যা'
    },
    {
        name:'Dhaka Tribune',
        link:'https://bangla.dhakatribune.com/bangladesh/2021/03/13/32742?fbclid=IwAR2qa0L4UYXIzMHWO2TllGJU9eokzJ82wIVobZ_EZ4gbwE_Eo7NdzbNOyN0',
        title:'মহামারির সময় দেশে ১৪ হাজারের বেশি আত্মহত্যা'
    },
    {
        name:'Ittefaq',
        link:'https://www.ittefaq.com.bd/capital/229058/%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A7%9F-%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%B0-%E0%A6%B8%E0%A6%82%E0%A6%96%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF?fbclid=IwAR1L4oW4W4S-WjBlMkD9FEIfslIvPSHmUZMOIGCC0Mj7ykbNiyolZD30cyY',
        title:'আত্মহত্যায় নারীর সংখ্যা বেশি'
    },
    {
        name:'Samakal',
        link:'https://samakal.com/bangladesh-others/article/210355659/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%9B%E0%A7%87-%E0%A7%A7%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0%E0%A6%93-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%81%E0%A6%B7-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A6%BF%E0%A6%AC%E0%A7%87%E0%A6%A6%E0%A6%A8',
        title:'করোনাকালে আত্মহত্যা ১৪ হাজারেরও বেশি: প্রতিবেদন'
    },
    {
        name:'Dhaka Tribune English',
        link:'https://www.dhakatribune.com/bangladesh/2021/03/13/70-more-suicides-than-covid-19-deaths-in-the-last-year?fbclid=IwAR2xsYYC92H-Xj0Ng4q7k47WHNCZMcTmll32Sp2tHejqUR_HqbU_joR2tIM',
        title:'70% more suicides than Covid-19 deaths in the last year'
    },
    {
        name:'Daily Inqilab',
        link:'https://m.dailyinqilab.com/article/364884/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87-%E0%A7%A7%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE?fbclid=IwAR2eLg1q9R0QyGDfkajarz0321ZgTrNorexD1QWQ915HGHBKRAzaEsR2-Es',
        title:'করোনার এক বছরে ১৪ হাজারের বেশি আত্মহত্যা'
    },
    {
        name:'The Sangbad',
        link:'http://thesangbad.net/news/bangladesh/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0%2B%E0%A6%8F%E0%A6%95%2B%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87%2B%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%2B%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE%2B%E0%A7%A7%E0%A7%AA%2B%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0%2B%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF-30669/',
        title:'করোনার এক বছরে দেশে আত্মহত্যা ১৪ হাজারের বেশি'
    },
    {
        name:'Dainik Purbokone',
        link:'https://dainikpurbokone.net/national/181973/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE/?fbclid=IwAR1r9eJn0W_AOODu-7lG4t9ZlWCbt6qap8KakD5bJsyoh6kAoQdMeWreQtg',
        title:'করোনার এক বছরে আত্মহত্যা সাড়ে ১৪ হাজার, নারীই বেশি'
    },
    {
        name:'Priyo',
        link:'https://m.priyo.com/e/3016914-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AC%E0%A6%A3%E0%A6%A4%E0%A6%BE-%E0%A6%AC%E0%A6%BE%E0%A7%9C%E0%A6%9B%E0%A7%87%E0%A6%87-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A3%E0%A7%80%E0%A6%B0%E0%A6%BE%E0%A6%87-%E0%A6%95%E0%A7%87%E0%A6%A8-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF?fbclid=IwAR2nT2kFUsWpvnQoV4UKjORKhGZtFcXsCZ6W4dqvh-TIDtNK1wt6moUAXqs',
        title:'আত্মহত্যার প্রবণতা বাড়ছেই, তরুণীরাই কেন বেশি'
    },
    {
        name:'Dainik Amader Shomoy',
        link:'http://www.dainikamadershomoy.com/post/305922',
        title:'করোনাকালে আত্মহত্যা ৪০ শতাংশ বেড়েছে'
    },
    {
        name:'News Hunt',
        link:'https://www.newshunt.com.bd/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A7%A7%E0%A7%AA-%E0%A6%B9/?fbclid=IwAR2LXa7Pe1w0XkleAr939vggpao8_ar96f3HBObyGwJgdp-RdHDQB2Qs8cg',
        title:'করোনাকালে আত্মহত্যা ১৪ হাজারেরও বেশি'
    },
    {
        name:'New Age Bangladesh',
        link:'https://www.newagebd.net/article/132701/14436-commit-suicide-in-country-amid-covid-19?fbclid=IwAR2LXa7Pe1w0XkleAr939vggpao8_ar96f3HBObyGwJgdp-RdHDQB2Qs8cg',
        title:'14,436 commit suicide in country amid COVID-19'
    },
    {
        name:'unb.com',
        link:'https://unb.com.bd/bangla/category/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%9B%E0%A7%87-%E0%A7%A7%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%81%E0%A6%B7:-%E0%A6%86%E0%A6%81%E0%A6%9A%E0%A6%B2-%E0%A6%AB%E0%A6%BE%E0%A6%89%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A7%87%E0%A6%B6%E0%A6%A8/40458',
        title:'করোনাকালে দেশে আত্মহত্যা করেছে ১৪ হাজারের বেশি মানুষ: আঁচল ফাউন্ডেশন '
    },
    {
        name:'Kaler kantho',
        link:'https://www.kalerkantho.com/print-edition/news/2021/03/14/1013848?fbclid=IwAR2s5X0_NclwdeZqSYtW_QQ7lbLd29FG78M7G8M1hIZuGTtzJ4ZtE5KhyuA',
        title:'এক বছরে আত্মহত্যা ১৪ হাজারের বেশি'
    },
    {
        name:'The Daily Campus',
        link:'https://thedailycampus.com/national/64297/%E0%A6%97%E0%A7%87%E0%A6%B2-%E0%A6%AC%E0%A6%9B%E0%A6%B0-%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87-%E0%A7%A7%E0%A7%AA%E0%A7%AA%E0%A7%A9%E0%A7%AC-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A7%AB%E0%A7%AD-%E0%A6%B6%E0%A6%A4%E0%A6%BE%E0%A6%82%E0%A6%B6-%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A7%80',
        title:'গেল বছর দেশে ১৪৪৩৬ আত্মহত্যা, ৫৭ শতাংশ নারী'
    },
    {
        name:'Dainik Sangbad Protidin',
        link:'https://www.dainiksangbadpratidin.com/details.php?id=64969&fbclid=IwAR3ZLa7TQ9oLHkgQ__m1DC8v5Xj8AyutZ8nSHfBU9N69gl7df6OFWxPqP7Y',
        title:'করোনায় দেশে আত্মহত্যার নতুন রেকর্ড'
    },
    {
        name:'Sarakhon',
        link:'https://www.sarakhon.com/20818/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87-%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A7%A7%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%82%E0%A6%96%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A7%9F?fbclid=IwAR3R85VA2OfMWtsHawvEZWYFp9oVDs1qHZWlMfsXClYBQMgeYWDbOZ7A7h4',
        title:''
    },
    {
        name:'Web Bangladesh',
        link:'https://www.webbangladesh.com/%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%95%E0%A6%B0/?utm_source=rss&utm_medium=rss&utm_campaign=%25e0%25a6%25a6%25e0%25a7%2587%25e0%25a6%25b6%25e0%25a7%2587-%25e0%25a6%258f%25e0%25a6%2595-%25e0%25a6%25ac%25e0%25a6%259b%25e0%25a6%25b0%25e0%25a7%2587-%25e0%25a6%2586%25e0%25a6%25a4%25e0%25a7%258d%25e0%25a6%25ae%25e0%25a6%25b9%25e0%25a6%25a4%25e0%25a7%258d%25e0%25a6%25af%25e0%25a6%25be-%25e0%25a6%2595%25e0%25a6%25b0&fbclid=IwAR2eLg1q9R0QyGDfkajarz0321ZgTrNorexD1QWQ915HGHBKRAzaEsR2-Es',
        title:'দেশে এক বছরে আত্মহত্যা করেছে ১৪ হাজার ৪৩৬ জন'
    },
    {
        name:'Bangla Tribune',
        link:'https://banglatribune.com/671088/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%B8%E0%A6%BE%E0%A7%9C%E0%A7%87-%E0%A7%A7%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0?fbclid=IwAR2ng64FF_2pkSAVzLj2B_dVkBF_RRi4__9MCtMgb5l8jSiR0qAoJTmWeaY',
        title:'করোনার এক বছরে আত্মহত্যা সাড়ে ১৪ হাজার'
    },
    {
        name:'NTV BD',
        link:'https://www.ntvbd.com/bangladesh/%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AC%E0%A6%A3%E0%A6%A4%E0%A6%BE-%E0%A6%AC%E0%A6%BE%E0%A7%9C%E0%A6%9B%E0%A7%87%E0%A6%87-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A3%E0%A7%80%E0%A6%B0%E0%A6%BE%E0%A6%87-%E0%A6%95%E0%A7%87%E0%A6%A8-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF-877361',
        title:'আত্মহত্যার প্রবণতা বাড়ছেই, তরুণীরাই কেন বেশি'
    },
    {
        name:'Dhaka Tribune English',
        link:'https://www.dhakatribune.com/health/2021/03/13/health-experts-slow-down-to-cope-with-covid-19-trauma?fbclid=IwAR04sG_cfl1NgQrGc2MemsGrStm-M4U_FdkWBhXvrS1VWiia_z6jstTA0wo',
        title:''
    },
    {
        name:'ATN News Live',
        link:'https://fb.watch/4eC7jag0Tk/?fbclid=IwAR2jkzg2cF-7QWoT5088Cg4TAy3MdHlZOeFvKO8thcYixwJJC7-bVBbU5ns',
        title:'Mental health experts: Slow down to cope with Covid-19 trauma'
    },
    {
        name:'Kaler Kantho',
        link:'https://www.kalerkantho.com/print-edition/editorial',
        title:''
    },
    {
        name:'Khas Khobor',
        link:'https://khaskhobor.com/blog/2021/03/14/during-the-coronation-period-the-suicide-rate-in-bangladesh-increased-by-44-37-percent/?fbclid=IwAR0Q9G6wn7CiBPMbMN6qpkr-kGk33AAdUQmrZiCXUzObPBDUXaWamDo5zeA',
        title:'করোনাকালে ৪৪.৩৬ শতাংশ আত্মহত্যা বেড়েছে বাংলাদেশে'
    },
    {
        name:'Chandpur Times',
        link:'https://chandpurtimes.com/%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87-%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0-%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D/',
        title:'দেশে করোনার চেয়ে আত্মহত্যায় মৃত্যু বেশি'
    },
    {
        name:'Prothom Alo English',
        link:'https://en.prothomalo.com/bangladesh/14436-commit-suicide-during-pandemic-last-year?fbclid=IwAR0MybilitVTMB7OCN_Cpfd3EnHRVIyIyXMG0hITO0lMi_k8QmF-1brNEaM',
        title:'14,436 commit suicide during pandemic last year'
    },
    {
        name:'Pars today',
        link:'https://parstoday.com/bn/news/bangladesh-i88646?fbclid=IwAR2F1LgyBGOf6_LRmBf2jJzyMnKr0a3gIWYiOvBmxBPsbgdsm6kADylrjcU',
        title:'বাংলাদেশে করোনাকালে আত্মহত্যা বেড়েছে ৪৪.৩৬ শতাংশ: চিকিৎসকের প্রতিক্রিয়া'
    },
    {
        name:'AA Turkish news paper',
        link:'https://www.aa.com.tr/en/asia-pacific/bangladesh-suicide-claims-more-lives-than-coronavirus/2175200?fbclid=IwAR2Tx35ETXADpqPxAQuOAWQwCPmfY44Y_g4FHmErz0JMHg-4RCbeGAMjgWI',
        title:'Bangladesh: Suicide claims more lives than coronavirus'
    },
    {
        name:'Menafn',
        link:'https://menafn.com/1101749211/Bangladeshi-survey-shows-number-of-deaths-of-suicide-Coronavirus&source=30?fbclid=IwAR1lZKkkeqkJNTAwC4mRaiASW0wMM0sDACngto8NPaAyEh3YBxmZkvDYJq4',
        title:'Bangladeshi survey shows number of deaths of suicide, Coronavirus'
    },
    {
        name:'EAI Amar desh',
        link:'https://eaiamardesh.com/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87-%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87/',
        title:'বাংলাদেশে করোনার এক বছরে আত্মহত্যার সংখ্যা প্রায় সাড়ে ১৪ হাজার'
    },
    {
        name:'STB.com',
        link:'https://www.stb.com.bd/amp/bangladesh/news/4742?fbclid=IwAR0-vr3qbzYnNMWIYXTjq67rwfiK-_2bGCWJWHBdvRWGVmBEBN-VGckNM1E',
        title:'এক বছরে আত্মহত্যা সাড়ে ১৪ হাজার, নারীরা বেশি'
    },
    {
        name:'Alert news',
        link:'https://www.alertnews24.com/%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87-%E0%A6%8F%E0%A6%95-%E0%A6%AC%E0%A6%9B%E0%A6%B0%E0%A7%87-%E0%A7%A7%E0%A7%AA-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A7%AA%E0%A7%A9%E0%A7%AC-%E0%A6%9C/?fbclid=IwAR0BFMOvbLfa57CwYxVZfwNMAHk3epVgNmFx7WnmpfBni3gcdUtlzm5wmd0',
        title:'দেশে এক বছরে ১৪ হাজার ৪৩৬ জনের আত্মহত্যা'
    },
    {
        name:'RTV online',
        link:'https://www.rtvonline.com/bangladesh/crime/122796?fbclid=IwAR3SIvGAnTEQoi4HwA5NtmT_Y-8uQuijeZLueAZkYw8hMj7HxT7hePJVtss',
        title:'সারা দেশে করোনার ১ বছরে আত্মহত্যা সাড়ে ১৪ হাজার'
    },
    {
        name:'Debate competition Aachol',
        link:'https://www.dhakatribune.com/bangladesh/nation/2020/11/22/cu-wins-national-debate-on-suicide-prevention?fbclid=IwAR2SpQ5MV9KW3oxZOizegCOIXE58AT5tK7wOB-P29r-IEKbxcBu601G1hbA',
        title:'CU wins National Debate on Suicide Prevention'
    },
    {
        name:'Webinar Aachol',
        link:'https://www.youthop.com/bd/workshops/emk-center-presents-cyber-pandemic-how-much-safe-you-are-2021?fbclid=IwAR2F1LgyBGOf6_LRmBf2jJzyMnKr0a3gIWYiOvBmxBPsbgdsm6kADylrjcU',
        title:'EMK Center presents Cyber Pandemic: How Much Safe You Are 2021'
    },
    {
        name:'Daily Sun',
        link:'https://www.daily-sun.com/printversion/details/559900/Suicidal-tendencies-among-students-on-the-rise?fbclid=IwAR1G-sYdLcV-5J7Tyrvl39oY6TNJxts8OvbojYFgtsroaYG_lRt8EdK_lo8',
        title:'Suicidal tendencies among students on the rise'
    },
    {
        name:'Ekattor TV news',
        link:'https://www.facebook.com/aacholfoundation/videos/4052198224865702',
        title:''
    },
    {
        name:'Dainik Purbokone',
        link:'https://dainikpurbokone.net/chattogram/196732/%E0%A6%AE%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%A4%E0%A7%87-%E0%A6%AC%E0%A7%87%E0%A7%9C%E0%A7%87%E0%A6%9B%E0%A7%87-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D/?fbclid=IwAR1dwsPWYtcuRsYUc0e5VpvBE_sN0h4SSE3W3hCxvTbbsW-75EMrsJhsBWU',
        title:'মহামারীতে বেড়েছে আত্মহত্যা'
    },
    {
        name:'Prothom Alo',
        link:'https://www.prothomalo.com/opinion/column/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A7%9C%E0%A6%A4%E0%A6%BF-%E0%A6%AE%E0%A7%83%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A7%81%E0%A6%B0-%E0%A6%B9%E0%A6%BF%E0%A6%B8%E0%A6%BE%E0%A6%AC-%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%81%E0%A6%A8?fbclid=IwAR08jJ03oxajHERaxJXz6GiH_pEj0xmCtiqBT-JpVxHtgmFb4Od4VoS31U8',
        title:'করোনাকালে বাড়তি মৃত্যুর হিসাব নিয়ে ভাবুন'
    },
    {
        name:'Daily Naya Diganta',
        link:'https://www.dailynayadiganta.com/Incident-accident/569062/ND?fbclid=IwAR3t-XxgOpD8F8ORUfYs15OWj0FM_M_PD7wXbIk9st15TrU-0PCr_Z-S6NM',
        title:'করোনাকালে দেশে আত্মহত্যা করেছে ১৪ হাজারের বেশি মানুষ'
    },
    {
        name:'Kempalan',
        link:'https://kempalan.com/2021/03/15/studi-negara-bangladesh-bunuh-diri-lebih-mematikan-daripada-virus-coron/?amp',
        title:'Studi Negara Bangladesh, Bunuh Diri Lebih Mematikan daripada Virus Corona'
    },
    {
        name:'Sumeks',
        link:'https://sumeks.co/angka-kematian-bunuh-diri-di-bangladesh-lebih-tinggi-daripada-akibat-covid-19/?fbclid=IwAR2S7q7SB8jjBpTTozNvFmwyxO-GKzUBZw98S2tgWtfGVb3zhWsh9fxxKAM',
        title:'Angka Kematian Bunuh Diri di Bangladesh Lebih Tinggi Daripada Akibat Covid-19'
    },
    {
        name:'Today line.me',
        link:'https://lenterasultra.com/blog/2021/03/15/di-bangladesh-angka-bunuh-diri-lebih-tinggi-dibanding-kematian-covid-19/?fbclid=IwAR3HiFvYxFX7ojKkWIVJgXgi_Mo-ytFJIVpBEp1fd3zhdcnr5KuKJhndVIQ',
        title:'Angka Bunuh Diri di Bangladesh Lebih Tinggi dari Kematian Covid-19'
    },
    {
        name:'Lenterasultra',
        link:'https://lenterasultra.com/blog/2021/03/15/di-bangladesh-angka-bunuh-diri-lebih-tinggi-dibanding-kematian-covid-19/?fbclid=IwAR3HiFvYxFX7ojKkWIVJgXgi_Mo-ytFJIVpBEp1fd3zhdcnr5KuKJhndVIQ',
        title:'Di Bangladesh, Angka Bunuh Diri Lebih Tinggi Dibanding Kematian Covid-19'
    },
    {
        name:'Walltrace',
        link:'https://walltrace.com/2021/03/bangladesh-suicide-guarantees-a-larger-number-of-lives-than-covid/amp/?fbclid=IwAR2ZM8mfDxpPDo0JBWZsPfOCXJwwo6GX1Vza61M7JX1NjUUqAsxlh3SkSGw',
        title:'Bangladesh: Suicide Guarantees A Larger Number Of Lives Than Covid'
    },
    {
        name:'Asia Today',
        link:'https://asiatoday.id/read/34633?fbclid=IwAR0DVg8nJGUN0Ms8LCVLRwyYDAbftARQDSuuSRvHaO1jkhc6pu6hOvZEiis',
        title:'Di Bangladesh, Angka Bunuh Diri Lebih Tinggi Dibanding Kematian Covid-19'
    },
    {
        name:'Bangladesh Protidin',
        link:'https://www.bd-pratidin.com/last-page/2021/07/10/668603?fbclid=IwAR1BHpwOD9FxZrk9C15mr5V42JLEbW9XvbzxDxXDVxhV0mFDNh_QodyF1PU',
        title:'ভয়াবহ মানসিক চাপে তারুণ্য'
    },
    {
        name:'Nabadut',
        link:'https://nabadut.com/archives/2294?fbclid=IwAR3qCUO6Oy7l1MehMXhE_RNDKF2QHlp90OumNOy1pfritCtTT9jLbwVvs7o',
        title:'করোনায় আত্মহত্যার চিন্তা করেছে ৫০ শতাংশ তরুণ-তরুণী'
    },
    {
        name:'The Daily campus',
        link:'https://thedailycampus.com/health-and-life/71893/%E0%A6%AD%E0%A7%9F%E0%A6%BE%E0%A6%AC%E0%A6%B9-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%B8%E0%A6%BF%E0%A6%95-%E0%A6%9A%E0%A6%BE%E0%A6%AA%E0%A7%87-%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A5%E0%A7%80%E0%A6%B0%E0%A6%BE-%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%B0-%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%B9%E0%A6%A4%E0%A6%BE%E0%A6%B6%E0%A6%BE-%E0%A6%B8%E0%A7%87%E0%A6%B6%E0%A6%A8%E0%A6%9C%E0%A6%9F%E0%A6%B8%E0%A6%B9-%E0%A7%A7%E0%A7%A6-%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%A3',
        title:'করোনাকালে ভয়াবহ মানসিক চাপে শিক্ষার্থীরা'
    },
    {
        name:'The Daily Star',
        link:'https://www.thedailystar.net/health/healthcare/news/61-adolescents-suffer-depression-36-attempted-suicide-during-pandemic-survey-2126536',
        title:'61% of adolescents suffer from depression, 3.6% attempted suicide during pandemic: Survey'
    },
    {
        name:'The Daily Star',
        link:'https://www.thedailystar.net/bangla/%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A6%A3%E0%A7%8D%E0%A6%AF/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A3%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A7%AC%E0%A7%A7%E0%A7%A8-%E0%A6%B6%E0%A6%A4%E0%A6%BE%E0%A6%82%E0%A6%B6-%E0%A6%AC%E0%A6%BF%E0%A6%B7%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%A4%E0%A6%BE%E0%A7%9F-%E0%A6%AD%E0%A7%81%E0%A6%97%E0%A6%9B%E0%A7%87%E0%A6%A8-%E0%A6%86%E0%A6%81%E0%A6%9A%E0%A6%B2-%E0%A6%AB%E0%A6%BE%E0%A6%89%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A7%87%E0%A6%B6%E0%A6%A8-237641',
        title:'করোনাকালে তরুণদের ৬১.২ শতাংশ বিষন্নতায় ভুগছেন: আঁচল ফাউন্ডেশন'
    },
    {
        name:'unb.com bd',
        link:'https://unb.com.bd/m/category/Bangladesh/over-61-percent-of-18-25s-suffering-from-depression-during-pandemic/75313',
        title:'Over 61 percent of 18-25s suffering from depression during pandemic '
    },
    {
        name:'BD News24.com',
        link:'https://m.bdnews24.com/bn/detail/bangladesh/1912747',
        title:'মহামারীতে মানসিক চাপ বেড়েছে ৬৩% তরুণের: জরিপ'
    },
    {
        name:'Dhaka Tribune.com',
        link:'https://www.dhakatribune.com/bangladesh/2021/07/10/study-1-in-2-youngsters-contemplate-suicide',
        title:'Study: 1 in 2 youngsters contemplate suicide'
    },
    {
        name:'The Independent bd.com',
        link:'https://m.theindependentbd.com//post/264944',
        title:'Over 61 percent of 18-25s suffering from depression during pandemic'
    },
    {
        name:'En Prothom Alo',
        link:'https://www.google.com/amp/s/en.prothomalo.com/amp/story/bangladesh/over-61pc-of-18-25s-suffering-from-depression-during-pandemic',
        title:'Over 61pc of 18-25s suffering from depression during pandemic'
    },
    {
        name:'The Financial Express.com',
        link:'https://www.google.com/amp/s/thefinancialexpress.com.bd/home/over-61pc-of-18-25s-suffering-from-depression-during-pandemic-1625930947%3famp=true',
        title:'Over 61pc of 18-25s suffering from depression during pandemic'
    },
    {
        name:'News Bangla24.com',
        link:'https://www.newsbangla24.com/youngster/147224/%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A6%A3%E0%A7%8D%E0%A6%AF%E0%A7%87%E0%A6%B0-%E0%A7%AC%E0%A7%A7-%E0%A6%B6%E0%A6%A4%E0%A6%BE%E0%A6%82%E0%A6%B6%E0%A6%87-%E0%A6%AD%E0%A7%81%E0%A6%97%E0%A6%9B%E0%A7%87-%E0%A6%AC%E0%A6%BF%E0%A6%B7%E0%A6%A3%E0%A7%8D%E0%A6%A8%E0%A6%A4%E0%A6%BE%E0%A7%9F',
        title:'তারুণ্যের ৬১ শতাংশই ভুগছে বিষণ্নতায়'
    },
    {
        name:'somakal.com',
        link:'https://www.samakal.com/bangladesh/article/210768931/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A7%A8%E0%A7%A7-%E0%A6%B6%E0%A6%A4%E0%A6%BE%E0%A6%82%E0%A6%B6-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A3%E0%A7%87%E0%A6%B0-%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A6%A8%E0%A6%BE%E0%A7%9F-%E0%A6%86%E0%A6%A4%E0%A7%8D%E0%A6%AE%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A6%BF%E0%A6%AC%E0%A7%87%E0%A6%A6%E0%A6%A8',
        title:'করোনাকালে ২১ শতাংশ তরুণের ভাবনায় আত্মহত্যা: প্রতিবেদন'
    },
    {
        name:'Desh Rupantor',
        link:'https://www.deshrupantor.com/home/printnews',
        title:'Not Found'
    },

    {
        name:'Dainik Purbokone',
        link:'https://dainikpurbokone.net/national/207953/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%AC%E0%A6%BF%E0%A6%B7%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%A4%E0%A6%BE%E0%A7%9F-%E0%A6%AD%E0%A7%81%E0%A6%97/',
        title:'করোনাকালে বিষন্নতায় ভুগছেন ৬১.২ শতাংশ তরুণ'
    },
    {
        name:'New Age BD',
        link:'https://www.newagebd.net/article/143399/61pc-of-18-25-age-group-suffer-from-depression-during-pandemic',
        title:'61pc of 18-25 age group suffer from depression during pandemic'
    },
    {
        name:'shuddhoshor',
        link:'https://shuddhoshor.com/2021/07/%E0%A6%B6%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%B0-%E0%A6%AD%E0%A7%9F-%E0%A6%A8%E0%A7%9F-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%9F%E0%A7%8B%E0%A6%9C%E0%A6%A8-%E0%A6%B8%E0%A6%B9%E0%A6%AF/',
        title:'শাস্তির ভয় নয়, প্রয়োজন সহযোগিতার হাত'
    },

    {
        name:'Daily Sun',
        link:'https://www.daily-sun.com/printversion/details/563952/Depression-rises-in-youths-amid-corona',
        title:'Depression rises in youths amid corona'
    },{
        name:'banginews.com',
        link:'https://www.banginews.com/web-news?id=e611b4e21459f8da654b88ad4e55506b16e44eaf',
        title:'করোনাকালে ২১ শতাংশ তরুণের ভাবনায় আত্মহত্যা: প্রতিবেদন'
    },
    {
        name:'Alokito Bangladesh.com',
        link:'https://www.alokitobangladesh.com/print-edition/last-page/68148/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%AD%E0%A7%9F%E0%A6%BE%E0%A6%AC%E0%A6%B9-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%B8%E0%A6%BF%E0%A6%95-%E0%A6%9A%E0%A6%BE%E0%A6%AA%E0%A7%87-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A3-%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A5%E0%A7%80%E0%A6%B0%E0%A6%BE?fbclid=IwAR3XQ86y_AfSsoFmUuHR5M4fCRWD6OhnDKyilkMMJGBndGT71rxGI6SKqPE',
        title:'করোনাকালে ভয়াবহ মানসিক চাপে তরুণ শিক্ষার্থীরা'
    },
    {
        name:'sylhettoday24news.Com',
        link:'https://www.sylhettoday24.news/news/details/National/121753',
        title:'করোনাকালে তরুণদের ৬১.২ শতাংশ বিষন্নতায় ভুগছেন'
    },
    {
        name:'barta24.com',
        link:'https://barta24.com/details/national/129453/covid-19-thunder-signal?fbclid=IwAR01ZRGfn_Fxl1TDiMzCLW1VHzI3qGq8QHNN_UEke1xnSPIjpBnqjVbxfSA',
        title:'অশনিসংকেত'
    },
    {
        name:'ajkaal.in',
        link:'https://aajkaal.in/news/international/half-of-young-people-have-thought-about-to-die-in-bangladesh-says-survey-rfhr?fbclid=IwAR1drcesmyHB5Rpnp5UNWd6VEyzaGgDv4Eo1TCxNYJjhsOA79d33cY-4r0M',
        title:'করোনার জের!‌ ৫০ শতাংশই যুবকই আত্মঘাতী হতে চেয়েছেন এই দেশে'
    },
    {
        name:'eisomoy.indiatimes.com',
        link:'https://eisamay.com/bangladesh-news/half-of-young-people-have-thought-about-to-die-in-bangladesh-says-survey-data/amp_articleshow/84334933.cms?fbclid=IwAR1drcesmyHB5Rpnp5UNWd6VEyzaGgDv4Eo1TCxNYJjhsOA79d33cY-4r0M',
        title:'৫০ শতাংশ যুবক আত্মহত্যার কথা ভেবেছে! বাংলাদেশের সমীক্ষায় চাঞ্চল্যকর তথ্য'
    },
    {
        name:'chattolarkhabor',
        link:'https://www.chattolarkhabor.com/60653/%e0%a6%ac%e0%a6%be%e0%a7%9c%e0%a6%9b%e0%a7%87-%e0%a6%86%e0%a6%a4%e0%a7%8d%e0%a6%ae%e0%a6%b9%e0%a6%a4%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b0-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%ac%e0%a6%a3%e0%a6%a4%e0%a6%be/?fbclid=IwAR3sPm1vm5_3CNmjZP-U3zIyVRGUgipp_G2K4WMHM2UP_r5EkeA89jp41R',
        title:'মানসিক অস্থিরতায় বাড়ছে আত্মহত্যার প্রবণতা'
    },
    {
        name:'banglaobserver',
        link:'/',
        title:'Not Found'
    },
    {
        name:'news bangla24.com',
        link:'https://www.newsbangla24.com/youngster/147224/%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A7%81%E0%A6%A3%E0%A7%8D%E0%A6%AF%E0%A7%87%E0%A6%B0-%E0%A7%AC%E0%A7%A7-%E0%A6%B6%E0%A6%A4%E0%A6%BE%E0%A6%82%E0%A6%B6%E0%A6%87-%E0%A6%AD%E0%A7%81%E0%A6%97%E0%A6%9B%E0%A7%87-%E0%A6%AC%E0%A6%BF%E0%A6%B7%E0%A6%A3%E0%A7%8D%E0%A6%A8%E0%A6%A4%E0%A6%BE%E0%A7%9F?fbclid=IwAR1drcesmyHB5Rpnp5UNWd6VEyzaGgDv4Eo1TCxNYJjhsOA79d33cY-4r0M',
        title:'তারুণ্যের ৬১ শতাংশই ভুগছে বিষণ্নতায়'
    },
    {
        name:'Sangbad probaha',
        link:'https://sangbadprabaha.com/%E0%A6%95%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87-%E0%A6%AD%E0%A7%9F%E0%A6%BE%E0%A6%AC%E0%A6%B9-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%B8%E0%A6%BF%E0%A6%95-%E0%A6%9A/?fbclid=IwAR2jrJbAtO6nx2OUmU1OUPaKEqiKN6qcYWlW_AYfvXAsel1GE0YpaBjmJu4',
        title:'করোনাকালে ভয়াবহ মানসিক চাপে শিক্ষার্থীরা'
    },
    {
        name:'dailypurbadesh',
        link:'https://dailypurbodesh.com/%E0%A6%AE%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%A4%E0%A7%87-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%B8%E0%A6%BF%E0%A6%95-%E0%A6%9A%E0%A6%BE%E0%A6%AA-%E0%A6%AC%E0%A7%87%E0%A7%9C/?fbclid=IwAR0FhzDPQDDV09zJd0qOn3bF1JSPy2iHtljR2UbK6PcJHlJyh4_hKxz0eYA',
        title:'মহামারীতে মানসিক চাপ বেড়েছে ৬৩% তরুণের : জরিপ'
    },
    {
        name:'bdtimesnews.com',
        link:'https://bdtimesnews.com/news/85439?fbclid=IwAR2juAuxJxPgyerd8uRnf3aoZuVojmjMvIpDeeXmu6GBICqyOYwMuvS474Q',
        title:'আঁচল ফাউন্ডেশন এর গবেষণা বলছে, করোনাকালে তরুণদের ৬১.২ শতাংশ বিষন্নতায় ভুগছেন'
    }
];

export default mediaData;