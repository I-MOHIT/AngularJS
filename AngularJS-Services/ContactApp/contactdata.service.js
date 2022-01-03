(function () {
    var app = angular.module("ContactApp");
  
    //The service service executes the function in Constructor mode hence the two commented lines in the AppConfig function get added
    app.service("ContactDataSvc", function () {
      //var this = {};
      this.contacts = [
        {
            "gender": "female",
            "name": {
              "title": "Ms",
              "first": "Bibiana",
              "last": "Nascimento"
            },
            "location": {
              "street": {
                "number": 2662,
                "name": "Rua Onze "
              },
              "city": "Divinópolis",
              "state": "Goiás",
              "country": "Brazil",
              "postcode": 72808,
              "coordinates": {
                "latitude": "-76.5457",
                "longitude": "143.5916"
              },
              "timezone": {
                "offset": "0:00",
                "description": "Western Europe Time, London, Lisbon, Casablanca"
              }
            },
            "email": "bibiana.nascimento@example.com",
            "login": {
              "uuid": "1ac74745-bf01-4f60-8609-4536c9552017",
              "username": "organicfish408",
              "password": "1234qwer",
              "salt": "9dh9xdHx",
              "md5": "240a1e52ad1a4bd70bdc2e13998af57c",
              "sha1": "d312224d38888bfd2ac0762dd3addfcfc101f298",
              "sha256": "0aca088c3ee20757c662e22d0d5581b50b25819d852e090901c45ac2df818c58"
            },
            "dob": {
              "date": "1957-06-10T18:55:13.776Z",
              "age": 65
            },
            "registered": {
              "date": "2009-09-15T11:27:24.986Z",
              "age": 13
            },
            "phone": "(53) 3100-4022",
            "cell": "(90) 5627-9075",
            "id": {
              "name": "",
              "value": null
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/women/73.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
            },
            "nat": "BR"
          },
          {
            "gender": "male",
            "name": {
              "title": "Mr",
              "first": "بردیا",
              "last": "احمدی"
            },
            "location": {
              "street": {
                "number": 8125,
                "name": "فلاحی"
              },
              "city": "اهواز",
              "state": "ایلام",
              "country": "Iran",
              "postcode": 71758,
              "coordinates": {
                "latitude": "35.4157",
                "longitude": "-14.3174"
              },
              "timezone": {
                "offset": "+5:00",
                "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
              }
            },
            "email": "brdy.hmdy@example.com",
            "login": {
              "uuid": "40ad922a-eccc-4e79-8015-4d574969a175",
              "username": "biggoose326",
              "password": "1228",
              "salt": "7UXV4CMG",
              "md5": "395194ed8251e6568a0a02cc0265d322",
              "sha1": "e895664b315d4c77cec2b118fd71b6d4119077ca",
              "sha256": "cf92e65589c007bb2f990e346428770508952f44a236dd97963a886f8e6d4411"
            },
            "dob": {
              "date": "1991-04-10T14:55:24.470Z",
              "age": 31
            },
            "registered": {
              "date": "2007-11-26T23:54:04.123Z",
              "age": 15
            },
            "phone": "025-45614393",
            "cell": "0900-900-5660",
            "id": {
              "name": "",
              "value": null
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/44.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
            },
            "nat": "IR"
          },
          {
            "gender": "male",
            "name": {
              "title": "Mr",
              "first": "Otto",
              "last": "Hiltunen"
            },
            "location": {
              "street": {
                "number": 9456,
                "name": "Aleksanterinkatu"
              },
              "city": "Savitaipale",
              "state": "Satakunta",
              "country": "Finland",
              "postcode": 25311,
              "coordinates": {
                "latitude": "-11.4222",
                "longitude": "-6.2499"
              },
              "timezone": {
                "offset": "+1:00",
                "description": "Brussels, Copenhagen, Madrid, Paris"
              }
            },
            "email": "otto.hiltunen@example.com",
            "login": {
              "uuid": "b27f0ca2-d4bb-4a77-981a-3f3645a6c81a",
              "username": "bigostrich275",
              "password": "killkill",
              "salt": "ZqSRNEC2",
              "md5": "5aefdab0be6c45b06af5fcd8cdfd57c0",
              "sha1": "f26ae25f28429b7951a7c8db00504862c8ab7d96",
              "sha256": "a5a4601d92d515d7dd44ef0433a93a7935d3fb109d7912197f16331c52f7d713"
            },
            "dob": {
              "date": "1995-09-16T17:11:22.310Z",
              "age": 27
            },
            "registered": {
              "date": "2005-10-31T18:16:49.437Z",
              "age": 17
            },
            "phone": "04-364-751",
            "cell": "046-284-97-80",
            "id": {
              "name": "HETU",
              "value": "NaNNA671undefined"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/40.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
            },
            "nat": "FI"
          },
          {
            "gender": "female",
            "name": {
              "title": "Mrs",
              "first": "Sara",
              "last": "Ahola"
            },
            "location": {
              "street": {
                "number": 5933,
                "name": "Reijolankatu"
              },
              "city": "Simo",
              "state": "Uusimaa",
              "country": "Finland",
              "postcode": 92924,
              "coordinates": {
                "latitude": "-7.1756",
                "longitude": "35.2937"
              },
              "timezone": {
                "offset": "+2:00",
                "description": "Kaliningrad, South Africa"
              }
            },
            "email": "sara.ahola@example.com",
            "login": {
              "uuid": "d0989acf-e93f-470d-bde3-aefc91edea60",
              "username": "blueostrich941",
              "password": "tucker",
              "salt": "Mn8EcYR1",
              "md5": "ca1c290f8ae1cccb4622f79fd1306ce0",
              "sha1": "2551eb3a17d55542bf4d18d6e5fd281774159688",
              "sha256": "05aad99633106c44a5566bb3ad67bd84ab414ab928d1693f45a79b9780e195bd"
            },
            "dob": {
              "date": "1995-09-29T11:05:01.620Z",
              "age": 27
            },
            "registered": {
              "date": "2016-01-18T03:39:11.254Z",
              "age": 6
            },
            "phone": "02-889-630",
            "cell": "046-172-41-35",
            "id": {
              "name": "HETU",
              "value": "NaNNA784undefined"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/women/58.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
            },
            "nat": "FI"
          }
      ];
      //return this;
    }); //new AppConfig()
  })();
  