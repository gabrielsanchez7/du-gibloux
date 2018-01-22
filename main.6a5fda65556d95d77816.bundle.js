webpackJsonp([1,4],{0:function(t,e,a){t.exports=a("x35b")},"5xMp":function(t,e){t.exports='<header>\n\t<a [routerLink]="[\'/\']"><img src="{{resourcesImage}}logo-principal.png" alt="Logo Du Gibloux"></a>\n\t<ul id="menu-header">\n\t\t<li *ngFor="let menu of data.menu"><a href="{{menu.url}}">{{menu.item}}</a></li>\n\t</ul>\n\t<div>\n\t\t<ul id="language" (click)="selectLanguage($event);">\n\t\t\t<li id="fra">FR</li>\n\t\t\t<li class="divisor">|</li>\n\t\t\t<li id="esp">ES</li>\n\t\t</ul>\n\t\t<ul id="media">\n\t\t\t<li><a class="envelope" href=""><i class="fa fa-envelope"></i></a></li>\n\t\t\t<li><a class="google" href=""><i class="fa fa-google-plus"></i></a></li>\n\t\t\t<li><a class="facebook" href=""><i class="fa fa-facebook"></i></a></li>\n\t\t\t<li><a class="youtube" href=""><i class="fa fa-youtube-play"></i></a></li>\n\t\t</ul>\n\t</div>\n</header>\n\n<router-outlet></router-outlet>\n\n<footer>\n\t<p>Designed by</p>\n\t<a href="https://www.facebook.com/AKROS-STUDIO-128480720536551" target="_blank">\n\t\t<img src="{{resourcesImage}}logo-akros.png" alt="Logo Akros Studio">\n\t</a>\n\t<a href="https://gabrielsanchez7.github.io/pagina-personal/" target="_blank">\n\t\t<img src="{{resourcesImage}}logo-gs.png" alt="Gabriel S&aacute;nchez">\n\t</a>\n</footer>'},A1MO:function(t,e,a){"use strict";var n=a("3j3K"),i=a("ENKC"),r=a("rU/F"),s=a("n/Q+"),o=a("5oXY");a.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,a,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,n);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(s=(r<3?i(s):r>3?i(e,a,s):i(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this._router=t,this.resources=i.a.resourcesImage,this.data=r.a}return t.prototype.ngOnInit=function(){var t=this;setTimeout(function(){return t._router.navigate(["/"])},2e3)},t.prototype.ngDoCheck=function(){"fra"==this.getLanguage()?this.data=r.a:"esp"==this.getLanguage()&&(this.data=s.a)},t.prototype.getLanguage=function(){return localStorage.getItem("language")},t}();u=c([a.i(n._14)({selector:"prueba",template:a("J2o9")}),l("design:paramtypes",["function"==typeof(p=void 0!==o.b&&o.b)&&p||Object])],u);var p},ENKC:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={resourcesImage:"https://gabrielsanchez7.github.io/du-gibloux/assets/"}},Iksp:function(t,e,a){"use strict";var n=a("Qbdm"),i=a("3j3K"),r=a("NVOs"),s=a("Fzro"),o=a("TWki"),c=a("YWx4"),l=a("jg7q"),u=a("A1MO");a.d(e,"a",function(){return d});var p=this&&this.__decorate||function(t,e,a,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,n);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(s=(r<3?i(s):r>3?i(e,a,s):i(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s},d=function(){function t(){}return t}();d=p([a.i(i.b)({declarations:[c.a,l.a,u.a],imports:[n.a,r.a,s.a,o.a],providers:[o.b],bootstrap:[c.a]})],d)},J2o9:function(t,e){t.exports='<div id="load-language">\r\n\t<div id="loader"><img src="{{resources}}loading.gif" alt="Load language"></div>\r\n\t<h3>{{data.changeLanguage}}</h3>\r\n</div>'},KsFy:function(t,e){t.exports='<section id="banner">\r\n\t<article *ngFor="let banner of data.banner, let i = index" class="banner banner-{{i+1}}">\r\n\t\t<h3>{{banner.text}}</h3>\r\n\t\t<a href="">{{banner.button}}</a>\r\n\t</article>\r\n\t<div id="dots"></div>\r\n\t<div id="prev" class="direction fa fa-chevron-left"></div>\r\n\t<div id="next" class="direction fa fa-chevron-right"></div>\r\n\t<div id="gobot"><img src="{{resources}}go-bot.png" alt="Go Description"></div>\r\n</section>\r\n\r\n<section id="description">\r\n\t<h3 class="h3">{{data.description.title}}</h3>\r\n\t<div class="container">\r\n\t\t<img src="{{resources}}descriptif.png" alt="">\r\n\t\t<p class="dsc">{{data.description.text}}</p>\r\n\t</div>\r\n\t<h5>{{data.description.subtitle}}</h5>\r\n\t<div class="benefit">\r\n\t\t<ul class="container">\r\n\t\t\t<li *ngFor="let item of data.description.benefit">{{item.itemList}}</li>\r\n\t\t</ul>\r\n\t\t<p class="container">{{data.description.conclusion}}</p>\r\n\t</div>\r\n</section>\r\n\r\n<section id="appartaments">\r\n\t<h3 class="h3">{{data.appartaments.title}}</h3>\r\n\t<div class="list-appartament container">\r\n\t\t<article *ngFor="let appartament of data.appartaments.list">\r\n\t\t\t<div class="hover"><i class="fa fa-search"></i></div>\r\n\t\t\t<img src="{{resources + appartament.image}}" alt="">\r\n\t\t\t<div>\r\n\t\t\t\t<h5>{{appartament.lote}}</h5>\r\n\t\t\t\t<p>{{appartament.piso}}</p>\r\n\t\t\t</div>\r\n\t\t</article>\r\n\t</div>\r\n</section>\r\n\r\n<section id="prices">\r\n\t<h3 class="h3">{{data.prices.title}}</h3>\r\n\t<div class="container">\r\n\t\t<article *ngFor="let price of data.prices.lots">\r\n\t\t\t<h5>{{price.letter}}</h5>\r\n\t\t\t<p>\r\n\t\t\t\t<span>{{price.floor}}</span>\r\n\t\t\t\t<span>{{data.prices.lotsItem.floor}}</span>\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\t<span>{{price.room}}</span>\r\n\t\t\t\t<span>{{data.prices.lotsItem.room}}</span>\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\t<span>{{price.habitableSurface}}</span>\r\n\t\t\t\t<span>{{data.prices.lotsItem.habitableSurface}}</span>\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\t<span>{{price.balcon}}</span>\r\n\t\t\t\t<span>{{data.prices.lotsItem.balcon}}</span>\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\t<span>{{price.jardin}}</span>\r\n\t\t\t\t<span>{{data.prices.lotsItem.jardin}}</span>\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\t<span>{{price.store}}</span>\r\n\t\t\t\t<span>{{data.prices.lotsItem.store}}</span>\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\t<span>{{price.saleSurface}}</span>\r\n\t\t\t\t<span>{{data.prices.lotsItem.saleSurface}}</span>\r\n\t\t\t</p>\r\n\t\t\t<p class="sale-price">\r\n\t\t\t\t<span>{{price.salePrice}}</span>\r\n\t\t\t\t<span>{{data.prices.lotsItem.salePrice}}</span>\r\n\t\t\t</p>\r\n\t\t</article>\r\n\t</div>\r\n</section>\r\n\r\n<section id="situation" class="container">\r\n\t<h3 class="h3">{{data.situation.title}}</h3>\r\n\t<div class="city">\r\n\t\t<p>{{data.situation.description}}</p>\r\n\t\t<div>\r\n\t\t\t<h5>Villorsonnens</h5>\r\n\t\t\t<div>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><span>1\'500 ha</span><span>{{data.situation.city.superficie}}</span></li>\r\n\t\t\t\t\t<li><span>680 - 1\'130 m</span><span>{{data.situation.city.altitude}}</span></li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><span>1\'300 (2012)</span><span>{{data.situation.city.population}}</span></li>\r\n\t\t\t\t\t<li><span>0,76</span><span>{{data.situation.city.taxRate}}</span></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div>\r\n\t\t<div class="infraestructures">\r\n\t\t\t<h6>{{data.situation.infraestructures.title}}</h6>\r\n\t\t\t<p>{{data.situation.infraestructures.description}}</p>\r\n\t\t</div>\r\n\t\t<div class="environment">\r\n\t\t\t<h6>{{data.situation.environment.title}}</h6>\r\n\t\t\t<p>{{data.situation.environment.description}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="conclusion">\r\n\t\t<div>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span>8km</span><span>{{data.situation.conclusion.info.romont}}</span></li>\r\n\t\t\t\t<li><span>8km</span><span>{{data.situation.conclusion.info.station}}</span></li>\r\n\t\t\t</ul>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span>20km</span><span>{{data.situation.conclusion.info.bulle}}</span></li>\r\n\t\t\t\t<li><span>20m</span><span>{{data.situation.conclusion.info.transport}}</span></li>\r\n\t\t\t</ul>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span>40km</span><span>{{data.situation.conclusion.info.laussane}}</span></li>\r\n\t\t\t\t<li><span>8km</span><span>{{data.situation.conclusion.info.highway}}</span></li>\r\n\t\t\t</ul>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><span>400m</span><span>{{data.situation.conclusion.info.commerce}}</span></li>\r\n\t\t\t\t<li><span>400m</span><span>{{data.situation.conclusion.info.schools}}</span></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h6>{{data.situation.conclusion.title}}</h6>\r\n\t\t\t<p>{{data.situation.conclusion.description}}</p>\r\n\t\t\t<ul>\r\n\t\t\t\t<li *ngFor="let item of data.situation.conclusion.list">{{item}}</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n<section id="contact">\r\n\t<div class="container">\r\n\t\t<h3 class="h3">{{data.contact.title}}</h3>\r\n\t\t<div class="cont-form">\r\n\t\t\t<form>\r\n\t\t\t\t<h6>{{data.contact.subtitle}}</h6>\r\n\t\t\t\t<input type="text" placeholder="{{data.contact.form.name}}">\r\n\t\t\t\t<input type="text" placeholder="{{data.contact.form.email}}">\r\n\t\t\t\t<input type="text" placeholder="{{data.contact.form.adress}}">\r\n\t\t\t\t<input type="text" placeholder="{{data.contact.form.location}}">\r\n\t\t\t\t<input type="text" placeholder="{{data.contact.form.phone}}">\r\n\t\t\t\t<textarea rows="4" placeholder="{{data.contact.form.message}}"></textarea>\r\n\t\t\t\t<input type="submit" value="{{data.contact.form.send}}">\r\n\t\t\t</form>\r\n\t\t\t<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.3346738116225!2d7.003633822470396!3d46.706606422763535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad121078ab500edd!2sVillargiroud%2C+bif.!5e0!3m2!1ses!2sch!4v1516569132098" frameborder="0"></iframe>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n<section id="info-contact" class="container">\r\n\t<h4>{{data.infoContact.title}}</h4>\r\n\t<div>\r\n\t\t<ul>\r\n\t\t\t<li>\r\n\t\t\t\t<span>Billy Besnard</span>\r\n\t\t\t\t<span>{{data.infoContact.promoter}}</span>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<span>Isabelle Gomes</span>\r\n\t\t\t\t<span>{{data.infoContact.arquitect}}</span>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<span>ABAC Design</span>\r\n\t\t\t\t<span>{{data.infoContact.enterprise}}</span>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<span>Crédit Suisse</span>\r\n\t\t\t\t<span>{{data.infoContact.financing}}</span>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<div>\r\n\t\t\t<h5>{{data.infoContact.subtitle}}</h5>\r\n\t\t\t<ul>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<span class="fa fa-user"></span>\r\n\t\t\t\t\t<span>Billy Besnard</span>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<span class="fa fa-envelope"></span>\r\n\t\t\t\t\t<span>info@residencelegibloux.ch</span>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<span class="fa fa-phone"></span>\r\n\t\t\t\t\t<span>+41 78 645 7133</span>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</section>'},MOVZ:function(t,e){function a(t){throw new Error("Cannot find module '"+t+"'.")}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="MOVZ"},TWki:function(t,e,a){"use strict";var n=a("5oXY"),i=a("jg7q"),r=a("A1MO");a.d(e,"b",function(){return o}),a.d(e,"a",function(){return c});var s=[{path:"",component:i.a},{path:"loading",component:r.a}],o=[],c=n.a.forRoot(s)},YWx4:function(t,e,a){"use strict";var n=a("3j3K"),i=a("ENKC"),r=a("rU/F"),s=a("n/Q+"),o=a("pdfR"),c=a("5oXY");a.d(e,"a",function(){return p});var l=this&&this.__decorate||function(t,e,a,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,n);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(s=(r<3?i(s):r>3?i(e,a,s):i(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e){this._router=t,this._general=e,this.resourcesImage=i.a.resourcesImage,this.data=r.a}return t.prototype.ngOnInit=function(){},t.prototype.ngDoCheck=function(){var t=this;setTimeout(function(){"fra"==t.getLanguage()?t.data=r.a:"esp"==t.getLanguage()&&(t.data=s.a)},500)},t.prototype.getLanguage=function(){return localStorage.getItem("language")},t.prototype.selectLanguage=function(t){var e=t.target;$(e).is("#fra")?localStorage.setItem("language","fra"):$(e).is("#esp")&&localStorage.setItem("language","esp"),this._router.navigate(["/loading"])},t}();p=l([a.i(n._14)({selector:"app-root",template:a("5xMp"),providers:[o.a]}),u("design:paramtypes",["function"==typeof(d=void 0!==c.b&&c.b)&&d||Object,"function"==typeof(m=void 0!==o.a&&o.a)&&m||Object])],p);var d,m},jg7q:function(t,e,a){"use strict";var n=a("3j3K"),i=a("ENKC"),r=a("rU/F"),s=a("n/Q+"),o=a("pdfR");a.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,a,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,n);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(s=(r<3?i(s):r>3?i(e,a,s):i(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this._general=t,this.resources=i.a.resourcesImage,this.data=r.a,this.position=1,this.banner="#banner .banner"}return t.prototype.ngOnInit=function(){this.initFunctions()},t.prototype.ngOnDestroy=function(){this.slide&&clearInterval(this.slide)},t.prototype.ngDoCheck=function(){"fra"==this.getLanguage()?this.data=r.a:"esp"==this.getLanguage()&&(this.data=s.a)},t.prototype.getLanguage=function(){return localStorage.getItem("language")},t.prototype.initFunctions=function(){var t=this,e=function(){t.handler(),t.parseParag(),t.sizeIframe()};window.setTimeout(e,5)},t.prototype.handler=function(){var t=this;$.each(this.data.banner,function(t,e){$("#dots").append('<div class="dot" data-index="'+(t+1)+'"/>'),$("#dots .dot").first().addClass("active")}),$("#banner .banner").first().addClass("active"),$(this.banner).first().css("zIndex",1),this.slide=setInterval(function(){return t.fnSlide()},5e3)},t.prototype.parseParag=function(){for(var t=["#description .dsc","#situation .city p","#situation .infraestructures p","#situation .environment p"],e=0;e<t.length;e++){var a=this._general.parseParagraph(t[e]);$(t[e]).html(a)}},t.prototype.fnSlide=function(){this.position<=$(this.banner).length&&($("#banner .banner.active").removeClass("active").next().addClass("active"),$("#dots .dot.active").removeClass("active").next().addClass("active"),setTimeout(function(){$("#banner .banner.active").css("zIndex",1).siblings(".banner").css("zIndex",0)},1200),++this.position>$(this.banner).length&&($(this.banner).first().addClass("active").siblings().removeClass("active"),$("#dots .dot").first().addClass("active").siblings().removeClass("active"),setTimeout(function(){$(this.banner).first().siblings(".banner").css("zIndex",0)},1200),this.position=1))},t.prototype.sizeIframe=function(){function t(){var t=$("#contact form").height();$("#contact iframe").attr("height",t)}t(),$(window).resize(t)},t}();u=c([a.i(n._14)({selector:"home",template:a("KsFy"),providers:[o.a]}),l("design:paramtypes",["function"==typeof(p=void 0!==o.a&&o.a)&&p||Object])],u);var p},kZql:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={production:!0}},"n/Q+":function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={changeLanguage:"Espere un momento, estamos traduciendo el sitio web",menu:[{url:"#",item:"Inicio"},{url:"#",item:"Departamentos"},{url:"#",item:"Precios"},{url:"#",item:"Situación"},{url:"#",item:"Contacto"}],banner:[{text:"Conozca el espacio que hemos preparado para usted.",button:"Descubrir"},{text:"Conozca el espacio que hemos preparado para usted.",button:"Descubrir"},{text:"Conozca el espacio que hemos preparado para usted.",button:"Descubrir"}],description:{title:"Descipción de Residencia",text:"La residencia 'Le Gibloux' es el resultado de una transformación completa y contemporánea de una de las primeras casas de pueblo de la ciudad, construida en 1946.|Esta promoción ofrece 3 hermosos apartamentos de 85m2, 105m2 y 130m2.|El interior de los apartamentos ofrece áreas de estar generosas y funcionales.|Los acabados interiores están hechos con materiales nobles para una representación cálida y moderna. Además, todas estas casas se benefician de grandes balcones o terrazas y un jardín privado.|Y finalmente muy ecológico y económico gracias a un aislamiento periférico de 200 mm, un sistema de calefacción por suelo radiante por geotermia vertical y una producción de agua caliente por paneles solares.",subtitle:"Todos los apartamentos cuentan con:",benefit:[{itemList:"Una orientación de 360 ° (1 apartamento por nivel)."},{itemList:"Una cocina totalmente equipada abierta a una gran sala de estar."},{itemList:"Un jardín y un balcón o terraza."},{itemList:"Un área de lavandería privada."},{itemList:"2 espacios de estacionamiento al aire libre incluidos en el precio."},{itemList:"Una bodega privada."},{itemList:"Acceso a una sala de bicicletas / buggy."}],conclusion:"El interior termina a elección del tomador."},appartaments:{title:"Departamentos",list:[{image:"cuarto-a.png",lote:"Lot A - Terreno 130M2",piso:"(4° piso - A)"},{image:"cuarto-b.png",lote:"Lot C - Terreno 85M2",piso:"(4° piso - B)"},{image:"primer-a.png",lote:"Lot A - Terreno 105M2",piso:"(1° piso - A)"},{image:"primer-b.png",lote:"Lot A - Terreno 130M2",piso:"(1° piso - B)"},{image:"segundo-a.png",lote:"Lot A - Terreno 130M2",piso:"(2° piso - A)"},{image:"segundo-b.png",lote:"Lot A - Terreno 130M2",piso:"(2° piso - B)"},{image:"segundo-c.png",lote:"Lot A - Terreno 130M2",piso:"(2° piso - C)"},{image:"communs-one.png",lote:"",piso:"Espacios comunes"},{image:"communs-two.png",lote:"",piso:"Espacios comunes"}]},prices:{title:"Lista de Precios",lots:[{letter:"LOTE A",floor:"Azotea",room:"3.5 habitaciones",habitableSurface:"104,6",balcon:"27,6 + 9,5",jardin:"57,2",store:"15,6",saleSurface:"130,4",salePrice:"529'000 Fr"},{letter:"LOTE B",floor:"1er piso",room:"3.5 habitaciones",habitableSurface:"95,5",balcon:"8,0",jardin:"42,1",store:"10,8",saleSurface:"104,8",salePrice:"430'000 Fr"},{letter:"LOTE C",floor:"2do piso",room:"3 habitaciones",habitableSurface:"76,8",balcon:"6,6",jardin:"42,8",store:"8,3",saleSurface:"85,2",salePrice:"369'000 Fr"}],lotsItem:{floor:"Piso",room:"Habitaciones",habitableSurface:"Superficie neta habitable m2",balcon:"Balcón / Terraza m2",jardin:"Jardín m2",store:"Bodega m2",saleSurface:"Superficie de venta m2",salePrice:"Precio de venta"}},situation:{title:"Situación",description:"Situado en el distrito de Glne (cantón de Friburgo), el pueblo de Villorsonnens fue una fusión de Villargiroud, Villarsiviriaux, Orsonnens y Chavannes-sous-Orsonnens en 2001.|Su entorno es principalmente rural (60% de su territorio está ocupada por áreas agrícolas y el 30% por bosques), Villorsonnens es lo que Leon llama una campaña dinámica, a las puertas de la ciudad.|La región del GL atrae a más y más compañías y su población está creciendo . Desde 2012, su atractivo se ha incrementado considerablemente, con el establecimiento de grandes empresas Romont convirtiéndose en grandes empleadores en la región (Nespresso, que abrirá su tercera fábrica en Suiza en 2015 con 800 empleos a plazo, PharmaFocus estableció en 2014 su sede Romont con 200 creaciones de trabajo, Aldi que implementa un nuevo centro comercial, etc.).",city:{superficie:"Superficie",altitude:"Altitud",population:"Habitantes",taxRate:"Tasa de Impuesto"},infraestructures:{title:"Infraestructuras",description:"Los signos de una campaña en pleno desarrollo, Villorsonnens tiene toda la infraestructura para dar cabida a las familias y garantizar una vida agradable para nuestros hijos y nuestros hijos. Por lo tanto, las líneas regulares de autobús o tren de transporte público conectan cada una de las aldeas con las principales ciudades de la región. La salida de la autopista Lausana-Berna está a 8 km de distancia.|Villaz-Saint-Pierre está a 4 km de distancia, con un parque tecnológico que incluye un centro de convenciones y conferencias, instalaciones deportivas (estadio de fútbol, pistas de tenis), gabinete médico, un bancomat y varias tiendas de alimentos, posadas y artesanos (talleres de automóviles, gasolineras, peluquerías, etc.). Finalmente, 8 minutos es Romont, que ofrece todas las tiendas y centros comerciales útiles, escuelas para niños, primaria y secundaria (con biblioteca) y un hospital."},environment:{title:"Ambiente",description:"Ofreciendo paisajes muy variados, las posibilidades de paseos son numerosas, ya sea en la llanura, a lo largo del Neirigue, en las carreteras de montaña o en el bosque. Villorsonnens ofrece un entorno de vida más agradable que la ciudad cercana.|A 3 km, Mont Gibloux deleitará a los más atléticos con sus pistas de esquí y senderos con raquetas de nieve durante la temporada de invierno. También es un paseo agradable con una vista panorámica de la Glne y Gruyre desde lo alto de la torre."},conclusion:{title:"La Residencia",description:"La residencia Le Gibloux se encuentra en el centro de Villargiroud, cuya ubicación tiene varias ventajas:",list:["Una parada de autobús frente a la residencia conecta a Romont cada hora.","Una fábrica de quesos y Vis- -Vis (supermercado panadería-p tejido) 400m, abierto 7/7.","Una escuela infantil y primaria."],info:{romont:"Romont",station:"Estación de tren Cff (Romont)",bulle:"Bulle / Fribourg",transport:"Transporte público (TPF)",laussane:"Laussane",highway:"Autopista (A12 - Rossens)",commerce:"Tiendas",schools:"Escuelas"}}},contact:{title:"Contacto",subtitle:"Formulario de contacto",form:{name:"Nombre y Apellido",email:"E-mail",adress:"Dirección",location:"Localidad",phone:"Teléfono",message:"Mensaje",send:"Enviar"}},infoContact:{title:"Información de contacto",promoter:"Promotor",arquitect:"Arquitecta",enterprise:"Compañía general",financing:"Financiado por",subtitle:"Complementarios"}}},pdfR:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n=function(){function t(){}return t.prototype.parseParagraph=function(t){for(var e=$(t).text().split("|"),a="",n=0;n<e.length;n++)a+="<p>"+e[n]+"</p>";return a},t}()},"rU/F":function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={changeLanguage:"Attendez un instant, nous traduisons le site",menu:[{url:"#",item:"Accueil"},{url:"#",item:"Appartaments"},{url:"#",item:"Prix"},{url:"#",item:"Situation"},{url:"#",item:"Contact"}],banner:[{text:"Connaissez l'espace que nous avons préparé pour vous.",button:"Découvrir"},{text:"Connaissez l'espace que nous avons préparé pour vous.",button:"Découvrir"},{text:"Connaissez l'espace que nous avons préparé pour vous.",button:"Découvrir"}],description:{title:"Residence Descriptif",text:"La résidence ‘Le Gibloux’ est le résultat d’une transformation complète et contemporaine d’une des premières maisons villageoises de la commune, construite en 1946.|Cette promotion propose 3 magnifiques appartements de 85m2, 105m2 et 130m2.|L’intérieur des appartements propose des surfaces de vie généreuses et fonctionnelles.|Les finitions intérieures sont réalisées avec des matériaux nobles pour un rendu chaleureux et moderne. De plus, ces logements profitent tous de grands balcons ou terrasses et d’un jardin privatif.|Et enfin très écologique et économique grâce à une insolation périphérique de 200mm, un système de chauffage au sol par géothermie verticale et une production d'eau chaude par panneaux solaires.",subtitle:"Tous les appartements bénéficient :",benefit:[{itemList:"d’une orientation à 360° (1 appartement par niveau)."},{itemList:"d’une cuisine toute équipée ouverte sur un grand séjour."},{itemList:"d’un jardin et d’un balcon ou terrasse."},{itemList:"d’un espace buanderie privatif."},{itemList:"de 2 places de parc extérieures comprises dans le prix."},{itemList:"d’une cave privative."},{itemList:"d’un accès à un local à vélos/poussettes."}],conclusion:"Finitions intérieures au gré du preneur."},appartaments:{title:"Appartaments",list:[{image:"cuarto-a.png",lote:"Lot A - Rez 130M2",piso:"(4° etage - A)"},{image:"cuarto-b.png",lote:"Lot C - Rez 85M2",piso:"(4° etage - B)"},{image:"primer-a.png",lote:"Lot A - Rez 105M2",piso:"(1° etage - A)"},{image:"primer-b.png",lote:"Lot A - Rez 130M2",piso:"(1° etage - B)"},{image:"segundo-a.png",lote:"Lot A - Rez 130M2",piso:"(2° etage - A)"},{image:"segundo-b.png",lote:"Lot A - Rez 130M2",piso:"(2° etage - B)"},{image:"segundo-c.png",lote:"Lot A - Rez 130M2",piso:"(2° etage - C)"},{image:"communs-one.png",lote:"",piso:"Communs"},{image:"communs-two.png",lote:"",piso:"Communs"}]},prices:{title:"Liste des Prix",lots:[{letter:"LOT A",floor:"Rez",room:"3.5 pieces",habitableSurface:"104,6",balcon:"27,6 + 9,5",jardin:"57,2",store:"15,6",saleSurface:"130,4",salePrice:"529'000 Fr"},{letter:"LOT B",floor:"1er etage",room:"3.5 pieces",habitableSurface:"95,5",balcon:"8,0",jardin:"42,1",store:"10,8",saleSurface:"104,8",salePrice:"430'000 Fr"},{letter:"LOT C",floor:"2eme etage",room:"3 pieces",habitableSurface:"76,8",balcon:"6,6",jardin:"42,8",store:"8,3",saleSurface:"85,2",salePrice:"369'000 Fr"}],lotsItem:{floor:"Etage",room:"Pieces",habitableSurface:"Surface Nette Habitable m2",balcon:"Balcon / Terrase m2",jardin:"Jardin m2",store:"Cave m2",saleSurface:"Surface Vente PEE m2",salePrice:"Prix de vente CIH"}},situation:{title:"Situation",description:"Situ e'dans le district de la Glne (canton de Fribourg), la commune de Villorsonnens estne en 2001 de la fusion de Villargiroud, Villarsiviriaux, Orsonnens et Chavannes-sous-Orsonnens.|Son environnement est essentiellement champétre (60% de son territoire est occupé par des surfaces agricoles et 30% par des foráts), Villorsonnens est ce que léon appelle une campagne dynamique, aux portes de la ville.|La r gion de la Gl ne attire de plus en plus d entreprises et sa population est croissante. Depuis 2012, son attractivit  s est fortement renforc e, avec notamment l implantation de grandes entreprises Romont devenant ainsi des employeurs importants de la r gion (Nespresso qui ouvre sa troisi me fabrique en Suisse d but 2015 avec 800 emplois pr vus terme, PharmaFocus qui a install en 2014 son si ge social Romont avec 200 cr ations d emplois, Aldi qui implante un nouveau centre commercial, etc).",city:{superficie:"Superficie",altitude:"Altitude",population:"Habitants",taxRate:"Taxu d'Imposition"},infraestructures:{title:"Infraestructures",description:"Signes d une campagne en plein d veloppement, Villorsonnens poss de toutes les infrastructures pour accueillir les familles et assurer une vie agr able   nos enfants comme   nos ain s. Ainsi, des lignes r guli res de transports en commun   bus ou train   relient chacun des villages aux principales villes de la r gion. L entr e d autoroute Lausanne-Berne est   8km.|Par ailleurs,   4km se trouve Villaz-Saint-Pierre avec son parc technologique comportant notamment un centre de convention et conf rences, des infrastructures sportives (stade de football, courts de tennis), un cabinet m dical, un bancomat et plusieurs commerces alimentaires, auberges-restaurants et artisans (garages automobiles, stations services, coiffeur etc). Enfin,   8 min se trouve Romont qui offre tous les commerces et centres commerciaux utiles,  coles enfantines, primaires et secondaires (avec biblioth que) et un h pital."},environment:{title:"Environment",description:"Offrant des paysages tr s vari s, les possibilit s de balades sont nombreuses que ce soit en plaine, le long de la Neirigue, sur les chemins de montagne ou encore en for t. Villorsonnens offre un cadre de vie bien plus agr able que la ville, toute proche.|A 3km, le Mont Gibloux ravira les plus sportifs avec ses pistes de ski et sentiers raquettes durant la saison hivernale. Il s av re  galement  tre un lieu de balade tr s agr able en  t  avec une vue panoramique sur la Gl ne et la Gruy re depuis le haut de sa tour."},conclusion:{title:"La Résidence",description:"La résidence  Le Gibloux  se trouve dans le centre de Villargiroud dont la localisation jouit de plusieurs atouts :",list:["Un arr t de bus devant la r sidence, reliant Romont toutes les heures.","Une fromagerie artisanale et un Vis- -Vis (superette boulangerie-p tisserie) 400m, ouverts 7/7.","Une cole enfantine et primaire."],info:{romont:"Romont",station:"Gare Cff (Romont)",bulle:"Bulle / Fribourg",transport:"Transports publics (TPF)",laussane:"Laussane",highway:"Autoroute (A12 - Rossens)",commerce:"Commerces",schools:"Ecoles"}}},contact:{title:"Contact",subtitle:"Formulaire de contact",form:{name:"Prènom Nom",email:"E-mail",adress:"Adresse",location:"NPA, localité",phone:"Telephone",message:"Message",send:"Envoyer"}},infoContact:{title:"Information de contact",promoter:"Promoteur",arquitect:"Arquitecte",enterprise:"Entreprise général",financing:"Financement",subtitle:"Complémentaries"}}},x35b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("3j3K"),i=a("O61y"),r=a("Iksp");a("kZql").a.production&&a.i(n.a)(),a.i(i.a)().bootstrapModule(r.a)}},[0]);