// Fake FD Hamburger
// Startup part
// 
// Reference to mass-produced Crabby Patty
// 
// MC 1.18
// Forge
// Mods: Farmer's Delight, Create, Create: Dreams & Desires
//
// https://www.youtube.com/watch?v=fBB2mD7w3gM

onEvent('item.registry', event => {
    event.create('hamburger_shaped_clay', 'create:sequenced_assembly')
        .displayName('Hamburger-shaped Clay')
        .texture('kubejs:item/fake_crabby_patty/hamburger_shaped_clay');
    event.create('hamburger_shaped_clay_baked', 'create:sequenced_assembly')
        .displayName('Baked Hamburger-shaped Clay')
        .texture('kubejs:item/fake_crabby_patty/hamburger_shaped_clay_baked');
});
