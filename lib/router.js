Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){ return Meteor.subscribe('cards'); 
	}
});

Router.route('/', {name: 'cardsListContainer'});

Router.route('/items', {name: 'itemsList'});

Router.route('/cards/:_id', {
	name: 'cardPage',
	data: function(){
		return Cards.findOne(this.params._id);
	}
});