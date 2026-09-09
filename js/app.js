/* ============================================================
   作品集 · 静态站点数据与交互
   图片/视频路径基于 D:\工作\作品 实际目录结构，使用时相对路径引用
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 图片数据：主图系列（来自 设计/主图 子目录结构） ---------- */
  var MAIN_IMAGE = {
    '冰格': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
    '小米': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '白底图.jpg'],
    '小鱼干': ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '主图.jpg'],
    '山楂': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '白底图.jpg'],
    '枸杞': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '白底图.jpg'],
    '礼盒': ['1.jpg', '1.png', '2.jpeg', '2.png', '2026年5月2日 17_01_45.png', '3.jpeg', '7ac0b465-d6c9-4dd3-8c1a-7c5c9812a714.png', 'ScreenShot_2026-05-02_170111_650.png'],
    '美妆': ['Shampoo_product_main_image_design_202605021951.jpeg'],
    '蒜蓉主图': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
    '裤子': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg',
             '20a614853223dcad1ed1f887bfd9c3f1.jpeg', '496869285823dcb2fd2dfc57f30a1258.jpeg',
             '66a84da0c44f78a48b4a1890aaf267ed.jpeg', '6ac4b6b67d8856472c67790bd7ecd4b6.jpeg',
             '77df16a93b664ae20a3750c471cd917e.jpeg', 'b180da7cd0bf8323691cc96519677b99.jpeg',
             'bf7eb0552e30c13fd1b2cbd0e774e924.jpeg', 'c24f965db3e9ae4d5ebcdac19bef71b5.jpeg',
             'f21d9f5a11586b65b0fbf1883032889b.jpeg', 'fb6035cfa49b64639b2b26356d2d3782.jpeg'],
    '钙片': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
    '陈皮': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '白底图.jpg'],
    '鹿架-空气凤梨': ['1.png', '2.png', '3.png', 'a0e50783-5439-40e1-b7c4-222573836df2.png'],
    '黑蒜': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'],
    '鼠标': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
  };

  var MENU_IMAGE = ['01.jpg'];
  var DETAIL_IMAGE = ['休闲裤.jpg', '冰格.jpg', '剃须刀详情页.jpg', '大丽花.jpg', '天官赐福1.jpg', '嫁接睫毛.jpg',
    '干巴详情页.jpg', '杀菌喷雾详情页.jpg', '杀菌喷雾详情页2.jpg', '毛衣.jpg', '睫毛版详情页.jpg', '睫毛胶水.jpg',
    '茶具.jpg', '茶壶.jpg', '蒜蓉酱详情页.jpg', '虾皮.jpg', '虾皮详情页.jpg', '裤子.jpg', '酸奶详情页.jpg',
    '钙片详情页.jpg', '韩式连衣裙.jpg', '饭详情.jpg', '驼奶钙片详情页.jpg', '鱼详情页.jpg', '黑蒜详情.jpg',
    '鼠标详情.jpg', '鼠标详情页.jpg'];

  var VIDEOS = ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4', '巴西木介绍视频.mp4', '文昌竹介绍视频mp4.mp4', '海贼王音响灯介绍视频.mp4'];

  /* ---------- 相对路径拼接与 URL 编码 ---------- */
  function enc(s) {
    return encodeURI(s).replace(/#/g, '%23');
  }

  function mainImg(folder, file) {
    return enc('设计/主图/' + folder + '/' + file);
  }

  /* ---------- 构建作品条目列表 ---------- */
  var items = [];

  // 主图（分系列）
  Object.keys(MAIN_IMAGE).forEach(function (series) {
    MAIN_IMAGE[series].forEach(function (file) {
      items.push({
        type: 'image',
        cat: '主图',
        series: series,
        path: mainImg(series, file),
        title: series,
        sub: file,
        tag: series,
        tagClass: 'main'
      });
    });
  });

  // 菜单（长图）
  MENU_IMAGE.forEach(function (file) {
    items.push({
      type: 'image',
      cat: '菜单',
      series: '',
      path: enc('设计/菜单/' + file),
      title: '菜单',
      sub: file,
      tag: '菜单',
      tagClass: 'menu',
      tall: true
    });
  });

  // 详情页（长图）
  DETAIL_IMAGE.forEach(function (file) {
    items.push({
      type: 'image',
      cat: '详情页',
      series: '',
      path: enc('设计/详情页/' + file),
      title: '详情页',
      sub: file,
      tag: '详情页',
      tagClass: 'detail',
      tall: true
    });
  });

  // 视频剪辑（长视频控流，点击播放）
  VIDEOS.forEach(function (file) {
    items.push({
      type: 'video',
      cat: 'video',
      series: '',
      path: enc('视频剪辑/' + file),
      title: '视频剪辑',
      sub: file,
      tag: '视频',
      tagClass: 'video'
    });
  });

  /* ---------- 筛选状态 ---------- */
  var state = { main: 'all', cat: 'all', series: 'all' };

  /* ---------- DOM 引用 ---------- */
  var grid = document.getElementById('grid');
  var filterMain = document.getElementById('filter-main');
  var filterCat = document.getElementById('filter-cat');
  var filterSeries = document.getElementById('filter-series');

  /* ---------- 渲染网格 ---------- */
  function visibleItems() {
    var showDesign = (state.main === 'all') || (state.main === 'design');
    var showVideo = (state.main === 'all') || (state.main === 'video');
    return items.filter(function (it) {
      if (it.type === 'video') return showVideo;
      if (!showDesign) return false;
      if (state.cat !== 'all' && it.cat !== state.cat) return false;
      if (state.series !== 'all' && it.series !== state.series) return false;
      return true;
    });
  }

  function render() {
    var list = visibleItems();
    grid.innerHTML = '';
    list.forEach(function (it, i) {
      var card = document.createElement('div');
      card.className = 'card' + (it.type === 'video' ? ' video-card' : '');
      card.setAttribute('data-index', i);

      var media = document.createElement('div');
      media.className = 'card-media';

      var tag = document.createElement('span');
      tag.className = 'card-tag ' + it.tagClass;
      tag.textContent = it.tag;
      media.appendChild(tag);

      if (it.type === 'video') {
        // 以视频首帧作为卡片封面
        var v = document.createElement('video');
        v.src = it.path;
        v.preload = 'metadata';
        v.muted = true;
        v.playsInline = true;
        v.addEventListener('loadedmetadata', function () {
          try { v.currentTime = 0.05; } catch (e) {}
        });
        media.appendChild(v);
        var hint = document.createElement('span');
        hint.className = 'video-hint';
        hint.textContent = '▶ 点击播放';
        media.appendChild(hint);
      } else {
        var img = document.createElement('img');
        img.src = it.path;
        img.alt = it.title + ' - ' + it.sub;
        img.loading = 'lazy';
        media.appendChild(img);
      }
      card.appendChild(media);

      var body = document.createElement('div');
      body.className = 'card-body';
      var textWrap = document.createElement('div');
      var h = document.createElement('h3');
      h.textContent = it.title;
      var p = document.createElement('p');
      p.textContent = it.sub;
      textWrap.appendChild(h);
      textWrap.appendChild(p);
      var arrow = document.createElement('div');
      arrow.className = 'card-arrow';
      arrow.innerHTML = '&nearr;';
      body.appendChild(textWrap);
      body.appendChild(arrow);
      card.appendChild(body);

      card.addEventListener('click', function () {
        if (it.type === 'image') {
          openModal(it);
        } else if (it.type === 'video') {
          openVideoModal(it);
        }
      });
      grid.appendChild(card);
    });
    updateEmpty();
  }

  function updateEmpty() {
    var none = document.getElementById('grid-none');
    if (!none) {
      none = document.createElement('p');
      none.id = 'grid-none';
      none.style.cssText = 'text-align:center;color:#9a9a9a;padding:60px 0;grid-column:1/-1;';
      grid.appendChild(none);
    }
    none.textContent = grid.querySelectorAll('.card').length === 0 ? '该分类下暂无作品' : '';
  }

  /* ---------- 图片放大模态框（支持滚动 + 缩放） ---------- */
  var modal = document.getElementById('imgModal');
  var modalBody = document.getElementById('modalBody');
  var modalImg = document.getElementById('modalImg');
  var modalTitle = document.getElementById('modalTitle');
  var zoomPct = document.getElementById('zoomPct');
  var zoom = 1;
  var minZoom = 0.3, maxZoom = 16, step = 0.5;

  function applyZoom() {
    modalImg.style.transform = 'scale(' + zoom + ')';
    zoomPct.textContent = Math.round(zoom * 100) + '%';
  }

  function openModal(info) {
    modalImg.src = info.path;
    modalTitle.textContent = info.cat + ' / ' + info.sub;
    zoom = 1;
    applyZoom();
    modalBody.scrollTop = 0;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('zoomIn').addEventListener('click', function () {
    zoom = Math.min(maxZoom, +(zoom + step).toFixed(2));
    applyZoom();
  });
  document.getElementById('zoomOut').addEventListener('click', function () {
    zoom = Math.max(minZoom, +(zoom - step).toFixed(2));
    applyZoom();
  });

  modalImg.addEventListener('dblclick', function () {
    zoom = 1;
    applyZoom();
  });
  // 滚轮：默认滑动查看图片；按住 Shift 滚动 = 缩放
  modalBody.addEventListener('wheel', function (e) {
    if (!e.shiftKey) return; // 不拦截，交给容器自然滚动/滑动图片
    e.preventDefault();
    zoom = Math.max(minZoom, Math.min(maxZoom, +(zoom + (e.deltaY < 0 ? step : -step)).toFixed(2)));
    applyZoom();
  }, { passive: false });

  // 长图时默认滚轮滑动页面，放大后滚动可见
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    if (e.key === 'Escape' && videoModal.classList.contains('open')) closeVideoModal();
  });

  /* ---------- 视频播放模态框（按视频原始尺寸播放） ---------- */
  var videoModal = document.getElementById('videoModal');
  var videoPlayer = document.getElementById('videoModalPlayer');
  var videoModalTitle = document.getElementById('videoModalTitle');

  function openVideoModal(info) {
    videoPlayer.src = info.path;
    videoModalTitle.textContent = info.cat + ' / ' + info.sub;
    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    videoPlayer.play().catch(function () {});
  }

  function closeVideoModal() {
    videoModal.classList.remove('open');
    videoPlayer.pause();
    videoPlayer.removeAttribute('src');
    videoPlayer.load();
    document.body.style.overflow = '';
  }

  document.getElementById('videoModalClose').addEventListener('click', closeVideoModal);
  videoModal.addEventListener('click', function (e) {
    if (e.target === videoModal) closeVideoModal();
  });

  // 长图与放大的图片：直接通过鼠标滚轮滑动滚动查看

  /* ---------- 筛选按钮事件（事件委托） ---------- */
  function bindFilters(container, key) {
    container.addEventListener('click', function (e) {
      var btn = e.target.closest('.pill');
      if (!btn) return;
      container.querySelectorAll('.pill').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      state[key] = btn.getAttribute('data-filter');
      sync();
    });
  }
  bindFilters(filterMain, 'main');
  bindFilters(filterCat, 'cat');
  bindFilters(filterSeries, 'series');

  function sync() {
    // 二级分类(主图/菜单/详情页)仅在"设计"板块下显示
    var showCat = (state.main === 'design');
    filterCat.style.display = showCat ? 'flex' : 'none';
    // 当大类切换离开设计时，重置 cat/series
    if (!showCat) {
      state.cat = 'all';
    }
    if (state.cat !== 'all' && state.cat !== '主图') {
      state.series = 'all';
    }
    // 系列筛选仅在 全部 或 主图 分类下显示
    var keepSeries = showCat && (state.cat === 'all' || state.cat === '主图');
    filterSeries.style.display = keepSeries ? 'flex' : 'none';

    // 同步激活态
    filterCat.querySelectorAll('.pill').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-filter') === state.cat);
    });
    filterSeries.querySelectorAll('.pill').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-filter') === state.series);
    });
    render();
  }

  /* ---------- 顶部导航 ---------- */
  document.querySelectorAll('.nav-link, .logo').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var nav = link.getAttribute('data-nav') || 'all';
      document.querySelectorAll('.nav-link').forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('data-nav') === nav);
      });
      if (nav === 'design') {
        state.main = 'design';
      } else if (nav === 'video') {
        state.main = 'video';
      } else if (nav === 'about') {
        document.getElementById('about').style.display = 'block';
        grid.style.display = 'none';
        document.querySelector('.filters').style.display = 'none';
        return;
      } else {
        state.main = 'all';
      }
      document.getElementById('about').style.display = 'none';
      grid.style.display = '';
      document.querySelector('.filters').style.display = '';
      // 同步主筛选激活态
      filterMain.querySelectorAll('.pill').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-filter') === state.main);
      });
      sync();
    });
  });

  /* ---------- 打字机副标题 ---------- */
  var typeText = '持续创作 · 电商视觉设计 · 短视频剪辑';
  var typeEl = document.getElementById('typewriter');
  var ti = 0;
  function typeLoop() {
    if (ti <= typeText.length) {
      typeEl.innerHTML = typeText.slice(0, ti) + '<span class="cursor"></span>';
      ti++;
      setTimeout(typeLoop, 90);
    }
  }
  typeLoop();

  /* ---------- 首次渲染 ---------- */
  sync();
})();
