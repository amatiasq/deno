import { RawInviteMetadata } from '../raw/RawInviteMetadata.ts';
import { integer, parseISO8601Timestamp, unparseISO8601Timestamp } from '../internals/type-aliases.ts';

// https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure

export interface InviteMetadata {
	/** number of times this invite has been used */
	uses: integer;
	/** max number of times this invite can be used */
	maxUses: integer;
	/** duration (in seconds) after which the invite expires */
	maxAge: integer;
	/** whether this invite only grants temporary membership */
	temporary: boolean;
	/** when this invite was created */
	createdAt: Date;
}


export function wrapInviteMetadata(x: RawInviteMetadata): InviteMetadata {
	return {
		...x,
		maxUses: x.max_uses,
		maxAge: x.max_age,
		createdAt: parseISO8601Timestamp(x.created_at),
	};
}

export function unwrapInviteMetadata(x: InviteMetadata): RawInviteMetadata {
	return {
		...x,
		max_uses: x.maxUses,
		max_age: x.maxAge,
		created_at: unparseISO8601Timestamp(x.createdAt),
	};
}

export function wrapInviteMetadataPartial(x: Partial<RawInviteMetadata>): Partial<InviteMetadata> {
	return {
		...x,
		maxUses: x.max_uses && x.max_uses,
		maxAge: x.max_age && x.max_age,
		createdAt: x.created_at && parseISO8601Timestamp(x.created_at),
	};
}

export function unwrapInviteMetadataPartial(x: Partial<InviteMetadata>): Partial<RawInviteMetadata> {
	return {
		...x,
		max_uses: x.maxUses && x.maxUses,
		max_age: x.maxAge && x.maxAge,
		created_at: x.createdAt && unparseISO8601Timestamp(x.createdAt),
	};
}
