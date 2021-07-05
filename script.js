Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                {
                    name: 'Marco',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '06/01/2021 15:50:55',
                            text: 'Mi hai comprato la pappera boolean??',
                            status: 'sent'
                        },
                        {
                            date: '06/01/2021 16:00:00',
                            text: 'deve essere taglia M o XL',
                            status: 'sent'
                        },
                        {
                            date: '06/01/2021 16:05:22',
                            text: 'Si, certo arriva tutto tra 1 settimana!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Sam',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '11/02/2021 18:30:00',
                            text: 'Ehi! come va oggi vai al lavoro?',
                            status: 'sent'
                        },
                        {
                            date: '06/02/2021 18:45:55',
                            text: 'We Sam! certo arriverò al solito orario!',
                            status: 'received'
                        },
                        {
                            date: '06/02/2021 18:55:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                    ],
                },

                {
                    name: 'Gaston',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2021 10:10:40',
                            text: 'Ciao, come stai?',
                            status: 'received'
                        },
                        {
                            date: '28/03/2021 10:20:10',
                            text: 'Ciao Gaston, benissimo e tu?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2021 16:15:22',
                            text: 'molto bene grazie',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Matteo',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/04/2021 15:30:55',
                            text: 'Ciao martha!',
                            status: 'sent'
                        },
                        {
                            date: '10/04/2021 15:50:00',
                            text: 'Ciao, tanto tempo!! oggi ci sei in chiesa?',
                            status: 'received'
                        },

                        {
                            date: '10/04/2021 15:50:00',
                            text: 'Si certo arrivo alle 16',
                            status: 'received'
                        },
                    ],
                },
            ],
			
            user: 0,
            imgprof: '',
            mSn: '',
            filter: '',
            filtcon: '',
            click: false,
            indexmSn: '',
        },
        mounted() {
            this.imgprof = 'img/avatar' + this.contacts[this.user].avatar + '.jpg';
            this.filtconts();
        },
        methods: {
            returniMg: function (contact) {
                return 'img/avatar' + contact.avatar + '.jpg';
            },
            
            sMsn: function () {
                if (this.mSn !== '') {
                    let mSgS = { date: this.dT(), text: this.mSn, status: 'sent' };
                    this.mSn = '';
                    this.contacts[this.user].messages.push(mSgS);
                    this.sendAnswer();
                }
            },
            sendAnswer: function () {
                const newAnswer = {
                    date: this.dT(),
                    text: this.answerGenerator(),
                    status: 'received',
                };
                setTimeout(() => {
                    this.contacts[this.user].messages.push(newAnswer);
                }, 2000);
    
            },
            filtconts: function () {
                this.filtcon = this.contacts.filter((contact) => {
                    if (this.filter === '') {
                        return true;
                    } else {
                        let contactSearch = this.filter.toLowerCase();
                        let contactFiltered = contact.name.toLowerCase();
                        if (contactFiltered.includes(contactSearch)) {
                            return true;
                        } else {
                            return false;
                        }
                    }

                });
            },

            dT: function () {
                const dateTime = dayjs();
                return dateTime.format("DD/MM/YYYY HH:mm:ss");
            },
            openMenu: function (index) {
                if (this.click === false) {
                    this.click = true;
                } else {
                    this.click = false;
                }
                this.indexmSn = index;
            },
            phrasesGenerator: function () {
                const genTr = [
                    'la casa di mario sta andando a fuoco!! corri',
                    'oggi fa freddo'
                ];
                let randomphrases = genTr[Math.floor(Math.random() * genTr.length)];
                return randomphrases;
            },
        },
    }
)