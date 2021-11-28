const randBtn = document.getElementById("randomBtn")
const textIns = document.getElementById("txtInsert")


const randomeyes = () => {
    textIns.innerHTML = ''
    let rests = ["Lucky 13", "Sweet Lakes Biscuits & Limeade", "Purgatory", "Coco Wok", "Moochies", "McDonalds", "Wendys"]
    let randomRest = rests[~~(Math.random() * rests.length)]
    textIns.innerHTML = `Tonight we eat at ${randomRest}!`
}
randBtn.addEventListener("click", randomeyes)