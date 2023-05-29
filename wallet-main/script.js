let purcashe = {}
let prices = document.querySelectorAll('.cp')
let form = document.querySelector('.product__create')
var tbody = document.querySelector('table').getElementsByTagName('tbody')[0]
let btn = document.querySelector('.submit__button')
btn.addEventListener('click', (ev) => {
    ev.preventDefault()
    let category = form.category.options[form.category.selectedIndex]
    let price = form.price.value
    let name = form.name.value
    tbody.insertAdjacentHTML('beforeEnd',
        `<tr class="exp">
        <td class="exp__obj">${name}</td>
        <td class="exp__obj">${category.text}</td>
        <td class="exp__obj">${price}</td>
        <td class="exp__obj"><img class="exp__img" src="free-icon-cross-mark-17047.png" alt=""></td>
    </tr>`
    )
    let exp = document.querySelector('.exp')
    if (category.text == 'Продукты') {
        tbody.lastChild.style.borderLeft = '8px solid green'
        prices[0].textContent = Number(prices[0].textContent) + Number(form.price.value)
    } else if (category.text == 'ФастФуд') {
        tbody.lastChild.style.borderLeft = '8px solid orange'
        prices[1].textContent = Number(prices[1].textContent) + Number(form.price.value)
    } else if (category.text == 'Спорт') {
        tbody.lastChild.style.borderLeft = '8px solid rgb(0, 191, 255)'
        prices[2].textContent = Number(prices[2].textContent) + Number(form.price.value)
    } else if (category.text == 'Напитки') {
        tbody.lastChild.style.borderLeft = '8px solid pink'
        prices[3].textContent = Number(prices[3].textContent) + Number(form.price.value)
    }
})
tbody.addEventListener('click', (eve) => {
    let trg = eve.target
    if (trg.classList.contains('.exp__img')) {
        trg.closest('tr').remove()
    }
})
function priceDelete() {

}
