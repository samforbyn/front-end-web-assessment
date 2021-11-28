const noSelector = document.getElementById("noBtn")

const textSwitch = (e) => {
    let newStr = "<-- You can still go click yes! Click again to confirm no"
    e.preventDefault()
    if(noSelector.textContent === newStr){
        alert("that's okay! GUIs are cool too.")
    }
    noSelector.textContent = newStr
}

const noSwitch = () => {
    noSelector.classList.add("btnStyle")
}
const revert4 = () => {
   noSelector.classList.remove("btnStyle")
}

const yesSwitch =()=> {
    yesSelector.classList.add("btnStyle")
}
const revert5 = () => {
   yesSelector.classList.remove("btnStyle")
}

noSelector.addEventListener("click", textSwitch)
noSelector.addEventListener("mouseover", noSwitch)
noSelector.addEventListener("mouseout", revert4)
noSelector.addEventListener("click", textSwitch)

yesSelector = document.getElementById("yesBtn")
yesSelector.addEventListener("mouseover", yesSwitch)
yesSelector.addEventListener("mouseout", revert5)


const colorSelect = document.getElementById("color")
const placeSelect = document.getElementById("place")
const ritualSelect = document.getElementById("ritual")

const alert1 = () => {
    alert("My favorite color is blue!")
}
const alert2 = () => {
    alert("My favorite place is home!")
}
const alert3 = () => {
    alert("My favorite ritual is morning exercise!")
}

const colorSwitch1 = () => {
    colorSelect.classList.add("btnStyle")
}
const colorSwitch2 = () => {
    placeSelect.classList.add("btnStyle")
}
const colorSwitch3 = () => {
    ritualSelect.classList.add("btnStyle")
}

const revert1 = () => {
    colorSelect.classList.remove("btnStyle")
}
const revert2 = () => {
    placeSelect.classList.remove("btnStyle")
}
const revert3 = () => {
    ritualSelect.classList.remove("btnStyle")
}

colorSelect.addEventListener("click", alert1)
colorSelect.addEventListener("mouseover", colorSwitch1)
colorSelect.addEventListener("mouseout", revert1)


placeSelect.addEventListener("click", alert2)
placeSelect.addEventListener("mouseover", colorSwitch2)
placeSelect.addEventListener("mouseout", revert2)


ritualSelect.addEventListener("click", alert3)
ritualSelect.addEventListener("mouseover", colorSwitch3)
ritualSelect.addEventListener("mouseout", revert3)
