/*****************
*** Constantes ***
*****************/

// change the student every SPINNING_INTERVAL milliseconds until the end of spin.
const SPINNING_INTERVAL = 300; // 0,3 seconds

// stop spinning after MAX_SPINNING_TIME seconds.
const MAX_SPINNING_TIME = 3000; // 3 seconds

/****************
*** Load data ***
****************/

var stud_arr = [];
students.forEach(e => {stud_arr.push(new Student(e['firstname'], e['lastname'], e['promo'], e['td_group'], e['tp_group'], e['pic']))});

/******************
*** Set mugshot ***
******************/

// when spacebar is pressed, change the mugshot quickly to stop on a randomly chosen student. 
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        var nIntervId = setInterval((old, rd) => {
            
            var stud = stud_arr[Math.floor(Math.random() * stud_arr.length)]

            // picture
            var mugshot = document.getElementById("mugshot")
            mugshot.setAttribute("src", "./public/"+stud.pic+".jpg")

            // name
            document.getElementById("name").textContent = stud.firstname + " " + stud.lastname.toUpperCase()

            // price
            var random = Math.ceil(Math.random()*100000) * 5000
            var price = Intl.NumberFormat('de-DE').format(random)
            document.getElementById("price").textContent = "$ " + price
            // stop 
            if (Date.now() - old > rd) {
                clearInterval(nIntervId);
            }
        }, SPINNING_INTERVAL, Date.now(), Math.ceil(Math.random() * MAX_SPINNING_TIME))

    }
})


