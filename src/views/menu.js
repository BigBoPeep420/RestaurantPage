import "../styles/views/menu.css";
import { default as dailySpecials } from "../components/dailySpecials/dailySpecials.js";

const menuOptions = {
  "Main Courses": [
    {
      name: "Salt-Cured Duck Breast",
      desc:
        `Precision-cooked duck with an ultra-rendered, crispy skin, drizzled with ` +
        `a spiced plum reduction and toasted sesame seeds`,
      price: 19.95,
      allergens: "Sesame",
    },
    {
      name: "Venison Saddle",
      desc:
        "48-hour tenderized venison, seared in juniper-infused butter and served with " +
        "a reduction of wild huckleberries and parsnip silk",
      price: 18.95,
      allergens: "Dairy (Butter)",
    },
    {
      name: "Root Vegetable Pavé",
      desc:
        `Compressed layers of thinly sliced potatoes and carrots, sous-vide with garlic ` +
        `confit and thyme, then seared until golden and structural`,
      price: 15.95,
      allergens: "Dairy (Cream)",
    },
    {
      name: "Pacific Drift Octopus",
      desc:
        "Slow-bathed for 5 hours to achieve a buttery texture, then flash-charred and " +
        "drizzled with a smoked lemon and Spanish paprika gastrique",
      price: 22.95,
      allergens: "Mollusks",
    },
    {
      name: "Sous-Steak Cauliflower",
      desc:
        `A thick-cut "steak" of heirloom cauliflower, vacuum-infused with truffle ` +
        `oil and herbs, then pan-seared and topped with toasted hazelnut crumble`,
      price: 16.95,
      allergens: "Tree Nuts (Hazelnuts)",
    },
    {
      name: 'Lamb Rack "Provencal"',
      desc:
        `A vibrant pink lamb rack encased in a crust of Dijon and vacuum-infused ` +
        `herbs, served with a mint-infused pea purée`,
      price: 21.95,
      allergens: "Mustard",
    },
    {
      name: "Miso-Infused Black Cod",
      desc:
        `Silky black cod marinated in white miso and sake, sous-vide to flaky ` +
        `perfection and finished with a torch-singed skin`,
      price: 19.95,
      allergens: "Fish, Soy",
    },
    {
      name: "Sous-Fried Chicken Thighs",
      desc:
        `The ultimate crunch. Thighs cooked to perfect juiciness at 165°F, then ` +
        `double-dredged in seasoned flour and flash-fried for a glass-like crust`,
      price: 17.95,
      allergens: "Wheat/Gluten, Eggs (Dredge), Dairy (Buttermilk)",
    },
    {
      name: "Herb Garden Loin",
      desc:
        `Pork loin vacuum-sealed with a bouquet of garden-fresh sage, rosemary, ` +
        `and thyme, finished with a hard sear and a bright apple-cider glaze`,
      price: 21.95,
      allergens: null,
    },
    {
      name: "24hr Short Rib",
      desc:
        `Beef short rib cooked for a full day until it reaches a medium-rare ` +
        `steak texture, glazed in a red wine demi-glace with marrow toast`,
      price: 22.95,
      allergens: "Wheat/Gluten (Toast)",
    },
    {
      name: "Butter-Poached Lobster",
      desc:
        `Succulent Atlantic tail poached at 130°F inside a vacuum seal with clarified ` +
        `butter and tarragon, served over a bed of saffron risotto`,
      price: 24.95,
      allergens: "Shellfish, Dairy",
    },
    {
      name: "145° Egg Carbonara",
      desc:
        `Fresh pasta tossed in guanciale and pecorino, topped with a sous-vide egg that ` +
        `bursts to create a rich, silken sauce at the table`,
      price: 15.95,
      allergens: "Eggs, Wheat/Gluten, Dairy",
    },
  ],
  Sides: [
    {
      name: "Compressed Watermelon & Feta",
      desc:
        `Vacuum-sealed watermelon cubes that become dense and "meaty," tossed with fresh ` +
        `mint, lime zest, and crumbled sheep's milk feta`,
      price: 8.95,
      allergens: "Dairy",
    },
    {
      name: "Truffle-Infused Wild Mushrooms",
      desc:
        `A mix of shiitake, oyster, and cremini mushrooms sous-vide in a bag of black ` +
        `truffle butter and thyme, then finished in a screaming-hot cast iron pan`,
      price: 10.95,
      allergens: "Dairy",
    },
    {
      name: "Honey-Glazed Heirloom Carrots",
      desc:
        `Rainbow carrots cooked in their own juices with a touch of wildflower honey ` +
        `and ginger, finished with a carrot-top pesto`,
      price: 7.95,
      allergens: null,
    },
    {
      name: "Garlic-Confit Smashed Potatoes",
      desc:
        `Red potatoes slow-cooked with whole garlic cloves in olive oil until creamy, ` +
        `then smashed and seared until the edges are shatteringly crisp`,
      price: 7.95,
      allergens: null,
    },
    {
      name: "Vacuum-Chilled Asparagus",
      desc:
        `Snap-fresh asparagus stalks flash-cooked and immediately chilled, served with ` +
        `a velvety lemon-hollandaise drizzle`,
      price: 8.95,
      allergens: "Eggs, Dairy",
    },
    {
      name: "Smoked Gouda Polenta",
      desc:
        `Coarse-ground cornmeal cooked sous-vide for a perfectly consistent texture, folded ` +
        `with aged smoked gouda and chives`,
      price: 9.95,
      allergens: "Dairy",
    },
    {
      name: "Miso-Maple Brussels Sprouts",
      desc:
        `Halved sprouts infused with white miso and maple syrup, then roasted at high heat for ` +
        `a salty-sweet charred finish`,
      price: 8.95,
      allergens: "Soy",
    },
    {
      name: "Charred Leeks with Romesco",
      desc:
        `The white hearts of leeks tenderized in a water bath and then charred on the grill, served over ` +
        `a bold, roasted red pepper and almond sauce`,
      price: 8.95,
      allergens: "Tree Nuts (Almonds)",
    },
  ],
  Appetizers: [
    {
      name: "Vacuum-Compressed Caprese Skewers",
      desc:
        `Heirloom tomatoes compressed to a "steak-like" density, paired with sous-vide infused basil oil, ` +
        `buffalo mozzarella, and a balsamic reduction`,
      price: 9.95,
      allergens: "Dairy",
    },
    {
      name: "145° Egg & Soldiers",
      desc:
        `A single egg cooked to a custard-like perfection at exactly 63°C, served in its shell with butter-toasted ` +
        `brioche strips and a pinch of smoked sea salt`,
      price: 6.95,
      allergens: "Eggs, Wheat/Gluten, Dairy",
    },
    {
      name: 'Ahi Tuna "Pucks"',
      desc:
        `Sashimi-grade tuna vacuum-sealed with ginger and lemongrass, flash-chilled and served with a zesty avocado ` +
        `mousse and wonton crisps`,
      price: 8.95,
      allergens: "Fish, Wheat/Gluten (Wontons), Soy",
    },
    {
      name: 'Pork Belly "Candy"',
      desc: `Small cubes of belly sous-vide for 36 hours, then deep-fried and tossed in a spicy bourbon-maple glaze`,
      price: 8.95,
      allergens: null,
    },
    {
      name: "Infused Beet Carpaccio",
      desc:
        `Thinly sliced beets vacuum-infused with orange zest and star anise, topped with whipped goat cheese ` +
        `and toasted pistachios`,
      price: 7.95,
      allergens: "Dairy, Tree Nuts (Pistachios)",
    },
  ],
  Beverages: [
    {
      name: "Smoked Rosemary Old Fashioned",
      desc:
        `Bourbon infused via sous-vide with charred rosemary and orange peel, stirred with maple syrup and ` +
        `finished with a hickory smoke puff`,
      price: 9.95,
      alcoholic: true,
    },
    {
      name: "Spiced Pear Martini",
      desc:
        `Vodka rapid-infused with Bosc pears, cinnamon sticks, and vanilla bean, served up with a dehydrated ` +
        `pear slice garnish`,
      price: 10.95,
      alcoholic: true,
    },
    {
      name: "Sous-Vide Cold Brew Martini",
      desc:
        `Espresso beans infused in filtered water at 130°F for two hours to create a concentrated, low-acid coffee ` +
        `base, shaken with coffee liqueur`,
      price: 11.95,
      alcoholic: true,
    },
    {
      name: "Garden G&T",
      desc:
        `London Dry Gin infused with cucumber and pink peppercorns, topped with premium tonic and an expressed ` +
        `sprig of thyme`,
      price: 9.95,
      alcoholic: true,
    },
    {
      name: "Vacuum-Extracted Lemonade",
      desc:
        `A bright, non-alcoholic infusion of lemon rinds and stalks of fresh mint, resulting in an intense ` +
        `citrus flavor without the bitterness of the pith`,
      price: 7.95,
      alcoholic: false,
    },
    {
      name: "Velvet Hibiscus",
      desc:
        `Dried hibiscus flowers and fresh ginger vacuum-infused into a clover honey syrup, topped with ` +
        `sparkling water and a squeeze of fresh lime. It has a deep burgundy color and a sophisticated, tart finish`,
      price: 8.95,
      alcoholic: false,
    },
    {
      name: "Charred Pineapple & Jalapeño Fire",
      desc:
        `Fresh pineapple chunks and a single deseeded jalapeño sous-vide at 135°F for two hours to create a ` +
        `spicy-sweet concentrate. Served over crushed ice with a Tajín-salted rim`,
      price: 8.95,
      alcoholic: false,
    },
    {
      name: "Botanical Peach Tea",
      desc:
        `White peaches and sprigs of lemon verbena vacuum-sealed with high-quality oolong tea leaves. The ` +
        `low-temperature bath extracts the stone fruit essence without the tannins of the tea becoming bitter`,
      price: 7.95,
      alcoholic: false,
    },
  ],
};

export default function () {
  const d = document;
  const dc = d.createElement.bind(d);
  const outer = dc("div");
  outer.className = "menu";

  for (let sect in menuOptions) {
    if (sect == "Beverages") continue;
    const menuSect = dc("div");
    menuSect.classList.add(
      "menuSection",
      `${sect.toLocaleLowerCase().replaceAll(" ", "")}`,
    );
    const header = dc("p");
    header.className = "sectionHeader";
    header.textContent = `${sect}`;
    menuSect.appendChild(header);

    const optionsGrid = dc("div");
    optionsGrid.className = "optionsGrid";

    menuOptions[`${sect}`].forEach((menuOpt) => {
      const opt = dc("div");
      opt.className = "menuOption";

      const algnHTML =
        menuOpt.allergens != null
          ? `<p class="allergens">Allergens: ${menuOpt.allergens}</p>`
          : "";

      opt.innerHTML =
        `<p class="name">${menuOpt.name}</p><p class="description">${menuOpt.desc}</p>` +
        `<p class="price">$${menuOpt.price}</p>${algnHTML}`;

      optionsGrid.appendChild(opt);
    });

    menuSect.appendChild(optionsGrid);

    outer.appendChild(menuSect);
  }

  const bevSect = dc("div");
  bevSect.classList.add("menuSection", "beverages");
  bevSect.innerHTML = `<p class="sectionHeader">Beverages</p>`;

  const nonSpecSect = dc("div");
  nonSpecSect.className = "nonSpecialtyBeverages";
  nonSpecSect.innerHTML =
    `<p class="subsectionHeader">Non-Specialty Beverages</p><div class="nonAlcoholic"><p class="subsubsectionHeader">` +
    `Non-Alcoholic</p><p class="options">Tea <span>(Black, Green, Earl Grey, White, Oolong)</span>, Soft Drinks ` +
    `<span>(Coca-Cola, Sprite, Dr. Pepper, A&W Root Beer, A&W Cream)</span>, Juices <span>(Orange, Apple, Grape, ` +
    `Pineapple, Mango)</span>, Coffee</p><p class="price">$3.95 w/ Refills - <span>Main Courses include a ` +
    `non-specialty, non-alcoholic beverage</span></p></div><div class="alcoholic"><p class="subsubsectionHeader">` +
    `Alcoholic</p><p class="options">'House' Beers <span>(Corona, Modelo, Michelob Ultra, Coors, Sam Adams)</span>, ` +
    `Craft Beers and Spirits <span>(Changes Frequently - Inquire with Staff)</span></p><p class="price"><span>` +
    `'House' Beers</span> $5.95 ea | <span>Craft Beers and Spirits</span> Inquire with Staff` +
    `</p></div>`;
  bevSect.appendChild(nonSpecSect);

  const specSect = dc("div");
  specSect.className = "specialtyBeverages";
  specSect.innerHTML = `<p class="subsectionHeader">Specialty Beverages</p>`;
  const nonAlcSec = dc("div");
  nonAlcSec.className = "nonAlcoholic";
  nonAlcSec.innerHTML = `<p class="subsubsectionHeader">Non-Alcoholic</p>`;
  const alcSec = dc("div");
  alcSec.className = "alcoholic";
  alcSec.innerHTML = `<p class="subsubsectionHeader">Alcoholic</p>`;

  menuOptions.Beverages.forEach((bev) => {
    const opt = dc("div");
    opt.className = "menuOption";
    opt.innerHTML = `<p class="name">${bev.name}</p><p class="description">${bev.desc}</p><p class="price">$${bev.price}</p>`;

    if (bev.alcoholic == true) alcSec.appendChild(opt);
    else nonAlcSec.appendChild(opt);
  });

  specSect.append(nonAlcSec, alcSec);
  bevSect.appendChild(specSect);

  outer.append(bevSect, dailySpecials());
  return outer;
}
