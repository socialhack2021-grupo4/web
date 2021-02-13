
export = RetoPlusOne
declare namespace RetoPlusOne {
    export interface Experience {
        id: number,
        stripeId: string,
        title: string,
        description: string,
        pic_url: string
        currency: string,
        price: number
    }
}
