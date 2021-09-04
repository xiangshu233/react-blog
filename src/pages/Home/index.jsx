import { useState } from 'react';
import { connect } from 'react-redux';
import { setNavShow } from '../../redux/actions';
import ArtList from './ArtList';
import PageNav from './PageNav';
import BlogCard from '../../components/Blog/Content/BlogCard';
import BlogData from '../../components/Blog/Content/BlogData';
import SocialCard from '../../components/Blog/Content/SocialCard';
import ClockCard from '../../components/Blog/Content/ClockCard';
import TagCard from '../../components/Blog/Content/TagCard';
import SiteCard from '../../components/Blog/Content/SiteCard';
import MyNotice from '../../components/Blog/Content/MyNotice';
import useToTop from '../../hooks/useToTop';
import './index.css';

const Home = props => {
    // 返回顶部
    useToTop(props, true);
    const [curPage, setCurPage] = useState(1);
    return (
        <div className="Home-box">
            <div className="home-top-img">
                <span className="home-top-title animated bounceInDown">飞鸟小站</span>
                <span className="home-top-poem animated bounceInUp">{props.content}</span>
            </div>
            <div className="home-body">
                <div className="home-main">
                    <ArtList curPage={curPage} />
                    <PageNav curPage={curPage} setCurPage={setCurPage} />
                </div>
                <div className="home-aside">
                    <BlogCard />
                    <SocialCard />
                    <BlogData />
                    <MyNotice />
                    <ClockCard />
                    <TagCard />
                    <SiteCard />
                </div>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        content: state.poem.content,
    }),
    { setNavShow }
)(Home);
