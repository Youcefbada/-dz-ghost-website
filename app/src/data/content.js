export const content = {
    fr: {
        navbar: {
            logo: "DZ-GHOST",
            cta: "Obtenir la licence",
            language: "AR",
        },
        hero: {
            headline: "Ne Traquez Pas Juste. Dominez.",
            subheadline: "Le Premier Pixel Server-Side & Moteur Logistique IA pour le COD Algérien.",
            cta: "Obtenir l'Accès",
            notifications: ["Achat Vérifié", "Bot Bloqué", "Lead Hybrid"],
        },
        usVsThem: {
            title: "Pourquoi bâtir sur un terrain que vous ne possédez pas ?",
            rented: {
                title: "Terre Louée (SaaS/Shopify)",
                subtitle: "Vous êtes locataire.",
                items: ["Loyer Mensuel Infini", "Risque de Données", "Anxiété de Bannissement"]
            },
            kingdom: {
                title: "Votre Royaume (DZ-Ghost)",
                subtitle: "Vous êtes le Roi.",
                items: ["Paiement Unique", "Contrôle Data 100%", "Liberté Open Source"]
            }
        },
        dashboardShowcase: {
            title: "Contrôle Total. Un Seul Écran.",
        },
        detailedFeatures: {
            security: {
                title: "Core Tracking & Sécurité (The Ghost Engine)",
                items: [
                    { title: "Tracking Server-Side (CAPI)", desc: "Contourne les bloqueurs (iOS 14+) en envoyant les événements Achat, Lead et AddToCart directement depuis votre serveur." },
                    { title: "Qualité de Match 9/10", desc: "Chiffrement automatique (SHA256) des données client (Email, Tel, Ville) pour une précision maximale du pixel." },
                    { title: "Bouclier Anti-Bot", desc: "Pare-feu actif filtrant le trafic par User-Agent et IP, empêchant les outils d'espionnage de polluer vos données." },
                    { title: "Tracking WhatsApp Hybride", desc: "Traque un événement 'Lead' dès le clic sur le bouton WhatsApp, avant même l'ouverture du chat." }
                ]
            },
            conversion: {
                title: "Checkout & Conversion",
                items: [
                    { title: "Checkout One-Page COD", desc: "Remplace le checkout WooCommerce lent par un formulaire ultra-rapide injecté directement dans les pages produits." },
                    { title: "Offres sur Quantité (AOV)", desc: "Sélecteur natif 'Achetez X Obtenez Y' (ex: Achetez 2 = -500DA) pour encourager les achats groupés." },
                    { title: "Bouton Mobile Sticky", desc: "Bouton 'Acheter' fixé en bas de l'écran sur mobile pour augmenter le taux de clic." }
                ]
            },
            analytics: {
                title: "Intelligence & Analytics (IA)",
                items: [
                    { title: "The War Room", desc: "Tableau de bord centralisé visualisant KPI temps réel, taux de livraison et entonnoirs de vente." },
                    { title: "Auditeur de Campagne IA", desc: "Algorithme intelligent analysant vos pubs (ROAS, CTR, Fréquence) avec recommandations SCALE ou KILL." },
                    { title: "Carte de Performance Wilaya", desc: "Carte interactive montrant quelles wilayas ont les meilleurs taux de livraison vs retours." },
                    { title: "Gestionnaire Finance", desc: "Calcule votre Profit Net temps réel en soustrayant coûts produits et dépenses pubs du revenu." }
                ]
            },
            logistics: {
                title: "Logistique & Opérations",
                items: [
                    { title: "Base de Données Algérienne", desc: "Listes déroulantes intégrées pour 58 Wilayas et Baladiyas, éliminant les erreurs d'adresse." },
                    { title: "Logique d'Expédition Dynamique", desc: "Calcul automatique des prix différents pour 'À Domicile' vs 'Stop-Desk'." },
                    { title: "Intégration Transporteurs", desc: "API directe avec Yalidine, ZR Express, Procolis, Ecotrack pour expédier en un clic." },
                    { title: "Sync Google Sheets", desc: "Pousse instantanément les nouvelles commandes vers Google Sheets pour votre Call Center." },
                    { title: "Gestion des Commandes", desc: "Interface simplifiée pour le traitement en masse et la synchronisation des statuts." }
                ]
            },
            tools: {
                title: "Outils & Usabilité",
                items: [
                    { title: "Créateur de Produit", desc: "Interface simplifiée pour créer des produits sans le désordre de WooCommerce standard." },
                    { title: "Personnalisation Design", desc: "Onglet dédié pour personnaliser couleurs et layout du formulaire à votre image." }
                ]
            }
        },
        techFlow: {
            title: "Comment Le Fantôme Opère",
            steps: [
                { title: "Commande Client", desc: "L'utilisateur passe commande." },
                { title: "Chiffrement SHA256", desc: "Sécurisation des données." },
                { title: "Moteur Ghost", desc: "Contournement iOS 14 & AdBlockers." },
                { title: "API Facebook", desc: "Transmission Server-to-Server 100%." },
            ],
        },
        pricing: {
            title: "L'Investissement",
            toggle: { yearly: "Annuel", lifetime: "À Vie" },
            plans: [
                {
                    name: "Le Soldat",
                    price: "14,900 DA",
                    period: "/ an",
                    features: ["1 Domaine", "Audit IA Complet", "Tracking Server-Side", "Support Standard"],
                    cta: "Commencer la Mission",
                    highlight: false
                },
                {
                    name: "L'Escouade",
                    price: "59,000 DA",
                    period: "/ an",
                    features: ["10 Domaines", "Support Prioritaire", "Marque Blanche", "Gestion Clients"],
                    cta: "Équiper l'Escouade",
                    highlight: true,
                    tag: "Meilleure Valeur"
                },
                {
                    name: "La Légende",
                    price: "45,000 DA",
                    period: "/ une fois",
                    features: ["1 Domaine", "Mises à Jour à Vie", "Pas de Frais Récurrents"],
                    cta: "Sécuriser l'Héritage",
                    highlight: false,
                    special: true
                }
            ]
        },
        socialProof: {
            title: "De la Perte au ROAS x4",
            stat1: "90% Qualité de Match",
            stat2: "-30% Commandes Fake",
        },
        whyUs: {
            title: "Pourquoi DZ-Ghost et Pas Les Autres ?",
            subtitle: "La Différence Est Claire.",
            items: [
                { title: "Construit Pour l'Algérie", desc: "Pas un outil américain adapté. Conçu dès le départ pour le COD, les Wilayas et les transporteurs algériens.", icon: "flag" },
                { title: "Vous Êtes Propriétaire", desc: "Installez sur votre serveur. Vos données, votre entreprise, votre liberté. Pas de dépendance SaaS.", icon: "key" },
                { title: "Intelligence Intégrée", desc: "L'IA analyse vos campagnes et données automatiquement. Pas besoin d'être expert en marketing.", icon: "brain" },
                { title: "Support Local", desc: "Équipe francophone/arabophone qui comprend le marché local et vos défis quotidiens.", icon: "headphones" },
                { title: "Mises à Jour Constantes", desc: "Nous évoluons avec les changements de Facebook, iOS et les transporteurs. Vous restez toujours à jour.", icon: "refresh" },
                { title: "Communauté Active", desc: "Rejoignez des centaines de vendeurs COD algériens qui partagent stratégies et bonnes pratiques.", icon: "users" }
            ]
        },
        stats: {
            title: "Les Chiffres Parlent",
            items: [
                { value: "500+", label: "Boutiques Actives" },
                { value: "2M+", label: "Commandes Traitées" },
                { value: "9/10", label: "Match Quality Score" },
                { value: "4x", label: "ROAS Moyen Après Installation" }
            ]
        },
        testimonials: {
            title: "Ce Que Disent Nos Clients",
            items: [
                { name: "Ahmed K.", role: "Vendeur COD - Alger", quote: "Avant DZ-Ghost, je perdais 40% de mon budget pub. Maintenant mon ROAS est passé de 1.2 à 4.5. C'est un autre monde." },
                { name: "Sarah M.", role: "Agence E-commerce", quote: "On gère 15 boutiques avec la licence Escouade. Le temps gagné sur la logistique est incroyable." },
                { name: "Youcef B.", role: "Dropshipper - Oran", quote: "L'intégration Yalidine seule vaut le prix. Un clic et c'est expédié. Plus d'erreurs manuelles." }
            ]
        },
        faq: {
            title: "Questions Fréquentes",
            items: [
                { q: "Est-ce que ça marche avec mon thème WordPress ?", a: "Oui, DZ-Ghost est compatible avec tous les thèmes WordPress/WooCommerce. Le checkout s'injecte automatiquement." },
                { q: "J'ai besoin de compétences techniques ?", a: "Non. L'installation prend 5 minutes. Téléversez le plugin, activez, configurez votre pixel. C'est tout." },
                { q: "Comment fonctionne le support ?", a: "Support par WhatsApp et email en français/arabe. Réponse sous 24h pour les licences standard, prioritaire pour les Escouades." },
                { q: "Puis-je migrer depuis Shopify ?", a: "Absolument. On vous aide à transférer vos produits et données. C'est inclus dans l'installation." },
                { q: "Et si Facebook change encore son API ?", a: "On met à jour le plugin à chaque changement. Vous recevez les updates automatiquement." }
            ]
        },
        ctaBanner: {
            title: "Prêt à Dominer Votre Marché ?",
            subtitle: "Rejoignez 500+ vendeurs COD qui ont fait le switch.",
            cta: "Commencer Maintenant",
            secondary: "Voir la Démo"
        },
        footer: {
            copyright: "© 2026 DZ-Ghost. La Machine de Guerre E-commerce.",
            links: ["Documentation", "Support", "Tarifs"],
        },
    },
    ar: {
        navbar: {
            logo: "DZ-GHOST",
            cta: "احصل على الترخيص",
            language: "FR",
        },
        hero: {
            headline: "لّا تكتفِ بالتتبع. سيطر.",
            subheadline: "أول بكسل من جانب الخادم ومحرك لوجستي بالذكاء الاصطناعي للتجارة الإلكترونية في الجزائر.",
            cta: "ابدأ الآن",
            notifications: ["شراء مؤكد", "حظر بوت", "عميل محتمل"],
        },
        usVsThem: {
            title: "لماذا تبني على أرض لا تملكها؟",
            rented: {
                title: "أرض مستأجرة (SaaS/Shopify)",
                subtitle: "أنت مجرد مستأجر.",
                items: ["إيجار شهري لا ينتهي", "مخاطر البيانات", "قلق الحظر"]
            },
            kingdom: {
                title: "مملكتك (DZ-Ghost)",
                subtitle: "أنت الملك.",
                items: ["دفعة واحدة", "تحكم 100% في البيانات", "حرية المصدر المفتوح"]
            }
        },
        dashboardShowcase: {
            title: "تحكم كامل. شاشة واحدة.",
        },
        detailedFeatures: {
            security: {
                title: "التتبع والحماية (محرك الشبح)",
                items: [
                    { title: "تتبع جانب الخادم (CAPI)", desc: "يتجاوز حظر المتصفحات (iOS 14+) بإرسال أحداث الشراء مباشرة من الخادم." },
                    { title: "جودة مطابقة 9/10", desc: "تشفير تلقائي (SHA256) لبيانات العميل (البريد، الهاتف، المدينة) لضمان دقة البكسل." },
                    { title: "درع مكافحة البوتات", desc: "جدار حماية نشط يصفي الزيارات حسب User-Agent و IP لمنع أدوات التجسس." },
                    { title: "تتبع واتساب الهجين", desc: "يتتبع حدث 'Lead' بمجرد النقر على زر واتساب، حتى قبل فتح المحادثة." }
                ]
            },
            conversion: {
                title: "الدفع والتحويل",
                items: [
                    { title: "دفع صفحة واحدة (COD)", desc: "يستبدل نموذج ووكومرس البطيء بآخر سريع جداً مدمج في صفحات المنتج." },
                    { title: "عروض الكمية (AOV)", desc: "محدد 'اشتري X واحصل على Y' (مثل: اشتري 2 واحصل على خصم 500 دج)." },
                    { title: "زر جوال مثبت", desc: "زر 'شراء الآن' مثبت أسفل الشاشة على الجوال لزيادة معدل النقر." }
                ]
            },
            analytics: {
                title: "الذكاء والتحليلات (AI)",
                items: [
                    { title: "غرفة العمليات", desc: "لوحة تحكم مركزية تعرض مؤشرات الأداء، معدلات التوصيل ومسارات المبيعات." },
                    { title: "مدقق الحملات الذكي", desc: "خوارزمية تحلل حملاتك (ROAS, CTR) وتعطي توصيات بالزيادة أو الإيقاف." },
                    { title: "خريطة أداء الولايات", desc: "خريطة تفاعلية تظهر الولايات ذات أعلى معدلات التوصيل مقابل المرتجعات." },
                    { title: "مدير المالية", desc: "يحسب صافي الربح الفوري بطرح تكاليف المنتج والإعلانات من الإيرادات." }
                ]
            },
            logistics: {
                title: "اللوجستيات والعمليات",
                items: [
                    { title: "قاعدة بيانات جزائرية", desc: "قوائم جاهزة لـ 58 ولاية والبلديات، مما يقضي على أخطاء العناوين." },
                    { title: "منطق شحن ديناميكي", desc: "حساب تلقائي لأسعار التوصيل المختلفة (للمنزل vs للمكتب)." },
                    { title: "ربط شركات الشحن", desc: "ربط API مباشر مع Yalidine, ZR Express, Procolis, Ecotrack للشحن بنقرة." },
                    { title: "مزامنة Google Sheets", desc: "نقل فوري للطلبات الجديدة إلى Google Sheets لفريق الاتصال." },
                    { title: "إدارة الطلبات", desc: "واجهة مبسطة لمعالجة الطلبات ومزامنة الحالات بشكل جماعي." }
                ]
            },
            tools: {
                title: "الأدوات وسهولة الاستخدام",
                items: [
                    { title: "منشئ المنتجات", desc: "واجهة مبسطة لإنشاء المنتجات بسرعة دون تعقيدات ووكومرس." },
                    { title: "تخصيص التصميم", desc: "تبويب مخصص لتعديل ألوان وتخطيط نموذج الدفع ليتناسب مع علامتك." }
                ]
            }
        },
        techFlow: {
            title: "كيف يعمل الشبح",
            steps: [
                { title: "طلب الزبون", desc: "يقوم المستخدم بالطلب." },
                { title: "تشفير SHA256", desc: "تأمين البيانات." },
                { title: "محرك الشبح", desc: "تجاوز iOS 14 و AdBlockers." },
                { title: "API فيسبوك", desc: "نقل مباشر 100%." },
            ],
        },
        pricing: {
            title: "الاستثمار",
            toggle: { yearly: "سنوي", lifetime: "مدى الحياة" },
            plans: [
                {
                    name: "الجندي",
                    price: "14,900 دج",
                    period: "/ سنة",
                    features: ["1 نطاق", "تدقيق ذكي كامل", "تتبع من جانب الخادم", "دعم قياسي"],
                    cta: "ابدأ المهمة",
                    highlight: false
                },
                {
                    name: "الفرقة",
                    price: "59,000 دج",
                    period: "/ سنة",
                    features: ["10 نطاقات", "دعم ذو أولوية", "علامة بيضاء", "إدارة عملاء"],
                    cta: "جهز الفرقة",
                    highlight: true,
                    tag: "أفضل قيمة"
                },
                {
                    name: "الأسطورة",
                    price: "45,000 دج",
                    period: "/ مرة واحدة",
                    features: ["1 نطاق", "تحديثات مدى الحياة", "لا رسوم متجددة"],
                    cta: "أمن الإرث",
                    highlight: false,
                    special: true
                }
            ]
        },
        socialProof: {
            title: "من الخسارة إلى 4 أضعاف العائد",
            stat1: "90% جودة المطابقة",
            stat2: "-30% طلبات وهمية",
        },
        whyUs: {
            title: "لماذا DZ-Ghost وليس غيره؟",
            subtitle: "الفرق واضح.",
            items: [
                { title: "مصمم للجزائر", desc: "ليس أداة أمريكية معدلة. صُمم من البداية للدفع عند الاستلام والولايات وشركات الشحن الجزائرية.", icon: "flag" },
                { title: "أنت المالك", desc: "ثبّت على سيرفرك الخاص. بياناتك، عملك، حريتك. لا اعتماد على SaaS.", icon: "key" },
                { title: "ذكاء مدمج", desc: "الذكاء الاصطناعي يحلل حملاتك تلقائياً. لا حاجة لتكون خبير تسويق.", icon: "brain" },
                { title: "دعم محلي", desc: "فريق يتحدث العربية والفرنسية ويفهم السوق المحلي وتحدياتك.", icon: "headphones" },
                { title: "تحديثات مستمرة", desc: "نتطور مع تغييرات فيسبوك وiOS وشركات الشحن. ستبقى دائماً محدثاً.", icon: "refresh" },
                { title: "مجتمع نشط", desc: "انضم لمئات بائعي COD الجزائريين الذين يشاركون الاستراتيجيات.", icon: "users" }
            ]
        },
        stats: {
            title: "الأرقام تتحدث",
            items: [
                { value: "+500", label: "متجر نشط" },
                { value: "+2M", label: "طلب تمت معالجته" },
                { value: "9/10", label: "جودة المطابقة" },
                { value: "4x", label: "متوسط ROAS بعد التثبيت" }
            ]
        },
        testimonials: {
            title: "ماذا يقول عملاؤنا",
            items: [
                { name: "أحمد ك.", role: "بائع COD - الجزائر", quote: "قبل DZ-Ghost كنت أخسر 40% من ميزانية الإعلان. الآن ROAS ارتفع من 1.2 إلى 4.5. عالم آخر." },
                { name: "سارة م.", role: "وكالة تجارة إلكترونية", quote: "ندير 15 متجر برخصة الفرقة. الوقت الموفر في اللوجستيات لا يُصدق." },
                { name: "يوسف ب.", role: "Dropshipper - وهران", quote: "ربط Yalidine وحده يستحق السعر. نقرة واحدة ويتم الشحن. لا أخطاء يدوية." }
            ]
        },
        faq: {
            title: "الأسئلة الشائعة",
            items: [
                { q: "هل يعمل مع قالب WordPress الخاص بي؟", a: "نعم، DZ-Ghost متوافق مع جميع قوالب WordPress/WooCommerce. يتم حقن نموذج الدفع تلقائياً." },
                { q: "هل أحتاج مهارات تقنية؟", a: "لا. التثبيت يستغرق 5 دقائق. ارفع الإضافة، فعّلها، اضبط البكسل. انتهى." },
                { q: "كيف يعمل الدعم؟", a: "دعم عبر واتساب والبريد بالعربية/الفرنسية. رد خلال 24 ساعة للرخص العادية، أولوية للفرق." },
                { q: "هل يمكنني الانتقال من Shopify؟", a: "بالتأكيد. نساعدك في نقل منتجاتك وبياناتك. هذا مشمول في التثبيت." },
                { q: "ماذا لو غيّر فيسبوك API مجدداً؟", a: "نحدّث الإضافة مع كل تغيير. تحصل على التحديثات تلقائياً." }
            ]
        },
        ctaBanner: {
            title: "مستعد للسيطرة على سوقك؟",
            subtitle: "انضم لـ 500+ بائع COD انتقلوا إلى DZ-Ghost.",
            cta: "ابدأ الآن",
            secondary: "شاهد العرض التوضيحي"
        },
        footer: {
            copyright: "© 2026 DZ-Ghost. آلة الحرب للتجارة الإلكترونية.",
            links: ["التوثيق", "الدعم", "الأسعار"],
        },
    },
};
