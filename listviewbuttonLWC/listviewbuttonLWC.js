import { LightningElement} from 'lwc';

export default class ListViewButtonLWC extends LightningElement {

    handleSuccess(event) {
        console.log('handleSuccess called'); // Check if this line is logged
        const accountId = event.detail.fields.Account__c.value;
        console.log('Selected Account Id:', accountId);
    }
}