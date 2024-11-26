import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/interview.png';

function Techcareer() {
  return (
    <>
      <div>
        <div className="heading-container">
          <h2 className="heading-why">Neden</h2>
          <h2 className="heading-techcareer">Techcareer.net</h2>
          <span className="question-mark">?</span>
        </div>
        <div className="techcareer-container">
          <div className="reason">
            <img src={image2} alt="Etkinlik 1" />
            <div className="details">
              <h3>Ücretsiz Etkinliklere Katıl</h3>
              <p>
                Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken tüm becerileri burada öğrenmeye ücretsiz etkinlikler ile başlayacaksın.
              </p>
            </div>
          </div>
          <div className="reason">
            <img src={image1} alt="Etkinlik 2" />
            <div className="details">
              <h3>Kendini Kanıtla</h3>
              <p>
                Bootcamp, Hackathon ve Hiring Challenge etkinliklerine katılarak hem becerilerini geliştirecek hem de ödül kazanma fırsatı yakalayacaksın.
              </p>
            </div>
          </div>
          <div className="reason">
            <img src={image3} alt="Etkinlik 3" />
            <div className="details">
              <h3>İş fırsatı yakala</h3>
              <p>
                Sektöründe lider teknoloji şirketleriyle tanışacak ve iş fırsatları yakalayacaksın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Techcareer