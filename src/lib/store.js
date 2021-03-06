/**
 * This is a completely Mock store - all data is fake
 */

const store = {

  // Logged in User info
  "account": {
    "userId": "ALICE"
  },

  // Fake users 
  "users": {
    "ALICE": {
      "id": "ALICE",
      "hodl": [1, 2, 3, 4],
      "address": "0x64c53376Bc965826955c9693F8F03B5398b077FF", 
      "pubKey": "o963R0sjgfHyc7Q7GiyWdpcjhsnM6aX0rFarIVa1sRc=", 
      "privKey": "c11e149971763375fa1011d0135bc251c9bcde0364727185d54c9fc476030161"
    },
    "BARRY": {
      "id": "BARRY",
      "hodl": [5, 6, 7],
      "address": "0x01d6bEB66543ad7cCEe2b68CaE7Fe36Db3a16AC8", 
      "pubKey": "uTW6GKQwKPoyFJrAp9r4EsHpUZ0HGHzVohY42E5uCnc=", 
      "privKey": "fcc244270d06217ae16a4420902a71d3973dfcff9a8cc7135ec8a0d3e5425c71"
    }
  },

  // Fake transactions
  "bids": [
    {
      "id": "hzdfkguhd",
      "productId": 1,
      "wei": 1000000000000000000,
      "type": "SENT",
      "sender": "BARRY",
      "pubKey": "uTW6GKQwKPoyFJrAp9r4EsHpUZ0HGHzVohY42E5uCnc=", 
      "receiver": "ALICE"
    },
    {
      "id": "sdlfjhhwei",
      "productId": 2,
      "wei": 2000000000000000000,
      "type": "RECIEVED",
      "sender": "BARRY",
      "pubKey": "uTW6GKQwKPoyFJrAp9r4EsHpUZ0HGHzVohY42E5uCnc=", 
      "receiver": "ALICE"
    },
    {
      "id": "dfgkjgert",
      "productId": 3,
      "wei": 3000000000000000000,
      "type": "RECIEVED",
      "sender": "BARRY",
      "pubKey": "uTW6GKQwKPoyFJrAp9r4EsHpUZ0HGHzVohY42E5uCnc=", 
      "receiver": "ALICE"
    },
    {
      "id": "aewiuwoief",
      "productId": 4,
      "wei": 4000000000000000000,
      "type": "RECIEVED",
      "sender": "BARRY",
      "pubKey": "uTW6GKQwKPoyFJrAp9r4EsHpUZ0HGHzVohY42E5uCnc=", 
      "receiver": "ALICE"
    },
    
    {
      "id": "45645646",
      "productId": 5,
      "wei": 1000000000000000000,
      "type": "SENT",
      "sender": "ALICE",
      "pubKey": "o963R0sjgfHyc7Q7GiyWdpcjhsnM6aX0rFarIVa1sRc=", 
      "receiver": "BARRY"
    },
    {
      "id": "34534554",
      "productId": 6,
      "wei": 2000000000000000000,
      "type": "RECIEVED",
      "sender": "ALICE",
      "pubKey": "o963R0sjgfHyc7Q7GiyWdpcjhsnM6aX0rFarIVa1sRc=", 
      "receiver": "BARRY"
    },
    {
      "id": "55675667",
      "productId": 7,
      "wei": 3000000000000000000,
      "type": "RECIEVED",
      "sender": "ALICE",
      "pubKey": "o963R0sjgfHyc7Q7GiyWdpcjhsnM6aX0rFarIVa1sRc=", 
      "receiver": "BARRY"
    }
  ]
}
export default store