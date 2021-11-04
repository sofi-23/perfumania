export const items = [
    {
        "id": "1",
        "name": "Hypnotic Poison EDT",
        "price": "150 USD",
        "img": "https://falabella.scene7.com/is/image/FalabellaAR/93903_1?wid=800&hei=800&qlt=70",
        "stock": "10",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing el",
        "category": "femeninas"
    },
    {
        "id": "2",
        "name": "La vie est belle EDP",
        "price": "140 USD",
        "img": "https://juleriaque.vteximg.com.br/arquivos/ids/174893-1000-1000/la-vie-est-belle-edp-6580834A54130DB06CB5531233526EC2.jpg?v=637608494177300000",
        "stock": "10",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing el",
        "category": "femeninas"
    },
    {
        "id": "3",
        "name": "Channel N° 5 EDP",
        "price": "165 USD",
        "img": "https://juleriaque.vteximg.com.br/arquivos/ids/164506-1000-1000/chanel-n-5-edp-55A799F5E5508B5DD9ED4B0327A5910E.jpg?v=637347500709500000",
        "stock": "10",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing el",
        "category": "femeninas"
        
    },
    {
        "id": "4",
        "name": "Miss Dior EDP",
        "price": "160 USD",
        "img": "https://juleriaque.vteximg.com.br/arquivos/ids/177794-1000-1000/miss-dior-edp-2BC2BFEDC5A1BB8C09A6490E464212FC.jpg?v=637678261843170000azureedge.net/pub/media/catalog/product/cache/e4fc6e308b66431a310dcd4dc0838059/l/2/l20mousepad01.jpg",
        "stock": "10",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing el",
        "category": "femeninas"
    },
    {
        "id": "5",
        "name": "Invictus EDT",
        "price": "160 USD",
        "img": "https://belletia.com/images/e/a/e/2276-paco-rabanne-invictus-eau-de-toilette.jpg",
        "stock": "10",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing el",
        "category": "masculinas"
    },
    {
        "id": "6",
        "name": "Mon Guerlain EDP gift set",
        "price": "200 USD",
        "img": "https://cdn.fragrancenet.com/images/photos/600x600/356593.jpg",
        "stock": "10",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing el",
        "category": "giftSet"
    },
    {
        "id": "7",
        "name": "Calvin Klein One EDT",
        "price": "100 USD",
        "img": "https://juleriaque.vteximg.com.br/arquivos/ids/164527-1000-1000/ck-one-edt-A4B38CAB337C3072CE5A08E067D91419.jpg?v=637347500875700000",
        "stock": "10",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing el",
        "category": "unisex"
    },
    {
        "id": "8",
        "name": "Scandal EDP  gift set",
        "price": "190 USD",
        "img": "https://beautysas.vteximg.com.br/arquivos/ids/168686-450-450/set-scandal.jpg?v=637461493178370000",
        "stock": "10",
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing el",
        "category": "giftSet"
    }


]


export const getItems = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(items)
    }, 2000)
    
})
