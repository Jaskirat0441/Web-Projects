const executeOrder = () => {
    let orderId = document.getElementById('order-id-input').value
    // console.log(orderId)
	if(orderId){
    document.getElementById('order-id-input').value="";

    createOrderCard(orderId)

    document.getElementById(orderId).innerText="Order Placed Successfully"



    console.log(chefReceived(orderId)
         .then(pizzaSauceAdded)
         .then(firstLayerOfCheezeAdded)
         .then(toppingsAdded)
         .then(secondLayerOfCheezeAdded)
         .then(pizzaBaked)
         .then(oreganoAddedAndPacked)
         .then(packageReceivedAtCounter)
         .then(() => document.getElementById(orderId).innerText="Package Received at Counter ")
         .catch((err) => console.log(err)))
	}
	else{
        document.getElementById("alert_btn").style.display="block";

        setTimeout(() => {
            document.getElementById("alert_btn").style.display="none";
        }, 1000);
    }
}

