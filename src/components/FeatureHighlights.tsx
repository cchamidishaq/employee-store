
import React from 'react';
import { Truck, Shield, CreditCard, Users } from 'lucide-react';

const FeatureHighlights = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Free shipping on all orders above $50',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Your transactions are protected & encrypted',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Salary Deductions',
      description: 'Convenient payment for all employees',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Users,
      title: 'Employee Benefits',
      description: 'Exclusive deals and discounts for staff',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose MTBC eStore?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience seamless shopping with benefits designed for modern workplaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
