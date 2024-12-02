
const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        
        if (node.classList?.contains('item')) {

            dragItem()

          }

      });
    });
  });


const players = document.querySelectorAll('.player-card');


players.forEach((player) => {
    observer.observe(player, { childList: true }); 
});



function dragItem() {

    let items = document.querySelectorAll('.item');

    const playersContainer  = document.querySelectorAll(".player-card")

    let drag = null ;

    

    items.forEach(item =>{

     item.addEventListener('dragstart',function () {

       drag = item 


       console.log('drag start')
       
     })


     item.addEventListener('dragend',function () {

       drag = null 

       console.log('drag end')
       
     })

      playersContainer.forEach(playerContainer => {
          
        playerContainer.addEventListener('dragover',function (e) {

         e.preventDefault()

 
         
     })

     })

     playersContainer.forEach(playerContainer => {
          
        playerContainer.addEventListener('dragleave',function () {


         
       })

       playerContainer.addEventListener('drop',function () {

         this.appendChild(drag)
         
       })

     })


    }

    )

 
}

