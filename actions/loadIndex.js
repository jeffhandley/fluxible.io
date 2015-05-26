/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import Debug from 'debug';
import SearchStore from '../stores/SearchStore';
const debug = Debug('loadIndex');

export default function loadIndex(context, payload, done) {
    debug(payload);

    const searchStore = context.getStore(SearchStore);
    const { index, docs } = searchStore.getState();

    // is the content already in the store?
    if (index && docs) {
        debug('index already cached');
        context.dispatch('RECEIVE_INDEX', { docs, index });
        return done();
    }

    // Load from service
    context.service.read('search', {}, {}, function (err, data) {
        debug('get index from service');
        context.dispatch('RECEIVE_INDEX', data);
        done();
    });
}
