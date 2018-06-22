let sanitizeHtml = require('sanitize-html')

let dirty = `<div class="article" id="article">
							<!--video-list-->
			<div class="video-2017" id="videoList0"><div class="play-video-area" id="videoList0_playArea" data-sudaclick="component_video_player_i"><a href="javascript:;" node-type="playArea"><img src="//n.sinaimg.cn/front/752/w480h272/20180622/WQIC-hefphqm3404605.jpg"><em class="i-common i-play-b"></em></a></div><div class="video-info" node-type="videoInfo" data-sudaclick="component_video_title_p"><a href="http://video.sina.com.cn/p/news/c/doc/2018-06-22/072768898683.html" target="_blank">视频：美国四处点火到底图什么？ 听完专家这席话就懂了</a></div></div>
			<script>
				SINA_TEXT_PAGE_INFO['videoDatas0'] = [						{
							ad_state: '1',
							pid: '1',
							video_id: 259355000,	//vid
							pic: '//n.sinaimg.cn/front/752/w480h272/20180622/WQIC-hefphqm3404605.jpg',		//节目列表小图
							thumbUrl: '//n.sinaimg.cn/front/752/w480h272/20180622/WQIC-hefphqm3404605.jpg',	//html5播放器上视频还未开始播显示的图片，可与pic相同
							title: '视频：美国四处点火到底图什么？ 听完专家这席话就懂了',	//标题
							source: '',	//视频发布来源。如：新华网。
							url: 'http://video.sina.com.cn/p/news/c/doc/2018-06-22/072768898683.html'
						}];
				SinaPage.loadWidget({
					trigger: {
					id: 'videoList0'
					},
				require:[
				{
					url: "//sjs2.sinajs.cn/video/sinaplayer/js/page/player_v1.js"
				},
				{
					url: "//finance.sina.com.cn/other/src/sinaPageVideo2017.js"
				}
				],
				onAfterLoad: function () {
					new SinaPageVideo({ 
						 wrap:'videoList0',//播放器外层id 
		 				videoList:SINA_TEXT_PAGE_INFO['videoDatas0']
				 });
			}
			});
		</script>
		<!--/video-list-->
<p>　　原标题：美国四处点火，到底图什么？专家这一席话，懂了！</p>
<p>　　从本月22日起，欧盟委员会将针对美国钢铝关税采取反制措施，对总额达28亿欧元，约合210亿元人民币的美国商品征收25%的额外关税。涉及的产品包括蔓越莓、橙汁、花生酱、牛仔裤、化妆品、摩托车和钢铁制品等。</p>
<p>　　欧盟此举是为了反制美国从6月1号开始对欧盟、加拿大和墨西哥的钢铝产品分别征收25%和10%的关税而采取的行动。不仅是欧盟，包括日本、加拿大、墨西哥、印度、俄罗斯等国，也都纷纷出台反制措施，一场贸易大战，在全球蔓延。</p>
<p>　　贸易乱战怎么破？&nbsp;6月21日《央视财经评论》请来了商务部研究院区域研究中心主任张建平和央视财经评论员马光远做客演播室，对此进行了深度解读。</p>
<p><strong>　　众叛亲离 美国图什么？</strong></p>
<p><strong>　　美国不惜得罪盟友 体现美国优先</strong></p>
<p>　　商务部研究院区域研究中心主任 张建平：对欧盟来讲，作为美国的一个老朋友、一个长期伙伴，而且同为G7国家的成员，他一直期待着美国能够对他的钢铝产品给予永久豁免，但是没有想到即使在G7当中，他也没有达成一致意见，还有德国、法国的领导人去单谈也都没有谈成，所以这充分体现了面对欧盟这样的老朋友，美国第一仍然是占据了主导，充分体现了美国这个指导思想就是美国第一。</p>
<div class="img_wrapper"><img src="http://n.sinaimg.cn/news/crawl/41/w550h291/20180622/TviK-hefphqm2695068.jpg" alt=""></div>
<p>　　所以在这样的情况之下，欧盟被迫必须要反击。法国总统马克龙当时说过一句话，如果美国要是拿枪对准我的脑袋要求我干什么，这种方式是不可以接受的，对欧洲来讲，现在也是不得不战，但是这么短时间之内能够进行反制，也得去筛选产品，所以短期之内，先抛28亿欧元的商品清单，后面可能还会出新的清单，连欧洲和美国现在都打起来，那就说明现在就是美国贸易战实际上是要到处点火，所以欧盟是不得不战了。</p>
<p><strong>　　美国很有可能意在改变现有国际贸易体制</strong></p>
<p>　　央视财经评论员 马光远：一开始大家可能还抱有幻想，比如说我们是不是可以坐下来讲讲道理，是不是可以取得双赢的结果，最后发现，第一，有些国家认为我跟美国是好朋友，美国不会对我下手，结果发现美国在贸易问题上没有朋友，枪口是一顿乱射，一顿扫射。</p>
<div class="img_wrapper"><img src="http://n.sinaimg.cn/news/crawl/44/w550h294/20180622/7rsa-hefphqm2695117.jpg" alt=""></div>
<p>　　第二，现在大家觉得美国可能不仅仅是想占一时的便宜，他的最大意图，就是认为现有的这种运行了几十年的国际贸易体制对美国不利，美国对世界上绝大多数国家存在贸易逆差，它不从自身去反思，而是认为逆差的原因是这种体制造成的，他就要去改变。包括日本、欧盟这些盟友也要打，对它的邻居加拿大在G7会议上都闹到那么一个程度，基本上可以讲，吃相都不要了，面子都扯开了，我们真得提防美国可能在打现行的贸易体制主意，它认为这种体制必须改变。</p>
<div class="img_wrapper"><img src="http://n.sinaimg.cn/news/crawl/50/w550h300/20180622/Czvb-hefphqm2695140.jpg" alt="四处点火 美国能如愿吗？"></div>
<p><strong>　　四处点火 美国能如愿吗？</strong></p>
<p><strong>　　“短期药”治不了“长期病” 美方诉求行不通</strong></p>
<p>　　商务部研究院区域研究中心主任 张建平：美国挑起贸易战，从理论上是错误的，在实践上也是行不通的，因为美国的经济学家已经告诉他们的总统先生了，你用加关税的办法解决不了美国的贸易不平衡问题。在实践上，加关税实际上是要用短期的刺激疗法，希望能够解决一个在过去几十年的全球化进程当中所形成的贸易不平衡问题，那是一个结构性的问题，最后肯定解决不了这个问题。</p>
<p><strong>　　愈演愈烈 贸易战怎么破？</strong></p>
<p><strong>　　全球主要经济体应合力避免贸易战</strong></p>
<p>　　商务部研究院区域研究中心主任 张建平：现在全球的主要经济体，还是应该团结起来，在这个过程中，通过谈判协商，来解决现在面临的不同问题，特别是现在美国秉持“美国第一”的想法，把自己国内法凌驾于WTO的框架之上，这是我们所不能接受的。</p>
<div class="img_wrapper"><img src="http://n.sinaimg.cn/news/crawl/45/w550h295/20180622/xrtZ-hefphqm2695157.jpg" alt=""></div>
<p>　　其实包括像欧盟、日本、墨西哥、加拿大这样的发达经济体，连它们现在也不能接受美国这样的做法，这些主要的经济体，特别是G20的成员，应该协作起来，共同维护世界贸易组织的体系，维护我们的贸易规则，珍惜来之不易的贸易秩序。为了今后有一个比较稳定的发展，一个好的未来，我们还是要着眼于长期的合作，来共同应对我们面临的挑战。</p>
				
				  
				
				
<p class="show_author">责任编辑：桂强 </p>
				
				
			</div>`

let clean = sanitizeHtml(dirty, {
	allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'img', 'blockquote', 'p', 'div',
		'ul', 'ol', 'li',
		'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td'
	],
	allowedAttributes: {
		img: ['src']
	},
	transformTags: {
		"article": "div",
		"aside": "div",
		"command": "div",
		"datalist": "div",
		"details": "div",
		"figcaption": "div",
		"figure": "div",
		"footer": "div",
		"header": "div",
		"hgroup": "div",
		"section": "div",
		"summary": "div"
	}
});


console.log(clean)