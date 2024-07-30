export interface DATA{
    _id:string;
    image:{
        url:string,
    },
    price:{
        value:string;
        unit:string;

    },
    info:{
        "description":string,
        "addition":string,
    },
    inventory:{
        "quantity":string,
        "category":string
    },
    title:string


}
export interface CART{
    _id:string,
    
        item:{
            product:{
                _id:string,
                image:{url:string,}
            
                price:{
                    value:string,
                            },
                inventory:{
                    quantity:string
                },
                title:string,

        },quantity:string,

        }
    }

export interface FAQ{
    question:string,
    answer:string,
    type:string,
    _id:string
}
