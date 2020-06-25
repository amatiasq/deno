import {
	ChannelId,
	EmojiId,
	GuildId,
	IntegrationId,
	InviteCode,
	MessageId,
	OverwriteId,
	RoleId,
	UserId,
	WebhookId,
} from '../internals/type-aliases.ts';

/** Although, the version can be defaulted, keep the v6 as it can be changed to test newer versions when necessary. */
const BASE_URL = 'https://discord.com/api/v6';
// const CDN_URL = 'https://cdn.discordapp.com';

//
// Channel Endpoints
//

export const CHANNEL = (id: ChannelId) => `${BASE_URL}/channels/${id}`;

export const CHANNEL_MESSAGES = (id: ChannelId) => `${CHANNEL(id)}/messages`;

export const CHANNEL_MESSAGE = (id: ChannelId, messageId: MessageId) =>
	`${CHANNEL(id)}/messages/${messageId}`;

export const CHANNEL_MESSAGE_REACTIONS = (
	id: ChannelId,
	messageId: MessageId,
) => `${CHANNEL_MESSAGE(id, messageId)}/reactions`;

export const CHANNEL_MESSAGE_REACTION = (
	id: ChannelId,
	messageId: MessageId,
	emoji: string,
) => `${CHANNEL_MESSAGE(id, messageId)}/reactions/${emoji}`;

export const CHANNEL_MESSAGE_REACTION_USER = (
	id: ChannelId,
	messageId: MessageId,
	emoji: string,
	userId: UserId | '@me',
) =>
	`${CHANNEL_MESSAGE(id, messageId)}/reactions/${encodeURIComponent(
		emoji,
	)}/${userId}`;

export const CHANNEL_BULK_DELETE = (id: ChannelId) =>
	`${CHANNEL(id)}/messages/bulk-delete`;

export const CHANNEL_PERMISSIONS = (id: ChannelId, overwriteId: OverwriteId) =>
	`${CHANNEL(id)}/permissions/${overwriteId}`;

export const CHANNEL_INVITES = (id: ChannelId) => `${CHANNEL(id)}/invites`;

export const CHANNEL_TYPING = (id: ChannelId) => `${CHANNEL(id)}/typing`;

export const CHANNEL_PINS = (id: ChannelId) => `${CHANNEL(id)}/pins`;

export const CHANNEL_PINNED_MESSAGE = (id: ChannelId, messageId: MessageId) =>
	`${CHANNEL(id)}/pins/${messageId}`;

export const CHANNEL_RECIPIENT = (id: ChannelId, userId: UserId) =>
	`${CHANNEL(id)}/recipients/${userId}`;

//
// Guild Endpoints
//

export const GUILDS = () => `${BASE_URL}/guilds`;

export const GUILD = (id: GuildId) => `${BASE_URL}/guilds/${id}`;

export const GUILD_AUDIT_LOGS = (id: GuildId) => `${GUILD(id)}/audit-logs`;

export const GUILD_EMOJIS = (id: GuildId) => `${GUILD(id)}/emojis`;

export const GUILD_EMOJI = (id: GuildId, emojiId: EmojiId) =>
	`${GUILD(id)}/emojis/${emojiId}`;

export const GUILD_PREVIEW = (id: GuildId) => `${GUILD(id)}/preview`;

export const GUILD_CHANNELS = (id: GuildId) => `${GUILD(id)}/channels`;

export const GUILD_CHANNEL = (id: GuildId) => `${GUILD(id)}/channels/${id}`;

export const GUILD_MEMBERS = (id: GuildId) => `${GUILD(id)}/members`;

export const GUILD_MEMBER = (id: GuildId, userId: UserId) =>
	`${GUILD(id)}/members/${userId}`;

export const GUILD_CURRENT_USER_NICK = (id: GuildId) =>
	`${GUILD(id)}/members/@me/nick`;

export const GUILD_MEMBER_ROLE = (
	id: GuildId,
	userId: UserId,
	roleId: string,
) => `${GUILD_MEMBER(id, userId)}/roles/${roleId}`;

export const GUILD_BANS = (id: GuildId) => `${GUILD(id)}/bans`;

export const GUILD_BAN = (id: GuildId, userId: UserId) =>
	`${GUILD(id)}/bans/${userId}`;

export const GUILD_ROLES = (id: GuildId) => `${GUILD(id)}/roles`;

export const GUILD_ROLE = (id: GuildId, roleId: RoleId) =>
	`${GUILD(id)}/roles/${roleId}`;

export const GUILD_PRUNE = (id: GuildId) => `${GUILD(id)}/prune`;

export const GUILD_REGIONS = (id: GuildId) => `${GUILD(id)}/regions`;

export const GUILD_INVITES = (id: GuildId) => `${GUILD(id)}/invites`;

export const GUILD_INTEGRATIONS = (id: GuildId) => `${GUILD(id)}/integrations`;

export const GUILD_INTEGRATION = (id: GuildId, integrationId: IntegrationId) =>
	`${GUILD(id)}/integrations/${integrationId}`;

export const GUILD_INTEGRATION_SYNC = (
	id: GuildId,
	integrationId: IntegrationId,
) => `${GUILD_INTEGRATION(id, integrationId)}/sync`;

export const GUILD_WIDGET = (id: GuildId) => `${GUILD(id)}/widget`;

export const GUILD_WIDGET_IMAGE = (id: GuildId) => `${GUILD(id)}/widget.png`;

export const GUILD_EMBED = (id: GuildId) => `${GUILD(id)}/embed`;

export const GUILD_VANITY_URL = (id: GuildId) => `${GUILD(id)}/vanity-url`;

//
// User endpoints
//

export const USER = (id: UserId | '@me') => `${BASE_URL}/users/${id}`;

export const CURRENT_USER = () => USER('@me');

export const CURRENT_USER_GUILDS = () => `${CURRENT_USER()}/guilds`;

export const CURRENT_USER_GUILD = (id: GuildId) =>
	`${CURRENT_USER()}/guilds/${id}`;

export const CURRENT_USER_DMS = () => `${CURRENT_USER()}/channels`;

export const CURRENT_USER_CONNECTIONS = () => `${CURRENT_USER()}/connections`;

//
// Webhooks
//

export const CHANNEL_WEBHOOKS = (id: ChannelId) => `${CHANNEL(id)}/webhooks`;

export const GUILD_WEBHOOKS = (id: GuildId) => `${GUILD(id)}/webhooks`;

export const WEBHOOK = (id: WebhookId) => `${BASE_URL}/webhooks/${id}`;

export const WEBHOOK_TOKEN = (id: WebhookId, token: string) =>
	`${WEBHOOK(id)}/${token}`;

export const WEBHOOK_SLACK = (id: WebhookId, token: string) =>
	`${WEBHOOK_TOKEN(id, token)}/slack`;

export const WEBHOOK_GITHUB = (id: WebhookId, token: string) =>
	`${WEBHOOK_TOKEN(id, token)}/github`;

//
// Misc
//

export const GATEWAY_BOT = () => `${BASE_URL}/gateway/bot`;

export const INVITE = (code: InviteCode) => `${BASE_URL}/invites/${code}`;

export const VOICE_REGIONS = () => `${BASE_URL}/voice/regions`;
