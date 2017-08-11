// classes and objects
function Phone(brand, price, color, model, system) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.model = model;
    this.system = system;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". " + "The phone is " + this.model + " and works on the system " + this.system + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "touch", "iOS"),
    samsungGalaxyS6 = new Phone("Samsung", 2300, "white", "touch", "Android Lollipop"),
    onePlusOne = new Phone ("OnePlus", 1600, "rose", "touch", "Android Kitkat");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

// context: this, self
function Button(text) { 
    this.text = text || 'Hello'; 
}

Button.prototype = { 
    create: function() { 
        var self = this;
        this.$element = $('<button>'); 
        this.$element.text(this.text);
        this.$element.click(function() { 
            alert(self.text); 
        });
        $('body').append(this.$element); 
    }
     
}

var btn1 = new Button('Hello!');
btn1.create();