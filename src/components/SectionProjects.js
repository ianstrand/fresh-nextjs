import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { getPageUrl, Link, withPrefix } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionProjects extends React.Component {
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
            <article key={index} className="project project-card-home">
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

    /* <header className="project-header">
                        <h3 className="project-title">
                            <Link href={postUrl} rel="bookmark">{title}</Link>
                        </h3>
                    </header>
                    {excerpt && (
                        <div className="project-content">
                            <p>{excerpt}</p>
                        </div>
                    )} */



    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const project = _.get(section, 'project');
        const actions = _.get(section, 'actions');
        const posts = _.filter(_.orderBy(_.get(this.props, 'posts', []), 'date', 'desc'), ['project', true]);
        const postsNumber = _.get(section, 'posts_number', 2);
        const recentPosts = posts.slice(0, postsNumber);

        return (
            <section id={sectionId} className="block block-projects">
                {title && <h2 className="block-title underline inner-sm">{title}</h2>}
                <div className="project-feed">
                    <div className="project-feed-inside">
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
