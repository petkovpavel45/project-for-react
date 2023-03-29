import aboutPic from './images/about-img.jpg'
import './styles/about-us.css'
export const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="about-wrapper">
        <div className="about-card">
          <h2 className="about-title">About Us</h2>
          <p className="about-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus dolorum minus qui corrupti adipisci odit obcaecati a.
            Nobis accusantium deserunt voluptate laboriosam quaerat voluptatem
            dolor suscipit voluptatibus aliquid, libero obcaecati consectetur
            nostrum at nam soluta architecto? Consequuntur autem ullam fugiat?
          </p>
        </div>

        <div className="about-img-wrapper">
          <img src={aboutPic} alt="about-pic" className="about-img" />
        </div>
      </div>
    </section>
  );
};
