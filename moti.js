(function(){const a=atob('aW5zLmFkcy5hZGJ5Z29vZ2xl'),b=atob('ZGF0YS12aW5nZXR0ZS1sb2FkZWQ='),c=atob('dHJ1ZQ==');function d(){this.e()}d.prototype={e:function(){this.f()},f:function(){const d=new MutationObserver(e=>{e.forEach(f=>{[...f.addedNodes].filter(g=>g.nodeType===1&&g.matches(a)).forEach(h=>{this.g(h)})})});d.observe(document.body,{childList:true,subtree:true})},g:function(d){const e=()=>{if(d.getAttribute(b)===c){d.style.opacity='0';d.style.pointerEvents='none'}};e();new MutationObserver(()=>{e()}).observe(d,{attributes:true,attributeFilter:[b]})}};new d})();
