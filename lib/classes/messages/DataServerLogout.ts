// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { IPAddress } from '../IPAddress';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class DataServerLogoutMessage implements MessageBase
{
    name = 'DataServerLogout';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = Message.DataServerLogout;

    UserData: {
        AgentID: UUID;
        ViewerIP: IPAddress;
        Disconnect: boolean;
        SessionID: UUID;
    };

    getSize(): number
    {
        return 37;
    }

    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.UserData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.UserData['ViewerIP'].writeToBuffer(buf, pos);
        pos += 4;
        buf.writeUInt8((this.UserData['Disconnect']) ? 1 : 0, pos++);
        this.UserData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        return pos - startPos;
    }

    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjUserData: {
            AgentID: UUID,
            ViewerIP: IPAddress,
            Disconnect: boolean,
            SessionID: UUID
        } = {
            AgentID: UUID.zero(),
            ViewerIP: IPAddress.zero(),
            Disconnect: false,
            SessionID: UUID.zero()
        };
        newObjUserData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjUserData['ViewerIP'] = new IPAddress(buf, pos);
        pos += 4;
        newObjUserData['Disconnect'] = (buf.readUInt8(pos++) === 1);
        newObjUserData['SessionID'] = new UUID(buf, pos);
        pos += 16;
        this.UserData = newObjUserData;
        return pos - startPos;
    }
}

