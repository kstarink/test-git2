montageDefine("2c67a7d","tests/Events/08-implicit-close-tags.json",{exports:{name:"Implicit close tags",options:{},html:"<ol><li class=test><div><table style=width:100%><tr><td colspan=2><h3>Heading</h3><tr><td><div>Div</div><td><div>Div2</div></table></div><li><div><h3>Heading 2</h3></div></li></ol>",expected:[{event:"opentagname",data:["ol"]},{event:"opentag",data:["ol",{}]},{event:"opentagname",data:["li"]},{event:"attribute",data:["class","test"]},{event:"opentag",data:["li",{"class":"test"}]},{event:"opentagname",data:["div"]},{event:"opentag",data:["div",{}]},{event:"opentagname",data:["table"]},{event:"attribute",data:["style","width:100%"]},{event:"opentag",data:["table",{style:"width:100%"}]},{event:"opentagname",data:["tr"]},{event:"opentag",data:["tr",{}]},{event:"opentagname",data:["td"]},{event:"attribute",data:["colspan","2"]},{event:"opentag",data:["td",{colspan:"2"}]},{event:"opentagname",data:["h3"]},{event:"opentag",data:["h3",{}]},{event:"text",data:["Heading"]},{event:"closetag",data:["h3"]},{event:"closetag",data:["td"]},{event:"closetag",data:["tr"]},{event:"opentagname",data:["tr"]},{event:"opentag",data:["tr",{}]},{event:"opentagname",data:["td"]},{event:"opentag",data:["td",{}]},{event:"opentagname",data:["div"]},{event:"opentag",data:["div",{}]},{event:"text",data:["Div"]},{event:"closetag",data:["div"]},{event:"closetag",data:["td"]},{event:"opentagname",data:["td"]},{event:"opentag",data:["td",{}]},{event:"opentagname",data:["div"]},{event:"opentag",data:["div",{}]},{event:"text",data:["Div2"]},{event:"closetag",data:["div"]},{event:"closetag",data:["td"]},{event:"closetag",data:["tr"]},{event:"closetag",data:["table"]},{event:"closetag",data:["div"]},{event:"closetag",data:["li"]},{event:"opentagname",data:["li"]},{event:"opentag",data:["li",{}]},{event:"opentagname",data:["div"]},{event:"opentag",data:["div",{}]},{event:"opentagname",data:["h3"]},{event:"opentag",data:["h3",{}]},{event:"text",data:["Heading 2"]},{event:"closetag",data:["h3"]},{event:"closetag",data:["div"]},{event:"closetag",data:["li"]},{event:"closetag",data:["ol"]}]}});