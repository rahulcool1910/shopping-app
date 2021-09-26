import 'package:creative_nomad/Product.dart';
import 'package:creative_nomad/product_detail.dart';
import 'package:creative_nomad/recommended.dart';
import 'package:flutter/material.dart';
import 'package:creative_nomad/bottom_navigation_bar.dart';
import 'package:creative_nomad/categoriers_scroller.dart';
import 'package:creative_nomad/categories_selection.dart';
import 'package:creative_nomad/top_trending.dart';
import 'package:flutter_svg/svg.dart';
import 'package:flutter_zoom_drawer/flutter_zoom_drawer.dart';
import 'bottom_navigation_bar.dart';
import 'package:uuid/uuid.dart';

var uuid = Uuid();

class ProductsPage extends StatefulWidget {
  @override
  State<ProductsPage> createState() => _ProductsPageState();
}

class _ProductsPageState extends State<ProductsPage> {
  Widget buildProduct(Product product) {
    return GestureDetector(
      onTap: () {
        Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => ProductDetail(productDetail: product)));
      },
      child: SizedBox(
        child: Container(
          // decoration: BoxDecoration(border: Border.all(width: 2)),
          transform: Matrix4.translationValues(0, 20, 0),
          // height: 300,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Column(
                children: [
                  Hero(
                    tag: product.id,
                    child: Image.asset(product.imageUrl,
                        height: 160, fit: BoxFit.contain),
                  ),
                  // Container(
                  //     alignment: const Alignment(1, 0.0),
                  //     child: SizedBox(
                  //         child:,),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(top: 8.0),
                        child: Text("\$" + product.price,
                            style: const TextStyle(
                                fontSize: 20, fontWeight: FontWeight.w500)),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 8.0),
                        child: Text(product.title,
                            style: const TextStyle(
                                fontSize: 15, fontWeight: FontWeight.w300)),
                      ),
                      // Text(categories[index].off,style:TextStyle(fontSize: 10)),
                      // Text(categories[index].t),
                    ],
                  )
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  List<Product> products = [
    Product(
        id: uuid.v4(),
        imageUrl: "assets/product1.jpg",
        title: "Peter England  tshirt",
        assets: [
          "assets/product1.jpg",
          "assets/product2.jpg",
          "assets/product3.jpg",
        ],
        description:"Men's shirt collecttion",
        price: "6"),
    Product(
        id: uuid.v4(),
        imageUrl: "assets/product2.jpg",
        title: "U.S. Polo sneakers",
        assets: [
          "assets/product2.jpg",
          "assets/product1.jpg",
          "assets/product3.jpg",
        ],
        description: "Men's shirt collecttion",
        price: "10"),
    Product(
        id: uuid.v4(),
        imageUrl: "assets/product3.jpg",
        title: "Black berry sneakers",
        assets: [
          "assets/product3.jpg",
          "assets/product3_1.jpg",
          "assets/product3_2.jpg",
          "assets/product3_3.jpg",
          "assets/product3_4.jpg",
        ],
        description: "Men's sneaker collecttion",
        price: "15"),
    Product(
        id: uuid.v4(),
        imageUrl: "assets/product4.jpg",
        title: "Roadster shirts",
        assets: [
          "assets/product4.jpg",
          "assets/product3_2.jpg",
          "assets/product3_3.jpg",
          "assets/product3_4.jpg",
        ],
        description: "Men's sneaker collecttion",
        price: "4"),
    Product(
        id: uuid.v4(),
        imageUrl: "assets/product5.jpg",
        title: "Peter England  sneakers",
        assets: [
          "assets/product5.jpg",
          "assets/product1.jpg",
          "assets/product2.jpg",
          "assets/product3.jpg",
        ],
        description: "Men's shirt collecttion",
        price: "6"),
    Product(
        id: uuid.v4(),
        imageUrl: "assets/product6.jpg",
        title: "Peter England  tshirt",
        assets: [
          "assets/product6.jpg",
          "assets/product1.jpg",
          "assets/product2.jpg",
          "assets/product3.jpg",
        ],
        description: "Men's shirt collecttion",
        price: "8"),
    Product(
        id: uuid.v4(),
        imageUrl: "assets/product7.jpg",
        title: "Peter England  loafers",
        assets: [
          "assets/product7.jpg",
          "assets/product1.jpg",
          "assets/product2.jpg",
          "assets/product3.jpg",
        ],
        description: "",
        price: "12"),
    Product(
        id: uuid.v4(),
        imageUrl: "assets/product8.jpg",
        title: "Peter England  tshirt",
        assets: [
          "assets/product8.jpg",
          "assets/product1.jpg",
          "assets/product2.jpg",
          "assets/product3.jpg",
        ],
        description: "Men's shirt collecttion",
        price: "6"),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: NavBar(),
      appBar: AppBar(
          backgroundColor: Colors.white,
          shadowColor: Colors.transparent,
          title: Row(
            children: [
              GestureDetector(
                onTap: () => {ZoomDrawer.of(context)!.toggle()},
                child: Image.asset("assets/Group_9.jpg", height: 30, width: 30),
              ),
            ],
          ),
          actions: [
            const IconButton(
                onPressed: null,
                icon: Icon(Icons.search_outlined, color: Colors.black)),
            IconButton(
              onPressed: null,
              icon: SvgPicture.asset("assets/shopping_bag.svg",
                  color: Colors.black),
            ),
          ]),
      body: SingleChildScrollView(
          scrollDirection: Axis.vertical,
          child: SizedBox(
            height: 1000,
            child: GridView(
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                  childAspectRatio: 21 / 25),
              children: [...products.map(buildProduct).toList()],
            ),
          )),
    );
  }
}
