(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){e.exports=a(339)},22:function(e,t){e.exports={API:"https://demo1790527.mockable.io"}},335:function(e,t,a){},336:function(e,t,a){},337:function(e,t,a){},339:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(74),o=a.n(c),l=a(12),i=a.n(l),s=a(7),u=a(8),m=a(10),p=a(9),d=a(11),h=a(41),b=a(23),f=a(13),E=a.n(f),g=a(31),v=a(21),y=a.n(v),N=a(22),O=function(){return function(){var e=Object(g.a)(E.a.mark(function e(t,a){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"ASYNC_ACTION_START"}),n={headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0},e.next=4,y.a.get("".concat(N.API,"/categories"),n).then(function(e){t({type:"FETCH_CATEGORIES",payload:{categories:e.data}})});case 4:t({type:"ASYNC_ACTION_FINISH"});case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},C=a(35),P=a(341),A=a(340),S=a(75),j=a.n(S),w=a(36),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onFormSubmit=function(e){if(a.props.initialValues&&a.props.initialValues._id)a.props.handleUpdateProduct(e);else{var t=Object(C.a)({},e,{_id:j()()});a.props.handleCreateProduct(t)}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.handleCancel;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onFormSubmit)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Name"),r.a.createElement(P.a,{name:"name",type:"text",required:!0,className:"form-control",component:"input",placeholder:"Give your product a name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Description"),r.a.createElement(P.a,{name:"description",className:"form-control",component:"textarea"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Price"),r.a.createElement(P.a,{name:"price",step:"1000",min:"0",type:"number",required:!0,className:"form-control",component:"input",placeholder:"Give your product price "})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Category"),r.a.createElement(P.a,{name:"productType",type:"text",required:!0,className:"form-control",component:"input",placeholder:"Give your product a category "})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Brand"),r.a.createElement(P.a,{name:"brand",type:"text",required:!0,className:"form-control",component:"input",placeholder:"Give your product a brand "})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Producer"),r.a.createElement(P.a,{name:"producer",type:"text",className:"form-control",component:"input",placeholder:"Give your product a producer "})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Image URL"),r.a.createElement(P.a,{name:"imageUrl",type:"text",className:"form-control",component:"input",placeholder:"Give your product a url image product"})),r.a.createElement("span",null,r.a.createElement("button",{type:"submit",className:"btn btn-default"},"Submit")),r.a.createElement("span",null,"  ",r.a.createElement("button",{type:"button",onClick:e,className:"btn btn-danger"},"Cancel"))))}}]),t}(n.Component),_=Object(w.combineValidators)({name:Object(w.isRequired)({message:"The product name is required"}),price:Object(w.isRequired)("price"),brand:Object(w.isRequired)("brand")}),I=T=Object(A.a)({form:"productForm",validate:_})(T),x=a(29),R=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.products,n=t.handleOpenProduct,c=t.deleteProduct;return r.a.createElement("div",{id:"products",className:"row list-group"},this.props.loading&&r.a.createElement("h1",null,"Loading..."),a.length<=0&&!this.props.loading&&r.a.createElement("h3",null,"No product found"),a.length>0&&a.map(function(t){return r.a.createElement("div",{key:t._id,className:"item  col-xs-4 col-lg-4 "+e.props.view},r.a.createElement("div",{className:"thumbnail"},r.a.createElement("img",{style:{maxWidth:200},className:"group list-group-image",src:t.imageUrl,alt:t.name}),r.a.createElement("div",{className:"caption"},r.a.createElement(x.b,{to:"product/".concat(t._id)},r.a.createElement("h4",{className:"group inner list-group-item-heading"},t.name)),r.a.createElement("p",{className:"group inner list-group-item-text"},t.description),r.a.createElement("p",{className:"group inner list-group-item-text"},"Type:  ",t.productType),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-6"},r.a.createElement("p",{className:"lead"},t.price," \u20ab")),r.a.createElement("div",{className:"col-xs-12 col-md-6"},r.a.createElement("span",null," ",r.a.createElement("button",{type:"button",className:"btn btn-success"},"Add to cart"),"  "),r.a.createElement("span",null,r.a.createElement("button",{type:"button",onClick:function(){return n(t)},className:"btn btn-warning"},"Edit")," "),r.a.createElement("span",null," ",r.a.createElement("button",{type:"button",onClick:c(t._id),className:"btn btn-danger"},"Delete"),"  ")),r.a.createElement("div",{className:"clearfix"})))))}))}}]),t}(n.Component),k=(a(335),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).prevPage=function(){a.setState({currentPage:a.state.currentPage-1})},a.nextPage=function(){a.setState({currentPage:a.state.currentPage+1})},a.update=function(e,t,n,r){var c=a.props.products;c=c.filter(function(a){return a.productType&&-1!==a.productType.search(t)&&-1!==a.name.toLowerCase().search(e.toLowerCase())&&parseFloat(a.price)>=n&&parseFloat(a.price)<=r}),a.setState({filterProducts:c,isFilter:!0})},a.filterProductType=function(e){var t=a.state,n=t.filterKey,r=t.minPrice,c=t.maxPrice;a.setState({typeKey:e}),a.update(n,e,r,c)},a.filterList=function(e){var t=a.state,n=t.typeKey,r=t.minPrice,c=t.maxPrice;a.setState({filterKey:e.target.value}),a.update(e.target.value,n,r,c)},a.setMinPrice=function(e){var t=a.state,n=t.typeKey,r=t.filterKey,c=t.maxPrice;a.setState({minPrice:e.target.value}),a.update(r,n,e.target.value,c)},a.setMaxPrice=function(e){var t=a.state,n=t.typeKey,r=t.minPrice,c=t.filterKey;a.setState({maxPrice:e.target.value}),a.update(c,n,r,e.target.value)},a.reset=function(){a.setState({filterProducts:[],isFilter:!1,filterKey:"",typeKey:"",minPrice:0,maxPrice:1e8,currentPage:1,lastPage:1,productPerPage:6})},a.handleFormOpen=function(){a.setState({selectedEvent:null,isOpen:!0})},a.handleCancel=function(){a.setState({isOpen:!1})},a.handleOpenProduct=function(e){a.setState({isOpen:!0,selectedProduct:e})},a.handleUpdateProduct=function(e){a.setState({isOpen:!1}),a.props.updateProduct(e)},a.handleCreateProduct=function(e){a.setState({isOpen:!1}),a.props.createProduct(e)},a.handleDeleteProduct=function(e){return function(){a.props.deleteProduct(e)}},a.state={view:"list-group-item",filterProducts:[],isFilter:!1,filterKey:"",typeKey:"",minPrice:0,maxPrice:1e8,currentPage:1,products:[],lastPage:1,productPerPage:6,isOpen:!1,selectedProduct:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchProducts(),this.props.fetchCategories()}},{key:"componentWillReceiveProps",value:function(e){this.setState({products:e.products})}},{key:"render",value:function(){var e=this,t=this.props,a=t.categories,n=t.products,c=this.state,o=c.currentPage,l=c.productPerPage,i=c.filterKey,s=c.isFilter,u=c.filterProducts,m=n;s&&(m=u);var p=Math.ceil(m.length/l),d=o*l,h=d-l,b=m.slice(h,d);return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("button",{onClick:function(){return e.reset()},type:"button",className:"btn btn-danger btn-lg"},"Reset Filter"),r.a.createElement("h3",null,"Search"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{value:this.state.filterKey,onChange:this.filterList,type:"text",className:"form-control",id:"searchForm",placeholder:"Search"})),r.a.createElement("h3",null,"Filter by product type"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},"Min"),r.a.createElement("input",{id:"minForm",value:this.state.minPrice,onChange:this.setMinPrice,type:"number",min:"0",step:"100000",className:"form-control",placeholder:"0","aria-label":"..."}))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},"Max"),r.a.createElement("input",{id:"maxForm",value:this.state.maxPrice,onChange:this.setMaxPrice,type:"number",min:"0",step:"100000",className:"form-control",placeholder:"100000000","aria-label":"..."})))),r.a.createElement("br",null),r.a.createElement("h3",null,"Filter by product type"),r.a.createElement("ul",{className:"list-group"},this.props.loading&&r.a.createElement("h3",null,"Loading..."),a&&a.map(function(t){return r.a.createElement("li",{key:t._id,className:"list-group-item"},r.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return e.filterProductType(t.name)}},t.name))}))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("div",{className:"well well-sm"},r.a.createElement("strong",null,"Display "),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{onClick:function(){return e.setState({view:"list-group-item"})},id:"list",className:"btn btn-default btn-sm"},r.a.createElement("span",{className:"glyphicon glyphicon-th-list"}),"List")," ",r.a.createElement("button",{onClick:function(){return e.setState({view:"grid-group-item"})},id:"grid",className:"btn btn-default btn-sm"},r.a.createElement("span",{className:"glyphicon glyphicon-th"}),"Grid"))),r.a.createElement("div",null,r.a.createElement("nav",{"aria-label":"..."},r.a.createElement("ul",{className:"pager"},r.a.createElement("li",{className:"previous "+(1===o&&"disabled")},r.a.createElement("button",{className:"btn btn-default",disabled:1===o,onClick:this.prevPage},r.a.createElement("span",{"aria-hidden":"true"},"\u2190")," Older")),r.a.createElement("li",{className:"next "+(o===p&&"disabled")},r.a.createElement("button",{className:"btn btn-default",disabled:o===p,onClick:this.nextPage},"Newer ",r.a.createElement("span",{"aria-hidden":"true"},"\u2192")))))),r.a.createElement("div",null),r.a.createElement(R,{loading:this.props.loading,products:b,view:this.state.view,handleOpenProduct:this.handleOpenProduct,deleteProduct:this.handleDeleteProduct}),r.a.createElement("div",{className:"clearfix"}),r.a.createElement("nav",{"aria-label":"..."},r.a.createElement("ul",{className:"pager"},r.a.createElement("li",{className:"previous "+(1===o&&"disabled")},r.a.createElement("button",{className:"btn btn-default",disabled:1===o,onClick:this.prevPage},r.a.createElement("span",{"aria-hidden":"true"},"\u2190")," Older")),r.a.createElement("li",{className:"next "+(o===p&&"disabled")},r.a.createElement("button",{className:"btn btn-default",disabled:o===p,onClick:this.nextPage},"Newer ",r.a.createElement("span",{"aria-hidden":"true"},"\u2192"))),r.a.createElement("p",null,"Page ",o," / ",p),r.a.createElement("p",null,"Products per page: ",l," "),""!==i&&r.a.createElement("p",null,"Searching '",i,"'")))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{onClick:function(){return e.setState({isOpen:!0})},type:"button",className:"btn btn-success btn-lg"},"Create Product"),this.state.isOpen&&r.a.createElement(I,{handleUpdateProduct:this.handleUpdateProduct,handleCreateProduct:this.handleCreateProduct,initialValues:this.state.selectedProduct,handleCancel:this.handleCancel}))))}}]),t}(n.Component)),F={fetchProducts:function(){return function(){var e=Object(g.a)(E.a.mark(function e(t,a){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"ASYNC_ACTION_START"}),n={headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0},e.next=4,y.a.get("".concat(N.API,"/products"),n).then(function(e){t({type:"FETCH_PRODUCTS",payload:{products:e.data}})});case 4:t({type:"ASYNC_ACTION_FINISH"});case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},fetchCategories:O,deleteProduct:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{n={headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0},y.a.delete("".concat(N.API,"/products/1"),n).then(function(t){a({type:"DELETE_PRODUCT",payload:{productId:e}}),l.toastr.success("Success","Product has been deleted")})}catch(r){l.toastr.error("Oops","Something went wrong")}case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},createProduct:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"ASYNC_ACTION_START"});try{n={headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0},y.a.post("".concat(N.API,"/products"),n,e).then(function(t){a({type:"CREATE_PRODUCT",payload:{product:e}}),a({type:"ASYNC_ACTION_FINISH"}),l.toastr.success("Success","Product has been created")})}catch(r){a({type:"ASYNC_ACTION_ERROR"}),l.toastr.error("Oops","Something went wrong")}case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},updateProduct:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"ASYNC_ACTION_START"});try{n={headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0},y.a.put("".concat(N.API,"/products/1"),n,e).then(function(t){a({type:"UPDATE_PRODUCT",payload:{product:e}}),a({type:"ASYNC_ACTION_FINISH"}),l.toastr.success("Success","Product has been updated")})}catch(r){a({type:"ASYNC_ACTION_ERROR"}),l.toastr.error("Oops","Something went wrong")}case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},D=Object(b.connect)(function(e){return{products:e.products,loading:e.async.loading,categories:e.categories}},F)(k),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onFormSubmit=function(e){if(a.props.initialValues&&a.props.initialValues._id)a.props.handleUpdate(e);else{var t=Object(C.a)({},e,{_id:j()()});a.props.handleCreate(t)}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.handleCancel;return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onFormSubmit)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Name"),r.a.createElement(P.a,{name:"name",type:"text",required:!0,className:"form-control",component:"input",placeholder:"Give your product a name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Description"),r.a.createElement(P.a,{name:"description",className:"form-control",component:"textarea"})),r.a.createElement("span",null,r.a.createElement("button",{type:"submit",className:"btn btn-default"},"Submit")),r.a.createElement("span",null,"  ",r.a.createElement("button",{type:"button",onClick:e,className:"btn btn-danger"},"Cancel")))}}]),t}(n.Component),Y=Object(w.combineValidators)({name:Object(w.isRequired)({message:"The category name is required"})}),G=U=Object(A.a)({form:"categoryForm",validate:Y})(U),L=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.categories,a=e.handleSelect,n=e.deleteCategory;return r.a.createElement("table",{className:"table"},this.props.loading&&r.a.createElement("h3",null,"Loading..."),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Edit"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,t&&t.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(e)},type:"button",className:"btn btn-primary"},"Edit")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(e._id)},type:"button",className:"btn btn-danger"},"Remove")))})))}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleCancel=function(){a.setState({isOpen:!1})},a.handleUpdate=function(e){a.setState({isOpen:!1}),a.props.updateCategory(e)},a.handleSelect=function(e){a.setState({isOpen:!0,selectedCategory:e})},a.handleCreate=function(e){a.setState({isOpen:!1}),a.props.createCategory(e)},a.state={isOpen:!1,selectedCategory:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCategories()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},this.state.isOpen&&r.a.createElement(G,{handleUpdate:this.handleUpdate,initialValues:this.state.selectedCategory,handleCreate:this.handleCreate,handleCancel:this.handleCancel})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("button",{onClick:function(){return e.setState({isOpen:!0})},type:"button",className:"btn btn-primary"},"Create"),r.a.createElement(L,{loading:this.props.loading,deleteCategory:this.props.deleteCategory,handleSelect:this.handleSelect,categories:this.props.categories}))))}}]),t}(n.Component),H={fetchCategories:O,createCategory:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"ASYNC_ACTION_START"}),t.prev=1,n={headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0},t.next=5,y.a.post("".concat(N.API,"/categories"),n,e).then(function(t){a({type:"CREATE_CATEGORY",payload:{category:e}}),a({type:"ASYNC_ACTION_FINISH"}),l.toastr.success("Success","Category has been created")});case 5:t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),a({type:"ASYNC_ACTION_ERROR"}),l.toastr.error("Oops","Something went wrong");case 11:case"end":return t.stop()}},t,this,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()},updateCategory:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"ASYNC_ACTION_START"});try{n={headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0},y.a.put("".concat(N.API,"/categories/1"),n,e).then(function(t){a({type:"UPDATE_CATEGORY",payload:{category:e}}),a({type:"ASYNC_ACTION_FINISH"}),l.toastr.success("Success","Category has been updated")})}catch(r){a({type:"ASYNC_ACTION_ERROR"}),l.toastr.error("Oops","Something went wrong")}case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},deleteCategory:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"ASYNC_ACTION_START"});try{n={headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0},y.a.delete("".concat(N.API,"/categories/1"),n).then(function(t){a({type:"DELETE_CATEGORY",payload:{categoryId:e}}),l.toastr.success("Success","Category has been deleted")})}catch(r){a({type:"ASYNC_ACTION_FINISH"}),l.toastr.error("Oops","Something went wrong")}case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},M=Object(b.connect)(function(e){return{loading:e.async.loading,categories:e.categories}},H)(K),q=(a(336),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={loading:!0,product:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("".concat(N.API,"/products/1"),{headers:{"Access-Control-Allow-Origin":"*"},crossDomain:!0}).then(function(t){e.setState({loading:!1,product:t.data})})}},{key:"render",value:function(){var e=this.state,t=e.product;return e.loading?r.a.createElement("div",{className:"container"}," ",r.a.createElement("h1",null,"Loading...")," "):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"container-fliud"},r.a.createElement("div",{className:"wrapper row"},r.a.createElement("div",{className:"preview col-md-6"},r.a.createElement("div",{className:"preview-pic tab-content"},r.a.createElement("div",{className:"tab-pane active",id:"pic-1"},r.a.createElement("img",{alt:"Title Product",src:t&&t.imageUrl})))),r.a.createElement("div",{className:"details col-md-6"},r.a.createElement("h3",{className:"product-title"},t&&t.name),r.a.createElement("p",{className:"product-description"},t&&t.description),r.a.createElement("h4",{className:"price"},"current price: ",r.a.createElement("span",null,t&&t.price," \u20ab")),r.a.createElement("p",{className:"product-description"},r.a.createElement("b",null,"Category:")," ",t&&t.productType),r.a.createElement("p",{className:"product-description"},r.a.createElement("b",null,"Brand:")," ",t&&t.brand),r.a.createElement("p",{className:"product-description"},r.a.createElement("b",null,"Producer:")," ",t&&t.producer),r.a.createElement("p",{className:"vote"},r.a.createElement("strong",null,"91%")," of buyers enjoyed this product! ",r.a.createElement("strong",null,"(87 votes)")),r.a.createElement("div",{className:"action"},r.a.createElement("button",{className:"add-to-cart btn btn-default",type:"button"},"add to cart")))))))}}]),t}(n.Component)),W=a(56),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).toggle=a.toggle.bind(Object(W.a)(Object(W.a)(a))),a.state={isOpen:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-default"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(x.b,{className:"navbar-brand",to:"/"},"Simple Shop")),r.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",null,r.a.createElement(x.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(x.b,{to:"/products"},"Products")),r.a.createElement("li",null,r.a.createElement(x.b,{to:"/categories"},"Categories"))))))}}]),t}(n.Component),B=(a(337),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:D}),r.a.createElement(h.a,{exact:!0,path:"/products",component:D}),r.a.createElement(h.a,{exact:!0,path:"/categories",component:M}),r.a.createElement(h.a,{path:"/product/:id",component:q})))}}]),t}(n.Component)),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var z,Q,X,Z=a(6),ee=a(154),te=a(342),ae=a(16),ne=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0,r=n.type,c=n.payload,o=t[r];return o?o(a,c):a}},re=ne({loading:!1},(z={},Object(ae.a)(z,"ASYNC_ACTION_START",function(e,t){return Object(C.a)({},e,{loading:!0})}),Object(ae.a)(z,"ASYNC_ACTION_FINISH",function(e){return Object(C.a)({},e,{loading:!1})}),Object(ae.a)(z,"ASYNC_ACTION_ERROR",function(e){return Object(C.a)({},e,{loading:!1})}),z)),ce=a(37),oe=ne([],(Q={},Object(ae.a)(Q,"CREATE_PRODUCT",function(e,t){return[].concat(Object(ce.a)(e),[Object.assign({},t.product)])}),Object(ae.a)(Q,"UPDATE_PRODUCT",function(e,t){var a=Object(ce.a)(e),n=a.findIndex(function(e){return e._id===t.product._id});return a.splice(n,1,t.product),console.log(a),a}),Object(ae.a)(Q,"DELETE_PRODUCT",function(e,t){return Object(ce.a)(e.filter(function(e){return e._id!==t.productId}))}),Object(ae.a)(Q,"FETCH_PRODUCTS",function(e,t){return t.products}),Q)),le=ne([],(X={},Object(ae.a)(X,"CREATE_CATEGORY",function(e,t){return[].concat(Object(ce.a)(e),[Object.assign({},t.category)])}),Object(ae.a)(X,"UPDATE_CATEGORY",function(e,t){var a=Object(ce.a)(e),n=a.findIndex(function(e){return e._id===t.category._id});return a.splice(n,1,t.category),console.log(a),a}),Object(ae.a)(X,"DELETE_CATEGORY",function(e,t){return Object(ce.a)(e.filter(function(e){return e._id!==t.categoryId}))}),Object(ae.a)(X,"FETCH_CATEGORIES",function(e,t){return t.categories}),X)),ie=Object(Z.combineReducers)({async:re,form:te.a,toastr:l.reducer,products:oe,categories:le}),se=a(155),ue=(a(338),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Z.createStore)(ie,e,Object(se.composeWithDevTools)(Object(Z.applyMiddleware)(ee.a)))}()),me=document.getElementById("root");o.a.render(r.a.createElement(b.Provider,{store:ue},r.a.createElement(x.a,{basename:"/"},r.a.createElement(i.a,{position:"bottom-right",transitionIn:"fadeIn",transitionOut:"fadeOut"}),r.a.createElement(B,null))),me),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");J?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):$(t,e)})}}()}},[[156,1,2]]]);
//# sourceMappingURL=main.1c794271.chunk.js.map