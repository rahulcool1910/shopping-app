import 'package:flutter/material.dart';

// ignore: must_be_immutable
class Catergories extends StatelessWidget {
  final PageController controller = PageController();
  List<Map<String, Object>> categories = [
    {
      'title': 'Men',
      'imgUrl': 'assets/Men.jpg',
    },
    {
      'title': 'Women',
      'imgUrl': 'assets/Women.jpg',
    },
    {
      
      'title': 'Kids',
      'imgUrl': 'assets/Kids.jpg',
    },
    {
      'title': 'Masks',
      'imgUrl': 'assets/Masks.jpg',
    },
    {
      'title': 'Accessories',
      'imgUrl': 'assets/Accessories.jpg',
    },
    {
      'title': 'Cosmetics',
      'imgUrl': 'assets/Cosmetics.jpg',
    },
  ];

  Catergories({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
      child: ListView.separated(
        separatorBuilder: (BuildContext context, int index) {
          return SizedBox(width: 20);
        },
        padding: EdgeInsets.all(11),
        controller: controller,
        scrollDirection: Axis.horizontal,
        itemCount: categories.length,
        itemBuilder: (_, index) {
          return Container(
            // color: Colors.amberAccent,
            child: Column(
              children: [
                Image.asset(categories[index]["imgUrl"].toString()),
                Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: Text(
                    categories[index]["title"].toString(),
                    style: TextStyle(color: Colors.black),
                  ),
                )
              ],
            ),
          );
        },
      ),
    );
  }
}
