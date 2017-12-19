import { CommandsBase } from './CommandsBase';
import { UUID } from '../UUID';
import { ChatType } from '../../enums/ChatType';
import { FriendRequestEvent } from '../../events/FriendRequestEvent';
import { InventoryOfferedEvent } from '../../events/InventoryOfferedEvent';
export declare class CommunicationsCommands extends CommandsBase {
    sendInstantMessage(to: UUID | string, message: string): Promise<void>;
    nearbyChat(message: string, type: ChatType, channel?: number): Promise<void>;
    say(message: string, channel?: number): Promise<void>;
    whisper(message: string, channel?: number): Promise<void>;
    shout(message: string, channel?: number): Promise<void>;
    startTypingLocal(): Promise<void>;
    stopTypingLocal(): Promise<void>;
    startTypingIM(to: UUID | string): Promise<void>;
    stopTypingIM(to: UUID | string): Promise<void>;
    typeInstantMessage(to: UUID | string, message: string, thinkingTime?: number, charactersPerSecond?: number): Promise<void>;
    typeLocalMessage(message: string, thinkingTime?: number, charactersPerSecond?: number): Promise<void>;
    startGroupChatSession(sessionID: UUID | string, message: string): Promise<void>;
    acceptFriendRequest(event: FriendRequestEvent): Promise<void>;
    private respondToInventoryOffer(event, response);
    acceptInventoryOffer(event: InventoryOfferedEvent): Promise<void>;
    rejectInventoryOffer(event: InventoryOfferedEvent): Promise<void>;
    rejectFriendRequest(event: FriendRequestEvent): Promise<void>;
    sendGroupMessage(groupID: UUID | string, message: string): Promise<number>;
}
