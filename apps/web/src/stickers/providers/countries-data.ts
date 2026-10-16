export const REGIONS = [
	{ id: "Western Europe", label: "西欧", aliases: ["west europe", "西欧"] },
	{ id: "Eastern Europe", label: "东欧", aliases: ["east europe", "东欧"] },
	{ id: "Northern Europe", label: "北欧", aliases: ["north europe", "北欧"] },
	{ id: "Southern Europe", label: "南欧", aliases: ["south europe", "南欧"] },
	{ id: "South Asia", label: "南亚", aliases: ["southern asia", "南亚"] },
	{ id: "Southeast Asia", label: "东南亚", aliases: ["south east asia", "东南亚"] },
	{ id: "East Asia", label: "东亚", aliases: ["eastern asia", "far east", "东亚"] },
	{ id: "Central Asia", label: "中亚", aliases: ["中亚"] },
	{ id: "Middle East", label: "中东", aliases: ["west asia", "中东"] },
	{ id: "North Africa", label: "北非", aliases: ["northern africa", "北非"] },
	{ id: "Sub-Saharan Africa", label: "撒哈拉以南非洲", aliases: ["subsaharan africa", "撒哈拉以南非洲"] },
	{ id: "North America", label: "北美", aliases: ["northern america", "北美"] },
	{ id: "South America", label: "南美", aliases: ["southern america", "latin america", "南美"] },
	{ id: "Central America", label: "中美洲", aliases: ["central am", "中美洲"] },
	{ id: "Caribbean", label: "加勒比地区", aliases: ["caribbean islands", "加勒比地区"] },
	{ id: "Oceania", label: "大洋洲", aliases: ["pacific", "pacific islands", "大洋洲"] },
	{ id: "Antarctica", label: "南极洲", aliases: ["南极洲"] },
	{ id: "Atlantic Ocean", label: "大西洋", aliases: ["atlantic", "大西洋"] },
	{ id: "North Atlantic", label: "北大西洋", aliases: ["北大西洋"] },
] as const;

export type RegionId = (typeof REGIONS)[number]["id"];

export const REGION_GROUPS: Partial<Record<string, RegionId[]>> = {
	europe: ["Western Europe", "Eastern Europe", "Northern Europe", "Southern Europe"],
	asia: ["South Asia", "Southeast Asia", "East Asia", "Central Asia"],
	africa: ["Sub-Saharan Africa", "North Africa"],
	america: ["North America", "South America", "Central America", "Caribbean"],
};

export const REGION_GROUP_LABELS: Record<string, string> = {
	europe: "欧洲",
	asia: "亚洲",
	africa: "非洲",
	america: "美洲",
};

export interface CountryRecord {
	name: string;
	nameZh?: string;
	code: string;
	languages?: string[];
	flag_colors?: string[];
	region?: RegionId;
}

export const COUNTRIES: CountryRecord[] = [
	{
		"name": "Andorra",
		"nameZh": "安道尔",
		"code": "AD",
		"languages": ["catalan"],
		"flag_colors": ["blue", "yellow", "red"],
		"region": "Western Europe"
	},
	{
		"name": "United Arab Emirates",
		"nameZh": "阿联酋",
		"code": "AE",
		"languages": ["arabic"],
		"flag_colors": ["red", "green", "white", "black"],
		"region": "Middle East"
	},
	{
		"name": "Afghanistan",
		"nameZh": "阿富汗",
		"code": "AF",
		"languages": ["dari", "pashto"],
		"flag_colors": ["black", "red", "green"],
		"region": "South Asia"
	},
	{
		"name": "Antigua and Barbuda",
		"nameZh": "安提瓜和巴布达",
		"code": "AG",
		"languages": ["english"],
		"flag_colors": ["red", "black", "blue", "white", "yellow"],
		"region": "Caribbean"
	},
	{
		"name": "Anguilla",
		"nameZh": "安圭拉",
		"code": "AI",
		"languages": ["english"],
		"flag_colors": ["blue", "white", "orange"],
		"region": "Caribbean"
	},
	{
		"name": "Albania",
		"nameZh": "阿尔巴尼亚",
		"code": "AL",
		"languages": ["albanian"],
		"flag_colors": ["red", "black"],
		"region": "Southern Europe"
	},
	{
		"name": "Armenia",
		"nameZh": "亚美尼亚",
		"code": "AM",
		"languages": ["armenian"],
		"flag_colors": ["red", "blue", "orange"],
		"region": "Middle East"
	},
	{
		"name": "Angola",
		"nameZh": "安哥拉",
		"code": "AO",
		"languages": ["portuguese"],
		"flag_colors": ["red", "black", "yellow"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Antarctica",
		"nameZh": "南极洲",
		"code": "AQ",
		"languages": [],
		"flag_colors": [],
		"region": "Antarctica"
	},
	{
		"name": "Argentina",
		"nameZh": "阿根廷",
		"code": "AR",
		"languages": ["spanish"],
		"flag_colors": ["blue", "white", "yellow"],
		"region": "South America"
	},
	{
		"name": "American Samoa",
		"nameZh": "美属萨摩亚",
		"code": "AS",
		"languages": ["english", "samoan"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Oceania"
	},
	{
		"name": "Austria",
		"nameZh": "奥地利",
		"code": "AT",
		"languages": ["german"],
		"flag_colors": ["red", "white"],
		"region": "Western Europe"
	},
	{
		"name": "Australia",
		"nameZh": "澳大利亚",
		"code": "AU",
		"languages": ["english"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Oceania"
	},
	{
		"name": "Aruba",
		"nameZh": "阿鲁巴",
		"code": "AW",
		"languages": ["dutch", "papiamento"],
		"flag_colors": ["blue", "yellow", "red", "white"],
		"region": "Caribbean"
	},
	{
		"name": "Aland Islands",
		"nameZh": "奥兰",
		"code": "AX",
		"languages": ["swedish"],
		"flag_colors": ["blue", "yellow", "red"],
		"region": "Northern Europe"
	},
	{
		"name": "Azerbaijan",
		"nameZh": "阿塞拜疆",
		"code": "AZ",
		"languages": ["azerbaijani"],
		"flag_colors": ["blue", "red", "green", "white"],
		"region": "Middle East"
	},
	{
		"name": "Bosnia and Herzegovina",
		"nameZh": "波黑",
		"code": "BA",
		"languages": ["bosnian", "croatian", "serbian"],
		"flag_colors": ["blue", "yellow", "white"],
		"region": "Southern Europe"
	},
	{
		"name": "Barbados",
		"nameZh": "巴巴多斯",
		"code": "BB",
		"languages": ["english"],
		"flag_colors": ["blue", "yellow", "black"],
		"region": "Caribbean"
	},
	{
		"name": "Bangladesh",
		"nameZh": "孟加拉国",
		"code": "BD",
		"languages": ["bengali"],
		"flag_colors": ["green", "red"],
		"region": "South Asia"
	},
	{
		"name": "Belgium",
		"nameZh": "比利时",
		"code": "BE",
		"languages": ["french", "dutch", "german"],
		"flag_colors": ["black", "yellow", "red"],
		"region": "Western Europe"
	},
	{
		"name": "Burkina Faso",
		"nameZh": "布基纳法索",
		"code": "BF",
		"languages": ["french"],
		"flag_colors": ["red", "green", "yellow"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Bulgaria",
		"nameZh": "保加利亚",
		"code": "BG",
		"languages": ["bulgarian"],
		"flag_colors": ["white", "green", "red"],
		"region": "Eastern Europe"
	},
	{
		"name": "Bahrain",
		"nameZh": "巴林",
		"code": "BH",
		"languages": ["arabic"],
		"flag_colors": ["red", "white"],
		"region": "Middle East"
	},
	{
		"name": "Burundi",
		"nameZh": "布隆迪",
		"code": "BI",
		"languages": ["kirundi", "french", "english"],
		"flag_colors": ["red", "green", "white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Benin",
		"nameZh": "贝宁",
		"code": "BJ",
		"languages": ["french"],
		"flag_colors": ["green", "yellow", "red"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Saint Barthelemy",
		"nameZh": "圣巴泰勒米",
		"code": "BL",
		"languages": ["french"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Caribbean"
	},
	{
		"name": "Bermuda",
		"nameZh": "百慕大",
		"code": "BM",
		"languages": ["english"],
		"flag_colors": ["blue", "white", "red"],
		"region": "North Atlantic"
	},
	{
		"name": "Brunei",
		"nameZh": "文莱",
		"code": "BN",
		"languages": ["malay"],
		"flag_colors": ["yellow", "white", "black", "red"],
		"region": "Southeast Asia"
	},
	{
		"name": "Bolivia",
		"nameZh": "玻利维亚",
		"code": "BO",
		"languages": ["spanish", "quechua", "aymara"],
		"flag_colors": ["red", "yellow", "green"],
		"region": "South America"
	},
	{
		"name": "Caribbean Netherlands",
		"nameZh": "荷兰加勒比区",
		"code": "BQ",
		"languages": ["dutch", "papiamento", "english"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Caribbean"
	},
	{
		"name": "Brazil",
		"nameZh": "巴西",
		"code": "BR",
		"languages": ["portuguese"],
		"flag_colors": ["green", "yellow", "blue", "white"],
		"region": "South America"
	},
	{
		"name": "Bahamas",
		"nameZh": "巴哈马",
		"code": "BS",
		"languages": ["english"],
		"flag_colors": ["blue", "yellow", "black"],
		"region": "Caribbean"
	},
	{
		"name": "Bhutan",
		"nameZh": "不丹",
		"code": "BT",
		"languages": ["dzongkha"],
		"flag_colors": ["yellow", "orange", "white"],
		"region": "South Asia"
	},
	{
		"name": "Bouvet Island",
		"nameZh": "布韦岛",
		"code": "BV",
		"languages": [],
		"flag_colors": ["red", "white", "blue"],
		"region": "Antarctica"
	},
	{
		"name": "Botswana",
		"nameZh": "博茨瓦纳",
		"code": "BW",
		"languages": ["english", "tswana"],
		"flag_colors": ["blue", "black", "white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Belarus",
		"nameZh": "白俄罗斯",
		"code": "BY",
		"languages": ["belarusian", "russian"],
		"flag_colors": ["red", "green", "white"],
		"region": "Eastern Europe"
	},
	{
		"name": "Belize",
		"nameZh": "伯利兹",
		"code": "BZ",
		"languages": ["english"],
		"flag_colors": ["blue", "red", "white"],
		"region": "Central America"
	},
	{
		"name": "Canada",
		"nameZh": "加拿大",
		"code": "CA",
		"languages": ["english", "french"],
		"flag_colors": ["red", "white"],
		"region": "North America"
	},
	{
		"name": "Cocos (Keeling) Islands",
		"nameZh": "科科斯（基林）群岛",
		"code": "CC",
		"languages": ["english"],
		"flag_colors": ["green", "red", "yellow", "white"],
		"region": "Southeast Asia"
	},
	{
		"name": "Democratic Republic of the Congo",
		"nameZh": "刚果（金）",
		"code": "CD",
		"languages": ["french", "lingala", "swahili", "tshiluba", "kikongo"],
		"flag_colors": ["blue", "red", "yellow"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Central African Republic",
		"nameZh": "中非",
		"code": "CF",
		"languages": ["french", "sango"],
		"flag_colors": ["blue", "white", "green", "yellow", "red"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Republic of the Congo",
		"nameZh": "刚果（布）",
		"code": "CG",
		"languages": ["french", "lingala", "kituba"],
		"flag_colors": ["green", "yellow", "red"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Switzerland",
		"nameZh": "瑞士",
		"code": "CH",
		"languages": ["german", "french", "italian"],
		"flag_colors": ["red", "white"],
		"region": "Western Europe"
	},
	{
		"name": "Cote d'Ivoire",
		"nameZh": "科特迪瓦",
		"code": "CI",
		"languages": ["french"],
		"flag_colors": ["orange", "white", "green"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Cook Islands",
		"nameZh": "库克群岛",
		"code": "CK",
		"languages": ["english", "cook islands maori"],
		"flag_colors": ["blue", "white"],
		"region": "Oceania"
	},
	{
		"name": "Chile",
		"nameZh": "智利",
		"code": "CL",
		"languages": ["spanish"],
		"flag_colors": ["white", "red", "blue"],
		"region": "South America"
	},
	{
		"name": "Cameroon",
		"nameZh": "喀麦隆",
		"code": "CM",
		"languages": ["english", "french"],
		"flag_colors": ["green", "red", "yellow"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "China",
		"nameZh": "中国",
		"code": "CN",
		"languages": ["mandarin"],
		"flag_colors": ["red", "yellow"],
		"region": "East Asia"
	},
	{
		"name": "Colombia",
		"nameZh": "哥伦比亚",
		"code": "CO",
		"languages": ["spanish"],
		"flag_colors": ["yellow", "blue", "red"],
		"region": "South America"
	},
	{
		"name": "Costa Rica",
		"nameZh": "哥斯达黎加",
		"code": "CR",
		"languages": ["spanish"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Central America"
	},
	{
		"name": "Cuba",
		"nameZh": "古巴",
		"code": "CU",
		"languages": ["spanish"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Caribbean"
	},
	{
		"name": "Cape Verde",
		"nameZh": "佛得角",
		"code": "CV",
		"languages": ["portuguese"],
		"flag_colors": ["blue", "white", "red", "yellow"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Curacao",
		"nameZh": "库拉索",
		"code": "CW",
		"languages": ["dutch", "papiamento", "english"],
		"flag_colors": ["blue", "yellow", "white"],
		"region": "Caribbean"
	},
	{
		"name": "Christmas Island",
		"nameZh": "圣诞岛",
		"code": "CX",
		"languages": ["english"],
		"flag_colors": ["green", "blue", "yellow", "white"],
		"region": "Oceania"
	},
	{
		"name": "Cyprus",
		"nameZh": "塞浦路斯",
		"code": "CY",
		"languages": ["greek", "turkish"],
		"flag_colors": ["white", "orange", "green"],
		"region": "Middle East"
	},
	{
		"name": "Czechia",
		"nameZh": "捷克",
		"code": "CZ",
		"languages": ["czech"],
		"flag_colors": ["white", "red", "blue"],
		"region": "Eastern Europe"
	},
	{
		"name": "Germany",
		"nameZh": "德国",
		"code": "DE",
		"languages": ["german"],
		"flag_colors": ["black", "red", "yellow"],
		"region": "Western Europe"
	},
	{
		"name": "Djibouti",
		"nameZh": "吉布提",
		"code": "DJ",
		"languages": ["arabic", "french", "afar", "somali"],
		"flag_colors": ["blue", "green", "white", "red"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Denmark",
		"nameZh": "丹麦",
		"code": "DK",
		"languages": ["danish"],
		"flag_colors": ["red", "white"],
		"region": "Northern Europe"
	},
	{
		"name": "Dominica",
		"nameZh": "多米尼克",
		"code": "DM",
		"languages": ["english"],
		"flag_colors": ["green", "yellow", "black", "white", "red"],
		"region": "Caribbean"
	},
	{
		"name": "Dominican Republic",
		"nameZh": "多米尼加",
		"code": "DO",
		"languages": ["spanish"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Caribbean"
	},
	{
		"name": "Algeria",
		"nameZh": "阿尔及利亚",
		"code": "DZ",
		"languages": ["arabic", "tamazight"],
		"flag_colors": ["green", "white", "red"],
		"region": "North Africa"
	},
	{
		"name": "Ecuador",
		"nameZh": "厄瓜多尔",
		"code": "EC",
		"languages": ["spanish"],
		"flag_colors": ["yellow", "blue", "red"],
		"region": "South America"
	},
	{
		"name": "Estonia",
		"nameZh": "爱沙尼亚",
		"code": "EE",
		"languages": ["estonian"],
		"flag_colors": ["blue", "black", "white"],
		"region": "Northern Europe"
	},
	{
		"name": "Egypt",
		"nameZh": "埃及",
		"code": "EG",
		"languages": ["arabic"],
		"flag_colors": ["red", "white", "black", "yellow"],
		"region": "North Africa"
	},
	{
		"name": "Western Sahara",
		"nameZh": "阿拉伯撒哈拉民主共和国",
		"code": "EH",
		"languages": ["arabic", "spanish"],
		"flag_colors": ["black", "white", "green", "red"],
		"region": "North Africa"
	},
	{
		"name": "Eritrea",
		"nameZh": "厄立特里亚",
		"code": "ER",
		"languages": ["tigrinya", "arabic", "english"],
		"flag_colors": ["red", "green", "blue", "yellow"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Spain",
		"nameZh": "西班牙",
		"code": "ES",
		"languages": ["spanish"],
		"flag_colors": ["red", "yellow"],
		"region": "Southern Europe"
	},
	{
		"name": "Ethiopia",
		"nameZh": "埃塞俄比亚",
		"code": "ET",
		"languages": ["amharic", "oromo"],
		"flag_colors": ["green", "yellow", "red", "blue"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "European Union",
		"nameZh": "欧盟",
		"code": "EU",
		"languages": ["english", "french", "german"],
		"flag_colors": ["blue", "yellow"],
		"region": "Western Europe"
	},
	{
		"name": "Finland",
		"nameZh": "芬兰",
		"code": "FI",
		"languages": ["finnish", "swedish"],
		"flag_colors": ["white", "blue"],
		"region": "Northern Europe"
	},
	{
		"name": "Fiji",
		"nameZh": "斐济",
		"code": "FJ",
		"languages": ["english", "fijian", "hindi"],
		"flag_colors": ["blue", "white", "red", "yellow"],
		"region": "Oceania"
	},
	{
		"name": "Falkland Islands",
		"nameZh": "福克兰群岛",
		"code": "FK",
		"languages": ["english"],
		"flag_colors": ["blue", "white", "red", "yellow"],
		"region": "South America"
	},
	{
		"name": "Micronesia",
		"nameZh": "密克罗尼西亚联邦",
		"code": "FM",
		"languages": ["english"],
		"flag_colors": ["blue", "white"],
		"region": "Oceania"
	},
	{
		"name": "Faroe Islands",
		"nameZh": "法罗群岛",
		"code": "FO",
		"languages": ["faroese", "danish"],
		"flag_colors": ["white", "red", "blue"],
		"region": "Northern Europe"
	},
	{
		"name": "France",
		"nameZh": "法国",
		"code": "FR",
		"languages": ["french"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Western Europe"
	},
	{
		"name": "Gabon",
		"nameZh": "加蓬",
		"code": "GA",
		"languages": ["french"],
		"flag_colors": ["green", "yellow", "blue"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "England",
		"nameZh": "英格兰",
		"code": "GB-ENG",
		"languages": ["english"],
		"flag_colors": ["red", "white"],
		"region": "Western Europe"
	},
	{
		"name": "Northern Ireland",
		"nameZh": "北爱尔兰",
		"code": "GB-NIR",
		"languages": ["english", "irish"],
		"flag_colors": ["white", "red"],
		"region": "Western Europe"
	},
	{
		"name": "Scotland",
		"nameZh": "苏格兰",
		"code": "GB-SCT",
		"languages": ["english", "scottish gaelic"],
		"flag_colors": ["blue", "white"],
		"region": "Western Europe"
	},
	{
		"name": "Wales",
		"nameZh": "威尔士",
		"code": "GB-WLS",
		"languages": ["english", "welsh"],
		"flag_colors": ["green", "white", "red"],
		"region": "Western Europe"
	},
	{
		"name": "United Kingdom",
		"nameZh": "英国",
		"code": "GB",
		"languages": ["english"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Western Europe"
	},
	{
		"name": "Grenada",
		"nameZh": "格林纳达",
		"code": "GD",
		"languages": ["english"],
		"flag_colors": ["red", "yellow", "green", "black"],
		"region": "Caribbean"
	},
	{
		"name": "Georgia",
		"nameZh": "格鲁吉亚",
		"code": "GE",
		"languages": ["georgian"],
		"flag_colors": ["white", "red"],
		"region": "Middle East"
	},
	{
		"name": "French Guiana",
		"nameZh": "法属圭亚那",
		"code": "GF",
		"languages": ["french"],
		"flag_colors": ["green", "yellow", "red"],
		"region": "South America"
	},
	{
		"name": "Guernsey",
		"nameZh": "根西",
		"code": "GG",
		"languages": ["english", "french"],
		"flag_colors": ["white", "red", "yellow"],
		"region": "Western Europe"
	},
	{
		"name": "Ghana",
		"nameZh": "加纳",
		"code": "GH",
		"languages": ["english"],
		"flag_colors": ["red", "yellow", "green", "black"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Gibraltar",
		"nameZh": "直布罗陀",
		"code": "GI",
		"languages": ["english"],
		"flag_colors": ["red", "white", "yellow"],
		"region": "Southern Europe"
	},
	{
		"name": "Greenland",
		"nameZh": "格陵兰",
		"code": "GL",
		"languages": ["kalaallisut", "danish"],
		"flag_colors": ["red", "white"],
		"region": "North America"
	},
	{
		"name": "Gambia",
		"nameZh": "冈比亚",
		"code": "GM",
		"languages": ["english"],
		"flag_colors": ["red", "blue", "green", "white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Guinea",
		"nameZh": "几内亚",
		"code": "GN",
		"languages": ["french"],
		"flag_colors": ["red", "yellow", "green"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Guadeloupe",
		"nameZh": "瓜德罗普",
		"code": "GP",
		"languages": ["french"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Caribbean"
	},
	{
		"name": "Equatorial Guinea",
		"nameZh": "赤道几内亚",
		"code": "GQ",
		"languages": ["spanish", "french", "portuguese"],
		"flag_colors": ["green", "white", "red", "blue", "yellow"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Greece",
		"nameZh": "希腊",
		"code": "GR",
		"languages": ["greek"],
		"flag_colors": ["blue", "white"],
		"region": "Southern Europe"
	},
	{
		"name": "South Georgia and the South Sandwich Islands",
		"nameZh": "南乔治亚和南桑威奇群岛",
		"code": "GS",
		"languages": [],
		"flag_colors": ["blue", "white", "yellow"],
		"region": "Atlantic Ocean"
	},
	{
		"name": "Guatemala",
		"nameZh": "危地马拉",
		"code": "GT",
		"languages": ["spanish"],
		"flag_colors": ["blue", "white"],
		"region": "Central America"
	},
	{
		"name": "Guam",
		"nameZh": "关岛",
		"code": "GU",
		"languages": ["english", "chamorro"],
		"flag_colors": ["blue", "red"],
		"region": "Oceania"
	},
	{
		"name": "Guinea-Bissau",
		"nameZh": "几内亚比绍",
		"code": "GW",
		"languages": ["portuguese"],
		"flag_colors": ["red", "yellow", "green", "black"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Guyana",
		"nameZh": "圭亚那",
		"code": "GY",
		"languages": ["english"],
		"flag_colors": ["green", "yellow", "red", "black", "white"],
		"region": "South America"
	},
	{
		"name": "Hong Kong",
		"nameZh": "香港",
		"code": "HK",
		"languages": ["cantonese", "english"],
		"flag_colors": ["red", "white"],
		"region": "East Asia"
	},
	{
		"name": "Heard Island and McDonald Islands",
		"nameZh": "赫德岛和麦克唐纳群岛",
		"code": "HM",
		"languages": [],
		"flag_colors": ["blue", "white", "red"],
		"region": "Oceania"
	},
	{
		"name": "Honduras",
		"nameZh": "洪都拉斯",
		"code": "HN",
		"languages": ["spanish"],
		"flag_colors": ["blue", "white"],
		"region": "Central America"
	},
	{
		"name": "Croatia",
		"nameZh": "克罗地亚",
		"code": "HR",
		"languages": ["croatian"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Southern Europe"
	},
	{
		"name": "Haiti",
		"nameZh": "海地",
		"code": "HT",
		"languages": ["haitian creole", "french"],
		"flag_colors": ["blue", "red", "white"],
		"region": "Caribbean"
	},
	{
		"name": "Hungary",
		"nameZh": "匈牙利",
		"code": "HU",
		"languages": ["hungarian"],
		"flag_colors": ["red", "white", "green"],
		"region": "Eastern Europe"
	},
	{
		"name": "Indonesia",
		"nameZh": "印尼",
		"code": "ID",
		"languages": ["indonesian"],
		"flag_colors": ["red", "white"],
		"region": "Southeast Asia"
	},
	{
		"name": "Ireland",
		"nameZh": "爱尔兰",
		"code": "IE",
		"languages": ["english", "irish"],
		"flag_colors": ["green", "white", "orange"],
		"region": "Western Europe"
	},
	{
		"name": "Israel",
		"nameZh": "以色列",
		"code": "IL",
		"languages": ["hebrew", "arabic"],
		"flag_colors": ["blue", "white"],
		"region": "Middle East"
	},
	{
		"name": "Isle of Man",
		"nameZh": "马恩岛",
		"code": "IM",
		"languages": ["english", "manx"],
		"flag_colors": ["red", "yellow"],
		"region": "Western Europe"
	},
	{
		"name": "India",
		"nameZh": "印度",
		"code": "IN",
		"languages": ["hindi", "english"],
		"flag_colors": ["orange", "white", "green", "blue"],
		"region": "South Asia"
	},
	{
		"name": "British Indian Ocean Territory",
		"nameZh": "英属印度洋领地",
		"code": "IO",
		"languages": ["english"],
		"flag_colors": ["blue", "white", "red", "yellow"],
		"region": "South Asia"
	},
	{
		"name": "Iraq",
		"nameZh": "伊拉克",
		"code": "IQ",
		"languages": ["arabic", "kurdish"],
		"flag_colors": ["red", "white", "black", "green"],
		"region": "Middle East"
	},
	{
		"name": "Iran",
		"nameZh": "伊朗",
		"code": "IR",
		"languages": ["persian"],
		"flag_colors": ["green", "white", "red"],
		"region": "Middle East"
	},
	{
		"name": "Iceland",
		"nameZh": "冰岛",
		"code": "IS",
		"languages": ["icelandic"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Northern Europe"
	},
	{
		"name": "Italy",
		"nameZh": "意大利",
		"code": "IT",
		"languages": ["italian"],
		"flag_colors": ["green", "white", "red"],
		"region": "Southern Europe"
	},
	{
		"name": "Jersey",
		"nameZh": "泽西",
		"code": "JE",
		"languages": ["english", "french"],
		"flag_colors": ["white", "red", "yellow"],
		"region": "Western Europe"
	},
	{
		"name": "Jamaica",
		"nameZh": "牙买加",
		"code": "JM",
		"languages": ["english"],
		"flag_colors": ["green", "yellow", "black"],
		"region": "Caribbean"
	},
	{
		"name": "Jordan",
		"nameZh": "约旦",
		"code": "JO",
		"languages": ["arabic"],
		"flag_colors": ["black", "white", "green", "red"],
		"region": "Middle East"
	},
	{
		"name": "Japan",
		"nameZh": "日本",
		"code": "JP",
		"languages": ["japanese"],
		"flag_colors": ["red", "white"],
		"region": "East Asia"
	},
	{
		"name": "Kenya",
		"nameZh": "肯尼亚",
		"code": "KE",
		"languages": ["english", "swahili"],
		"flag_colors": ["black", "red", "green", "white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Kyrgyzstan",
		"nameZh": "吉尔吉斯斯坦",
		"code": "KG",
		"languages": ["kyrgyz", "russian"],
		"flag_colors": ["red", "yellow"],
		"region": "Central Asia"
	},
	{
		"name": "Cambodia",
		"nameZh": "柬埔寨",
		"code": "KH",
		"languages": ["khmer"],
		"flag_colors": ["blue", "red", "white"],
		"region": "Southeast Asia"
	},
	{
		"name": "Kiribati",
		"nameZh": "基里巴斯",
		"code": "KI",
		"languages": ["english", "kiribati"],
		"flag_colors": ["red", "blue", "white", "yellow"],
		"region": "Oceania"
	},
	{
		"name": "Comoros",
		"nameZh": "科摩罗",
		"code": "KM",
		"languages": ["comorian", "arabic", "french"],
		"flag_colors": ["green", "yellow", "white", "red", "blue"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Saint Kitts and Nevis",
		"nameZh": "圣基茨和尼维斯",
		"code": "KN",
		"languages": ["english"],
		"flag_colors": ["green", "red", "black", "yellow", "white"],
		"region": "Caribbean"
	},
	{
		"name": "North Korea",
		"nameZh": "朝鲜",
		"code": "KP",
		"languages": ["korean"],
		"flag_colors": ["red", "blue", "white"],
		"region": "East Asia"
	},
	{
		"name": "South Korea",
		"nameZh": "韩国",
		"code": "KR",
		"languages": ["korean"],
		"flag_colors": ["white", "red", "blue", "black"],
		"region": "East Asia"
	},
	{
		"name": "Kuwait",
		"nameZh": "科威特",
		"code": "KW",
		"languages": ["arabic"],
		"flag_colors": ["green", "white", "red", "black"],
		"region": "Middle East"
	},
	{
		"name": "Cayman Islands",
		"nameZh": "开曼群岛",
		"code": "KY",
		"languages": ["english"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Caribbean"
	},
	{
		"name": "Kazakhstan",
		"nameZh": "哈萨克斯坦",
		"code": "KZ",
		"languages": ["kazakh", "russian"],
		"flag_colors": ["blue", "yellow"],
		"region": "Central Asia"
	},
	{
		"name": "Laos",
		"nameZh": "老挝",
		"code": "LA",
		"languages": ["lao"],
		"flag_colors": ["red", "blue", "white"],
		"region": "Southeast Asia"
	},
	{
		"name": "Lebanon",
		"nameZh": "黎巴嫩",
		"code": "LB",
		"languages": ["arabic"],
		"flag_colors": ["red", "white", "green"],
		"region": "Middle East"
	},
	{
		"name": "Saint Lucia",
		"nameZh": "圣卢西亚",
		"code": "LC",
		"languages": ["english"],
		"flag_colors": ["blue", "yellow", "black", "white"],
		"region": "Caribbean"
	},
	{
		"name": "Liechtenstein",
		"nameZh": "列支敦士登",
		"code": "LI",
		"languages": ["german"],
		"flag_colors": ["blue", "red", "yellow"],
		"region": "Western Europe"
	},
	{
		"name": "Sri Lanka",
		"nameZh": "斯里兰卡",
		"code": "LK",
		"languages": ["sinhala", "tamil"],
		"flag_colors": ["yellow", "green", "orange", "red"],
		"region": "South Asia"
	},
	{
		"name": "Liberia",
		"nameZh": "利比里亚",
		"code": "LR",
		"languages": ["english"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Lesotho",
		"nameZh": "莱索托",
		"code": "LS",
		"languages": ["sesotho", "english"],
		"flag_colors": ["blue", "white", "green", "black"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Lithuania",
		"nameZh": "立陶宛",
		"code": "LT",
		"languages": ["lithuanian"],
		"flag_colors": ["yellow", "green", "red"],
		"region": "Northern Europe"
	},
	{
		"name": "Luxembourg",
		"nameZh": "卢森堡",
		"code": "LU",
		"languages": ["luxembourgish", "french", "german"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Western Europe"
	},
	{
		"name": "Latvia",
		"nameZh": "拉脱维亚",
		"code": "LV",
		"languages": ["latvian"],
		"flag_colors": ["red", "white"],
		"region": "Northern Europe"
	},
	{
		"name": "Libya",
		"nameZh": "利比亚",
		"code": "LY",
		"languages": ["arabic"],
		"flag_colors": ["red", "black", "green", "white"],
		"region": "North Africa"
	},
	{
		"name": "Morocco",
		"nameZh": "摩洛哥",
		"code": "MA",
		"languages": ["arabic", "tamazight"],
		"flag_colors": ["red", "green"],
		"region": "North Africa"
	},
	{
		"name": "Monaco",
		"nameZh": "摩纳哥",
		"code": "MC",
		"languages": ["french"],
		"flag_colors": ["red", "white"],
		"region": "Western Europe"
	},
	{
		"name": "Moldova",
		"nameZh": "摩尔多瓦",
		"code": "MD",
		"languages": ["romanian"],
		"flag_colors": ["blue", "yellow", "red"],
		"region": "Eastern Europe"
	},
	{
		"name": "Montenegro",
		"nameZh": "黑山",
		"code": "ME",
		"languages": ["montenegrin"],
		"flag_colors": ["red", "yellow"],
		"region": "Southern Europe"
	},
	{
		"name": "Saint Martin",
		"nameZh": "法属圣马丁",
		"code": "MF",
		"languages": ["french"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Caribbean"
	},
	{
		"name": "Madagascar",
		"nameZh": "马达加斯加",
		"code": "MG",
		"languages": ["malagasy", "french"],
		"flag_colors": ["white", "red", "green"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Marshall Islands",
		"nameZh": "马绍尔群岛",
		"code": "MH",
		"languages": ["marshallese", "english"],
		"flag_colors": ["blue", "white", "orange"],
		"region": "Oceania"
	},
	{
		"name": "North Macedonia",
		"nameZh": "北马其顿",
		"code": "MK",
		"languages": ["macedonian", "albanian"],
		"flag_colors": ["red", "yellow"],
		"region": "Southern Europe"
	},
	{
		"name": "Mali",
		"nameZh": "马里",
		"code": "ML",
		"languages": ["french"],
		"flag_colors": ["green", "yellow", "red"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Myanmar",
		"nameZh": "缅甸",
		"code": "MM",
		"languages": ["burmese"],
		"flag_colors": ["yellow", "green", "red", "white"],
		"region": "Southeast Asia"
	},
	{
		"name": "Mongolia",
		"nameZh": "蒙古",
		"code": "MN",
		"languages": ["mongolian"],
		"flag_colors": ["red", "blue", "yellow"],
		"region": "East Asia"
	},
	{
		"name": "Macao",
		"nameZh": "澳门",
		"code": "MO",
		"languages": ["cantonese", "portuguese"],
		"flag_colors": ["green", "white", "yellow"],
		"region": "East Asia"
	},
	{
		"name": "Northern Mariana Islands",
		"nameZh": "北马里亚纳群岛",
		"code": "MP",
		"languages": ["english", "chamorro", "carolinian"],
		"flag_colors": ["blue", "white"],
		"region": "Oceania"
	},
	{
		"name": "Martinique",
		"nameZh": "马提尼克",
		"code": "MQ",
		"languages": ["french"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Caribbean"
	},
	{
		"name": "Mauritania",
		"nameZh": "毛里塔尼亚",
		"code": "MR",
		"languages": ["arabic"],
		"flag_colors": ["green", "yellow", "red"],
		"region": "North Africa"
	},
	{
		"name": "Montserrat",
		"nameZh": "蒙特塞拉特",
		"code": "MS",
		"languages": ["english"],
		"flag_colors": ["blue", "green", "white", "yellow", "red"],
		"region": "Caribbean"
	},
	{
		"name": "Malta",
		"nameZh": "马耳他",
		"code": "MT",
		"languages": ["maltese", "english"],
		"flag_colors": ["white", "red"],
		"region": "Southern Europe"
	},
	{
		"name": "Mauritius",
		"nameZh": "毛里求斯",
		"code": "MU",
		"languages": ["english", "french", "mauritian creole"],
		"flag_colors": ["red", "blue", "yellow", "green"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Maldives",
		"nameZh": "马尔代夫",
		"code": "MV",
		"languages": ["divehi"],
		"flag_colors": ["red", "green", "white"],
		"region": "South Asia"
	},
	{
		"name": "Malawi",
		"nameZh": "马拉维",
		"code": "MW",
		"languages": ["english", "chichewa"],
		"flag_colors": ["black", "red", "green"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Mexico",
		"nameZh": "墨西哥",
		"code": "MX",
		"languages": ["spanish"],
		"flag_colors": ["green", "white", "red"],
		"region": "North America"
	},
	{
		"name": "Malaysia",
		"nameZh": "马来西亚",
		"code": "MY",
		"languages": ["malay"],
		"flag_colors": ["red", "white", "blue", "yellow"],
		"region": "Southeast Asia"
	},
	{
		"name": "Mozambique",
		"nameZh": "莫桑比克",
		"code": "MZ",
		"languages": ["portuguese"],
		"flag_colors": ["green", "black", "yellow", "white", "red"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Namibia",
		"nameZh": "纳米比亚",
		"code": "NA",
		"languages": ["english"],
		"flag_colors": ["blue", "red", "green", "white", "yellow"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "New Caledonia",
		"nameZh": "新喀里多尼亚",
		"code": "NC",
		"languages": ["french"],
		"flag_colors": ["blue", "red", "green", "yellow", "black"],
		"region": "Oceania"
	},
	{
		"name": "Niger",
		"nameZh": "尼日尔",
		"code": "NE",
		"languages": ["french"],
		"flag_colors": ["orange", "white", "green"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Norfolk Island",
		"nameZh": "诺福克岛",
		"code": "NF",
		"languages": ["english", "norfuk"],
		"flag_colors": ["green", "white"],
		"region": "Oceania"
	},
	{
		"name": "Nigeria",
		"nameZh": "尼日利亚",
		"code": "NG",
		"languages": ["english"],
		"flag_colors": ["green", "white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Nicaragua",
		"nameZh": "尼加拉瓜",
		"code": "NI",
		"languages": ["spanish"],
		"flag_colors": ["blue", "white"],
		"region": "Central America"
	},
	{
		"name": "Netherlands",
		"nameZh": "荷兰",
		"code": "NL",
		"languages": ["dutch"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Western Europe"
	},
	{
		"name": "Norway",
		"nameZh": "挪威",
		"code": "NO",
		"languages": ["norwegian"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Northern Europe"
	},
	{
		"name": "Nepal",
		"nameZh": "尼泊尔",
		"code": "NP",
		"languages": ["nepali"],
		"flag_colors": ["red", "blue", "white"],
		"region": "South Asia"
	},
	{
		"name": "Nauru",
		"nameZh": "瑙鲁",
		"code": "NR",
		"languages": ["nauruan", "english"],
		"flag_colors": ["blue", "yellow", "white"],
		"region": "Oceania"
	},
	{
		"name": "Niue",
		"nameZh": "纽埃",
		"code": "NU",
		"languages": ["niuean", "english"],
		"flag_colors": ["yellow", "blue", "white", "red"],
		"region": "Oceania"
	},
	{
		"name": "New Zealand",
		"nameZh": "新西兰",
		"code": "NZ",
		"languages": ["english", "maori"],
		"flag_colors": ["blue", "red", "white"],
		"region": "Oceania"
	},
	{
		"name": "Oman",
		"nameZh": "阿曼",
		"code": "OM",
		"languages": ["arabic"],
		"flag_colors": ["red", "white", "green"],
		"region": "Middle East"
	},
	{
		"name": "Panama",
		"nameZh": "巴拿马",
		"code": "PA",
		"languages": ["spanish"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Central America"
	},
	{
		"name": "Peru",
		"nameZh": "秘鲁",
		"code": "PE",
		"languages": ["spanish", "quechua", "aymara"],
		"flag_colors": ["red", "white"],
		"region": "South America"
	},
	{
		"name": "French Polynesia",
		"nameZh": "法属波利尼西亚",
		"code": "PF",
		"languages": ["french", "tahitian"],
		"flag_colors": ["red", "white"],
		"region": "Oceania"
	},
	{
		"name": "Papua New Guinea",
		"nameZh": "巴布亚新几内亚",
		"code": "PG",
		"languages": ["english", "tok pisin", "hiri motu"],
		"flag_colors": ["red", "black", "yellow", "white"],
		"region": "Oceania"
	},
	{
		"name": "Philippines",
		"nameZh": "菲律宾",
		"code": "PH",
		"languages": ["filipino", "english"],
		"flag_colors": ["blue", "red", "white", "yellow"],
		"region": "Southeast Asia"
	},
	{
		"name": "Pakistan",
		"nameZh": "巴基斯坦",
		"code": "PK",
		"languages": ["urdu", "english"],
		"flag_colors": ["green", "white"],
		"region": "South Asia"
	},
	{
		"name": "Poland",
		"nameZh": "波兰",
		"code": "PL",
		"languages": ["polish"],
		"flag_colors": ["white", "red"],
		"region": "Eastern Europe"
	},
	{
		"name": "Saint Pierre and Miquelon",
		"nameZh": "圣皮埃尔和密克隆",
		"code": "PM",
		"languages": ["french"],
		"flag_colors": ["blue", "white", "red", "yellow", "black"],
		"region": "North America"
	},
	{
		"name": "Pitcairn Islands",
		"nameZh": "皮特凯恩群岛",
		"code": "PN",
		"languages": ["english", "pitkern"],
		"flag_colors": ["blue", "green", "yellow", "red", "white"],
		"region": "Oceania"
	},
	{
		"name": "Puerto Rico",
		"nameZh": "波多黎各",
		"code": "PR",
		"languages": ["spanish", "english"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Caribbean"
	},
	{
		"name": "Palestine",
		"nameZh": "巴勒斯坦",
		"code": "PS",
		"languages": ["arabic"],
		"flag_colors": ["red", "green", "white", "black"],
		"region": "Middle East"
	},
	{
		"name": "Portugal",
		"nameZh": "葡萄牙",
		"code": "PT",
		"languages": ["portuguese"],
		"flag_colors": ["green", "red", "yellow"],
		"region": "Southern Europe"
	},
	{
		"name": "Palau",
		"nameZh": "帕劳",
		"code": "PW",
		"languages": ["palauan", "english"],
		"flag_colors": ["blue", "yellow"],
		"region": "Oceania"
	},
	{
		"name": "Paraguay",
		"nameZh": "巴拉圭",
		"code": "PY",
		"languages": ["spanish", "guarani"],
		"flag_colors": ["red", "white", "blue", "yellow"],
		"region": "South America"
	},
	{
		"name": "Qatar",
		"nameZh": "卡塔尔",
		"code": "QA",
		"languages": ["arabic"],
		"flag_colors": ["red", "white"],
		"region": "Middle East"
	},
	{
		"name": "Reunion",
		"nameZh": "留尼汪",
		"code": "RE",
		"languages": ["french", "reunion creole"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Romania",
		"nameZh": "罗马尼亚",
		"code": "RO",
		"languages": ["romanian"],
		"flag_colors": ["blue", "yellow", "red"],
		"region": "Eastern Europe"
	},
	{
		"name": "Serbia",
		"nameZh": "塞尔维亚",
		"code": "RS",
		"languages": ["serbian"],
		"flag_colors": ["red", "blue", "white", "yellow"],
		"region": "Eastern Europe"
	},
	{
		"name": "Russia",
		"nameZh": "俄罗斯",
		"code": "RU",
		"languages": ["russian"],
		"flag_colors": ["white", "blue", "red"],
		"region": "Eastern Europe"
	},
	{
		"name": "Rwanda",
		"nameZh": "卢旺达",
		"code": "RW",
		"languages": ["kinyarwanda", "french", "english"],
		"flag_colors": ["blue", "yellow", "green"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Saudi Arabia",
		"nameZh": "沙特阿拉伯",
		"code": "SA",
		"languages": ["arabic"],
		"flag_colors": ["green", "white"],
		"region": "Middle East"
	},
	{
		"name": "Solomon Islands",
		"nameZh": "所罗门群岛",
		"code": "SB",
		"languages": ["english"],
		"flag_colors": ["blue", "green", "yellow", "white"],
		"region": "Oceania"
	},
	{
		"name": "Seychelles",
		"nameZh": "塞舌尔",
		"code": "SC",
		"languages": ["seychellois creole", "english", "french"],
		"flag_colors": ["blue", "yellow", "red", "white", "green"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Sudan",
		"nameZh": "苏丹",
		"code": "SD",
		"languages": ["arabic", "english"],
		"flag_colors": ["red", "white", "black", "green"],
		"region": "North Africa"
	},
	{
		"name": "Sweden",
		"nameZh": "瑞典",
		"code": "SE",
		"languages": ["swedish"],
		"flag_colors": ["blue", "yellow"],
		"region": "Northern Europe"
	},
	{
		"name": "Singapore",
		"nameZh": "新加坡",
		"code": "SG",
		"languages": ["english", "malay", "mandarin", "tamil"],
		"flag_colors": ["red", "white"],
		"region": "Southeast Asia"
	},
	{
		"name": "Saint Helena",
		"nameZh": "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
		"code": "SH",
		"languages": ["english"],
		"flag_colors": ["blue", "red", "white", "yellow", "green"],
		"region": "Atlantic Ocean"
	},
	{
		"name": "Slovenia",
		"nameZh": "斯洛文尼亚",
		"code": "SI",
		"languages": ["slovenian"],
		"flag_colors": ["white", "blue", "red"],
		"region": "Southern Europe"
	},
	{
		"name": "Svalbard and Jan Mayen",
		"nameZh": "斯瓦尔巴和扬马延",
		"code": "SJ",
		"languages": ["norwegian"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Northern Europe"
	},
	{
		"name": "Slovakia",
		"nameZh": "斯洛伐克",
		"code": "SK",
		"languages": ["slovak"],
		"flag_colors": ["white", "blue", "red"],
		"region": "Eastern Europe"
	},
	{
		"name": "Sierra Leone",
		"nameZh": "塞拉利昂",
		"code": "SL",
		"languages": ["english"],
		"flag_colors": ["green", "white", "blue"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "San Marino",
		"nameZh": "圣马力诺",
		"code": "SM",
		"languages": ["italian"],
		"flag_colors": ["white", "blue"],
		"region": "Southern Europe"
	},
	{
		"name": "Senegal",
		"nameZh": "塞内加尔",
		"code": "SN",
		"languages": ["french"],
		"flag_colors": ["green", "yellow", "red"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Somalia",
		"nameZh": "索马里",
		"code": "SO",
		"languages": ["somali", "arabic"],
		"flag_colors": ["blue", "white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Suriname",
		"nameZh": "苏里南",
		"code": "SR",
		"languages": ["dutch"],
		"flag_colors": ["green", "white", "red", "yellow"],
		"region": "South America"
	},
	{
		"name": "South Sudan",
		"nameZh": "南苏丹",
		"code": "SS",
		"languages": ["english"],
		"flag_colors": ["black", "red", "green", "blue", "white", "yellow"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Sao Tome and Principe",
		"nameZh": "圣多美和普林西比",
		"code": "ST",
		"languages": ["portuguese"],
		"flag_colors": ["green", "yellow", "red", "black"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "El Salvador",
		"nameZh": "萨尔瓦多",
		"code": "SV",
		"languages": ["spanish"],
		"flag_colors": ["blue", "white"],
		"region": "Central America"
	},
	{
		"name": "Sint Maarten",
		"nameZh": "荷属圣马丁",
		"code": "SX",
		"languages": ["dutch", "english"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Caribbean"
	},
	{
		"name": "Syria",
		"nameZh": "叙利亚",
		"code": "SY",
		"languages": ["arabic"],
		"flag_colors": ["red", "white", "black", "green"],
		"region": "Middle East"
	},
	{
		"name": "Eswatini",
		"nameZh": "斯威士兰",
		"code": "SZ",
		"languages": ["swazi", "english"],
		"flag_colors": ["blue", "red", "yellow", "black", "white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Turks and Caicos Islands",
		"nameZh": "特克斯和凯科斯群岛",
		"code": "TC",
		"languages": ["english"],
		"flag_colors": ["blue", "red", "white", "yellow", "green"],
		"region": "Caribbean"
	},
	{
		"name": "Chad",
		"nameZh": "乍得",
		"code": "TD",
		"languages": ["french", "arabic"],
		"flag_colors": ["blue", "yellow", "red"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "French Southern Territories",
		"nameZh": "法属南部领地",
		"code": "TF",
		"languages": ["french"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Oceania"
	},
	{
		"name": "Togo",
		"nameZh": "多哥",
		"code": "TG",
		"languages": ["french"],
		"flag_colors": ["green", "yellow", "red", "white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Thailand",
		"nameZh": "泰国",
		"code": "TH",
		"languages": ["thai"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Southeast Asia"
	},
	{
		"name": "Tajikistan",
		"nameZh": "塔吉克斯坦",
		"code": "TJ",
		"languages": ["tajik"],
		"flag_colors": ["red", "white", "green", "yellow"],
		"region": "Central Asia"
	},
	{
		"name": "Tokelau",
		"nameZh": "托克劳",
		"code": "TK",
		"languages": ["tokelauan", "english"],
		"flag_colors": ["blue", "yellow", "white"],
		"region": "Oceania"
	},
	{
		"name": "Timor-Leste",
		"nameZh": "东帝汶",
		"code": "TL",
		"languages": ["tetum", "portuguese"],
		"flag_colors": ["red", "yellow", "black", "white"],
		"region": "Southeast Asia"
	},
	{
		"name": "Turkmenistan",
		"nameZh": "土库曼斯坦",
		"code": "TM",
		"languages": ["turkmen"],
		"flag_colors": ["green", "red", "white"],
		"region": "Central Asia"
	},
	{
		"name": "Tunisia",
		"nameZh": "突尼斯",
		"code": "TN",
		"languages": ["arabic"],
		"flag_colors": ["red", "white"],
		"region": "North Africa"
	},
	{
		"name": "Tonga",
		"nameZh": "汤加",
		"code": "TO",
		"languages": ["tongan", "english"],
		"flag_colors": ["red", "white"],
		"region": "Oceania"
	},
	{
		"name": "Turkey",
		"nameZh": "土耳其",
		"code": "TR",
		"languages": ["turkish"],
		"flag_colors": ["red", "white"],
		"region": "Middle East"
	},
	{
		"name": "Trinidad and Tobago",
		"nameZh": "特立尼达和多巴哥",
		"code": "TT",
		"languages": ["english"],
		"flag_colors": ["red", "black", "white"],
		"region": "Caribbean"
	},
	{
		"name": "Tuvalu",
		"nameZh": "图瓦卢",
		"code": "TV",
		"languages": ["tuvaluan", "english"],
		"flag_colors": ["blue", "yellow", "red", "white"],
		"region": "Oceania"
	},
	{
		"name": "Taiwan",
		"nameZh": "中国台湾省",
		"code": "TW",
		"languages": ["mandarin"],
		"flag_colors": ["red", "blue", "white"],
		"region": "East Asia"
	},
	{
		"name": "Tanzania",
		"nameZh": "坦桑尼亚",
		"code": "TZ",
		"languages": ["swahili", "english"],
		"flag_colors": ["green", "yellow", "black", "blue"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Ukraine",
		"nameZh": "乌克兰",
		"code": "UA",
		"languages": ["ukrainian"],
		"flag_colors": ["blue", "yellow"],
		"region": "Eastern Europe"
	},
	{
		"name": "Uganda",
		"nameZh": "乌干达",
		"code": "UG",
		"languages": ["english", "swahili"],
		"flag_colors": ["black", "yellow", "red", "white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "United States",
		"nameZh": "美国",
		"code": "US",
		"languages": ["english"],
		"flag_colors": ["red", "white", "blue"],
		"region": "North America"
	},
	{
		"name": "Uruguay",
		"nameZh": "乌拉圭",
		"code": "UY",
		"languages": ["spanish"],
		"flag_colors": ["white", "blue", "yellow"],
		"region": "South America"
	},
	{
		"name": "Uzbekistan",
		"nameZh": "乌兹别克斯坦",
		"code": "UZ",
		"languages": ["uzbek"],
		"flag_colors": ["blue", "white", "green", "red"],
		"region": "Central Asia"
	},
	{
		"name": "Vatican City",
		"nameZh": "梵蒂冈",
		"code": "VA",
		"languages": ["italian", "latin"],
		"flag_colors": ["yellow", "white"],
		"region": "Southern Europe"
	},
	{
		"name": "Saint Vincent and the Grenadines",
		"nameZh": "圣文森特和格林纳丁斯",
		"code": "VC",
		"languages": ["english"],
		"flag_colors": ["blue", "yellow", "green", "white"],
		"region": "Caribbean"
	},
	{
		"name": "Venezuela",
		"nameZh": "委内瑞拉",
		"code": "VE",
		"languages": ["spanish"],
		"flag_colors": ["yellow", "blue", "red", "white"],
		"region": "South America"
	},
	{
		"name": "British Virgin Islands",
		"nameZh": "英属维尔京群岛",
		"code": "VG",
		"languages": ["english"],
		"flag_colors": ["blue", "white", "red"],
		"region": "Caribbean"
	},
	{
		"name": "U.S. Virgin Islands",
		"nameZh": "美属维尔京群岛",
		"code": "VI",
		"languages": ["english"],
		"flag_colors": ["red", "white", "blue", "yellow"],
		"region": "Caribbean"
	},
	{
		"name": "Vietnam",
		"nameZh": "越南",
		"code": "VN",
		"languages": ["vietnamese"],
		"flag_colors": ["red", "yellow"],
		"region": "Southeast Asia"
	},
	{
		"name": "Vanuatu",
		"nameZh": "瓦努阿图",
		"code": "VU",
		"languages": ["bislama", "english", "french"],
		"flag_colors": ["red", "green", "black", "yellow"],
		"region": "Oceania"
	},
	{
		"name": "Wallis and Futuna",
		"nameZh": "瓦利斯和富图纳",
		"code": "WF",
		"languages": ["french", "wallisian", "futunan"],
		"flag_colors": ["red", "white", "blue"],
		"region": "Oceania"
	},
	{
		"name": "Samoa",
		"nameZh": "萨摩亚",
		"code": "WS",
		"languages": ["samoan", "english"],
		"flag_colors": ["red", "blue", "white"],
		"region": "Oceania"
	},
	{
		"name": "Kosovo",
		"nameZh": "科索沃",
		"code": "XK",
		"languages": ["albanian", "serbian"],
		"flag_colors": ["blue", "yellow", "white"],
		"region": "Eastern Europe"
	},
	{
		"name": "Yemen",
		"nameZh": "也门",
		"code": "YE",
		"languages": ["arabic"],
		"flag_colors": ["red", "white", "black"],
		"region": "Middle East"
	},
	{
		"name": "Mayotte",
		"nameZh": "马约特",
		"code": "YT",
		"languages": ["french", "shimaore", "kibushi"],
		"flag_colors": ["white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "South Africa",
		"nameZh": "南非",
		"code": "ZA",
		"languages": ["zulu", "xhosa", "afrikaans", "english"],
		"flag_colors": ["red", "blue", "green", "yellow", "black", "white"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Zambia",
		"nameZh": "赞比亚",
		"code": "ZM",
		"languages": ["english"],
		"flag_colors": ["green", "red", "black", "orange"],
		"region": "Sub-Saharan Africa"
	},
	{
		"name": "Zimbabwe",
		"nameZh": "津巴布韦",
		"code": "ZW",
		"languages": ["english", "shona", "ndebele"],
		"flag_colors": ["green", "yellow", "red", "black", "white"],
		"region": "Sub-Saharan Africa"
	}
];
