
/*
首页新闻接口
参数: 
since_id: -1
max_id: -1
count: 10
category: -1
*/
const HOME_NEWS_API = '/v4/statuses/public_timeline_by_category.json?since_id=-1&max_id=-1&count=10&category=6'

const INDEX_BANNER_API = '/api/promote/indexBanner';
const CHANNELS_API = '/api/user/channels';
export default {
    HOME_NEWS_API,
    INDEX_BANNER_API,
    CHANNELS_API,
}