// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious.
// Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance.
// See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0.
// You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:

//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

class Fighter {
    #name;            get name()            { return this.#name; }
    #damagePerAttack; get damagePerAttack() { return this.#damagePerAttack; }

    constructor(name, health, damagePerAttack) {
        this.#name = name;
        this.#damagePerAttack = damagePerAttack;
        this.health = health;
    }
}

function declareWinner(f1, f2, firstAttacker) {
    let attacker = firstAttacker === f1.name ? f1 : f2;
    let defender = attacker === f1 ? f2 : f1;

    while (true) {
        defender.health -= attacker.damagePerAttack;
        if(defender.health <= 0) return attacker.name;
        [attacker, defender] = [defender, attacker];
    }
}