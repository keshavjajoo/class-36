class Player{
    constructor(){
}
getcount(){
   var getcountref=database.ref("playerCount")
   getcountref.on("value",function(data){
 playercount=data.val()
   })
}
updatecount(count){
    database.ref("/").update({
        playerCount:count
    })

}
update(name){
    var playerindex="player"+playercount
    database.ref(playerindex).set({
    name:name
    })
}
}