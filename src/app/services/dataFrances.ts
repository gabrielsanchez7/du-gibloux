export var DataFrances = {
	changeLanguage: 'Attendez un instant, nous traduisons le site',
	messageLanguage: 'Le site est déjà traduit dans la langue choisie',
	menu: [
		{url: "#", item: "Accueil"},
		{url: "#", item: "Appartaments"},
		{url: "#", item: "Prix"},
		{url: "#", item: "Situation"},
		{url: "#", item: "Contact"}
	],
	banner: [
		{text: "Connaissez l'espace que nous avons préparé pour vous.", button: "Découvrir"},
		{text: "Connaissez l'espace que nous avons préparé pour vous.", button: "Découvrir"},
		{text: "Connaissez l'espace que nous avons préparé pour vous.", button: "Découvrir"}
	],
	description: {
		title: "Residence Descriptif",
		text: "La résidence ‘Le Gibloux’ est le résultat d’une transformation complète et contemporaine d’une des premières maisons villageoises de la commune, construite en 1946.|Cette promotion propose 3 magnifiques appartements de 85m2, 105m2 et 130m2.|L’intérieur des appartements propose des surfaces de vie généreuses et fonctionnelles.|Les finitions intérieures sont réalisées avec des matériaux nobles pour un rendu chaleureux et moderne. De plus, ces logements profitent tous de grands balcons ou terrasses et d’un jardin privatif.|Et enfin très écologique et économique grâce à une insolation périphérique de 200mm, un système de chauffage au sol par géothermie verticale et une production d'eau chaude par panneaux solaires.",
		subtitle: "Tous les appartements bénéficient :",
		benefit: [
			{itemList: "d’une orientation à 360° (1 appartement par niveau)."},
			{itemList: "d’une cuisine toute équipée ouverte sur un grand séjour."},
			{itemList: "d’un jardin et d’un balcon ou terrasse."},
			{itemList: "d’un espace buanderie privatif."},
			{itemList: "de 2 places de parc extérieures comprises dans le prix."},
			{itemList: "d’une cave privative."},
			{itemList: "d’un accès à un local à vélos/poussettes."}
		],
		conclusion: "Finitions intérieures au gré du preneur."
	},
	appartaments: {
		title: "Appartaments",
		list: [
			{image: "cuarto-a.png", lote: "Lot A - Rez 130M2", piso: "(4° etage - A)"},
			{image: "cuarto-b.png", lote: "Lot C - Rez 85M2", piso: "(4° etage - B)"},
			{image: "primer-a.png", lote: "Lot A - Rez 105M2", piso: "(1° etage - A)"},
			{image: "primer-b.png", lote: "Lot A - Rez 130M2", piso: "(1° etage - B)"},
			{image: "segundo-a.png", lote: "Lot A - Rez 130M2", piso: "(2° etage - A)"},
			{image: "segundo-b.png", lote: "Lot A - Rez 130M2", piso: "(2° etage - B)"},
			{image: "segundo-c.png", lote: "Lot A - Rez 130M2", piso: "(2° etage - C)"},
			{image: "communs-one.png", lote: "", piso: "Communs"},
			{image: "communs-two.png", lote: "", piso: "Communs"}
		]
	},
	prices: {
		title: "Liste des Prix",
		lots: [
			{
				letter: "LOT A",
				floor: "Rez",
				room: "3.5 pieces",
				habitableSurface: "104,6",
				balcon: "27,6 + 9,5",
				jardin: "57,2",
				store: "15,6",
				saleSurface: "130,4",
				salePrice: "529'000 Fr"
			},
			{
				letter: "LOT B",
				floor: "1er etage",
				room: "3.5 pieces",
				habitableSurface: "95,5",
				balcon: "8,0",
				jardin: "42,1",
				store: "10,8",
				saleSurface: "104,8",
				salePrice: "430'000 Fr"
			},
			{
				letter: "LOT C",
				floor: "2eme etage",
				room: "3 pieces",
				habitableSurface: "76,8",
				balcon: "6,6",
				jardin: "42,8",
				store: "8,3",
				saleSurface: "85,2",
				salePrice: "369'000 Fr"
			}
		],
		lotsItem: {
			floor: "Etage",
			room: "Pieces",
			habitableSurface: "Surface Nette Habitable m2",
			balcon: "Balcon / Terrase m2",
			jardin: "Jardin m2",
			store: "Cave m2",
			saleSurface: "Surface Vente PEE m2",
			salePrice: "Prix de vente CIH"
		}
	},
	situation: {
		title: "Situation",
		description: "Situ e'dans le district de la Glne (canton de Fribourg), la commune de Villorsonnens estne en 2001 de la fusion de Villargiroud, Villarsiviriaux, Orsonnens et Chavannes-sous-Orsonnens.|Son environnement est essentiellement champétre (60% de son territoire est occupé par des surfaces agricoles et 30% par des foráts), Villorsonnens est ce que léon appelle une campagne dynamique, aux portes de la ville.|La r gion de la Gl ne attire de plus en plus d entreprises et sa population est croissante. Depuis 2012, son attractivit  s est fortement renforc e, avec notamment l implantation de grandes entreprises Romont devenant ainsi des employeurs importants de la r gion (Nespresso qui ouvre sa troisi me fabrique en Suisse d but 2015 avec 800 emplois pr vus terme, PharmaFocus qui a install en 2014 son si ge social Romont avec 200 cr ations d emplois, Aldi qui implante un nouveau centre commercial, etc).",
		city: {
			superficie: "Superficie",
			altitude: "Altitude",
			population: "Habitants",
			taxRate: "Taxu d'Imposition"
		},
		infraestructures: {
			title: "Infraestructures",
			description: "Signes d une campagne en plein d veloppement, Villorsonnens poss de toutes les infrastructures pour accueillir les familles et assurer une vie agr able   nos enfants comme   nos ain s. Ainsi, des lignes r guli res de transports en commun   bus ou train   relient chacun des villages aux principales villes de la r gion. L entr e d autoroute Lausanne-Berne est   8km.|Par ailleurs,   4km se trouve Villaz-Saint-Pierre avec son parc technologique comportant notamment un centre de convention et conf rences, des infrastructures sportives (stade de football, courts de tennis), un cabinet m dical, un bancomat et plusieurs commerces alimentaires, auberges-restaurants et artisans (garages automobiles, stations services, coiffeur etc). Enfin,   8 min se trouve Romont qui offre tous les commerces et centres commerciaux utiles,  coles enfantines, primaires et secondaires (avec biblioth que) et un h pital."
		},
		environment: {
			title: "Environment",
			description: "Offrant des paysages tr s vari s, les possibilit s de balades sont nombreuses que ce soit en plaine, le long de la Neirigue, sur les chemins de montagne ou encore en for t. Villorsonnens offre un cadre de vie bien plus agr able que la ville, toute proche.|A 3km, le Mont Gibloux ravira les plus sportifs avec ses pistes de ski et sentiers raquettes durant la saison hivernale. Il s av re  galement  tre un lieu de balade tr s agr able en  t  avec une vue panoramique sur la Gl ne et la Gruy re depuis le haut de sa tour."
		},
		conclusion: {
			title: "La Résidence",
			description: "La résidence  Le Gibloux  se trouve dans le centre de Villargiroud dont la localisation jouit de plusieurs atouts :",
			list: [
				"Un arr t de bus devant la r sidence, reliant Romont toutes les heures.",
				"Une fromagerie artisanale et un Vis- -Vis (superette boulangerie-p tisserie) 400m, ouverts 7/7.",
				"Une cole enfantine et primaire."
			],
			info: {
				romont: "Romont",
				station: "Gare Cff (Romont)",
				bulle: "Bulle / Fribourg",
				transport: "Transports publics (TPF)",
				laussane: "Laussane",
				highway: "Autoroute (A12 - Rossens)",
				commerce: "Commerces",
				schools: "Ecoles"
			}
		}
	},
	contact: {
		title: "Contact",
		subtitle: "Formulaire de contact",
		form: {
			name: "Prènom Nom",
			email: "E-mail",
			address: "Adresse",
			location: "NPA, localité",
			phone: "Telephone",
			message: "Message",
			send: "Envoyer"
		}
	},
	infoContact: {
		title: "Information de contact",
		promoter: "Promoteur",
		arquitect: "Arquitecte",
		enterprise: "Entreprise général",
		financing: "Financement",
		subtitle: "Complémentaries"
	},
	msgContactForm: {
		noValid: "Il y a encore des champs obligatoires que vous devez remplir.",
		valid: "Formulaire envoyé avec succès. Nous prendrons contact avec vous sous peu."
	}
}