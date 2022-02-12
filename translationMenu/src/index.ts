import "./style.scss";
import Swal from 'sweetalert2';
export const menu = document.createElement("div");
export const wrapper = document.getElementById("game-wrapper");

document.getElementById("translation-menu")?.remove();
document.getElementById("menu-toggler")?.remove();
menu.id = "translation-menu";
wrapper?.prepend(menu);

export const toggler = document.createElement("button");
toggler.id = "menu-toggler";

let visible = false;
wrapper?.prepend(toggler);
toggler.onclick = () => {
	visible = !visible;

	if (visible) {
		toggler.innerText = "▼";
		menu.style.top = "-100vh";
	} else {
		toggler.innerText = "▲";
		menu.style.top = "";
	}
};
toggler.onclick({} as any);

const menuleft = document.createElement("DIV");
menuleft.classList.add("menu-left");
menu.append(menuleft);

export const addArea = (title: string) => {
	const area = document.createElement("div");
	area.classList.add("menu-area");
	menuleft.append(area);

	const header = document.createElement("h1");
	header.innerText = title;
	area.append(header);
	return area;
};

const title = document.createElement("h1");
title.classList.add("menu-title");
title.innerText = "Translate Menu";
menuleft.append(title);
const disc = document.createElement("h2");
disc.style.fontSize = "30px";
disc.innerHTML = "Made by <a href='https://www.github.com/donaldli2020' target='_blank'>Donald Li</a>.";
menuleft.append(disc);
const subtitle = document.createElement("h3");
subtitle.style.fontSize = "20px";
subtitle.innerHTML = `On behalf of <a href="https://github.com/translation-menu">translation-menu</a>.
<hr>
This is free and open-source software. If you paid for this or accessed this behind a paywall/AdFly link, demand a refund. If you sell this software, or otherwise make a commercial advantage from it, you are violating Github conduct by not cooperating with our license.`;
menuleft.append(subtitle);

export class Translation {
	public element: HTMLButtonElement;
	public name: String;
	private description: String;

	constructor (
		public parent: HTMLDivElement,
		name?: string,
		description?: string
	) {
		this.name = "";
		this.description = "";
		this.element = document.createElement("button");
		this.element.classList.add("menu-translation");
		this.parent.append(this.element);

		if (name) this.setName(name);
		if (description) this.setDesc(description);
	}

	setName (name: string) {
		this.element.innerText = name;
		this.name = name;
		return this;
	}

	setDesc (desc: string) {
		this.element.title = desc;
		this.description = desc;
		return this;
	}
}

export const translate = async (sl: string, tl: string) => {
	var text = await Swal.mixin({
		input: 'textarea',
		inputPlaceholder: 'What do you want translated?',
		inputAttributes: {
			'aria-label': 'What do you want translated?'
		},
	showCancelButton: true
	});
    async function loadTranslation() {
        var response = await
        fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&hl=en-US&dt=t&dt=bd&dj=1&source=input&tk=139324.139324&q=${text}');
        var translation = await response.json();
        Swal.fire('Translation:', translation.sentences[0].trans, 'info');
    }
    loadTranslation();
};

export const category = {
	english: addArea("English")
};

/*
document.onkeyup = function(e) {
  if (e.altKey && e.which == 84) {
    if (document.getElementById("translation-menu").style.display == "block" && document.getElementById("menu-toggler").style.display == "block") {
        document.getElementById("translation-menu").style.display = "none";
		document.getElementById("menu-toggler").style.display = "none";
    } else {
		document.getElementById("translation-menu").style.display = "block";
		document.getElementById("menu-toggler").style.display = "block";
    }
  }
};
*/
