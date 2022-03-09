export interface product{

    id :number;
    name: string;
    description :string;
    newprix: number;
    photoName:string ;
    photoName2:string ;
    photoName3:string ;
    promotion: boolean;
    quantity :number;
    selected :boolean;
    
    
    _links: {
        self: {
            href:string;
        },
        product: {
            href:string;
        },
        category: {
            id:number;
        }
    }
    
    
    }