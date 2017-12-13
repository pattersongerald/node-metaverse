"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../UUID");
const Vector3_1 = require("../Vector3");
const MessageFlags_1 = require("../../enums/MessageFlags");
class PickInfoReplyPacket {
    constructor() {
        this.name = 'PickInfoReply';
        this.flags = MessageFlags_1.MessageFlags.Trusted | MessageFlags_1.MessageFlags.FrequencyLow;
        this.id = 4294901944;
    }
    getSize() {
        return (this.Data['Name'].length + 1 + this.Data['Desc'].length + 2 + this.Data['User'].length + 1 + this.Data['OriginalName'].length + 1 + this.Data['SimName'].length + 1) + 110;
    }
    writeToBuffer(buf, pos) {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.Data['PickID'].writeToBuffer(buf, pos);
        pos += 16;
        this.Data['CreatorID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8((this.Data['TopPick']) ? 1 : 0, pos++);
        this.Data['ParcelID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.write(this.Data['Name'], pos);
        pos += this.Data['Name'].length;
        buf.write(this.Data['Desc'], pos);
        pos += this.Data['Desc'].length;
        this.Data['SnapshotID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.write(this.Data['User'], pos);
        pos += this.Data['User'].length;
        buf.write(this.Data['OriginalName'], pos);
        pos += this.Data['OriginalName'].length;
        buf.write(this.Data['SimName'], pos);
        pos += this.Data['SimName'].length;
        this.Data['PosGlobal'].writeToBuffer(buf, pos, true);
        pos += 24;
        buf.writeInt32LE(this.Data['SortOrder'], pos);
        pos += 4;
        buf.writeUInt8((this.Data['Enabled']) ? 1 : 0, pos++);
        return pos - startPos;
    }
    readFromBuffer(buf, pos) {
        const startPos = pos;
        const newObjAgentData = {
            AgentID: UUID_1.UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjData = {
            PickID: UUID_1.UUID.zero(),
            CreatorID: UUID_1.UUID.zero(),
            TopPick: false,
            ParcelID: UUID_1.UUID.zero(),
            Name: '',
            Desc: '',
            SnapshotID: UUID_1.UUID.zero(),
            User: '',
            OriginalName: '',
            SimName: '',
            PosGlobal: Vector3_1.Vector3.getZero(),
            SortOrder: 0,
            Enabled: false
        };
        newObjData['PickID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjData['CreatorID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjData['TopPick'] = (buf.readUInt8(pos++) === 1);
        newObjData['ParcelID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjData['Name'] = buf.toString('utf8', pos, length);
        pos += length;
        newObjData['Desc'] = buf.toString('utf8', pos, length);
        pos += length;
        newObjData['SnapshotID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjData['User'] = buf.toString('utf8', pos, length);
        pos += length;
        newObjData['OriginalName'] = buf.toString('utf8', pos, length);
        pos += length;
        newObjData['SimName'] = buf.toString('utf8', pos, length);
        pos += length;
        newObjData['PosGlobal'] = new Vector3_1.Vector3(buf, pos, true);
        pos += 24;
        newObjData['SortOrder'] = buf.readInt32LE(pos);
        pos += 4;
        newObjData['Enabled'] = (buf.readUInt8(pos++) === 1);
        this.Data = newObjData;
        return pos - startPos;
    }
}
exports.PickInfoReplyPacket = PickInfoReplyPacket;
//# sourceMappingURL=PickInfoReply.js.map