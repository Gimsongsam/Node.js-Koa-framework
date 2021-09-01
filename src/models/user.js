import mongoose, { Schema } from 'mongoose';
// import bcryptjs from 'bcryptjs';
var bcrypt = require('bcryptjs');
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    username: String,
    hashedPassword: String,
})

// 인스턴스 메소드
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

// hashedPassword 필드가 응답되지 않도록 delete해줌
UserSchema.methods.serialize = function(){
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

UserSchema.methods.generateToken = function(){
    const token = jwt.sign(
        // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣습니다.
        {
            _id: this.id,
            username: this.username,
        },
        process.env.JWT_SECRET, // 두 번째 파라미터에는 JWT 암호를 넣습니다.
        {
            expiresIn: '3d', // 7일 동안 유효함
        },
    );
    return token;
};

// 스태틱 메소드
// username으로 데이터를 찾을 수 있게 해준다.
UserSchema.statics.findByUsername = function(username){
    return this.findOne({username});
};

const User = mongoose.model('User', UserSchema);
export default User;