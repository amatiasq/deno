import { Channel } from '../structure/Channel.ts';
import { Guild } from '../structure/Guild.ts';
import { User } from '../structure/User.ts';
import { ChannelId, GuildId, UserId } from './type-aliases.ts';

export class DiscordCache {
	private readonly user = new Map<UserId, User>();
	private readonly guild = new Map<GuildId, Guild>();
	private readonly channel = new Map<ChannelId, Channel>();

	saveUser(user: User) {
		this.user.set(user.id, user);
		return user;
	}

	getUser(id: UserId) {
		return this.user.get(id);
	}

	removeUser(id: UserId) {
		this.user.delete(id);
	}

	saveGuild(guild: Guild) {
		this.guild.set(guild.id, guild);
		return guild;
	}

	getGuild(id: GuildId) {
		return this.guild.get(id);
	}

	removeGuild(id: GuildId) {
		this.guild.delete(id);
	}

	saveChannel(channel: Channel) {
		this.channel.set(channel.id, channel);
		return channel;
	}

	getChannel(id: ChannelId) {
		return this.channel.get(id);
	}

	removeChannel(id: ChannelId) {
		this.channel.delete(id);
	}
}
