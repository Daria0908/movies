const data = {
        "AU": "Австралия",
        "AT": "Австрия",
        "AZ": "Азербайджан",
        "AL": "Албания",
        "DZ": "Алжир",
        "AI": "Ангилья",
        "AO": "Ангола",
        "AD": "Андорра",
        "AR": "Аргентина",
        "AM": "Армения",
        "AF": "Афганистан",
        "BS": "Багамы",
        "BD": "Бангладеш",
        "BB": "Барбадос",
        "BH": "Бахрейн",
        "BZ": "Белиз",
        "BY": "Белоруссия",
        "BE": "Бельгия",
        "BJ": "Бенин",
        "BG": "Болгария",
        "BO": "Боливия",
        "BW": "Ботсвана",
        "BR": "Бразилия",
        "BN": "Бруней",
        "BI": "Бурунди",
        "BT": "Бутан",
        "VU": "Вануату",
        "VA": "Ватикан",
        "GB": "Великобритания",
        "HU": "Венгрия",
        "VE": "Венесуэла",
        "VN": "Вьетнам",
        "GA": "Габон",
        "HT": "Гаити",
        "GY": "Гайана",
        "GM": "Гамбия",
        "GH": "Гана",
        "GP": "Гваделупа",
        "GT": "Гватемала",
        "GN": "Гвинея",
        "DE": "Германия",
        "GG": "Гернси",
        "GI": "Гибралтар",
        "HN": "Гондурас",
        "HK": "Гонконг",
        "GD": "Гренада",
        "GL": "Гренландия",
        "GR": "Греция",
        "GE": "Грузия",
        "GU": "Гуам",
        "DK": "Дания",
        "JE": "Джерси",
        "DJ": "Джибути",
        "DM": "Доминика",
        "EG": "Египет",
        "ZM": "Замбия",
        "ZW": "Зимбабве",
        "IL": "Израиль",
        "IN": "Индия",
        "ID": "Индонезия",
        "JO": "Иордания",
        "IQ": "Ирак",
        "IR": "Иран",
        "IE": "Ирландия",
        "IS": "Исландия",
        "ES": "Испания",
        "IT": "Италия",
        "YE": "Йемен",
        "KZ": "Казахстан",
        "KH": "Камбоджа",
        "CM": "Камерун",
        "CA": "Канада",
        "QA": "Катар",
        "KE": "Кения",
        "CY": "Кипр",
        "KG": "Киргизия",
        "KI": "Кирибати",
        "CN": "Китай",
        "CO": "Колумбия",
        "KM": "Коморы",
        "CG": "Конго",
        "KP": "Корея (Северная)",
        "KR": "Корея (Южная)",
        "XK": "Косово",
        "CU": "Куба",
        "KW": "Кувейт",
        "CW": "Кюрасао",
        "LA": "Лаос",
        "LV": "Латвия",
        "LS": "Лесото",
        "LB": "Ливан",
        "LY": "Ливия",
        "LT": "Литва",
        "LI": "Лихтенштейн",
        "LU": "Люксембург",
        "MU": "Маврикий",
        "MR": "Мавритания",
        "MG": "Мадагаскар",
        "YT": "Майотта",
        "MO": "Макао",
        "MK": "Македония",
        "MW": "Малави",
        "MY": "Малайзия",
        "ML": "Мали",
        "MV": "Мальдивы",
        "MT": "Мальта",
        "MA": "Марокко",
        "MQ": "Мартиника",
        "MX": "Мексика",
        "MZ": "Мозамбик",
        "MD": "Молдова",
        "MC": "Монако",
        "MN": "Монголия",
        "MS": "Монтсеррат",
        "MM": "Мьянма",
        "NA": "Намибия",
        "NR": "Науру",
        "NP": "Непал",
        "NE": "Нигер",
        "NG": "Нигерия",
        "NL": "Нидерланды",
        "NI": "Никарагуа",
        "NU": "Ниуэ",
        "NO": "Норвегия",
        "AE": "ОАЭ",
        "OM": "Оман",
        "PK": "Пакистан",
        "PW": "Палау",
        "PS": "Палестина",
        "PA": "Панама",
        "PY": "Парагвай",
        "PE": "Перу",
        "PL": "Польша",
        "PT": "Португалия",
        "RE": "Реюньон",
        "RU": "Россия",
        "RW": "Руанда",
        "RO": "Румыния",
        "SV": "Сальвадор",
        "WS": "Самоа",
        "SM": "Сан-Марино",
        "SZ": "Свазиленд",
        "SN": "Сенегал",
        "RS": "Сербия",
        "SG": "Сингапур",
        "SY": "Сирия",
        "SK": "Словакия",
        "SI": "Словения",
        "SO": "Сомали",
        "SD": "Судан",
        "SR": "Суринам",
        "US": "США",
        "TJ": "Таджикистан",
        "TH": "Таиланд",
        "TW": "Тайвань",
        "TZ": "Танзания",
        "TG": "Того",
        "TK": "Токелау",
        "TO": "Тонга",
        "TV": "Тувалу",
        "TN": "Тунис",
        "TM": "Туркмения",
        "TR": "Турция",
        "UG": "Уганда",
        "UZ": "Узбекистан",
        "UA": "Украина",
        "UY": "Уругвай",
        "FJ": "Фиджи",
        "PH": "Филиппины",
        "FI": "Финляндия",
        "FR": "Франция",
        "HR": "Хорватия",
        "CF": "ЦАР",
        "TD": "Чад",
        "ME": "Черногория",
        "CZ": "Чехия",
        "CL": "Чили",
        "CH": "Швейцария",
        "SE": "Швеция",
        "LK": "Шри-Ланка",
        "EC": "Эквадор",
        "ER": "Эритрея",
        "EE": "Эстония",
        "ET": "Эфиопия",
        "ZA": "ЮАР",
        "JM": "Ямайка",
        "JP": "Япония"


}

export default data;