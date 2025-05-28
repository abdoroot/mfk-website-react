const subcategories = [
    // التكييف - Air Conditioning
    {
        category_id: 4,
        title: 'تنظيف المكيفات',
        title_en: 'AC Cleaning',
        description: 'ننظف الفلاتر والوحدة الداخلية للمكيف بطريقة مرتبة وجودة عالية.',
        description_en: 'We clean AC filters and the indoor unit with care and high quality.',
    },
    {
        category_id: 4,
        title: 'تعبئة غاز المكيفات',
        title_en: 'AC Gas Refill',
        description: 'حزمة كاملة تشمل صيانة المكيف، تنظيف الفلاتر وتعبئة الغاز.',
        description_en: 'Full package including AC maintenance, filter cleaning, and gas refill.',
    },

    // السباكة - Plumbing
    {
        category_id: 2,
        title: 'تركيب مغاسل',
        title_en: 'Sink Installation',
        description: 'نركب لك المغاسل بدقة ونضمن عدم وجود تسريبات.',
        description_en: 'We install sinks accurately and ensure no leaks.',
    },
    {
        category_id: 2,
        title: 'تركيب كرسي افرنجي',
        title_en: 'Toilet Installation',
        description: 'فك وتركيب الكرسي مع التأكد من سلامة التوصيلات والصرف.',
        description_en: 'We install toilets and ensure safe connections and drainage.',
    },
    {
        category_id: 2,
        title: 'تركيب كابينة شاور',
        title_en: 'Shower Cabin Installation',
        description: 'نركب لك كابينة الشاور بشكل احترافي يضمن لك الراحة والجودة.',
        description_en: 'Professional shower cabin installation for comfort and quality.',
    },
    {
        category_id: 2,
        title: 'تركيب حمام كامل',
        title_en: 'Complete Bathroom Installation',
        description: 'نركب شاور، مغسلة، كرسي وكل تجهيزات الحمام بدقة.',
        description_en: 'We install showers, sinks, toilets, and all bathroom fittings with precision.',
    },
    {
        category_id: 2,
        title: 'تركيب المحابس والليات والشطافات',
        title_en: 'Valve and Hose Installation',
        description: 'نركب محابس جديدة أو نستبدل القديمة مع الشطافات والليات.',
        description_en: 'We install or replace valves, hoses, and bidet sprayers.',
    },
    {
        category_id: 2,
        title: 'تركيب عوامات الخزانات',
        title_en: 'Tank Float Valve Installation',
        description: 'تركيب عوامات الخزانات وضبط مستوى المياه.',
        description_en: 'We install float valves and adjust water levels.',
    },
    {
        category_id: 2,
        title: 'تنظيف الخزانات',
        title_en: 'Tank Cleaning',
        description: 'نظافة وتعقيم للخزانات بأدوات آمنة وجودة عالية.',
        description_en: 'Safe and high-quality tank cleaning and sanitization.',
    },
    {
        category_id: 2,
        title: 'تركيب غسالات الملابس والصحون',
        title_en: 'Washing Machine & Dishwasher Installation',
        description: 'نركب لك غسالة الملابس أو الصحون مع التأكد من التوصيلات.',
        description_en: 'We install washing machines and dishwashers with proper connections.',
    },
    {
        category_id: 2,
        title: 'فتح انسداد المجاري',
        title_en: 'Drain Unclogging',
        description: 'نفتح الانسدادات سواء في المطبخ أو الحمام أو المجاري العامة.',
        description_en: 'We unclog kitchen, bathroom, or main sewer lines.',
    },
    {
        category_id: 2,
        title: 'تركيب مضخات المياه',
        title_en: 'Water Pump Installation',
        description: 'نركب مضخات المياه مع ضبط التشغيل والتوصيلات.',
        description_en: 'We install water pumps and configure their operation.',
    },

    // الكهرباء - Electrical
    {
        category_id: 3,
        title: 'تركيب الإنارة الداخلية',
        title_en: 'Indoor Lighting Installation',
        description: 'نغير أو نركب لمبات وإنارات داخلية حسب طلبك.',
        description_en: 'We install or replace indoor lighting fixtures as requested.',
    },
    {
        category_id: 3,
        title: 'تركيب الإنارة الخارجية',
        title_en: 'Outdoor Lighting Installation',
        description: 'نركب لمبات إنارة خارجية للحدايق أو المداخل.',
        description_en: 'We install outdoor lights for gardens or entrances.',
    },
    {
        category_id: 3,
        title: 'تركيب ثريا',
        title_en: 'Chandelier Installation',
        description: 'تركيب الثريات مع التأكد من سلامة التثبيت والكهرباء.',
        description_en: 'We install chandeliers safely and securely.',
    },
    {
        category_id: 3,
        title: 'مراوح الشفط والتهوية',
        title_en: 'Exhaust Fan Installation',
        description: 'تركيب مراوح شفط في المطابخ أو الحمامات.',
        description_en: 'Installation of exhaust fans in kitchens or bathrooms.',
    },
    {
        category_id: 3,
        title: 'تركيب مفاتيح وأفياش',
        title_en: 'Switch & Socket Installation',
        description: 'تغيير أو تركيب جديد لمفاتيح الكهرباء والأفياش.',
        description_en: 'Install or replace electric switches and sockets.',
    },
    {
        category_id: 3,
        title: 'ألواح توزيع الكهرباء',
        title_en: 'Electrical Distribution Boards',
        description: 'نغير لك البريكرات أو نركب ألواح توزيع جديدة.',
        description_en: 'We replace breakers or install new distribution panels.',
    },

    // سخانات المياه - Water Heaters
    {
        category_id: 4,
        title: 'تركيب أو تغيير سخان كهربائي',
        title_en: 'Electric Water Heater Installation/Replacement',
        description: 'نركب لك سخان جديد أو نغير القديم بشكل آمن وسليم.',
        description_en: 'Safe installation or replacement of electric water heaters.',
    },
    {
        category_id: 4,
        title: 'تركيب سخان مركزي',
        title_en: 'Central Heater Installation',
        description: 'نركب لك سخان مركزي ونوصل التمديدات حسب الحاجة.',
        description_en: 'We install central heaters and connect all required piping.',
    },
    {
        category_id: 4,
        title: 'تنظيف السخانات',
        title_en: 'Water Heater Cleaning',
        description: 'ننظف السخان من الداخل ونتأكد من الهيتر والحرارة.',
        description_en: 'We clean heaters internally and ensure proper function.',
    },

    // أعمال أخرى - Other Services
    {
        category_id: 4,
        title: 'كشف تسرب داخل الجدار',
        title_en: 'Wall Leak Detection',
        description: 'نستخدم أجهزة خاصة للكشف عن التسريبات داخل الجدران.',
        description_en: 'We use special tools to detect leaks inside walls.',
    },
    {
        category_id: 4,
        title: 'إصلاح تسربات داخل الجدار',
        title_en: 'Wall Leak Repair',
        description: 'نحدد المشكلة ونقوم بالإصلاح حتى لو كان يحتاج تكسير.',
        description_en: 'We identify and repair leaks, even if wall breakage is required.',
    },
    {
        category_id: 4,
        title: 'شبكات الحماية من الحشرات',
        title_en: 'Insect Protection Mesh Installation',
        description: 'نركب شبك حماية للنوافذ أو الأبواب يمنع دخول الحشرات.',
        description_en: 'Install protective mesh for windows or doors to block insects.',
    },
    {
        category_id: 4,
        title: 'تعديل الأبواب والنوافذ',
        title_en: 'Door & Window Adjustment',
        description: 'نعدّل المفصلات أو الأقفال أو توازن الأبواب والنوافذ.',
        description_en: 'We adjust hinges, locks, and alignment for doors and windows.',
    },
    {
        category_id: 4,
        title: 'تغيير الأقفال',
        title_en: 'Lock Replacement',
        description: 'نغير لك الأقفال بأخرى جديدة بشكل آمن.',
        description_en: 'We safely replace old locks with new ones.',
    },
    {
        category_id: 4,
        title: 'مكافحة الحشرات',
        title_en: 'Pest Control',
        description: 'نرش المواد اللازمة بطريقة آمنة ونستخدم منتجات مرخصة.',
        description_en: 'We safely spray licensed pest control products.',
    },

    // الدهانات والجبس - Painting & Gypsum
    {
        category_id: 1,
        title: 'خدمات الدهان',
        title_en: 'Painting Services',
        description: 'دهان داخلي وخارجي، الأسقف، الأبواب، النوافذ، وزخارف.',
        description_en: 'Interior & exterior painting, ceilings, doors, windows, and decorations.',
    },
    {
        category_id: 1,
        title: 'تركيب سقف مستعار',
        title_en: 'False Ceiling Installation',
        description: 'نركب لك أسقف مستعارة عادية أو ديكورية حسب الطلب.',
        description_en: 'We install regular or decorative false ceilings.',
    },
    {
        category_id: 1,
        title: 'أعمال الجبس',
        title_en: 'Gypsum Works',
        description: 'جبس بورد، كرانيش، وجبس معلق حسب التصميم المطلوب.',
        description_en: 'Gypsum board, cornices, and suspended gypsum as per your design.',
    },
    {
        category_id: 1,
        title: 'ورق الحائط',
        title_en: 'Wallpaper Installation',
        description: 'نركب لك ورق الحائط بشكل احترافي ونظيف.',
        description_en: 'We install wallpaper professionally and neatly.',
    },

    // الأرضيات - Flooring
    {
        category_id: 4,
        title: 'تركيب الأرضيات',
        title_en: 'Flooring Installation',
        description: 'نركب بدائل الأرضيات بجودة عالية وتصاميم حديثة.',
        description_en: 'We install modern flooring alternatives with high quality.',
    },
    {
        category_id: 7,
        title: 'تركيب عشب صناعي',
        title_en: 'Artificial Grass Installation',
        description: 'نفرش لك العشب الصناعي سواء في الحديقة أو البلكونة.',
        description_en: 'We install artificial grass for gardens or balconies.',
    },
    {
        category_id: 6,
        title: 'تركيب سيراميك',
        title_en: 'Ceramic Tile Installation',
        description: 'نركب السيراميك بعد التكسير أو بدون حسب المكان.',
        description_en: 'We install ceramic tiles, with or without surface removal.',
    },

    // إضافات - Add-ons
    {
        category_id: 4,
        title: 'تثبيت التلفاز',
        title_en: 'TV Mounting',
        description: 'نركب لك شاشة التلفزيون على الجدار بأمان.',
        description_en: 'We safely mount your TV on the wall.',
    },
    {
        category_id: 4,
        title: 'عزل الأبواب والنوافذ',
        title_en: 'Door & Window Insulation',
        description: 'نستخدم مواد خاصة لعزل الصوت أو الهواء أو الحشرات.',
        description_en: 'We use special materials to insulate against noise, air, or insects.',
    },
    {
        category_id: 4,
        title: 'تركيب مرايا',
        title_en: 'Mirror Installation',
        description: 'نركب المرايا بمقاسات مختلفة على حسب الموقع.',
        description_en: 'We install mirrors in various sizes as needed.',
    },
    {
        category_id: 4,
        title: 'تركيب ستائر',
        title_en: 'Curtain Installation',
        description: 'نركب الستائر بأنواعها، مع التمديدات لو لزم.',
        description_en: 'We install all types of curtains, including any necessary wiring.',
    },
    {
        category_id: 4,
        title: 'خدمات الطوارئ',
        title_en: 'Emergency Services',
        description: 'خدمة سريعة لأي عطل مفاجئ في المنزل.',
        description_en: 'Quick service for any sudden issue at home.',
    },
    {
        category_id: 4,
        title: 'الخدمات المتخصصة',
        title_en: 'Special Occasion Services',
        description: 'نجهز لك البيت للمناسبات والأعياد بطريقة مرتبة.',
        description_en: 'We prepare your home for special occasions and holidays in an organized way.',
    },
];

export default subcategories;
