export interface Announce{
    username : string;
    adress: string;
    category: string,
    phoneNumber : number,
    price: number,
    imageUrl : string 
}

export const ANNONCES : Announce[] = [
    { 
        username: 'Wissem',
        category : 'phone',
        adress: 'mourouj',
        phoneNumber : 22151525,
        price:  775 ,
        imageUrl : 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg'
    },
    { 
        username: 'Ahmed',
        category : 'phone',
        adress: 'mourouj',
        phoneNumber : 25611525,
        price:  854 ,
        imageUrl : 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg'
    },    { 
        username: 'heni',
        category : 'house',
        adress: 'jerba',
        phoneNumber : 22151525,
        price:  968 ,
        imageUrl : 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg'
    },    { 
        username: 'Wissem',
        category : 'phone',
        adress: 'mourouj',
        phoneNumber : 22151525,
        price:  775 ,
        imageUrl : 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg'
    }
]