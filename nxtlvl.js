if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

}


Meteor.methods({
	update_star: function(obj){
		Cards.update(
		    {"items._id": new Meteor.Collection.ObjectID(obj.item_id)},
		    {$set: {"items.$.star": obj.star}}
		);
		console.log(obj.item_id + " star updated to: " + obj.star);
		// console.log("method: parent_id: ");
		// console.log(obj.parent_id);
		// console.log("method: item_id: ");
		// console.log(obj.item_id);
		// console.log("method: star: ");
		// console.log(obj.star);

	}
});