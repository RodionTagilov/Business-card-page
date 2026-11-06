let monthsLearning = 1;
const currentTech = "HTML, CSS и JS";
console.log("Я учусь веб-разработке уже " + monthsLearning + " месяц и изучаю " + currentTech);
const myList = document.querySelectorAll('nav a');
myList.forEach(function(link){
    link.addEventListener('click', function() {
        console.log('Клик по элементу!');
    });
});