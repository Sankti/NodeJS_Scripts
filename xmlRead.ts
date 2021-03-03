export interface BreakfastXML {
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

function printFood(foodItem: Food) {
    console.log(foodItem.name);
    console.log(foodItem.price);
    console.log(foodItem.description);
    console.log(foodItem.calories);
};