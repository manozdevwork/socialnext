
import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Title, Subtitle } from '@/components/ui/typography';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const LandingContact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      description: 'Get help from our support team',
      contact: 'support@socialnext.com',
      action: 'Send Email'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      contact: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      action: 'Call Now'
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <Title size="lg" className="text-white mb-6 font-light text-3xl md:text-4xl">
            Get in Touch
          </Title>
          <Subtitle size="lg" className="text-white/80 max-w-2xl mx-auto leading-relaxed font-light text-lg">
            Have questions about SocialNext? We're here to help you succeed with your LinkedIn content strategy.
          </Subtitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 rounded-3xl">
            <CardContent className="p-10">
              <Title size="md" className="text-neutral-800 mb-8 font-normal">
                Send us a Message
              </Title>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-neutral-600 mb-3">
                      First Name
                    </label>
                    <Input placeholder="John" className="w-full h-12 rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring-primary-100" />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-neutral-600 mb-3">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="w-full h-12 rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring-primary-100" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-light text-neutral-600 mb-3">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@company.com" className="w-full h-12 rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring-primary-100" />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-neutral-600 mb-3">
                    Subject
                  </label>
                  <Input placeholder="How can we help you?" className="w-full h-12 rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring-primary-100" />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-neutral-600 mb-3">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your question or feedback..."
                    className="w-full min-h-32 rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring-primary-100 resize-none"
                  />
                </div>
                
                <Button 
                            variant="primary"
                            size="md"
                            fullWidth
                            className="h-16 rounded-xl text-lg font-bold bg-primary hover:bg-primary-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                          >
                            Send Message
                          </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="mb-12">
              <Title size="md" className="text-white mb-4 font-normal">
                Other Ways to Reach Us
              </Title>
              <Subtitle className="text-white/70 leading-relaxed font-light">
                Choose the method that works best for you.
              </Subtitle>
            </div>

            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl hover:border-white/30 transition-all duration-500 rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-primary-50 rounded-2xl text-primary-600">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <Title size="sm" className="text-neutral-800 mb-2 font-normal">
                        {method.title}
                      </Title>
                      <Subtitle className="text-neutral-500 mb-3 font-light leading-relaxed">
                        {method.description}
                      </Subtitle>
                      <Subtitle className="text-neutral-700 font-normal mb-4">
                        {method.contact}
                      </Subtitle>
                      <Button 
                        variant="outlined"
                        size="sm"
                        className="rounded-2xl border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-500"
                      >
                        {method.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingContact;
