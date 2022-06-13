const goods = [
    {
        id: 1,
        name: 'Рубашка',
        description: 'Белая мужская',
        sizes: ['l', 's', 'xs', 'xl', 'xxl'],
        price: 1500,
        available: true,
    },
    {
        id: 2,
        name: 'Носки мужские',
        description: 'Черные',
        sizes: ['39-42', '43-46'],
        price: 150,
        available: true,
    },
    {
        id: 3,
        name: 'Носки женские',
        description: 'белые',
        sizes: ['36-39', '40-43'],
        price: 180,
        available: true,
    },
    {
        id: 4,
        name: 'Ботинки мужские',
        description: 'Кожанные коричневые',
        sizes: [40, 41, 43, 44, 45],
        price: 4150,
        available: true,
    },
    {
        id: 5,
        name: 'Сапоги женские',
        description: 'Советские из чулана',
        sizes: [42, 43, 45],
        price: 3000,
        available: true,
    },

]

const basket = [
    {
        good: 1,
        amount: 1, 
    },
    {
        good: 3,
        amount: 5, 
    },
    {
        good: 5,
        amount: 3, 
    }
]

console.log (basket);

function addOrder (id, amount) {
    addOrder.order = {good: id, amount: amount};
    basket.push(addOrder.order);
    return basket;
}

console.log(addOrder(4, 7));
console.log(addOrder(1, 5));


function delOrder(id) {
    for (let i=0; i<=basket.length; i++) {
        if (id === basket[i].good) {
            basket.slice(i,1);
        }
     }
    return basket;
}

console.log(delOrder(2));

function delBasket () {
    basket.slice(0, basket.length);
    return basket;
}

console.log(delBasket());

function totalBasket () {
    let totalAmount = 0
    let totalSumm = 0
    for (let i=0; i<=basket.length; i++) {
        totalAmount= totalAmount + basket[i].amount;
    }
    return totalAmount;
    for (let x=0; x<=goods.length; x++) {
        for (let l=0; l<=basket.length; l++) {
            if (basket[l].good === goods[x].id) {
                totalSumm = totalSumm + basket[l].amount * goods[x].price;
            }
        }
    }
    return totalSum
    const total = {'totalAmount': totalAmount, 'totalSumm': totalSumm}
return total
}

console.log(totalBasket());