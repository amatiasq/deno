import { DiscordEvent } from '../enum/DiscordEvent.ts';
import { GatewayOpCode } from '../enum/GatewayOpCode.ts';
import { integer } from '../internals/type-aliases.ts';
import { RawChannel } from './RawChannel.ts';
import { RawChannelPinsUpdateEvent } from './RawChannelPinsUpdateEvent.ts';
import { RawGuild } from './RawGuild.ts';
import { RawGuildBanAddEvent } from './RawGuildBanAddEvent.ts';
import { RawGuildBanRemoveEvent } from './RawGuildBanRemoveEvent.ts';
import { RawGuildCreateEvent } from './RawGuildCreateEvent.ts';
import { RawGuildEmojisUpdateEvent } from './RawGuildEmojisUpdateEvent.ts';
import { RawGuildIntegrationsUpdateEvent } from './RawGuildIntegrationsUpdateEvent.ts';
import { RawGuildMemberRemoveEvent } from './RawGuildMemberRemoveEvent.ts';
import { RawGuildMembersChunkEvent } from './RawGuildMembersChunkEvent.ts';
import { RawGuildMemberUpdateEvent } from './RawGuildMemberUpdateEvent.ts';
import { RawGuildRoleCreateEvent } from './RawGuildRoleCreateEvent.ts';
import { RawGuildRoleDeleteEvent } from './RawGuildRoleDeleteEvent.ts';
import { RawGuildRoleUpdateEvent } from './RawGuildRoleUpdateEvent.ts';
import { RawGuildMemberAddEvent } from './RawGuildMemberAddEvent.ts';
import { RawHelloEvent } from './RawHelloEvent.ts';
import { RawInviteCreateEvent } from './RawInviteCreateEvent.ts';
import { RawInviteDeleteEvent } from './RawInviteDeleteEvent.ts';
import { RawMessage } from './RawMessage.ts';
import { RawMessageDeleteBulkEvent } from './RawMessageDeleteBulkEvent.ts';
import { RawMessageDeleteEvent } from './RawMessageDeleteEvent.ts';
import { RawMessageReactionAddEvent } from './RawMessageReactionAddEvent.ts';
import { RawMessageReactionRemoveAllEvent } from './RawMessageReactionRemoveAllEvent.ts';
import { RawMessageReactionRemoveEmojiEvent } from './RawMessageReactionRemoveEmojiEvent.ts';
import { RawMessageReactionRemoveEvent } from './RawMessageReactionRemoveEvent.ts';
import { RawPresenceUpdateEvent } from './RawPresenceUpdateEvent.ts';
import { RawReadyEvent } from './RawReadyEvent.ts';
import { RawTypingStartEvent } from './RawTypingStartEvent.ts';
import { RawUnavailableGuild } from './RawUnavailableGuild.ts';
import { RawUser } from './RawUser.ts';
import { RawVoiceServerUpdateEvent } from './RawVoiceServerUpdateEvent.ts';
import { RawVoiceState } from './RawVoiceState.ts';
import { RawWebhookUpdateEvent } from './RawWebhookUpdateEvent.ts';

interface RawGatewayPayload_Dispatch_HELLO {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.HELLO;
	d: RawHelloEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_READY {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.READY;
	d: RawReadyEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_RESUMED {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.RESUMED;
	d: null;
	s: integer;
}

interface RawGatewayPayload_Dispatch_RECONNECT {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.RECONNECT;
	d: null;
	s: integer;
}

interface RawGatewayPayload_Dispatch_INVALID_SESSION {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVALID_SESSION;
	d: boolean;
	s: integer;
}

interface RawGatewayPayload_Dispatch_CHANNEL_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_CREATE;
	d: RawChannel;
	s: integer;
}

interface RawGatewayPayload_Dispatch_CHANNEL_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_UPDATE;
	d: RawChannel;
	s: integer;
}

interface RawGatewayPayload_Dispatch_CHANNEL_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_DELETE;
	d: RawChannel;
	s: integer;
}

interface RawGatewayPayload_Dispatch_CHANNEL_PINS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_PINS_UPDATE;
	d: RawChannelPinsUpdateEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_CREATE;
	d: RawGuildCreateEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_UPDATE;
	d: RawGuild;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_DELETE;
	d: RawUnavailableGuild;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_BAN_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_BAN_ADD;
	d: RawGuildBanAddEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_BAN_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_BAN_REMOVE;
	d: RawGuildBanRemoveEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_EMOJIS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_EMOJIS_UPDATE;
	d: RawGuildEmojisUpdateEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_INTEGRATIONS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_INTEGRATIONS_UPDATE;
	d: RawGuildIntegrationsUpdateEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_MEMBER_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_ADD;
	d: RawGuildMemberAddEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_MEMBER_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_REMOVE;
	d: RawGuildMemberRemoveEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_MEMBER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_UPDATE;
	d: RawGuildMemberUpdateEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_MEMBERS_CHUNK {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBERS_CHUNK;
	d: RawGuildMembersChunkEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_ROLE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_CREATE;
	d: RawGuildRoleCreateEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_ROLE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_UPDATE;
	d: RawGuildRoleUpdateEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_GUILD_ROLE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_DELETE;
	d: RawGuildRoleDeleteEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_INVITE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVITE_CREATE;
	d: RawInviteCreateEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_INVITE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVITE_DELETE;
	d: RawInviteDeleteEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_MESSAGE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_CREATE;
	d: RawMessage;
	s: integer;
}

interface RawGatewayPayload_Dispatch_MESSAGE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_UPDATE;
	d: RawMessage;
	s: integer;
}

interface RawGatewayPayload_Dispatch_MESSAGE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_DELETE;
	d: RawMessageDeleteEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_MESSAGE_DELETE_BULK {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_DELETE_BULK;
	d: RawMessageDeleteBulkEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_MESSAGE_REACTION_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_ADD;
	d: RawMessageReactionAddEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE;
	d: RawMessageReactionRemoveEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE_ALL {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE_ALL;
	d: RawMessageReactionRemoveAllEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE_EMOJI {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE_EMOJI;
	d: RawMessageReactionRemoveEmojiEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_PRESENCE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.PRESENCE_UPDATE;
	d: RawPresenceUpdateEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_TYPING_START {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.TYPING_START;
	d: RawTypingStartEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_USER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.USER_UPDATE;
	d: RawUser;
	s: integer;
}

interface RawGatewayPayload_Dispatch_VOICE_STATE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.VOICE_STATE_UPDATE;
	d: RawVoiceState;
	s: integer;
}

interface RawGatewayPayload_Dispatch_VOICE_SERVER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.VOICE_SERVER_UPDATE;
	d: RawVoiceServerUpdateEvent;
	s: integer;
}

interface RawGatewayPayload_Dispatch_WEBHOOKS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.WEBHOOKS_UPDATE;
	d: RawWebhookUpdateEvent;
	s: integer;
}

interface RawGatewayPayload_Heartbeat {
	op: GatewayOpCode.Heartbeat;
	t: null;
	d: number;
	s: null;
}

interface RawGatewayPayload_Identify {
	op: GatewayOpCode.Identify;
	t: null;
	d: unknown;
	s: null;
}

interface RawGatewayPayload_PresenceUpdate {
	op: GatewayOpCode.PresenceUpdate;
	t: null;
	d: unknown;
	s: null;
}

interface RawGatewayPayload_VoiceStateUpdate {
	op: GatewayOpCode.VoiceStateUpdate;
	t: null;
	d: unknown;
	s: null;
}

interface RawGatewayPayload_Resume {
	op: GatewayOpCode.Resume;
	t: null;
	d: unknown;
	s: null;
}

interface RawGatewayPayload_Reconnect {
	op: GatewayOpCode.Reconnect;
	t: null;
	d: unknown;
	s: null;
}

interface RawGatewayPayload_RequestGuildMembers {
	op: GatewayOpCode.RequestGuildMembers;
	t: null;
	d: unknown;
	s: null;
}

interface RawGatewayPayload_InvalidSession {
	op: GatewayOpCode.InvalidSession;
	t: null;
	d: unknown;
	s: null;
}

interface RawGatewayPayload_Hello {
	op: GatewayOpCode.Hello;
	t: null;
	d: RawHelloEvent;
	s: null;
}

interface RawGatewayPayload_HeartbeatAck {
	op: GatewayOpCode.HeartbeatAck;
	t: null;
	d: unknown;
	s: null;
}

export type RawGatewayPayload =
	| RawGatewayPayload_Dispatch_HELLO
	| RawGatewayPayload_Dispatch_READY
	| RawGatewayPayload_Dispatch_RESUMED
	| RawGatewayPayload_Dispatch_RECONNECT
	| RawGatewayPayload_Dispatch_INVALID_SESSION
	| RawGatewayPayload_Dispatch_CHANNEL_CREATE
	| RawGatewayPayload_Dispatch_CHANNEL_UPDATE
	| RawGatewayPayload_Dispatch_CHANNEL_DELETE
	| RawGatewayPayload_Dispatch_CHANNEL_PINS_UPDATE
	| RawGatewayPayload_Dispatch_GUILD_CREATE
	| RawGatewayPayload_Dispatch_GUILD_UPDATE
	| RawGatewayPayload_Dispatch_GUILD_DELETE
	| RawGatewayPayload_Dispatch_GUILD_BAN_ADD
	| RawGatewayPayload_Dispatch_GUILD_BAN_REMOVE
	| RawGatewayPayload_Dispatch_GUILD_EMOJIS_UPDATE
	| RawGatewayPayload_Dispatch_GUILD_INTEGRATIONS_UPDATE
	| RawGatewayPayload_Dispatch_GUILD_MEMBER_ADD
	| RawGatewayPayload_Dispatch_GUILD_MEMBER_REMOVE
	| RawGatewayPayload_Dispatch_GUILD_MEMBER_UPDATE
	| RawGatewayPayload_Dispatch_GUILD_MEMBERS_CHUNK
	| RawGatewayPayload_Dispatch_GUILD_ROLE_CREATE
	| RawGatewayPayload_Dispatch_GUILD_ROLE_UPDATE
	| RawGatewayPayload_Dispatch_GUILD_ROLE_DELETE
	| RawGatewayPayload_Dispatch_INVITE_CREATE
	| RawGatewayPayload_Dispatch_INVITE_DELETE
	| RawGatewayPayload_Dispatch_MESSAGE_CREATE
	| RawGatewayPayload_Dispatch_MESSAGE_UPDATE
	| RawGatewayPayload_Dispatch_MESSAGE_DELETE
	| RawGatewayPayload_Dispatch_MESSAGE_DELETE_BULK
	| RawGatewayPayload_Dispatch_MESSAGE_REACTION_ADD
	| RawGatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE
	| RawGatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE_ALL
	| RawGatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE_EMOJI
	| RawGatewayPayload_Dispatch_PRESENCE_UPDATE
	| RawGatewayPayload_Dispatch_TYPING_START
	| RawGatewayPayload_Dispatch_USER_UPDATE
	| RawGatewayPayload_Dispatch_VOICE_STATE_UPDATE
	| RawGatewayPayload_Dispatch_VOICE_SERVER_UPDATE
	| RawGatewayPayload_Dispatch_WEBHOOKS_UPDATE
	| RawGatewayPayload_Heartbeat
	| RawGatewayPayload_Identify
	| RawGatewayPayload_PresenceUpdate
	| RawGatewayPayload_VoiceStateUpdate
	| RawGatewayPayload_Resume
	| RawGatewayPayload_Reconnect
	| RawGatewayPayload_RequestGuildMembers
	| RawGatewayPayload_InvalidSession
	| RawGatewayPayload_Hello
	| RawGatewayPayload_HeartbeatAck;
