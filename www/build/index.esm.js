import './index-6113ce3c.js';
import { A as ActiveRouter } from './active-router-26c03682.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
