import{W as w,J as F,L as z,K as P,H as m,a3 as T}from"./index-CIvoZKCq.js";const r=.5,h=0,f=1,D=60,M=0,S=.01;function V(n){const o=n.initialPosition,{dx:e,dy:i}=w(o,n.position),a=Math.abs(e),t=Math.abs(i),{maxDistance:s}=n.retina,y=s.horizontal,v=s.vertical;if(!y&&!v)return;const d=(y&&a>=y)??!1,u=(v&&t>=v)??!1;if((d||u)&&!n.misplaced)n.misplaced=!!y&&a>y||!!v&&t>v,y&&(n.velocity.x=n.velocity.y*r-n.velocity.x),v&&(n.velocity.y=n.velocity.x*r-n.velocity.y);else if((!y||a<y)&&(!v||t<v)&&n.misplaced)n.misplaced=!1;else if(n.misplaced){const x=n.position,c=n.velocity;y&&(x.x<o.x&&c.x<h||x.x>o.x&&c.x>h)&&(c.x*=-F()),v&&(x.y<o.y&&c.y<h||x.y>o.y&&c.y>h)&&(c.y*=-F())}}function k(n,o,e,i,a,t){E(n,t);const s=n.gravity,y=s!=null&&s.enable&&s.inverse?-f:f;a&&e&&(n.velocity.x+=a*t.factor/(D*e)),s!=null&&s.enable&&e&&(n.velocity.y+=y*(s.acceleration*t.factor)/(D*e));const v=n.moveDecay;n.velocity.multTo(v);const d=n.velocity.mult(e);s!=null&&s.enable&&i>h&&(!s.inverse&&d.y>=h&&d.y>=i||s.inverse&&d.y<=h&&d.y<=-i)&&(d.y=y*i,e&&(n.velocity.y=d.y/e));const u=n.options.zIndex,x=(f-n.zIndexFactor)**u.velocityRate;d.multTo(x);const{position:c}=n;c.addTo(d),o.vibrate&&(c.x+=Math.sin(c.x*Math.cos(c.y)),c.y+=Math.cos(c.y*Math.sin(c.x)))}function A(n,o){const e=n.container;if(!n.spin)return;const i={x:n.spin.direction==="clockwise"?Math.cos:Math.sin,y:n.spin.direction==="clockwise"?Math.sin:Math.cos};n.position.x=n.spin.center.x+n.spin.radius*i.x(n.spin.angle),n.position.y=n.spin.center.y+n.spin.radius*i.y(n.spin.angle),n.spin.radius+=n.spin.acceleration;const a=Math.max(e.canvas.size.width,e.canvas.size.height),t=a*r;n.spin.radius>t?(n.spin.radius=t,n.spin.acceleration*=-f):n.spin.radius<M&&(n.spin.radius=M,n.spin.acceleration*=-f),n.spin.angle+=o*S*(f-n.spin.radius/a)}function E(n,o){var s;const e=n.options,i=e.move.path;if(!i.enable)return;if(n.lastPathTime<=n.pathDelay){n.lastPathTime+=o.value;return}const t=(s=n.pathGenerator)==null?void 0:s.generate(n,o);t&&n.velocity.addTo(t),i.clamp&&(n.velocity.x=z(n.velocity.x,-f,f),n.velocity.y=z(n.velocity.y,-f,f)),n.lastPathTime-=n.pathDelay}function I(n){return n.slow.inRange?n.slow.factor:f}function C(n){const o=n.container,e=n.options,i=e.move.spin;if(!i.enable)return;const a=i.position??{x:50,y:50},t=.01,s={x:a.x*t*o.canvas.size.width,y:a.y*t*o.canvas.size.height},y=n.getPosition(),v=P(y,s),d=m(i.acceleration);n.retina.spinAcceleration=d*o.retina.pixelRatio;const u=0;n.spin={center:s,direction:n.velocity.x>=u?"clockwise":"counter-clockwise",angle:n.velocity.angle,radius:v,acceleration:n.retina.spinAcceleration}}const H=2,O=1,B=1;class J{init(o){const e=o.options,i=e.move.gravity;o.gravity={enable:i.enable,acceleration:m(i.acceleration),inverse:i.inverse},C(o)}isEnabled(o){return!o.destroyed&&o.options.move.enable}move(o,e){var l,b;const i=o.options,a=i.move;if(!a.enable)return;const t=o.container,s=t.retina.pixelRatio;(l=o.retina).moveSpeed??(l.moveSpeed=m(a.speed)*s),(b=o.retina).moveDrift??(b.moveDrift=m(o.options.move.drift)*s);const y=I(o),v=o.retina.moveSpeed*t.retina.reduceFactor,d=o.retina.moveDrift,u=T(i.size.value)*s,x=a.size?o.getRadius()/u:O,c=e.factor||B,g=v*x*y*c/H,R=o.retina.maxSpeed??t.retina.maxSpeed;a.spin.enable?A(o,g):k(o,a,g,R,d,e),V(o)}}export{J as BaseMover};
