const people = {
    "丁守中": 1,
    "孔文吉": 2,
    "尤美女": 3,
    "王廷升": 4,
    "王育敏": 5,
    "王金平": 6,
    "王惠美": 7,
    "王進士": 8,
    "田秋堇": 9,
    "江啟臣": 10,
    "江惠貞": 11,
    "何欣純": 12,
    "吳育仁": 13,
    "吳育昇": 14,
    "吳宜臻": 15,
    "吳秉叡": 16,
    "呂玉玲": 17,
    "呂學樟": 18,
    "李昆澤": 19,
    "李俊俋": 20,
    "李桐豪": 21,
    "李貴敏": 22,
    "李慶華": 23,
    "李應元": 24,
    "李鴻鈞": 25,
    "周倪安": 26,
    "林世嘉": 27,
    "林正二": 28,
    "林佳龍": 29,
    "林岱樺": 30,
    "林明溱": 31,
    "林郁方": 32,
    "林國正": 33,
    "林淑芬": 34,
    "林滄敏": 35,
    "林德福": 36,
    "林鴻池": 37,
    "邱文彥": 38,
    "邱志偉": 39,
    "邱議瑩": 40,
    "姚文智": 41,
    "柯建銘": 42,
    "段宜康": 43,
    "洪秀柱": 44,
    "紀國棟": 45,
    "孫大千": 46,
    "徐少萍": 47,
    "徐志榮": 48,
    "徐欣瑩": 49,
    "徐耀昌": 50,
    "翁重鈞": 51,
    "馬文君": 52,
    "高志鵬": 53,
    "高金素梅": 54,
    "張嘉郡": 55,
    "張慶忠": 56,
    "張曉風": 57,
    "莊瑞雄": 58,
    "許忠信": 59,
    "許淑華": 60,
    "許添財": 61,
    "許智傑": 62,
    "陳其邁": 63,
    "陳怡潔": 64,
    "陳明文": 65,
    "陳亭妃": 66,
    "陳唐山": 67,
    "陳根德": 68,
    "陳素月": 69,
    "陳淑慧": 70,
    "陳雪生": 71,
    "陳超明": 72,
    "陳節如": 73,
    "陳碧涵": 74,
    "陳歐珀": 75,
    "陳學聖": 76,
    "陳鎮湘": 77,
    "曾巨威": 78,
    "費鴻泰": 79,
    "黃文玲": 80,
    "黃志雄": 81,
    "黃昭順": 82,
    "黃偉哲": 83,
    "黃國書": 84,
    "楊玉欣": 85,
    "楊應雄": 86,
    "楊曜": 87,
    "楊瓊瓔": 88,
    "楊麗環": 89,
    "葉宜津": 90,
    "葉津鈴": 91,
    "詹凱臣": 92,
    "詹滿容": 93,
    "廖正井": 94,
    "廖國棟": 95,
    "管碧玲": 96,
    "趙天麟": 97,
    "劉建國": 98,
    "劉櫂豪": 99,
    "潘孟安": 100,
    "潘維剛": 101,
    "蔡正元": 102,
    "蔡其昌": 103,
    "蔡煌瑯": 104,
    "蔡錦隆": 105,
    "蔣乃辛": 106,
    "鄭天財Sra·Kacaw": 107,
    "鄭汝芬": 108,
    "鄭麗君": 109,
    "盧秀燕": 110,
    "盧嘉辰": 111,
    "蕭美琴": 112,
    "賴士葆": 113,
    "賴振昌": 114,
    "薛凌": 115,
    "謝國樑": 116,
    "簡東明": 117,
    "顏清標": 118,
    "顏寬恒": 119,
    "魏明谷": 120,
    "羅明才": 121,
    "羅淑蕾": 122,
    "蘇清泉": 123,
    "蘇震清": 124,
    "國民黨黨團": 125,
    "民進黨黨團": 126,
    "台灣團結聯盟黨團": 127,
    "親民黨黨團": 128,
    "吳思瑤": 129,
    "王靜亞": 130,
    "黃清原": 131,
    "吳忠錚": 132,
    "潘懷宗": 133,
    "吳俊德": 134,
    "陳建斌": 135,
    "陳民乾": 136,
    "王銘宗": 137,
    "林幸蓉": 138,
    "蔣萬安": 139,
    "趙燕傑": 140,
    "林新凱": 141,
    "邱正浩": 142,
    "李成嶽": 143,
    "黃麗香": 144,
    "李晏榕": 145,
    "潘建志": 146,
    "高士恩": 147,
    "陳科引": 148,
    "何偉": 149,
    "蕭亞譚": 150,
    "李彥秀": 151,
    "黃珊珊": 152,
    "林少馳": 153,
    "李岳峰": 154,
    "陳尚志": 155,
    "陳兆銘": 156,
    "林昶佐": 157,
    "李家幸": 158,
    "龔偉綸": 159,
    "尤瑞敏": 160,
    "洪顯政": 161,
    "黃福卿": 162,
    "趙衍慶": 163,
    "吳旭智": 164,
    "范雲": 165,
    "陳家宏": 166,
    "周芳如": 167,
    "龎維良": 168,
    "林珍妤": 169,
    "曾獻瑩": 170,
    "蔣慰慈": 171,
    "古文發": 172,
    "鄭村棋": 173,
    "呂欣潔": 174,
    "楊實秋": 175,
    "蘇承英": 176,
    "詹益正": 177,
    "林文傑": 178,
    "林芷芬": 179,
    "范揚律": 180,
    "方景鈞": 181,
    "賴樹聲": 182,
    "苗博雅": 183,
    "李慶元": 184,
    "陳如聖": 185,
    "陳立基": 186,
    "呂孫綾": 187,
    "陳筠棻": 188,
    "蘇通達": 189,
    "洪志成": 190,
    "陳明義": 191,
    "張碩文": 192,
    "李乾龍": 193,
    "姚胤宏": 194,
    "蘇卿彥": 195,
    "林其瑩": 196,
    "黃茂": 197,
    "陳長發": 198,
    "蕭忠漢": 199,
    "劉鳳章": 200,
    "賈伯楷": 201,
    "陳茂嘉": 202,
    "林麗容": 203,
    "邱鴻玕": 204,
    "王斯儀": 205,
    "蘇巧慧": 206,
    "郭柏瑜": 207,
    "林國春": 208,
    "姚玉霜": 209,
    "張宏陸": 210,
    "游信義": 211,
    "莊豐銘": 212,
    "李貴寶": 213,
    "李建明": 214,
    "康仁俊": 215,
    "黃鈞民": 216,
    "羅致政": 217,
    "李婉鈺": 218,
    "汪成華": 219,
    "江永昌": 220,
    "吳金魁": 221,
    "童正億": 222,
    "邵伯祥": 223,
    "林建志": 224,
    "張菁芳": 225,
    "李幸長": 226,
    "董建一": 227,
    "曾文聖": 228,
    "吳琪銘": 229,
    "黃魯光": 230,
    "陳永福": 231,
    "曾柏瑜": 232,
    "黃國昌": 233,
    "陳永順": 234,
    "鐘國誌": 235,
    "鄭運鵬": 236,
    "王寶萱": 237,
    "陳佩俞": 238,
    "陳賴素美": 239,
    "張康儀": 240,
    "黃維春": 241,
    "吳振槖": 242,
    "徐景文": 243,
    "陳宏瑞": 244,
    "余能生": 245,
    "賴立竹": 246,
    "鄭寶清": 247,
    "張肇良": 248,
    "黃國華": 249,
    "張誠": 250,
    "黃志浩": 251,
    "蕭家亮": 252,
    "趙正宇": 253,
    "呂東杰": 254,
    "鄭振源": 255,
    "藍大山": 256,
    "楊金軒": 257,
    "顏秋月": 258,
    "陳軍元": 259,
    "王淑芬": 260,
    "黃金推": 261,
    "陳世凱": 262,
    "鍾文龍": 263,
    "洪慈庸": 264,
    "黃信吉": 265,
    "葉春幸": 266,
    "張廖萬堅": 267,
    "吳淑慧": 268,
    "游壽元": 269,
    "顏惠莉": 270,
    "簡孟軒": 271,
    "苗豐隆": 272,
    "劉國隆": 273,
    "沈智慧": 274,
    "賀姿華": 275,
    "石大哉": 276,
    "賴義鍠": 277,
    "王政棋": 278,
    "謝志忠": 279,
    "黃瑞坤": 280,
    "陳柏志": 281,
    "林德旺": 282,
    "黃耀盛": 283,
    "黃泯甄": 284,
    "黃憲清": 285,
    "王國棟": 286,
    "謝龍介": 287,
    "翁琬甯": 288,
    "鄧秀寶": 289,
    "林俊憲": 290,
    "楊智達": 291,
    "傅建峰": 292,
    "蔡郁芝": 293,
    "陳皇州": 294,
    "李盈蒔": 295,
    "林易煌": 296,
    "王定宇": 297,
    "晏揚清": 298,
    "劉子麟": 299,
    "莊婷欣": 300,
    "鍾易仲": 301,
    "黃韻涵": 302,
    "黃金玲": 303,
    "曾盈豐": 304,
    "李柏融": 305,
    "劉世芳": 306,
    "張顯耀": 307,
    "梁蓓禎": 308,
    "柳淑芳": 309,
    "莊明憲": 310,
    "郭倫豪": 311,
    "林俊揚": 312,
    "蔡金晏": 313,
    "王新昌": 314,
    "楊宗穎": 315,
    "楊翰奇": 316,
    "黃柏霖": 317,
    "莊啟旺": 318,
    "陳惠敏": 319,
    "陳素莉": 320,
    "林景元": 321,
    "黃璽文": 322,
    "汪婷萱": 323,
    "陳函谷": 324,
    "張育華": 325,
    "馬凱妮": 326,
    "劉義雄": 327,
    "賴瑞隆": 328,
    "林宗彥": 329,
    "蔡媽福": 330,
    "林為洲": 331,
    "卓恩宗": 332,
    "李宗華": 333,
    "鄭永金": 334,
    "邱靖雅": 335,
    "黃秀龍": 336,
    "范振揆": 337,
    "蘇雯英": 338,
    "杜文卿": 339,
    "黃玉燕": 340,
    "康世儒": 341,
    "林一方": 342,
    "周書涵": 343,
    "劉文忠": 344,
    "戴文祥": 345,
    "陳文彬": 346,
    "劉泳君": 347,
    "黃秀芳": 348,
    "許永金": 349,
    "張耀元": 350,
    "温國銘": 351,
    "黃玉芬": 352,
    "陳朝容": 353,
    "洪宗熠": 354,
    "洪遊江": 355,
    "張益勝": 356,
    "張錦昆": 357,
    "張國鑫": 358,
    "張鎔麒": 359,
    "蘇治芬": 360,
    "林富源": 361,
    "吳威志": 362,
    "王煒婷": 363,
    "張佳偉": 364,
    "蔡易餘": 365,
    "林江釧": 366,
    "邱崑龍": 367,
    "林于玲": 368,
    "賴競民": 369,
    "廖婉汝": 370,
    "鍾佳濱": 371,
    "張兆陽": 372,
    "許謹如": 373,
    "丁勇智": 374,
    "黃昭展": 375,
    "邱錫奎": 376,
    "李志鏞": 377,
    "吳紹文": 378,
    "孫博萮": 379,
    "郭儒釗": 380,
    "林獻山": 381,
    "吳子維": 382,
    "黄師鵬": 383,
    "楊悟空": 384,
    "陳建閣": 385,
    "陳雙全": 386,
    "冼義哲": 387,
    "黃漢東": 388,
    "楊鎮浯": 389,
    "陳滄江": 390,
    "張中法": 391,
    "洪志恒": 392,
    "陳德輝": 393,
    "高丹樺": 394,
    "陳仲立": 395,
    "吳成典": 396,
    "蘇柏豪": 397,
    "張春寶": 398,
    "林金官": 399,
    "蔡適應": 400,
    "郝龍斌": 401,
    "楊石城": 402,
    "劉文雄": 403,
    "歐崇敬": 404,
    "鄭正鈐": 405,
    "魏揚": 406,
    "邱顯智": 407,
    "林家宇": 408,
    "曾耀澂": 409,
    "黃源甫": 410,
    "王榮德": 411,
    "吳淑敏": 412,
    "翁壽良": 413,
    "黃宏成台灣阿成世界偉人財神總統": 414,
    "陳瑩": 415,
    "吳國譽Rahic Amind": 416,
    "馬躍·比吼Mayaw·Biho": 417,
    "達佶祐·卡造Takiyo·Kacaw": 418,
    "林昊宜": 419,
    "達摩·阿雄": 420,
    "林金瑛": 421,
    "嘎礌·武拜·哈雅萬Galahe·Wubai·Hayawan": 422,
    "林光義": 423,
    "林琮翰": 424,
    "柯荏耀": 425,
    "尤命·蘇樣": 426,
    "林世偉": 427,
    "伊藍·明基努安": 428,
    "瓦歷斯·貝林Walis·Perin": 429,
    "林信義": 430,
    "全承威": 431,
    "曾華德": 432
}

export default function people_name2id(name){
 	if(people[name])
 		return people[name]
 	else
 		return "1";///// 
}
