import { SectorPageTemplate } from '@/components/SectorPageTemplate';
import { Banknote, TrendingUp, Shield, Users, Award, Building2, Briefcase } from 'lucide-react';

export default function BankingSector() {
  return (
    <SectorPageTemplate
      sectorId="banking"
      nameEn="Banking & Finance"
      nameAr="البنوك والمالية"
      taglineEn="Elevating Financial Events to New Heights"
      taglineAr="نرتقي بالفعاليات المالية إلى آفاق جديدة"
      descriptionEn="Specialized event management for banks, financial institutions, and investment firms. From annual meetings to product launches, we deliver sophisticated events that reflect the prestige of the financial sector."
      descriptionAr="إدارة فعاليات متخصصة للبنوك والمؤسسات المالية وشركات الاستثمار. من الاجتماعات السنوية إلى إطلاق المنتجات، نقدم فعاليات راقية تعكس هيبة القطاع المالي."
      primaryColor="#0A4D68"
      secondaryColor="#D4AF37"
      gradient="from-[#0A4D68] to-[#088395]"
      heroImage="/images/sectors/banking-yemen.png"
      mascotImage="/images/mascots/corporate-mascot.png"
      icon={Banknote}
      stats={[
        { value: "25+", labelEn: "Banking Events", labelAr: "فعالية مصرفية" },
        { value: "10+", labelEn: "Bank Partners", labelAr: "بنك شريك" },
        { value: "5K+", labelEn: "Attendees", labelAr: "حاضر" },
        { value: "100%", labelEn: "Satisfaction", labelAr: "رضا العملاء" },
      ]}
      services={[
        { titleEn: "Annual General Meetings", titleAr: "الاجتماعات السنوية العامة", descEn: "Professional AGM organization with shareholder management", descAr: "تنظيم احترافي للاجتماعات السنوية مع إدارة المساهمين", icon: Users },
        { titleEn: "Product Launches", titleAr: "إطلاق المنتجات", descEn: "Impactful launches for new banking products and services", descAr: "إطلاق مؤثر للمنتجات والخدمات المصرفية الجديدة", icon: TrendingUp },
        { titleEn: "Investment Forums", titleAr: "منتديات الاستثمار", descEn: "High-level forums connecting investors and opportunities", descAr: "منتديات رفيعة المستوى تربط المستثمرين بالفرص", icon: Briefcase },
        { titleEn: "Awards Ceremonies", titleAr: "حفلات التكريم", descEn: "Elegant ceremonies recognizing excellence in finance", descAr: "حفلات أنيقة لتكريم التميز في المجال المالي", icon: Award },
        { titleEn: "Security Conferences", titleAr: "مؤتمرات الأمان", descEn: "Cybersecurity and financial security events", descAr: "فعاليات الأمن السيبراني والأمان المالي", icon: Shield },
        { titleEn: "Board Retreats", titleAr: "خلوات مجلس الإدارة", descEn: "Executive retreats for strategic planning", descAr: "خلوات تنفيذية للتخطيط الاستراتيجي", icon: Building2 },
      ]}
      courses={[
        { titleEn: "Financial Event Management", titleAr: "إدارة الفعاليات المالية", duration: "3 weeks", priceUSD: 450, priceYER: 765000 },
        { titleEn: "Investor Relations Events", titleAr: "فعاليات علاقات المستثمرين", duration: "2 weeks", priceUSD: 350, priceYER: 595000 },
        { titleEn: "Banking Protocol & Etiquette", titleAr: "البروتوكول والإتيكيت المصرفي", duration: "1 week", priceUSD: 200, priceYER: 340000 },
      ]}
      news={[
        { date: "December 14, 2025", titleEn: "Greenists Partners with Central Bank of Yemen", titleAr: "جرينستس تتشارك مع البنك المركزي اليمني", summaryEn: "New partnership to organize official banking sector events", summaryAr: "شراكة جديدة لتنظيم فعاليات القطاع المصرفي الرسمية" },
        { date: "December 10, 2025", titleEn: "Annual Banking Summit Success", titleAr: "نجاح القمة المصرفية السنوية", summaryEn: "Over 200 financial leaders attended the summit in Aden", summaryAr: "أكثر من 200 قائد مالي حضروا القمة في عدن" },
        { date: "December 5, 2025", titleEn: "New Financial Services Package Launched", titleAr: "إطلاق باقة الخدمات المالية الجديدة", summaryEn: "Specialized packages for banking sector events", summaryAr: "باقات متخصصة لفعاليات القطاع المصرفي" },
      ]}
      partners={[
        { name: "Central Bank of Yemen" },
        { name: "CAC Bank" },
        { name: "Yemen Kuwait Bank" },
        { name: "Al-Amal Microfinance" },
        { name: "Aden Chamber of Commerce" },
      ]}
    />
  );
}
