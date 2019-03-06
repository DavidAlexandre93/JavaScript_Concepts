function f1() { console.log(this === window)}

f1()


/*document.getElementsByTagName( 'body')[0].onclick = f1
f f1() {console.log(this === window)}
}*/

const f3 = () => console.log(this === window)
f3()