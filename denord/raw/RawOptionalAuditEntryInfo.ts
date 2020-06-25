import {
	ChannelId,
	MessageId,
	RoleId,
	UserId,
} from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
export interface RawOptionalAuditEntryInfo {
	/** number of days after which inactive members were kicked (Action Type: MEMBER_PRUNE) */
	delete_member_days: string;
	/** number of members removed by the prune (Action Type: MEMBER_PRUNE) */
	members_removed: string;
	/** channel in which the entities were targeted (Action Type: MEMBER_MOVE & MESSAGE_PIN & MESSAGE_UNPIN & MESSAGE_DELETE) */
	channel_id: ChannelId;
	/** id of the message that was targeted (Action Type: MESSAGE_PIN & MESSAGE_UNPIN) */
	message_id: MessageId;
	/** number of entities that were targeted (Action Type: MESSAGE_DELETE & MESSAGE_BULK_DELETE & MEMBER_DISCONNECT & MEMBER_MOVE) */
	count: string;
	/** id of the overwritten entity (Action Type: CHANNEL_OVERWRITE_CREATE & CHANNEL_OVERWRITE_UPDATE & CHANNEL_OVERWRITE_DELETE) */
	id: UserId | RoleId;
	/** type of overwritten entity ("member" or "role") (Action Type: CHANNEL_OVERWRITE_CREATE & CHANNEL_OVERWRITE_UPDATE & CHANNEL_OVERWRITE_DELETE) */
	type: 'member' | 'role';
	/** name of the role if type is "role" (Action Type: CHANNEL_OVERWRITE_CREATE & CHANNEL_OVERWRITE_UPDATE & CHANNEL_OVERWRITE_DELETE) */
	role_name: string;
}
