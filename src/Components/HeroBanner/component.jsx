import './styles.css';
import 'animate.css';
import girl from "../../../src/assets/images/girl.png";
export default function Banner() {
  return (
    <>
      <div className="background">
        <div className="parent">
          <div className="text-element">
            <h2 className="animate__animated animate__fadeInDown">
              Find Your Place
            </h2>

            <p className="animate__animated animate__fadeInUp">
              Cities are melting pots of different cultures, languages, and
              traditions. This diversity provides opportunities to experience a
              variety of cuisines, festivals, and art forms from around the
              world.
            </p>
            <p className="animate__animated animate__fadeInUp">
              Opportunities to make new friends and connect with like-minded
              individuals await.
            </p>
          </div>
          <div className="image-element">
            <img
              className="animate__animated animate__fadeInRight brightness"
              src={girl}
            />
          </div>
        </div>
      </div>
    </>
  );
}



    