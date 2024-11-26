import mailIcon from './assets/mail.png'

function Mail() {
  return (
    <>
      <div className="mailpart-outerparts">
        <div className="mailpart-innerparts">
          <div className="mailpart-firstpart">
            <h1>Şirketiniz için Teknoloji yeteneği mi arıyorsunuz?</h1>
          </div>
          <div className="mailpart-secondpart">
            <h2>Birlikte etkinlik düzenlemek ve size ulaşmamız için şirket e-mail adresinizi girin! 🚀</h2>
          </div>
          <div className="mailpart-thirdpart">
            <div className="mailbox-outer">
              <div className="mailbox-left">
                <div className="mailbox-icon">
                  <span className="material-symbols-outlined">
                    <img src={mailIcon} alt="Mail Icon" />
                  </span>
                </div>
                <div className="mailbox-box">
                  <input type="email" placeholder="Şirket E-Mail Adresiniz"/>
                </div>
              </div>
              <div className="mailbox-button">
                <a href="https://www.techcareer.net/contact">
                  <button className="mailbox-button-in">
                    <span>Gönder</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="mailpart-fourthpart">
            <p>Tüm soru ve önerileriniz için;</p>
          </div>
          <div className="mailpart-fifthpart">
            <p>hello@techcareer.net</p>
            <p>|</p>
            <p>0216 468 76 00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mail