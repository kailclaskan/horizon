class Player{
    constructor(health = 100, lightAtk = 25, heavyAtk = 70, rangedAtk = 40, spear = 100, bow = 70){
        this.health = health;
        this.lightAtk = lightAtk;
        this.heavyAtk = heavyAtk;
        this.rangedAtk = rangedAtk;
        this.spear = spear;
        this.bow = bow;
    }
    playerAlive(){
        if(this.health > 0){
            return true;
        }else{
            return false;
        }
    }
    lightAttack(){
        return this.lightAtk + this.spear;
    }
    heavyAttack(){
        return this.heavyAtk + this.spear;
    }
    rangedAttack(){
        return this.rangedAtk + this.bow;
    }

}

const aloy = new Player();