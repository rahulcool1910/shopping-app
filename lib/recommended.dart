import 'package:carousel_slider/carousel_slider.dart';
import 'package:creative_nomad/Offers.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class Recommended extends StatefulWidget {
  const Recommended({Key? key}) : super(key: key);

  // const CategoriesScroller();
  @override
  State<Recommended> createState() => _Recommended();
}

class _Recommended extends State<Recommended> {

  List<Offers> categories = [
    Offers(
        'Men',
        "Flat",
        "50% Off",
        "On tshirts",
        Colors.orange.shade200,
        Colors.orange.shade200,
        'assets/recommended1.jpg'),
    Offers(
      'Women',
      "Up To ",
      "50% Off",
      "on min purchase\nof ₹ 1500",
      Colors.green.shade200,
      Colors.green.shade200,
      'assets/recommended2.jpg',
    ),
    Offers(
      'Kids',
      "Min",
      "50% Off",
      "On the best of\n kids wear",
      Colors.orange.shade100,
      Colors.orange.shade100,
      'assets/recommended3.jpg',
    ),
    Offers(
      'Masks',
      "Min",
      "50% Off",
      "On Casual shoes",
      Colors.blue.shade200,
      Colors.blue.shade200,
      'assets/recommended4.jpg',
    ),
    Offers(
      'Kids',
      "Min",
      "50% Off",
      "On the best of\n kids wear",
      Colors.orange.shade100,
      Colors.orange.shade100,
      'assets/recommended5.jpg',
    ),
    Offers(
      'Masks',
      "Min",
      "50% Off",
      "On Casual shoes",
      Colors.blue.shade200,
      Colors.blue.shade200,
      'assets/recommended6.jpg',
    ),
  ];
  Widget _buildItemList(Offers offer) {
    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
              decoration: BoxDecoration(
                  color: offer.backgroundColor,
                  borderRadius: BorderRadius.circular(10),
                  image: DecorationImage(
                    image:AssetImage(offer.imgUrl),
                    fit:BoxFit.contain
                  )
                  ),
              width: 100,
              height: 130,
              ),
        ],
      ),
    );
  }


  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top:50.0),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.only(right:250.0,bottom:20),
            child: const Text("Recommended",style:TextStyle(fontWeight:FontWeight.w400,fontSize:16),textAlign: TextAlign.start,),
          ),
          Expanded(
          child: Wrap(direction: Axis.horizontal,
                   children: [
                     ...categories.map(_buildItemList).toList()
                   ],
                   spacing: 20,
                   alignment: WrapAlignment.center,
                   runSpacing: 20,
                   ),
        ),]
      ),
    );
    // Column(
    //   children: [
    //     Padding(
    //       padding: const EdgeInsets.only(bottom: 10,top:10),
    //       child: Align(
    //           alignment: Alignment(-0.9, 0),
    //           child: Text("Recommended".toUpperCase(),
    //               style:const TextStyle(fontSize: 15, fontWeight: FontWeight.w400),),),
    //     ),
    //         Wrap(direction: Axis.horizontal,
    //          children: [
    //            ...categories.map(_buildItemList).toList()
    //          ],
    //          ),

    //   ],
    // );
   
  }
}
