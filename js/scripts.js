function Telefon(marka, kolor, cena) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

var iPhone6s = new Telefon("Apple", "srebrny", 2250);
var samsungGalaxyS6 = new Telefon("Samsung","czarny",1500);
var onePlusOne = new Telefon ("?","biały",1000);

iPhone6s.printInfo();
samsungGalaxyS6.printInfo(); 
onePlusOne.printInfo();