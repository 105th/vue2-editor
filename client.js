webpackJsonp([0],[,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(22),i=n(16),r=n.n(i);new o.a({el:"#app",render:function(e){return e(r.a)}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),i=n(17),r=n.n(i);t.default={components:{VueEditor:o.a,Vue2Editor:r.a},data:function(){return{editorContent:"<h1>Content</h1>"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n.n(o),r=n(1),l=(n.n(r),n(2));n.n(l);i.a.import("ui/icons").bold='<img src="../static/bold.png" alt="" />';var a=[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]];t.default={name:"vue2-editor",props:{editorContent:String,value:String,placeholder:String,buttonText:String,editorToolbar:Array,useSaveButton:{type:Boolean,default:function(){return!0}},showPreview:{type:Boolean,default:function(){return!1}}},data:function(){return{quill:null,editor:null,toolbar:this.editorToolbar?this.editorToolbar:a}},mounted:function(){var e=this;e.quill=new i.a(e.$refs.quillContainer,{modules:{toolbar:this.toolbar},placeholder:this.placeholder?this.placeholder:"",theme:"snow"}),e.editor=document.querySelector(".ql-editor"),e.value&&(e.editor.innerHTML=e.value),void 0!==e.$refs.livePreview?e.quill.on("text-change",function(){e.$refs.livePreview.innerHTML=e.editor.innerHTML,e.$emit("input",e.editor.innerHTML)}):e.quill.on("text-change",function(){e.$emit("input",e.editor.innerHTML)})},watch:{editorContent:function(){this.editor.innerHTML=this.value}},methods:{saveContent:function(e){this.$emit("save-content",this.editor.innerHTML)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=n.n(o);n(1),n(2);var r=[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]];t.default={name:"vue-editor",props:{editorContent:String,placeholder:String,buttonText:String,editorToolbar:Array,useSaveButton:{type:Boolean,default:function(){return!0}},showPreview:{type:Boolean,default:function(){return!1}}},data:function(){return{quill:null,editor:null,toolbar:this.editorToolbar?this.editorToolbar:r}},mounted:function(){var e=this;e.quill=new i.a(e.$refs.quillContainer,{modules:{toolbar:this.toolbar},placeholder:this.placeholder?this.placeholder:"",theme:"snow"}),e.editor=document.querySelector(".ql-editor"),e.editorContent&&(e.editor.innerHTML=e.editorContent),void 0!==e.$refs.livePreview?e.quill.on("text-change",function(){e.$refs.livePreview.innerHTML=e.editor.innerHTML,e.$emit("editor-updated",e.editor.innerHTML)}):e.quill.on("text-change",function(){e.$emit("editor-updated",e.editor.innerHTML)})},watch:{editorContent:function(){this.editor.innerHTML=this.editorContent}},methods:{saveContent:function(e){this.$emit("save-content",this.editor.innerHTML)}}}},function(e,t,n){"use strict";var o=n(18),i=n.n(o);n.d(t,"a",function(){return i.a})},,,function(e,t){},function(e,t){},,,function(e,t,n){var o=n(0)(n(6),n(21),null,null);e.exports=o.exports},function(e,t,n){n(12);var o=n(0)(n(7),n(19),"data-v-1d19581a",null);e.exports=o.exports},function(e,t,n){n(13);var o=n(0)(n(8),n(20),"data-v-228f14ee",null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"quillWrapper"}},[n("img",{attrs:{src:"/static/bold.png",alt:""}}),e._v(" "),n("div",{ref:"quillContainer",attrs:{id:"quill-container",value:e.value}}),e._v(" "),e.useSaveButton?n("button",{staticClass:"save-button",on:{click:e.saveContent}},[e._v("\n      "+e._s(e.buttonText?e.buttonText:"Save Content")+"\n    ")]):e._e(),e._v(" "),e.showPreview?n("div",{ref:"livePreview",staticClass:"ql-editor"}):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"quillWrapper"}},[n("div",{ref:"quillContainer",attrs:{id:"quill-container"}}),e._v(" "),e.useSaveButton?n("button",{staticClass:"save-button",on:{click:e.saveContent}},[e._v("\n      "+e._s(e.buttonText?e.buttonText:"Save Content")+"\n    ")]):e._e(),e._v(" "),e.showPreview?n("div",{ref:"livePreview",staticClass:"ql-editor"}):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Vue2Editor 2.0 (In Development)")]),e._v(" "),n("vue2-editor",{model:{value:e.editorContent,callback:function(t){e.editorContent=t},expression:"editorContent"}})],1)},staticRenderFns:[]}},,function(e,t,n){e.exports=n(5)}],[23]);
//# sourceMappingURL=client.js.map