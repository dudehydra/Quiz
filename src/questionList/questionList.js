var quizQuestions = [
     {   questionsTitle: 'Какого Вы пола?',
         help: [],
         helperText: 'В разных сферах жизни граждан встречаются проблемы. Поэтому я здесь чтобы помочь Вам с ними разобраться',
         helperImg: require('../assets/images/maskot.svg'),
         classes: 'quizWrapper ',
         questions: [
             {   questionDescr: '',
                 id: 1,
                 type: 'radioBlock',
                 questionOption: [
                     {name:'gender', text: 'Мужчина', type: 'radio', },
                     {name:'gender', text: 'Женщина', type: 'radio', },
                     {name:'gender', text: 'Боевой разведывательно-ударный вертолёт Ка-52.', type: 'radio', },
                 ],
                 selected: null,
             }
         ]
     },
    {   questionsTitle: 'Какие основные проблемы в сфере жкх?',
        help: ['- Выберите <span>3</span>  варианта'],
        helperText: 'В разных сферах жизни граждан встречаются проблемы. Поэтому я здесь чтобы помочь Вам с ними разобраться2',
        helperImg: require('../assets/images/maskot2.svg'),
        classes: 'quizWrapper',
        questions: [
            {   questionDescr: '',
                id: 1,
                type: 'checkboxBlock',
                questionOption: [
                    {name:'gender', text: 'Высокие тарифы ЖКХ', type: 'checkbox', checked: false},
                    {name:'gender', text: 'Низкое качество уборки подъездов', type: 'checkbox', checked: false},
                    {name:'gender', text: 'Низкое качество уборки дворов, в том числе уборка снега.', type: 'checkbox', checked: false},
                    {name:'gender', text: 'Неудовлетворительное благоуствройство дворов.', type: 'checkbox', checked: false},
                    {name:'gender', text: 'Другое', type: 'text', checked: false},
                ],
                requiredQuestion: 3,
            },
        ]
    },
    {   questionsTitle: 'Насколько вы согласны с каждым высказыванием по 5-ти балльной шкале.',
        help: ['<span>5</span> баллов - абсолютно согласен.', '<span>1</span> балл - абсолютно не согласен'],
        helperText: 'В разных сферах жизни граждан встречаются проблемы. Поэтому я здесь чтобы помочь Вам с ними разобратьс3',
        helperImg: require('../assets/images/maskot2.svg'),
        classes: 'quizWrapper quizWrapper--separated',
        questions: [
            {   questionDescr: 'Выборы - это хороший способ простым людям повлиять на жизнь района, города, республики.',
                id: 1,
                type: 'radioBlock',
                questionOption: [
                    {name:'1', text: '1', type: 'radio'},
                    {name:'1', text: '2', type: 'radio'},
                    {name:'1', text: '3', type: 'radio'},
                    {name:'1', text: '4', type: 'radio'},
                    {name:'1', text: '5', type: 'radio'},
                ],
                selected: null,
                designType: 'inline'
            },
            {
                questionDescr: 'Я всегда хожу на выборы не зависимо от их масштаба и значимости.',
                id: 2,
                type: 'radioBlock',
                questionOption: [
                    {name:'2', text: '1', type: 'radio'},
                    {name:'2', text: '2', type: 'radio'},
                    {name:'2', text: '3', type: 'radio'},
                    {name:'2', text: '4', type: 'radio'},
                    {name:'2', text: '5', type: 'radio'},
                ],
                selected: null,
                designType: 'inline'
            },
            {
                questionDescr: 'Я хочу, чтобы моё мнение тоже учитывалось на выборах.',
                id: 3,
                type: 'radioBlock',
                questionOption: [
                    {name:'3', text: '1', type: 'radio'},
                    {name:'3', text: '2', type: 'radio'},
                    {name:'3', text: '3', type: 'radio'},
                    {name:'3', text: '4', type: 'radio'},
                    {name:'3', text: '5', type: 'radio'},
                ],
                selected: null,
                designType: 'inline'
            },
            {
                questionDescr: 'Мне истересно кто победит на выборах.',
                id: 4,
                type: 'radioBlock',
                questionOption: [
                    {name:'4', text: '1', type: 'radio'},
                    {name:'4', text: '2', type: 'radio'},
                    {name:'4', text: '3', type: 'radio'},
                    {name:'4', text: '4', type: 'radio'},
                    {name:'4', text: '5', type: 'radio'},
                ],
                selected: null,
                designType: 'inline'
            },
            {
                questionDescr: 'В кругу друзей и близких я обсуждаю песледние новости района, города, республики.',
                id: 4,
                type: 'radioBlock',
                questionOption: [
                    {name:'5', text: '1', type: 'radio'},
                    {name:'5', text: '2', type: 'radio'},
                    {name:'5', text: '3', type: 'radio'},
                    {name:'5', text: '4', type: 'radio'},
                    {name:'5', text: '5', type: 'radio'},
                ],
                selected: null,
                designType: 'inline'
            },
        ]
    }
]

export default quizQuestions;