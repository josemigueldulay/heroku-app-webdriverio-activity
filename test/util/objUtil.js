import reporter from "./reporter";


class objUtil {
    
    /**
     * @function click / @author bhoxzcs_migszxgxz_20241023
     * @description Click object 
     * @param {Object} objElement - Object to be clicked
     * @returns <none>
     */

    async clickObject(objElement) {
        await reporter.addLog('Started Function: clickObject');
        await objElement.waitForExist();
        await objElement.click();
        const strXpath = await objElement.selector;
        await reporter.addLog(`Completed Function: clickObject - Successfully clicked [${strXpath}]`);
    }

    /**
     * @function setObjectValue / @author bhoxzcs_migszxgxz_20241023
     * @description set object value 
     * @param {Object} objElement - Object to be set
     * @param {String} strText - Value to be set
     * @returns <none>
     */

    async setObjectValue(objElement, strText) {
        await reporter.addLog('Started Function: setObjectValue');
        await objElement.waitForExist();
        await objElement.setValue(strText);
        const strXpath = await objElement.selector;
        await reporter.addLog(`Completed Function: setObjectValue - Successfully set [${strXpath}]`)
    }

    /**
     * @function getObjText / @author bhoxzcs_migszxgxz_20241023
     * @description will get object value
     * @param {Object} objElement - object 
     * @returns {String} Object Text
     */
    async getObjText(objElement) {
        await reporter.addLog('Started Function: getObjText');
        await objElement.waitForExist();
        const strText = objElement.getText();
        const strXpath = await objElement.selector;
        await reporter.addLog(`Completed Function: getObjText - Object: [${strXpath}] Text: [${strText}]`)
        return strText;
    }

    /**
     * @function getObjValue / @author bhoxzcs_migszxgxz_20241023
     * @description will get object value
     * @param {Object} objElement - object 
     * @returns {String} Object Text
     */
    async getObjValue(objElement) {
        await reporter.addLog('Started Function: getObjValue');
        await objElement.waitForExist();
        const strText = objElement.getValue();
        const strXpath = await objElement.selector;
        await reporter.addLog(`Completed Function: getObjValue - Object: [${strXpath}] Value: [${strText}]`)
        return strText;
    }
}

export default new objUtil();