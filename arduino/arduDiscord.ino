const int ledPin = 13; // LEDin bagli oldugu pin

void setup() {
  Serial.begin(9600); // Seri 
  pinMode(ledPin, OUTPUT); // LED pinini cikis pini olarak ayarla
}

void loop() {
  if (Serial.available() > 0) {
    char command = Serial.read(); // Seri porttan gelen komutu oku
    if (command == '0') {
      digitalWrite(ledPin, HIGH); // LED'i ac
      Serial.println("LED açıldı!");
    } else if (command == '1') {
      digitalWrite(ledPin, LOW); // LED'i kapat
      Serial.println("LED kapandı!");
    }
  }
}
 
