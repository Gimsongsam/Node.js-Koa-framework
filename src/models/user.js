import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    username: String,
    hashedPassword: String,
})

// 비밀번호를 파라미터로 받아서 계정의 hashedPassword 값을 설정해준다.
UserSchema.methods.setPassword = async function(password){
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

// 파라미터로 받은 비밀번호가 해당 계정의 비밀번호와 일치하는지 검증해준다.
UserSchema.methods.checkPassword = async function(password){
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result; // true / false
};

// username으로 데이터를 찾을 수 있게 해준다.
UserSchema.statics.findByUsername = function(username){
    return this.findOne({username});
};

UserSchema.methods.serialize = function(){
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

const User = mongoose.model('User', UserSchema);
export default User;
