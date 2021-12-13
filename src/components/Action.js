import React from 'react';
import _ from 'lodash';

import { Link, withPrefix, classNames } from '../utils';

export default class Action extends React.Component {
    render() {
        const action = _.get(this.props, 'action');
        const url = _.get(action, 'url');
        const label = _.get(action, 'label');
        const filename = _.get(action, 'filename');
        const style = _.get(action, 'style', 'link');
        const classes = classNames({
            'button': style === 'button'
        });
        const newWindow = _.get(action, 'new_window');
        const downloadAttribute = _.get(action, 'download_attr');
        const noFollow = _.get(action, 'no_follow');
        const attrs = {};
        if (newWindow) {
            attrs.target = '_blank';
        }
        if (downloadAttribute) {
            attrs.download = '';
        }
        if (newWindow || noFollow) {
            attrs.rel = [(newWindow ? 'noopener' : ''), (noFollow ? 'nofollow' : '')].filter(Boolean).join(' ');
        }
        return (
            <Link href={withPrefix(url)} {...attrs} className={classes}>
                {label}
            </Link>
        );
    }
}
