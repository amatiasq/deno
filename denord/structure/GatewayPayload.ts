import { DiscordEvent } from '../enum/DiscordEvent.ts';
import { GatewayOpCode } from '../enum/GatewayOpCode.ts';
import { integer, UserId } from '../internals/type-aliases.ts';
import { RawGatewayPayload } from '../raw/RawGatewayPayload.ts';
import { RawUser } from '../raw/RawUser.ts';
import { Channel, unwrapChannel, wrapChannel } from './Channel.ts';
import {
	ChannelPinsUpdateEvent,
	unwrapChannelPinsUpdateEvent,
	wrapChannelPinsUpdateEvent,
} from './ChannelPinsUpdateEvent.ts';
import { Guild, unwrapGuild, wrapGuild } from './Guild.ts';
import {
	GuildBanAddEvent,
	unwrapGuildBanAddEvent,
	wrapGuildBanAddEvent,
} from './GuildBanAddEvent.ts';
import {
	GuildBanRemoveEvent,
	unwrapGuildBanRemoveEvent,
	wrapGuildBanRemoveEvent,
} from './GuildBanRemoveEvent.ts';
import {
	GuildCreateEvent,
	unwrapGuildCreateEvent,
	wrapGuildCreateEvent,
} from './GuildCreateEvent.ts';
import {
	GuildEmojisUpdateEvent,
	unwrapGuildEmojisUpdateEvent,
	wrapGuildEmojisUpdateEvent,
} from './GuildEmojisUpdateEvent.ts';
import {
	GuildIntegrationsUpdateEvent,
	unwrapGuildIntegrationsUpdateEvent,
	wrapGuildIntegrationsUpdateEvent,
} from './GuildIntegrationsUpdateEvent.ts';
import {
	GuildMemberAddEvent,
	unwrapGuildMemberAddEvent,
	wrapGuildMemberAddEvent,
} from './GuildMemberAddEvent.ts';
import {
	GuildMemberRemoveEvent,
	unwrapGuildMemberRemoveEvent,
	wrapGuildMemberRemoveEvent,
} from './GuildMemberRemoveEvent.ts';
import {
	GuildMembersChunkEvent,
	unwrapGuildMembersChunkEvent,
	wrapGuildMembersChunkEvent,
} from './GuildMembersChunkEvent.ts';
import {
	GuildMemberUpdateEvent,
	unwrapGuildMemberUpdateEvent,
	wrapGuildMemberUpdateEvent,
} from './GuildMemberUpdateEvent.ts';
import {
	GuildRoleCreateEvent,
	unwrapGuildRoleCreateEvent,
	wrapGuildRoleCreateEvent,
} from './GuildRoleCreateEvent.ts';
import {
	GuildRoleDeleteEvent,
	unwrapGuildRoleDeleteEvent,
	wrapGuildRoleDeleteEvent,
} from './GuildRoleDeleteEvent.ts';
import {
	GuildRoleUpdateEvent,
	unwrapGuildRoleUpdateEvent,
	wrapGuildRoleUpdateEvent,
} from './GuildRoleUpdateEvent.ts';
import { HelloEvent, unwrapHelloEvent, wrapHelloEvent } from './HelloEvent.ts';
import {
	IdentifyCommand,
	unwrapIdentifyCommand,
	wrapIdentifyCommand,
} from './IdentifyCommand.ts';
import {
	InviteCreateEvent,
	unwrapInviteCreateEvent,
	wrapInviteCreateEvent,
} from './InviteCreateEvent.ts';
import {
	InviteDeleteEvent,
	unwrapInviteDeleteEvent,
	wrapInviteDeleteEvent,
} from './InviteDeleteEvent.ts';
import { Message, unwrapMessage, wrapMessage } from './Message.ts';
import {
	MessageDeleteBulkEvent,
	unwrapMessageDeleteBulkEvent,
	wrapMessageDeleteBulkEvent,
} from './MessageDeleteBulkEvent.ts';
import {
	MessageDeleteEvent,
	unwrapMessageDeleteEvent,
	wrapMessageDeleteEvent,
} from './MessageDeleteEvent.ts';
import {
	MessageReactionAddEvent,
	unwrapMessageReactionAddEvent,
	wrapMessageReactionAddEvent,
} from './MessageReactionAddEvent.ts';
import {
	MessageReactionRemoveAllEvent,
	unwrapMessageReactionRemoveAllEvent,
	wrapMessageReactionRemoveAllEvent,
} from './MessageReactionRemoveAllEvent.ts';
import {
	MessageReactionRemoveEmojiEvent,
	unwrapMessageReactionRemoveEmojiEvent,
	wrapMessageReactionRemoveEmojiEvent,
} from './MessageReactionRemoveEmojiEvent.ts';
import {
	MessageReactionRemoveEvent,
	unwrapMessageReactionRemoveEvent,
	wrapMessageReactionRemoveEvent,
} from './MessageReactionRemoveEvent.ts';
import {
	PresenceUpdateEvent,
	unwrapPresenceUpdateEvent,
	wrapPresenceUpdateEvent,
} from './PresenceUpdateEvent.ts';
import { ReadyEvent, unwrapReadyEvent, wrapReadyEvent } from './ReadyEvent.ts';
import {
	RequestGuildMembersCommand,
	unwrapRequestGuildMembersCommand,
	wrapRequestGuildMembersCommand,
} from './RequestGuildMembersCommand.ts';
import {
	ResumeCommand,
	unwrapResumeCommand,
	wrapResumeCommand,
} from './ResumeCommand.ts';
import {
	TypingStartEvent,
	unwrapTypingStartEvent,
	wrapTypingStartEvent,
} from './TypingStartEvent.ts';
import {
	UnavailableGuild,
	unwrapUnavailableGuild,
	wrapUnavailableGuild,
} from './UnavailableGuild.ts';
import {
	unwrapUser,
	unwrapUserPartial,
	User,
	wrapUser,
	wrapUserPartial,
} from './User.ts';
import {
	unwrapVoiceServerUpdateEvent,
	VoiceServerUpdateEvent,
	wrapVoiceServerUpdateEvent,
} from './VoiceServerUpdateEvent.ts';
import { unwrapVoiceState, VoiceState, wrapVoiceState } from './VoiceState.ts';
import {
	unwrapWebhookUpdateEvent,
	WebhookUpdateEvent,
	wrapWebhookUpdateEvent,
} from './WebhookUpdateEvent.ts';

export interface GatewayPayload_Dispatch_HELLO {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.HELLO;
	d: HelloEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_READY {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.READY;
	d: ReadyEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_RESUMED {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.RESUMED;
	d: null;
	s: integer;
}

export interface GatewayPayload_Dispatch_RECONNECT {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.RECONNECT;
	d: null;
	s: integer;
}

export interface GatewayPayload_Dispatch_INVALID_SESSION {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVALID_SESSION;
	d: boolean;
	s: integer;
}

export interface GatewayPayload_Dispatch_CHANNEL_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_CREATE;
	d: Channel;
	s: integer;
}

export interface GatewayPayload_Dispatch_CHANNEL_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_UPDATE;
	d: Channel;
	s: integer;
}

export interface GatewayPayload_Dispatch_CHANNEL_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_DELETE;
	d: Channel;
	s: integer;
}

export interface GatewayPayload_Dispatch_CHANNEL_PINS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.CHANNEL_PINS_UPDATE;
	d: ChannelPinsUpdateEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_CREATE;
	d: GuildCreateEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_UPDATE;
	d: Guild;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_DELETE;
	d: UnavailableGuild;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_BAN_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_BAN_ADD;
	d: GuildBanAddEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_BAN_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_BAN_REMOVE;
	d: GuildBanRemoveEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_EMOJIS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_EMOJIS_UPDATE;
	d: GuildEmojisUpdateEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_INTEGRATIONS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_INTEGRATIONS_UPDATE;
	d: GuildIntegrationsUpdateEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_MEMBER_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_ADD;
	d: GuildMemberAddEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_MEMBER_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_REMOVE;
	d: GuildMemberRemoveEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_MEMBER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBER_UPDATE;
	d: GuildMemberUpdateEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_MEMBERS_CHUNK {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_MEMBERS_CHUNK;
	d: GuildMembersChunkEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_ROLE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_CREATE;
	d: GuildRoleCreateEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_ROLE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_UPDATE;
	d: GuildRoleUpdateEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_GUILD_ROLE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.GUILD_ROLE_DELETE;
	d: GuildRoleDeleteEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_INVITE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVITE_CREATE;
	d: InviteCreateEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_INVITE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.INVITE_DELETE;
	d: InviteDeleteEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_MESSAGE_CREATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_CREATE;
	d: Message;
	s: integer;
}

export interface GatewayPayload_Dispatch_MESSAGE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_UPDATE;
	d: Message;
	s: integer;
}

export interface GatewayPayload_Dispatch_MESSAGE_DELETE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_DELETE;
	d: MessageDeleteEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_MESSAGE_DELETE_BULK {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_DELETE_BULK;
	d: MessageDeleteBulkEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_MESSAGE_REACTION_ADD {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_ADD;
	d: MessageReactionAddEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE;
	d: MessageReactionRemoveEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE_ALL {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE_ALL;
	d: MessageReactionRemoveAllEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE_EMOJI {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.MESSAGE_REACTION_REMOVE_EMOJI;
	d: MessageReactionRemoveEmojiEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_PRESENCE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.PRESENCE_UPDATE;
	d: PresenceUpdateEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_TYPING_START {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.TYPING_START;
	d: TypingStartEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_USER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.USER_UPDATE;
	d: User;
	s: integer;
}

export interface GatewayPayload_Dispatch_VOICE_STATE_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.VOICE_STATE_UPDATE;
	d: VoiceState;
	s: integer;
}

export interface GatewayPayload_Dispatch_VOICE_SERVER_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.VOICE_SERVER_UPDATE;
	d: VoiceServerUpdateEvent;
	s: integer;
}

export interface GatewayPayload_Dispatch_WEBHOOKS_UPDATE {
	op: GatewayOpCode.Dispatch;
	t: DiscordEvent.WEBHOOKS_UPDATE;
	d: WebhookUpdateEvent;
	s: integer;
}

interface GatewayPayload_Heartbeat {
	op: GatewayOpCode.Heartbeat;
	t: null;
	d: number;
	s: null;
}

interface GatewayPayload_Identify {
	op: GatewayOpCode.Identify;
	t: null;
	d: IdentifyCommand;
	s: null;
}

interface GatewayPayload_PresenceUpdate {
	op: GatewayOpCode.PresenceUpdate;
	t: null;
	d: Partial<User> & { id: UserId };
	s: null;
}

interface GatewayPayload_VoiceStateUpdate {
	op: GatewayOpCode.VoiceStateUpdate;
	t: null;
	d: VoiceState;
	s: null;
}

interface GatewayPayload_Resume {
	op: GatewayOpCode.Resume;
	t: null;
	d: ResumeCommand;
	s: null;
}

interface GatewayPayload_Reconnect {
	op: GatewayOpCode.Reconnect;
	t: null;
	d: null;
	s: null;
}

interface GatewayPayload_RequestGuildMembers {
	op: GatewayOpCode.RequestGuildMembers;
	t: null;
	d: RequestGuildMembersCommand;
	s: null;
}

interface GatewayPayload_InvalidSession {
	op: GatewayOpCode.InvalidSession;
	t: null;
	d: boolean;
	s: null;
}

interface GatewayPayload_Hello {
	op: GatewayOpCode.Hello;
	t: null;
	d: HelloEvent;
	s: null;
}

interface GatewayPayload_HeartbeatAck {
	op: GatewayOpCode.HeartbeatAck;
	t: null;
	d: null;
	s: null;
}

export type GatewayPayload =
	| GatewayPayload_Dispatch_HELLO
	| GatewayPayload_Dispatch_READY
	| GatewayPayload_Dispatch_RESUMED
	| GatewayPayload_Dispatch_RECONNECT
	| GatewayPayload_Dispatch_INVALID_SESSION
	| GatewayPayload_Dispatch_CHANNEL_CREATE
	| GatewayPayload_Dispatch_CHANNEL_UPDATE
	| GatewayPayload_Dispatch_CHANNEL_DELETE
	| GatewayPayload_Dispatch_CHANNEL_PINS_UPDATE
	| GatewayPayload_Dispatch_GUILD_CREATE
	| GatewayPayload_Dispatch_GUILD_UPDATE
	| GatewayPayload_Dispatch_GUILD_DELETE
	| GatewayPayload_Dispatch_GUILD_BAN_ADD
	| GatewayPayload_Dispatch_GUILD_BAN_REMOVE
	| GatewayPayload_Dispatch_GUILD_EMOJIS_UPDATE
	| GatewayPayload_Dispatch_GUILD_INTEGRATIONS_UPDATE
	| GatewayPayload_Dispatch_GUILD_MEMBER_ADD
	| GatewayPayload_Dispatch_GUILD_MEMBER_REMOVE
	| GatewayPayload_Dispatch_GUILD_MEMBER_UPDATE
	| GatewayPayload_Dispatch_GUILD_MEMBERS_CHUNK
	| GatewayPayload_Dispatch_GUILD_ROLE_CREATE
	| GatewayPayload_Dispatch_GUILD_ROLE_UPDATE
	| GatewayPayload_Dispatch_GUILD_ROLE_DELETE
	| GatewayPayload_Dispatch_INVITE_CREATE
	| GatewayPayload_Dispatch_INVITE_DELETE
	| GatewayPayload_Dispatch_MESSAGE_CREATE
	| GatewayPayload_Dispatch_MESSAGE_UPDATE
	| GatewayPayload_Dispatch_MESSAGE_DELETE
	| GatewayPayload_Dispatch_MESSAGE_DELETE_BULK
	| GatewayPayload_Dispatch_MESSAGE_REACTION_ADD
	| GatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE
	| GatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE_ALL
	| GatewayPayload_Dispatch_MESSAGE_REACTION_REMOVE_EMOJI
	| GatewayPayload_Dispatch_PRESENCE_UPDATE
	| GatewayPayload_Dispatch_TYPING_START
	| GatewayPayload_Dispatch_USER_UPDATE
	| GatewayPayload_Dispatch_VOICE_STATE_UPDATE
	| GatewayPayload_Dispatch_VOICE_SERVER_UPDATE
	| GatewayPayload_Dispatch_WEBHOOKS_UPDATE
	| GatewayPayload_Heartbeat
	| GatewayPayload_Identify
	| GatewayPayload_PresenceUpdate
	| GatewayPayload_VoiceStateUpdate
	| GatewayPayload_Resume
	| GatewayPayload_Reconnect
	| GatewayPayload_RequestGuildMembers
	| GatewayPayload_InvalidSession
	| GatewayPayload_Hello
	| GatewayPayload_HeartbeatAck;

export type GatewayPayloadData<T extends GatewayOpCode> = Extract<
	GatewayPayload,
	{ op: T }
>['d'];

export type DispatchPayload<T extends DiscordEvent> = Extract<
	GatewayPayload,
	{ t: T }
>['d'];

export function wrapGatewayPayload(x: RawGatewayPayload): GatewayPayload {
	switch (x.op) {
		case GatewayOpCode.Heartbeat:
			return x;
		case GatewayOpCode.Identify:
			return { ...x, d: wrapIdentifyCommand(x.d) };
		case GatewayOpCode.PresenceUpdate:
			return {
				...x,
				d: wrapUserPartial(x.d) as Partial<User> & { id: UserId },
			};
		case GatewayOpCode.VoiceStateUpdate:
			return { ...x, d: wrapVoiceState(x.d) };
		case GatewayOpCode.Resume:
			return { ...x, d: wrapResumeCommand(x.d) };
		case GatewayOpCode.Reconnect:
			return x;
		case GatewayOpCode.RequestGuildMembers:
			return { ...x, d: wrapRequestGuildMembersCommand(x.d) };
		case GatewayOpCode.InvalidSession:
			return x;
		case GatewayOpCode.Hello:
			return { ...x, d: wrapHelloEvent(x.d) };
		case GatewayOpCode.HeartbeatAck:
			return x;
		case GatewayOpCode.Dispatch:
			switch (x.t) {
				case DiscordEvent.HELLO:
					return { ...x, d: wrapHelloEvent(x.d) };
				case DiscordEvent.READY:
					return { ...x, d: wrapReadyEvent(x.d) };
				case DiscordEvent.RESUMED:
					return x;
				case DiscordEvent.RECONNECT:
					return x;
				case DiscordEvent.INVALID_SESSION:
					return x;
				case DiscordEvent.CHANNEL_CREATE:
					return { ...x, d: wrapChannel(x.d) };
				case DiscordEvent.CHANNEL_UPDATE:
					return { ...x, d: wrapChannel(x.d) };
				case DiscordEvent.CHANNEL_DELETE:
					return { ...x, d: wrapChannel(x.d) };
				case DiscordEvent.CHANNEL_PINS_UPDATE:
					return { ...x, d: wrapChannelPinsUpdateEvent(x.d) };
				case DiscordEvent.GUILD_CREATE:
					return { ...x, d: wrapGuildCreateEvent(x.d) };
				case DiscordEvent.GUILD_UPDATE:
					return { ...x, d: wrapGuild(x.d) };
				case DiscordEvent.GUILD_DELETE:
					return { ...x, d: wrapUnavailableGuild(x.d) };
				case DiscordEvent.GUILD_BAN_ADD:
					return { ...x, d: wrapGuildBanAddEvent(x.d) };
				case DiscordEvent.GUILD_BAN_REMOVE:
					return { ...x, d: wrapGuildBanRemoveEvent(x.d) };
				case DiscordEvent.GUILD_EMOJIS_UPDATE:
					return { ...x, d: wrapGuildEmojisUpdateEvent(x.d) };
				case DiscordEvent.GUILD_INTEGRATIONS_UPDATE:
					return { ...x, d: wrapGuildIntegrationsUpdateEvent(x.d) };
				case DiscordEvent.GUILD_MEMBER_ADD:
					return { ...x, d: wrapGuildMemberAddEvent(x.d) };
				case DiscordEvent.GUILD_MEMBER_REMOVE:
					return { ...x, d: wrapGuildMemberRemoveEvent(x.d) };
				case DiscordEvent.GUILD_MEMBER_UPDATE:
					return { ...x, d: wrapGuildMemberUpdateEvent(x.d) };
				case DiscordEvent.GUILD_MEMBERS_CHUNK:
					return { ...x, d: wrapGuildMembersChunkEvent(x.d) };
				case DiscordEvent.GUILD_ROLE_CREATE:
					return { ...x, d: wrapGuildRoleCreateEvent(x.d) };
				case DiscordEvent.GUILD_ROLE_UPDATE:
					return { ...x, d: wrapGuildRoleUpdateEvent(x.d) };
				case DiscordEvent.GUILD_ROLE_DELETE:
					return { ...x, d: wrapGuildRoleDeleteEvent(x.d) };
				case DiscordEvent.INVITE_CREATE:
					return { ...x, d: wrapInviteCreateEvent(x.d) };
				case DiscordEvent.INVITE_DELETE:
					return { ...x, d: wrapInviteDeleteEvent(x.d) };
				case DiscordEvent.MESSAGE_CREATE:
					return { ...x, d: wrapMessage(x.d) };
				case DiscordEvent.MESSAGE_UPDATE:
					return { ...x, d: wrapMessage(x.d) };
				case DiscordEvent.MESSAGE_DELETE:
					return { ...x, d: wrapMessageDeleteEvent(x.d) };
				case DiscordEvent.MESSAGE_DELETE_BULK:
					return { ...x, d: wrapMessageDeleteBulkEvent(x.d) };
				case DiscordEvent.MESSAGE_REACTION_ADD:
					return { ...x, d: wrapMessageReactionAddEvent(x.d) };
				case DiscordEvent.MESSAGE_REACTION_REMOVE:
					return { ...x, d: wrapMessageReactionRemoveEvent(x.d) };
				case DiscordEvent.MESSAGE_REACTION_REMOVE_ALL:
					return { ...x, d: wrapMessageReactionRemoveAllEvent(x.d) };
				case DiscordEvent.MESSAGE_REACTION_REMOVE_EMOJI:
					return {
						...x,
						d: wrapMessageReactionRemoveEmojiEvent(x.d),
					};
				case DiscordEvent.PRESENCE_UPDATE:
					return { ...x, d: wrapPresenceUpdateEvent(x.d) };
				case DiscordEvent.TYPING_START:
					return { ...x, d: wrapTypingStartEvent(x.d) };
				case DiscordEvent.USER_UPDATE:
					return { ...x, d: wrapUser(x.d) };
				case DiscordEvent.VOICE_STATE_UPDATE:
					return { ...x, d: wrapVoiceState(x.d) };
				case DiscordEvent.VOICE_SERVER_UPDATE:
					return { ...x, d: wrapVoiceServerUpdateEvent(x.d) };
				case DiscordEvent.WEBHOOKS_UPDATE:
					return { ...x, d: wrapWebhookUpdateEvent(x.d) };
			}
	}
}

export function unwrapGatewayPayload(x: GatewayPayload): RawGatewayPayload {
	switch (x.op) {
		case GatewayOpCode.Heartbeat:
			return x;
		case GatewayOpCode.Identify:
			return { ...x, d: unwrapIdentifyCommand(x.d) };
		case GatewayOpCode.PresenceUpdate:
			return {
				...x,
				d: unwrapUserPartial(x.d) as Partial<RawUser> & { id: UserId },
			};
		case GatewayOpCode.VoiceStateUpdate:
			return { ...x, d: unwrapVoiceState(x.d) };
		case GatewayOpCode.Resume:
			return { ...x, d: unwrapResumeCommand(x.d) };
		case GatewayOpCode.Reconnect:
			return x;
		case GatewayOpCode.RequestGuildMembers:
			return { ...x, d: unwrapRequestGuildMembersCommand(x.d) };
		case GatewayOpCode.InvalidSession:
			return x;
		case GatewayOpCode.Hello:
			return { ...x, d: unwrapHelloEvent(x.d) };
		case GatewayOpCode.HeartbeatAck:
			return x;
		case GatewayOpCode.Dispatch:
			switch (x.t) {
				case DiscordEvent.HELLO:
					return { ...x, d: unwrapHelloEvent(x.d) };
				case DiscordEvent.READY:
					return { ...x, d: unwrapReadyEvent(x.d) };
				case DiscordEvent.RESUMED:
					return x;
				case DiscordEvent.RECONNECT:
					return x;
				case DiscordEvent.INVALID_SESSION:
					return x;
				case DiscordEvent.CHANNEL_CREATE:
					return { ...x, d: unwrapChannel(x.d) };
				case DiscordEvent.CHANNEL_UPDATE:
					return { ...x, d: unwrapChannel(x.d) };
				case DiscordEvent.CHANNEL_DELETE:
					return { ...x, d: unwrapChannel(x.d) };
				case DiscordEvent.CHANNEL_PINS_UPDATE:
					return { ...x, d: unwrapChannelPinsUpdateEvent(x.d) };
				case DiscordEvent.GUILD_CREATE:
					return { ...x, d: unwrapGuildCreateEvent(x.d) };
				case DiscordEvent.GUILD_UPDATE:
					return { ...x, d: unwrapGuild(x.d) };
				case DiscordEvent.GUILD_DELETE:
					return { ...x, d: unwrapUnavailableGuild(x.d) };
				case DiscordEvent.GUILD_BAN_ADD:
					return { ...x, d: unwrapGuildBanAddEvent(x.d) };
				case DiscordEvent.GUILD_BAN_REMOVE:
					return { ...x, d: unwrapGuildBanRemoveEvent(x.d) };
				case DiscordEvent.GUILD_EMOJIS_UPDATE:
					return { ...x, d: unwrapGuildEmojisUpdateEvent(x.d) };
				case DiscordEvent.GUILD_INTEGRATIONS_UPDATE:
					return { ...x, d: unwrapGuildIntegrationsUpdateEvent(x.d) };
				case DiscordEvent.GUILD_MEMBER_ADD:
					return { ...x, d: unwrapGuildMemberAddEvent(x.d) };
				case DiscordEvent.GUILD_MEMBER_REMOVE:
					return { ...x, d: unwrapGuildMemberRemoveEvent(x.d) };
				case DiscordEvent.GUILD_MEMBER_UPDATE:
					return { ...x, d: unwrapGuildMemberUpdateEvent(x.d) };
				case DiscordEvent.GUILD_MEMBERS_CHUNK:
					return { ...x, d: unwrapGuildMembersChunkEvent(x.d) };
				case DiscordEvent.GUILD_ROLE_CREATE:
					return { ...x, d: unwrapGuildRoleCreateEvent(x.d) };
				case DiscordEvent.GUILD_ROLE_UPDATE:
					return { ...x, d: unwrapGuildRoleUpdateEvent(x.d) };
				case DiscordEvent.GUILD_ROLE_DELETE:
					return { ...x, d: unwrapGuildRoleDeleteEvent(x.d) };
				case DiscordEvent.INVITE_CREATE:
					return { ...x, d: unwrapInviteCreateEvent(x.d) };
				case DiscordEvent.INVITE_DELETE:
					return { ...x, d: unwrapInviteDeleteEvent(x.d) };
				case DiscordEvent.MESSAGE_CREATE:
					return { ...x, d: unwrapMessage(x.d) };
				case DiscordEvent.MESSAGE_UPDATE:
					return { ...x, d: unwrapMessage(x.d) };
				case DiscordEvent.MESSAGE_DELETE:
					return { ...x, d: unwrapMessageDeleteEvent(x.d) };
				case DiscordEvent.MESSAGE_DELETE_BULK:
					return { ...x, d: unwrapMessageDeleteBulkEvent(x.d) };
				case DiscordEvent.MESSAGE_REACTION_ADD:
					return { ...x, d: unwrapMessageReactionAddEvent(x.d) };
				case DiscordEvent.MESSAGE_REACTION_REMOVE:
					return { ...x, d: unwrapMessageReactionRemoveEvent(x.d) };
				case DiscordEvent.MESSAGE_REACTION_REMOVE_ALL:
					return {
						...x,
						d: unwrapMessageReactionRemoveAllEvent(x.d),
					};
				case DiscordEvent.MESSAGE_REACTION_REMOVE_EMOJI:
					return {
						...x,
						d: unwrapMessageReactionRemoveEmojiEvent(x.d),
					};
				case DiscordEvent.PRESENCE_UPDATE:
					return { ...x, d: unwrapPresenceUpdateEvent(x.d) };
				case DiscordEvent.TYPING_START:
					return { ...x, d: unwrapTypingStartEvent(x.d) };
				case DiscordEvent.USER_UPDATE:
					return { ...x, d: unwrapUser(x.d) };
				case DiscordEvent.VOICE_STATE_UPDATE:
					return { ...x, d: unwrapVoiceState(x.d) };
				case DiscordEvent.VOICE_SERVER_UPDATE:
					return { ...x, d: unwrapVoiceServerUpdateEvent(x.d) };
				case DiscordEvent.WEBHOOKS_UPDATE:
					return { ...x, d: unwrapWebhookUpdateEvent(x.d) };
			}
	}
}
