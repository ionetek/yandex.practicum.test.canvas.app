//START

WS_OUT = '2probe';

WS_IN = '3probe';

//ВВОДИМ В МОДАЛЬНОМ ОКНЕ ИМЯ ИГРОКА И ЖМЕМ SUBMIT
WS_OUT = [
    "register",
    "PLAYER2"
];

WS_IN = [
    {
        success: true,
        screenName: "PLAYER2",
        totalChips: 1000
    }
];

//ЗАХОДИМ НА СТОЛ С 6 ИГРОКАМИ
WS_OUT = [
    "enterRoom",
    "1"
];

//САДИМСЯ ЗА СТОЛ И ДЕЛАЕМ БАЙ ИН
WS_OUT = [
    "sitOnTheTable",
    {
        seat: 2,
        tableId: "1",
        chips: 400
    }
];

WS_IN = [
    {
        success: true
    }
];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 1,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 0,
        dealerSeat: null,
        activeSeat: null,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 400,
                sittingIn: false,
                inHand: false,
                hasCards: false,
                cards: [],
                bet: 0
            },
            null,
            null,
            {}
        ],
        phase: null,
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "PLAYER2 sat in",
            action: "",
            seat: "",
            notification: ""
        }
    }
];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 1,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 0,
        dealerSeat: null,
        activeSeat: null,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 400,
                sittingIn: true,
                inHand: false,
                hasCards: false,
                cards: [],
                bet: 0
            },
            null,
            null,
            {}
        ],
        phase: null,
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "",
            action: "",
            seat: "",
            notification: ""
        }
    }
];

//ЗА СТОЛ САДИТСЯ ОППОНЕНТ И ДЕЛАЕТ БАЙ ИН
WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 0,
        dealerSeat: null,
        activeSeat: null,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 400,
                sittingIn: true,
                inHand: false,
                hasCards: false,
                cards: [],
                bet: 0
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 400,
                sittingIn: false,
                inHand: false,
                hasCards: false,
                cards: [],
                bet: 0
            }
        ],
        phase: null,
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "PLAYER1 sat in",
            action: "",
            seat: "",
            notification: ""
        }
    }
];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 0,
        dealerSeat: null,
        activeSeat: null,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 400,
                sittingIn: true,
                inHand: false,
                hasCards: false,
                cards: [],
                bet: 0
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 400,
                sittingIn: true,
                inHand: false,
                hasCards: false,
                cards: [],
                bet: 0
            }
        ],
        phase: null,
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "",
            action: "",
            seat: "",
            notification: ""
        }
    }
];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 0,
        dealerSeat: 5,
        activeSeat: 5,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 400,
                sittingIn: true,
                inHand: true,
                hasCards: false,
                cards: [],
                bet: 0
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 400,
                sittingIn: true,
                inHand: true,
                hasCards: false,
                cards: [],
                bet: 0
            }
        ],
        phase: "smallBlind",
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "",
            action: "",
            seat: "",
            notification: ""
        }
    }
];

//ОППОНЕНТ ПОСТАВИЛ МАЛЫЙ БЛАЙНД
WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 2,
        dealerSeat: 5,
        activeSeat: 5,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 400,
                sittingIn: true,
                inHand: true,
                hasCards: false,
                cards: [],
                bet: 0
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 398,
                sittingIn: true,
                inHand: true,
                hasCards: false,
                cards: [],
                bet: 2
            }
        ],
        phase: "smallBlind",
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "PLAYER1 posted the small blind",
            action: "bet",
            seat: 5,
            notification: "Posted blind"
        }
    }
];

WS_IN = [
    "postBigBlind"
];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 2,
        dealerSeat: 5,
        activeSeat: 2,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 400,
                sittingIn: true,
                inHand: true,
                hasCards: false,
                cards: [],
                bet: 0
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 398,
                sittingIn: true,
                inHand: true,
                hasCards: false,
                cards: [],
                bet: 2
            }
        ],
        phase: "bigBlind",
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "",
            action: "",
            seat: "",
            notification: ""
        }
    }
];

//МЫ ПОСТАВИЛИ БОЛЬШОЙ БЛАЙНД
WS_OUT = [
    "postBlind",
    true
];

WS_IN = [
    {
        success: true
    }
];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 4,
        dealerSeat: 5,
        activeSeat: 2,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: false,
                cards: [],
                bet: 4
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 398,
                sittingIn: true,
                inHand: true,
                hasCards: false,
                cards: [],
                bet: 2
            }
        ],
        phase: "bigBlind",
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "PLAYER2 posted the big blind",
            action: "bet",
            seat: 2,
            notification: "Posted blind"
        }
    }
];

//НАМ ПРИШЛИ КАРТЫ
WS_IN = [
    "dealingCards",
    [
        "7d",
        "Jd"
    ]
];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 4,
        dealerSeat: 5,
        activeSeat: 5,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: true,
                cards: [],
                bet: 4
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 398,
                sittingIn: true,
                inHand: true,
                hasCards: true,
                cards: [],
                bet: 2
            }
        ],
        phase: "preflop",
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "",
            action: "",
            seat: "",
            notification: ""
        }
    }
];

//ОППОНЕНТ ДЕЛАТ CALL НАШЕГО БОЛЬШЛОГО БЛАЙНДА
WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 4,
        dealerSeat: 5,
        activeSeat: 5,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: true,
                cards: [],
                bet: 4
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: true,
                cards: [],
                bet: 4
            }
        ],
        phase: "preflop",
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "PLAYER1 called",
            action: "call",
            seat: 5,
            notification: "Call"
        }
    }
];

WS_IN = [
    "actBettedPot"
];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 4,
        dealerSeat: 5,
        activeSeat: 2,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: true,
                cards: [],
                bet: 4
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: true,
                cards: [],
                bet: 4
            }
        ],
        phase: "preflop",
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "",
            action: "",
            seat: "",
            notification: ""
        }
    }
];

//МЫ ДЕЛАЕМ CHECK
WS_OUT = ['check'];

WS_IN = [
    {
        success: true
    }
];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 4,
        dealerSeat: 5,
        activeSeat: 2,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: true,
                cards: [],
                bet: 4
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: true,
                cards: [],
                bet: 4
            }
        ],
        phase: "preflop",
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "PLAYER2 checked",
            action: "check",
            seat: 2,
            notification: "Check"
        }
    }
];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 8,
                contributors: [
                    2,
                    5
                ]
            }
        ],
        biggestBet: 0,
        dealerSeat: 5,
        activeSeat: 2,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: true,
                cards: [],
                bet: 0
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: true,
                cards: [],
                bet: 0
            }
        ],
        phase: "flop",
        board: [
            "8c",
            "7s",
            "2c",
            "",
            ""
        ],
        log: {
            message: "",
            action: "",
            seat: "",
            notification: ""
        }
    }
];

WS_IN = [
    "actNotBettedPot"
];

//ОППОНЕНТ СФОЛДИЛ
WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6, //Количество мест за столом
        playersSeatedCount: 2, //Количество игроков за столом
        bigBlind: 4, //Большой Blid
        smallBlind: 2, //Малый Blind
        minBuyIn: 80, //Минимальный BUY IN
        maxBuyIn: 400, //Максимальный BUY IN
        pot: [ //Банк
            {
                amount: 8, //Количество фишек в банке
                contributors: [ //Игроки в игре
                    2, // Место игрока
                    5 // Место игрока
                ]
            }
        ],
        biggestBet: 0, //Наибольшая ставка (последняя)
        dealerSeat: 5, // Место дилера
        activeSeat: 5, //Текущий активный игрок
        seats: [ //Места за столом
            null, // 1ое пустое
            null, // 2ое пустое
            {
                name: "PLAYER2", //Имя игрока
                chipsInPlay: 396, //Баланс игрока за столом
                sittingIn: true, //В игре ???
                inHand: true, //Активен ли в данный момент
                hasCards: true, //???
                cards: [], //Карты
                bet: 0 //Последняя ставка ???
            },
            null, // 3место пустое
            null, //4 место пустое
            {
                name: "PLAYER1", //Имя игрока
                chipsInPlay: 396, //Баланс игрока за столом
                sittingIn: true, //В игре ???
                inHand: false, //Активен ли в данный момент
                hasCards: false, //??
                cards: [], //Карты
                bet: 0 //Последняя ставка ???
            }
        ],
        phase: "flop", //Стадия игры. Бывает: preflop, flop, turn, river
        board: [ //Карты на столе
            "8c",
            "7s",
            "2c",
            "",
            ""
        ],
        log: { //Запись в логе действий
            message: "PLAYER1 folded",
            action: "fold",
            seat: 5,
            notification: "Fold"
        }
    }
];

//СБРОС СТОЛА
WS_IN = ['postSmallBlind'];

WS_IN = [
    "table-data",
    {
        id: 1,
        name: "Sample 6-handed Table",
        seatsCount: 6,
        playersSeatedCount: 2,
        bigBlind: 4,
        smallBlind: 2,
        minBuyIn: 80,
        maxBuyIn: 400,
        pot: [
            {
                amount: 0,
                contributors: []
            }
        ],
        biggestBet: 0,
        dealerSeat: 2,
        activeSeat: 2,
        seats: [
            null,
            null,
            {
                name: "PLAYER2",
                chipsInPlay: 404,
                sittingIn: true,
                inHand: true,
                hasCards: false,
                cards: [],
                bet: 0
            },
            null,
            null,
            {
                name: "PLAYER1",
                chipsInPlay: 396,
                sittingIn: true,
                inHand: true,
                hasCards: false,
                cards: [],
                bet: 0
            }
        ],
        phase: "smallBlind",
        board: [
            "",
            "",
            "",
            "",
            ""
        ],
        log: {
            message: "",
            action: "",
            seat: "",
            notification: ""
        }
    }
];



//ДЕЙСТВИЯ
// ['check'] ['bet', '4'] ['raise', '50' ] ['call'] ['fold'] ["postBlind",true]