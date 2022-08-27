
const chefReceived = (orderId) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText='Chef Received'

            resolve(orderId)
        }, 2000);
    })
}

const pizzaSauceAdded = (orderId) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Pizza Sauces Added'
            resolve(orderId)
        }, 8000);
    })
}

const firstLayerOfCheezeAdded = (orderId) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText= "First Layer of Cheeze Added"
            resolve(orderId)
        }, 4000);
    })
}

const toppingsAdded = (orderId) =>{
    return new Promise ((resolve,reject)=> {
        setTimeout(() => {
            document.getElementById(orderId).innerText="Toppping Added"
            resolve(orderId)
        }, 9000);
    })
}

const secondLayerOfCheezeAdded = (orderId) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderId).innerText= "Second Layer of Cheeze Added"
            resolve(orderId)
        }, 4000);
    })
}
const pizzaBaked = (orderId) => {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            document.getElementById(orderId).innerText = 'Pizza Baked! '
            resolve (orderId)
        }, 12000);
    })
}

const oreganoAddedAndPacked = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText = 'Oregano added and packed'
			resolve(orderId)
		}, 8000)
	})
}

const packageReceivedAtCounter = (orderId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderId).innerText = 'Package received at counter'
			resolve()
		}, 2000)
	})
}