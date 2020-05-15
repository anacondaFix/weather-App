
fetch('http://localhost:4000/weather?address=!').then((response)=>{
    response.json().then((data)=>{
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const locationValue = search.value
    messageOne.textContent='loading the weather data.......'
    messageTwo.textContent=''
   
    fetch('http://localhost:4000/weather?address='+encodeURIComponent(locationValue)).then((response)=>{
        response.json().then((data)=>{
            if (data.error) {
               
                messageOne.textContent=data.error
                
                //console.log(data.error)
            } else {
                
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
               // console.log(data.location)
               // console.log(data.forecast)
            }
            
        })
    })
})