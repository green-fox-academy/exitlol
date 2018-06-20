'use strict';

let image = document.querySelector('img');
console.log(image.src);

image.src = 'http://eastchapelhillobserver.com/wp-content/uploads/2017/03/magaizine-spring-2016-orca-dave-ellifrit-center-for-whale-research-nmfs-permit-15569-dfo-sara-272_.jpg';
image.style.display = 'block';

let link = document.querySelector('a');
link.href = 'https://www.greenfoxacademy.com/';

let leButton = document.querySelector('.this-one');
leButton.disabled = true;
leButton.textContent = 'Don\'t click me!';
