/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1268fae6cda2b45b0ddd914b293a7ef7"
  },
  {
    "url": "assets/css/0.styles.684dd12f.css",
    "revision": "42f3d384c3290310d92bed2e2e488d6d"
  },
  {
    "url": "assets/img/css01.7cb482e9.png",
    "revision": "7cb482e94b35dd0a602d28ed13251dac"
  },
  {
    "url": "assets/img/download.b624d0f6.png",
    "revision": "b624d0f6ef84afc39d6ddca971a065bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/version.c80560d2.png",
    "revision": "c80560d2d2610d6b5ff443d4d012ba74"
  },
  {
    "url": "assets/img/versiontable.4cc8bda7.png",
    "revision": "4cc8bda7129ee9ade92f9a15db42ad6a"
  },
  {
    "url": "assets/js/10.ab46e7c8.js",
    "revision": "6ab8de1549af10950ea51a6164cc05e0"
  },
  {
    "url": "assets/js/11.bdd1bcbb.js",
    "revision": "a56360cf0fc2470bedf524efffcf9bd0"
  },
  {
    "url": "assets/js/12.7b4de923.js",
    "revision": "a582ea79d1e5eb0f86d63539558ecdaf"
  },
  {
    "url": "assets/js/13.37bccccc.js",
    "revision": "8a5e371e527efcf6810e5179bfbb3de0"
  },
  {
    "url": "assets/js/14.ccde06f7.js",
    "revision": "c5048e2f3232f563441b8bad90d217d2"
  },
  {
    "url": "assets/js/15.b23050ba.js",
    "revision": "aee35529dd68cb4e90a089a78302a812"
  },
  {
    "url": "assets/js/16.4d12f0d2.js",
    "revision": "e7723b51f0082bd5f96a431c14cc2121"
  },
  {
    "url": "assets/js/17.861e12b5.js",
    "revision": "5172eb011cd2a031340b37a9daa534e8"
  },
  {
    "url": "assets/js/18.f0faa1d7.js",
    "revision": "c792c52559b076803f065931a933c6d8"
  },
  {
    "url": "assets/js/19.0834b430.js",
    "revision": "649c1260c03631cccafc9037e7ae1dc9"
  },
  {
    "url": "assets/js/2.e252a344.js",
    "revision": "1d1203997e3b2591eed3aa0e70fdfd12"
  },
  {
    "url": "assets/js/20.72656569.js",
    "revision": "97768f1af9f5ea42079a94e8b8cb3e9c"
  },
  {
    "url": "assets/js/21.8ca58c04.js",
    "revision": "d04d73047d9eec67a06c668e915f8adc"
  },
  {
    "url": "assets/js/22.234b0a3f.js",
    "revision": "efb80e732fc627b85ff02f85d74cdec8"
  },
  {
    "url": "assets/js/23.66c53c46.js",
    "revision": "aa96e84e76ddc63cc02f82c0a8f61454"
  },
  {
    "url": "assets/js/24.5d15bf02.js",
    "revision": "681c53127894a57e342efc9e7a3782c8"
  },
  {
    "url": "assets/js/25.d5fdf813.js",
    "revision": "2774d5458c7c00858c58f041a00e1e12"
  },
  {
    "url": "assets/js/26.d33c7f1e.js",
    "revision": "214b4d5d6a0f85818e003277e8093631"
  },
  {
    "url": "assets/js/27.1a1589e4.js",
    "revision": "f00394e7ed0d4c026160504424191541"
  },
  {
    "url": "assets/js/28.786bd896.js",
    "revision": "e3c1b6fae818ca54541479255f2dbb91"
  },
  {
    "url": "assets/js/29.bd546282.js",
    "revision": "203d2599b2b58d884ace443179f2784f"
  },
  {
    "url": "assets/js/3.cd7f7020.js",
    "revision": "7d8cb97bfd866a217876f7ee1af7497b"
  },
  {
    "url": "assets/js/30.c5eb2db5.js",
    "revision": "ef6b2d5292120766c3e80f0377d07b57"
  },
  {
    "url": "assets/js/31.7205f0f5.js",
    "revision": "a12e30a76289866880db24d566c85f8d"
  },
  {
    "url": "assets/js/32.4466c93b.js",
    "revision": "08d69cd308b5efddf5c94f01fa801893"
  },
  {
    "url": "assets/js/33.b47c7c80.js",
    "revision": "a0e46373c3b77280bd3320a5591c06fa"
  },
  {
    "url": "assets/js/34.7bbdcb5f.js",
    "revision": "d43845979c5f727f26411cae6fbbfcd6"
  },
  {
    "url": "assets/js/35.0028dd26.js",
    "revision": "54204f0325c3a332b95ddf67a9fce892"
  },
  {
    "url": "assets/js/36.7d36e51d.js",
    "revision": "ea99f677f7d9b7c2138d92f10e535e85"
  },
  {
    "url": "assets/js/37.3f983ca7.js",
    "revision": "543fcba14baa78b2845a5150dc313265"
  },
  {
    "url": "assets/js/38.04299ecf.js",
    "revision": "52ed946a0f9e097deaef3274ded60dcc"
  },
  {
    "url": "assets/js/39.46bf1693.js",
    "revision": "0fb79ea0f4492c15d7154eac24e2103f"
  },
  {
    "url": "assets/js/4.c46d92ce.js",
    "revision": "df66d6be25530d2f51c2cf44d7120360"
  },
  {
    "url": "assets/js/40.2dfce58d.js",
    "revision": "705e0261c6eb6be9b098e2ebc68d7155"
  },
  {
    "url": "assets/js/41.567bc6b7.js",
    "revision": "8cf3d77e8bb40ea0bd860b26cd38b2ca"
  },
  {
    "url": "assets/js/42.2221e8d4.js",
    "revision": "3f1cb4782a50b19f220582bfd6bc8e3b"
  },
  {
    "url": "assets/js/43.3a5fa5d7.js",
    "revision": "28851db5754cfa0f260c98c67ded2fd3"
  },
  {
    "url": "assets/js/44.25c83621.js",
    "revision": "038b5406114cd1cc3d647ca5d4c7d852"
  },
  {
    "url": "assets/js/45.8f7fe9e5.js",
    "revision": "2fc06582fd3f0be168abb338fe12062f"
  },
  {
    "url": "assets/js/46.6117f0ab.js",
    "revision": "56a103aa607c91084aa0abd0e333abb5"
  },
  {
    "url": "assets/js/48.4aa7ddad.js",
    "revision": "0d2347650da35e17407e4676c782cb9f"
  },
  {
    "url": "assets/js/49.81f15faf.js",
    "revision": "9ccf266aefd49ae89e2d1cc67e2639b0"
  },
  {
    "url": "assets/js/5.38b3e286.js",
    "revision": "3b466b370991e808b61ee0b51b118221"
  },
  {
    "url": "assets/js/50.1b516ac1.js",
    "revision": "1904253f72ab854bc7987763e31bf45b"
  },
  {
    "url": "assets/js/51.dd6e884f.js",
    "revision": "27b15ad8d9572c1d4deaa97142522b0c"
  },
  {
    "url": "assets/js/52.06ecf575.js",
    "revision": "8f6f62fdc3170959f4207753147a63ad"
  },
  {
    "url": "assets/js/53.18160f00.js",
    "revision": "0675dfdf1282435ab45921e13375aae1"
  },
  {
    "url": "assets/js/54.53e6959c.js",
    "revision": "9144bf1203041a66654b267f721758ec"
  },
  {
    "url": "assets/js/55.6d177f20.js",
    "revision": "03b43605b9e040f084127a7c650c4828"
  },
  {
    "url": "assets/js/56.16099169.js",
    "revision": "4c3d26923503e3fa229f72764554d173"
  },
  {
    "url": "assets/js/57.767a8adc.js",
    "revision": "dcee76b9f7b38ffae2e54530b7d1b60d"
  },
  {
    "url": "assets/js/58.61f61563.js",
    "revision": "31b5324919339a667b882f08f4a4cf22"
  },
  {
    "url": "assets/js/59.80bd23aa.js",
    "revision": "1f204a8eba008a6a80598409fbabf973"
  },
  {
    "url": "assets/js/6.a8391b77.js",
    "revision": "35f307cec5323fe00c491262fd75d1c4"
  },
  {
    "url": "assets/js/60.a6ba1e81.js",
    "revision": "75389d9bcda0bd840d8ccec167b6bd9d"
  },
  {
    "url": "assets/js/61.8cbb2e0f.js",
    "revision": "ccbe0f2a23c9133df19cd86998cafbcf"
  },
  {
    "url": "assets/js/62.27ad5fd9.js",
    "revision": "06ace1307481627fa59966348287ffc6"
  },
  {
    "url": "assets/js/7.a7879395.js",
    "revision": "cd62a332a924ae2e102571195dc8e191"
  },
  {
    "url": "assets/js/8.ce81400e.js",
    "revision": "e1dc20c37978920addae967276da99ff"
  },
  {
    "url": "assets/js/9.428519ae.js",
    "revision": "a1dd6915742a1586c94be4211d4d7397"
  },
  {
    "url": "assets/js/app.e2bd7cff.js",
    "revision": "ee0037ad620bb3c8cbac899059344cb4"
  },
  {
    "url": "bakend/database/mysql/index.html",
    "revision": "ce3e6ff9366c26c0f6369428ed7f5a45"
  },
  {
    "url": "bakend/database/sqlite/index.html",
    "revision": "e1c3a585da280a17253e757377b3ba37"
  },
  {
    "url": "bakend/database/sqlserver/index.html",
    "revision": "63932487218543936186b28397451d2f"
  },
  {
    "url": "bakend/develop/aspnetcore/index.html",
    "revision": "205c94398baafa4433feb1f4b915fdc5"
  },
  {
    "url": "bakend/develop/csharpspec/datetime.html",
    "revision": "9ed6358bfe8aec1a3f5181421679cc71"
  },
  {
    "url": "bakend/develop/csharpspec/index.html",
    "revision": "bf3e0094d2d4093f5d13d05bd3046c8e"
  },
  {
    "url": "bakend/develop/csharpspec/int.html",
    "revision": "c314d1f107935c1fe6ffeadedba0a3ee"
  },
  {
    "url": "bakend/develop/csharpspec/is.html",
    "revision": "c6e69d7155f1253f5b13fb047896a0a6"
  },
  {
    "url": "bakend/develop/csharpspec/string.html",
    "revision": "f43fab1323e672d00b6956f9be12895f"
  },
  {
    "url": "bakend/develop/design/index.html",
    "revision": "d54cf0241e25237103f7e7f398bf398d"
  },
  {
    "url": "bakend/develop/linq/index.html",
    "revision": "680022d397e690a85614cd79cb8553e6"
  },
  {
    "url": "bakend/nuget/common/index.html",
    "revision": "2e7bb09e1785148f37b72d2f1d01c834"
  },
  {
    "url": "bakend/nuget/fullspec/index.html",
    "revision": "4fb7d86cb8dae7dce6bfb10cac04dc15"
  },
  {
    "url": "bakend/nuget/fullspec/nlog/configuration.html",
    "revision": "dc230697dde2640668fa0976f0ca1555"
  },
  {
    "url": "bakend/nuget/fullspec/nlog/index.html",
    "revision": "a5493cdaa1e83fc577ecfcdd86a0da79"
  },
  {
    "url": "bakend/nuget/fullspec/npoi/index.html",
    "revision": "8a6ee816fc656568de9bc1ff0ee70d50"
  },
  {
    "url": "bakend/nuget/fullspec/npoi/npoihelper-demo.html",
    "revision": "b9b13d0829fa1d92ca17fb13caae3745"
  },
  {
    "url": "bakend/nuget/fullspec/npoi/npoihelper.html",
    "revision": "ab842edc74d645300329687d6a4ab28e"
  },
  {
    "url": "frontend/common/css/index.html",
    "revision": "d079293c2996431bc19fe045da278f0f"
  },
  {
    "url": "frontend/common/html/index.html",
    "revision": "f5236ed6ef0a0d2723d0d6ed056d98b1"
  },
  {
    "url": "frontend/common/javascript/airbinSpec.html",
    "revision": "1e11fc9ef6181e0be89d28e2eda40d7e"
  },
  {
    "url": "frontend/common/javascript/index.html",
    "revision": "e8112d960ebc40a626d11ea7028ee817"
  },
  {
    "url": "frontend/common/javascript/string.html",
    "revision": "8bc06762a41c5f1f1920fdbaac83309e"
  },
  {
    "url": "frontend/common/javascript/truethy.html",
    "revision": "3563fd26c59f7d5c028cac50ccdacd32"
  },
  {
    "url": "frontend/common/skill/index.html",
    "revision": "0eec7a7dda8d631a0818905bd88f99cd"
  },
  {
    "url": "frontend/common/vue/index.html",
    "revision": "de8c060b929790fb539b6df1c220ed6d"
  },
  {
    "url": "frontend/extra/framework/index.html",
    "revision": "983eb7f931d640340b78476ecf3166a7"
  },
  {
    "url": "frontend/extra/langSpec/index.html",
    "revision": "e49817c5f4c9e8fa3b4dfddd9c40e34c"
  },
  {
    "url": "frontend/extra/langSpec/jsAirbin.html",
    "revision": "957449ba1e47bea5ce20b01081aa4ac9"
  },
  {
    "url": "frontend/extra/langSpec/yaml.html",
    "revision": "df6dce71351cfe7071a13e01fa0c829e"
  },
  {
    "url": "frontend/extra/plugins/index.html",
    "revision": "9f288c65d1e33a33fc622085ac4b9775"
  },
  {
    "url": "frontend/extra/plugins/jquery-uniform.html",
    "revision": "e8c43b9c46ab4a5567ed1f0998625c7a"
  },
  {
    "url": "frontend/extra/plugins/jquery-validate.html",
    "revision": "c8c69fa99303405872f7f42808be21cd"
  },
  {
    "url": "frontend/extra/plugins/jquery.html",
    "revision": "4abdc3feb344cb331971e4e53301ac21"
  },
  {
    "url": "guide/index.html",
    "revision": "a8c725449071f0fdf39a0013bc2dbc27"
  },
  {
    "url": "img/488AC658.gif",
    "revision": "e4368c9f14304ddf69c09672a96c305c"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "img/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "img/css01.png",
    "revision": "7cb482e94b35dd0a602d28ed13251dac"
  },
  {
    "url": "img/download.png",
    "revision": "b624d0f6ef84afc39d6ddca971a065bd"
  },
  {
    "url": "img/image-20201003161449118.png",
    "revision": "94bd6488cfc9fffa0bfccd027b5370f4"
  },
  {
    "url": "img/image-20201003161547386.png",
    "revision": "fe971e9ee44be7b97d7166305c4b7eac"
  },
  {
    "url": "img/image-20201003185050307.png",
    "revision": "4038daf6ac090d1902007349f8a32a05"
  },
  {
    "url": "img/version.png",
    "revision": "c80560d2d2610d6b5ff443d4d012ba74"
  },
  {
    "url": "img/versiontable.png",
    "revision": "4cc8bda7129ee9ade92f9a15db42ad6a"
  },
  {
    "url": "index.html",
    "revision": "ef0d4888152856cb332cc74fafa0af12"
  },
  {
    "url": "live2d/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "live2d/nico/assets/moc/nico.2048/texture_00.png",
    "revision": "90517165911a785cc29a71c66c2c5867"
  },
  {
    "url": "live2d/nico/assets/moc/nico.2048/texture_01.png",
    "revision": "720a22559bb19baa113d3f8ec700ac74"
  },
  {
    "url": "live2d/nico/assets/moc/nico.2048/texture_02.png",
    "revision": "873344a63dbc0bc515d086ffb4403c27"
  },
  {
    "url": "software/flowchat.html",
    "revision": "40c98ecc74c23dd44cc4c369dbfaa97e"
  },
  {
    "url": "software/index.html",
    "revision": "f01433e4c8411a6d631e81d6bd2b033a"
  },
  {
    "url": "software/markdown.html",
    "revision": "00f3cb40881e3b130f6f80437c3c5987"
  },
  {
    "url": "software/npm.html",
    "revision": "a741afb20091592703cb7454342a1e68"
  },
  {
    "url": "software/typora.html",
    "revision": "1336a9daa9652b144abf4a5ee5f11576"
  },
  {
    "url": "software/visualStudio.html",
    "revision": "c88602409233895dd77fae6c78a1e5c1"
  },
  {
    "url": "version/common/index.html",
    "revision": "64117ef939a2997efefb64777081a4c2"
  },
  {
    "url": "version/git/index.html",
    "revision": "906f0286b27611d66aacb61f1d02c566"
  },
  {
    "url": "windows/commandline/bash/index.html",
    "revision": "ebc748f2343ef2f9f7eed7a5a8114411"
  },
  {
    "url": "windows/commandline/dos/index.html",
    "revision": "291ce34230aae19d66ff42a29f289964"
  },
  {
    "url": "windows/commandline/powershell/help-about.html",
    "revision": "c603ff7c7486525c5a3ccd188c7be2e8"
  },
  {
    "url": "windows/commandline/powershell/index.html",
    "revision": "dc1c36d4ab402e88beb1d2c50218bc24"
  },
  {
    "url": "windows/Common/regedit.html",
    "revision": "1f06f6cc35cf8a7b00ee9bdcb2a16b5a"
  },
  {
    "url": "windows/Common/systemperformance/cdisk.html",
    "revision": "c78a6571eee89ab0a844f28916952511"
  },
  {
    "url": "windows/Common/windows-usage/index.html",
    "revision": "a91386cc306deee65f92c9f53219dcb3"
  },
  {
    "url": "windows/tools/fireWall/index.html",
    "revision": "67cedcf73e2e140a9848ced00d44cdf6"
  },
  {
    "url": "windows/tools/wordEdit/excel.html",
    "revision": "a9f7521010a459188cb5d266105c58be"
  },
  {
    "url": "windows/tools/wordEdit/index.html",
    "revision": "7e690dbd755b416b3c5e553ac372334b"
  },
  {
    "url": "windows/tools/wordEdit/regex.html",
    "revision": "bb9307d90b6bd61c2e8edda49fcdb3e7"
  },
  {
    "url": "windows/tools/wordEdit/usage.html",
    "revision": "f99f829ed2fddde93fdd0b7e7ff80c95"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
