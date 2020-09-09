
const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')
const { demandOption } = require('yargs')
yargs.version("15.4.1")
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder : {
        title : {
            describe: 'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    body :{
        describe : 'body',
        demandOption: true,
        type : 'string',

    },
    handler(argv){
        notes.addnote(argv.title, argv.body)

    }
})
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption : true,
            type: 'string'
        }
},
    handler(argv){
        notes.removenote(argv.title)
    }

})
yargs.command({
    command: 'list',
    describe : 'print List',
    handler() {
        notes.listnotes()
        
    }
})
yargs.command({
    command: 'read',
    describe : 'reading a note',
    builder : {
        describe : 'note title',
        demandOption : true ,
        type : 'string'
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//console.log(process.argv)
//console.log(yargs.argv)
yargs.parse()