import { SectorPageTemplate } from '@/components/SectorPageTemplate';
import { Zap, Fuel, Sun, Wind, Award, Users } from 'lucide-react';

export default function EnergySector() {
  return (
    <SectorPageTemplate
      sectorId="energy"
      nameEn="Energy & Oil"
      nameAr="الطاقة والنفط"
      taglineEn="Powering Yemen's Energy Future"
      taglineAr="نشحن مستقبل الطاقة في اليمن"
      descriptionEn="Premium event services for oil companies, energy providers, and renewable energy initiatives. We understand the strategic importance of the energy sector and deliver events that match its significance."
      descriptionAr="خدمات فعاليات متميزة لشركات النفط ومزودي الطاقة ومبادرات الطاقة المتجددة. نفهم الأهمية الاستراتيجية لقطاع الطاقة ونقدم فعاليات تتناسب مع أهميته."
      primaryColor="#023E8A"
      secondaryColor="#0077B6"
      gradient="from-[#023E8A] to-[#0077B6]"
      heroImage="/images/sectors/energy-yemen.png"
      icon={Zap}
      stats={[
        { value: "30+", labelEn: "Energy Events", labelAr: "فعالية طاقة" },
        { value: "10+", labelEn: "Oil Companies", labelAr: "شركة نفط" },
        { value: "$1B+", labelEn: "Deals Facilitated", labelAr: "صفقات ميسرة" },
        { value: "100%", labelEn: "Security", labelAr: "أمان" },
      ]}
      services={[
        { titleEn: "Oil & Gas Conferences", titleAr: "مؤتمرات النفط والغاز", descEn: "High-level industry conferences and summits", descAr: "مؤتمرات وقمم صناعية رفيعة المستوى", icon: Fuel },
        { titleEn: "Renewable Energy Forums", titleAr: "منتديات الطاقة المتجددة", descEn: "Events promoting sustainable energy solutions", descAr: "فعاليات تعزز حلول الطاقة المستدامة", icon: Sun },
        { titleEn: "Project Inaugurations", titleAr: "افتتاح المشاريع", descEn: "Grand openings for energy facilities", descAr: "افتتاحات كبرى لمرافق الطاقة", icon: Zap },
        { titleEn: "Industry Awards", titleAr: "جوائز الصناعة", descEn: "Recognition events for energy sector excellence", descAr: "فعاليات تكريم للتميز في قطاع الطاقة", icon: Award },
        { titleEn: "Technical Workshops", titleAr: "ورش العمل التقنية", descEn: "Specialized training and knowledge sharing", descAr: "تدريب متخصص وتبادل المعرفة", icon: Wind },
        { titleEn: "Investor Meetings", titleAr: "اجتماعات المستثمرين", descEn: "Exclusive events for energy investors", descAr: "فعاليات حصرية لمستثمري الطاقة", icon: Users },
      ]}
      courses={[
        { titleEn: "Energy Sector Event Management", titleAr: "إدارة فعاليات قطاع الطاقة", duration: "3 weeks", priceUSD: 550, priceYER: 935000 },
        { titleEn: "Oil & Gas Protocol", titleAr: "بروتوكول النفط والغاز", duration: "1 week", priceUSD: 350, priceYER: 595000 },
        { titleEn: "Sustainable Energy Events", titleAr: "فعاليات الطاقة المستدامة", duration: "2 weeks", priceUSD: 400, priceYER: 680000 },
      ]}
      news={[
        { date: "December 15, 2025", titleEn: "Yemen Energy Summit 2026 Announced", titleAr: "الإعلان عن قمة الطاقة اليمنية 2026", summaryEn: "Major energy conference planned for Aden", summaryAr: "مؤتمر طاقة كبير مخطط له في عدن" },
        { date: "December 10, 2025", titleEn: "Solar Project Inauguration Success", titleAr: "نجاح افتتاح مشروع الطاقة الشمسية", summaryEn: "Greenists organizes Yemen's largest solar farm opening", summaryAr: "جرينستس تنظم افتتاح أكبر مزرعة شمسية في اليمن" },
        { date: "December 6, 2025", titleEn: "Partnership with International Oil Companies", titleAr: "شراكة مع شركات النفط الدولية", summaryEn: "New agreements for event services", summaryAr: "اتفاقيات جديدة لخدمات الفعاليات" },
      ]}
      partners={[
        { name: "Yemen LNG" },
        { name: "PetroMasila" },
        { name: "Ministry of Oil" },
        { name: "Aden Refinery" },
        { name: "Gulf Energy" },
      ]}
    />
  );
}
