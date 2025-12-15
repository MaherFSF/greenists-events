import { SectorPageTemplate } from '@/components/SectorPageTemplate';
import { Globe, Heart, Users, Leaf, Award, HandHeart, Target } from 'lucide-react';

export default function NGOSector() {
  return (
    <SectorPageTemplate
      sectorId="ngo"
      nameEn="NGO & Humanitarian"
      nameAr="المنظمات والإنسانية"
      taglineEn="Amplifying Impact Through Meaningful Events"
      taglineAr="نضاعف الأثر من خلال فعاليات هادفة"
      descriptionEn="Dedicated event solutions for NGOs, UN agencies, and humanitarian organizations. We understand the unique needs of the development sector and create events that inspire action and drive change."
      descriptionAr="حلول فعاليات مخصصة للمنظمات غير الحكومية ووكالات الأمم المتحدة والمنظمات الإنسانية. نفهم الاحتياجات الفريدة لقطاع التنمية ونصنع فعاليات تلهم العمل وتقود التغيير."
      primaryColor="#2D7A4A"
      secondaryColor="#52B788"
      gradient="from-[#2D7A4A] to-[#52B788]"
      heroImage="/images/sectors/ngo-yemen.png"
      icon={Globe}
      stats={[
        { value: "50+", labelEn: "NGO Events", labelAr: "فعالية للمنظمات" },
        { value: "30+", labelEn: "Organizations", labelAr: "منظمة شريكة" },
        { value: "10K+", labelEn: "Beneficiaries", labelAr: "مستفيد" },
        { value: "15+", labelEn: "UN Agencies", labelAr: "وكالة أممية" },
      ]}
      services={[
        { titleEn: "Donor Conferences", titleAr: "مؤتمرات المانحين", descEn: "High-impact events connecting donors with projects", descAr: "فعاليات مؤثرة تربط المانحين بالمشاريع", icon: Heart },
        { titleEn: "Awareness Campaigns", titleAr: "حملات التوعية", descEn: "Public events raising awareness on critical issues", descAr: "فعاليات عامة لرفع الوعي حول القضايا الحرجة", icon: Target },
        { titleEn: "Capacity Building Workshops", titleAr: "ورش بناء القدرات", descEn: "Training events for NGO staff and volunteers", descAr: "فعاليات تدريبية لموظفي ومتطوعي المنظمات", icon: Users },
        { titleEn: "Humanitarian Summits", titleAr: "القمم الإنسانية", descEn: "Large-scale coordination events for humanitarian response", descAr: "فعاليات تنسيق واسعة النطاق للاستجابة الإنسانية", icon: Globe },
        { titleEn: "Volunteer Recognition", titleAr: "تكريم المتطوعين", descEn: "Ceremonies honoring volunteer contributions", descAr: "حفلات تكريم مساهمات المتطوعين", icon: Award },
        { titleEn: "Community Outreach", titleAr: "التواصل المجتمعي", descEn: "Events connecting organizations with communities", descAr: "فعاليات تربط المنظمات بالمجتمعات", icon: HandHeart },
      ]}
      courses={[
        { titleEn: "NGO Event Management", titleAr: "إدارة فعاليات المنظمات", duration: "2 weeks", priceUSD: 300, priceYER: 510000 },
        { titleEn: "Donor Engagement Events", titleAr: "فعاليات إشراك المانحين", duration: "1 week", priceUSD: 200, priceYER: 340000 },
        { titleEn: "Sustainable Event Practices", titleAr: "ممارسات الفعاليات المستدامة", duration: "3 days", priceUSD: 150, priceYER: 255000 },
      ]}
      news={[
        { date: "December 15, 2025", titleEn: "UN Agencies Choose Greenists for Coordination Events", titleAr: "وكالات الأمم المتحدة تختار جرينستس لفعاليات التنسيق", summaryEn: "Multiple UN agencies partner with Greenists for 2026 events", summaryAr: "عدة وكالات أممية تتشارك مع جرينستس لفعاليات 2026" },
        { date: "December 12, 2025", titleEn: "Humanitarian Response Summit Success", titleAr: "نجاح قمة الاستجابة الإنسانية", summaryEn: "Over 500 humanitarian workers gathered in Aden", summaryAr: "أكثر من 500 عامل إنساني اجتمعوا في عدن" },
        { date: "December 8, 2025", titleEn: "Green Events Initiative Launched", titleAr: "إطلاق مبادرة الفعاليات الخضراء", summaryEn: "New sustainability standards for NGO events", summaryAr: "معايير استدامة جديدة لفعاليات المنظمات" },
      ]}
      partners={[
        { name: "UNDP Yemen" },
        { name: "UNICEF" },
        { name: "WHO" },
        { name: "WFP" },
        { name: "UNHCR" },
        { name: "ICRC" },
        { name: "MSF" },
      ]}
    />
  );
}
