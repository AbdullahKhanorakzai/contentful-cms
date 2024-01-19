import heroImg from "./assets/hero.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentfull CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            voluptate soluta harum labore, quaerat eligendi nemo. Eligendi
            eveniet corporis hic doloribus, laudantium illo, quibusdam, voluptas
            fuga ratione in nihil. Quod?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
