(() => {
    const login = (data: { email: string, password: string }) : void => {
        console.log(data.email, data.password);
        
    }

    login({
        email: 'alexis@dev.com',
        password: "password123"
    })

    const products: any[] = [];

    type Sizes = "S" | "M" | "X" | "XL";

    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }) => {

    }


    const name: (string | null) = null;
})()