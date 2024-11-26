import firstImage from './assets/course-1.webp';
import secondImage from './assets/course-2.webp';
import thirdImage from './assets/course-3.webp';
import clockIcon from './assets/clock.png';
import certificateIcon from './assets/certificate.png';
import levelIcon from './assets/level.png';

function Courses() {
  return(
    <>
      <div className="title">
        <h2 id="courses-title">Eğitimlerimiz</h2>
      </div>
      <div className="courses">
        <div className="box">
          <a href="https://www.techcareer.net/courses/uygulamalarla-sql-egitimi">
            <div id="first-course" className="course">
              <div>
                <img className="course-image" src={firstImage} alt="Uygulamalarla SQL Eğitimi" />
              </div>
              <div className="details">
                <h3>Uygulamalarla SQL Eğitimi</h3>
                <p>Sql, veritabanı yönetimi ve veri sorgulama için kullanılan bir dildir.</p>
              </div>
              <div className="tags">
                <ul>
                  <li>SQL</li>
                  <li>Veri Tabanı</li>
                  <li>SQL Server</li>
                </ul>
              </div>
              <div className="info">
                <img src={levelIcon} alt="Level Icon" />
                <span>Orta</span>
                <img src={clockIcon} alt="Clock Icon" />
                <span>10 saat</span>
                <img src={certificateIcon} alt="Certificate Icon" />
                <span>Sertifikalı</span>
                <span className="instructor">Hamit Mızrak</span>
              </div>
            </div>
          </a>
        </div>
        <div className="box">
          <a href="https://www.techcareer.net/courses/angular-egitimi">
            <div id="second-course" className="course">
              <div>
                <img className="course-image" src={secondImage} alt="Angular Eğitimi" />
              </div>
              <div className="details">
                <h3>Angular Eğitimi</h3>
                <p>Angular, web uygulamaları geliştirmek için kullanılan güçlü bir framework'tür.</p>
              </div>
              <div className="tags">
                <ul>
                  <li>Angular</li>
                  <li>SPA</li>
                  <li>Web Geliştirme</li>
                </ul>
              </div>
              <div className="info">
                <img src={levelIcon} alt="Level Icon" />
                <span>Orta</span>
                <img src={clockIcon} alt="Clock Icon" />
                <span>12 saat</span>
                <img src={certificateIcon} alt="Certificate Icon" />
                <span>Sertifikalı</span>
                <span className="instructor">Hamit Mızrak</span>
              </div>
            </div>
          </a>
        </div>
        <div className="box">
          <a href="https://www.techcareer.net/courses/react-native-egitimi">
            <div id="third-course" className="course">
              <div>
                <img className="course-image" src={thirdImage} alt="React Native Eğitimi" />
              </div>
              <div className="details">
                <h3>React Native Eğitimi</h3>
                <p>React Native, cross-platform mobile uygulama geliştirme framework'üdür.</p>
              </div>
              <div className="tags">
                <ul>
                  <li>React</li>
                  <li>Framework</li>
                </ul>
              </div>
              <div className="info">
                <img src={levelIcon} alt="Level Icon" />
                <span>Orta</span>
                <img src={clockIcon} alt="Clock Icon" />
                <span>17 saat</span>
                <img src={certificateIcon} alt="Certificate Icon" />
                <span>Sertifikalı</span>
                <span className="instructor">Hamit Mızrak</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="redirection">
        <a href="https://www.techcareer.net/courses">
          <button className="redirection-button">Tüm Eğitimleri Gör</button>
        </a>
      </div>
    </>
  );
}

export default Courses