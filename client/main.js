Meteor.subscribe('cards');


Template.cardPage.events({
	'click button#deleteCard': function(){
		Cards.remove(this._id,function(){
			console.log("card deleted");
			Router.go("/");
		});
	},
	'click button#archiveCard': function(){
		Cards.update(this._id, {$set: {archived: true}}, function(){
			console.log("card archived");
			Router.go("/");
		});
	}
});

Template.cardDisplay.events({
	'click button.addItem': function(){
		var newItem = {title: "new item", star: false};
		this.items.push(newItem);							// add new item to array
		var tempItems = {items: this.items};				// save temporary array

		Cards.update(this._id, {$set: tempItems});			// mongo set new array

		console.log({ID: this._id, items: tempItems});
	},
	'click button#archive_card': function(){
		Cards.update(this._id, {$set: {archived: true}});
	},
	'click button#unarchive_card': function(){
		Cards.update(this._id, {$set: {archived: false}});
	}
});

Template.newCardTemplate.events({
	'submit form': function(event){
		event.preventDefault();

		Cards.insert({
			title: event.target.card_name.value,
			level: event.target.level.value,
			items: [],
			archived: false,
			time_created: new Date(),
			user_id: Meteor.user_id
		});

		Router.go('/');
	}
});