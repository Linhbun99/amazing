export const imageProduct = [
    {
        thumbnail: "./images/thumbnail1.png",
        img: "./images/product_image1.png",
    },
    {
        thumbnail: "./images/thumbnail2.png",
        img: "./images/product_image.png",
    },
    {
        thumbnail: "./images/thumbnail1.png",
        img: "./images/product_image1.png",
    },
    {
        thumbnail: "./images/thumbnail2.png",
        img: "./images/product_image.png",
    },
    {
        thumbnail: "./images/thumbnail1.png",
        img: "./images/product_image1.png",
    }
]

export const product = {
    name: "Amazon Basics Plastic Clipboards with Metal Clip, Assorted Colors, Pack of 6",
    store: "Amazone Basics Store",
    rate: 4.5,
    totalRate: 999,
    answerQuestion: 21,
    tag: "Best seller",
    tagField: "plastic clipboards",
    currency: "USD",
    currencyLabel: '$',
    fee: 30,
    description: "Plastic clipboard (6-pack) conveniently holds forms and documents and provides a sturdy, portable writing surface Metal clip mechanism measures 5-3/4 inches wide; keeps papers easily and securely attached",
    info: {
        color: [{
            name: "Classic",
            img: "./images/thumbnail1.png"
        },
        {
            name: "Color",
            img: "./images/thumbnail2.png"
        },
        {
            name: "Metal",
            img: "./images/thumbnail1.png"
        }],
        size: ["Legal", "Letter"],
        pattern: ["Clipboards", "Clipboards + Pencils", "Clipboards + Papper Pads"],
        cost: [
            {
                color: ["Classic", "Color", "Metal"],
                size: ["Legal"],
                originValue: 20,
                discount: 20,
            },
            {
                color: ["Classic", "Color", "Metal"],
                size: ["Letter"],
                originValue: 25,
                discount: 20,
            }
        ]
    }




}