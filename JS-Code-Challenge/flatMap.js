
// create an array of objects and inside one key, create an array of objects then inside one key, create an array of objects

const orders = [
    {
        orderId: 101,
        customer: {
            name: "Alice"
        },
        items: [
            {
                productId: "P001",
                productName: "Laptop",
                reviews: [{ reviewer: "John", rating: 5 }, { reviewer: "Emily", rating: 4 }]
            },
            {
                productId: "P002",
                productName: "Mouse",
                reviews: [{ reviewer: "Mark", rating: 4 }, { reviewer: "Anna", rating: 3 }]
            }
        ]
    },
    {
        orderId: 102,
        customer: {
            name: "Bob"
        },
        items: [
            {
                productId: "P003",
                productName: "Smartphone",
                reviews: [{ reviewer: "Sara", rating: 5 }, { reviewer: "David", rating: 4 }]
            },
            {
                productId: "P004",
                productName: "Headphones",
                reviews: [{ reviewer: "Alice", rating: 5 }, { reviewer: "Tom", rating: 4 }]
            }
        ]
    }
];

//output: 

[
    {"orderId":101,"customerName":"Alice","productId":"P001","productName":"Laptop","reviewer":"John","rating":5},
    {"orderId":101,"customerName":"Alice","productId":"P001","productName":"Laptop","reviewer":"Emily","rating":4},
    {"orderId":101,"customerName":"Alice","productId":"P002","productName":"Mouse","reviewer":"Mark","rating":4},
    {"orderId":101,"customerName":"Alice","productId":"P002","productName":"Mouse","reviewer":"Anna","rating":3},
    {"orderId":102,"customerName":"Bob","productId":"P003","productName":"Smartphone","reviewer":"Sara","rating":5},
    {"orderId":102,"customerName":"Bob","productId":"P003","productName":"Smartphone","reviewer":"David","rating":4},
    {"orderId":102,"customerName":"Bob","productId":"P004","productName":"Headphones","reviewer":"Alice","rating":5},
    {"orderId":102,"customerName":"Bob","productId":"P004","productName":"Headphones","reviewer":"Tom","rating":4}
]


const transformedData = orders.flatMap(order =>
    order.items.flatMap(item =>
        item.reviews.map(review => ({
            orderId: order.orderId,
            customerName: order.customer.name,
            productId: item.productId,
            productName: item.productName,
            reviewer: review.reviewer,
            rating: review.rating
        }))
    )
);


const transformedData1 = orders.map(order => {
    return order.items.map(item => {
        return item.reviews.map(review => {
            return {
                orderId: order.orderId,
                customerName: order.customer.name,
                productId: item.productId,
                productName: item.productName,
                reviewer: review.reviewer,
                rating: review.rating
            }
        })
    })
}).flat(Infinity)


console.log(transformedData);
console.log(transformedData1);

