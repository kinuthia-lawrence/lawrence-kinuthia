const Hero: React.FC = () => (
  <section
    id="hero"
    className=" h-[80vh] flex flex-col justify-center items-start px-8"
  >
    <h1 className="text-5xl font-bold mb-4">Hi, I'm Lawrence K.</h1>
    <p className="text-xl mb-6">
      Indie developer skilled in Java, Kotlin, JavaScript, and more.
    </p>
    <div className="space-x-4">
      <a
        href="#contact"
        className="px-6 py-3 bg-green-500 rounded hover:bg-green-600"
      >
        Hire Me
      </a>
      <a
        href="https://github.com/yourprofile"
        className="px-6 py-3 border border-green-500 rounded hover:bg-green-500"
      >
        GitHub
      </a>
    </div>
  </section>
);

export default Hero;
