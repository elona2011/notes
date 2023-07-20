// <!-- ```js
// require('crypto').createHash('md5').update('xxxttb').digest('hex').slice(-1)
// ```

// base64
// btoa 加密
// atob 解密

// RSA -->

window.crypto.subtle.generateKey(
  {
    name: "RSA-OAEP",
    modulusLength: 1024, //can be 1024, 2048, or 4096
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
    hash: { name: "SHA-256" }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
  },
  true, //whether the key is extractable (i.e. can be used in exportKey)
  ["encrypt", "decrypt"] //must be ["encrypt", "decrypt"] or ["wrapKey", "unwrapKey"]
).then(function (key) {
  //returns a keypair object
  console.log(key);
  window.crypto.subtle.exportKey(
    "jwk", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
    key.privateKey //can be a publicKey or privateKey, as long as extractable was true
  )
    .then(function (keydata) {
      //returns the exported key data
      console.log('privateKey', JSON.stringify(keydata));
    })
    .catch(function (err) {
      console.error(err);
    });

  window.crypto.subtle.exportKey(
    "jwk", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
    key.publicKey //can be a publicKey or privateKey, as long as extractable was true
  )
    .then(function (keydata) {
      //returns the exported key data
      console.log('publicKey', JSON.stringify(keydata));
    })
    .catch(function (err) {
      console.error(err);
    });
}).catch(function (err) {
  console.error(err);
});

window.crypto.subtle.importKey(
  "jwk", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
  { "alg": "RSA-OAEP-256", "e": "AQAB", "ext": true, "key_ops": ["encrypt"], "kty": "RSA", "n": "nLRWbm-8ib1pj8n1aUR6ErSPPGstcVrqyMfP68ipi1K2249_LugLkpxZwiqr3NnoaRBgZOAlauI_ai5O5Sylbc1K6Gt_ZC2K7nDhWfKUUxhOEQ2dOjJGL4H7VGO2IENyMl3uFVa9BADFsGllBxhLMp6AaPLNlZlyANS4_1KhVuc" },
  {   //these are the algorithm options
    name: "RSA-OAEP",
    hash: { name: "SHA-256" }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
  },
  false, //whether the key is extractable (i.e. can be used in exportKey)
  ["encrypt"] //"encrypt" or "wrapKey" for public key import or
  //"decrypt" or "unwrapKey" for private key imports
)
  .then(function (publicKey) {
    //returns a publicKey (or privateKey if you are importing a private key)
    console.log(publicKey);
    var enc = new TextEncoder(); // always utf-8
    // console.log(enc.encode("hello,zking"));
    window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP",
        //label: Uint8Array([...]) //optional
      },
      publicKey, //from generateKey or importKey above
      enc.encode("hello,zking") //ArrayBuffer of data you want to encrypt
    )
      .then(function (encrypted) {
        //returns an ArrayBuffer containing the encrypted data
        let data = _arrayBufferToBase64(encrypted)
        console.log('encrypted', data);
        function _arrayBufferToBase64(buffer) {
          var binary = '';
          var bytes = new Uint8Array(buffer);
          var len = bytes.byteLength;
          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          return window.btoa(binary);
        }
        debugger

        window.crypto.subtle.importKey(
          "jwk", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
          { "alg": "RSA-OAEP-256", "d": "BFjucuw6UfnwGp3y5y46qBfb8hmpGOrO9liwwyz9zdCII9Q50OPSz7Odu94c3CjWzUoNL-SWCn6SCCXrvhOR1_cLqTylb_tl4ucB4FL0eWIim_BhKScPrcZp3iaEImq78ObsEk3Nsnd0UFbxHD6P1JjUvyPjh12v-gHubn3cug0", "dp": "UcqHgVQKZG5DR4WgXWSYUBj6pUHL0GRv5BWsCK3ZNr516E4kqJdi09bz6jbjITU2wMHojNTt5otEIGzxOcSemQ", "dq": "RWWW_-E_c2_zkdqybKN5VG92dpypi19HM_LW1_3VxdfXcOaT71qehdw3m7U0PnV9T2W-HSMMsG7DN9AdHD6OzQ", "e": "AQAB", "ext": true, "key_ops": ["decrypt"], "kty": "RSA", "n": "nLRWbm-8ib1pj8n1aUR6ErSPPGstcVrqyMfP68ipi1K2249_LugLkpxZwiqr3NnoaRBgZOAlauI_ai5O5Sylbc1K6Gt_ZC2K7nDhWfKUUxhOEQ2dOjJGL4H7VGO2IENyMl3uFVa9BADFsGllBxhLMp6AaPLNlZlyANS4_1KhVuc", "p": "ytQI8voHwQELGU9381bPL44Ila7f5m33U2XxpdDTIxAMJ4-a28-ZgduTXYXsAfDPlervNd9S_ZH8KTynmyj1ew", "q": "xcjlk2my8i1u6hrJ65p9gsOi89JyM4J-ndHf0CLjQzRqqTg4FikZ46RIGHTwYHlvQq-3LbxPcDOydHbov1kKhQ", "qi": "TvWj3AzzLQpXbAbopNgP3x4jvysXpCUJ9_LPPgYkmGHmSsWoxV-2ASCkTuiRvziWT02rXHkczUScx_Zfi6Nv8A" },
          {   //these are the algorithm options
            name: "RSA-OAEP",
            hash: { name: "SHA-256" }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
          },
          false, //whether the key is extractable (i.e. can be used in exportKey)
          ["encrypt"] //"encrypt" or "wrapKey" for public key import or
          //"decrypt" or "unwrapKey" for private key imports
        )
          .then(function (privateKey) {
            //returns a publicKey (or privateKey if you are importing a private key)
            console.log(privateKey);
            var enc = new TextEncoder(); // always utf-8
            // console.log(enc.encode("hello,zking"));
            window.crypto.subtle.decrypt(
              {
                name: "RSA-OAEP",
                //label: Uint8Array([...]) //optional
              },
              privateKey, //from generateKey or importKey above
              encrypted //ArrayBuffer of the data
            )
              .then(function (decrypted) {
                //returns an ArrayBuffer containing the decrypted data
                debugger
                console.log(new Uint8Array(decrypted));
              })
              .catch(function (err) {
                console.error(err);
              });

          })
          .catch(function (err) {
            console.error(err);
          });

      })
      .catch(function (err) {
        console.error(err);
      });
  })
  .catch(function (err) {
    console.error(err);
  });





  // privateKey { "alg": "RSA-OAEP-256", "d": "BFjucuw6UfnwGp3y5y46qBfb8hmpGOrO9liwwyz9zdCII9Q50OPSz7Odu94c3CjWzUoNL-SWCn6SCCXrvhOR1_cLqTylb_tl4ucB4FL0eWIim_BhKScPrcZp3iaEImq78ObsEk3Nsnd0UFbxHD6P1JjUvyPjh12v-gHubn3cug0", "dp": "UcqHgVQKZG5DR4WgXWSYUBj6pUHL0GRv5BWsCK3ZNr516E4kqJdi09bz6jbjITU2wMHojNTt5otEIGzxOcSemQ", "dq": "RWWW_-E_c2_zkdqybKN5VG92dpypi19HM_LW1_3VxdfXcOaT71qehdw3m7U0PnV9T2W-HSMMsG7DN9AdHD6OzQ", "e": "AQAB", "ext": true, "key_ops": ["decrypt"], "kty": "RSA", "n": "nLRWbm-8ib1pj8n1aUR6ErSPPGstcVrqyMfP68ipi1K2249_LugLkpxZwiqr3NnoaRBgZOAlauI_ai5O5Sylbc1K6Gt_ZC2K7nDhWfKUUxhOEQ2dOjJGL4H7VGO2IENyMl3uFVa9BADFsGllBxhLMp6AaPLNlZlyANS4_1KhVuc", "p": "ytQI8voHwQELGU9381bPL44Ila7f5m33U2XxpdDTIxAMJ4-a28-ZgduTXYXsAfDPlervNd9S_ZH8KTynmyj1ew", "q": "xcjlk2my8i1u6hrJ65p9gsOi89JyM4J-ndHf0CLjQzRqqTg4FikZ46RIGHTwYHlvQq-3LbxPcDOydHbov1kKhQ", "qi": "TvWj3AzzLQpXbAbopNgP3x4jvysXpCUJ9_LPPgYkmGHmSsWoxV-2ASCkTuiRvziWT02rXHkczUScx_Zfi6Nv8A" }
  // publicKey { "alg": "RSA-OAEP-256", "e": "AQAB", "ext": true, "key_ops": ["encrypt"], "kty": "RSA", "n": "nLRWbm-8ib1pj8n1aUR6ErSPPGstcVrqyMfP68ipi1K2249_LugLkpxZwiqr3NnoaRBgZOAlauI_ai5O5Sylbc1K6Gt_ZC2K7nDhWfKUUxhOEQ2dOjJGL4H7VGO2IENyMl3uFVa9BADFsGllBxhLMp6AaPLNlZlyANS4_1KhVuc" }