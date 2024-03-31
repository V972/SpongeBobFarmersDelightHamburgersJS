// Fake FD Hamburger
// Funni part
// 
// Reference to mass-produced Crabby Patty
// 
// MC 1.18
// Forge
// Mods: Farmer's Delight, Create, Create: Dreams & Desires
//
// https://www.youtube.com/watch?v=fBB2mD7w3gM

onEvent('item.food_eaten', event => {
    const food = event.item
    if (food.id == 'farmersdelight:hamburger' && 
        food?.nbt?.Sus != null) {
        if (Utils.random.nextInt(0, 100) < 31) {
            event.player.kill();
        }
    }
});
