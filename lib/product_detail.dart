import 'package:carousel_slider/carousel_slider.dart';
import 'package:creative_nomad/Product.dart';
import 'package:creative_nomad/recommended.dart';
import 'package:flutter/material.dart';
import 'package:creative_nomad/bottom_navigation_bar.dart';
import 'package:creative_nomad/categoriers_scroller.dart';
import 'package:creative_nomad/categories_selection.dart';
import 'package:creative_nomad/top_trending.dart';
import 'package:flutter_svg/svg.dart';
import 'package:flutter_zoom_drawer/flutter_zoom_drawer.dart';
import 'bottom_navigation_bar.dart';

class Position{
  late String title;
  late double xCoords;
  late double width;
  Position({required this.title,required this.width, required this.xCoords});
}


class ProductDetail extends StatefulWidget {
  final Product productDetail;
  ProductDetail({Key? key, required this.productDetail}) : super(key: key);

  @override
  State<ProductDetail> createState() => _ProductDetailState();
}

class _ProductDetailState extends State<ProductDetail> {
  final PageController controller = PageController();
String sizeValue = "US1";
int qtyValue= 8;
  var sizes = [
"US1",
"US2",
"US3",
"US4",
"US5",
"US6",
"US7",
"US8",
"US9",
  ];

  Color choosenColor=Colors.black;
  List<Color> colors=[
    Colors.black,
    Colors.red,
    Colors.yellow,
    Colors.orange,
    Colors.blue,
  ] ;

  List<Position> tabs=[
    Position(xCoords:-1.05,title:"Description",width:80),
    Position(xCoords:0.18,title:"Reviews",width:57),
    Position(xCoords:1.02,title:"Similar",width:50),
  ];
String activeTab="Description";

setCoords(Position tab){
setState(() {
  activeTab = tab.title;
});
}
getCoords(){
  return tabs.firstWhere((position) =>position.title==activeTab);
}

Widget _buildTabs(Position position) {
  return GestureDetector(
    onTap: (){
      setCoords(position);
    },
    child: Text(position.title,
    style:TextStyle(fontSize:13,fontWeight: FontWeight.w700)));
}

  Widget _buildItemList(String imageUrl) {
    return Container(
        alignment: const Alignment(-0.5, 0.0),
        child: widget.productDetail.assets[0] == imageUrl
            ? Hero(
                tag: widget.productDetail.id, child: Image.asset(imageUrl, width: 170))
            : Image.asset(
                imageUrl,
                width: 160,
              ));
    // return Container(
    //   width: 220,

    //   transform: Matrix4.translationValues(0.0, 0.0, 0.0),
    //   child: Column(
    //     mainAxisAlignment: MainAxisAlignment.center,
    //     children: [
    //       Container(
    //           decoration: BoxDecoration(
    //             boxShadow: [
    //             BoxShadow(
    //               color: Colors.grey.withOpacity(0.5),
    //               spreadRadius: 2,
    //               blurRadius: 7,
    //               offset: Offset(0, 3), // changes position of shadow
    //             ),
    //           ],
    //               borderRadius: BorderRadius.circular(20)),
    //           width: 180,
    //           height: 180,
    //           child: Stack(
    //             children: [
    //               Container(
    //                   alignment: const Alignment(1, 0.0),
    //                       child: productDetail.assets[0]==imageUrl? Hero(tag: productDetail.id, child: Image.asset(imageUrl, fit: BoxFit.cover)): Image.asset(imageUrl,fit:BoxFit.cover)
    //                   ),
    //             ],
    //           )),
    //     ],
    //   ),
    // );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        bottomNavigationBar: NavBar(),
        appBar: AppBar(
          backgroundColor: Colors.white,
          shadowColor: Colors.transparent,
          leading: GestureDetector(
            // Within the SecondRoute widget
            onTap: () {
              Navigator.pop(context);
            },
            child:const  Icon(
              Icons.arrow_back_ios_new,
              color: Colors.black,
            ),
          ),
        ),
        body: Container(
            transform: Matrix4.translationValues(0.0, -30.0, 0.0),
            child: Column(
              children: [
                CarouselSlider(
                  // onItemFocus: _onItemFocus,
                  // itemSize: 250,
                  options: CarouselOptions(
                      height: 250.0,
                      //  autoPlay: true,
                      enlargeCenterPage: true,
                      enableInfiniteScroll: true,
                      enlargeStrategy: CenterPageEnlargeStrategy.scale,
                      initialPage: 0,
                      scrollPhysics: BouncingScrollPhysics(),
                      viewportFraction: 0.5),
                  items: widget.productDetail.assets
                      .map((x) => _buildItemList(x))
                      .toList(),
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 20.0, right: 20.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(widget.productDetail.title,
                              style: const TextStyle(
                                  fontSize: 20, fontWeight: FontWeight.w500)),
                          Text(widget.productDetail.description,
                              style: const TextStyle(
                                  fontSize: 10, fontWeight: FontWeight.w300)),
                        ],
                      ),
                      const Icon(Icons.bookmark_border_outlined)
                    ],
                  ),
                ),
                const Divider(),
                Padding(
                  padding: const EdgeInsets.only(left: 20.0, right: 20.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Icon(
                                Icons.star_rate,
                                color: Colors.orange.shade800,
                                size: 18,
                              ),
                              Icon(
                                Icons.star_rate,
                                color: Colors.orange.shade800,
                                size: 18,
                              ),
                              Icon(
                                Icons.star_rate,
                                color: Colors.orange.shade800,
                                size: 18,
                              ),
                              Icon(
                                Icons.star_rate,
                                color: Colors.orange.shade800,
                                size: 18,
                              ),
                              Icon(
                                Icons.star_outline_outlined,
                                color: Colors.orange.shade800,
                                size: 18,
                              ),
                            ],
                          ),
                          Text("\$" + widget.productDetail.price,
                              style: const TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.w500)),
                        ],
                      ),
                      ElevatedButton(onPressed: (){},
                      style:ButtonStyle(
                        backgroundColor: MaterialStateColor.resolveWith((states) => Colors.orange.shade800),
                        shape: MaterialStateProperty.all<
                                    RoundedRectangleBorder>(
                                RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(18.0),
                                    side: const BorderSide(color: Colors.red)))
                      ),
                      child: 
                        Row(children: const [
                          Text("Add to Cart  ",
                                style: TextStyle(
                                    fontSize: 13, fontWeight: FontWeight.w700)),
                          Icon(Icons.shopping_cart_outlined)
                        ],)
                      ,)
                    ],
                  ),
                ),
                 Container(
                     transform: Matrix4.translationValues(-65.0, 20.0, 0.0),
                   width: 220,
                   child: Column(
                     children: [Row(
                       mainAxisAlignment: MainAxisAlignment.spaceBetween,
                       children: [
                           ...tabs.map(_buildTabs).toList()
                       ], 
                     ),

                    Padding(
                      padding: const EdgeInsets.only(top:8.0,left:4.0),
                      child: AnimatedContainer(
                          //  <-- 3. Animated top bar
                          duration: Duration(milliseconds: 200),
                          alignment: Alignment(getCoords().xCoords, 1),
                          child: AnimatedContainer(
                            duration: Duration(milliseconds: 100),
                            height: 3,
                            width: getCoords().width ,
                            color: Colors.orange.shade800,
                          ),
                        ),
                    ),
                     ]
                   )
                 ),

                 const Padding(
                         padding: const EdgeInsets.only(left: 20.0, right: 20.0,top:30),
                         child: Text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the Lorem Ipsum is simply dummy text of",style:TextStyle(fontWeight: FontWeight.w300,fontSize:13)),
                 ),
                 Padding(
                         padding: const EdgeInsets.only(left: 20.0, right: 20.0,top:10),
                         child: Row(
                                 mainAxisAlignment:MainAxisAlignment.spaceBetween,
                                 crossAxisAlignment:CrossAxisAlignment.start,
                           children: [
                             Column(children: [
                               const Padding(
                                 padding: const EdgeInsets.only(right:20.00 ,bottom:10),
                                 child: Text("Size",style: TextStyle(fontWeight: FontWeight.w800)),
                               ),
                               Row(
                                 children: [
                                DropdownButton(
                                  value: sizeValue,
                                  icon: const Icon(Icons.keyboard_arrow_down),
                                  items: sizes.map((String items) {
                                    return DropdownMenuItem(
                                        value: items, child: Center(child: Text(items,style: TextStyle(fontWeight: FontWeight.w600))));
                                  }).toList(),
                                  onChanged: ( newValue) {
                                    setState(() {
                                      sizeValue = newValue.toString();
                                    });
                                  },
                                ),

                               ],)
                             ],),
                             Column(children: [
                               const Padding(
                                 padding: const EdgeInsets.only(
                                  right: 20.00, bottom: 10),
                                 
                                 child: Text("Color",style: TextStyle(fontWeight: FontWeight.w800)),
                               ),
                               Row(
                                 children: [
                                Padding(
                                  padding: const EdgeInsets.only(right:20.0),
                                  child: DropdownButton(
                                    value: choosenColor,
                                    icon: const Icon(Icons.keyboard_arrow_down),
                                    items: colors.map((Color items) {
                                      return DropdownMenuItem(

                                          value: items, child: Center(
                                            child: SizedBox(
                                                width:50,
                                                height:50,
                                              child: Padding(
                                                padding: const EdgeInsets.all(8.0),
                                                child: Container(
                                                  width:50,
                                                  height:50,
                                                  decoration:BoxDecoration(
                                                  color:items,
                                                    borderRadius: BorderRadius.circular(100)
                                                  )
                                                ),
                                              ),
                                            ),
                                          )
                                          );
                                    }).toList(),
                                    onChanged: (Color? newValue) {
                                      setState(() {
                                        if(newValue!=null){
                                          choosenColor = newValue;
                                        }
                                      });
                                    },
                                  ),
                                ),

                               ],)
                             ],),
                             Column(children: [
                               const Padding(
                                                                  padding: const EdgeInsets.only(
                                  right: 20.00, bottom: 10),

                                 child: Text("Qty",style: TextStyle(fontWeight: FontWeight.w800)),
                               ),
                               Row(
                                 children: [
                                DropdownButton(
                                  value: qtyValue,
                                  icon: const Icon(Icons.keyboard_arrow_down),
                                  items: new List<int>.generate(10,(_)=>_+1).map((items) {
                                    return DropdownMenuItem(
                                        value: items, child: Center(child: Text(items.toString())));
                                  }).toList(),
                                  onChanged: ( newValue) {
                                    setState(() {
                                      qtyValue = int.parse(newValue.toString()) ;
                                    });
                                  },
                                ),

                               ],)
                             ],),
                           ],
                         )
                 ),


              ],
            )));
  }
}
