const products = [
    {
        id: "1",
        title: "Short celeste",
        price: 1490,
        category: "shorts",
        img: "https://images.app.goo.gl/svvCcwvHpB617qdF9",
        stock: 3,
        decription: ""
    },
    {
        id: "2",
        title: "Body naranja",
        price: 1690,
        category: "tops y bodies",
        img: "https://images.app.goo.gl/ohH64EnSeATsSHZYA",
        stock: 3,
        decription: ""
    },
    {
        id: "3",
        title: "Body rosado",
        price: 1690,
        category: "tops y bodies",
        img: "https://images.app.goo.gl/BAo1eWBJS6sq4M8s6",
        stock: 3,
        decription: ""
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },1000)
    })
}