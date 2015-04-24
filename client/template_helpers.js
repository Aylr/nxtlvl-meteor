Template.cardsListContainer.helpers({
	cards: function(){
		return Cards.find();
	}
	// ,
	// items: function(){
	// 	return Items.find();
	// }
});

// Template.itemsList.helpers({
// 	items: function(){
// 		return Items.find();
// 	}
// });

Template.cardDisplay.helpers({
	// items: function(){
	// 	return Items.find();
	// },
	levelStarGlyphs: function(){
		var stars = "";
		var singleStar = '<span class="glyphicon glyphicon-certificate"></span>';

		for(i=0;i<this.level;i++){
			stars += singleStar;
		}
		return stars;
	}
});

