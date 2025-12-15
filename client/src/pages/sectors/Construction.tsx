import { SectorPageTemplate } from '@/components/SectorPageTemplate';
import { HardHat, Building2, Hammer, Award, Users, Ruler } from 'lucide-react';

export default function ConstructionSector() {
  return (
    <SectorPageTemplate
      sectorId="construction"
      nameEn="Construction & Real Estate"
      nameAr="البناء والعقارات"
      taglineEn="Building Connections, Celebrating Milestones"
      taglineAr="نبني العلاقات ونحتفي بالإنجازات"
      descriptionEn="Specialized events for construction companies, real estate developers, and infrastructure projects. From groundbreaking ceremonies to project launches, we help you celebrate every milestone in style."
      descriptionAr="فعاليات متخصصة لشركات البناء ومطوري العقارات ومشاريع البنية التحتية. من حفلات وضع حجر الأساس إلى إطلاق المشاريع، نساعدك على الاحتفال بكل إنجاز بأناقة."
      primaryColor="#E85D04"
      secondaryColor="#FAA307"
      gradient="from-[#E85D04] to-[#FAA307]"
      heroImage="/images/sectors/construction-yemen.png"
      icon={HardHat}
      stats={[
        { value: "40+", labelEn: "Project Events", labelAr: "فعالية مشروع" },
        { value: "15+", labelEn: "Developers", labelAr: "مطور شريك" },
        { value: "$2B+", labelEn: "Projects Value", labelAr: "قيمة المشاريع" },
        { value: "100%", labelEn: "On-Time", labelAr: "في الموعد" },
      ]}
      services={[
        { titleEn: "Groundbreaking Ceremonies", titleAr: "حفلات وضع حجر الأساس", descEn: "Memorable ceremonies marking project beginnings", descAr: "حفلات لا تُنسى تؤرخ بدايات المشاريع", icon: Hammer },
        { titleEn: "Project Launches", titleAr: "إطلاق المشاريع", descEn: "Grand unveiling events for new developments", descAr: "فعاليات كشف كبرى للمشاريع الجديدة", icon: Building2 },
        { titleEn: "Topping Out Ceremonies", titleAr: "حفلات اكتمال الهيكل", descEn: "Celebrating structural completion milestones", descAr: "الاحتفال بإنجازات اكتمال الهيكل", icon: HardHat },
        { titleEn: "Ribbon Cutting Events", titleAr: "حفلات قص الشريط", descEn: "Official opening ceremonies for completed projects", descAr: "حفلات افتتاح رسمية للمشاريع المكتملة", icon: Award },
        { titleEn: "Industry Exhibitions", titleAr: "المعارض الصناعية", descEn: "Trade shows for construction and real estate", descAr: "معارض تجارية للبناء والعقارات", icon: Ruler },
        { titleEn: "Investor Presentations", titleAr: "عروض المستثمرين", descEn: "Professional events for investor engagement", descAr: "فعاليات احترافية لإشراك المستثمرين", icon: Users },
      ]}
      courses={[
        { titleEn: "Construction Event Management", titleAr: "إدارة فعاليات البناء", duration: "2 weeks", priceUSD: 400, priceYER: 680000 },
        { titleEn: "Real Estate Launch Events", titleAr: "فعاليات إطلاق العقارات", duration: "1 week", priceUSD: 300, priceYER: 510000 },
        { titleEn: "Safety in Event Planning", titleAr: "السلامة في تخطيط الفعاليات", duration: "3 days", priceUSD: 200, priceYER: 340000 },
      ]}
      news={[
        { date: "December 14, 2025", titleEn: "Major Infrastructure Project Launch", titleAr: "إطلاق مشروع بنية تحتية كبير", summaryEn: "Greenists organizes $500M project groundbreaking", summaryAr: "جرينستس تنظم حفل وضع حجر أساس مشروع بقيمة 500 مليون دولار" },
        { date: "December 9, 2025", titleEn: "Real Estate Expo Success", titleAr: "نجاح معرض العقارات", summaryEn: "Over 50 developers showcased at Aden expo", summaryAr: "أكثر من 50 مطور عرضوا في معرض عدن" },
        { date: "December 4, 2025", titleEn: "New Construction Partnership", titleAr: "شراكة بناء جديدة", summaryEn: "Agreement with leading construction firms", summaryAr: "اتفاقية مع شركات البناء الرائدة" },
      ]}
      partners={[
        { name: "Yemen Construction Co." },
        { name: "Aden Development Authority" },
        { name: "Gulf Contractors" },
        { name: "Ministry of Public Works" },
        { name: "Real Estate Association" },
      ]}
    />
  );
}
