import allure from "@wdio/allure-reporter";
import file from "./file";


class Reporter {
    async addLog(strMsg) {
        await file.appendTxtFile(global.strPath, strMsg);
        allure.addStep(strMsg);
    }

    async addStep() {

    }
}


export default new Reporter();