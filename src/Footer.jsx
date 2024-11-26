import linkedinicon from './assets/linkedin.svg';
import twittericon from './assets/twitter.svg';
import youtubeicon from './assets/youtube.svg';
import facebookicon from './assets/facebook.svg';
import instagramicon from './assets/instagram.svg';
import techcareerLogo from './assets/techcareer-logo.svg';
import infoLogo from './assets/iskur.webp';

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="menu-columns">
            <div className="menu-column">
              <p className="menu-title">TECHCAREER</p>
              <a href="https://www.techcareer.net/about-us" className="menu-item">Hakkımızda</a>
              <a href="https://www.techcareer.net/events" className="menu-item">Etkinlikler</a>
              <a href="https://www.techcareer.net/sirketler-icin" className="menu-item">Şirketler İçin</a>
              <a href="https://tr.techcareer.net/egitmen-basvurusu/" className="menu-item">Eğitmen Ol</a>
              <a href="https://tr.techcareer.net/is-birligi/" className="menu-item">İş Birliği</a>
              <a href="https://www.techcareer.net/contact" className="menu-item">İletişim</a>
            </div>
            <div className="menu-column">
              <p className="menu-title">BAŞVUR</p>
              <a href="https://www.techcareer.net/bootcamp" className="menu-item">Bootcamp</a>
              <a href="https://www.techcareer.net/hackathon" className="menu-item">Hackathon</a>
              <a href="https://www.techcareer.net/hiring-challenge" className="menu-item">Hiring Challenge</a>
              <a href="https://www.techcareer.net/jobs" className="menu-item">İş İlanları</a>
            </div>
            <div className="menu-column">
              <p className="menu-title">SENİN İÇİN</p>
              <a href="https://www.techcareer.net/community" className="menu-item">Komünite</a>
              <a href="https://tr.techcareer.net/community/techcareernet-developer-clubs" className="menu-item">TDC</a>
              <a href="https://www.techcareer.net/blog" className="menu-item">Blog</a>
              <a href="https://www.techcareer.net/podcast" className="menu-item">Podcast</a>
              <a href="https://www.techcareer.net/kariyer-rehberi-fikirleri-ve-basamaklari" className="menu-item">Kariyer Rehberi</a>
              <a href="https://www.techcareer.net/dictionary" className="menu-item">Teknik Sözlük</a>
            </div>
            <div className="menu-column">
              <p className="menu-title">VERİ POLİTİKAMIZ</p>
              <a href="https://www.techcareer.net/aydinlatma-metni" className="menu-item">Aydınlatma Metni</a>
              <a href="https://www.techcareer.net/hizmet-sozlesmesi" className="menu-item">Hizmet Sözleşmesi</a>
              <a href="https://www.techcareer.net/acik-riza-metni" className="menu-item">Açık Rıza Metni</a>
            </div>
            <div className="right-section">
              <div className="techcareer-banner">
                <img src={techcareerLogo} alt="TechCareer Logo" className="footer-banner-image" />
                <p className="techcareer-slogan">Türkiye’nin teknoloji kariyeri platformu</p>
              </div>
              <div className="social-media">
                <p className="social-media-title">SOSYAL MEDYA</p>
                <div className="social-media-icons">
                  <a href="https://www.linkedin.com/company/techcareernet" target="_blank" rel="noreferrer noopener">
                    <img src={linkedinicon} alt="Linkedin" />
                  </a>
                  <a href="https://twitter.com/techcareernet" target="_blank" rel="noreferrer noopener">
                    <img src={twittericon} alt="Twitter" />
                  </a>
                  <a href="https://www.instagram.com/techcareernet" target="_blank" rel="noreferrer noopener">
                    <img src={instagramicon} alt="Instagram" />
                  </a>
                  <a href="https://www.youtube.com/@techcareernet252" target="_blank" rel="noreferrer noopener">
                    <img src={youtubeicon} alt="Youtube" />
                  </a>
                  <a href="https://www.facebook.com/techcareernet" target="_blank" rel="noreferrer noopener">
                    <img src={facebookicon} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div class="language-and-copyright">
            <div class="language-selection">
              <p class="language-option tr" data-test="change-language-item-tr">TR</p>
              <span class="language-option-divider">|</span>
              <p class="language-option en" data-test="change-language-item-en">EN</p>
            </div>
            <div class="copyright">
              <span>Tüm hakları saklıdır</span>
              <span>© Copyright 2024</span>
              <a href="mailto:support@techcareer.net">support@techcareer.net</a>
            </div>
          </div>
          <div className="footer-info">
            <img src={infoLogo} alt="TechCareer Logo" className="footer-info-image" />
            <p className="footer-info-text">
              Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş. Özel İstihdam Bürosu olarak 31/08/2024 – 30/08/2027 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 26/07/2024 tarih ve 16398069 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 249 29 87 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : 0216 523 90 26
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer