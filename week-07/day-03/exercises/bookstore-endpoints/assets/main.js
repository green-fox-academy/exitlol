'use strict';

const host = 'http://localhost:3000';
const btn = document.querySelectorAll('button');
const wrapper = document.querySelector('#wrapper');
const table = document.querySelector('table');

//First request for just titles
const http1 = new XMLHttpRequest;

http1.open('GET', 'http://localhost:3000/api/book_titles/', true);
http1.onload = () => {
  let data = JSON.parse(http1.responseText);
  const ulTag = document.createElement('ul');
  wrapper.appendChild(ulTag);
  data.titles.forEach((e) => {
    const listTag = document.createElement('li');
    ulTag.appendChild(listTag).textContent = e.book_name;
  });
}
//Second request for table
const http2 = new XMLHttpRequest;

http2.open('GET', 'http://localhost:3000/api/full_list/', true);
http2.onload = () =>{
  let data = JSON.parse(http2.responseText);
  let headCount = Object.keys(data.fullList[0]);
  const headRow = document.createElement('tr');
  const heading = document.createElement('thead');
  //creating head
  headCount.forEach((item) => {
    table.appendChild(heading)
    heading.appendChild(headRow);
    const tabHead = document.createElement('th');
    headRow.appendChild(tabHead).textContent = item;
  });
  // creating table body
  // 16 rows 5 td
  const tBody = document.createElement('tbody');
  data.fullList.forEach((e) => {
    const bodyRow = document.createElement('tr');
    table.appendChild(tBody);
    tBody.appendChild(bodyRow);
    Object.values(e).forEach((value) => {
      const tabData = document.createElement('td');
      bodyRow.appendChild(tabData).textContent = value;
    })
  });
  console.log(data);
}

btn[0].addEventListener('click', () => {
  http1.send()
})

btn[1].addEventListener('click', () =>{
  http2.send();
});
