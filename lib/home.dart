import 'package:creative_nomad/recommended.dart';
import 'package:flutter/material.dart';
import 'package:creative_nomad/bottom_navigation_bar.dart';
import 'package:creative_nomad/categoriers_scroller.dart';
import 'package:creative_nomad/categories_selection.dart';
import 'package:creative_nomad/top_trending.dart';
import 'package:flutter_svg/svg.dart';
import 'package:flutter_zoom_drawer/flutter_zoom_drawer.dart';
import 'bottom_navigation_bar.dart';

class HomePage extends StatelessWidget {
  final PageController controller = PageController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        bottomNavigationBar: NavBar(),
        appBar: PreferredSize(
            child: AppBar(
                backgroundColor: Colors.white,
                shadowColor: Colors.transparent,
                // ignore: prefer_const_literals_to_create_immutables
                title: Row(
                  children: [
                    GestureDetector(
                        onTap: () => {ZoomDrawer.of(context)!.toggle()},
                        child: Image.asset("assets/Group_9.jpg",
                            height: 30, width: 30)),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Image.asset(
                        "assets/r-removebg-preview.jpg",
                        height: 40,
                        width: 40,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ],
                ),
                actions: [
                  const IconButton(
                      onPressed: null,
                      icon: Icon(Icons.search_outlined, color: Colors.black)),
                  const IconButton(
                      onPressed: null,
                      icon: Icon(Icons.notifications_none_outlined,
                          color: Colors.black)),
                  IconButton(
                    onPressed: null,
                    icon: SvgPicture.asset("assets/shopping_bag.svg",
                        color: Colors.black),
                  ),
                ]),
            preferredSize: const Size.fromHeight(60)),
        body: SingleChildScrollView(
          
          child: Column(
            // ignore: prefer_const_literals_to_create_immutables
            children: [
              SizedBox(
                  width: double.infinity, height: 120, child: Catergories()),
              const SizedBox(
                  width: double.infinity,
                  height: 200,
                  child: CategoriesScroller()),
              const SizedBox(
                  width: double.infinity, height: 200, child: TopTrending()),
              SingleChildScrollView(
                child: const SizedBox(
                    width: double.infinity, height: 200, child: Recommended()),
              ),
            ],
          ),
        )
        // Row(
        //   children: [
        //   ]
        // )

        // CarouselSlider.builder(itemCount: categories.length, itemBuilder:(context,index,realIndex){
        //       return Image.asset(categories[index]["imgUrl"].toString());
        //     } , options: CarouselOptions(height:60,enlargeCenterPage: true))
        //     Container(
        //       color:Colors.black54,
        //       child:
        //           ListView.builder(
        //             scrollDirection: Axis.vertical,
        //             controller:controller,
        //              itemCount: categories.length,
        //             itemBuilder:(context,index){
        //               return Text(index.toString());
        //             }

        //             //   Container(color:Colors.green),
        //             //   Container(color:Colors.yellow),
        //             //   Container(color:Colors.orange),
        //             //   Container(color:Colors.black),
        //             // ]
        //           ),
        // )
        );
  }
}
