const logo_section = document.getElementById('logo');
const backtotop = document.getElementById('backtotop');

window.addEventListener('scroll', () => {
	if (window.scrollY > logo_section.offsetHeight) {
		backtotop.style.display = 'block';
		backtotop.style.opacity = 1;
	} else {
		backtotop.style.display = 'none'
		backtotop.style.opacity = 0;
	}
})

let projectsList = [{
	name: 'Star Logger',
	screenshot: 'star-logger.png',
	url: 'https://star-logger.alt-f4-team.xyz'
}, {
	name: 'Alt-F4 API',
	screenshot: 'alt-f4-api.png',
	url: 'https://api.alt-f4-team.xyz'
}]

for (let i = 0; i < projectsList.length; i++) {
	let projects = document.createElement("div")
	projects.className = "project";
	projects.innerHTML = `
          <a target="_blank" href="${projectsList[i]["url"]}">
            <img src="img/${projectsList[i]["screenshot"]}" height="256"></img>
          <p>${projectsList[i]["name"]}</p></a>
          `
	document.getElementById("projects").appendChild(projects)
}
if (projectsList.length === 0) {
	let projects = document.createElement("div");
	projects.innerHTML = '<b>OOF</b><br /><br />There aren\'t any projects yet...';
	document.getElementById("projects").appendChild(projects);
}

backtotop.addEventListener('click', () => {
	window.scrollTo(0, 0)
})
