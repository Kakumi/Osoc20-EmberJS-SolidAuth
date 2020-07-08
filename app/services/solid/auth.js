import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Service from '@ember/service';
import auth from 'solid-auth-client';
import rdflib from 'ember-rdflib';
import { SOLID } from '../../utils/namespaces';

const { sym } = rdflib;

export default class SolidAuthService extends Service {
    @tracked session = null;

    async login() {
        let session = await auth.currentSession();

        if( session ) {
            this.session = session;
            console.log(session.webId);
        } else {
            const identityProvider = "https://solid.community";
            auth.login(identityProvider);
        }
    }

    async logout() {
        auth.logout().then(() => {
            alert('Goodbye!');
            this.session = null;
        });
    }

    getWebID() {
        if (this.session != null) {
            return this.session.webId;
        } else {
            return "not connected !";
        }
    }
}
