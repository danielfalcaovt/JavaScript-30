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

function battle() {
    let random = dice();

    if (random % 2 == 0){
        playerAtk();
    }else{
        monsterAtk()
    };
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


while (monster.hp >= 0 || player.hp >= 0) {
    battle();
};