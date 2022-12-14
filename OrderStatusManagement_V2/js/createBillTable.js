const createBillTable = () => {
  let billDetails = [
    {
      item: "Pizza Delight",
      price: 5.00,
    },
    {
        item:"Medium Corn",
        price : 8.50,
    },
    {
        item: "Large FarmHouse",
        price : 4.75,
    }
  ];

//   total price
let totalAmount = 0
billDetails.forEach(element => {
    totalAmount += element
})
console.log(totalAmount)

let billTable = document.createElement('table');
let billTableHead = document.createElement('thead');
let billTableBody = document.createElement('tbody');

billTable.classList = 'table'

// 1. Creating Heading Row

let billHeadingRow = document.createElement('tr')
let billHeadingColumn1 = document.createElement('th')
let billHeadingColumn2 = document.createElement('th')
let billHeadingColumn3 = document.createElement('th')

billHeadingColumn1.innerText = '#'
billHeadingColumn2.innerText = 'Item'
billHeadingColumn3.innerText = 'Price'

billHeadingRow.append(billHeadingColumn1, billHeadingColumn2, billHeadingColumn3)
billTableHead.append(billHeadingRow)

let billTableRows = []
	for(let i = 1; i <= billDetails.length; i++){
		billTableRows.push(document.createElement('tr'))

		let billTableColumns = []
		for(let j = 0; j < 3; j++) 
			billTableColumns.push(document.createElement('td'))

		billTableColumns[0].innerText = i
		billTableColumns[1].innerText = billDetails[i - 1].item
		billTableColumns[2].innerText = `$${billDetails[i - 1].price.toFixed(2)}`

		billTableRows[i - 1].append(...billTableColumns)
	}


    // 3. Creating Total Bill Row
	let totalBillTH = document.createElement('th')
	totalBillTH.setAttribute('colspan', 2)
	totalBillTH.innerText = 'Total'
	let totalBillTD = document.createElement('td')
	totalBillTD.innerText = 15.25
	// totalBillTD.innerText = `$${totalAmount.toFixed(2)}`
	let totalBillRow = document.createElement('tr')
	totalBillRow.append(totalBillTH, totalBillTD)

	/* ---------------------------------------------------------------- */
	billTableBody.append(...billTableRows, totalBillRow)
	billTable.appendChild(billTableHead)
	billTable.appendChild(billTableBody)

	return billTable
}
