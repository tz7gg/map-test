
window.onload = async function () {

    let eventsArray
    let res = []
    let subRes = []
    let mapContent = document.querySelector('.map-content')
    let map = document.querySelector('#Слой_x0020_1')
    let checkbox = document.querySelector('.form-checkbox')
    let dataPicker = document.querySelector('.calendari')

    // await fetch("handler.php")
    //     .then((response) => response.json())
    //     .then((response) => {
    //         eventsArray = response
    //     })
        
    eventsArray = [{"id":"163","district":"\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0439","title":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f","content":"\u0421\u0430\u0439\u0442 \u0440\u044b\u0431\u0430\u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043b\u044c\u0449\u0438\u043a\u0443, \u0432\u0435\u0431\u043c\u0430\u0441\u0442\u0435\u0440\u0443 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043e\u043b\u0435\u0435 \u043c\u0435\u043d\u0435\u0435 \u043e\u0441\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0440\u044b\u0431\u044b \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435, \u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0440\u0430\u0442\u043e\u0440\u0443 \u043e\u0442\u0442\u043e\u0447\u0438\u0442\u044c \u043d\u0430\u0432\u044b\u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0432\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0439 \u0432 \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445. \u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 \u043d\u0435\u0431\u0435\u0437\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434 \u0440\u0435\u0447\u0435\u0439. \u0422\u0435\u043a\u0441\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0430\u0431\u0437\u0430\u0446\u0430\u043c\u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043e\u0442 \u0434\u0432\u0443\u0445 \u0434\u043e \u0434\u0435\u0441\u044f\u0442\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432 \u0430\u0431\u0437\u0430\u0446\u0435, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u0438\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0438 \u0436\u0438\u0432\u044b\u043c \u0434\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e-\u0441\u043b\u0443\u0445\u043e\u0432\u043e\u0433\u043e \u0432\u043e\u0441\u043f\u0440\u0438\u044f\u0442\u0438\u044f.  \u041f\u043e \u0441\u0432\u043e\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044b\u0431\u0430\u0442\u0435\u043a\u0441\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043e\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u043c\u0443 lorem ipsum, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u0443 \u043d\u0435\u043a\u0442\u043e\u0440\u044b\u0445 \u043b\u044e\u0434\u0435\u0439 \u043d\u0435\u0434\u043e\u0443\u043c\u0435\u043d\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0430\u0445 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0440\u044b\u0431\u0443 \u0442\u0435\u043a\u0441\u0442. \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0438 \u043e\u0442 lorem ipsum, \u0442\u0435\u043a\u0441\u0442 \u0440\u044b\u0431\u0430 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435 \u043d\u0430\u043f\u043e\u043b\u043d\u0438\u0442 \u043b\u044e\u0431\u043e\u0439 \u043c\u0430\u043a\u0435\u0442 \u043d\u0435\u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c \u0441\u043c\u044b\u0441\u043b\u043e\u043c \u0438 \u043f\u0440\u0438\u0434\u0430\u0441\u0442 \u043d\u0435\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u043c\u044b\u0439 \u043a\u043e\u043b\u043e\u0440\u0438\u0442 \u0441\u043e\u0432\u0435\u0442\u0441\u043a\u0438\u0445 \u0432\u0440\u0435\u043c\u0435\u043d.","date":"22.06.2020","time":"17:00","addres":"\u0420\u043e\u043c\u0430\u043d\u0435\u043d\u043a\u043e 23","price":"500","img":"someimg.jpg","\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f":"0","\u041e\u0442\u0434\u044b\u0445 \u0438 \u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":"1","\u0421\u043f\u043e\u0440\u0442":"0","\u0411\u0438\u0437\u043d\u0435\u0441":"0"},{"id":"164","district":"\u042e\u0436\u043d\u044b\u0439","title":"","content":"","date":"","time":"","addres":"","price":"0","img":"","\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f":"0","\u041e\u0442\u0434\u044b\u0445 \u0438 \u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":"1","\u0421\u043f\u043e\u0440\u0442":"0","\u0411\u0438\u0437\u043d\u0435\u0441":"0"},{"id":"165","district":"\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439","title":"","content":"","date":"","time":"","addres":"","price":"0","img":"","\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f":"1","\u041e\u0442\u0434\u044b\u0445 \u0438 \u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":"0","\u0421\u043f\u043e\u0440\u0442":"0","\u0411\u0438\u0437\u043d\u0435\u0441":"0"},{"id":"166","district":"\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","title":"","content":"","date":"","time":"","addres":"","price":"0","img":"","\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f":"0","\u041e\u0442\u0434\u044b\u0445 \u0438 \u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":"0","\u0421\u043f\u043e\u0440\u0442":"0","\u0411\u0438\u0437\u043d\u0435\u0441":"1"},{"id":"167","district":"\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439","title":"","content":"","date":"","time":"","addres":"","price":"0","img":"","\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f":"0","\u041e\u0442\u0434\u044b\u0445 \u0438 \u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":"0","\u0421\u043f\u043e\u0440\u0442":"0","\u0411\u0438\u0437\u043d\u0435\u0441":"0"},{"id":"168","district":"\u0422\u0443\u0440\u0433\u043e\u044f\u043a","title":"","content":"","date":"","time":"","addres":"","price":"0","img":"","\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f":"0","\u041e\u0442\u0434\u044b\u0445 \u0438 \u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":"0","\u0421\u043f\u043e\u0440\u0442":"0","\u0411\u0438\u0437\u043d\u0435\u0441":"1"}]
            
    let setting = {
        'Северный': false,
        'Тургояк': false,
        'Восточный': false,
        'Западный': false,
        'Центральный': false,
        'Южный': false,
    }

    let subSetting = {
        'Городские события': false,
        'Отдых и развлечения': false,
        'Спорт': false,
        'Бизнес': false
    }

    function clear() {
        mapContent.innerHTML = ''
    }

    map.onmouseover = function (e) {
        let target = e.target
        let parent = target.parentElement
        let childs = parent.childNodes
        childs[1].classList.add('area')
        childs[3].classList.add('text')
    }
    map.onmouseout = function (e) {
        let target = e.target
        let parent = target.parentElement
        let childs = parent.childNodes
        childs[1].classList.remove('area')
        childs[3].classList.remove('text')
    }
    map.onclick = async function (e) {
        let target = e.target
        let parent = target.parentElement
        let childs = parent.childNodes
        childs[1].classList.toggle('active-area')
        childs[3].classList.toggle('active-text')
        childs[1].classList.remove('area')
        childs[3].classList.remove('text')
        let value = parent.getAttribute('value')
        setting[value] = !setting[value]
        await clear()
        await sortBySetting(eventsArray, setting)
        await createItem(res)
    }

    for (const iterator of checkbox) {
        iterator.onclick = async function (e) {
            let target = e.target
            let parent = target.parentElement
            parent.classList.toggle('active-checkbox')
            let value = parent.childNodes[0].value
            subSetting[value] = !subSetting[value]
            await sortBySubSetting(res, subSetting)

            if (subRes.length == 0) {
                await clear()
                let item = document.createElement('div')
                let text = document.createElement('p')
                mapContent.append(item)
                item.classList.add('not-found-item')
                item.append(text)
                text.innerHTML = 'По вашему запросу ничего не найдено!'
            }
            if (subRes.length > 0) {
                await clear()
                await createItem(subRes)
            }

            let subSettingAllKeysFalse = true
            for (const key in subSetting) {
                if (subSetting[key]) {
                    subSettingAllKeysFalse = false
                }
            }
            if (subRes.length == 0 && subSettingAllKeysFalse) {
                await clear()
                await sortBySetting(eventsArray, setting)
                await createItem(res)
            }
        }
    }


    dataPicker.onclick = function () {
        let input1 = document.querySelectorAll('input#calendar1.datepicker-here')
        let input2 = document.querySelectorAll('input#calendar2.datepicker-here')
        console.log(input1[0].value)
        console.log(input2[0].value)
    }

    function createItem(eventsArray) {

        for (const iterator of eventsArray) {
            let item = document.createElement('div')
            mapContent.append(item)
            item.classList.add('event-item')

            let eventImg = document.createElement('div')
            item.append(eventImg)
            eventImg.classList.add('event-img')
            eventImg.style.backgroundImage = 'url(' + iterator.img + ')'

            let eventTitle = document.createElement('div')
            item.append(eventTitle)
            eventTitle.classList.add('event-title')
            let title = document.createElement('p')
            eventTitle.append(title)
            title.innerHTML = iterator.title

            let eventPrice = document.createElement('div')
            item.append(eventPrice)
            eventPrice.classList.add('event-price')
            let price = document.createElement('p')
            eventPrice.append(price)
            price.innerHTML = 'Вход: ' + iterator.price + ' рублей'

            let eventContent = document.createElement('div')
            item.append(eventContent)
            eventContent.classList.add('event-content')
            let content = document.createElement('p')
            eventContent.append(content)
            content.innerHTML = iterator.content

            let evenItnfo = document.createElement('div')
            item.append(evenItnfo)
            evenItnfo.classList.add('event-info')

            let date = document.createElement('p')
            let time = document.createElement('p')
            let addres = document.createElement('p')

            evenItnfo.append(date)
            date.innerHTML = '<span>Дата:  </span>' + iterator.date
            evenItnfo.append(time)
            time.innerHTML = '<span>Время:  </span>' + iterator.time
            evenItnfo.append(addres)
            addres.innerHTML = '<span>Адрес:  </span>' + iterator.addres
        }
    }

    function sortBySetting(eventsArray, setting) {

        let copyArray = JSON.parse(JSON.stringify(eventsArray))

        res = []

        for (const key in setting) {
            if (setting[key]) {
                for (const iterator of copyArray) {
                    if (iterator.district == key) {
                        res.push(iterator)
                    }
                }
            }
        }
    }

    function sortBySubSetting(res, subSetting) {

        subRes = []

        for (const key in subSetting) {
            if (subSetting[key]) {
                for (const iterator of res) {
                    if (iterator[key] == true) {
                        subRes.push(iterator)
                    }
                }
            }
        }
    }
}

const gen = (n, w) => (num) => num % n === 0 ? w : '';

const fizz = gen(3, 'Fizz')
const buzz = gen(5, 'Buzz')

let aaaa = [...Array(99).keys()].map(i  => i + 1).forEach( i => console.log(fizz(i)+buzz(i) || i))

