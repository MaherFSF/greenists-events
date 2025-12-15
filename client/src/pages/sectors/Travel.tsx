import { SectorPageTemplate } from '@/components/SectorPageTemplate';
import { Plane, MapPin, Camera, Compass, Hotel, Ship } from 'lucide-react';

export default function TravelSector() {
  return (
    <SectorPageTemplate
      sectorId="travel"
      nameEn="Travel & Tourism"
      nameAr="السفر والسياحة"
      taglineEn="Showcasing Yemen's Hidden Treasures"
      taglineAr="نكشف كنوز اليمن المخفية"
      descriptionEn="Event solutions for tourism boards, travel agencies, and hospitality businesses. We help promote Yemen's incredible heritage and natural beauty through compelling events and experiences."
      descriptionAr="حلول فعاليات لهيئات السياحة ووكالات السفر وشركات الضيافة. نساعد في الترويج لتراث اليمن المذهل وجماله الطبيعي من خلال فعاليات وتجارب مقنعة."
      primaryColor="#006D77"
      secondaryColor="#83C5BE"
      gradient="from-[#006D77] to-[#83C5BE]"
      heroImage="/images/sectors/travel-yemen.png"
      icon={Plane}
      stats={[
        { value: "35+", labelEn: "Tourism Events", labelAr: "فعالية سياحية" },
        { value: "20+", labelEn: "Travel Partners", labelAr: "شريك سفر" },
        { value: "50K+", labelEn: "Visitors Engaged", labelAr: "زائر" },
        { value: "15+", labelEn: "Destinations", labelAr: "وجهة" },
      ]}
      services={[
        { titleEn: "Tourism Exhibitions", titleAr: "معارض السياحة", descEn: "Trade shows promoting Yemen as a destination", descAr: "معارض تجارية تروج لليمن كوجهة", icon: MapPin },
        { titleEn: "Heritage Tours", titleAr: "جولات التراث", descEn: "Curated experiences showcasing Yemeni culture", descAr: "تجارب منسقة تعرض الثقافة اليمنية", icon: Compass },
        { titleEn: "Hotel Openings", titleAr: "افتتاح الفنادق", descEn: "Grand opening events for hospitality venues", descAr: "فعاليات افتتاح كبرى لمنشآت الضيافة", icon: Hotel },
        { titleEn: "Travel Photography Events", titleAr: "فعاليات التصوير السياحي", descEn: "Photography tours and exhibitions", descAr: "جولات ومعارض التصوير", icon: Camera },
        { titleEn: "Cruise Events", titleAr: "فعاليات الرحلات البحرية", descEn: "Events for cruise ships and maritime tourism", descAr: "فعاليات للسفن السياحية والسياحة البحرية", icon: Ship },
        { titleEn: "Destination Marketing", titleAr: "تسويق الوجهات", descEn: "Events promoting specific Yemeni destinations", descAr: "فعاليات تروج لوجهات يمنية محددة", icon: Plane },
      ]}
      courses={[
        { titleEn: "Tourism Event Management", titleAr: "إدارة الفعاليات السياحية", duration: "2 weeks", priceUSD: 350, priceYER: 595000 },
        { titleEn: "Heritage Tourism Events", titleAr: "فعاليات السياحة التراثية", duration: "1 week", priceUSD: 250, priceYER: 425000 },
        { titleEn: "Hospitality Excellence", titleAr: "التميز في الضيافة", duration: "3 days", priceUSD: 180, priceYER: 306000 },
      ]}
      news={[
        { date: "December 15, 2025", titleEn: "Socotra Tourism Festival Announced", titleAr: "الإعلان عن مهرجان سقطرى السياحي", summaryEn: "First international tourism event on the island", summaryAr: "أول فعالية سياحية دولية في الجزيرة" },
        { date: "December 11, 2025", titleEn: "Yemen Heritage Week Success", titleAr: "نجاح أسبوع التراث اليمني", summaryEn: "Over 10,000 visitors explored Yemeni culture", summaryAr: "أكثر من 10,000 زائر استكشفوا الثقافة اليمنية" },
        { date: "December 7, 2025", titleEn: "New Tourism Partnership", titleAr: "شراكة سياحية جديدة", summaryEn: "Agreement with Gulf tourism boards", summaryAr: "اتفاقية مع هيئات السياحة الخليجية" },
      ]}
      partners={[
        { name: "Yemen Tourism Authority" },
        { name: "Aden Hotels Association" },
        { name: "Yemen Airways" },
        { name: "UNESCO Yemen" },
        { name: "Gulf Tourism Council" },
      ]}
    />
  );
}
