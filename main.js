let snowflakes_count=50;function toggle_snow(){!0==document.getElementById("toggle_snow").checked?document.getElementById("snow").style.display="block":document.getElementById("snow").style.display="none"}function spawn_snow(n=200){n-=1;for(let e=0;e<n;e++){let t=document.createElement("div");t.className="snowflake",document.getElementById("snow").appendChild(t)}}function add_css(n){let e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(n)),document.getElementsByTagName("head")[0].appendChild(e)}function random_int(n=100){return Math.floor(Math.random()*n)+1}function random_range(n,e){return n=Math.ceil(n),Math.floor(Math.random()*((e=Math.floor(e))-n+1))+n}function spawnSnowCSS(n=200){let e="";"undefined"!=typeof base_css&&(e=base_css);for(let t=1;t<n;t++){let a=100*Math.random(),o=1e-4*random_range(-1e5,1e5),l=a+o,$=a+o/2,s=random_range(3e4,8e4)/1e5,r=100*s,d=Math.random(),f=1*random_range(10,30),c;e+=`
        .snowflake:nth-child(${t}) {
            opacity: ${Math.random()};
            transform: translate(${a}vw, -10px) scale(${d});
            animation: fall-${t} ${f}s ${-1*random_int(30)}s linear infinite;
        }

        @keyframes fall-${t} {
            ${100*s}% {
                transform: translate(${l}vw, ${r}vh) scale(${d});
            }

            to {
                transform: translate(${$}vw, 100vh) scale(${d});
            }
            
        }
        `}add_css(e)}"undefined"!=typeof total&&(snowflakes_count=total),window.onload=function(){spawnSnowCSS(snowflakes_count),spawn_snow(snowflakes_count)};