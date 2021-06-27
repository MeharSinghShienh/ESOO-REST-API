// add extinction data here
const data  = {
  Birds: [
      {//1
          name: "Acadian Flycatcher",
          species: "Empidonax virescens",
          location: "southern Ontario",
          status: "Endangered",
          date: "2008",
          photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/301816971/1800"
      },
      {//2
          name: "Barn Owl",
          species: "Tyto alba",
          location: "southern Ontario",
          status: "Endangered",
          date: "2008",
          photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/297342281/1800"
      },
      {//3
          name: "Golden eagle",
          species: "Aquila chrysaetos",
          location: "Hudson Bay Lowland in Ontario",
          status: "Endangered",
          date: "2008",
          photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305364081/1800"
      },
      {//4
          name: "Henslow’s sparrow",
          species: "Ammodramus henslowii",
          location: "south of the Canadian Shield",
          status: "Endangered",
          date: "2008",
          photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/171447861/1800"
      },
      {//5
          name: "King rail",
          species: "Rallus elegans",
          location: "large wetlands bordering Lake St. Clair and along Lakes Erie and Ontario",
          status: "Endangered",
          date: "2008",
          photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/303143791/1800"
      },
      {//6
          name: "Kirtland’s warbler",
          species: "Setophaga kirtlandii",
          location: "southwestern Ontario at Canadian Forces Base Petawawa",
          status: "Endangered",
          date: "2008",
          photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/297030851/1800"
      },
      {//7
          name: "Loggerhead shrike",
          species: "Lanius ludovicianus",
          location: "the Carden Plain north of Lindsay, and the Napanee Limestone Plain",
          status: "Endangered",
          date: "2008",
          photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302339191/1800"
      },
      {//8
          name: "Northern bobwhite",
          species: "Colinus virginianus",
          location: "southwest corner of Ontario, mostly on Walpole Island",
          status: "Endangered",
          date: "2008",
          photo: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/296736411/1800"
      }
  ],

  Reptiles: [
      {
          name: "Blanding's Turtle",
          species: "Emydoidea blandingii",
          location: "Great Lakes-St. Lawrence",
          status: "Threatened",
          date: "2008",
          photo: "https://wildlifepreservation.ca/2016/wp-content/uploads/2011/11/Blandings-Turtle-1.jpg"
      },
      {
          species: "Blue Racer",
          name:"Coluber constrictor foxii",
          location: "Pelee Island, Lake Erie",
          status: "Endangered",
          date: "2008",
          photo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Coiledblueracersnake.jpg"
      },
      {
          name: "Thamnophis butleri",
          species: "Butler's Gardensnake",
          location: "Lower Great Lakes region",
          status: "Endangered",
          date: "2008",
          photo: "https://mnfi.anr.msu.edu/element-images/Thamnophis-butleri-5258.jpg"
      },
      {
          name: "Plestiodon fasciatus",
          species: "Carolinian Common Five-Linked Skink",
          location: "The Carolinian Zone",
          status: "Endangered",
          date: "2009",
          photo: "https://www.wildrepublic.com/wp-content/uploads/2018/11/491248615-five-lined-skink-lizard-2291-xl-600x404.jpg"
      },
      {
          name: "Plestiodon fasciatus",
          species: "Southern Shield Common Five-Linked Skink",
          location: "The southern margin of the Canadian Shield",
          status: "Special concern",
          date: "2009",
          photo: "https://www.wildrepublic.com/wp-content/uploads/2018/11/491248615-five-lined-skink-lizard-2291-xl-600x404.jpg"
      },
      {
          name: "errapene Carolina",
          species: "Eastern Box Turtle",
          location: "No longer occur in the wild in Ontario",
          status: "Extirpated",
          date: "2016",
          photo: "https://www.thesprucepets.com/thmb/kk7nj0491V0t93lGMk8L3P3LIXo=/4223x3167/smart/filters:no_upscale()/eastern-box-turtle-1255428637-55fa40a2986c47f3aeabf8badf175820.jpg"
      },
      {
          name: "Pantherophis gloydi",
          species: "Carolinian Eastern Foxsnake",
          location: "Southwestern Ontario",
          status: "Endangered",
          date: "2009",
          photo: "https://wildlifepreservation.ca/2016/wp-content/uploads/2016/07/eastern-foxsnake-3.jpg"
      },
      {
          name: "Pantherophis gloydi",
          species: "Georgian Bay Eastern Foxsnake",
          location: "Eastern Georgian Bay",
          status: "Threatened",
          date: "2009",
          photo: "https://wildlifepreservation.ca/2016/wp-content/uploads/2016/07/eastern-foxsnake-3.jpg"
      },
      {
          name: "Heterodon platirhinos",
          species: "Eastern Hog-Nosed Snake",
          location: "The Carolinian and Great Lakes-St. Lawrence Regions",
          status: "Threatened",
          date: "2008",
          photo: "https://www.oriannesociety.org/wp-content/uploads/2020/10/Simus-079_web-800x600.jpg"
      },
      {
          name: "Sternotherus odoratus",
          species: "Eastern Musk Turtle",
          location: "The southern edge of the Canadian Shield",
          status: "Special concern",
          date: "2008",
          photo: "https://ontarioturtle.ca/wp-content/uploads/2017/03/Crowley-Eastern-Musk-Turtle-4-small-e1490378688187.jpg"
      },
      {
          name: "Thamnophis sauritus",
          species: "Eastern Ribbonsnake",
          location: "The Bruce Peninsula and Georgian Bay",
          status: "Special concern",
          date: "2008",
          photo: "https://upload.wikimedia.org/wikipedia/commons/d/de/EasternRibbonSnake.jpg"
      },
      {
          name: "Pantherophis spiloides",
          species: "Carolinian Gray Ratsnake",
          location: "Southwestern Ontario",
          status: "Endangered",
          date: "2008",
          photo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Gray_Ratsnake_%28Pantherophis_spiloides%29_%2843567652625%29_%28cropped%29.jpg"
      },
      {
          name: "Pantherophis spiloides",
          species: "Frontenac Axis Gray Ratsnake",
          location: "Southeastern Ontario",
          status: "Threatened",
          date: "2008",
          photo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Gray_Ratsnake_%28Pantherophis_spiloides%29_%2843567652625%29_%28cropped%29.jpg"
      },
      {
          name: "Nerodia sipedon insularum",
          species: "Lake Erie Watersnake",
          location: "Western Lake Erie, including Pelee Island",
          status: "Special concern",
          date: "2008",
          photo: "https://www.canada.ca/content/dam/eccc/migration/sara/0D263A3B-7942-4094-A8D6-CC339B7076BC/fig00.jpg"
      },
      {
          name: "Sistrurus catenatus",
          species: "Carolinian Massasauga",
          location: "The Carolinian Zone",
          status: "Endangered",
          date: "2008",
          photo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Massasauga_rattlesnake_1.jpg"
      },
      {
          name: "Sistrurus catenatus",
          species: "St. Lawrence Massasauga",
          location: "Great Lakes-St. Lawrence region",
          status: "Threatened",
          date: "2008",
          photo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Massasauga_rattlesnake_1.jpg"
      },
      {
          name: "Graptemys geographica",
          species: "Northern Map Turtle",
          location: "The shores of Georgian Bay, Lake St. Clair, Lake Erie, and Lake Ontario",
          status: "Special concern",
          date: "2008",
          photo: "https://ontarioturtle.ca/wp-content/uploads/2017/03/Crowley-Northern-Map-Turtle-1.jpg"
      },
      {
          name: "Regina septemvittata",
          species: "Queensnake",
          location: "The southwest of Middlesex, Brant, Huron, and Essex counties, and on the Bruce Peninsula",
          status: "Endangered",
          date: "2008",
          photo: "https://files.ontario.ca/684.1.2en-cover.jpg"
      },
      {
          name: "Chelydra serpentina",
          species: "Snapping Turtle",
          location: "Southern Ontario",
          status: "Special concern",
          date: "2009",
          photo: "http://www.ontarioparks.com/parksblog/wp-content/uploads/2020/05/Fitzroy_SnappingTurtle_.png"
      },
      {
          name: "Apalone spinifera",
          species: "Spiny Softshell",
          location: "Lake St. Clair, Lake Erie, and western Lake Ontario watersheds",
          status: "Endangered",
          date: "2008",
          photo: "https://ontarioturtle.ca/wp-content/uploads/2017/03/spinysoftshell_turtle-Gillingwater-e1490378729516.jpg"
      },
      {
          name: "Clemmys guttata",
          species: "Spotted Turtle",
          location: "The north shore of Lake Erie, in the Georgian Bay area, and scattered throughout southern and eastern ON",
          status: "Endangered",
          date: "2015",
          photo: "https://www.thesprucepets.com/thmb/-T6yiQXtdweHJvAawFyKEGcENoo=/2357x1462/filters:fill(auto,1)/GettyImages-557232791-de1370a3d2e84add9fb50ff9a1b524fd.jpg"
      },
      {
          name: "Crotalus horridus",
          species: "Timber Rattlesnake",
          location: "Used to be found along the Niagara Escarpment",
          status: "Extripated",
          date: "2008",
          photo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/ZollmanTimberRattlesnake.jpg"
      },
      {
          name: "Glyptemys insculpta",
          species: "Wood Turtle",
          location: "Isolated patches in Ontario",
          status: "Endangered",
          date: "2008",
          photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/WoodTurtle.jpg/1200px-WoodTurtle.jpg"
      }
  ],

  Insects: [
      {
          name: "American burying beetle",
          species: "Nicrophorus americanus",
          location: "Used to be found north of lakes Erie and Ontario",
          status: "Extirpated",
          date: "2013",
          photo: "https://s3-us-west-2.amazonaws.com/s3-wagtail.biolgicaldiversity.org/images/AmericanBuryingBeetle_DougBacklund_SDGameFis.max-800x800.jpg"
      },
      {
          name: "Aweme borer moth",
          species: "Papaipema aweme",
          location: "Grand Bend on Lake Huron and on Manitoulin Island",
          status: "Endangered",
          date: "2008",
          photo: "https://www.canada.ca/content/dam/eccc/migration/sara/3D95A7CA-9888-4701-8A21-754B50C83AEE/fig_00.jpg"
      },
      {
          name: "Bogbean buckmoth",
          species: "Hemileuca sp. 1",
          location: "isolated sites in southeastern Ontario",
          status: "Endangered",
          date: "2010",
          photo: "https://files.ontario.ca/christian.schmidtagr.gc_.ca_sep09_218.jpg"
      },
      {
          name: "Eastern persius duskywing",
          species: "Erynnis persius persius",
          location: "Used to be found in southwestern Ontario",
          status: "Extirpated",
          date: "2008",
          photo: "https://www.butterfliesandmoths.org/sites/default/files/bamona_images/5-15-13_persius_duskywing_4035w.jpg"
      },
      {
          name: "Frosted elfin",
          species: "Callophrys irus",
          location: "Used to be found in near the St. Williams Forestry station in Norfolk County in southern Ontario",
          status: "Extirpated",
          date: "2009",
          photo: "https://guides.nynhp.org/media/i5385.jpg"
      },
      {
          name: "Gypsy Cuckoo Bumble Bee",
          species: "Bombus bohemicus",
          location: "Pinery Provincial Park",
          status: "Endangered",
          date: "2015",
          photo: "https://www.bumblebeeconservation.org/wp-content/uploads/2017/08/Bbohemicus_male_PG_MikeAnderson_web2-600x451.jpg"
      },
      {
          name: "Hine’s emerald",
          species: "Somatochlora hineana",
          location: "Minesing wetland in Simcoe County",
          status: "Endangered",
          date: "2012",
          photo: "https://www.biologicaldiversity.org/assets/img/species/invertebrates/HinesEmeraldDragonfly_PaulBurton.jpg"
      },
      {
          name: "Hoptree Borer",
          species: "Prays atomocella",
          location: "Point Pelee National Park and on Pelee Island",
          status: "Endangered",
          date: "2017",
          photo: "https://www.registrelep-sararegistry.gc.ca/0875AAD4-74E5-4646-829E-807522662CF3/fig00.jpg"
      },
      {
          name: "Hungerford’s crawling water beetle",
          species: "Brychius hungerfordi",
          location: "three rivers in Bruce County",
          status: "Endangered",
          date: "2012",
          photo: "https://wildlifepreservation.ca/2016/wp-content/uploads/2016/09/hungerfords-crawlling-water-beetle.jpg"
      },
      {
          name: "Karner Blue",
          species: "Lycaeides Melissa Samuelis",
          location: "Used to be found in southwestern Ontario at Port Franks and St. Williams",
          status: "Extirpated",
          date: "2009",
          photo: "https://goodmorninggloucester.files.wordpress.com/2013/08/male_karner_blue_lg.jpg"
      },
      {
          name: "Lake Huron Grasshopper",
          species: "Trimerotropis huroniana",
          location: "Pancake Bay on southern Lake Superior, Great Duck Island, Lake Huron and Manitoulin Island along the shores of Lake Huron",
          status: "Threatened",
          date: "2017",
          photo: "https://bugguide.net/images/raw/50O/Q40/50OQ4000E0S020Q0W0R0E0FRE0L020L0I0Z0P0Z0603R7Q3RRQDQ3KYQW0TR7Q3R20R07QJRU0DR60.jpg"
      },
      {
          name: "Laura’s clubtail",
          species: "Stylurus laurae",
          location: "along Big Creek and Big Otter Creek in the Tillsonburg and Long Point area near Lake Erie",
          status: "Endangered",
          date: "2010",
          photo: "https://objects.liquidweb.services/images/202007/inat_1594947376-5f11356cb536b.jpg"
      },
      {
          name: "Monarch",
          species: "Danaus plexippus",
          location: "southern Ontario",
          status: "Special Concern",
          date: "2008",
          photo: "https://mma.prnewswire.com/media/901842/Espace_pour_la_vie_Monarch_friendly_city___Montr_al_First_City_i.jpg?p=publish&w=950"
      },
      {
          name: "Mottled duskywing",
          species: "Erynnis martialis",
          location: "southern Ontario",
          status: "Endangered",
          date: "2014",
          photo: "https://files.ontario.ca/cover-photo_j-linton_marmora_ontario_mottled-duskywing.jpg"
      },
      {
          name: "Nine-spotted Lady Beetle",
          species: "Coccinella novemnotata",
          location: "southern Ontario",
          status: "Endangered",
          date: "2017",
          photo: "https://val.vtecostudies.org/wp-content/uploads/2020/01/nine-spotted-2-1024x768.jpeg"
      },
      {
          name: "Northern barrens tiger beetle",
          species: "Cicindela patruela",
          location: "southeast shore of Lake Huron",
          status: "Endangered",
          date: "2010",
          photo: "https://www.canada.ca/content/dam/eccc/migration/sara/BAAFBBE6-785C-44F4-B3D9-86C735C697B5/fig00.gif"
      },
      {
          name: "Pygmy snaketail",
          species: "Ophiogomphus howei",
          location: "northwestern Ontario",
          status: "Endangered",
          date: "2012",
          photo: "https://files.ontario.ca/sar-2018-pygmy-snaketail-dd.jpg"
      },
      {
          name: "Rapids clubtail",
          species: "Phanogomphus quadricolor",
          location: "four rivers in southern and eastern Ontario: the Thames, Humber, Credit and Mississippi",
          status: "Endangered",
          date: "2009",
          photo: "https://bugguide.net/images/cache/TH5/HAH/TH5HAH4H3H0LWZXL4ZLL2Z0L2ZLLWZ6HZRNHTHIHGZSLTHIHYHIH1HSLTHXH4ZLLOH8H2ZMHAH4HTHHLVHKLGZZLNZ.jpg"
      },
      {
          name: "Riverine clubtail",
          species: "Stylurus amnicola",
          location: "Big Creek and Big Otter Creek",
          status: "Endangered",
          date: "2014",
          photo: "https://bugguide.net/images/raw/7QC/RFK/7QCRFKBRZQURSQTRXQCRQQR0QQL090JRP0H0N0H07QQ0N0OR7QR00QS060DRMQFRN0R0KQZ0N0CRE0.jpg"
      },
      {
          name: "Rusty-patched bumble bee",
          species: "Bombus affinis",
          location: "Pinery Provincial Park",
          status: "Endangered",
          date: "2010",
          photo: "https://greatlakesecho.org/wp-content/uploads/2020/03/417579-461805-Claire-Moore-Feb-19-2020-1025-PM-USFWS-Courtesy-Image-1-336x336.jpg"
      },
      {
          name: "Transverse lady beetle",
          species: "Coccinella transversoguttata",
          location: "Throughout Ontario",
          status: "Endangered",
          date: "2018",
          photo: "https://files.ontario.ca/transverse-lady-beetle.jpg"
      },
      {
          name: "West Virginia White",
          species: "Pieris virginiensis",
          location: "central and southern Ontario",
          status: "Special Concern",
          date: "2008",
          photo: "https://wisconsinbutterflies.org/a/species/39005/giant/west-virginia-white.jpg"
      },
      {
          name: "Yellow-banded Bumble Bee",
          species: "Bombus terricola",
          location: "Mixedwood Plains of southern Ontario to the Hudson Bay Lowlands in the north",
          status: "Special Concern",
          date: "2016",
          photo: "https://bugguide.net/images/cache/K0N/0H0/K0N0H0U0CQXQWRLQNRRQURJKUR3KNRQQJR7QDRW0DRW03RW0Z0SQ3RU0S04000KQZ07QR0P0K0QQH0QQWRFKFQJK1RLQ.jpg"
      }
  ]
}

export default data;
