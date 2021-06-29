function myMethob () {}; // 方法对象
myMethob.rep = /small[0-9]_/;
myMethob.prototype.calc = {
	tri : function ( how , a , n ) {  
		return Number( Math[ how ]( a * Math.PI / 180 ).toFixed( n || 6 ) );
	} , // 三角函数计算
	sub : function ( a , b , nub ) {  
		var A = a.toString().split( '.' ) , B = b.toString().split( '.' ) ,
			length = ( A[ 1 ] ? A[ 1 ].length : 0 ) + ( B[ 1 ] ? B[ 1 ].length : 0 ) ,
			CA = A[ 0 ] + ( A[ 1 ] ? A[ 1 ] : '' ) , CB = B[ 0 ] + ( B[ 1 ] ? B[ 1 ] : '' );
		return Number( ( ( CA * CB ) / Math.pow( 10 , length ) ).toFixed( nub ? nub : ( length ? length : 0 ) ) );
	} // js浮点乘法计算
};// 计算
myMethob.prototype.tr = function ( e , s , f ) {  
	f = f || 'Transform';
	var c = [ 'Webkit' , 'Moz' , 'Ms' , 'O' , '' ];
	for( var i = 0 ; i < 5 ; i++ ) e.style[ c[ i ] + f ] = s;
};// css3 样式添加
myMethob.prototype.getStyle = function ( e , a ) {  
	if ( e.currentStyle ) return e.currentStyle[ a ];
    else  return document.defaultView.getComputedStyle( e , null )[ a ];
};// 获取样式
myMethob.prototype.getClass = function ( n , t ) {  
	if ( document.getElementsByClassName ) {
		return ( t || document ).getElementsByClassName ( n );
	} else {
		var a = ( t || document ).getElementsByTagName ( '*' ) ,
			e = new Array () ,
			ts = new RegExp ( ' ' + n + ' ' );
		for ( var i = 0 ; i < a.length ; i++ ) {
			if ( ts.test ( ' ' + a[ i ].className + ' ' ) ) {
				e[ e.length ] = a[ i ];
			}
		}
		return e;
	}
};// 获取类名
myMethob.prototype.setStyle = function ( e , s ) {  
	for ( var i in s ) e.style[ i ] = s[ i ];
};// 批量添加样式
myMethob.prototype.getHeight = function () {  
	return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
};// 兼容获取高度
myMethob.prototype.addEvent = function ( who , how , func ) {  
	if ( window.addEventListener ) who.addEventListener ( how, func );
	else who.attachEvent ( 'on' + how, func );
	return publice;
};// 添加事件
myMethob.prototype.removeEvent = function ( who , how , func ) {  
	if ( window.addEventListener ) who.removeEventListener ( how, func );
	else who.detachEvent ( 'on' + how, func );
	return publice;
};// 移除事件
myMethob.prototype.min = function ( a ) {  
	var minNub = 0;
	for ( var i = 1 ; i < a.length ; i++ ) {
		if ( a[ i ] < a[ minNub ] ) {
			minNub = i;
		}
	}
	return minNub;
};// 获取数组最小值
myMethob.prototype.max = function ( a ) {  
	var maxNub = 0;
	for ( var i = 1 ; i < a.length ; i++ ) {
		if ( a[ i ] > a[ maxNub ] ) {
			maxNub = i;
		}
	}
	return maxNub;
};// 获取数组最大值
myMethob.prototype.obj = function ( o , a ) {  
	for ( var i = 0 ; i < a.length ; i++ ) {
		a[ i ] in o ? void(0) : o[ a[ i ] ] = null;
	}
}// 检查对象中是否有传递进来的属性 如果没有则为其赋值为null
myMethob.prototype.attr = {  
	remove : function ( who , attrs ) {  
		for ( var i = 0 ; i < attrs.length ; i++ ) {
			who.removeAttribute ( attrs[ i ] );
		}
	} ,
	add : function ( who , objs ) {  
		for ( var i in objs ) {
			who.setAttribute ( i , objs[ i ] );
		}
	}
};// 批量添加属性或者删除属性
myMethob.prototype.opeClass = {  
	add : function ( who , clas ) {  
		var c = ' ' + who.className + ' ' ,
			r = new RegExp ( ' ' + clas +' ' );
		if( r.test ( c ) ) return publice;
		else who.className += ' ' + clas;
		return publice;
	} ,
	remove : function ( who , clas ) {  
		var c = ' ' + who.className + ' ' ,
			r = new RegExp ( ' ' + clas +' ' );
		if ( r.test ( c ) ) {
			r = new RegExp ( clas );
			who.className = who.className.replace( r , '' );
			return publice;
		} else {
			return publice;
		}
	}
};
// 总方法结束
function myFunc () {}; // 效果对象
myFunc.prototype = Object.create( myMethob.prototype );
myFunc.prototype.constructor = myFunc;
myFunc.prototype.replaces = {  
	second : function ( natrue ) {  
		natrue ? void(0) : natrue = new Object () ;
		publice.obj( natrue , [ 'each' , 'all' ] );
		var small = publice.getClass( 'small' ); // 类名默认 small
		var small_img ,
			smallTxt = myMethob.rep; // 默认移除（small0_ .... small9_）
		var src = new Array ();
		for ( var i = 0; i < small.length; i++ ) {
			small_img = small[ i ].getElementsByTagName( 'img' );
			for ( var j = 0; j < small_img.length; j++ ) {
				if ( smallTxt.test( small_img[ j ].src ) ) {
					src[ src.length ] = small_img[ j ].getAttribute( 'src' ).replace( smallTxt, '' );
					small_img[ j ].setAttribute( 'src' , src[ src.length - 1 ] );
				};
			};
			publice.preLoad( src , {
				all : function () {  
					natrue.each && natrue.each();
				}
			} );
		};
		publice.preLoad( src , {
			all : function () {  
				natrue.all && natrue.all();
			}
		} );
		return publice;
	} , // 移除图片地址中的特定字串  默认移除（small0_ .... small9_）  类名默认 small
	rexSma : function ( a , s ) {  
		var txt = s ? s : myMethob.rep; //默认移除（small0_ .... small9_）
		if ( typeof( a ) == 'string' ) {
			return a.replace ( txt , '' );
		} else {
			for ( var i = 0 ; i < a.length ; i++ ) {
				a[ i ] = a[ i ].replace ( txt , '' );
			};
		};
		return publice;
	} // 移除数组或者字符串中的特定字串 默认移除（small0_ .... small9_）
};// second -> 异步加载图片  rexSma -> 移除数组或者字符串中的特定字串
myFunc.prototype.preLoad = function ( src , natrue ) {  
	var tThis = this;
	natrue ? void(0) : natrue = new Object () ;
	tThis.obj( natrue , [ 'each' , 'all' , 'src' ] );
	if ( natrue.lazy ) return this;
	( function () {  
		var curLen = 0;
		src ? void(0) : src = [];
		for ( var i = 0 ; i < src.length ; i++ ) {
			var preImg = new Image ();
			preImg.src = src[ i ];
			preImg.onload = function () {  
				curLen++;
				natrue.each && natrue.each ();
				if ( curLen == src.length ) {
					natrue.all && natrue.all ();
				}
			}
		}
	} ) ();
	if ( !natrue.src ) return this;
	( function () {  
		var div = document.createElement ( 'div' );
		tThis.setStyle( div , { display : 'none' } );
		document.body.appendChild ( div );
		var preHttp = tThis.getClass ( 'preHttp' ) ,
			a = new Array ();
		for ( var i = 0 ; i < preHttp.length ; i++ ) {
			var b = preHttp[ i ].getElementsByTagName ( 'a' ).length;
			for ( var j = 0 ; j < b ; j++ ) {
				a.push ( preHttp[ i ].getElementsByTagName ( 'a' )[ j ] );
			}
		}
		function ajaxPreload ( j ) {  
			var ajax = new XMLHttpRequest ();
			if ( j >= a.length ) {
				div.parentNode.removeChild ( div );
				return;
			}
			ajax.onreadystatechange = function () {  
				if ( this.readyState == 4 && this.status == 200 ) {
					div.innerHTML = this.responseText;
					var img = div.getElementsByTagName ( 'img' ) ,
						len = img.length ,
						src = new Array ();
					for ( var i = 0 ; i < len ; i++ ) {
						if ( img[ i ].getAttribute ( 'data-src' ) ) {
							src[ i ] = img[ i ].getAttribute ( 'data-src' );
						} else {
							src[ i ] = img[ i ].src;
						}
					}
					tThis.preLoad( src , {
						all : ajaxPreload ( j + 1 )
					} );
				}
			}
			ajax.open( "POST" , a[ j ].getAttribute ( 'href' ) , true );
			ajax.send();
		}
		ajaxPreload ( 0 );
	} )();
	return this;
};// 预加载 preHttp   natrue中提供以下接口  each -> src中每有一张图片加载完成执行  all -> 所有图片加载完成执行  src -> 为true则不执行ajax加载子页面
myFunc.prototype.lazyLoad = function ( natrue ) {  
	var tThis = this;
	tThis.a = tThis.getClass ( 'lazy' );
	tThis.len = tThis.a.length;
	tThis.winHeight = tThis.getHeight() * 3;
	var i , j = 0 , k;
	natrue ? void(0) : natrue = new Object ();
	tThis.obj ( natrue , [ 'imgAll' , 'showEach' ] );
	this.resize = function () {  
		tThis.addEvent ( window , 'resize' , function () {  
			winHeight = tThis.getHeight () * 3;
		} );
		tThis.lazyLoadRule = true;
	};tThis.lazyLoadRule ? void(0) : this.resize();
	this.lazyLoad.preLazy = function () {  
		var src = new Array ();
		for ( i = 0 ; i < tThis.len ; i++ ) {
			var img = tThis.a[ i ].getElementsByTagName( 'img' );
			if ( tThis.a[ i ].getAttribute ( 'keepSmall' ) ) {
				var flag = true;
			};
			for ( var j = 0 ; j < img.length ; j++ ) {
				if ( img[ j ].getAttribute ( 'data-src' ) ) {
					if ( flag ) {
						var newSrc = img[ j ].getAttribute ( 'data-src' );
					} else {
						var newSrc = img[ j ].getAttribute ( 'data-src' ).replace ( myMethob.rep , '' );
						img[ j ].setAttribute ( 'data-src' , newSrc );
					};
					src[ src.length ] = newSrc;
				};
			};
		};
		tThis.preLoad ( src , {
			all : function () {  
				natrue.imgAll && natrue.imgAll ();
			}
		} );
	};this.lazyLoad.preLazy();
	this.lazyLoad.scroll = function () {  
		for ( i = j ; i < tThis.len ; i++ ) {
			if ( tThis.a[ i ].getBoundingClientRect().top - tThis.winHeight <= 0 ) {
				var img = tThis.a[ i ].getElementsByTagName ( 'img' ) ,
					src = new Array ();
				for ( k = 0 ; k < img.length ; k++ ) {
					if ( img[ k ].getAttribute ( 'data-src' ) ) {
						img[ k ].setAttribute ( 'src' , img[ k ].getAttribute ( 'data-src' ) );
						img[ k ].removeAttribute( 'data-src' );
					}
					src[ k ] = img[ k ].getAttribute( 'src' );
				}
				tThis.preLoad ( src , {
					all : function () {  
						natrue.showEach && natrue.showEach ();
					}
				} );
				j++;
			}
		}
		if ( j == tThis.len ) {
			tThis.removeEvent( window , 'scroll' , tThis.lazyLoad.scroll );
		}
	};tThis.lazyLoad.scroll();
	tThis.addEvent( window , 'scroll' , tThis.lazyLoad.scroll );
	return this;
};// 懒加载   natrue中提供以下接口   imgAll -> 懒加载内容图片加载完成执行  showEach -> 每有一块懒加载图片替换上并加载完成执行
myFunc.prototype.rolling = {
	topNub : 0,
	leftNub : 0,
	scrollTop : function () {  
		var s = publice.getClass ( 'st' ) ,
			len = s.length ,
			c = new Array () ,
			b = new Array () ,
			d = new Array () ;
		for ( var i = 0 ; i < len ; i++ ) {
			s[ i ].style.overflow = 'hidden';
			c[ i ] = s[ i ].children[ 0 ];
			c[ i ].style.overflow = 'hidden';
			b[ i ] = {
				spend : Number( s[ i ].getAttribute( 'data-spend' ) ) || 10 ,
				each : Number( s[ i ].getAttribute( 'data-each' ) ) || 1 ,
				stop : Number( s[ i ].getAttribute ( 'data-stop' ) ) || null ,
				dir : 'scrollTop'
			};
			if ( !publice.rolling.topNub ) {
				publice.rolling.resize ( s[ i ] , b[ i ] );
				c[ i ].innerHTML += c[ i ].innerHTML;
			};
			b[ i ].len = c[ i ].offsetHeight / 2;
			publice.attr.remove( s[ i ] , [ 'data-spend' , 'data-each' , 'data-stop' ] );
			publice.rolling.set ( s[ i ] , b[ i ] );
		};
		publice.rolling.topNub++;
		return publice;
	},
	scrollLeft : function () {  
		var s = publice.getClass ( 'sl' ) ,
			len = s.length ,
			c = new Array ()
			b = new Array ();
		for ( var i = 0 ; i < len ; i++ ) {
			s[ i ].style.overflow = 'hidden';
			c[ i ] = s[ i ].children[ 0 ];
			b[ i ] = {
				spend : Number( s[ i ].getAttribute( 'data-spend' ) ) || 10 ,
				each : Number( s[ i ].getAttribute( 'data-each' ) ) || 1 ,
				row : Number( s[ i ].getAttribute( 'data-row' ) ) || null ,
				stop : Number( s[ i ].getAttribute ( 'data-stop' ) ) || null ,
				dir : 'scrollLeft'
			};
			publice.attr.remove( s[ i ] , [ 'data-spend' , 'data-each' , 'data-row' , 'data-stop' ] );			
			if ( b[ i ].row ) {
				var div = document.createElement ( 'div' );
				div.innerHTML = s[ i ].innerHTML;
				s[ i ].appendChild ( div );
				c[ i ].parentNode.removeChild ( c[ i ] );
				var d = c[ i ].children;
				if ( !publice.rolling.leftNub ) {
					publice.rolling.resize ( s[ i ] , b[ i ] , div.innerHTML , div );
					div.innerHTML += div.innerHTML;
				};
				c[ i ] = div.children;
				b[ i ].len = ( d[ 0 ].offsetWidth + Number( publice.getStyle( d[ 0 ] , 'marginLeft' ).split( 'px' )[ 0 ] == 'auto' ? 0 : publice.getStyle( d[ 0 ] , 'marginLeft' ).split( 'px' )[ 0 ] ) + Number( publice.getStyle( d[ 0 ] , 'marginRight' ).split( 'px' )[ 0 ] == 'auto' ? 0 : publice.getStyle( d[ 0 ] , 'marginRight' ).split( 'px' )[ 0 ] ) ) * Math.ceil( d.length / b[ i ].row );
				for ( var j = 0 ; j < 2 ; j++ ) {
					publice.setStyle ( c[ i ][ j ] , {
						'float' : 'left' ,
						overflow : 'hidden' ,
						width : b[ i ].len + 'px'
					} );
				}
				publice.setStyle ( div , {
					width : b[ i ].len * 2 + 'px'
				} );
				publice.rolling.set ( s[ i ] , b[ i ] );
			} else {
				if ( !publice.rolling.leftNub ) {
					publice.rolling.resize ( s[ i ] , b[ i ] , c[ i ].innerHTML , c[ i ] );
					c[ i ].innerHTML += c[ i ].innerHTML;
				};
				var d = c[ i ].children;
				
				b[ i ].len = ( d[ 0 ].offsetWidth + Number( publice.getStyle( d[ 0 ] , 'marginLeft' ).split( 'px' )[ 0 ] == 'auto' ? 0 : publice.getStyle( d[ 0 ] , 'marginLeft' ).split( 'px' )[ 0 ] ) + Number( publice.getStyle( d[ 0 ] , 'marginRight' ).split( 'px' )[ 0 ] == 'auto' ? 0 : publice.getStyle( d[ 0 ] , 'marginRight' ).split( 'px' )[ 0 ] ) ) * d.length;
				publice.setStyle ( c[ i ] , {
					width : b[ i ].len + 'px'
				} );
				b[ i ].len /= 2;
				publice.rolling.set ( s[ i ] , b[ i ] );
			};
		};
		publice.rolling.leftNub++;
		return publice;
	} ,
	set : function ( who , basic ) {  
		clearInterval ( who.timer );
		function rollEach () {  
			if ( ( who[ basic.dir ] += basic.each ) >= basic.len ) {
				who[ basic.dir ] = 0;
			}
		}
		who.timer = setInterval ( rollEach , basic.spend );
		who.onmouseenter = function () {
			clearInterval ( who.timer );
		}
		who.onmouseleave = function () {
			clearInterval ( who.timer );
			who.timer = setInterval ( rollEach , basic.spend );
		}
	} ,
	resize : function ( who , b , html , d ) {  
		who.html = html || who.innerHTML;
		d = d || who;
		if ( !b.stop ) return;
		clearTimeout ( who.tTimer );
		function judge () {  
			if ( window.innerWidth <= b.stop ) {
				d.innerHTML = who.html;
				who[ b.dir ] = 0;
				clearInterval ( who.timer );
			} else {
				d.innerHTML = who.html + who.html;
				publice.rolling.set ( who , b );
			};
		}
		who.tTimer = setTimeout ( function () {  
			judge ();
			publice.addEvent ( window , 'resize' , judge );
		} , 150 )
	}
};// 滚动
myFunc.prototype.addAlt = function () {  
	this.a = document.getElementsByTagName ( 'a' );
	this.img = document.getElementsByTagName ( 'img' );
	this.alen = this.a.length;
	this.imglen = this.img.length;
	var dot = /\./;
	this.txt = document.getElementById ( 'logo' ) ? document.getElementById ( 'logo' ).getAttribute ( 'alt' ) : '' ;
	function imp ( who , how ) {  
		if ( typeof ( who.getAttribute( how ) ) == 'object' || dot.test( who.getAttribute( how ) ) || who.getAttribute( how ) == '' ) who.setAttribute( how , this.txt );
	}
	for ( var i = 0 ; i < this.alen ; i++ ) imp.call ( this, this.a[ i ] , 'title' );
	for ( var i = 0 ; i < this.imglen ; i++ ) imp.call ( this, this.img[ i ] , 'alt' );
	return this;
};// 设置alt title
myFunc.prototype.winImg =  {  
	init : function () {  
		this.s = publice.getClass ( 'winimg' );
		var len = this.s.length;
		if ( !len ) return publice;
		var html = new Array ();
		if ( document.getElementById ( 'winImgDiv' ) ) {
			this.div = document.getElementById ( 'winImgDiv' );
			this.img = this.div.getElementsByTagName ( 'img' );
		} else {
			this.div = document.createElement ( 'div' );
			this.img = document.createElement ( 'img' );
			this.div.id = "winImgDiv";
			this.div.appendChild ( this.img );
			document.body.appendChild ( this.div );
		};
		publice.setStyle ( this.div , {
			display : 'none' ,
			border : '2px solid #fff' ,
			'border-radius' : '3px' ,
			overflow : 'hidden' ,
			position : 'fixed' ,
			'box-shadow' : '0 0 10px 0 rgba(0,0,0,.3)'
		} );
		for ( var i = 0 ; i < len ; i++ ) {
			html[ i ] = this.s[ i ].innerHTML;
			this.s[ i ].index = i;
			publice.addEvent ( this.s[ i ] , 'mouseenter' , function () {  
				if ( this.innerHTML != html[ this.index ] ) {
					publice.winImg.enter( this.index );
					html[ this.index ] = this.innerHTML;
				};
			} ).winImg.enter( i );
		};
		return publice;
	} ,
	enter : function ( i ) {  
		var imgs = this.s[ i ].getElementsByTagName ( 'img' );
		var img = this.img ,
			div = this.div;
		var tThis = this;
		for ( var j = 0 ; j < imgs.length ; j++ ) {
			publice.addEvent ( imgs[ j ] , 'mouseenter' , function () {  
				img.src = this.src;
				div.style.display = 'block';
				div.lheight = div.offsetHeight;
				div.lwidth = div.offsetWidth;
				publice.addEvent ( document , 'mousemove' , publice.winImg.move );
			} ).addEvent( imgs[ j ] , 'mouseleave' , function () {publice.winImg.leave();} );
		}
	} ,
	move : function ( e ) {  
		e = e || window.event;
		var d = 20;
		var x = e.clientX + d;
		var y = e.clientY + d;
		var div = publice.winImg.div;
		if ( x + div.lwidth >= window.innerWidth ) {
			div.style.left = x - div.lwidth - d * 2 + 'px';
		} else {
			div.style.left = x + 'px';
		};
		if ( y + div.lheight >= publice.getHeight () ) {
			div.style.top = 'initial';
			div.style.bottom = '0px';
		} else {
			div.style.bottom = 'initial';
			div.style.top = y + 'px';
		};
	} ,
	leave : function () {  
		this.div.style.display = 'none';
		publice.removeEvent ( document , 'mousemove' , publice.winImg.move );
	}
};// 跟随鼠标大图
myFunc.prototype.moveimg = {  
	move : 0 ,
	moveThis : function () {  
		var move = publice.getClass ( 'move' );
		var len = move.length;
		if( !len ) return publice;
		var moves;
		for ( var i = 0 ; i < len ; i++ ) {
			moves = move[ i ].getElementsByTagName( 'img' );
			if ( move[ i ].getAttribute ( 'lr' ) ) {
				for( var j = 0 ; j < moves.length ; j++ )	lr ( j );
				continue;
			};
			if ( move[ i ].getAttribute ( 'tb' ) ) {
				for( var j = 0 ; j < moves.length ; j++ ) tb ( j );
				continue;
			};
			for( var j = 0 ; j < moves.length ; j++ ) {
				lr ( j );
				tb ( j );
			};
		};
		function lr ( j ) {  
			moves[ j ].style.marginLeft = ( moves[ j ].offsetWidth - moves[ j ].parentNode.offsetWidth ) / -2 + 'px';
		};
		function tb ( j ) {  
			moves[ j ].style.marginTop = ( moves[ j ].offsetHeight - moves[ j ].parentNode.offsetHeight ) / -2 + 'px';
		};
		if ( !publice.moveimg.move ) {
			publice.moveimg.resize();
		}
		publice.moveimg.move++;
		return publice;
	} ,
	resize : function () {  
		var timer;
		publice.addEvent( window , 'resize' , function () {  
			clearTimeout ( timer );
			timer = setTimeout( publice.moveimg.moveThis , 150 );
		} );
	}
}// 图片恒居中
myFunc.prototype.navAct = {  
	urls : window.location.href.split( '/' ).pop () ,
	nav : function () {  
		var navAct = publice.getClass( 'navAct' ) ,
			len = navAct.length;
		if ( !len ) return publice;
		var clas = new Array () ,
			urls = publice.navAct.urls.split( '?' )[ 0 ];
		for ( var i = 0 ; i < len ; i++ ) {
			clas[ i ] = navAct[ i ].getAttribute( 'data-act' ) || 'act';
			publice.attr.remove( navAct[ i ] , ['data-act'] );
			var a = navAct[ i ].getElementsByTagName( 'a' );
			if ( urls == '' ) {
				publice.opeClass.add( a[ 0 ] , clas[ i ] );
			} else {
				var ur = new RegExp( urls );
				for ( var j = 0 ; j < a.length ; j++ ) {
					if ( ur.test( a[ j ].getAttribute ( 'href' ) ) ) {
						publice.opeClass.add( a[ j ] , clas[ i ] );
						break;
					};
				};
			};
		};
		return publice;
	} ,
	list : function () {  
		var navAct = publice.getClass( 'listAct' ) ,
		len = navAct.length;
		if ( !len ) return publice;
		var clas = new Array ();
		if ( document.getElementById( 'pagelei' ) ) {
			var urls = document.getElementById( 'pagelei' ).getAttribute( 'data-lei' );
		} else {
			var urls = publice.navAct.urls.split( '=' ).pop();
		}
		for ( var i = 0 ; i < len ; i++ ) {
			clas[ i ] = navAct[ i ].getAttribute( 'data-act' ) || 'act';
			publice.attr.remove( navAct[ i ] , ['data-act'] );
			var a = navAct[ i ].getElementsByTagName( 'a' );
			for ( var j = 0 ; j < a.length ; j++ ) {
				if ( urls == a[ j ].getAttribute( 'href' ).split( '=' ).pop() ) {
					publice.opeClass.add( a[ j ] , clas[ i ] );
					break;
				}
			}
		}
		return publice;
	}
};// 导航act
function asideStop () {
	this.aside = getClass ( 'fixAside' ) ,
	this.footer = getClass ( 'fixFooter' )[ 0 ] ,
	this.length = this.aside.length ;
	if ( this.length ) {
		this.start ();
	};
};
asideStop.prototype.start = function () {
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
	var top = new Array () ,
		aside = this.aside ,
		length = this.length ,
		praAside = new Array ();
	for ( var i = 0 ; i < length ; i++ ) {
		if ( aside[ i ].offsetHeight <= aside[ i ].parentNode.offsetHeight * .9 ) {
			praAside[ praAside.length ] = aside[ i ];
		};
	};
	var dir = [ 'top' , 'right' , 'bottom' , 'left' ];
	for( i = 0 ; i < praAside.length ; i++ ) {
		top [ i ] = new Array ();
		top [ i ][ 0 ] = praAside [ i ].getBoundingClientRect().top ;
		top [ i ][ 1 ] = praAside [ i ].offsetHeight ;
		for( var j = 0 ; j < 4 ; j++ ) {
			top [ i ][ j + 2 ] = typeof ( praAside [ i ].getAttribute( 'data-' + dir[ j ] ) ) == 'string' ? praAside [ i ].getAttribute( 'data-' + dir[ j ] ) : null ;
			praAside [ i ].removeAttribute( 'data-' + dir[ j ] );
		};
		top [ i ][ 6 ] = praAside [ i ].getBoundingClientRect().top ;
	};
	this.scrolling( top , praAside );
};
asideStop.prototype.scrolling = function ( top , praAside ) {
	var oTop = document.documentElement.scrollTop || document.body.scrollTop ,
		fHeight , i  ,
		nowTop = new Array ();
	var length = praAside.length ,
		footer = this.footer ;
	function scrolling () {
		oTop = document.documentElement.scrollTop || document.body.scrollTop ;
		fHeight = footer.getBoundingClientRect().top ;
		for( i = 0 ; i < length ; i++ ) {
			if( oTop >= top [ i ][ 6 ] - ( typeof( top [ i ][ 2 ] ) == 'string' ? Number( top [ i ][ 2 ].split( 'px' )[ 0 ] ) : 0 ) ) {
				top [ i ][ 0 ] = praAside [ i ].getBoundingClientRect().top ;
				if( fHeight < top [ i ][ 1 ] + nowTop [ i ] + ( typeof( top [ i ][ 4 ] ) == 'string' ? Number( top [ i ][ 4 ].split( 'px' )[ 0 ] ) : top [ i ][ 2 ] ? Number( top [ i ][ 2 ].split( 'px' )[ 0 ] ) : 0 ) ) {
					setStyle ( praAside [ i ] , {
						position : 'absolute' ,
						top : '' ,
						right : typeof( top [ i ][ 3 ] ) == 'string' ? top [ i ][ 3 ] : '' ,
						bottom : typeof( top [ i ][ 4 ] ) == 'string' ? top [ i ][ 4 ] : top [ i ][ 2 ] ? top [ i ][ 2 ] : '0' ,
						left : typeof( top [ i ][ 5 ] ) == 'string' ? top [ i ][ 5 ] : ''
					} );
				} else {
					nowTop [ i ] = top [ i ][ 0 ] = praAside [ i ].getBoundingClientRect().top ;
					setStyle ( praAside [ i ] , {
						position : 'fixed' ,
						top : typeof( top [ i ][ 2 ] ) == 'string' ? top [ i ][ 2 ] : top [ i ][ 4 ] ? '' : '0' ,
						right : typeof( top [ i ][ 3 ] ) == 'string' ? top [ i ][ 3 ] : '' ,
						bottom : typeof( top [ i ][ 4 ] ) == 'string' ? top [ i ][ 4 ] : '' ,
						left : typeof( top [ i ][ 5 ] ) == 'string' ? top [ i ][ 5 ] : ''
					} );
				}
			} else {
				top [ i ][ 0 ] = top [ i ][ 6 ] ;
				praAside [ i ].style.cssText = '';
			};
		};
	};
	addEvent( window , 'scroll' , scrolling );
}; // 侧边固定 var aside = new asideStop();
function setMap ( mapName , where , make , nature ) {
	if ( nature ) {
		'size' in nature ? '' : nature.size = 15;
	} else {
		nature = new Object ();
		nature.size = 15;
	};
	var map = new BMap.Map( mapName );
	var point = new BMap.Point( where.split( ',' )[ 0 ] , where.split( ',' )[ 1 ] );
	var marker = new BMap.Marker( point );
	map.centerAndZoom( point , nature.size );
	map.addOverlay( marker );
	map.addControl( new BMap.NavigationControl () );
	map.enableContinuousZoom();
	map.enableScrollWheelZoom();
	var opts = {
		title : make
	};
	var infoWindow = new BMap.InfoWindow( '' , opts );
	marker.openInfoWindow( infoWindow , map.getCenter () );
};// 地图
//<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=WxoU4nnXtYO808sHK0eGCwWDVMNhaZ3a"></script>
//<script>
	// setMap ( 
	// 	'map' ,
	// 	'119.192895 , 36.418825' ,
	// 	'<div class="map"><strong>安丘市百盛花生机械有限公司</strong><br /><em>地址：山东省安丘市兴安街办大进戈工业园</em><br /><span>电话：1585641861856</span></div>' ,
	// 	{
	// 		size : 15
	// 	}
	// );
//</script>

// 总效果结束
var publice = new myFunc ();
publice.addEvent( window , 'load' , function () {  
	publice.replaces.second( {all:function () {  publice.moveimg.moveThis();}} )
	.preLoad( [] , {src : true ,lazy : publice.getClass( 'lazy' ).length} ).rolling.scrollTop().moveimg.moveThis()
	.lazyLoad( {imgAll : function () {publice.preLoad( [] , {src : true} );} ,showEach : function () {publice.rolling.scrollTop().moveimg.moveThis();}} );
} )
.rolling.scrollTop().winImg.init().rolling.scrollLeft().addAlt().navAct.nav().navAct.list();


