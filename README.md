# 🤖 Arduino Control with Discord 📡

**Proje Adı: Arduino Control with Discord**

## **Açıklama:**
Bu proje Discord üzerinden basit komutlarla Arduino tabanlı bir cihazın kontrol edilmesini sağlar. Özellikle ev otomasyonu veya uzaktan kontrol projeleri için ideal bir temel oluşturur. Proje, Discord botu aracılığıyla Arduino'ya seri iletişim aracılığıyla komut göndermeyi ve ardından belirli eylemleri gerçekleştirmeyi sağlar. 🚀

**Kurulum Talimatları:**

1. **Arduino Kodunu Yükleme:**
   - 🛠️ Arduino IDE veya uyumlu bir geliştirme ortamı kullanarak, Arduino'ya projenin kodunu yükleyin. Arduino kodu arduino dosyasında, "arduDiscord.ino" adlı dosyada bulunmaktadır.

2. **Discord Botu Oluşturma:**
   - 🤖 Discord hesabınıza giriş yapın ve bir bot oluşturun.
   - Botunuzu bir sunucuya ekleyin ve botun erişim izinlerini ayarlayın. Botun mesajları gönderebilmesi için "Mesajları Yönet" yetkisine sahip olmalıdır.

3. **Token Alın:**
   - 🔑 Discord Developer Portal üzerinden oluşturduğunuz botun token'ını alın. Bu token, botun kimlik doğrulaması için gereklidir.

4. **Konfigürasyon Dosyasını Düzenleme:** 
   - 📝 app.js dosyası 31. satırda `"BOT_TOKEN"` alanına, Discord botunuzun token'ını yazın.

5. **Node Modüllerini Yükleyin:**
   - 💻 Terminalde veya komut istemcisinde, proje dizinine gidin.
   ```bash
    npm install discord.js@12.5.3
   ```
   ```bash
    npm install serialport
   ```
   - `npm install .` veya `yarn install .` komutunu kullanarak gerekli Node.js modüllerini yükleyin.

8. **Projeyi Başlatma:**
   - ▶️ Terminalde veya komut istemcisinde, proje dizinine gidin.
   - `node app.js` komutunu kullanarak projeyi başlatın.

9. **Discord Üzerinde Kullanım:**
   - 💬 Discord sunucusunda, oluşturduğunuz botun prefixini kullanarak belirlediğiniz komutları gönderin.
   - Örneğin, eğer prefixiniz "!" ise, `!ledon` komutu LED'i açacaktır.

**Notlar:**
Bu proje örnek bir uygulama olup, kullanıcıların ihtiyaçlarına göre genişletilebilir. Herhangi bir geri bildirim veya katkı için lütfen bir GitHub issue veya pull request oluşturun. 🙏

**Lisans:**
Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LISENSE.md) dosyasına bakınız. 📜

## 🤔 Destek
Sorularınız veya geri bildirimleriniz için lütfen bir [mesaj](https://instagram.com/ahmetbalciks_/) gönderin.

## ✍️ Yazar
Ahmet Balçık
