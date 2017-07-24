/*
Defend your Castle

You are advisor to the King of the Highlands. The King of the Woodlands has recently declared war on the Highlands as he longs for the mineral riches of the Highlands. Your spies have detected an imminent attack on your King's castle, and the King has put you in charge of the defences.

Task

Your spies have analysed the enemy's army, write a function that assesses if you stand a chance to defend your castle.

The function will take two objects, one for the defender and one for the attacker, they will look like this:

var attacker = {
    armyHp: int,
    archer: int,
    footSoldier: int,
    cavalry: int,
    artillery: int,
    strategy: string
}

var defender = {
    armyHp: int,
    archer: int,
    footSoldier: int,
    artillery: int,
    resources: string, 
    reinforcements: {
      battleValue: x,
      inTime: bool
    }
}

These are the power levels of the army units (for both armies the same):

Archer = 8
Foot soldier = 10
Cavalry = 14
Artillery = 30

First you need to calculate a battle value for each army:

1. Army unit amount * power level for each type of unit
2. Sum up these values and add the hit points armyHp on top to get the battle value

In wise foresight you could convince the King to ask his brother, King of the Badlands, for help. If he agrees, the reinforcements property will contain an object with the Badlands army's battle value and whether they will reach the fight in time or not. If he does not agree it will be null.

As a military expert you know that the morale of an army decides how effective they fight and that it can determine the outcome of a battle.

Another factor that could impact morale is the type of strategy the enemy will use to try and take the castle. If the attackers value for strategy is "siege", then the Woodlands will try to drain the resources of the of the defenders and thus lower their morale, if it is "assault" then the morale will only be affected by whether the reinforcements arrive in time or not.

Here’s how you should calculate the morale and apply it to the defenders battle value:

1. Morale has a starting value of 1.
2. Check which strategy the attacker will use, if its "siege" then check how stocked up the castle is on resources. If resources: "low", multiply the morale value by half, if "medium" by 0.75 and if "high" morale should remain unaffected. If strategy: "assault", skip this step.
3. Next check if the reinforcements arrived on time, if they have, multiply the morale value by 1.5, if they have not by 0.75. If the Kings brother refused to help in the first place, reinforcements: null then simply multiply by 0.9, as they didn’t give their hopes up that much.
4. Multiply the defenders battle value with the morale value.
5. If the reinforcements arrived on time, add them to the newly calculated battle value of the defenders.

To decide whether the castle is defendable, compare the final battle values, should the attackers value be higher return false, if they are equal or the defender has a higher value return true. This is because the King does not take part in the fight, and neither do you for that matter, so if the pawns kill each other, the important people survive and all is well, armies can be rebuilt after all :).
*/

function defendable(at, def) {
  var powerAt = (at.archer || 0)*8 + (at.footSoldier || 0)*10 + (at.cavalry || 0)*14 + (at.artillery || 0)*30 + at.armyHp;
  var powerDef = (def.archer || 0)*8 + (def.footSoldier || 0)*10 + (def.cavalry || 0)*14 + (def.artillery || 0)*30 + def.armyHp;
  var morale = 1 * (at.strategy == 'assault' ? 1 : def.resources == 'low' ? 0.5 : def.resources == 'medium' ? 0.75 : 1) * (def.reinforcements === null ? 0.9 : def.reinforcements.inTime ? 1.5 : 0.75);
  var powerMor = powerDef * morale + (def.reinforcements && def.reinforcements.inTime ? def.reinforcements.battleValue : 0);
  return powerMor >= powerAt;
}
