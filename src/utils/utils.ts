import Cryptr from "cryptr"

const CRYPTR_KEY = process.env.CRYPTR

export async function decryptData(data: any) {
    data.map((item)=>{
        item.password = cryptr.decrypt(item.password)
        return item
       })
    const cryptr = new Cryptr(CRYPTR_KEY)
    return cryptr.decrypt(data)
}
