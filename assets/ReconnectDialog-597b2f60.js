import{aS as u,r as g,aC as p,as as x,a5 as n,eD as b}from"./index-fa0093bf.js";function v(h){const c=u(!0),t={zh:{title:"提示",message:"网络已断开，是否重新连接？",cancel:"取消",confirm:"确定"},en:{title:"Notice",message:"Connection lost, reconnect?",cancel:"Cancel",confirm:"Confirm"},ru:{title:"Уведомление",message:"Соединение потеряно, переподключиться?",cancel:"Отмена",confirm:"ОК"},pt:{title:"Aviso",message:"Conexão perdida, reconectar?",cancel:"Cancelar",confirm:"Confirmar"},vn:{title:"Thông báo",message:"Mất kết nối mạng, kết nối lại?",cancel:"Hủy",confirm:"Đồng ý"}}[(()=>{const r=new URLSearchParams(window.location.search).get("lang");return["zh","en","ru","pt","vn"].includes(r)?r:"en"})()],d={setup(){const r=()=>{c.value=!1,a.unmount(),o.remove(),document.referrer&&document.referrer.length>0?window.history.back():location.reload()},f=()=>{c.value=!1,a.unmount(),o.remove(),b.Instance.continueRetry()},s=(e,l=20,m=12)=>{if(!e)return;let i=l;for(e.style.fontSize=i+"px";e.scrollWidth>e.clientWidth&&i>m;)i-=1,e.style.fontSize=i+"px"};return p(()=>{x(()=>{const e=document.getElementById("cancel-btn"),l=document.getElementById("confirm-btn");s(e),s(l)})}),()=>c.value?n("div",{style:`
                  position: fixed;
                  top:0; left:0;
                  width:100vw; height:100vh;
                  background: rgba(0,0,0,0.5);
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  z-index:9999;
                `},[n("div",{style:`
                      background: rgba(0,0,0,0.85);
                      padding: 30px 40px;
                      border-radius: 12px;
                      width:400px;
                      max-width:90vw;
                      text-align:center;
                      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
                      color: #f0f0f0;
                      font-family: 'Segoe UI', sans-serif;
                    `},[n("h3",{style:"margin-bottom:15px; font-size:26px;"},t.title),n("p",{style:"margin-bottom:30px;font-size:18px;line-height:1.6;"},t.message),n("div",{style:"display:flex; justify-content:space-between; gap:10px;"},[n("button",{id:"cancel-btn",style:"flex:1;height:50px;border:none;border-radius:6px;background:#28a745;color:#fff;font-weight:bold;cursor:pointer;",onClick:r},t.cancel),n("button",{id:"confirm-btn",style:"flex:1;height:50px;border:none;border-radius:6px;background:#dc3545;color:#fff;font-weight:bold;cursor:pointer;",onClick:f},t.confirm)])])]):null}},o=document.createElement("div");document.body.appendChild(o);const a=g(d);a.mount(o)}export{v as showReconnectDialog};
