import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { getPageUrl, Link, withPrefix } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionPosts extends React.Component {
    renderPost(post, index) {
        const title = _.get(post, 'title');
        const thumbImage = _.get(post, 'thumb_img_path');
        const thumbImageAlt = _.get(post, 'thumb_img_alt', '');
        const excerpt = _.get(post, 'excerpt');
        const date = _.get(post, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');
        const postUrl = getPageUrl(post, { withPrefix: true });

        return (
            <article key={index} className="post post-card-home">
                <Link href={postUrl} rel="bookmark"><div className="post-inside">
                    <header className="post-header">
                        <h3 className="post-title">
                            {title}
                        </h3>
                    </header>
                    {excerpt && (
                        <div className="post-content">
                            <p>{excerpt}</p>
                        </div>
                    )}
                    <footer className="post-meta">
                        <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                    </footer>
                </div></Link>
            </article>
        );
    }

    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const blog = _.get(section, 'blog');
        const actions = _.get(section, 'actions');
        const posts = _.filter(_.orderBy(_.get(this.props, 'posts', []), 'date', 'desc'), ['blog', true]);
        const postsNumber = _.get(section, 'posts_number', 2);
        const recentPosts = posts.slice(0, postsNumber);

        return (
            <section id={sectionId} className="block block-posts">
                {title && <h2 className="block-title underline inner-sm">{title}</h2>}
                <div className="post-feed">
                    <div className="post-feed-inside">
                        {_.map(recentPosts, (post, index) => this.renderPost(post, index))}
                    </div>
                </div>
                {!_.isEmpty(actions) && (
                    <div className="block-buttons inner-sm">
                        <CtaButtons actions={actions} />
                    </div>
                )}
            </section>
        );
    }
}
