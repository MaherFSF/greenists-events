import { SectorPageTemplate } from '@/components/SectorPageTemplate';
import { Music, Laugh, Star, Camera, Mic, PartyPopper } from 'lucide-react';

export default function EntertainmentSector() {
  return (
    <SectorPageTemplate
      sectorId="entertainment"
      nameEn="Entertainment"
      nameAr="الترفيه"
      taglineEn="Creating Unforgettable Entertainment Experiences"
      taglineAr="نصنع تجارب ترفيهية لا تُنسى"
      descriptionEn="Dynamic event management for concerts, festivals, and entertainment productions. We bring creativity and professionalism to every show, creating magical moments that audiences will remember forever."
      descriptionAr="إدارة فعاليات ديناميكية للحفلات والمهرجانات والإنتاجات الترفيهية. نجلب الإبداع والاحترافية لكل عرض، ونصنع لحظات سحرية سيتذكرها الجمهور للأبد."
      primaryColor="#FF006E"
      secondaryColor="#FB5607"
      gradient="from-[#FF006E] to-[#FB5607]"
      heroImage="/images/sectors/entertainment-yemen.png"
      icon={Laugh}
      stats={[
        { value: "75+", labelEn: "Shows Produced", labelAr: "عرض منتج" },
        { value: "100K+", labelEn: "Audience Reached", labelAr: "جمهور" },
        { value: "50+", labelEn: "Artists Managed", labelAr: "فنان" },
        { value: "98%", labelEn: "Satisfaction", labelAr: "رضا العملاء" },
      ]}
      services={[
        { titleEn: "Concert Production", titleAr: "إنتاج الحفلات", descEn: "Full-scale concert production and management", descAr: "إنتاج وإدارة الحفلات الموسيقية بالكامل", icon: Music },
        { titleEn: "Festival Organization", titleAr: "تنظيم المهرجانات", descEn: "Multi-day festival planning and execution", descAr: "تخطيط وتنفيذ المهرجانات متعددة الأيام", icon: PartyPopper },
        { titleEn: "Comedy Shows", titleAr: "عروض الكوميديا", descEn: "Stand-up comedy and entertainment nights", descAr: "ليالي الكوميديا والترفيه", icon: Laugh },
        { titleEn: "Award Shows", titleAr: "حفلات الجوائز", descEn: "Glamorous award ceremonies and galas", descAr: "حفلات جوائز وحفلات فاخرة", icon: Star },
        { titleEn: "Media Productions", titleAr: "الإنتاج الإعلامي", descEn: "TV shows, live broadcasts, and recordings", descAr: "برامج تلفزيونية وبث مباشر وتسجيلات", icon: Camera },
        { titleEn: "Artist Management", titleAr: "إدارة الفنانين", descEn: "Booking and managing performers", descAr: "حجز وإدارة المؤدين", icon: Mic },
      ]}
      courses={[
        { titleEn: "Entertainment Event Production", titleAr: "إنتاج الفعاليات الترفيهية", duration: "4 weeks", priceUSD: 600, priceYER: 1020000 },
        { titleEn: "Stage Management", titleAr: "إدارة المسرح", duration: "2 weeks", priceUSD: 400, priceYER: 680000 },
        { titleEn: "Sound & Lighting Design", titleAr: "تصميم الصوت والإضاءة", duration: "3 weeks", priceUSD: 500, priceYER: 850000 },
      ]}
      news={[
        { date: "December 15, 2025", titleEn: "Aden Music Festival Announced for 2026", titleAr: "الإعلان عن مهرجان عدن الموسيقي 2026", summaryEn: "Greenists to produce Yemen's largest music festival", summaryAr: "جرينستس ستنتج أكبر مهرجان موسيقي في اليمن" },
        { date: "December 11, 2025", titleEn: "New Year's Eve Spectacular Planned", titleAr: "التخطيط لحفل رأس السنة المذهل", summaryEn: "Major celebration event in Aden waterfront", summaryAr: "فعالية احتفال كبرى على واجهة عدن البحرية" },
        { date: "December 7, 2025", titleEn: "Partnership with Regional Artists", titleAr: "شراكة مع فنانين إقليميين", summaryEn: "New collaborations with Gulf and Arab artists", summaryAr: "تعاونات جديدة مع فنانين خليجيين وعرب" },
      ]}
      partners={[
        { name: "Yemen TV" },
        { name: "Aden FM" },
        { name: "Gulf Artists Agency" },
        { name: "Ministry of Culture" },
        { name: "Aden Tourism Board" },
      ]}
    />
  );
}
