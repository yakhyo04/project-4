const list_items = [
    {
        id: 1,
        image: '../media/Images/PNG/product-1.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 2,
        image: '../media/Images/PNG/product-2.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 3,
        image: '../media/Images/PNG/product-3.jpg',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 4,
        image: '../media/Images/PNG/product-1.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 5,
        image: '../media/Images/PNG/product-2.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 6,
        image: '../media/Images/PNG/product-3.jpg',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 7,
        image: '../media/Images/PNG/product-2.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 8,
        image: '../media/Images/PNG/product-1.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 9,
        image: '../media/Images/PNG/product-1.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 10,
        image: '../media/Images/PNG/product-3.jpg',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 11,
        image: '../media/Images/PNG/product-1.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 12,
        image: '../media/Images/PNG/product-2.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 13,
        image: '../media/Images/PNG/product-3.jpg',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 14,
        image: '../media/Images/PNG/product-1.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 15,
        image: '../media/Images/PNG/product-2.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 16,
        image: '../media/Images/PNG/product-3.jpg',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 17,
        image: '../media/Images/PNG/product-2.png',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
    {
        id: 18,
        image: '../media/Images/PNG/product-3.jpg',
        name: 'Product Name',
        item: "Brand Name",
        type: 'New',
        cart: '../media/Images/SVG/heart.svg',
        price: '$879.00'
    },
];



const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 6;

function DisplayList (items, wrapper, rows_per_page, page,) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);


	for (let i = 0; i < paginatedItems.length ; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
        let item_text = document.createElement('p');
        let item_title = document.createElement('h2');
        let item_image = document.createElement('img');
        let item_name = document.createElement('p');
        let item_icons = document.createElement('ul');
        let item_icon = document.createElement('li');
        let item_icon2 = document.createElement('li');
        let item_icon3 = document.createElement('li');
        let item_icon_image = document.createElement('img');
        let item_icon2_image = document.createElement('img');
        let item_icon3_image = document.createElement('img');
        let item_type = document.createElement('p');
        let item_cart = document.createElement('img');
		item_element.classList.add('item');

        item_icons.className = 'item__icons';
		// item_element.innerText = item.id;
        // item_element.className = 'list__item';
        item_icon_image.src = '../media/Images/SVG/icon-1.svg';
        item_icon2_image.src = '../media/Images/SVG/icon-2.svg';
        item_icon3_image.src = '../media/Images/SVG/icon-3.svg';
		item_text.innerText = item.price;
        item_title.innerText = item.item;
        item_type.innerText = item.type;
        item_cart.src = item.cart;
        item_image.src = item.image;
        item_name.innerText = item.name;
        item_image.className = 'item__image';
        item_text.className = 'item__text';
        item_title.className = 'item__title';
        item_name.className = 'item__name';
        item_type.className = 'item_type';
        item_cart.className = 'item_cart';
		wrapper.appendChild(item_element);
        item_icon.appendChild(item_icon_image);
        item_icon2.appendChild(item_icon2_image);
        item_icon3.appendChild(item_icon3_image);
        item_icons.appendChild(item_icon);
        item_icons.appendChild(item_icon2);
        item_icons.appendChild(item_icon3);
        item_element.appendChild(item_type);
        item_element.appendChild(item_cart);
		item_element.appendChild(item_image);
        item_element.appendChild(item_icons);
		item_element.appendChild(item_title);
		item_element.appendChild(item_name);
		item_element.appendChild(item_text);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);
		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);


const filter = document.querySelector('.filter');
const accordion = document.querySelector('.accordion__div');

filter.addEventListener('click', function(){
    if(accordion.style.display === 'none'){
        accordion.style.display = 'block';
    }else{
        accordion.style.display = 'none';
    }
})


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}