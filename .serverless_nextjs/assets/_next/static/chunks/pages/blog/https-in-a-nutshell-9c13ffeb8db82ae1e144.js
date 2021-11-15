_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"Y/Lc":function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n("rePB"),o=n("Ff2n"),s=(n("q1tI"),n("7ljp")),r=n("ZDfL");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={title:"HTTPS in a nutshell",date:"2015-05-02",__resourcePath:"blog/https-in-a-nutshell/index.md",__scans:{},layout:"index"},l={frontMatter:b},h=r.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)(h,c(c(c({},l),n),{},{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"I knew very little about HTTPS, so I read ",Object(s.b)("a",c({parentName:"p"},{href:"http://www.objc.io/issue-10/ip-tcp-http.html"}),"this article"),". Here's my summary."),Object(s.b)("p",null,"I'll assume that you're familiar with HTTP requests at a high level, but don't know much about the other Internet protocols, or what puts the S in HTTPS."),Object(s.b)("h2",null,"What is HTTPS?"),Object(s.b)("p",null,"HTTPS is a ",Object(s.b)("em",{parentName:"p"},"protocol"),", which is a set of rules that governs data transfer. The various internet protocols are built on top of each other:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"HTTPS (HTTP over TLS)"),Object(s.b)("li",{parentName:"ul"},"HTTP"),Object(s.b)("li",{parentName:"ul"},"TLS"),Object(s.b)("li",{parentName:"ul"},"TCP"),Object(s.b)("li",{parentName:"ul"},"IP")),Object(s.b)("p",null,"Each protocol exists to improve the layer beneath it in some way. Understanding each protocol is useful for understanding the benefits that HTTPS provides."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"IP")," stands for Internet Protocol, and it is the primary mechanism for all data transfer on the Internet. IP transfers data in chunks called ",Object(s.b)("em",{parentName:"p"},"packets")," from a ",Object(s.b)("em",{parentName:"p"},"source")," to a ",Object(s.b)("em",{parentName:"p"},"destination"),". Somewhat surprisingly, it makes little guarantees about each packet it sends. In fact, when a source sends a packet, the destination could receive that packet once, twice (i.e. receive a duplicate), or not at all."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"TCP")," stands for Transmission Control Protocol, and it's built on top of IP - you'll often see the pair referenced as TCP/IP. It was designed to be reliable: packets sent over TCP (between ",Object(s.b)("em",{parentName:"p"},"hosts"),") are guaranteed to be delivered once, and in order. But if TCP uses IP under the hood, how can it make these guarantees?"),Object(s.b)("h2",null,"How TCP works"),Object(s.b)("p",null,"First, in order for a TCP connection to be established, a ",Object(s.b)("em",{parentName:"p"},"handshake")," is required. To understand what a handshake is, consider an analogy. Let's say your phone rings, and you answer:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},'"Hello?"')),Object(s.b)("p",null,"At this point, you don't know anything about the caller - it could be a person, it could be a machine, it could be no one. You're just attempting to make contact."),Object(s.b)("p",null,"Say the caller responds:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},'"Hi, this is Susan. How are you?"')),Object(s.b)("p",null,"Now we know that you've heard Susan's voice, and we know that Susan has heard your voice (since she acknowledged your greeting by responding in kind). However, ",Object(s.b)("em",{parentName:"p"},"Susan")," still doesn't know whether or not you've heard ",Object(s.b)("em",{parentName:"p"},"her")," voice. Once you respond"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},'"Fine, thanks"')),Object(s.b)("p",null,"we could say that a connection has been established: both parties have acknowledged communication with each other, and the conversation can proceed."),Object(s.b)("p",null,"This is essentially what a TCP handshake is. One host - say, a ",Object(s.b)("em",{parentName:"p"},"client")," - sends a message with a random number to another host - a ",Object(s.b)("em",{parentName:"p"},"server"),". The server acknowledges receipt of the message by responding with the random number that was sent, incremented by 1. Additionally, it sends over a new random number of its own. Once the client responds back with ",Object(s.b)("em",{parentName:"p"},"that")," number incremented by 1, the connection is established. This is known as a ",Object(s.b)("em",{parentName:"p"},"three-way handshake"),":"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"SYN"),Object(s.b)("li",{parentName:"ol"},"SYN-ACK"),Object(s.b)("li",{parentName:"ol"},"ACK")),Object(s.b)("p",null,"where ",Object(s.b)("strong",{parentName:"p"},"SYN")," stands for ",Object(s.b)("em",{parentName:"p"},"synchronize sequence numbers")," (sending a message with a random number), and ",Object(s.b)("strong",{parentName:"p"},"ACK")," stands for ",Object(s.b)("em",{parentName:"p"},"acknowledgment"),"."),Object(s.b)("p",null,"Once a connection is established, data transfer can begin. ",Object(s.b)("em",{parentName:"p"},"Segments")," of data are transferred from server to client, and each segment contains a reference to how many bytes have already been transferred. As the client receives more data, it acknowledges the total transferred amount with the appropriate ACK response. TCP's retry algorithms handle network issues such as congestion and dropped or duplicated packets, to ensure the data transfer happens smoothly."),Object(s.b)("p",null,"In short, TCP is able to improve upon the unreliable IP layer by sending ",Object(s.b)("em",{parentName:"p"},"acknowledged data")," over an ",Object(s.b)("em",{parentName:"p"},"established connection"),"."),Object(s.b)("h2",null,"The web, security and TLS"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"HTTP")," stands for Hypertext Transfer Protocol, and it's built on top of TCP. Its transfer model is quite simple: a client makes a single request to a server, and the server sends back a single response. The web as we know it runs on HTTP: typing ",Object(s.b)("inlineCode",{parentName:"p"},"www.facebook.com")," into your address bar sends an HTTP request to Facebook's servers, and the web site you view and interact with is the server's response."),Object(s.b)("p",null,"Because HTTP runs on top of TCP, new browser sessions must first establish a TCP connection before receiving any data. This involves the three-way handshake described in the previous section. Once the session is established, data transfer can begin between the client and server."),Object(s.b)("p",null,"As the web integrates more and more with every aspect of our lives, a strong security model has become desirable. Using HTTP over a TCP connection is ",Object(s.b)("em",{parentName:"p"},"insecure"),", and it's easy to see why. Think back to the analogy of the phone call. After you had established contact with Susan, you both acknowledged that you were receiving each other's messages. But how did you know for sure you were speaking with Susan, rather than someone just pretending to be Susan? Also, if someone else had tapped the phone line, they'd be able to listen in on your conversation."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"TLS")," stands for Transport Layer Security, and it's a cryptographic layer that sits on top of TCP. It solves both of these problems by verifying the identity of hosts, and encrypting the messages they transfer. Establishing a TLS connection involves an additional three-way handshake that executes after TCP's initial handshake. Once a TLS connection is established, HTTP requests and responses are made to known, trusted hosts, and HTTP message bodies are encrypted. This is known as HTTP Secure, or HTTPS."),Object(s.b)("p",null,"Thus, HTTPS improves upon the security of HTTP by sending ",Object(s.b)("em",{parentName:"p"},"encrypted data")," over a ",Object(s.b)("em",{parentName:"p"},"verified connection"),"."),Object(s.b)("h2",null,"Latency"),Object(s.b)("p",null,"One final interesting bit from the article was how the TCP and TLS handshakes affect page load time. When initializing a new session with a server, the three-step TCP handshake can potentially take 750ms or more, depending on the user's latency. Since a TLS connection requires an additional three-step handshake, simply adding HTTPS to your site can mean users on low-latency connections (such as mobile devices) could wait 1.5 seconds before your server can even begin sending data."),Object(s.b)("hr",null),Object(s.b)("p",null,"I hope you have a better idea of what HTTPS is, and how drastistically it can improve your site's security! If you'd like to learn more, I recommend ",Object(s.b)("a",c({parentName:"p"},{href:"http://www.objc.io/issue-10/ip-tcp-http.html"}),"this thorough, well-written article")," by ",Object(s.b)("a",c({parentName:"p"},{href:"https://twitter.com/danielboedewadt"}),"@danielboedewadt"),"."))}p.isMDXComponent=!0},"Z5y/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/https-in-a-nutshell",function(){return n("Y/Lc")}])}},[["Z5y/",0,2,1,3,4,5,6]]]);