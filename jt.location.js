var jt = jt || {};

jt.location = (function($){
	
	var countries = [
			"AFGHANISTAN",
			"ÅLAND ISLANDS",
			"ALBANIA",
			"ALGERIA",
			"AMERICAN SAMOA",
			"ANDORRA",
			"ANGOLA",
			"ANGUILLA",
			"ANTARCTICA",
			"ANTIGUA AND BARBUDA",
			"ARGENTINA",
			"ARMENIA",
			"ARUBA",
			"AUSTRALIA",
			"AUSTRIA",
			"AZERBAIJAN",
			"BAHAMAS",
			"BAHRAIN",
			"BANGLADESH",
			"BARBADOS",
			"BELARUS",
			"BELGIUM",
			"BELIZE",
			"BENIN",
			"BERMUDA",
			"BHUTAN",
			"BOLIVIA",
			"BOSNIA AND HERZEGOVINA",
			"BOTSWANA",
			"BOUVET ISLAND",
			"BRAZIL",
			"BRITISH INDIAN OCEAN TERRITORY",
			"BRUNEI DARUSSALAM",
			"BULGARIA",
			"BURKINA FASO",
			"BURUNDI",
			"CAMBODIA",
			"CAMEROON",
			"CANADA",
			"CAPE VERDE",
			"CAYMAN ISLANDS",
			"CENTRAL AFRICAN REPUBLIC",
			"CHAD",
			"CHILE",
			"CHINA",
			"CHRISTMAS ISLAND",
			"COCOS (KEELING) ISLANDS",
			"COLOMBIA",
			"COMOROS",
			"CONGO",
			"CONGO, THE DEMOCRATIC REPUBLIC OF THE",
			"COOK ISLANDS",
			"COSTA RICA",
			"CÔTE D'IVOIRE",
			"CROATIA",
			"CUBA",
			"CYPRUS",
			"CZECH REPUBLIC",
			"DENMARK",
			"DJIBOUTI",
			"DOMINICA",
			"DOMINICAN REPUBLIC",
			"ECUADOR",
			"EGYPT",
			"EL SALVADOR",
			"EQUATORIAL GUINEA",
			"ERITREA",
			"ESTONIA",
			"ETHIOPIA",
			"FALKLAND ISLANDS (MALVINAS)",
			"FAROE ISLANDS",
			"FIJI",
			"FINLAND",
			"FRANCE",
			"FRENCH GUIANA",
			"FRENCH POLYNESIA",
			"FRENCH SOUTHERN TERRITORIES",
			"GABON",
			"GAMBIA",
			"GEORGIA",
			"GERMANY",
			"GHANA",
			"GIBRALTAR",
			"GREECE",
			"GREENLAND",
			"GRENADA",
			"GUADELOUPE",
			"GUAM",
			"GUATEMALA",
			"GUERNSEY",
			"GUINEA",
			"GUINEA-BISSAU",
			"GUYANA",
			"HAITI",
			"HEARD ISLAND AND MCDONALD ISLANDS",
			"HOLY SEE (VATICAN CITY STATE)",
			"HONDURAS",
			"HONG KONG",
			"HUNGARY",
			"ICELAND",
			"INDIA",
			"INDONESIA",
			"IRAN, ISLAMIC REPUBLIC OF",
			"IRAQ",
			"IRELAND",
			"ISLE OF MAN",
			"ISRAEL",
			"ITALY",
			"JAMAICA",
			"JAPAN",
			"JERSEY",
			"JORDAN",
			"KAZAKHSTAN",
			"KENYA",
			"KIRIBATI",
			"KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
			"KOREA, REPUBLIC OF",
			"KUWAIT",
			"KYRGYZSTAN",
			"LAO PEOPLE'S DEMOCRATIC REPUBLIC",
			"LATVIA",
			"LEBANON",
			"LESOTHO",
			"LIBERIA",
			"LIBYAN ARAB JAMAHIRIYA",
			"LIECHTENSTEIN",
			"LITHUANIA",
			"LUXEMBOURG",
			"MACAO",
			"MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
			"MADAGASCAR",
			"MALAWI",
			"MALAYSIA",
			"MALDIVES",
			"MALI",
			"MALTA",
			"MARSHALL ISLANDS",
			"MARTINIQUE",
			"MAURITANIA",
			"MAURITIUS",
			"MAYOTTE",
			"MEXICO",
			"MICRONESIA, FEDERATED STATES OF",
			"MOLDOVA, REPUBLIC OF",
			"MONACO",
			"MONGOLIA",
			"MONTENEGRO",
			"MONTSERRAT",
			"MOROCCO",
			"MOZAMBIQUE",
			"MYANMAR",
			"NAMIBIA",
			"NAURU",
			"NEPAL",
			"NETHERLANDS",
			"NETHERLANDS ANTILLES",
			"NEW CALEDONIA",
			"NEW ZEALAND",
			"NICARAGUA",
			"NIGER",
			"NIGERIA",
			"NIUE",
			"NORFOLK ISLAND",
			"NORTHERN MARIANA ISLANDS",
			"NORWAY",
			"OMAN",
			"PAKISTAN",
			"PALAU",
			"PALESTINIAN TERRITORY, OCCUPIED",
			"PANAMA",
			"PAPUA NEW GUINEA",
			"PARAGUAY",
			"PERU",
			"PHILIPPINES",
			"PITCAIRN",
			"POLAND",
			"PORTUGAL",
			"PUERTO RICO",
			"QATAR",
			"REUNION",
			"ROMANIA",
			"RUSSIAN FEDERATION",
			"RWANDA",
			"SAINT BARTHÉLEMY",
			"SAINT HELENA",
			"SAINT KITTS AND NEVIS",
			"SAINT LUCIA",
			"SAINT MARTIN",
			"SAINT PIERRE AND MIQUELON",
			"SAINT VINCENT AND THE GRENADINES",
			"SAMOA",
			"SAN MARINO",
			"SAO TOME AND PRINCIPE",
			"SAUDI ARABIA",
			"SENEGAL",
			"SERBIA",
			"SEYCHELLES",
			"SIERRA LEONE",
			"SINGAPORE",
			"SLOVAKIA",
			"SLOVENIA",
			"SOLOMON ISLANDS",
			"SOMALIA",
			"SOUTH AFRICA",
			"SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
			"SPAIN",
			"SRI LANKA",
			"SUDAN",
			"SURINAME",
			"SVALBARD AND JAN MAYEN",
			"SWAZILAND",
			"SWEDEN",
			"SWITZERLAND",
			"SYRIAN ARAB REPUBLIC",
			"TAIWAN, PROVINCE OF CHINA",
			"TAJIKISTAN",
			"TANZANIA, UNITED REPUBLIC OF",
			"THAILAND",
			"TIMOR-LESTE",
			"TOGO",
			"TOKELAU",
			"TONGA",
			"TRINIDAD AND TOBAGO",
			"TUNISIA",
			"TURKEY",
			"TURKMENISTAN",
			"TURKS AND CAICOS ISLANDS",
			"TUVALU",
			"UGANDA",
			"UKRAINE",
			"UNITED ARAB EMIRATES",
			"UNITED KINGDOM",
			"UNITED STATES",
			"UNITED STATES MINOR OUTLYING ISLANDS",
			"URUGUAY",
			"UZBEKISTAN",
			"VANUATU",
			"VENEZUELA",
			"VIET NAM",
			"VIRGIN ISLANDS, BRITISH",
			"VIRGIN ISLANDS, U.S.",
			"WALLIS AND FUTUNA",
			"WESTERN SAHARA",
			"YEMEN",
			"ZAMBIA",
			"ZIMBABWE"
	],
	
	synonymsOfUSA = [
			"UNITED STATES",
			"UNITED STATES OF AMERICA",
			"AMERICA",
			"US",
			"U.S.",
			"U.S",
			"USA",
			"U.S.A.",
			"U.S.A",
			"NORTH AMERICAN COUNTRY",
			"NORTH AMERICAN NATION",
			"THE STATES"
	],

	numberOfCountries = countries.length,
	numberOfUSASynonyms = synonymsOfUSA.length;
	
	var extractLocationFromText = function(text){
		
		var message = text.toUpperCase(),
			location = false;
			
		for (var i=0; i<=numberOfUSASynonyms; i++){
			if(message.indexOf(synonymsOfUSA[i]) !== -1){
				location = "UNITED STATES";
				break;
			}
		}
		
		if (!location){
			for(var i=0; i<=numberOfCountries; i++){
				if(message.indexOf(countries[i]) !== -1){
					location = countries[i];
					break;
				}
			};
		}
		
		return location;
	};
	
	return{
		extractLocationFromText: extractLocationFromText
	}
	
}(jQuery));