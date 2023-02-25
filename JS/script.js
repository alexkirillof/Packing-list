const data = [{
        kod: "ХЗ4885498436",
        priceListNumber: "",
        articl: "",
        quantity: 50,
        price: 10000.00,
        productName: "Вино, 00001",
        unit: "шт",
        package: "шт",
        numberOfSeats: 5,
        weight: 0.0050,
        sum: 5000.00,
        number: ""
    },
    {
        kod: "Х98002115599 ",
        priceListNumber: "",
        articl: "",
        quantity: 10,
        price: 5000.00,
        productName: "Шампанское, 00002",
        unit: "шт",
        package: "Коробка",
        numberOfSeats: 1,
        weight: 0.0000,
        sum: 1000.00,
        number: ""
    },
    {
        kod: "Х15362204628",
        priceListNumber: "",
        articl: "",
        quantity: 30,
        price: 9900.00,
        productName: "Ром, 00003",
        unit: "шт",
        package: "Ящик",
        numberOfSeats: 3,
        weight: 0.0300,
        sum: 9900.00,
        number: ""
    },
    {
        kod: "Х15362204628",
        priceListNumber: "",
        articl: "",
        quantity: 100,
        price: 9900,
        productName: "Бренди, 00004",
        unit: "шт",
        package: "шт",
        numberOfSeats: 10,
        weight: 0.0100,
        sum: 9900.00,
        number: ""
    },

]





const numberRow = document.querySelector('.commodity-section-table__after-one');

function rowGenerator(arr) {
    arr.forEach(item => {
        numberRow.insertAdjacentHTML('beforeBegin', `<tr class="commodity-section-table__generated-data">
        <td>${item.kod}</td>
        <td>${item.priceListNumber}</td>
        <td>${item.articl}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td align="left">${item.productName}</td>
        <td>${item.unit}</td>
        <td>${item.package}</td>
        <td>${item.numberOfSeats}</td>
        <td>${item.weight}</td>
        <td>${item.sum}</td>
        <td>${item.number}</td>
        </tr>`);
    });

}

rowGenerator(data);