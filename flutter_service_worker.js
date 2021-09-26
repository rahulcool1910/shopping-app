'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "57ab93a4bba0ddcacb49fcbbeb6d0ca4",
"index.html": "5edccb3af3dc45775d381d7b1daf148a",
"/": "5edccb3af3dc45775d381d7b1daf148a",
"main.dart.js": "ec9deb5eb333e64f6fadee16a90b8429",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1990d4987ddd921436f89cf9954a33f7",
".git/config": "997bbae72dfb6d8af0bb851a776ea0ef",
".git/objects/95/b70ea83395f3c0bfdfb3d24127c118ae82e56e": "f3b78e775f0b80bfdb8775f97737b468",
".git/objects/66/7ec46ebb17d984faba8ad36889b245baa457dc": "176e96c97557dc4ae5257639e49f42ef",
".git/objects/3e/efc9e01b87764cd4eef078ddfc7067c6bced5f": "8f8dabb15a725b8272ee6c7ece43872a",
".git/objects/03/1627819af77f7773d90fdddd59f9f312cacec4": "21fe365c866061d08378dd7f634fdcb7",
".git/objects/9b/8931b5c19f6d1185b2d013bd2464e1ead572d0": "3fe98c822e15bd229fd8dc7179802298",
".git/objects/9b/23736381b367890a2b30868680b4dc5a5cac01": "5467e3529d390f50f731b6dbe3c129b3",
".git/objects/6a/909088b4dcba1e58ac2da5a40f087de330fdb0": "5964b9edb22147a086f1c7e4f4418fde",
".git/objects/32/956ac92e8fecb63205e061da069885a55e31b9": "644955b3fb98bd6004b09e5ce882efb3",
".git/objects/32/9de449d5931f7b4c13513d417f94b866f71069": "2d57c213b413622e587f51b66918e72c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/f644d64d2aaf8e7c47d5d326941fc4591a496f": "e81bada5ff1a7b4f33e5fa27cb8a3c68",
".git/objects/51/a105c31e157bf0a1b25c241a51ddd636d89ab1": "b5bf1a3bff86ab7b0c5e63d74d7eb400",
".git/objects/93/01489a9c6d3c116fc31c42dc4b43fb00060876": "0f95cbbf5552b4ae2c9a9283a1a72d0a",
".git/objects/0e/7e0e8a98c28ee9ca12b0b6cb592449fd7ffcb3": "397c5e35ae46e0c8e707503f84165a26",
".git/objects/33/c436c3b34dcdd9f88191b14bcb0b2373537134": "e941bdddd11821d76b27c3483bfbc7dd",
".git/objects/b2/35e7254807dc742840c79273500722dbd760c2": "b0a18d97a7e5238da8a35466d88eef3f",
".git/objects/d0/2e1935295d45e3fa342d0d0c9d3a683fcd059b": "eb625d8370b54fa461da5db497f83111",
".git/objects/be/fbd9e666938f7ac42a07e9308eab62d7720d66": "1d103007f805f0a48222224337409846",
".git/objects/b3/b009fbb255bd240be092c56eeffadc0cae0a56": "3048d96b3288cc3810b7cad169c5e72b",
".git/objects/df/6f4cda72992f6b1a5241de856a3307ae9d0858": "1b9fb9e53e058971f76d23fef44e46ad",
".git/objects/df/678ebb94aa3e694056e29cf244b7a1823036d4": "659f6bff97ef1fb3e600ba22200a4855",
".git/objects/a2/0a12438668530ac8d70cab628b89f9797ba006": "4d56e3299e1c7bfd6c08385a316f9ef4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/11ba22c30af1d2924d79e9cfffe42fb7f5a7be": "cd66471caa1ddb3b7348cef61117dba6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/12e824119f401db88200b883fc2870fb5e3124": "4482f5e5e53b82cddd0ba98488333744",
".git/objects/f3/684038db616ffbb421b49482fedff61e1dce72": "d1738bea40033d5eb9e1404664cd08af",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/87dc699867eb29105f27b270fe5d3256577c04": "7e17a78bed956332c4d90ff26a96efb8",
".git/objects/ee/9de4b3a07d85e18885e5bb76fe7fa6690dab47": "277ba411c76244f3bc2803a26408fd98",
".git/objects/c9/80179916319fd8348c18a5bfb55f4915ef55ac": "3db86ba6117459bec18c33afca438ec5",
".git/objects/fd/f3620c1d2a097217c1346e4180d8664dc7a25a": "fa30a0930ac8bb25642b142d978e2cc0",
".git/objects/fe/738b56338d4de8581660a662c31b5534b671e5": "96772ac6d7a8c06e3eb6284553e818be",
".git/objects/11/a31f7bcf979c26d9540cb39b9b4bb01eb5c300": "4bb92b11d90bdef39d435042f89e6048",
".git/objects/1f/1f1996f7e51dadf16b361277d02071d4d102dd": "254dbc6026c30619cec6af26978d2e8c",
".git/objects/73/35df2205ce9c372da015e4c40a1d5f66a4d6aa": "27d4414f5ffd01732060fc95a06b781d",
".git/objects/1a/81fdcfd3a9c69b48de06ea156d34d1cada21fe": "ed6f28cef4854eda86124b342827225a",
".git/objects/1a/6a383b181f6e78ebe79ab9595a689d9cc91482": "1c07366a758b36dc3194a78393536e22",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/2debd013a22ff71801bac3439e97f5c6858a09": "fa7ef3ffac13ff1121f78e53ebd024c3",
".git/objects/21/e56db09d4e1f7b8fb0e31928cd85c689f938e5": "2b9b7dc3425fd19d895472f75d562d71",
".git/objects/21/fc3f819d24f8c7e81e817a4ae01b4d48cf27b6": "5b6ab3b45d2290ece6325f587cb067bf",
".git/objects/72/5bc27ada016903a3d35f1d1a9cc816406dfe8f": "f8235daccb59ba44f6b9e61d7ea50e7f",
".git/objects/2a/4292d37ceb2297d4dfc3709d277ae7b6b46929": "5554233b5b5c6c7bac85feaca3adb8b4",
".git/objects/2a/f0d44fdedc47c7ad18d6571137667a99d54fe1": "c763fd4ebb93da218d7df2e105eb3981",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/ebfb36e7b2abf98414e3fdb39daebdabfcac33": "d6694ecaae02ba3dce65952b9aa0fa1e",
".git/objects/00/3521e7265d989de4d858e2e7892e4adb755414": "cfff6701369e1e524d73eb028594300a",
".git/objects/5c/da7064d5a97fce3c8b1dc5e66aab1580083aaf": "cc4406dc05e14c57b2da680008ca7c95",
".git/objects/5c/ec94c35fef9e4f262583e1a1e0db73b081b108": "063542b49ddcefca881ad513144265f3",
".git/objects/31/274bb7de9ac5a7f7599e04408991392f759439": "472ff880f8056a993dd1314be90466cf",
".git/objects/53/b5eae32fdbd0cde162b189909242e4654a343c": "ce549a0688aad50fc9c80c9b951f01a7",
".git/objects/5e/2128a9cb96ecaa5781d9a8817efa72e8467cda": "a917f767bc186ed7e92afb7ebf232fe8",
".git/objects/5b/3f597cd408c49bc62de1189d454d6b8a59f2f6": "79bd033c19043c4f11dc693d06ec6c2b",
".git/objects/37/2edff2bda9d413a357357d6e8a1e68093a5d9c": "96776fd9d8f22a1da270902c79ca08aa",
".git/objects/08/e8ba706dd243e05694fd6b907be193e3324b6c": "580f512e6e6f298cc6100b38a2ccddc4",
".git/objects/52/c53023454002a6980787445e60975ec19a4872": "25e4e067e039f8f831f22e121029951e",
".git/objects/97/7de4c29a4a54796b53c1983b7c8a7d829e4371": "43ee868bea0436fd690b88102fd243c4",
".git/objects/0a/5ad6414f62d95bf00cdeaccdd0aa161c425a13": "9712a5b4dbb07a2243b5d7803d11b9ee",
".git/objects/64/6461ac07bf6e827eab24134798d18a63770f87": "e3ff4a81d00af6e64f8d8177afc4e69b",
".git/objects/bf/c2f7d8b15800025c2c87f8adaa4106fb4efd19": "94b8001e31bf1068f6b549dc7a405078",
".git/objects/d3/3dfc7164ead2e0c08aaf689851349cca3f5f40": "8dd050b6fcbe8fcb47092d114ea0ef78",
".git/objects/ba/7b4b3871083689f2858e320685878037510d0e": "55d18bffed671d1a78219bdb43ef0090",
".git/objects/dd/3a4ad7c77963c147089059b733a64a771af604": "4aa8175079f551e9d9874e96de683c0d",
".git/objects/dc/bfb28f886543cb9f1c0c51ac92e27daea98cc2": "18414726c39a670d1f1fcc282d42eeb5",
".git/objects/b6/bc8de3b0674e61c1295a1fc368a1d70e1d1a6b": "58cb331c096e7bad8b514b05f009e806",
".git/objects/af/3e72855686e93c9ae4151b72ed7d1b251b4644": "29d9ffec1a27ff71704b55da048ed1d7",
".git/objects/b7/aa0926a37a70f3f0767eb165538f8e6b52cd7c": "c8a6501574f6976acc6d16802adaa988",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/715e2e90145a23e11d244579cf5e9c9e1a8d8e": "1e79832442e885b44e838a8c8cedfaa8",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/fbe8ddb9dcbd0b99974ac9ea3cc72df801e141": "e494076c4f9319613f33b4041da2af00",
".git/objects/b0/d84fd395ce992c8113a207b7b412037f5185c6": "f5e0e13b35718b7d4a5f021dde673882",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/118608e8f198c38df6289a2a9ef40c3a331b0c": "acd2fdae76329e8c032ece36c1734a59",
".git/objects/c4/2ee7d7390315b81e0d9cb1741b3ca429a82ded": "5bc5ee4ef7e723c1b34322545fd5c3df",
".git/objects/c4/04ef4bacab332ede6d8cc0e03264b81637ece7": "396f2cd6715ae234d40df04bec3b3098",
".git/objects/cc/7ad9b4b359ae46e3279587b78b33f77f51dd6f": "10bbf8befdf5f39277505e446d8f9507",
".git/objects/e6/e85b197a2167bbf281dcc3a6eda90750dde770": "9d6162d8aec28c6cd5b3902eb8e90683",
".git/objects/fa/aa779f38723814695e11f01b5d8ad6cef351b6": "466beda3fc078f771116964590c920c2",
".git/objects/e9/7eea721ae306995ccc9c65e72472c4b5ab1863": "374d5c0dd9b1e46628554acbed85fc0b",
".git/objects/f1/617f4b64cd5294ed6e4be6083baa15a41ce8b5": "6faa82a70cd2e2d75af8f7bb290874e6",
".git/objects/f1/46dd083b203adcdef9ed993861270575760915": "46af591230b46b4ff94e5a49f63062a7",
".git/objects/cb/969e6c7baec9a38f53e4c3fdfd7ccc672b1c33": "b252c11e125b897f7b0f2c2da4ac5436",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/79d699f0704fc370590ac87092e7a97a7870d2": "25e50fe9cc14f07564887e39b359e9bd",
".git/objects/24/1a9b543a686b689b72bd59db3a943bc44e93d6": "aa02776f15d7e02a4d16150da2586f4a",
".git/objects/4f/6fe7a501cd6277cc0475115a78b6f2adb0d19b": "3bf3c05cf376bc7f19d21062b202ed8b",
".git/objects/15/661c7cbbf6c8724e66790b7b34c4a0781592cf": "6281dfa0e3e216f01431e2e65b2fb428",
".git/objects/8c/02f280143c67854d3b8dba9b974c0d34adba07": "0620a75d6dcfc98ec255714a6daf7ef2",
".git/objects/71/31f834c4b6d444f7b99b383ac8be349e727b14": "80594d1d33c287d1125a01aff85779f2",
".git/objects/76/6f013c3b294ec1b1a45e874cf44b1e7c02dce5": "dc7adaf25f677f547178d179c930351d",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/82/5d27234aa1a3b81695527c17687a3b956a0baf": "7f00e9406274f31159d693644d0ffc6e",
".git/objects/49/798eef0c36b2c9b16abafd1c2f7abb8f7a73db": "83e85b4ab1289be71ae617e1d43211aa",
".git/objects/14/ea566b0de6b32e8828ee9f9d17543403a27c6d": "20c4becac6c6c8c875a2443bbd9c8ec4",
".git/objects/14/5cb302e94e24d2df5199538899e22d74ae6831": "cde0b829e2b2943d75cc61f65294e638",
".git/objects/22/72f404482e39ce399827087692de8c8705e6a0": "e78af1f10f5ec1726ea170db06d82aa6",
".git/objects/25/9291f0f27ce890301b21a3d5ef7e1fc2f2d731": "36b3117d0c07cd9655a75d1faecac9bd",
".git/HEAD": "39d73b4368e8bec1ab6a47ee96817cfc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91d714a9d159149625765eee7ed18a53",
".git/logs/refs/heads/page": "9ebd5affcb7ccd903e6010edd359277b",
".git/logs/refs/heads/master": "21ba481c3926be3485b64a8db6046d4d",
".git/logs/refs/remotes/origin/page": "11c42b0628a021fc191f9441054c6339",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/page": "d61d95cccc3d48e0e33ade82c667b8eb",
".git/refs/heads/master": "d61d95cccc3d48e0e33ade82c667b8eb",
".git/refs/remotes/origin/page": "d61d95cccc3d48e0e33ade82c667b8eb",
".git/index": "7868f4e517504f452b4d09b3bb3e935e",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
"assets/AssetManifest.json": "7ab81282c7b3df909b228a14e57102dd",
"assets/NOTICES": "6fa9d7a07cb85093559ca406277728f0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/svg/oval.svg": "23bc8b2522a93cc68cc1d4c60f85e075",
"assets/assets/svg/undraw_gone_shopping_vwmc.svg": "aefce4489355e8e0515c6e5248a511ec",
"assets/assets/svg/undraw_Successful_purchase_re_mpig.svg": "3d1698c0eef354190cda5753a1f7255c",
"assets/assets/svg/suite.svg": "22a92c4bf44ad4d0dee7d9f59fe7951d",
"assets/assets/svg/marilyn_mandrow.svg": "efefccdfc1987d1aa9694313102beea4",
"assets/assets/svg/undraw_girl_just_wanna_have_fun_9d5u.svg": "65c6eb030b38c54c1c2cbf125eeed12c",
"assets/assets/recommended4.jpg": "f2fef34ab5e1338cd0252ecf785bd8b6",
"assets/assets/Mask%2520Group%25208.jpg": "72a979d018f64071cc2424e29752076c",
"assets/assets/Mask%2520Group%25209.jpg": "db3f66dbd52c1c364389b5530fab176e",
"assets/assets/recommended5.jpg": "a12694510e8c59d607dad4f77ac57630",
"assets/assets/Men.jpg": "3d4125770dc9334ef9c3f8bf1c51173f",
"assets/assets/product8.jpg": "4b5ae7d16a697fddeb3f62585e51735e",
"assets/assets/Group%252066.jpg": "7e3e45173836b4361cd8373b6d7af277",
"assets/assets/recommended6.jpg": "835ba9e3a8153250dd4bc88e1f63a133",
"assets/assets/shopping_bag.svg": "e2cb38952df30fa71b3498d91fcac989",
"assets/assets/recommended2.jpg": "147ba9b8f64f66357232776524e7e013",
"assets/assets/Mask_Group_12.jpg": "90ccccb36e8fe10b51f087f4fcf35757",
"assets/assets/Group%252062.jpg": "0953c6f521fbd9801de08f53dbb4de21",
"assets/assets/recommended3.jpg": "f9f224982402f6ba885ec336e50bf84e",
"assets/assets/recommended1.jpg": "dedf0df63ca72200544e110da5f6a430",
"assets/assets/product3_1.jpg": "bce1b80b00be68b88e58b95a9698bb36",
"assets/assets/Mask%2520Group%252010.jpg": "0c813a4186eeebb1e0624ad3fad0755c",
"assets/assets/product3_2.jpg": "6babd0f7e8981d840cb8f0ac22d21138",
"assets/assets/Kids.jpg": "517c75029dd1cf829931a07b52c3c016",
"assets/assets/Group%252039.jpg": "8e14029064afa6040c161ab57aa71b7c",
"assets/assets/Group%252038.jpg": "916c1a708b87ead6cb03ba0683bfe09a",
"assets/assets/Women.jpg": "629c790a30c9ea3c211567168b8769c2",
"assets/assets/product3_3.jpg": "004746f83c7c570de52b0e7f780402bc",
"assets/assets/Group%252029.jpg": "0917ac03da28823a279b5326ed69db4e",
"assets/assets/product3_4.jpg": "a351a8f906fe3f0bfc23d87f1f8d7618",
"assets/assets/Component%25201%2520%25E2%2580%2593%25201.jpg": "ebbb89273c9f0dc6d18978456bff08af",
"assets/assets/colour%2520palette.txt": "a43c35c283b9826dac574c19dd74e21f",
"assets/assets/Group_9.jpg": "cdc94bdbcbe2cd12eea4d44036a8b98e",
"assets/assets/r-removebg-preview.jpg": "d9331f1913b8b4ba080ae676109ad2e0",
"assets/assets/Avatar.jpg": "a36223caab8be059222903772b8d0cf7",
"assets/assets/Group%252024.jpg": "fd0b942e7f1d8a30223821f2733a4495",
"assets/assets/Mask%2520Group%252020.jpg": "017c5aebe719a41595857a6df89bbfd8",
"assets/assets/trending1.jpg": "aa9e102b3a29c0b73ba41a5206a3c5b8",
"assets/assets/Cosmetics.jpg": "801dd50f8c9cd5c498b2415915d341f4",
"assets/assets/Mask%2520Group%252021.jpg": "7c46f48610dff9e6fedaa7ebf15b588c",
"assets/assets/Mask%2520Group%252023.jpg": "faa55c06b981269d1fe59abe829adb55",
"assets/assets/Masks.jpg": "97511179dbc76f05b73ba50680df939d",
"assets/assets/Group%252022.jpg": "190b32e9970c477bd9bfc401771abdfe",
"assets/assets/trending2.jpg": "06563c2ace7636b34a364dca88cf95bc",
"assets/assets/Avatar1.png": "ea2f9538e90fc5e2f50efa1ac6168ff0",
"assets/assets/Mask%2520Group%252022.jpg": "9b8c6b37645ba6fb82755031f5497ece",
"assets/assets/product2.jpg": "607194833fc170379ee591e0e762bfad",
"assets/assets/Group%252078.jpg": "edc77382efca4c59bd11cdd6a10caad1",
"assets/assets/Accessories.jpg": "6923fc7c54c097ae36933ecc0b3b7b90",
"assets/assets/product3.jpg": "f2846e83414a8fb2f1de7de019792b13",
"assets/assets/product1.jpg": "e48a3d1781c986bbf43b0531eada4c8f",
"assets/assets/Mask%2520Group%25203.jpg": "c5894e05bc6423af13a7d8e6bc302334",
"assets/assets/offer4.jpg": "63f6b89b7374e2c52139956bd1498b11",
"assets/assets/product4.jpg": "69db6902aa90c8f806dcd0eb4e2e3915",
"assets/assets/Mask%2520Group%25207.jpg": "580701bd1bbe2c8cc4f48377eb69dd2a",
"assets/assets/Mask%2520Group%25206.jpg": "0c0d948df0e1620bc482f35043079746",
"assets/assets/product5.jpg": "5fab94443b25c8af6f8d23e916c41036",
"assets/assets/offer1.jpg": "994135afffcde4e7cfa18dd278ce43df",
"assets/assets/offer3.jpg": "92d2a6feb9495b23aa8eede6096af1d8",
"assets/assets/flare/camera.flr": "fdbbd63c8aca5aed4702318b8106d524",
"assets/assets/flare/logo.flr": "e69c1b05ddc682b829899696bf03b787",
"assets/assets/flare/menu.flr": "2f0557396f7f74d30acc95198f0fd06e",
"assets/assets/flare/test.flr": "b2ec9109e557244e22a4badd81c53cc5",
"assets/assets/flare/heart.flr": "aed4850e9db0fd2e3471a944e64a0e95",
"assets/assets/flare/head.flr": "8cb0bb455a9b3dfc6f8fc0d291ebbb80",
"assets/assets/flare/house.flr": "8c4bacf6fcef2e6d6aade85fb81c25ce",
"assets/assets/flare/cart.flr": "75e58117ac0e9ffeec0820efff222534",
"assets/assets/flare/planet.flr": "8e5b36e93900ef8dae00bbebbe8ed1fc",
"assets/assets/Mask%2520Group%25204.jpg": "b4df2ea86f955ec5516b6e9cc98b9837",
"assets/assets/product7.jpg": "f751a91456530838e85601362685d00c",
"assets/assets/Mask_Group_19.jpg": "be7457fbec73c561201295129eb38fba",
"assets/assets/product6.jpg": "4fb6008460632c40b6ce4dbfdb5fb3fa",
"assets/assets/Mask%2520Group%25205.jpg": "886335c25df454c57ab42e1f5df3cc25",
"assets/assets/offer2.jpg": "24abad2c2409cc50feffa667df21cd09"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
