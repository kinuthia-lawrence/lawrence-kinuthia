const Hero: React.FC = () => (
  <section className="relative h-[90vh] overflow-hidden px-8 flex items-center">
    {/* Background decorative elements */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full filter blur-[120px] opacity-20"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px] opacity-10"></div>
    
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Content column */}
      <div className="flex flex-col justify-center space-y-8">
        <div className="space-y-3">
          <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full">
            <span className="text-green-400 font-medium tracking-wide text-sm">SOFTWARE DEVELOPER</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">Lawrence K.</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Software developer skilled in Java, Kotlin, JavaScript, and many other Tech Skills.
          </p>
        </div>
        
        <div className="flex space-x-5 pt-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg hover:from-green-600 hover:to-teal-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-green-900/30 font-medium"
          >
            Hire Me
          </a>
          <a
            href="https://github.com/yourprofile"
            className="px-8 py-4 border-2 border-green-500/50 rounded-lg hover:bg-green-900/30 transform hover:-translate-y-1 transition-all duration-200 font-medium"
          >
            GitHub
          </a>
        </div>
        
        {/* Social links */}
        <div className="flex items-center space-x-6 pt-6">
          <div className="text-gray-400 text-sm">Connect with me</div>
          <div className="h-px bg-gray-700 flex-grow"></div>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Image column with effects */}
      <div className="relative flex items-center justify-center">
        {/* Image glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full filter blur-3xl transform rotate-12 scale-110"></div>
        
        {/* Image container with subtle animation */}
        <div className="relative z-10 animate-float">
          <img
            src="/larrybgless.png"
            alt="Lawrence K."
            className="object-cover max-h-[600px] filter drop-shadow-2xl rounded-2xl"
          />
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-green-500/30 rounded-lg transform rotate-12"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-teal-500/30 rounded-lg transform -rotate-12"></div>
        </div>
      </div>
    </div>
  </section>
);

// Add this keyframe animation to your global CSS
// @keyframes float {
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
// }
// .animate-float {
//   animation: float 4s ease-in-out infinite;
// }

export default Hero;