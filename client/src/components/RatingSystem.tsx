import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Star, ThumbsUp, MessageCircle, Award, Shield, 
  CheckCircle2, Camera, Video, Sparkles, TrendingUp
} from 'lucide-react';

interface Review {
  id: string;
  clientName: string;
  eventType: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  photos?: string[];
  helpful: number;
  response?: string;
}

interface RatingBreakdown {
  overall: number;
  quality: number;
  communication: number;
  value: number;
  creativity: number;
  punctuality: number;
}

// Sample reviews data
const sampleReviews: Review[] = [
  {
    id: '1',
    clientName: 'أحمد الصالحي',
    eventType: 'corporate',
    rating: 5,
    comment: 'تجربة استثنائية مع فريق جرينستس! نظموا مؤتمرنا السنوي بشكل احترافي وإبداعي. كل التفاصيل كانت مدروسة والضيوف أشادوا بجودة التنظيم.',
    date: '2024-11-15',
    verified: true,
    helpful: 24,
    response: 'شكراً لثقتكم بنا! سعداء بأن الفعالية نالت إعجابكم ونتطلع للتعاون معكم مجدداً.'
  },
  {
    id: '2',
    clientName: 'سارة العمري',
    eventType: 'wedding',
    rating: 5,
    comment: 'حفل زفافي كان أجمل مما تخيلت! الديكور والتنسيق والاهتمام بكل تفصيلة جعل اليوم مثالياً. شكراً جرينستس!',
    date: '2024-10-28',
    verified: true,
    helpful: 31,
  },
  {
    id: '3',
    clientName: 'محمد باعباد',
    eventType: 'government',
    rating: 4,
    comment: 'تنظيم ممتاز للمؤتمر الحكومي. الفريق محترف ويلتزم بالمواعيد. أنصح بالتعامل معهم.',
    date: '2024-09-20',
    verified: true,
    helpful: 18,
  },
];

const ratingBreakdown: RatingBreakdown = {
  overall: 4.9,
  quality: 4.9,
  communication: 4.8,
  value: 4.7,
  creativity: 5.0,
  punctuality: 4.9,
};

export function RatingSystem() {
  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'helpful' | 'rating'>('recent');

  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    };
    
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const getRatingLabel = (rating: number) => {
    if (rating >= 4.8) return language === 'ar' ? 'استثنائي' : 'Exceptional';
    if (rating >= 4.5) return language === 'ar' ? 'ممتاز' : 'Excellent';
    if (rating >= 4.0) return language === 'ar' ? 'جيد جداً' : 'Very Good';
    if (rating >= 3.5) return language === 'ar' ? 'جيد' : 'Good';
    return language === 'ar' ? 'مقبول' : 'Average';
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#D4AF37]/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a5c36] to-[#2D7A4A] p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
            <Award className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              {language === 'ar' ? 'تقييمات العملاء' : 'Client Reviews'}
            </h2>
            <p className="text-white/70 text-sm">
              {language === 'ar' ? 'آراء حقيقية من عملائنا' : 'Real feedback from our clients'}
            </p>
          </div>
        </div>

        {/* Overall Rating */}
        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{ratingBreakdown.overall}</div>
            {renderStars(Math.round(ratingBreakdown.overall), 'lg')}
            <p className="text-sm text-white/70 mt-2">
              {language === 'ar' ? 'من 127 تقييم' : 'from 127 reviews'}
            </p>
          </div>
          
          <div className="flex-1 space-y-2">
            {[
              { label: language === 'ar' ? 'الجودة' : 'Quality', value: ratingBreakdown.quality },
              { label: language === 'ar' ? 'التواصل' : 'Communication', value: ratingBreakdown.communication },
              { label: language === 'ar' ? 'القيمة' : 'Value', value: ratingBreakdown.value },
              { label: language === 'ar' ? 'الإبداع' : 'Creativity', value: ratingBreakdown.creativity },
              { label: language === 'ar' ? 'الالتزام' : 'Punctuality', value: ratingBreakdown.punctuality },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-sm text-white/70 w-20">{item.label}</span>
                <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#D4AF37] rounded-full transition-all duration-500"
                    style={{ width: `${(item.value / 5) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium w-8">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {[
              { id: 'all', label: language === 'ar' ? 'الكل' : 'All' },
              { id: 'corporate', label: language === 'ar' ? 'شركات' : 'Corporate' },
              { id: 'wedding', label: language === 'ar' ? 'زفاف' : 'Wedding' },
              { id: 'government', label: language === 'ar' ? 'حكومي' : 'Government' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-[#1a5c36] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
          >
            <option value="recent">{language === 'ar' ? 'الأحدث' : 'Most Recent'}</option>
            <option value="helpful">{language === 'ar' ? 'الأكثر فائدة' : 'Most Helpful'}</option>
            <option value="rating">{language === 'ar' ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="p-6 space-y-6">
        {sampleReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a5c36] to-[#2D7A4A] flex items-center justify-center text-white font-bold">
                  {review.clientName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">{review.clientName}</span>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        {language === 'ar' ? 'موثق' : 'Verified'}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{new Date(review.date).toLocaleDateString(language === 'ar' ? 'ar-YE' : 'en-US')}</span>
                    <span>•</span>
                    <span className="capitalize">{review.eventType}</span>
                  </div>
                </div>
              </div>
              {renderStars(review.rating)}
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>

            {review.response && (
              <div className="bg-[#1a5c36]/5 rounded-xl p-4 mb-4 border-r-4 border-[#1a5c36]">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src="/images/branding/official-logo.png" 
                    alt="Greenists" 
                    className="w-6 h-6"
                  />
                  <span className="font-medium text-[#1a5c36]">
                    {language === 'ar' ? 'رد فريق جرينستس' : 'Greenists Team Response'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{review.response}</p>
              </div>
            )}

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-500 hover:text-[#1a5c36] transition-colors text-sm">
                <ThumbsUp className="w-4 h-4" />
                {language === 'ar' ? 'مفيد' : 'Helpful'} ({review.helpful})
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-[#1a5c36] transition-colors text-sm">
                <MessageCircle className="w-4 h-4" />
                {language === 'ar' ? 'رد' : 'Reply'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="p-6 border-t border-gray-100 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#c9a432] text-white rounded-xl font-medium hover:shadow-lg transition-all">
          {language === 'ar' ? 'عرض المزيد من التقييمات' : 'Load More Reviews'}
        </button>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 p-6">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-600">
            <Shield className="w-5 h-5 text-[#1a5c36]" />
            <span className="text-sm">{language === 'ar' ? 'تقييمات موثقة' : 'Verified Reviews'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Award className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm">{language === 'ar' ? 'معتمد ISO 20121' : 'ISO 20121 Certified'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm">{language === 'ar' ? '+500 فعالية ناجحة' : '500+ Successful Events'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingSystem;
