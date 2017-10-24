exports.run = (client, message) =>
//just add any new roasts into the array in quotes please
{
    let roastArray = ["Fuck you", "Your mother was a whore and your father smelled of elderberries!","Do your parents even realize they’re living proof that two wrongs don’t make a right?",
        "Do you ever wonder what life would be like if you’d gotten enough oxygen at birth?","You always bring me so much joy—as soon as you leave the room.","I’d tell you to go fuck yourself, but that would be cruel and unusual punishment."
    ,"The only way you’ll ever get laid is if you crawl up a chicken’s ass and wait."];
    var i = Math.floor(Math.random()*roastArray.length);
    message.reply(roastArray[i])
}