Template.activeCardsTemplate.helpers({
	cards: function(){
		return Cards.find({archived: false});
	}
});


Template.cardDisplay.helpers({
	levelStarGlyphs: function(){
		// sanitize level to make sure it's a number...

		var stars = "";
		var singleStar = '<span class="glyphicon glyphicon-certificate"></span>';

		for(i=0;i<this.level;i++){
			stars += singleStar;
		}
		return stars;
	},
	archive_or_unarchive_button: function(){
		if(this.archived){
			return '<button class="btn btn-info" id="unarchive_card"><span class="glyphicon glyphicon-folder-open"></span> &nbsp;Unarchive Card</button>';
		}else{
			return '<button class="btn btn-warning" id="archive_card"><span class="glyphicon glyphicon-folder-close"></span> &nbsp;Archive Card</button>';
		}
	},
	count_item_stars: function(){
		var stars = 0;
		var temp_items = this.items;
		// console.log("temp_items: ");
		// console.log(temp_items);
		// console.log("temp_items.length: ");
		// console.log(temp_items.length);
		for(i=0;i<temp_items.length;i++){
			if(temp_items[i].star){
				stars += 1;
			}
		}
		// console.log("counting stars: "+ stars);
		return stars;
	}
});

Template.cardDisplay.onRendered(function() {
	$(document).ready(function() {
	    // $(".editable").editable();

		$('div.items').editable({
			selector: 'a'
		});
	});
})

Template.archivedCardsTemplate.helpers({
	archived_cards: function(){
		return Cards.find(
			{
				$or: [
					{archived: true},						// find docs that have archived: true
					{'archived': {$exists: false}}			// and that do not have an archived field
				]
			}
		);
	}
});