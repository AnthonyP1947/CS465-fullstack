const mongoose = require('mongoose');
const trips = mongoose.model('trips');

module.exports = async (req, res) => {
    res.render('travel', {title: 'Travlr Getaways', trips: await trips.find({})});
};