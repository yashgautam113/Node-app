const fs = require('fs')
const chalk = require('chalk')
const getnotes = () =>{
    return 'YOur notes...'
}

const addnote = (title, body) =>{
    const notes = loadnotes()
    // const duplicateNotes = notes.filter (function(note){
    //     return note.title=== title
    // })
   // const duplicateNotes = notes.filter ((note) =>  note.title=== title)
    // the above function run even after finding a duplicate so it is better 
    // to use find instead of filter
    const duplicateNotes = notes.find((note)=> note.title ===title )
    debugger
    if (!duplicateNotes) {
    notes.push({
        title : title,
        body : body
    })
    savenotes(notes)
}
else {
    console.log("NOTE title taken")
}
}

const savenotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

const loadnotes = function(){
    try{
        const databuffer = fs.readFileSync('notes.json')
        const  dataJSON = databuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e) {
            return []
    }
   
}
const removenote = (title)=>{
    const notes = loadnotes()
    const notesTokeep = notes.filter((note)=>note.title !== title)
    if(notes.length > notesTokeep.length)
    console.log(chalk.green.inverse("NOTE REMOVED"))
    else 
    console.log(chalk.red.inverse("NOTE NOT FOUND"))
    savenotes(notesTokeep)
}

const listnotes = () => {
    const notes = loadnotes()
        console.log(chalk.inverse('Your notes'))
        notes.forEach ((note) => {
            console.log(note.title)
        })
}
const readNote = (title) =>{
    const notes = loadnotes()
    const note = notes.find((note)=>note.title === title)
    if(note){
    console.log(note.title)
    console.log(note.body)
    }
    else 
    console.log(chalk.red.inverse('Not found'))
}

module.exports = {
        getnotes : getnotes,
        addnote : addnote,
        removenote : removenote,
        listnotes : listnotes,
        readNote : readNote
}