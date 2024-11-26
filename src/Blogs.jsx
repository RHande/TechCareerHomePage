import clockIcon from './assets/clock.png';
import dateIcon from './assets/date.svg';
import butonIcon from './assets/glasses.svg';

function Blogs() {
    return(
      <>
        <div className="title">
          <h2 className='titleBlogText' id="blogs-title">Blog</h2>
        </div>
        <div className="blogs">
          <div className="blogbox">
            <a href="https://www.techcareer.net/blog/rancher-nedir-nasil-calisir">
              <div className="blog">
                <div>
                  <img className="blog-image" src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FRancher_Nedir_Nasil_Calisir_031cc85f3c%2FRancher_Nedir_Nasil_Calisir_031cc85f3c.jpg&w=640&q=75" alt="Rancher Nedir" />
                </div>
                <div className="details">
                  <h3 className='titleBlogCard'>Rancher Nedir? Nasıl Çalışır?</h3>
                  <p>Rancher, kuruluşların production süreçlerinde container’leri çalıştırmasına olanak
                    tanıyan açık kaynaklı bir yazılım platformudur. Kümeler oluşturmayı, birden fazla
                    Kubernetes kümesini yönetmeyi kolaylaştırır ve bunları izlemek, yönetmek için kullanıcı
                    arayüzü sunar. Bu blogumuzda, Rancher'ın ne olduğunu, temel bileşenlerini ve Kubernetes yönetimini 
                    nasıl kolaylaştırabileceğiniz hakkında detayları öğreneceksiniz.</p>
                </div>
                <div className="blogInfo">
                  <img src={clockIcon} alt="Clock Icon" />
                  <span className='blogInfoText'>3 dakika</span>
                  <img src={dateIcon} alt="Date Icon" />
                  <span className='blogInfoText'>13.11.2024</span>
                  <button className='blogCardsButton'>İncele
                  <img src={butonIcon} alt="incele" class="button-icon" />
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="blogbox">
            <a href="https://www.techcareer.net/blog/load-balancer-yuk-dengeleme-nedir">
              <div className="blog">
                <div>
                  <img className="blog-image" src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FLocalhost_Nedir_b222b8e15b%2FLocalhost_Nedir_b222b8e15b.jpg&w=1200&q=75" alt="Load Balance Nedir" />
                </div>
                <div className="details">
                  <h3 className='titleBlogCard'>Load Balancer Nedir?</h3>
                  <p>E-ticaret web siteleri ve uygulamaları, özellikle yoğun dönemlerde dakikada 
                    yüzlerce hatta binlerce müşteri talebiyle karşılaşabilir. Son zamanlarda sunucular,
                     her geçen gün multimedya içeriklerinin artan boyutları nedeniyle yanıt verme konusunda 
                     zorlanmaya başlamıştır. Bu durumda bağlantılarını ve trafiğini etkili bir şekilde yönetmek, 
                     hızlı ve güvenilir bir kullanıcı deneyimi sağlamak istiyorsan, ihtiyaç duyduğun kavram olabilir. </p>
                </div>
                <div className="blogInfo">
                  <img src={clockIcon} alt="Clock Icon" />
                  <span className='blogInfoText'>5 dakika</span>
                  <img src={dateIcon} alt="Date Icon" />
                  <span className='blogInfoText'>11.11.2024</span>
                  <button className='blogCardsButton'>İncele
                  <img src={butonIcon} alt="incele" class="button-icon" />
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="blogbox">
            <a href="https://www.techcareer.net/blog/gelecegin-teknolojisi-makine-ogrenmesi">
              <div className="blog">
                <div>
                  <img className="blog-image" src="https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2Fgelecegin_teknolojisi_e7bbf39364%2Fgelecegin_teknolojisi_e7bbf39364.jpg&w=1200&q=75" alt="Makine Öğrenmesi" />
                </div>
                <div className="details">
                  <h3 className='titleBlogCard'>Makine Öğrenmesi Nedir</h3>
                  <p>
                  Günümüzde pek çok alanda makine öğrenmesi tekniklerinden faydalanılmaktadır. 
                  Örneğin, sağlık alanında kanser, diyabet gibi hastalıkların görüntü işleme 
                  teknikleriyle erken teşhisine yardımcı olmaktadır. Finans ve bankacılık alanında 
                  dolandırıcılık tespiti gibi konularda, hukuk alanında doğal dil işleme yöntemiyle dava
                   dosyalarını sınıflandırmada kullanılmaktadır. Eğitim, ulaşım ve tarım gibi birçok alanda da karşımıza çıkmaktadır.
                  </p>
                </div>
                <div className="blogInfo">
                  <img src={clockIcon} alt="Clock Icon" />
                  <span className='blogInfoText'>3 dakika</span>
                  <img src={dateIcon} alt="Date Icon" />
                  <span className='blogInfoText'>13.11.2024</span>
                  <button className='blogCardsButton'>İncele
                  <img src={butonIcon} alt="incele" class="button-icon" />
                  </button>
                </div>
              </div>
            </a>
          </div>
          
          
        </div>
        <div className="redirection">
          <a href="https://www.techcareer.net/blog">
            <button className="blogButton">Tümünü Gör
            </button>
          </a>
        </div>
      </>
    );
  }
  
  export default Blogs