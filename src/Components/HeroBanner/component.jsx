import './styles.css';
import 'animate.css';

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
              Cities are excellent places. Places to find your passion, enjoy
              art or a fine meal. You are never more than arms distance from a
              new friend.
            </p>
            <p className="animate__animated animate__fadeInUp">
              Whatever you desire, your city has something special waiting right
              around the corner. Don't worry about that until you find something
              else.
            </p>
          </div>
          <div className="image-element">
            <img
              className="animate__animated animate__fadeInRight"
              src="src/Components/HeroBanner/images/girl.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}



    