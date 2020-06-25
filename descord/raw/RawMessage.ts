import { MessageFlag } from '../enum/MessageFlag.ts';
import {
	ChannelId,
	GuildId,
	integer,
	ISO8601Timestamp,
	MessageId,
	RoleId,
	WebhookId,
} from '../internals/type-aliases.ts';
import { RawAttachment } from './RawAttachment.ts';
import { RawChannelMention } from './RawChannelMention.ts';
import { RawEmbed } from './RawEmbed.ts';
import { RawGuildMember } from './RawGuildMember.ts';
import { RawMessageActivity } from './RawMessageActivity.ts';
import { RawMessageApplication } from './RawMessageApplication.ts';
import { RawMessageReference } from './RawMessageReference.ts';
import { RawReaction } from './RawReaction.ts';
import { RawUser } from './RawUser.ts';

// https://discord.com/developers/docs/resources/channel#message-object-message-structure

export interface RawMessage {
	/** id of the message */
	id: MessageId;
	/** id of the channel the message was sent in */
	channel_id: ChannelId;
	/** id of the guild the message was sent in */
	guild_id?: GuildId;
	/**
	 * the author of this message (not guaranteed to be a valid user, see below)
	 *
	 * The author object follows the structure of the user object, but is only a
	 * valid user in the case where the message is generated by a user or bot user.
	 * If the message is generated by a webhook, the author object corresponds to
	 * the webhook's id, username, and avatar. You can tell if a message is
	 * generated by a webhook by checking for the webhook_id on the message object.
	 */
	author: RawUser; // webhook
	/**
	 * member properties for this message's author
	 *
	 * The member object exists in MESSAGE_CREATE and MESSAGE_UPDATE events from
	 * text-based guild channels. This allows bots to obtain real-time member data
	 * without requiring bots to store member state in memory.
	 */
	member?: Partial<RawGuildMember>;
	/** contents of the message */
	content: string;
	/** when this message was sent */
	timestamp: ISO8601Timestamp;
	/** when this message was edited (or null if never) */
	edited_timestamp: ISO8601Timestamp;
	/** whether this was a TTS message */
	tts: boolean;
	/** whether this message mentions everyone */
	mention_everyone: boolean;
	/**
	 * users specifically mentioned in the message
	 * array of user objects, with an additional partial member field
	 *
	 * The user objects in the mentions array will only have the partial member
	 * field present in MESSAGE_CREATE and MESSAGE_UPDATE events from text-based
	 * guild channels.
	 */
	mentions: Array<RawUser & { member: Partial<RawGuildMember> }>;
	/** roles specifically mentioned in this message */
	mention_roles: RoleId[];
	/**
	 * channels specifically mentioned in this message
	 *
	 * Not all channel mentions in a message will appear in mention_channels. Only
	 * textual channels that are visible to everyone in a lurkable guild will ever
	 * be included. Only crossposted messages (via Channel Following) currently
	 * include mention_channels at all. If no mentions in the message meet these
	 * requirements, this field will not be sent.
	 */
	mention_channels?: RawChannelMention[];
	/** any attached files */
	attachments: RawAttachment[];
	/** any embedded content */
	embeds: RawEmbed[];
	/** reactions to the message */
	reactions?: RawReaction[];
	/** used for validating a message was sent */
	nonce?: integer | string;
	/** whether this message is pinned */
	pinned: boolean;
	/** if the message is generated by a webhook, this is the webhook's id */
	webhook_id?: WebhookId;
	/** type of message */
	type: integer;
	/** sent with Rich Presence-related chat embeds */
	activity?: RawMessageActivity;
	/** sent with Rich Presence-related chat embeds */
	application?: RawMessageApplication;
	/** reference data sent with crossposted messages */
	message_reference?: RawMessageReference;
	/** message flags ORd together, describes extra features of the message */
	flags?: MessageFlag;
	// METHODS: ../extensions/messageMethods.ts
}
