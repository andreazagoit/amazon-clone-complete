let Product = require("../models/product");
let Order = require("../models/order");

exports.addTestData = async () => {
  const testData = [
    {
      name: "Apple iPhone 12",
      stars: 4.5,
      category: "phone",
      brand: "Apple",
      options: [
        {
          name: "Azzurro",
          images: [
            {
              preview:
                "https://m.media-amazon.com/images/I/71MtcgbTdXL._AC_SL1500_.jpg",
              image:
                "https://m.media-amazon.com/images/I/71MtcgbTdXL._AC_SL1500_.jpg",
            },
            {
              preview:
                "https://m.media-amazon.com/images/I/71xL4Xjc6KL._AC_SL1500_.jpg",
              image:
                "https://m.media-amazon.com/images/I/71xL4Xjc6KL._AC_SL1500_.jpg",
            },
            {
              preview:
                "https://m.media-amazon.com/images/I/81vSrKliyaL._AC_SL1500_.jpg",
              image:
                "https://m.media-amazon.com/images/I/81vSrKliyaL._AC_SL1500_.jpg",
            },
          ],
          price: 98900,
          discountedPrice: 95046,
          disponibility: 4,
        },
        {
          name: "Bianco",
          images: [
            {
              preview:
                "https://m.media-amazon.com/images/I/71fuALlOJ7L._AC_SL1500_.jpg",
              image:
                "https://m.media-amazon.com/images/I/71fuALlOJ7L._AC_SL1500_.jpg",
            },
            {
              preview:
                "https://m.media-amazon.com/images/I/71fjp3MSnRL._AC_SL1500_.jpg",
              image:
                "https://m.media-amazon.com/images/I/71fjp3MSnRL._AC_SL1500_.jpg",
            },
            {
              preview:
                "https://m.media-amazon.com/images/I/81vSrKliyaL._AC_SL1500_.jpg",
              image:
                "https://m.media-amazon.com/images/I/81vSrKliyaL._AC_SL1500_.jpg",
            },
          ],
          price: 98900,
          discountedPrice: 95046,
          disponibility: 4,
        },
        {
          name: "Verde",
          images: [
            {
              preview:
                "https://m.media-amazon.com/images/I/71DZ0Ue6HvL._AC_SL1500_.jpg",
              image:
                "https://m.media-amazon.com/images/I/71DZ0Ue6HvL._AC_SL1500_.jpg",
            },
            {
              preview:
                "https://m.media-amazon.com/images/I/71Uat0rvlIL._AC_SL1500_.jpg",
              image:
                "https://m.media-amazon.com/images/I/71Uat0rvlIL._AC_SL1500_.jpg",
            },
            {
              preview:
                "https://m.media-amazon.com/images/I/81vSrKliyaL._AC_SL1500_.jpg",
              image:
                "https://m.media-amazon.com/images/I/81vSrKliyaL._AC_SL1500_.jpg",
            },
          ],
          price: 98800,
          discountedPrice: 94046,
          disponibility: 3,
        },
      ],
      description:
        "La velocità del 5G. A14 Bionic, il chip più veloce mai visto su uno smart­phone. Un display OLED edge-to-edge. La protezione del Ceramic Shield, per una resistenza alle cadute quattro volte superiore. E la modalità Notte su ogni fotocamera. iPhone 12 ha proprio tutto. Anche due formati perfetti.",
    },
    {
      name:
        "LG UHD TV 43UN71006LB.APID, Smart TV 43'', LED 4K IPS Display, Versione 2020, Alexa integrata [Classe di efficienza energetica A]",
      stars: 4.5,
      category: "phone",
      brand: "Apple",
      options: [
        {
          name: '43"',
          images: [
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/71rCWeH1egL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/71rCWeH1egL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/71smLgHeJlL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/71smLgHeJlL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/61T9JQpxHyL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/61T9JQpxHyL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/418yhjdXmFL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/418yhjdXmFL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/61E6ZVmqkgL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/61E6ZVmqkgL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/51upqyBD4qL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/51upqyBD4qL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/51xqpIN9aAL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/51xqpIN9aAL._AC_SL1200_.jpg",
            },
          ],
          price: 39999,
          discountedPrice: 37999,
          disponibility: 1,
        },
        {
          name: '49"',
          images: [
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/71rCWeH1egL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/71rCWeH1egL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/71smLgHeJlL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/71smLgHeJlL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/61T9JQpxHyL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/61T9JQpxHyL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/418yhjdXmFL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/418yhjdXmFL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/61E6ZVmqkgL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/61E6ZVmqkgL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/51upqyBD4qL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/51upqyBD4qL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/51xqpIN9aAL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/51xqpIN9aAL._AC_SL1200_.jpg",
            },
          ],
          price: 39999,
          discountedPrice: 37999,
          disponibility: 1,
        },
        {
          name: '55"',
          images: [
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/71rCWeH1egL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/71rCWeH1egL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/71smLgHeJlL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/71smLgHeJlL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/61T9JQpxHyL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/61T9JQpxHyL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/418yhjdXmFL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/418yhjdXmFL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/61E6ZVmqkgL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/61E6ZVmqkgL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/51upqyBD4qL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/51upqyBD4qL._AC_SL1200_.jpg",
            },
            {
              preview:
                "https://images-na.ssl-images-amazon.com/images/I/51xqpIN9aAL._AC_SL1200_.jpg",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/51xqpIN9aAL._AC_SL1200_.jpg",
            },
          ],
          price: 39999,
          discountedPrice: 37999,
          disponibility: 1,
        },
      ],
      description:
        "Goditi immagini ancora più realistiche con una risoluzione quattro volte maggiore di quella del Full HD FILMMAKER MODE riproduce fedelmente le immagini così come sono state pensate dai registi, per vivere un’esperienza veramente cinematografica Smart TV WebOS facile, rapida e ricca di contenuti con le principali App tra cui Disney+, Apple TV, Netflix, NOW TV, Prime Video, Raiplay e tanti altri Classe energetica: a, Alexa integrata",
    },
  ];

  await Product.insertMany(testData)
    .then(console.log("salvato"))
    .catch((error) => console.log(error));
};

exports.getProducts = async () => {
  return new Promise((resolve) => {
    Product.find(function (err, products) {
      if (err) return console.error(err);
      resolve(products);
    });
  });
};

exports.getProduct = async (id) => {
  return new Promise((resolve) => {
    Product.find({ _id: id }, function (err, result) {
      if (err) return console.error(err);
      resolve(result[0]);
    });
  });
};

exports.getOrders = async (uid) => {
  return new Promise((resolve) => {
    Order.find({ uid: uid }, function (err, result) {
      if (err) return console.error(err);
      resolve(result);
    });
  });
};
