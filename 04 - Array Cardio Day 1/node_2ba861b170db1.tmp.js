const hp = 300;
const atk = 10;
const def = 10;
const vel = 10;
const attrPoints = 0

let player = {
    hp:hp,
    atk:atk,
    def:def,
    vel:vel
};
let monster = {
    hp:100,
    atk:4,
    def:6,
    vel:5
};
function dice(){
    return Math.floor(Math.random() * 6 + 1);
};
let turn;
function battle() {
    let random = dice();

    if (random % 2 == 0){
        playerAtk();
    }else{
        monsterAtk()
    };
    turn = random
};

function playerAtk() {
    if (player.atk >= monster.def) {
        monster.hp -= player.atk - monster.def
        console.log(monster.hp);      
    }else{
        console.log("Monster got the attack smooth.");
    };
};

function monsterAtk() {
    if (monster.atk >= player.def) {
        player.hp -= monster.atk - player.def;
        console.log(player.hp);
    }else{
        console.log("Player felt nothing.");
    };
};
while (monster.hp > 0){
setTimeout(() => {
    console.log("both are reading to fight.");
    if (turn % 2 == 0){
        console.log("Player's turn.");
    }else{
        console.log("Monster's turn.");
    };
    battle();
}, 1000);  

};