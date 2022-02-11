(async() => {
	eval(await (await fetch("https://raw.githubusercontent.com/translation-menu/menu/main/translationMenu/dist/bundle.js")).text())
})()
