_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{bckW:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n("rePB"),o=n("Ff2n"),a=(n("q1tI"),n("7ljp")),i=n("ZDfL");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={title:"When to traverse an object graph",date:"2014-01-09",__resourcePath:"blog/when-to-traverse-an-object-graph/index.md",__scans:{},layout:"index"},l={frontMatter:p},h=i.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(h,s(s(s({},l),n),{},{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"I've been refactoring a .NET app for the past several weeks. It's my first time really digging into a desktop app, and the architectural similarities with Javascript applications are surprising. Each type of app, being long-lived, requires management of a UI that is typically nested, which in turn raises some interesting questions regarding object responsibility."),Object(a.b)("p",null,"One 'rule' I've found many Javascripters agree on is that child UI elements should never reach into their parents. So, a UserCollectionView object may render a ",Object(a.b)("inlineCode",{parentName:"p"},"<ul>"),", and many UserView objects would render their own ",Object(a.b)("inlineCode",{parentName:"p"},"<li>")," elements; but an individual UserView would never reach into the parent collection to, let's say, check whether another user was currently selected. That's probably a code smell, pointing to the need for a ",Object(a.b)("inlineCode",{parentName:"p"},"selectedUser")," property on the collection."),Object(a.b)("p",null,"So, from my time building front ends in both Javascript and .NET, I've developed an instinct for not reaching into parent objects. Recently, though, I've been working on some back-end code with a fairly complex object graph, and many times I've found it appropriate to reach from child objects into their parents. For example, say I have a business contract, and I need to know what the previous contract was, in order to calculate a fee change. To me, it seems completely appropriate to reach into the parent company, look for the latest contract before this one, and get some data from it. A contract should know its own fee change. However, each time I've deemed it appropriate, I've also had to fight a visceral urge to stop myself."),Object(a.b)("p",null,"So, what's going on here? Even if you disagree with me in this particular case, what are some of the general 'rules' that guide this kind of reaching across object relationships? Do the responsibilities for objects in parent-child relationships change so drastically when those objects belong to a GUI, rather than a business domain? What rules apply to ",Object(a.b)("em",{parentName:"p"},"all")," objects in parent-child relationships? Are there rules more specific than looking out for ",Object(a.b)("a",s({parentName:"p"},{href:"http://sourcemaking.com/refactoring/feature-envy"}),"feature envy")," in our objects?"),Object(a.b)("p",null,"I welcome your thoughts."))}b.isMDXComponent=!0},tGT2:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/when-to-traverse-an-object-graph",function(){return n("bckW")}])}},[["tGT2",0,2,1,3,4,5,6]]]);