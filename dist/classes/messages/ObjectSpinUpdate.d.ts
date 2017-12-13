/// <reference types="node" />
import { UUID } from '../UUID';
import { Quaternion } from '../Quaternion';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';
export declare class ObjectSpinUpdateMessage implements MessageBase {
    name: string;
    messageFlags: number;
    id: Message;
    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    ObjectData: {
        ObjectID: UUID;
        Rotation: Quaternion;
    };
    getSize(): number;
    writeToBuffer(buf: Buffer, pos: number): number;
    readFromBuffer(buf: Buffer, pos: number): number;
}