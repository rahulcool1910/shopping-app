import 'package:carousel_slider/carousel_slider.dart';
import 'package:creative_nomad/Offers.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';



class CategoriesScroller extends StatefulWidget {
  const CategoriesScroller({Key? key}) : super(key: key);

  // const CategoriesScroller();
  @override
  State<CategoriesScroller> createState() => _CategoriesScroller();
}

class _CategoriesScroller extends State<CategoriesScroller> {
  // Offers a = new Offers(
  //     'Men',
  //     "Flat",
  //     "50% Off",
  //     "On tshirts",
  //     Colors.orange.shade200,
  //     '../assets/svg/undraw_girl_just_wanna_have_fun_9d5u.svg');

  List<Offers> categories = [
    Offers('Men', "Flat", "50% Off", "On tshirts",
     Colors.orange.shade200,
     Colors.orange.shade200,
        'assets/svg/undraw_girl_just_wanna_have_fun_9d5u.svg'),
    Offers(
      'Women',
      "Up To ",
      "50% Off",
      "on min purchase\nof ₹ 1500",
      Colors.green.shade200,
      Colors.green.shade200,
      'assets/svg/marilyn_mandrow.svg',
    ),
    Offers(
      'Kids',
      "Min",
      "50% Off",
      "On the best of\n kids wear",
      Colors.orange.shade100,
      Colors.orange.shade100,
      'assets/svg/undraw_Successful_purchase_re_mpig.svg',
    ),
    Offers(
      'Masks',
      "Min",
      "50% Off",
      "On Casual shoes",
      Colors.blue.shade200,
      Colors.blue.shade200,
      'assets/svg/undraw_gone_shopping_vwmc.svg',
    )
  ];
  Widget _buildItemList(Offers offer) {
    return Container(
      width: 220,
      transform: Matrix4.translationValues(100.0, 0.0, 0.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
              decoration: BoxDecoration(
                  color: offer.backgroundColor,
                  borderRadius: BorderRadius.circular(10)),
              width: 180,
              height: 180,
              child: Stack(
                children: [
                  Container(
                      alignment: const Alignment(1, 0.0),
                      child: SizedBox(
                          child: Opacity(
                              opacity: 0.5,
                              child: SvgPicture.asset(offer.imgUrl)),
                          width: 150)),
                  Positioned(
                    top: 30,
                    left: 20,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Padding(
                          padding: const EdgeInsets.only(bottom: 2.0),
                          child: Text(offer.heading,
                              style: const TextStyle(fontSize: 20)),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(bottom: 8.0),
                          child: Text(offer.off,
                              style: const TextStyle(
                                  fontSize: 25, fontWeight: FontWeight.w500)),
                        ),
                        Text(offer.on, style: const TextStyle(fontSize: 15)),
                        // Text(categories[index].off,style:TextStyle(fontSize: 10)),
                        // Text(categories[index].t),
                      ],
                    ),
                  ),
                ],
              )),
        ],
      ),
    );
  }

  int _focusedIndex = -1;
  void _onItemFocus(int index) {
    setState(() {
      _focusedIndex = index - 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(
          child: CarouselSlider(
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
                viewportFraction: 0.49),
            items: categories.map((x) => _buildItemList(x)).toList(),
            // scrollPhysics: BouncingScrollPhysics(),
            // dynamicItemSize: true,
            // initialIndex: 1,
            // padding: EdgeInsets.all(10),
            // onReachEnd: () {
            //   print('Done!');
            // },
            // itemCount: categories.length,
          ),
        ),
      ],
    );
  }
}
