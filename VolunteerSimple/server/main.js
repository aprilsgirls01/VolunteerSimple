import { Meteor } from 'meteor/meteor';
import { Posters } from '../lib/poster.js';
import { Clients } from '../lib/client.js';


Meteor.startup(() => {
  Meteor.publish("Posters", function(){
   return Posts.find();
 });

 Meteor.publish("Clients", function(){
  return Clients.find();
  });
});

Meteor.methods({
  'testMethod' : function(){

  }
});
