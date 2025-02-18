import { randInt, roll } from 'e';

import Bank from '../../structures/Bank';
import Clue from '../../structures/Clue';
import LootTable from '../../structures/LootTable';
import { itemID } from '../../util';
import { BlessingTable, FirelighterTable, PrayerPageTable, TeleportScrollTable } from './General';

export const EasyChefTable = new LootTable().add('Golden apron').add("Golden chef's hat");

export const EasySubMonkTable = new LootTable().add("Monk's robe top (g)").add("Monk's robe (g)");

export const EasyMonkTable = new LootTable().add('Coins', [3400, 6200], 4).add(EasySubMonkTable);

export const EasyCapeTable = new LootTable()
	.add('Team cape zero')
	.add('Team cape i')
	.add('Team cape x')
	.add('Cape of skulls');

export const EasyElegantTable = new LootTable()
	.add('Red elegant shirt')
	.add('Red elegant legs')
	.add('Red elegant blouse')
	.add('Red elegant skirt')
	.add('Green elegant shirt')
	.add('Green elegant legs')
	.add('Green elegant blouse')
	.add('Green elegant skirt')
	.add('Blue elegant shirt')
	.add('Blue elegant legs')
	.add('Blue elegant blouse')
	.add('Blue elegant skirt');

export const EasyRareTable = new LootTable()
	.add('Highwayman mask')
	.add('Blue beret')
	.add('Black beret')
	.add('White beret')
	.add('A powdered wig')
	.add('Flared trousers')
	.add('Pantaloons')
	.add('Sleeping cap')
	.add('Beanie')
	.add('Imp mask')
	.add('Goblin mask')
	.add('Black cane')
	.add('Red beret')
	.add('Rain bow')
	.add('Ham joint')
	.add('Staff of bob the cat')
	.add("Bob's red shirt")
	.add("Bob's blue shirt")
	.add("Bob's green shirt")
	.add("Bob's black shirt")
	.add("Bob's purple shirt")
	.add('Black platebody (t)')
	.add('Black platelegs (t)')
	.add('Black plateskirt (t)')
	.add('Black Full Helm (t)')
	.add('Black Kiteshield (t)')
	.add('Studded body (t)')
	.add('Studded chaps (t)')
	.add('Blue skirt (t)')
	.add('Blue wizard robe (t)')
	.add('Blue wizard hat (t)')
	.add('Bronze platebody (t)')
	.add('Bronze platelegs (t)')
	.add('Bronze plateskirt (t)')
	.add('Bronze kiteshield (t)')
	.add('Bronze full helm (t)')
	.add('Iron platebody (t)')
	.add('Iron platelegs (t)')
	.add('Iron plateskirt (t)')
	.add('Iron full helm (t)')
	.add('Iron kiteshield (t)')
	.add('Black wizard hat (t)')
	.add('Black wizard robe (t)')
	.add('Black skirt (t)')
	.add('Steel full helm (t)')
	.add('Steel platebody (t)')
	.add('Steel platelegs (t)')
	.add('Steel plateskirt (t)')
	.add('Steel kiteshield (t)')
	.add('Amulet of power (t)')
	.add('Black Platebody (g)')
	.add('Black platelegs (g)')
	.add('Black plateskirt (g)')
	.add('Black full Helm (g)')
	.add('Black kiteshield (g)')
	.add('Studded body (g)')
	.add('Studded chaps (g)')
	.add('Blue skirt (g)')
	.add('Blue wizard robe (g)')
	.add('Blue wizard hat (g)')
	.add('Bronze platebody (g)')
	.add('Bronze platelegs (g)')
	.add('Bronze plateskirt (g)')
	.add('Bronze kiteshield (g)')
	.add('Bronze full helm (g)')
	.add('Iron platebody (g)')
	.add('Iron platelegs (g)')
	.add('Iron plateskirt (g)')
	.add('Iron kiteshield (g)')
	.add('Iron full helm (g)')
	.add('Black wizard hat (g)')
	.add('Black wizard robe (g)')
	.add('Black skirt (g)')
	.add('Wooden shield (g)')
	.add('Steel full helm (g)')
	.add('Steel platebody (g)')
	.add('Steel platelegs (g)')
	.add('Steel plateskirt (g)')
	.add('Steel kiteshield (g)')
	.add('Leather body (g)')
	.add('Leather chaps (g)')
	.add('Black shield (h1)')
	.add('Black shield (h2)')
	.add('Black shield (h3)')
	.add('Black shield (h4)')
	.add('Black shield (h5)')
	.add('Black helm (h1)')
	.add('Black helm (h2)')
	.add('Black helm (h3)')
	.add('Black helm (h4)')
	.add('Black helm (h5)')
	.add('Black platebody (h1)')
	.add('Black platebody (h2)')
	.add('Black platebody (h3)')
	.add('Black platebody (h4)')
	.add('Black platebody (h5)')
	.add('Saradomin robe top')
	.add('Saradomin robe legs')
	.add('Guthix robe top')
	.add('Guthix robe legs')
	.add('Zamorak robe top')
	.add('Zamorak robe legs')
	.add('Ancient robe top')
	.add('Ancient robe legs')
	.add('Armadyl robe top')
	.add('Armadyl robe legs')
	.add('Bandos robe top')
	.add('Bandos robe legs')
	.add(EasyChefTable)
	.add(EasyMonkTable)
	.add(EasyCapeTable)
	.add(EasyElegantTable, 1, 6);

export const EasyAmuletTable = new LootTable()
	.add('Amulet of magic (t)')
	.add('Amulet of magic', 1, 9);

export const EasyBlessingsTable = new LootTable().add(BlessingTable).add('Coins', [3000, 7000], 2);

export const EasyBowTable = new LootTable().add('Willow comp bow').add('Willow longbow', 1, 9);

export const EasyStandardTable = new LootTable()
	.add('Coins', [50, 200])
	.add('Trout', [6, 10])
	.add('Salmon', [6, 10])
	.add('Air rune', [30, 50])
	.add('Fire rune', [30, 50])
	.add('Water rune', [30, 50])
	.add('Earth rune', [30, 50])
	.add('Mind rune', [30, 50])
	.add('Body rune', [30, 50])
	.add('Law rune', [5, 10])
	.add('Chaos rune', [5, 10])
	.add('Nature rune', [5, 10])
	.add('Purple sweets', [2, 6])
	.add('Black Platebody')
	.add('Black Longsword')
	.add('Black Full Helm')
	.add('Black Platelegs')
	.add('Black Battleaxe')
	.add('Black Axe')
	.add('Steel Pickaxe')
	.add('Black Dagger')
	.add('Staff Of Air')
	.add('Studded chaps')
	.add('Studded Body')
	.add('Willow Shortbow')
	.add('Coif')
	.add('Black pickaxe')
	.add(EasyAmuletTable)
	.add(EasyBlessingsTable)
	.add(EasyBowTable)
	.add(PrayerPageTable)
	.add(FirelighterTable)
	.add(TeleportScrollTable);

export const EasyClueTable = new LootTable().add(EasyStandardTable, 1, 11).add(EasyRareTable, 1, 1);

export class EasyCasket extends Clue {
	public open(quantity = 1): Bank {
		const loot = new Bank();

		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = randInt(2, 4);

			if (roll(50)) loot.add('Clue scroll (master)');

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(EasyClueTable.roll());
			}
		}

		return loot;
	}
}

const easyCasket = new EasyCasket({ table: EasyClueTable });
easyCasket.allItems.push(itemID('Clue scroll (master)'));
export default easyCasket;
