import {
	MongoClient,
	Collection as MongoCollection,
} from 'https://deno.land/x/mongo@v0.8.0/mod.ts';

const client = new MongoClient();

export class SimpleCollection {
	constructor(readonly col: MongoCollection) {}

	async get(key: string) {
		return this.col.findOne({ key });
	}

	async set(key: string, value: string) {
		const data = { key, value };
		const result = await this.col.findOne({ key });

		if (result) {
			await this.col.updateOne({ key }, { $set: data });
		} else {
			await this.col.insertOne(data);
		}
	}

	async delete(key: string): Promise<void> {
		await this.col.deleteOne({ key });
	}
}

export class Collection<T extends { id: string }> {
	constructor(readonly col: MongoCollection) {}

	async find(query: Partial<T>) {
		return await this.col.find(query);
	}

	async findOne(query: Partial<T>) {
		return await this.col.findOne(query);
	}

	async create(value: T): Promise<T> {
		await this.col.insertOne(value);
		return value;
	}

	async push(value: Omit<T, 'id'>) {
		const data: T = { ...value, id: String(Math.random()) } as any;
		await this.create(data);
		return data;
	}

	async get(id: string): Promise<T> {
		return this.col.findOne({ id });
	}

	async save(value: T) {
		const { id } = value;
		const result = await this.col.findOne({ id });

		if (result) {
			await this.col.updateOne({ id }, { $set: value });
		} else {
			await this.col.insertOne(value);
		}
	}

	async delete(id: string): Promise<void> {
		await this.col.deleteOne({ id });
	}
}

export type Database = ReturnType<typeof connectMongo>;

export function connectMongo(mongodbUri: string) {
	client.connectWithUri(mongodbUri);
	const db = client.database('discord-bots');

	return {
		simple: (name: string) => new SimpleCollection(db.collection(name)),

		collection<T extends { id: string }>(name: string) {
			return new Collection<T>(db.collection(name));
		},
	};
}
