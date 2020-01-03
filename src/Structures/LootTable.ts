import { rand, roll } from '../util';
import Items from './Items';
import { LootTableItem, OneInItems, ReturnedLootItem } from '../meta/types';

export default class LootTable {
	public length: number;
	public table: LootTableItem[];
	public totalWeight: number;
	public limit: number;
	public oneInItems: OneInItems[];
	public everyItems: LootTableItem[];

	public constructor(limit?: number) {
		this.table = [];
		this.oneInItems = [];
		this.everyItems = [];
		this.length = 0;
		this.totalWeight = 0;
		this.limit = limit;
	}

	public add<T>(
		item: T | [T, number?, number?][],
		quantity: number[] | number = 1,
		weight: number = 1
	): this {
		if (Array.isArray(item)) {
			for (const itemToAdd of item) {
				this.addLootItem(...itemToAdd);
			}
		} else {
			this.addLootItem(item, quantity, weight);
		}

		return this;
	}

	public oneIn(chance: number, item: any, quantity: number | number[] = 1): this {
		this.oneInItems.push({ item, chance, quantity });
		return this;
	}

	public every(item: any, quantity: number | number[] = 1): this {
		this.everyItems.push({ item, quantity });
		return this;
	}

	private addLootItem(item: any, quantity: number[] | number = 1, weight: number = 1): void {
		this.length += 1;
		this.totalWeight += weight;

		this.table.push({
			item,
			weight,
			quantity
		});
	}

	public addItem(
		item: string | [string | number, number?, number?][],
		quantity: number[] | number = 1,
		weight: number = 1
	): this {
		if (Array.isArray(item)) {
			for (let itemToAdd of item) {
				itemToAdd[0] = Items.get(itemToAdd[0]).id;
				this.addLootItem(...itemToAdd);
			}
		} else {
			this.addLootItem(item, quantity, weight);
		}

		return this;
	}

	public roll(): ReturnedLootItem[] {
		// If this loot table has no items, return null;
		if (this.length === 0) return [];

		// Random number between 1 and the total weighting
		const randomWeight = rand(1, this.limit || this.totalWeight);

		if (randomWeight > this.totalWeight) return [];

		// The index of the item that will be used.
		let result;
		let weight = 0;

		for (let i = 0; i < this.table.length; i++) {
			const item = this.table[i];

			weight += item.weight;
			if (randomWeight <= weight) {
				result = i;
				break;
			}
		}

		let chosenItem = this.table[result];

		if (chosenItem.item === undefined) return [];

		// The items that are rolled.
		let items: ReturnedLootItem[] = this.generateResultItem(chosenItem);

		for (const { chance, item, quantity } of this.oneInItems) {
			if (roll(chance)) items = items.concat(this.generateResultItem({ item, quantity }));
		}

		for (const item of this.everyItems) {
			items = items.concat(this.generateResultItem(item));
		}

		return items;
	}

	private generateResultItem(item: LootTableItem): ReturnedLootItem[] {
		// If the chosen item is a loot table, the result is a roll of that table.
		if (item.item instanceof LootTable) {
			const rolledItems = item.item.roll();
			if (rolledItems) return rolledItems;
		}

		return [
			{
				item: item.item,
				quantity: Array.isArray(item.quantity)
					? rand(item.quantity[0], item.quantity[1])
					: item.quantity
			}
		];
	}
}
