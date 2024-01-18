import { useState } from "react"
import "../styles/Home.css"
import { Link } from "react-router-dom"

function HomePage() {
  const [firstPhoneNumber, setFirstPhoneNumber] = useState('0542 564 76 61')
  const [secondPhoneNumber, setSecondPhoneNumber] = useState('0539 858 73 61')
  const [copyGreenButtonVisibility, setCopyGreenButtonVisibility] = useState(false)
  const [copyRedButtonVisibility, setCopyRedButtonVisibility] = useState(false)

  const firstPhoneNumberCopy = () => {
    navigator.clipboard.writeText(firstPhoneNumber)
    setCopyGreenButtonVisibility(false)
    alert("Numara kopyalandı")
  }
  const secondPhoneNumberCopy = () => {
    navigator.clipboard.writeText(secondPhoneNumber)
    setCopyRedButtonVisibility(false)
    alert("Numara kopyalandı")
  }
  const visiblePhoneNumberButtonGreen = () => {
    if (copyGreenButtonVisibility == false) {
      setCopyGreenButtonVisibility(true)
    } else if (copyGreenButtonVisibility == true) {
      setCopyGreenButtonVisibility(false)
    }
  }
  const visiblePhoneNumberButtonRed = () => {
    if (copyRedButtonVisibility == false) {
      setCopyRedButtonVisibility(true)
    } else if (copyRedButtonVisibility == true) {
      setCopyRedButtonVisibility(false)
    }
  }

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-texts">
          <div className="hero-text-title">Tatar Nakliyat</div>
          <div className="hero-text-container">
            <span className="hero-text">Firmamız evden eve nakliyat sektöründe Türkiye genelinde yaygın servis <br /> ağıyla, zengin araç filosuyla kurumsal bir iş anlayışıyla sizlere hizmet <br /> vermektedir. </span> <br /> <br />
            <span className="hero-text">Taşımacılıkla ilgili tüm ihtiyaçlarınızda aşağıdaki numaramızdan bize <br /> ulaşabilir, en uygun fiyat teklifini alarak kolayca taşınabilirsiniz.</span>
          </div>
          <div className="phone-number-button-containers">
            <div className="phone-number-button-container">
              <button onClick={visiblePhoneNumberButtonGreen} className="phone-number-button-green"><i className="fa-solid fa-phone phone-icon"></i>0542 564 76 61</button>
              <button className={`phone-number-copy-button ${copyGreenButtonVisibility ? "visible" : ""}`} onClick={firstPhoneNumberCopy}>Kopyala</button>

            </div>
            <div className="phone-number-button-container">
              <button onClick={visiblePhoneNumberButtonRed} className="phone-number-button-red"><i className="fa-solid fa-phone phone-icon"></i>0539 858 73 61</button>
              <button className={`phone-number-copy-button ${copyRedButtonVisibility ? "visible" : ""}`} onClick={secondPhoneNumberCopy}>Kopyala</button>

            </div>
          </div>
        </div>
        <div className="hero-images-container">
          <img src="src/images/image.png" className="hero-image" />
          <img src="src/images/image3.png" className="hero-image" />
          <img src="src/images/image4.png" className="hero-image" />
          <img src="src/images/image5.png" className="hero-image" />
        </div>
      </div>
      <div className="services">
        <div className="services-title">Hizmetlerimiz</div>
        <div className="service-container">
          <div className="service">
            <div className="service-title">Evden Eve Nakliyat</div>
            <div className="service-img-div">
              <img src="src/images/image4.png" className="service-img" />
            </div>
            <div className="service-explanation-text">
              Evden eve taşımacılık yapılacak gün ve saatte ekibimiz ve aracımız ile gelerek paketleme yaparız, araca yükleriz ve yeni adrese hareket ederiz.
            </div>
          </div>
          <div className="service">
            <div className="service-title">Şehirler Arası Nakliyat</div>
            <div className="service-img-div">
              <img src="src/images/image5.png" className="service-img" />
            </div>
            <div className="service-explanation-text">
              Tatar Nakliyat olarak Türkiye’yenin her bölgesine, şehirler arası taşımacılık hizmetini ambalajlı asansörlü ve sigorta güvencesiyle gerçekleştiririz.
            </div>
          </div>
          <div className="service">
            <div className="service-title">Ofis / İş Yeri Taşıma</div>
            <div className="service-img-div">
              <img src="src/images/image.png" className="service-img" />
            </div>
            <div className="service-explanation-text">
              Ofis ve işletmeler evlerden ayrı bir şekilde, elektrik cihaz bilgisi olan tecrübeli elemanlarımız tarafından gerçekleştirilmektedir.
            </div>
          </div>
          <div className="service">
            <div className="service-title">Ambalajlı Nakliyat</div>
            <div className="service-img-div">
              <img src="https://www.cesurevdenevetasimacilik.com/gorsel/hizmet/6.jpg" className="service-img" />
            </div>
            <div className="service-explanation-text">
              Nakliyatını yapacağımız tüm eşyalarınız sağlam bir şekilde ambalaj yapılarak hasarsız ve sağlam bir biçimde titizlikle taşınmaktadır.
            </div>
          </div>
        </div>
        <Link to="/hizmetlerimiz" className="more-service-view-button">Daha Fazla</Link>
      </div>
      <div className="marketing-articles">
        <div className="marketing-text-container">
          <h3 className="marketing-text-title">Taşınırken En Uygun ve En Güvenilir Firmayı mı Arıyorsunuz?</h3>
          <div className="marketing-text">
            Taşınırken en uygun fiyatlı ve en güvenilir firmayı aramak yorucu ve risklidir.Herkes işini profosyonellikle yapan güvenilir bir firmaya işini yaptırmak ister.Tam olarak bu yüzden burdayız.
          </div>
          <div className="contact-btn-div">
            <Link className="contact-btn" to="/İletişim">Hemen Bize Ulaşın</Link>
          </div>
        </div>
        <div className="marketing-text-container">
          <h3 className="marketing-text-title">Taşınmak Sizi Endişelendiriyor mu?</h3>
          <div className="marketing-text">
            Taşınmak stresli olabilir ama planlı hareket etmek ve yardım almak önemlidir. Erken başlayarak eşyaları düzenlemek, gereksizleri ayırmak ve profesyonel taşıma şirketiyle çalışmak işleri kolaylaştırabilir.
          </div>
          <div className="contact-btn-div">
            <Link className="contact-btn" to="/İletişim">Hemen Bize Ulaşın</Link>
          </div>
        </div>
        <div className="marketing-text-container mtc-3">
          <h3 className="marketing-text-title">Taşınırken Eşyalarınıza Zarar Gelmesinden mi Korkuyorsunuz?</h3>
          <div className="marketing-text">
            Taşınırken eyşalarınıza zarar gelmesi karşılaşmak istemiceğiniz bir durum.Bizde bu durumu size yaşatmamak için sağlam paketleme yaparak ve profosyonel bi şekilde çalışarak müşterilerimizi memnun bırakıyoruz.
          </div>
          <div className="contact-btn-div">
            <Link className="contact-btn" to="/İletişim">Hemen Bize Ulaşın</Link>
          </div>
        </div>
      </div>
      <div className="home-page-footer">
        <div className="home-page-footer-texts">
          <h2 className="home-page-footer-texts-title">
            Tatar Nakliyat
          </h2>
          <div className="home-page-footer-contact-infos">
          <div className="footer-adress-info">
              <span className='footer-icon-bg'>
                <i class="fa-solid fa-location-dot location-info-icon infos-icon"></i>              </span>
              İstanbul/Kartal/Soğanlık/ <br />Yeni mahalle/Atatürk caddesi/no:7
            </div>
            <div className='footer-email-info'>
              <span className='footer-icon-bg'>
                <i class="fa-solid fa-paper-plane email-info-icon infos-icon"></i>
              </span>
              <span className='contact-us-info-title'>Email:</span> tatarnakliyat61@gmail.com
            </div>
            <div className="footer-phone-info">
              <span className='footer-icon-bg'>
                <i class="fa-solid fa-phone phone-info-icon infos-icon"></i>
              </span>
              <span className='contact-us-info-title'>Telefon Numarası:</span>  0539 858 73 61
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage