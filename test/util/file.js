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

    async saveUserProfileEmail(email) {
        await fs.promises.writeFile('userEmail.txt', email);
    }

    async getUserProfileEmail() {
        return await fs.promises.readFile('userEmail.txt', 'utf-8');
    }

    async emailFileExists() {
        try {
            await fs.promises.access('userEmail.txt');
            return true;
        } catch {
            return false;
        }
    }

    async createTxtFileHeroku(strPath, strText) {
        const strDateTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        await fs.writeFile(`${strPath}.txt`, `------- [${strDateTime}] -------\n\n\n${strText}`, async (err) => {
            if (err) throw err;
        });
    }

    async appendTxtFileHeroku(strPath, strText) {
        const strDateTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        await fs.appendFile(`${strPath}.txt`, `${strText}\n`, { flag: 'a+' }, async (err) => {
            if (err) throw err;
        });
    }
}

export default new File();