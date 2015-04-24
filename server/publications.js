Meteor.publish('cards', function(){
	return Cards.find();
});

// Meteor.publish('items', function(){
// 	return Items.find();
// });