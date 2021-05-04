const inputt = document.querySelector('.header__right__search__input')

const form = document.querySelector('.header__right__form')
const address = document.querySelector('.main__weather__address')
const des = document.querySelector('.main__weather__title')
const wind = document.querySelector('.main__weather__windSpeed')
const visibility = document.querySelector('.main__weather__visibility')
const img = document.querySelector('.main__weather__img')
const temp = document.querySelector('.main__weather__temp')


form.addEventListener('submit',(e)=>{
    des.innerHTML = 'Finding location...'
    address.innerHTML = ''
    wind.innerHTML = ''
    visibility.innerHTML=''
    img.innerHTML =''
    temp.innerHTML = ''
    e.preventDefault()
    const location = inputt.value
    fetch('http://localhost:3002/weatherr?search='+encodeURIComponent(location)+'').then((respnse)=>{

        respnse.json().then((data)=>{
            if(data.error){
                des.innerHTML = data.error
            }else{
                address.innerHTML = data.Place
                des.innerHTML = data.Description
                wind.innerHTML = 'Wind speed: '+data.Winspeed +'Km/h'
                visibility.innerHTML = 'Visibility: '+data.Visiblity +'Km'
                img.src = data.Img
                temp.innerHTML = data.temperature +'&#9900;'+'C'
            }
        })
    })
})

