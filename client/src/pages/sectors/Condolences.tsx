import { SectorPageTemplate } from '@/components/SectorPageTemplate';
import { Heart, Users, Flower2, BookOpen, Home, Star } from 'lucide-react';

export default function CondolencesSector() {
  return (
    <SectorPageTemplate
      sectorId="condolences"
      nameEn="Condolences & Memorial"
      nameAr="العزاء والتأبين"
      taglineEn="Honoring Lives with Dignity and Respect"
      taglineAr="نكرم الأرواح بكرامة واحترام"
      descriptionEn="Compassionate event services for memorial gatherings and condolence ceremonies. We understand the sensitivity of these moments and provide dignified, culturally appropriate services that honor Yemeni traditions."
      descriptionAr="خدمات فعاليات رحيمة لتجمعات التأبين وحفلات العزاء. نفهم حساسية هذه اللحظات ونقدم خدمات كريمة ومناسبة ثقافياً تكرم التقاليد اليمنية."
      primaryColor="#495057"
      secondaryColor="#6C757D"
      gradient="from-[#495057] to-[#6C757D]"
      heroImage="/images/sectors/condolences-yemen.png"
      icon={Heart}
      stats={[
        { value: "200+", labelEn: "Ceremonies", labelAr: "حفل عزاء" },
        { value: "100%", labelEn: "Dignity", labelAr: "كرامة" },
        { value: "24/7", labelEn: "Availability", labelAr: "توفر" },
        { value: "50+", labelEn: "Families Served", labelAr: "عائلة خدمناها" },
      ]}
      services={[
        { titleEn: "Traditional Aza Setup", titleAr: "إعداد العزاء التقليدي", descEn: "Complete traditional Yemeni condolence arrangements", descAr: "ترتيبات عزاء يمنية تقليدية كاملة", icon: Home },
        { titleEn: "Memorial Services", titleAr: "خدمات التأبين", descEn: "Dignified memorial ceremonies and gatherings", descAr: "حفلات وتجمعات تأبين كريمة", icon: Star },
        { titleEn: "Floral Arrangements", titleAr: "تنسيقات الزهور", descEn: "Respectful floral tributes and decorations", descAr: "تكريمات وديكورات زهور محترمة", icon: Flower2 },
        { titleEn: "Guest Management", titleAr: "إدارة الضيوف", descEn: "Professional reception and guest coordination", descAr: "استقبال احترافي وتنسيق الضيوف", icon: Users },
        { titleEn: "Catering Services", titleAr: "خدمات الضيافة", descEn: "Traditional Yemeni hospitality and refreshments", descAr: "ضيافة ومرطبات يمنية تقليدية", icon: Heart },
        { titleEn: "Documentation", titleAr: "التوثيق", descEn: "Memory books and tribute documentation", descAr: "كتب الذكريات وتوثيق التكريم", icon: BookOpen },
      ]}
      courses={[
        { titleEn: "Condolence Event Management", titleAr: "إدارة فعاليات العزاء", duration: "1 week", priceUSD: 200, priceYER: 340000 },
        { titleEn: "Yemeni Funeral Traditions", titleAr: "تقاليد الجنازة اليمنية", duration: "3 days", priceUSD: 150, priceYER: 255000 },
        { titleEn: "Grief Support & Hospitality", titleAr: "دعم الحزن والضيافة", duration: "2 days", priceUSD: 100, priceYER: 170000 },
      ]}
      news={[
        { date: "December 14, 2025", titleEn: "New Memorial Garden Partnership", titleAr: "شراكة حديقة التأبين الجديدة", summaryEn: "Agreement with Aden Memorial Gardens", summaryAr: "اتفاقية مع حدائق عدن التذكارية" },
        { date: "December 10, 2025", titleEn: "Community Support Initiative", titleAr: "مبادرة دعم المجتمع", summaryEn: "Free services for families in need", summaryAr: "خدمات مجانية للعائلات المحتاجة" },
        { date: "December 5, 2025", titleEn: "Traditional Aza Training Complete", titleAr: "اكتمال تدريب العزاء التقليدي", summaryEn: "Staff certified in traditional practices", summaryAr: "اعتماد الموظفين في الممارسات التقليدية" },
      ]}
      partners={[
        { name: "Aden Memorial Gardens" },
        { name: "Islamic Affairs Ministry" },
        { name: "Community Support Network" },
        { name: "Yemeni Red Crescent" },
      ]}
    />
  );
}
