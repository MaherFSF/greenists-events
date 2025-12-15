import { SectorPageTemplate } from '@/components/SectorPageTemplate';
import { GraduationCap, BookOpen, Award, Users, Lightbulb, School } from 'lucide-react';

export default function EducationSector() {
  return (
    <SectorPageTemplate
      sectorId="education"
      nameEn="Education & Academia"
      nameAr="التعليم والأكاديمية"
      taglineEn="Celebrating Knowledge, Inspiring Futures"
      taglineAr="نحتفي بالمعرفة ونلهم المستقبل"
      descriptionEn="Comprehensive event solutions for universities, schools, and educational institutions. From graduation ceremonies to academic conferences, we create memorable moments that honor educational achievements."
      descriptionAr="حلول فعاليات شاملة للجامعات والمدارس والمؤسسات التعليمية. من حفلات التخرج إلى المؤتمرات الأكاديمية، نصنع لحظات لا تُنسى تكرم الإنجازات التعليمية."
      primaryColor="#7B2CBF"
      secondaryColor="#9D4EDD"
      gradient="from-[#7B2CBF] to-[#9D4EDD]"
      heroImage="/images/sectors/education-yemen.png"
      icon={GraduationCap}
      stats={[
        { value: "100+", labelEn: "Graduations", labelAr: "حفل تخرج" },
        { value: "20+", labelEn: "Universities", labelAr: "جامعة شريكة" },
        { value: "50K+", labelEn: "Graduates", labelAr: "خريج" },
        { value: "99%", labelEn: "Satisfaction", labelAr: "رضا العملاء" },
      ]}
      services={[
        { titleEn: "Graduation Ceremonies", titleAr: "حفلات التخرج", descEn: "Memorable graduation events for all educational levels", descAr: "حفلات تخرج لا تُنسى لجميع المستويات التعليمية", icon: GraduationCap },
        { titleEn: "Academic Conferences", titleAr: "المؤتمرات الأكاديمية", descEn: "Professional conferences for research and knowledge sharing", descAr: "مؤتمرات احترافية للبحث وتبادل المعرفة", icon: BookOpen },
        { titleEn: "Award Ceremonies", titleAr: "حفلات التكريم", descEn: "Recognition events for academic excellence", descAr: "فعاليات تكريم للتميز الأكاديمي", icon: Award },
        { titleEn: "Student Orientations", titleAr: "توجيه الطلاب", descEn: "Welcoming events for new students", descAr: "فعاليات ترحيبية للطلاب الجدد", icon: Users },
        { titleEn: "Innovation Fairs", titleAr: "معارض الابتكار", descEn: "Showcasing student projects and innovations", descAr: "عرض مشاريع وابتكارات الطلاب", icon: Lightbulb },
        { titleEn: "School Events", titleAr: "فعاليات المدارس", descEn: "Comprehensive event services for K-12 schools", descAr: "خدمات فعاليات شاملة للمدارس", icon: School },
      ]}
      courses={[
        { titleEn: "Academic Event Planning", titleAr: "تخطيط الفعاليات الأكاديمية", duration: "2 weeks", priceUSD: 350, priceYER: 595000 },
        { titleEn: "Graduation Ceremony Management", titleAr: "إدارة حفلات التخرج", duration: "1 week", priceUSD: 250, priceYER: 425000 },
        { titleEn: "Student Engagement Events", titleAr: "فعاليات إشراك الطلاب", duration: "3 days", priceUSD: 150, priceYER: 255000 },
      ]}
      news={[
        { date: "December 14, 2025", titleEn: "University of Aden Partnership Renewed", titleAr: "تجديد شراكة جامعة عدن", summaryEn: "Greenists continues as official event partner for 2026", summaryAr: "جرينستس تستمر كشريك الفعاليات الرسمي لعام 2026" },
        { date: "December 10, 2025", titleEn: "Record-Breaking Graduation Season", titleAr: "موسم تخرج قياسي", summaryEn: "Over 5,000 graduates celebrated across 15 ceremonies", summaryAr: "أكثر من 5,000 خريج احتفلوا عبر 15 حفلة" },
        { date: "December 5, 2025", titleEn: "New Academic Conference Package", titleAr: "باقة المؤتمرات الأكاديمية الجديدة", summaryEn: "Specialized packages for research conferences", summaryAr: "باقات متخصصة للمؤتمرات البحثية" },
      ]}
      partners={[
        { name: "University of Aden" },
        { name: "Hadhramout University" },
        { name: "Sana'a University" },
        { name: "Ministry of Education" },
        { name: "UNESCO Yemen" },
      ]}
    />
  );
}
