
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Title, Subtitle } from '@/components/ui/typography';

interface FAQItem {
  question: string;
  answer: string;
}

const LandingFAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What is SocialNext?",
      answer: "SocialNext is an AI-powered platform that helps creators and businesses generate engaging social media content, optimize posting schedules, and analyze performance across multiple platforms with a focus on simplicity and effectiveness."
    },
    {
      question: "How does the AI content generator work?",
      answer: "Our AI analyzes trending topics, your audience preferences, and your brand voice to generate highly engaging content ideas and drafts tailored to your specific needs and goals. The process is designed to be intuitive and stress-free."
    },
    {
      question: "Do I need technical skills to use SocialNext?",
      answer: "No, SocialNext is designed with Japanese minimalism principles to be user-friendly and intuitive. No technical skills are required to create, schedule, and analyze your social media content."
    },
    {
      question: "What social media platforms does SocialNext support?",
      answer: "SocialNext currently supports LinkedIn, Twitter, Instagram, Facebook, and TikTok, with more platforms being added regularly based on user feedback and needs."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with access to most features so you can experience the benefits and peaceful workflow before committing to a subscription."
    },
    {
      question: "How secure is my social media data with SocialNext?",
      answer: "We implement bank-level security measures including encryption, secure authentication, and regular security audits to ensure your social media data remains protected and private at all times."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-gradient-to-b from-neutral-50/30 to-white">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20">
          <Title size="lg" className="text-neutral-800 mb-6 font-light text-3xl md:text-4xl">
            Frequently Asked Questions
          </Title>
          <Subtitle size="lg" className="max-w-2xl mx-auto text-neutral-500 leading-relaxed font-light text-lg">
            Got questions? We've got answers. If you don't find what you're looking for, feel free to contact our support team.
          </Subtitle>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-neutral-100 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-500"
              >
                <AccordionTrigger className="px-8 py-6 text-lg font-normal text-neutral-800 hover:no-underline hover:bg-neutral-50/50 data-[state=open]:bg-primary-50/30 transition-all duration-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 text-neutral-600 bg-neutral-50/30 border-t border-neutral-100">
                  <Subtitle size="md" tone="muted" className="leading-relaxed font-light">{faq.answer}</Subtitle>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <Subtitle tone="muted" className="text-neutral-400 font-light">
            Still have questions? <a href="#contact" className="text-primary underline underline-offset-4 font-normal hover:text-primary-700 transition-colors duration-500">Contact us</a>
          </Subtitle>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
