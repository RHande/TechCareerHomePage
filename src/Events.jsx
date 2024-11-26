import firstImage from './assets/event-1.webp';
import secondImage from './assets/event-2.webp';
import thirdImage from './assets/event-3.webp';
import calendarIcon from './assets/calendar.png';

function Events() {
  return(
    <>
      <div className="title">
        <h2>Başvurunu Bekleyen Etkinlikler</h2>
      </div>
      <div className="events">
        <div className="box">
          <a href="https://www.techcareer.net/hackathon/luxoft-parking-hackathon">
            <div id="first-event" className="event">
              <div>
                <img className="event-image" src={firstImage} alt="Luxoft Parking Hackathon" />
              </div>
              <div className="details">
                <h3>Luxoft Parking Hackathon</h3>
                <p>Yarış, Kazan, Luxoft'ta Staj Yap!</p>
              </div>
              <div className="tags">
                <ul>
                  <li>Hackathon</li>
                  <li>İş Fırsatı</li>
                </ul>
              </div>
              <div>
                <div className="date">
                  <img src={calendarIcon} alt="Calender Icon" />
                  <span>Son Başvuru: <b>22.11.2024</b></span>
                </div>
                <div>
                  <button className='primary-button'>Başvur</button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="box">
          <a href="https://www.techcareer.net/bootcamp/android-workshop-with-jetpack">
            <div id="second-event" className="event">
              <div>
                <img className="event-image" src={secondImage} alt="Android Workshop with Jetpack" />
              </div>
              <div className="details">
                <h3>Android Workshop with Jetpack</h3>
                <p>Ücretsiz öğren, mezun ol, iş fırsatı yakala!</p>
              </div>
              <div className="tags">
                <ul>
                  <li>Bootcamp</li>
                  <li>İş Fırsatı</li>
                </ul>
              </div>
              <div>
                <div className="date">
                  <img src={calendarIcon} alt="Calender Icon" />
                  <span>Son Başvuru: <b>23.11.2024</b></span>
                </div>
                <div>
                  <button className='primary-button'>Başvur</button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="box">
          <a href="https://www.techcareer.net/bootcamp/git-github-gitlab-workshop">
            <div id="third-event" className="event">
              <div>
                <img className="event-image" src={thirdImage} alt="Git / Github / Gitlab Workshop" />
              </div>
              <div className="details">
                <h3>Git / Github / Gitlab Workshop</h3>
                <p>Ücretsiz öğren, mezun ol, iş fırsatı yakala!</p>
              </div>
              <div className="tags">
                <ul>
                  <li>Bootcamp</li>
                  <li>İş Fırsatı</li>
                </ul>
              </div>
              <div>
                <div className="date">
                  <img src={calendarIcon} alt="Calender Icon" />
                  <span>Son Başvuru: <b>24.11.2024</b></span>
                </div>
                <div>
                  <button className='primary-button'>Başvur</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="redirection">
        <a href="https://www.techcareer.net/events">
          <button className="redirection-button">Tüm Etkinlikleri Gör</button>
        </a>
      </div>
    </>
  );
}

export default Events