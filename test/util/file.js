import fs from 'fs'
import moment from 'moment'


class File {
    async createTxtFile(strPath, strText) {
        const strDateTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        await fs.writeFile(`${strPath}.txt`, `[${strDateTime}] - ${strText}\n`, async (err) => {
            if (err) throw err;
        });
    }

    async appendTxtFile(strPath, strText) {
        const strDateTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        await fs.appendFile(`${strPath}.txt`, `[${strDateTime}] - ${strText}\n`, { flag: 'a+' }, async (err) => {
            if (err) throw err;
        });
    }

    async deleteFolderContents(strFolder) {
        const arrDir = await fs.readdirSync(strFolder);
        for (const strFile of arrDir) {
            await fs.unlinkSync(`${strFolder}${strFile}`);
        }
    }
}

export default new File();