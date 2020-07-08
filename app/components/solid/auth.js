import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
//import auth from 'solid-auth-client';

export default class SolidAuthComponent extends Component {
    @service("solid/auth") auth;

    constructor() {
        super(...arguments);
        if (this.session == null) {
            this.login();
        }
        //this.logout();
    }

    async login() {
        this.auth.login();
    }

    async logout() {
        this.auth.logout();
    }

    clicked() {
        alert('not working for now');
    }

    get isConnected() {
        return this.auth != null;
    }

    get getSession() {
        return this.auth.getWebID();
    }
}
