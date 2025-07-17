
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Title, Subtitle } from '@/components/ui/typography';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const LandingTestimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      avatar: "/avatars/sarah.jpg",
      content: "SocialNext has completely transformed how we create LinkedIn content. Our engagement has increased by 300% since we started using their AI-powered carousels. The simplicity is remarkable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Content Creator",
      company: "Freelance",
      avatar: "/avatars/michael.jpg", 
      content: "As a content creator, time is everything. SocialNext helps me create professional carousels in minutes instead of hours. The peaceful workflow has been a game-changer for my productivity and creativity.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Manager", 
      company: "Growth Agency",
      avatar: "/avatars/emily.jpg",
      content: "The quality of carousels we can create with SocialNext is incredible. Our clients are amazed by the professional results, and we've been able to scale our content production significantly without stress.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <Title size="lg" className="text-neutral-800 mb-6 font-light text-3xl md:text-4xl">
            What Our Users Say
          </Title>
          <Subtitle size="lg" className="text-neutral-500 max-w-2xl mx-auto leading-relaxed font-light text-lg">
            Join thousands of professionals who are already creating stunning LinkedIn content with peaceful focus.
          </Subtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-sm border border-neutral-100 hover:shadow-md hover:border-neutral-200 transition-all duration-500 rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-primary-400 opacity-60" />
                </div>
                
                <Subtitle className="text-neutral-600 mb-8 leading-relaxed font-light text-base">
                  "{testimonial.content}"
                </Subtitle>
                
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current opacity-80" />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary-100 text-primary-600 font-light">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Title size="sm" className="text-neutral-800 mb-1 font-normal">
                      {testimonial.name}
                    </Title>
                    <Subtitle tone="muted" className="text-sm text-neutral-400 font-light">
                      {testimonial.role} at {testimonial.company}
                    </Subtitle>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Subtitle className="text-neutral-500 mb-4 font-light">
            Join over 10,000 professionals already using SocialNext
          </Subtitle>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-400 fill-current opacity-80" />
              ))}
            </div>
            <Subtitle className="text-neutral-400 ml-3 font-light text-sm">
              4.9/5 average rating from 2,000+ reviews
            </Subtitle>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonials;
