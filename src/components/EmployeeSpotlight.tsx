
import React from 'react';
import { Badge, TrendingUp, Users, Award } from 'lucide-react';

const EmployeeSpotlight = () => {
  const benefits = [
    {
      icon: Badge,
      title: 'Salary Deduction',
      description: 'Pay conveniently through monthly salary deductions',
      stat: '0% Interest',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Special Discounts',
      description: 'Exclusive employee pricing on all products',
      stat: 'Up to 25% Off',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Priority Support',
      description: 'Dedicated customer service for employees',
      stat: '24/7 Available',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 mb-6">
            <Users className="w-4 h-4 mr-2" />
            For MTBC Employees
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Exclusive Employee Benefits
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enjoy special perks designed to make your shopping experience even better
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in border border-white/20 dark:border-gray-700/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {benefit.description}
              </p>

              {/* Stat */}
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${benefit.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Popular Employee Purchases */}
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Most Popular This Month
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              See what your colleagues are purchasing
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Office Chair', 'Wireless Mouse', 'Desk Lamp', 'Water Bottle'].map((item, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{item}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {Math.floor(Math.random() * 50) + 10} purchases
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeSpotlight;
