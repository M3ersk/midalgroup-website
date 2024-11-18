let products = [
    {
        name: 'SECURITY OFFICERS',
        image1: 'security2.jpg',
        image2: 'security4.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'ESCORT SERVICES',
        image1: 'escort services.jpeg',
        image2: 'escort2.jpeg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'CLEANING SERVICES',
        image1: 'midalcleaning.jpg',
        image2: 'cleaning2.jpeg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'HOSPITALITY SERVICES',
        image1: 'midalhospitality.jpg',
        image2: 'hospitality2.jpeg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'ELECTRONIC SECURITY ',
        image1: 'electronic security services.jpeg',
        image2: 'electronic2.jpeg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'ALARM SYSTEM INSTALLATION',
        image1: 'alarm system.jpeg',
        image2: 'alarm2.jpeg',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))