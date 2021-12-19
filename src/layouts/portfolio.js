import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import { Link, getPageUrl, withPrefix } from '../utils';

export default class Portfolio extends React.Component {
    renderPost(post, index) {
        const title = _.get(post, 'title');
        const thumbImage = _.get(post, 'thumb_img_path');
        const thumbImageAlt = _.get(post, 'thumb_img_alt', '');
        const excerpt = _.get(post, 'excerpt');
        const date = _.get(post, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:Z%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');
        // const postUrl = _.get(post, 'projectlink');
        const postUrl = getPageUrl(post, { withPrefix: true });

        return (
            <article key={index} className="project project-card">
                <div className="project-inside">
                    {thumbImage && (
                        <Link className="project-thumbnail" href={postUrl}>
                            <img src={withPrefix(thumbImage)} alt={thumbImageAlt} />
                        </Link>
                    )}
                    
                </div>
            </article>
        );
    }

    /* <footer className="project-meta">
                        <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                    </footer> */

    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const project = _.get(page, 'project');
        const posts = _.filter(_.orderBy(_.get(this.props, 'posts', []), 'date', 'desc'), ['project', true]);

        return (
            <Layout page={page} config={config}>
                <header className="screen-reader-text">
                    <h1>{title}</h1>
                </header>
                <div className="project-feed">
                    <div className="project-feed-inside">
                        {_.map(posts, (post, index) => this.renderPost(post, index))}
                    </div>
                </div>
            </Layout>
        );
    }
}
