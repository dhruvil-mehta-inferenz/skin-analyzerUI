import { DataTypes, Sequelize } from "sequelize";
import skinIssues from './skinIssuesTable.js';
import scoreCategories from "./scoreCategoriesTable.js";
import userInfo from './userInfoTable.js'
import scoreHistory from './scoreHistoryTable.js'
import tipsInfo from "./tipsInfoTable.js";
import remediesInfo from "./remediesInfoTable.js";


const seq = new Sequelize('felicita', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false
});

seq.authenticate().then(() => {
    console.log("DB CONNECTED");
}).catch(() => {
    console.log("DB NOT CONNECTED")
});

const db = {};
db.Sequelize = Sequelize;
db.sqe = seq;

skinIssues(seq, DataTypes);
scoreCategories(seq, DataTypes);
userInfo(seq, DataTypes);
scoreHistory(seq, DataTypes);
tipsInfo(seq, DataTypes);
remediesInfo(seq, DataTypes);
seq.sync({ force: false }).then(() => {
    console.log("TABLES SYNCED");
}).catch(() => {
    console.log("TABLES DIDN'T SYNCED");
});

export default seq;