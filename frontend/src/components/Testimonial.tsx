import Image from 'next/image';
import { Testimonial as TestimonialType } from '@/types';

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 flex mr-2">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i}
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-700">{testimonial.rating}/5</span>
      </div>
      
      <p className="text-gray-700 mb-4 flex-grow">&quot;{testimonial.text}&quot;</p>
      
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden relative">
          <Image 
            src={testimonial.image} 
            alt={testimonial.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="40px"
          />
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;