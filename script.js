
        // === SAMPLE MENU DATA ===
const MENU = [
  { id:1, category:'Breakfast', name:'Butter Toast', price:50, desc:'Crisp golden toast generously spread with butter.', img:'assets/butterToast.jpg' },
  { id:2, category:'Breakfast', name:'Chhole Bhatura', price:70, desc:'Fluffy bhaturas served with spicy tangy chhole.', img:'assets/Chhole Bhatura.jpg' },
  { id:3, category:'South Indian', name:'Masala Dosa', price:100, desc:'Crispy rice crepe filled with spiced potato masala.', img:'assets/Masala Dosa.jpg' },
  { id:4, category:'South Indian', name:'Idli Sambhar (3 pcs)', price:60, desc:'Soft steamed idlis served with sambar and chutney.', img:'assets/Idli Sambhar.jpg' },
  { id:5, category:'Fast Food', name:'Veg Burger', price:50, desc:'Crunchy veg patty with lettuce, tomato & mayo.', img:'assets/Veg Burger.jpg' },
  { id:6, category:'Starter', name:'French Fries', price:80, desc:'Golden, crispy potato fries served with dip.', img:'assets/French Fries.jpg' },
  { id:7, category:'Pizza', name:'Onion Cheese Pizza', price:180, desc:'Cheesy pizza topped with onion slices.', img:'assets/Onion Cheese Pizza.jpg' },
  { id:8, category:'Pizza', name:'Double Cheese Pizza', price:220, desc:'Classic pizza overloaded with extra cheese.', img:'assets/Double Cheese Pizza.jpg' },
  { id:9, category:'Rice', name:'Veg Briyani', price:140, desc:'Aromatic basmati cooked with veggies', img:'assets/Veg Biryani.jpg' },
  // { id:10, category:'Rice', name:'Paneer Briyani', price:180, desc:'Basmati rice layered with paneer and biryani masala.', img:'assets/Paneer Biryani.jpg' },
  { id:11, category:'Thali', name:'Dal, 4 Type Sabji, Dahi,Salad,Papad, Bread,Pickle,1Pcs. Sweet', price:400, desc:'Premium thali with multiple curries and dessert.', img:'assets/Dal, 4 Type Sabji, Dahi,Salad,Papad, Bread,Pickle,1Pcs. Sweet.jpg' },
  { id:12, category:'Main Course', name:'Paneer Lababdar', price:240, desc:'Creamy paneer curry thali with roti, rice & sides.', img:'assets/Paneer Lababdar Thali.jpg' },
  // { id:13, category:'Dessert', name:'Gulab Jamun (2 pcs)', price:60, desc:'Soft syrupy sweets', img:'assets/Gulab Jamun.jpg' },
  { id:14, category:'Shake', name:'Cold Coffee', price:60, desc:'Tasty Cold Coffee', img:'assets/cold coffee.jpg' },
  { id:15, category:'Breakfast', name:'Chola Puri', price:50, desc:'Deep-fried puris paired with flavorful chole curry.', img:'assets/Chola Puri.jpg' },
  { id:16, category:'Breakfast', name:'Poha Veg', price:50, desc:'Light and healthy flattened rice cooked with veggies and spices', img:'assets/Poha Veg.jpg' },
  { id:17, category:'South Indian', name:'Plain Dosa', price:80, desc:'Classic thin dosa served with coconut chutney and sambar.', img:'assets/Plain Dosa.jpg' },
  { id:18, category:'South Indian', name:'Paneer Dosa', price:120, desc:'Crispy dosa stuffed with flavorful paneer filling.', img:'assets/Paneer Dosa.jpg' },
  { id:19, category:'South Indian', name:'Cheese Dosa', price:150, desc:'Dosa loaded with melted cheese for a rich taste.', img:'assets/Cheese Dosa.jpg' },
  { id:20, category:'South Indian', name:'Butter Dosa', price:120, desc:'Soft dosa coated with melting butter for extra flavor.', img:'assets/Butter Dosa.jpg' },
  { id:21, category:'Starter', name:'Paneer Chilli', price:160, desc:'Fried paneer cubes tossed in spicy Indo-Chinese sauce.', img:'assets/Paneer Chilli.jpg' },
  { id:22, category:'Starter', name:'Paneer Pakoda', price:140, desc:'Gram flour coated paneer fritters deep-fried to perfection.', img:'assets/Paneer Pakoda.jpg' },
  { id:23, category:'Starter', name:'Paneer Tikka', price:250, desc:'Marinated paneer cubes grilled with capsicum and onion', img:'assets/Paneer Tikka.jpg' },
  { id:24, category:'Starter', name:'Veg Pakoda', price:100, desc:'Mixed vegetable fritters served hot and crunchy', img:'assets/Veg Pakoda.jpg' },
  { id:25, category:'Starter', name:'Honey Chilli Potato', price:120, desc:'Crispy potato fingers glazed with honey and chilli sauce.', img:'assets/Honey Chilli Potato.jpg' },
  { id:26, category:'Starter', name:'Chilli Potato', price:120, desc:'Spicy fried potato tossed in tangy chilli sauce.', img:'assets/Chilli Potato.jpg' },
  { id:27, category:'Starter', name:'Gobi Manchurian Dry', price:100, desc:'Fried cauliflower florets coated in spicy dry sauce.', img:'assets/Gobi Manchurian Dry.jpg' },
  { id:28, category:'Starter', name:'Gobi Manchurian Gravy', price:100, desc:'Cauliflower in flavorful Indo-Chinese gravy.', img:'assets/Gobi Manchurian Gravy.jpg' },
  { id:29, category:'Starter', name:'Cheese Manchurian', price:200, desc:'Cheese balls cooked in zesty Manchurian sauce.', img:'assets/Cheese Manchurian.jpg' },
  { id:30, category:'Fast Food', name:'Cheese Burger', price:80, desc:'Juicy burger topped with melted cheese and veggies.', img:'assets/Cheese Burger.jpg' },
  { id:31, category:'Fast Food', name:'Veg. Chowmein', price:60, desc:'Stir-fried noodles with crunchy vegetables.', img:'assets/Veg. Chowmein.jpg' },
  { id:32, category:'Fast Food', name:'Veg. Sandwich', price:50, desc:'Fresh vegetable sandwich with butter and chutney.', img:'assets/Veg. Sandwich.jpg' },
  { id:33, category:'Fast Food', name:'Cheese Sandwich', price:80, desc:'Grilled sandwich stuffed with cheese and veggies.', img:'assets/Cheese Sandwich.jpg' },
  { id:34, category:'Fast Food', name:'Paneer Sandwich', price:80, desc:'Paneer-filled sandwich grilled to perfection.', img:'assets/Paneer Sandwich.jpg' },
  { id:35, category:'Pasta', name:'Red Sauce Pasta', price:100, desc:'Penne tossed in spicy tangy tomato sauce.', img:'assets/Red Sauce Pasta.jpg' },
  { id:36, category:'Pasta', name:'White Sauce Pasta', price:130, desc:'Creamy pasta cooked with cheese and herbs.', img:'assets/White Sauce Pasta.jpg' },
  { id:37, category:'Soup', name:'Veg Soup', price:60, desc:'Warm and healthy mixed vegetable soup.', img:'assets/Veg Soup.jpg' },
  { id:38, category:'Soup', name:'Tomato Soup', price:60, desc:'Creamy and tangy tomato-based soup.', img:'assets/Tomato Soup.jpg' },
  { id:39, category:'Soup', name:'Manchow Soup', price:70, desc:'Spicy Indo-Chinese soup with fried noodles topping.', img:'assets/Manchow Soup.jpg' },
  { id:40, category:'Soup', name:'Cream of Tomato Soup', price:70, desc:'Smooth creamy tomato soup with buttery flavor.', img:'assets/Cream of Tomato Soup.jpg' },
  { id:41, category:'Soup', name:'Hot & Sour  Soup', price:70, desc:'Spicy and tangy soup loaded with veggies.', img:'assets/Hot & Sour Soup.jpg' },
  { id:42, category:'Soup', name:'Mushroom  Soup', price:100, desc:'Creamy soup made with fresh mushrooms and herbs.', img:'assets/Mushroom Soup.jpg' },
  { id:43, category:'Pizza', name:'Capsicum Cheese Pizza', price:180, desc:'Fresh capsicum and cheese on a crispy crust.', img:'assets/Capsicum Cheese Pizza.jpg' },
  { id:44, category:'Pizza', name:'Paneer Cheese Pizza', price:200, desc:'Soft paneer chunks with cheese and pizza sauce.', img:'assets/Paneer Cheese Pizza.jpg' },
  { id:45, category:'Pizza', name:'OTC Pizza', price:200, desc:'Onion, tomato & capsicum loaded pizza.', img:'assets/OTC Pizza.jpg' },
  { id:46, category:'Raita', name:'Veg Raita', price:50, desc:'Curd mixed with chopped vegetables and spices.', img:'assets/Veg Raita.jpg' },
  { id:47, category:'Raita', name:'Fruit Raita', price:80, desc:'Yogurt blended with fresh fruits and mild spices.', img:'assets/Fruit Raita.jpg' },
  { id:48, category:'Raita', name:'Bundi Raita', price:50, desc:'Spiced curd with soaked bundi pearls.', img:'assets/Bundi Raita.jpg' },
  { id:49, category:'Raita', name:'Plain Dahi', price:30, desc:'Fresh homemade curd.', img:'assets/Plain Dahi.jpg' },
  { id:50, category:'Raita', name:'Butter Milk', price:25, desc:'Light and refreshing salted chaas.', img:'assets/Butter Milk.jpg' },
  { id:51, category:'Raita', name:'Salt Lassi', price:40, desc:'Creamy yogurt drink with a salty twist.', img:'assets/Salt Lassi.jpg' },
  { id:52, category:'Raita', name:'Sweet Lassi', price:40, desc:'Thick and sweetened yogurt drink.', img:'assets/Sweet Lassi.jpg' },
  { id:53, category:'Raita', name:'Masala Chach', price:30, desc:'Spiced buttermilk flavored with herbs.', img:'assets/Masala Chach.jpg' },
  { id:54, category:'Raita', name:'Dahi Fry', price:50, desc:'Seasoned curd tempered with ghee and spices.', img:'assets/Dahi Fry.jpg' },
  { id:55, category:'Rice', name:'Steamed Rice', price:70, desc:'Plain fluffy steamed basmati rice.', img:'assets/Steamed Rice.jpg' },
  { id:56, category:'Rice', name:'Veg Fried Rice', price:100, desc:'Stir-fried rice with mixed vegetables and soy flavor.', img:'assets/Veg Fried Rice.jpg' },
  { id:57, category:'Rice', name:'Green Peas Pulao', price:100, desc:'Fragrant rice cooked with green peas and spices.', img:'assets/Green Peas Pulao.jpg' },
  { id:58, category:'Rice', name:'Zeera Rice', price:100, desc:'Rice flavored with cumin seeds and ghee.', img:'assets/Zeera Rice.jpg' },
  { id:59, category:'Rice', name:'Paneer Peas Pulao', price:150, desc:'Basmati rice with paneer cubes and green peas.', img:'assets/Paneer Peas Pulao.jpg' },
  { id:60, category:'Papad', name:'Roasted Papad', price:20, desc:'Crunchy roasted lentil papad.', img:'assets/Roasted Papad.jpg' },
  { id:61, category:'Papad', name:'Fry Papad', price:30, desc:'Deep-fried crispy papad.', img:'assets/Fry Papad.jpg' },
  { id:62, category:'Papad', name:'Masala Papad', price:40, desc:'Papad topped with onion, tomato, and spices.', img:'assets/Masala Papad.jpg' },
  { id:63, category:'Salad', name:'Green Salad', price:50, desc:'Fresh seasonal vegetables with salt & lemon.', img:'assets/Green Salad.jpg' },
  { id:64, category:'Salad', name:'Onion Salad', price:30, desc:'Sliced onions served with lemon and salt.', img:'assets/Onion Salad.jpg' },
  { id:65, category:'Salad', name:'Kachumber Salad', price:60, desc:'Diced cucumber, tomato, onion mixed with spices.', img:'assets/Kachumber Salad.jpg' },
  { id:66, category:'Shake', name:'Cold Coffee with ice-cream', price:60, desc:'Iced coffee topped with a scoop of vanilla ice-cream.', img:'assets/Cold Coffee with ice-cream.jpg' },
  { id:67, category:'Shake', name:'Chocalate Shake', price:70, desc:'Thick chocolate milkshake topped with cream.', img:'assets/Chocalate Shake.jpg' },
  { id:68, category:'Shake', name:'Vanilla Shake', price:90, desc:'Classic vanilla-flavored chilled milkshake.', img:'assets/Vanilla Shake.jpg' },
  { id:69, category:'Shake', name:'Strawberry Shake', price:80, desc:'Sweet pink shake made with strawberry flavor.', img:'assets/Strawberry Shake.jpg' },
  { id:70, category:'Bread', name:'Tawa Roti', price:10, desc:'Soft whole wheat roti cooked on tawa.', img:'assets/Tawa Roti.jpg' },
  { id:71, category:'Bread', name:'Tawa Butter Roti', price:15, desc:'Roti brushed with butter for rich taste.', img:'assets/Tawa Butter Roti.jpg' },
  { id:72, category:'Bread', name:'Tandoori Roti Plain', price:15, desc:'Clay oven-baked roti with smoky flavor.', img:'assets/Tandoori Roti Plane.jpg' },
  { id:73, category:'Bread', name:'Tandoori Roti Butter', price:20, desc:'Buttery version of tandoori roti.', img:'assets/Tandoori Roti Butter.jpg' },
  { id:74, category:'Bread', name:'Butter Naan', price:30, desc:'Soft naan brushed with butter.', img:'assets/Butter Naan.jpg' },
  { id:75, category:'Bread', name:'Aloo Paratha', price:50, desc:'Paratha stuffed with spiced mashed potatoes.', img:'assets/Aloo Paratha.jpg' },
  { id:76, category:'Bread', name:'Garlic Naan', price:40, desc:'Naan topped with garlic and butter.', img:'assets/Garlic Naan.jpg' },
  { id:77, category:'Bread', name:'Stuff Paratha', price:60, desc:'Mixed vegetable stuffed paratha.', img:'assets/Stuff Paratha.jpg' },
  { id:78, category:'Bread', name:'Plain Paratha', price:25, desc:'Classic layered plain paratha.', img:'assets/Plain Paratha.jpg' },
  { id:79, category:'Bread', name:'Butter Paratha', price:40, desc:'Buttery and flaky layered paratha.', img:'assets/Butter Paratha.jpg' },
  { id:80, category:'Bread', name:'Paneer Paratha', price:80, desc:'Paratha filled with spiced paneer stuffing.', img:'assets/Paneer Paratha.jpg' },
  { id:81, category:'Bread', name:'Stuff Naan', price:70, desc:'Naan filled with spicy stuffing.', img:'assets/Stuff Naan.jpg' },
  { id:82, category:'Bread', name:'Laccha Paratha', price:40, desc:'Multi-layered crispy paratha.', img:'assets/Laccha Paratha.jpg' },
  { id:83, category:'Bread', name:'Balaji Paratha', price:80, desc:'Special house-style paratha with unique filling.', img:'assets/Balaji Paratha.jpg' },
  { id:84, category:'Bread', name:'Missi Roti', price:40, desc:'Gram flour-based spiced Indian bread.', img:'assets/Missi Roti.jpg' },
  { id:85, category:'Main Course', name:'Dal Fry', price:100, desc:'Yellow dal tempered with ghee and spices.', img:'assets/Dal Fry.jpg' },
  { id:86, category:'Main Course', name:'Garlic Dal', price:130, desc:'Dal flavored with roasted garlic tadka.', img:'assets/Garlic Dal.jpg' },
  { id:87, category:'Main Course', name:'Dal Makkhani', price:150, desc:'Slow-cooked creamy black lentils.', img:'assets/Dal Makkhani.jpg' },
  { id:88, category:'Main Course', name:'Dal Tadka', price:130, desc:'Mixed dal topped with spiced ghee tadka.', img:'assets/Dal Tadka.jpg' },
  { id:89, category:'Main Course', name:'Aloo Matar', price:100, desc:'Potatoes and peas cooked in tomato gravy.', img:'assets/Aloo Matar.jpg' },
  { id:90, category:'Main Course', name:'Aloo Gobhi', price:100, desc:'Cauliflower and potato curry with Indian spices.', img:'assets/Aloo Gobhi.jpg' },
  { id:91, category:'Main Course', name:'Aloo Palak', price:100, desc:'Spinach curry with tender potato cubes.', img:'assets/Aloo Palak.jpg' },
  { id:92, category:'Main Course', name:'Paneer Masala', price:170, desc:'Cottage cheese in spiced tomato gravy.', img:'assets/Paneer Masala.jpg' },
  { id:93, category:'Main Course', name:'Matar Paneer', price:170, desc:'Paneer and green peas in rich masala sauce.', img:'assets/Matar Paneer.jpg' },
  { id:94, category:'Main Course', name:'Paneer Butter Masala', price:180, desc:'Creamy paneer curry with buttery tomato sauce.', img:'assets/Paneer Butter Masala.jpg' },
  { id:95, category:'Main Course', name:'Paneer Makkhawala', price:200, desc:'Paneer simmered in buttery makhani gravy.', img:'assets/Paneer Makkhawala.jpg' },
  { id:96, category:'Main Course', name:'Paneer Tikka Masala', price:200, desc:'Grilled paneer cooked in spicy tikka gravy.', img:'assets/Paneer Tikka Masala.jpg' },
  { id:97, category:'Main Course', name:'Paneer Burji', price:220, desc:'Scrambled paneer sautéed with onion and spices.', img:'assets/Paneer Burji.jpg' },
  { id:98, category:'Main Course', name:'Shahi Paneer Masala', price:200, desc:'Royal creamy curry made with paneer and cashew.', img:'assets/Shahi Paneer Masala.jpg' },
  { id:99, category:'Main Course', name:'Kadai Paneer', price:200, desc:'Paneer cubes tossed with bell peppers in kadai masala.', img:'assets/Kadai Paneer.jpg' },
  { id:100, category:'Main Course', name:'Khoya Paneer', price:220, desc:'Paneer cooked in rich khoya-based gravy.', img:'assets/Khoya Paneer.jpg' },
  { id:101, category:'Main Course', name:'Paneer Manchurian', price:180, desc:'Indo-Chinese curry with paneer in spicy sauce.', img:'assets/Paneer Manchurian.jpg' },
  { id:102, category:'Main Course', name:'Mushroom Masala', price:170, desc:'Mushroom cooked in flavorful Indian spices.', img:'assets/Mushroom Masala.jpg' },
  { id:103, category:'Main Course', name:'Palak Paneer', price:150, desc:'Paneer cubes in creamy spinach gravy.', img:'assets/Palak Paneer.jpg' },
  { id:104, category:'Main Course', name:'Malai Kofta', price:220, desc:'Soft paneer dumplings in creamy gravy.', img:'assets/Malai Kofta.jpg' },
  { id:105, category:'Main Course', name:'Veg Kofta', price:150, desc:'Vegetable balls in spiced tomato curry.', img:'assets/Veg Kofta.jpg' },
  { id:106, category:'Main Course', name:'Veg Kofta Masala', price:150, desc:'Rich curry with stuffed veg kofta.', img:'assets/Veg Kofta Masala.jpg' },
  { id:107, category:'Main Course', name:'Paneer Kofta', price:200, desc:'Paneer balls cooked in creamy cashew gravy.', img:'assets/Paneer Kofta.jpg' },
  { id:108, category:'Main Course', name:'Kaju Curry', price:220, desc:'Cashew nuts cooked in aromatic masala.', img:'assets/Kaju Curry.jpg' },
  { id:109, category:'Main Course', name:'Nargisi Kofta', price:180, desc:'Egg-shaped kofta filled with spiced paneer mix.', img:'assets/Nargisi Kofta.jpg' },
  { id:110, category:'Main Course', name:'Gatta Masala', price:150, desc:'Rajasthani besan gatta in tangy curry.', img:'assets/Gatta Masala.jpg' },
  { id:111, category:'Main Course', name:'Ker Sangri', price:250, desc:'Rajasthani dried berries and beans cooked with spices.', img:'assets/Ker Sangri.jpg' },
  { id:112, category:'Main Course', name:'Aloo Chola', price:100, desc:'Potato and chickpea curry with tangy flavor.', img:'assets/Aloo Chola.jpg' },
  { id:113, category:'Main Course', name:'Mix Veg', price:130, desc:'Seasonal vegetables cooked in spiced gravy.', img:'assets/Mix Veg.jpg' },
  { id:114, category:'Main Course', name:'Dum Aloo Kashmiri', price:180, desc:'Baby potatoes in creamy Kashmiri gravy.', img:'assets/Dum Aloo Kashmiri.jpg' },
  { id:115, category:'Main Course', name:'Paneer Mushroom', price:180, desc:'Paneer and mushroom in thick masala gravy.', img:'assets/Paneer Mushroom.jpg' },
  { id:116, category:'Main Course', name:'Paneer Pasanda', price:300, desc:'Rich stuffed paneer curry with royal touch.', img:'assets/Paneer Pasanda.jpg' },
  { id:117, category:'Main Course', name:'Sev Tomato', price:100, desc:'Tangy tomato curry topped with crispy sev.', img:'assets/Sev Tomato.jpg' },
  { id:118, category:'Main Course', name:'Veg Kolahpuri', price:120, desc:'Spicy mixed veg curry in Kolhapuri style.', img:'assets/Veg Kolahpuri.jpg' },
  { id:119, category:'Main Course', name:'Corn Palak', price:150, desc:'Corn and spinach cooked in mild creamy gravy.', img:'assets/Corn Palak.jpg' },
  { id:120, category:'Main Course', name:'Veg Hyderabadi', price:150, desc:'Spicy Hyderabadi-style vegetable curry.', img:'assets/Veg Hyderabadi.jpg' },
  { id:121, category:'Main Course', name:'Garlic Chutney', price:50, desc:'Fiery red chutney made with garlic and spices.', img:'assets/Garlic Chutney.jpg' },
  { id:122, category:'Main Course', name:'Bhindi Masala', price:100, desc:'Stir-fried okra with onions and spices.', img:'assets/Bhindi Masala.jpg' },
  { id:123, category:'Thali', name:'Dal, Mix Veg, Dahi,Salad,Five Roti', price:140, desc:'Balanced thali with dal, mix veg, curd & roti.', img:'assets/Dal, Mix Veg, Dahi,Salad,Five Roti.jpg' },
  { id:124, category:'Thali', name:'Dal, 3 Type Sabji, Dahi,Salad,Papad,Two Type Bread,Pickle', price:250, desc:'Rich thali with variety of sabjis, roti & sides.', img:'assets/Dal, 3 Type Sabji, Dahi,Salad,Papad,Two Type Bread,Pickle.jpg' },
];

        let cart = [];

        // Category & Menu Rendering (same as before)
        const categories = ['All', ...new Set(MENU.map(i => i.category))];
        const categoriesEl = document.getElementById('categories');
        const menuGrid = document.getElementById('menu-grid');
        const search = document.getElementById('search');

        categories.forEach((cat, idx) => {
            const btn = document.createElement('button');
            btn.textContent = cat;
            if (idx === 0) btn.classList.add('active');
            btn.addEventListener('click', () => {
                document.querySelectorAll('.categories button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterAndRender(cat === 'All' ? null : cat);
            });
            categoriesEl.appendChild(btn);
        });

        function render(items) {
            menuGrid.innerHTML = '';
            if (!items.length) {
                menuGrid.innerHTML = '<div style="text-align:center; padding:40px; color:#666;">No matches found</div>';
                return;
            }
            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="img-box"><img src="\( {item.img}" alt=" \){item.name}"></div>
                    <div class="card-body">
                        <div class="title">${item.name}</div>
                        <div class="desc">${item.desc}</div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
                            <div class="price">₹${item.price}</div>
                            <button class="add-btn" onclick="addToCart(${item.id})">ADD</button>
                        </div>
                    </div>
                `;
                menuGrid.appendChild(card);
            });
        }

        function filterAndRender(cat = null) {
            const q = search.value.toLowerCase();
            let filtered = MENU.filter(item => {
                const matchCat = !cat || item.category === cat;
                const matchSearch = !q || (item.name + item.desc + item.category).toLowerCase().includes(q);
                return matchCat && matchSearch;
            });
            render(filtered);
        }

        function addToCart(id) {
            const item = MENU.find(i => i.id === id);
            const existing = cart.find(i => i.id === id);
            if (existing) existing.quantity = (existing.quantity || 1) + 1;
            else cart.push({ ...item, quantity: 1 });
            updateCartUI();
        }

        function updateCartUI() {
            const totalItems = cart.reduce((sum, i) => sum + (i.quantity || 1), 0);
            const totalPrice = cart.reduce((sum, i) => sum + i.price * (i.quantity || 1), 0);
            document.querySelector('.cart-items').textContent = `${totalItems} Items`;
            document.querySelector('.cart-total').textContent = `₹${totalPrice}`;
        }

        function showCart() {
            const container = document.getElementById('cartItems');
            container.innerHTML = '';
            let total = 0;

            if (cart.length === 0) {
                container.innerHTML = '<p style="text-align:center; padding:40px; color:#666;">Your cart is empty</p>';
            } else {
                cart.forEach((item, index) => {
                    const qty = item.quantity || 1;
                    total += item.price * qty;
                    const div = document.createElement('div');
                    div.className = 'cart-item';
                    div.innerHTML = `
                        <div style="flex:1;">
                            <div style="font-weight:600;">${item.name}</div>
                            <div style="color:#666; font-size:0.9rem;">₹${item.price} × ${qty}</div>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <button class="quantity-btn" onclick="changeQty(${index}, -1)">–</button>
                            <span style="font-weight:600; min-width:20px; text-align:center;">${qty}</span>
                            <button class="quantity-btn" onclick="changeQty(${index}, 1)">+</button>
                            <button onclick="removeFromCart(${index})" style="margin-left:15px; color:#e11d48; background:none; border:none; font-size:1.2rem;">🗑</button>
                        </div>
                    `;
                    container.appendChild(div);
                });
            }

            document.getElementById('modalTotal').textContent = `₹${total}`;
            document.getElementById('cartModal').style.display = 'flex';
        }

        function changeQty(index, change) {
            cart[index].quantity = (cart[index].quantity || 1) + change;
            if (cart[index].quantity < 1) cart.splice(index, 1);
            showCart();
            updateCartUI();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            showCart();
            updateCartUI();
        }

        function closeCart() {
            document.getElementById('cartModal').style.display = 'none';
        }

        function placeOrder() {
            if (cart.length === 0) return;
            alert(`🎉 Order Placed Successfully!\nTotal: ₹${cart.reduce((sum, i) => sum + i.price * (i.quantity||1), 0)}\nThank you for ordering at Shree Balaji Cafe!`);
            cart = [];
            updateCartUI();
            closeCart();
        }

        // Search
        let timer;
        search.addEventListener('input', () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const active = document.querySelector('.categories button.active');
                const cat = active && active.textContent !== 'All' ? active.textContent : null;
                filterAndRender(cat);
            }, 250);
        });

        // Load
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
                document.getElementById('app').classList.remove('hidden');
                filterAndRender();
            }, 800);
        });
    
