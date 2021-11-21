const query_login = (username : string, password :string) => {
    return `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`;
}

const query_allUser = "SELECT * FROM user ORDER BY username ASC";

const query_update = (username : string, password : string, user_id : number) => {
    return `UPDATE user SET username =  '${username}', password = '${password}' WHERE user_id = '${user_id}'`;
}

const query_delete = (user_id : string) => {
    return `DELETE FROM user WHERE user_id = '${user_id}'`;
}

const query_add = (username : string, password : string, role : number) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return `INSERT INTO user (username, password, role, created_at) VALUES ('${username}', '${password}', '${role}', '${dateTime}')`;
}

const M_Login = {
    getAllUser : query_allUser,
    query_login : query_login,
    query_update: query_update,
    query_delete : query_delete,
    query_add : query_add
}

export {M_Login};