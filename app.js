const dummyText = [
    'Cotton candy bear claw bear claw jelly beans gummies. Gummies powder jelly pastry sweet roll. Caramels caramels sesame snaps marzipan powder cheesecake cake. Gummi bears lollipop liquorice jelly-o sweet candy carrot cake. Halvah cupcake marzipan icing topping chocolate bar wafer jelly-o. Tiramisu gummi bears ice cream tart bear claw marshmallow sweet sweet cupcake. Marzipan gingerbread carrot cake gummi bears brownie cotton candy pastry. Pastry marzipan dragée candy brownie oat cake cookie macaroon apple pie. Sugar plum topping gummies danish marshmallow cupcake powder cake chocolate bar. Halvah chocolate cake cotton candy cheesecake chocolate bar. Cake gummies gummies icing topping chocolate cake. Powder tart macaroon chocolate cake oat cake jelly cake.',

    'Cotton candy bear claw bear claw jelly beans gummies. Gummies powder jelly pastry sweet roll. Caramels caramels sesame snaps marzipan powder cheesecake cake. Gummi bears lollipop liquorice jelly-o sweet candy carrot cake. Halvah cupcake marzipan icing topping chocolate bar wafer jelly-o. Tiramisu gummi bears ice cream tart bear claw marshmallow sweet sweet cupcake. Marzipan gingerbread carrot cake gummi bears brownie cotton candy pastry. Pastry marzipan dragée candy brownie oat cake cookie macaroon apple pie. Sugar plum topping gummies danish marshmallow cupcake powder cake chocolate bar. Halvah chocolate cake cotton candy cheesecake chocolate bar. Cake gummies gummies icing topping chocolate cake. Powder tart macaroon chocolate cake oat cake jelly cake.',

    'Cotton candy dessert bonbon halvah jelly gingerbread lollipop brownie caramels. Muffin biscuit shortbread fruitcake cake. Chocolate cake apple pie icing sweet roll brownie. Chocolate tootsie roll cupcake icing bear claw powder. Sweet roll chocolate bar liquorice lemon drops chupa chups. Pastry cake shortbread sweet roll gummies danish fruitcake icing marshmallow. Wafer lollipop croissant carrot cake jujubes gummi bears topping croissant tiramisu. Tootsie roll shortbread cookie bonbon powder marshmallow. Fruitcake topping soufflé pudding liquorice. Icing pudding bear claw bear claw cake. Tootsie roll sugar plum shortbread marzipan jelly jelly-o. Soufflé jelly beans soufflé apple pie muffin tootsie roll caramels. Chocolate cake chocolate cake candy cupcake donut.',
    'Oat cake cake bonbon sweet roll soufflé sweet roll oat cake lemon drops. Macaroon danish dessert caramels cake jujubes sesame snaps ice cream jujubes. Macaroon cake lollipop bonbon toffee. Powder wafer pie lemon drops liquorice. Lemon drops icing muffin powder donut marshmallow lollipop jelly-o. Lollipop brownie dragée bear claw chupa chups. Brownie sweet topping gingerbread liquorice muffin oat cake carrot cake pie. Sweet dessert caramels pastry chocolate cake gummi bears lollipop powder. Jelly cake soufflé donut cotton candy caramels apple pie jelly. Halvah chocolate chocolate candy tiramisu toffee. Cheesecake cake topping dragée dessert lemon drops topping soufflé. Chocolate cake icing pudding bear claw cake. Macaroon sesame snaps cupcake lemon drops chocolate cookie biscuit brownie.',

    'Carrot cake sweet roll caramels muffin sweet roll topping jelly danish. Apple pie soufflé caramels apple pie marzipan caramels. Toffee chocolate cake cotton candy cheesecake toffee. Donut carrot cake dragée chocolate bar ice cream cheesecake danish pudding. Candy chocolate cake pie gummi bears chocolate cake gummies ice cream marzipan. Lollipop danish jujubes sugar plum cookie liquorice sweet roll sweet roll cake. Jelly beans sweet croissant dragée chocolate cake tiramisu chocolate bar shortbread. Carrot cake oat cake cotton candy gummies powder. Muffin toffee powder oat cake pastry candy sugar plum. Gummies candy powder bear claw cheesecake. Cake sweet roll jelly-o lemon drops cupcake. Tiramisu halvah apple pie macaroon soufflé apple pie. Apple pie tart toffee chocolate cupcake lollipop pastry.',

    'Gummies cotton candy donut jelly-o gummi bears shortbread jujubes. Ice cream fruitcake jelly chocolate cake carrot cake toffee chupa chups pastry carrot cake. Pastry chocolate shortbread pastry jelly-o croissant cheesecake sweet roll toffee. Halvah candy canes donut chupa chups tiramisu sesame snaps gummies lemon drops. Icing gingerbread lemon drops halvah sweet roll bear claw caramels. Caramels halvah carrot cake cake cake. Biscuit shortbread chupa chups candy fruitcake. Sesame snaps tootsie roll dragée carrot cake candy carrot cake cookie soufflé fruitcake. Jelly beans danish sugar plum sweet roll halvah. Brownie toffee wafer cookie chocolate bar caramels. Cotton candy oat cake bonbon jelly cake lemon drops carrot cake chocolate cake. Macaroon dragée marzipan cake sweet jelly sweet chocolate.',

    'Marshmallow tart soufflé wafer lemon drops. Powder lemon drops sesame snaps gingerbread tart marshmallow croissant. Tart jujubes tootsie roll gummies oat cake marzipan jelly-o danish. Carrot cake cotton candy pudding jelly tart jelly beans. Cookie cookie halvah gummies oat cake halvah jelly-o. Danish lollipop gummi bears soufflé macaroon gingerbread cheesecake topping. Jelly-o ice cream brownie icing cupcake. Dessert carrot cake apple pie tootsie roll dragée cotton candy shortbread. Topping topping liquorice tiramisu sugar plum sweet roll lollipop. Ice cream wafer gingerbread sweet marzipan candy canes chocolate. Toffee oat cake bear claw chupa chups marzipan. Marshmallow gingerbread gummies cake tootsie roll chupa chups cookie.',

    'Jelly marshmallow jujubes apple pie pudding sesame snaps bear claw. Wafer cake toffee gingerbread sweet pastry cookie. Candy marshmallow ice cream carrot cake toffee pie bonbon tart. Pastry biscuit ice cream tootsie roll fruitcake danish. Sweet sugar plum candy candy canes jelly chocolate cake. Caramels apple pie gummi bears cake fruitcake gingerbread cupcake. Gummi bears ice cream sugar plum apple pie halvah cake halvah chocolate cake pastry. Bonbon marzipan cotton candy pie jujubes danish halvah lemon drops caramels. Gummies macaroon muffin bonbon chupa chups cake biscuit. Toffee brownie pudding chupa chups jujubes tart jelly gummi bears jujubes. Sweet roll chupa chups fruitcake dessert apple pie. Bonbon sweet chocolate bar chupa chups gummi bears brownie apple pie biscuit.',

    'Tiramisu wafer jelly beans shortbread lemon drops icing. Brownie cotton candy topping gummies ice cream. Bear claw tootsie roll carrot cake soufflé chocolate. Tootsie roll dessert cake wafer sesame snaps dragée cookie tootsie roll gummies. Carrot cake dessert cake jelly beans wafer pastry croissant soufflé. Sesame snaps donut halvah ice cream wafer. Gummies tart lemon drops chocolate powder. Dragée jujubes cake cotton candy gummies donut chocolate cake muffin cheesecake. Sweet roll sweet roll icing dragée icing muffin. Brownie powder pastry lemon drops pudding pudding brownie fruitcake liquorice. Tiramisu marshmallow cupcake macaroon sugar plum oat cake sugar plum croissant cheesecake. Icing tart toffee bear claw topping gummi bears.',

    'Muffin croissant danish topping chocolate. Candy canes chupa chups gummi bears tiramisu cake chocolate bar. Liquorice halvah lemon drops bear claw dessert dragée tootsie roll jujubes. Icing tiramisu cotton candy wafer dragée halvah. Chocolate cake gummi bears jelly biscuit halvah sesame snaps. Jelly halvah donut lollipop icing donut biscuit cupcake. Ice cream danish brownie jelly-o pastry biscuit dessert jelly-o. Chocolate cupcake sweet roll pie dessert cookie bear claw chocolate bar. Cookie dessert pastry chocolate bar lollipop. Gummi bears lemon drops marzipan jelly gummi bears. Gummies tootsie roll halvah fruitcake pie. Marshmallow oat cake cheesecake tootsie roll icing marzipan caramels marzipan. Marshmallow chocolate gummies candy canes sweet. Croissant sweet roll apple pie tootsie roll biscuit macaroon toffee.'
];

// selecting elements
const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');
const text = document.querySelector('text');
const btn = document.querySelector('#btn');




// event listener
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * dummyText.length);

    // for empty, negative, greater than 10
    if (isNaN(value) || value <= 0 || value > 10) {
        result.innerHTML = `
         <div style="background-color:#c7ecee" class="singleDummy">
        <p class="text" readOnly>${dummyText[random]}</p>
        </div>
        <p class="text-white">${`Please choose your number 1 - 10`}</p> `       
        ;
    }
    else {
        const slicedArray = dummyText.slice(0, value);
        const finalArray = slicedArray.map(function (singleDummy) {
            return `<div style="background-color:#c7ecee" class="singleDummy">
            <p class="text">${singleDummy}</p>
            
            </div>`
        }).join('');
        // console.log(finalArray);
        result.innerHTML = finalArray;
    }
});
{/* <button class="btn-dark rounded ">Copy</button> */}