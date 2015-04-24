Meteor.subscribe('cards');

Template.cardsListContainer.events({
	'click button.addCard': function(){
		Cards.insert({
			title: "new",
			level: 1,
			items: [ ]
		});
	}
});

Template.cardPage.events({
	'click button#deleteCard': function(){
		Cards.remove(this._id,function(){
			console.log("card deleted");
			Router.go("/");
		});
	}
});

Template.cardDisplay.events({
	'click button.addItem': function(){
		this.items.push({
			title: "new item",
			star: false
		});

		//this.items += {}

		var dummy = {items: this.items};

		Cards.update(this._id, {$set: dummy});

		console.log(this._id);
	}
});
