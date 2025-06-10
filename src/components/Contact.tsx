import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  const email = "your.email@example.com";
  
  return (
    <section id="contact" className="relative py-8 px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-green-500 rounded-full filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full">
            <span className="text-green-400 font-medium tracking-wide text-sm">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl font-bold mt-4 mb-4">
            Let's <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="max-w-lg text-gray-400">
            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl transform -rotate-1 scale-[1.03]"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-sm p-10 rounded-xl border border-green-500/20 shadow-lg">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left column: Get in touch message */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <p className="text-gray-300 mb-6">
                    I'm currently available for freelance work and interesting projects. 
                    Feel free to reach out using any of these methods.
                  </p>
                  
                  <div className="mt-6 p-6 border border-green-500/20 rounded-xl bg-gray-900/50">
                    <p className="text-gray-300 italic">
                      "I'm passionate about creating clean, efficient solutions that solve real problems. 
                      Let's build something amazing together!"
                    </p>
                  </div>
                </div>
                
                {/* Right column: Contact methods */}
                <div className="space-y-6">
                  <a 
                    href={`mailto:${email}`} 
                    className="flex items-center p-4 border border-gray-800 rounded-lg hover:border-green-500/50 hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-900/30 group-hover:bg-green-900/50 transition-colors">
                      <FaEnvelope className="text-green-400 text-xl" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white group-hover:text-green-400 transition-colors">{email}</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/1234567890" 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-4 border border-gray-800 rounded-lg hover:border-green-500/50 hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-900/30 group-hover:bg-green-900/50 transition-colors">
                      <FaWhatsapp className="text-green-400 text-xl" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="text-white group-hover:text-green-400 transition-colors">+1 (234) 567-890</p>
                    </div>
                  </a>
                  
                  <div className="pt-6">
                    <p className="text-sm font-medium text-gray-400 mb-4">Or connect with me on:</p>
                    <div className="flex flex-col space-y-4">
                      <a 
                        href="https://linkedin.com/in/lawrence-k" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-blue-900/30 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <FaLinkedin className="text-xl group-hover:text-blue-400" />
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-blue-400">linkedin.com/in/lawrence-k</span>
                      </a>
                      <a 
                        href="https://github.com/lawrence-dev" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <FaGithub className="text-xl group-hover:text-white" />
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white">github.com/lawrence-dev</span>
                      </a>
                      <a 
                        href="https://twitter.com/lawrence_dev" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-blue-900/30 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <FaTwitter className="text-xl group-hover:text-blue-400" />
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-blue-400">@lawrence_dev</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formal approach section */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Prefer a more formal approach? Feel free to send me a message!
            </p>
            <a 
              href={`mailto:${email}`}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg hover:from-green-600 hover:to-teal-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-green-900/30"
            >
              <FaEnvelope className="mr-2" />
              <span className="font-medium">Send Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;