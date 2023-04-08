import React from "react";
export default function picture({ derece }) {
  let x = derece;
if (x<15){
    var durum= "https://i.imgflip.com/1wtb6f.jpg?a465888"
}
else if (x<30){
    var durum= "https://assets.ytv.com/wp-content/uploads/2017/10/15121231/YTV_SB_Best_Year_Ever_Tile.jpg"
}
else{
    var durum= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYTZiVSzu8rcAgQ9epSHXPIqz9SO8w1sufW5b5F7RiqCenw2H"
}
  return (
    <div>
    <img style={{width:"250px", height: "250px"}} src={durum}/>
    </div>
  );
}

