//
//
const noteForm = document.querySelector(".note-form")
const noteInput = document.querySelector("#note-input")
const noteSubmit = document.querySelector("#notes-submit")
const noteList = document.getElementById("notes")
const title = document.querySelector("#tittle")
const removedAll = `<button class="delete" onclick="deleteNote(this)">Quitar</button>`
const deleteAllIn = document.querySelector(".deleteAllIn")


///////////////metodo ternario (Si... es true entonces JSON.parse si no... [arr vacia])

let notesStorage = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []

// Con el if

/*let notesStorage = []
if (localStorage.getItem("notes")) {
    notesStorage = JSON.parse(localStorage.getItem("notes"))
} else {
    notesStorage = []
}*/

////////////// Hacemos el addeventlistener con el prevent default, le pusheamos a la variable que hemos creado en notesStorage y le pusheamos el valor introducido en el input.
noteForm.addEventListener("submit", example =>{
    example.preventDefault()
    notesStorage.push(noteInput.value)
    localStorage.setItem("notes", JSON.stringify(notesStorage))
    listBuilder(noteInput.value)
    noteInput.value = ""
})

////////Creamos note y dentro de note creamos y almacenamos li, despues en note creamos en HTML el boton de Quitar y lo unimos

const listBuilder = (example2) => {
    const note = document.createElement("li")
    note.innerHTML  =  `${example2} ${removedAll}`
    noteList.appendChild(note) 
    
}
///////1. Creamos la variable deleteNote que recoge "orden",2. despues creamos la variable de borrado que la relacionamos con su NodoPadre, 3.Creamos la variable indicedeli y cogemos el primer indice de borrado, 
///////4.DEspues en notesStorage seleccionamos el primer indice de "indicedeli", 5. Y lo seleccionamos con el getItems y en note;  notesStorage lo convertimnos a string con el metodo de JSON.stringfy(), 6. DEspues le añadimos el metodo de remove() a la variable que hemos creado llamada borrado
const deleteNote = (orden) =>{
    let borrado = orden.parentNode
    const indicedeli = notesStorage.indexOf(borrado)
    notesStorage.splice(indicedeli,1)
    localStorage.setItem("notes", JSON.stringify(notesStorage))
    borrado.remove()
      
}
/////////// Cuando el titulo sea tocado...
tittle.onclick = () =>{
    title.textContent = "Has dejado ya las cosas preparadas?"
    window.confirm(`Ya las tienes??`)
    if (window.confirm(`Ya las tienes??`)) {
        window.alert(`Vaaaaale`)
    } else {
        window.alert(`Y a que esperas? vas a llegar tarde...`)
    }
}
//////////////
deleteAllIn.onclick = (e) => {    
    e.preventDefault()        
    notesStorage = []
    localStorage.setItem("notesStr", JSON.stringify(notesStorage))
    notes.innerHTML = " "
 };



