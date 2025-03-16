import { connect } from "../utils/sequelize"

export default defineNitroPlugin(async (nitro) => {
    try {
        const sequelize = await connect()
        const ret = await sequelize.queryRaw("SELECT * FROM users limit 1")
    } catch (e) {
        console.error(e)
    }
})