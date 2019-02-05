function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: new google.maps.LatLng(39, -95),
    mapTypeId: 'roadmap'
  });

  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var iconBase1 = '../images/';
  var icons = {
    store: {
      icon: iconBase1 + 'sephora.png'
    },
    parking: {
      icon: iconBase + 'parking_lot_maps.png'
    },
    library: {
      icon: iconBase + 'library_maps.png'
    },
    info: {
      icon: iconBase + 'info-i_maps.png'
    }
  };

  var features = [
    // {
    //   position: new google.maps.LatLng(35.0932882679133, -89.8115834028014),
    //   type: 'store'
    // }, {
    //   position: new google.maps.LatLng(37.698166752093, -121.928298546045),
    //   type: 'info'      
    // },{
    //   position: new google.maps.LatLng(21.3333666, -158.0517197),
    //   type: 'info'
    // }
         {
         position: new google.maps.LatLng(35.0932882679133,-89.8115834028014),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.698166752093,-121.928298546045),
          type: 'store'
      }, {
         position: new google.maps.LatLng(21.3333666,-158.0517197),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.5094891606116,-112.027772393513),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.3541132,-121.9551744),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.6909892019534,-117.885624597866),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.157526877551,-118.435588877551),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.1838270779371,-118.884999497518),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.01652645,-118.497123695016),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.5375466400517,-122.302678169303),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.8088662,-117.9229642),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.1026902,-118.340468659893),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.1459776,-118.150943370958),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.7688364,-117.1658582),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.8705269,-117.210525),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.4451768,-119.7735742),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.0639658,-115.1722444),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.7784897346939,-95.5604225714286),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.0639658,-115.1722444),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.4439186137998,-122.172359959718),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.603327,-121.42853),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.579047799753,-122.346223065805),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.561664,-117.669603),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.075718,-118.3770471),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.7977755,-122.4103485),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.8402304,-78.679418),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.8856291,-118.3960739),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.9305156820913,-96.8209667109399),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.740675,-95.46136),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.86843675,-96.7736526930291),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.5184339,-98.4965251),
          type: 'store'
      }, {
         position: new google.maps.LatLng(30.395413,-97.75191),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.781579,-95.5429021),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.9613962451455,-95.5467139581694),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.0587526,-118.419204100278),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.8306867,-97.1993017),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.1120264868082,-117.532132135477),
          type: 'store'
      }, {
         position: new google.maps.LatLng(30.1629858,-95.4548748),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.0990115,-96.8112558),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.8084744911436,-119.776296269167),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.415659,-119.700847),
          type: 'store'
      }, {
         position: new google.maps.LatLng(26.1857275,-98.2360702467342),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.9152037,-117.88632452245),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.5930121,-98.6182580494653),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.3375315,-119.0348842),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7292241,-74.038366),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.63510455,-90.3476632779996),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.86299175,-118.094231926669),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.835705,-122.292279),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7092698,-74.0102677),
          type: 'store'
      }, {
         position: new google.maps.LatLng(21.3760729,-157.9298834),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.4500900904454,-86.7300007003129),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.4597225,-81.9506882),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.3180168,-94.1859317),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.9564555540344,-94.7216683312017),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.3814305032496,-86.8080453613209),
          type: 'store'
      }, {
         position: new google.maps.LatLng(43.641271,-116.284535),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.2511713,-121.8640635),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.06776275,-76.3391136252711),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.1353366,-118.0515141),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.405584,-76.600159),
          type: 'store'
      }, {
         position: new google.maps.LatLng(43.05690535,-89.5075645387718),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.928374,-84.036303),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.0627169,-95.8803001),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.92929,-105.1313199),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.8632875,-73.1275288),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.3068727422969,-111.752607373663),
          type: 'store'
      }, {
         position: new google.maps.LatLng(30.6328473374489,-97.6995561271192),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.3670252735291,-71.0766137958799),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.9098266,-117.45698750314),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.047149,-78.469814),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.0873117,-117.693453481735),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.6276005875592,-82.947967119376),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.1903865210084,-118.605720403361),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.0464743,-94.3624148),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.797263755102,-122.433458877551),
          type: 'store'
      }, {
         position: new google.maps.LatLng(47.6151532,-122.2029976),
          type: 'store'
      }, {
         position: new google.maps.LatLng(47.6635515,-122.298057),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.8963620107571,-122.058578052707),
          type: 'store'
      }, {
         position: new google.maps.LatLng(47.6113634,-122.3367568),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.2465441,-85.6087538323363),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.570915,-93.8091669),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.3536193,-80.8560171),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.2606768,-96.1822736),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.0884436944313,-96.6847903954141),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.5152627,-71.0312716255763),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.6977670657553,-83.6411262917737),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.623436,-116.9681764),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.6560565,-90.5742029),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.1624392022653,-93.262628163454),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.7653662,-71.467566),
          type: 'store'
      }, {
         position: new google.maps.LatLng(44.9703736872554,-93.4377475980832),
          type: 'store'
      }, {
         position: new google.maps.LatLng(44.8322405,-93.3204872),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.8913956,-87.6244867),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.14441235,-82.9824369466081),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.15012225,-87.8167246144781),
          type: 'store'
      }, {
         position: new google.maps.LatLng(43.0444189,-88.047356),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.1437024,-84.4702091),
          type: 'store'
      }, {
         position: new google.maps.LatLng(28.3689726951494,-81.5245244823648),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.3443944422626,-71.0987878650313),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.7095519,-73.8162787),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.5394994,-70.9423233),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.0949018138341,-73.9377128809718),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.60058415,-90.4472584429753),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.0279702,-84.5107228),
          type: 'store'
      }, {
         position: new google.maps.LatLng(30.3875225,-91.0864642),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.3054203,-111.9449193),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.73459645,-73.8700115945247),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.2421547734985,-83.7432221254044),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.9514277142857,-75.1691205714286),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.1396744,-75.1141817),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.0296132746155,-73.6266115956422),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.9731343,-84.4858255),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.723911,-73.9981879473684),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.7671616,-80.1931376),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.983327,-78.7096701428571),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7499908,-73.9886538),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7798557,-73.9819347),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.8919329,-74.2619835),
          type: 'store'
      }, {
         position: new google.maps.LatLng(28.666781,-81.3773282),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.0339862,-73.7629097),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.5818884,-74.1660270536378),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7955738982619,-73.6758297551138),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.4825918,-71.2146113),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.8928497,-87.6239079),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.7677731412523,-71.2234715701822),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.84894695,-76.2878266737299),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.320413,-71.175338),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.91712775,-77.2216871501594),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.34715695,-71.0825051630347),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.021766,-77.1355919),
          type: 'store'
      }, {
         position: new google.maps.LatLng(30.4012943,-97.7227131),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.151159,-80.828861),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.5044802,-111.927528842611),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.5858837,-74.6184393),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7685324,-73.9827663),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.394817,-73.4540111),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7573965,-73.9777979),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.085496643062,-75.3947251339016),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.8239891,-71.4128343),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.451425,-79.932705),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.7792808,-122.4192363),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.90419005,-78.9437054960411),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.8981234,-87.6229145968613),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.2836393,-71.346996),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.0976978,-73.9566445),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.9076812459394,-78.8829182474013),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.7772486,-80.1323702),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.728025,-80.2412358),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.7417704864865,-95.4463118108108),
          type: 'store'
      }, {
         position: new google.maps.LatLng(26.8481488,-80.0871512),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.68976,-80.280843),
          type: 'store'
      }, {
         position: new google.maps.LatLng(30.25250915,-81.5770229658123),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.8281282315436,-75.098401),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.0652722,-83.984532),
          type: 'store'
      }, {
         position: new google.maps.LatLng(26.7090644285714,-80.0570491836735),
          type: 'store'
      }, {
         position: new google.maps.LatLng(27.9279706,-82.3195555),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.0263824,-89.7166861),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.760764349369,-71.4586193917181),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.2811967,-120.6613161),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.716588,-95.415081),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.7632789,-84.5170795),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.5240264,-97.5443667),
          type: 'store'
      }, {
         position: new google.maps.LatLng(26.0036245349325,-80.336820606158),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.0485964,-84.2940411),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.1975864712248,-89.7921017860178),
          type: 'store'
      }, {
         position: new google.maps.LatLng(26.1371393,-80.1356304),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.848239,-84.362789),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.5062335,-121.9725028),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.4653298,-81.9943096),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.8376485,-76.0685439),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.5722708,-95.6614053),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.10835015,-106.56940865),
          type: 'store'
      }, {
         position: new google.maps.LatLng(30.002834020202,-90.1553369343434),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.8240856671967,-72.8845699903136),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.2848798,-94.6782778),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.689485,-121.04998),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.4220901,-86.8815363),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.0639658,-115.1722444),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.5256797,-105.0259669),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.4946353,-117.1473661),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.9846417,-87.4970292),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7560687,-73.9872476),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.7221991,-104.8947681),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.772908536611,-88.1501617137964),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.9962005,-84.5896878),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.6593821,-82.4009006),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.439994,-90.14759),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.9932072,-77.0743833),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.9588,-77.358454),
          type: 'store'
      }, {
         position: new google.maps.LatLng(43.6331844,-70.3342269),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.1319140553806,-81.6179532745208),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.728071,-122.4768798),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.91515115,-75.3520918000057),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.03125015,-96.832062441357),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.7734874,-121.2699012),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.2189942,-71.0234499828513),
          type: 'store'
      }, {
         position: new google.maps.LatLng(31.7784751,-106.382713307971),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.8821684559011,-85.7608728099919),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.142697,-88.242566),
          type: 'store'
      }, {
         position: new google.maps.LatLng(21.27882325,-157.828052876341),
          type: 'store'
      }, {
         position: new google.maps.LatLng(47.2495798,-122.4398746),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7954032,-73.9659344),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.88388535,-87.6285154213815),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.2428742,-73.2006687),
          type: 'store'
      }, {
         position: new google.maps.LatLng(44.2731545,-88.4358336),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.1442967755102,-118.257602979592),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.7195608,-116.3827969),
          type: 'store'
      }, {
         position: new google.maps.LatLng(43.2159502,-74.1826748),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.9636969,-73.8562667),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.23115545,-71.1774322547093),
          type: 'store'
      }, {
         position: new google.maps.LatLng(30.3893737,-86.4144331),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.0345453,-85.1588803666158),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.0260764,-84.5796299),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.7208290543554,-97.244511),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.45957495,-76.2022111267267),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.894857088855,-94.5432167825198),
          type: 'store'
      }, {
         position: new google.maps.LatLng(27.3813384,-82.4549606),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.5476873,-77.4454863),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.9444817,-97.1305121249489),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.6840195,-97.13255190625),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.7147717,-86.67530285),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.7858721,-80.3655592),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.239235,-118.553668),
          type: 'store'
      }, {
         position: new google.maps.LatLng(45.51878495,-122.67691895),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.6057791,-111.9258654),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.9852331,-118.3944704),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.035536986799,-118.685464671382),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7682595008039,-111.891203000001),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.6265935802434,-73.9168517663501),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.9648184098177,-104.793555686421),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.669492,-70.297471),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.0788506,-81.1576905021528),
          type: 'store'
      }, {
         position: new google.maps.LatLng(30.436468,-84.2535063516074),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.8508137,-82.3329513),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.0862261632653,-79.8300927346939),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.0539363434343,-82.9150604848485),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.1939835,-71.7600702),
          type: 'store'
      }, {
         position: new google.maps.LatLng(47.6591105918367,-117.423785244898),
          type: 'store'
      }, {
         position: new google.maps.LatLng(30.4761579,-87.2074372),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.910959,-87.650943),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.6914112452563,-91.6087933381327),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.6913750408163,-117.892107428571),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.137502,-80.290824),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.4387767,-122.716772864805),
          type: 'store'
      }, {
         position: new google.maps.LatLng(28.485572,-81.431579172439),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.9554417,-80.141173),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.59964824,-121.42702276),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.9014375909091,-97.3179515858586),
          type: 'store'
      }, {
         position: new google.maps.LatLng(44.854841037875,-93.4289646480896),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.6922276,-117.8679267),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.2836393,-71.346996),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.0432082,-97.0695102),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.1829021,-80.2289701),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.0992827,-96.809524),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.75353485,-88.0334911253965),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.767045,-117.169361),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.6929891,-121.9238264),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.1463763,-82.9819907192978),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.68976,-80.280843),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.4900262,-71.3152394),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.7829,-79.934443),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.6651178,-118.0130856),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.00882125,-75.289713),
          type: 'store'
      }, {
         position: new google.maps.LatLng(41.05414,-73.536211),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.7274904,-97.3631271),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.9130015551486,-94.6437488723897),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.2204567,-110.8653395),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.0681037940578,-118.399971558044),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.7835636,-122.4070397),
          type: 'store'
      }, {
         position: new google.maps.LatLng(35.9573531,-86.8139062),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.8871511,-77.0915132),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.1590505389753,-118.821105690301),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7136477,-74.0116669),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.1803771666667,-70.9071656666667),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.73150265,-80.2601554920381),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.07140105,-118.356911570745),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.0416604,-94.5895439),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.3208955714286,-121.947769071429),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.9416947195036,-89.8380271065778),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.9416947195036,-89.8380271065778),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.3602534,-71.0582912),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.8971869,-77.0261629),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.8507556,-84.3616707),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.078317,-96.8267889),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.9543844285714,-90.0644822857143),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.3515384545455,-71.0749932727273),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.6457177,-80.3395067),
          type: 'store'
      }, {
         position: new google.maps.LatLng(36.0210802,-115.086003),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.7435844,-104.9905162),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.0509199,-77.1174631),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.6226446938775,-74.0279254285714),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.772891,-73.796615),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.9274844,-122.5157951),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.7904052,-80.1370433),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.8851108474353,-76.9960696831926),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.9757869927374,-122.059564285689),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7406264411765,-74.0297911470588),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.1322144,-118.3529336),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.894991877551,-96.8031394693878),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.9067582564103,-74.0330941282051),
          type: 'store'
      }, {
         position: new google.maps.LatLng(44.9756381,-93.2782787),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.997511,-117.7301953),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.5920347755102,-104.961669204082),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.7155964,-73.9599696),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.7232391648966,-117.793425525361),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.6607082040816,-74.1760866326531),
          type: 'store'
      }, {
         position: new google.maps.LatLng(28.5109759,-81.1741859),
          type: 'store'
      }, {
         position: new google.maps.LatLng(39.1151013,-77.2048355),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.7866316,-122.4503013),
          type: 'store'
      }, {
         position: new google.maps.LatLng(26.2848057777778,-80.1865216666667),
          type: 'store'
      }, {
         position: new google.maps.LatLng(29.49317835,-98.4804913830829),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.02514275,-75.6292119166667),
          type: 'store'
      }, {
         position: new google.maps.LatLng(38.6493454,-121.1182614),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.8385333935075,-116.980930217125),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.8711173657529,-122.300926619332),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.7841232,-122.406377467092),
          type: 'store'
      }, {
         position: new google.maps.LatLng(25.8137586938776,-80.1935189387755),
          type: 'store'
      }, {
         position: new google.maps.LatLng(33.8260197964045,-116.54692017849),
          type: 'store'
      }, {
         position: new google.maps.LatLng(40.753906,-73.999828),
          type: 'store'
      }, {
         position: new google.maps.LatLng(32.808204,-96.796677),
          type: 'store'
      }, {
         position: new google.maps.LatLng(34.0703402,-117.2304517),
          type: 'store'
      }, {
         position: new google.maps.LatLng(42.3508486,-71.0434325),
          type: 'store'
      }, {
         position: new google.maps.LatLng(37.7608019,-121.962807),
          type: 'store'
      }

  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });
}