const fs = require('fs');

export interface Welcome8 {
    breakfast_menu: BreakfastMenu;
}

export interface BreakfastMenu {
    food: Food[];
}

export interface Food {
    name:        string;
    price:       string;
    description: string;
    calories:    string;
}



fs.readFile('./reed.xml', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})