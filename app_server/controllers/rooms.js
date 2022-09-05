var fs = require('fs');
var rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'))

/* GET room view */
const room = (req, res)=>{
    res.render('rooms', {title:'Travlr Getaways', rooms});
};

module.exports={room};