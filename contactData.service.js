(function () {
    angular
        .module("contactAppModule")
        .service("contactDataSvc", function (AppNameSvc) {
            this.contacts = [

                {
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "armando",
                        "last": "da cunha"
                    },
                    "location": {
                        "street": "6997 avenida da democracia",
                        "city": "simões filho",
                        "state": "pernambuco",
                        "postcode": 87069
                    },
                    "email": "armando.dacunha@example.com",
                    "login": {
                        "username": "blackswan500",
                        "password": "camaro",
                        "salt": "Z867kDQK",
                        "md5": "8b7d7cb3d4ff0512bddd8d730b02d224",
                        "sha1": "71a56bc196b2e3a407e7c5128f0a39bd798946c4",
                        "sha256": "0b4df71cda28cdfdd17261969448c3e08a08e2e9c339c3e1f11e1fa6f55953d4"
                    },
                    "dob": "1945-01-16 16:38:06",
                    "registered": "2007-06-13 00:06:43",
                    "phone": "(63) 2829-5182",
                    "cell": "(00) 2747-3678",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/69.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
                    }
                },
                {
                    "gender": "female",
                    "name": {
                        "title": "miss",
                        "first": "elizabeth",
                        "last": "brar"
                    },
                    "location": {
                        "street": "5836 concession road 6",
                        "city": "belmont",
                        "state": "yukon",
                        "postcode": 86925
                    },
                    "email": "elizabeth.brar@example.com",
                    "login": {
                        "username": "smallrabbit417",
                        "password": "bigben",
                        "salt": "N1YUagwp",
                        "md5": "c24296226aac42cc7d8f80616ec95899",
                        "sha1": "8cd67f716628b7b59f57f7ed020434898ee39c09",
                        "sha256": "6d86893f59101b263f5152e43b7887eb7021f3da88e0ef8792fd86c68aa4ce61"
                    },
                    "dob": "1980-07-29 21:17:04",
                    "registered": "2009-10-02 13:12:22",
                    "phone": "451-645-3822",
                    "cell": "851-503-6659",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/1.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
                    }
                },
                {
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "kadir",
                        "last": "aybar"
                    },
                    "location": {
                        "street": "6842 doktorlar cd",
                        "city": "bayburt",
                        "state": "konya",
                        "postcode": 18666
                    },
                    "email": "kadir.aybar@example.com",
                    "login": {
                        "username": "yellowpeacock258",
                        "password": "pulsar",
                        "salt": "9z42cWhk",
                        "md5": "2c5d6f059df6ba19024b16fc57331d88",
                        "sha1": "1cc685599ff97db7dbab9af17cc86f6333d34b6c",
                        "sha256": "748965cedb465a904b229f5d44f5f240a4d3c3aa452b701bbde33732169e2e05"
                    },
                    "dob": "1955-05-08 10:31:21",
                    "registered": "2012-05-14 06:11:34",
                    "phone": "(994)-961-4007",
                    "cell": "(919)-362-9277",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/45.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/45.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/45.jpg"
                    }
                },
                {
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "josh",
                        "last": "knight"
                    },
                    "location": {
                        "street": "2335 kings road",
                        "city": "aberdeen",
                        "state": "west sussex",
                        "postcode": "YN79 5HR"
                    },
                    "email": "josh.knight@example.com",
                    "login": {
                        "username": "bigrabbit805",
                        "password": "melons",
                        "salt": "OhzrpYLr",
                        "md5": "0d3b329a6ed635cfeb5dec7d0730ddf8",
                        "sha1": "c4e6dcfebbf75171cb158e14b12a80e40cbe2b15",
                        "sha256": "b2e103d7a2999e54bf51dc3390a115dd4e94acbdfb7bcefc47d23aad56feb1cc"
                    },
                    "dob": "1993-09-16 07:51:04",
                    "registered": "2012-07-31 12:48:28",
                    "phone": "016977 77951",
                    "cell": "0729-528-860",
                    "id": {
                        "name": "NINO",
                        "value": "HR 62 51 56 E"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/3.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/3.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/3.jpg"
                    }
                }, {
                    "gender": "male",
                    "name": {
                        "title": "mr",
                        "first": "carter",
                        "last": "jenkins"
                    },
                    "location": {
                        "street": "1561 w sherman dr",
                        "city": "murfreesboro",
                        "state": "colorado",
                        "postcode": 21023
                    },
                    "email": "carter.jenkins@example.com",
                    "login": {
                        "username": "tinygorilla449",
                        "password": "pilot",
                        "salt": "Sdn4FDtA",
                        "md5": "75a56fc54fa3f4c7aa2f075ffe7ecc53",
                        "sha1": "1620deb8639de9c3d3f0ba26282ba01e178d5362",
                        "sha256": "f3254629312dbf675267cd647053e113ac68ae1ec6b6800da58e61a7294dae06"
                    },
                    "dob": "1972-11-23 13:01:54",
                    "registered": "2015-11-10 10:38:41",
                    "phone": "(211)-114-0655",
                    "cell": "(807)-204-3909",
                    "id": {
                        "name": "SSN",
                        "value": "396-65-6615"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/91.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
                    }
                }, {
                    "gender": "female",
                    "name": {
                        "title": "ms",
                        "first": "jennie",
                        "last": "carlson"
                    },
                    "location": {
                        "street": "2997 ash dr",
                        "city": "coral springs",
                        "state": "south carolina",
                        "postcode": 10196
                    },
                    "email": "jennie.carlson@example.com",
                    "login": {
                        "username": "yellowswan746",
                        "password": "warez",
                        "salt": "j33CxefT",
                        "md5": "dbb1a75ce47ba982b4ac9537cd99ded4",
                        "sha1": "348d8c49d1840a54bc333f637a65465c82bf714e",
                        "sha256": "cc2d7bed2458aadf33c85f22578fef5fe12727381bc4447b813910d97b0b256d"
                    },
                    "dob": "1979-08-29 11:50:23",
                    "registered": "2006-02-06 18:10:04",
                    "phone": "(843)-627-7243",
                    "cell": "(010)-425-1671",
                    "id": {
                        "name": "SSN",
                        "value": "412-46-5014"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/66.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/66.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/66.jpg"
                    }
                }
            ];
        });
})();