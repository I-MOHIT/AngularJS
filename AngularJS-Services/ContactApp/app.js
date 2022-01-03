var app = angular.module("ContactApp",[]);

app.controller("ContactCtrl",ContactCtrl);

app.controller("HeaderCtrl",HeaderCtrl);
app.controller("FooterCtrl",FooterCtrl);

//app.constant
app.value("AppDataSvc",{
  "name":"Contact App",
  "author":"Mohit",
  "company":"ABCD",
  "version":1
});

app.value("LoggingSvc", function(){
  console.log("Hello");
});

function ContactCtrl(){
    this.contacts = [
        {
            "gender": "male",
            "name": {
              "title": "Monsieur",
              "first": "Norbert",
              "last": "Fleury"
            },
            "location": {
              "street": {
                "number": 1241,
                "name": "Place du 8 Février 1962"
              },
              "city": "Mettmenstetten",
              "state": "Neuchâtel",
              "country": "Switzerland",
              "postcode": 4689,
              "coordinates": {
                "latitude": "-55.6771",
                "longitude": "-16.7021"
              },
              "timezone": {
                "offset": "+7:00",
                "description": "Bangkok, Hanoi, Jakarta"
              }
            },
            "email": "norbert.fleury@example.com",
            "login": {
              "uuid": "b4d14875-0690-4975-beb6-67936941106a",
              "username": "silvergorilla457",
              "password": "teresa",
              "salt": "dyJaLDwQ",
              "md5": "cacae61da91aea3d3a8afaffb958a08f",
              "sha1": "5484af3d60dae49c7ebfbf805672a1f0a658ed78",
              "sha256": "7d716bffcc5cb9282c6ec5e02e76a3bc975dc01ceb69b957c9b18f1c9c154eb1"
            },
            "dob": {
              "date": "1970-10-11T19:55:48.686Z",
              "age": 51
            },
            "registered": {
              "date": "2012-02-13T18:01:58.324Z",
              "age": 9
            },
            "phone": "077 200 03 67",
            "cell": "076 985 28 58",
            "id": {
              "name": "AVS",
              "value": "756.0527.3113.60"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/24.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
            },
            "nat": "CH"
          },
          {
            "gender": "female",
            "name": {
              "title": "Mrs",
              "first": "Camille",
              "last": "Chan"
            },
            "location": {
              "street": {
                "number": 5920,
                "name": "Regent Ave"
              },
              "city": "Inwood",
              "state": "Yukon",
              "country": "Canada",
              "postcode": "D7V 3O0",
              "coordinates": {
                "latitude": "-64.2556",
                "longitude": "110.8371"
              },
              "timezone": {
                "offset": "-3:30",
                "description": "Newfoundland"
              }
            },
            "email": "camille.chan@example.com",
            "login": {
              "uuid": "42849c7f-543b-4792-9e9c-9d5e12f66c0d",
              "username": "silverlion862",
              "password": "marines",
              "salt": "soUEKku3",
              "md5": "b7c0441b23bbfc80fc77d41efe95c93c",
              "sha1": "3a2e8c7638b87fc8dc1fff15dbfcc9790faa5d97",
              "sha256": "d7cad77460dcabaa9d551c1472eed6f902d0363b309c0c4064bf4699a1a5077c"
            },
            "dob": {
              "date": "1961-07-30T17:45:34.545Z",
              "age": 60
            },
            "registered": {
              "date": "2018-04-09T21:55:29.397Z",
              "age": 3
            },
            "phone": "194-470-8297",
            "cell": "190-870-6808",
            "id": {
              "name": "",
              "value": null
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/women/8.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/8.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"
            },
            "nat": "CA"
          },
          {
            "gender": "female",
            "name": {
              "title": "Mrs",
              "first": "Isabella",
              "last": "Fernandez"
            },
            "location": {
              "street": {
                "number": 2912,
                "name": "Paddock Way"
              },
              "city": "Melbourne",
              "state": "New South Wales",
              "country": "Australia",
              "postcode": 3163,
              "coordinates": {
                "latitude": "-84.3581",
                "longitude": "102.4285"
              },
              "timezone": {
                "offset": "-8:00",
                "description": "Pacific Time (US & Canada)"
              }
            },
            "email": "isabella.fernandez@example.com",
            "login": {
              "uuid": "63a24992-4db4-420a-b055-302f7fa9b725",
              "username": "goldenduck110",
              "password": "forgot",
              "salt": "YQskbPQa",
              "md5": "2423634e324d20a706c2a5c281b751bf",
              "sha1": "f55164ad517100dcd2a1284f5bfe3a0aaa38a2f3",
              "sha256": "52363a22f17b1b8c69a975d77fa0cbc5e048f8949104d8fa8644ee9a20d53033"
            },
            "dob": {
              "date": "1952-09-06T08:52:01.964Z",
              "age": 69
            },
            "registered": {
              "date": "2018-09-01T05:04:50.267Z",
              "age": 3
            },
            "phone": "09-6574-1306",
            "cell": "0424-610-295",
            "id": {
              "name": "TFN",
              "value": "560690410"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/women/43.jpg",
              "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
            },
            "nat": "AU"
          },
          {
            "gender": "male",
            "name": {
              "title": "Mr",
              "first": "Yann",
              "last": "Aubert"
            },
            "location": {
              "street": {
                "number": 4516,
                "name": "Route de Genas"
              },
              "city": "Perpignan",
              "state": "Indre-et-Loire",
              "country": "France",
              "postcode": 22486,
              "coordinates": {
                "latitude": "-1.2274",
                "longitude": "-146.2815"
              },
              "timezone": {
                "offset": "+5:30",
                "description": "Bombay, Calcutta, Madras, New Delhi"
              }
            },
            "email": "yann.aubert@example.com",
            "login": {
              "uuid": "f0b75b72-3d24-478f-8ede-895baa84de85",
              "username": "smallswan605",
              "password": "teddy",
              "salt": "m1lrBG7F",
              "md5": "055d54aa7b9f82c850059012cea8b3ab",
              "sha1": "fbe0b2e37cf46137c176c42485923669b8be40c3",
              "sha256": "88fe91d8d434bd788ca85f0c9694a9a7a8daec174a55f499914b18f909289625"
            },
            "dob": {
              "date": "1975-05-28T23:09:27.492Z",
              "age": 46
            },
            "registered": {
              "date": "2007-11-19T03:48:06.807Z",
              "age": 14
            },
            "phone": "04-65-28-95-36",
            "cell": "06-34-74-69-77",
            "id": {
              "name": "INSEE",
              "value": "1NNaN15996342 03"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/69.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
            },
            "nat": "FR"
          }
    ];

    this.selectedContact = this.contacts[2];

    this.selectContact = function(index){
        this.selectedContact=this.contacts[index];
    }

}

function HeaderCtrl(AppDataSvc,LoggingSvc){
  this.appTitle = AppDataSvc.name;
  LoggingSvc();
}

function FooterCtrl(AppDataSvc,LoggingSvc){
  this.appTitle = AppDataSvc.name;
  LoggingSvc();
}