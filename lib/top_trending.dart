import 'package:carousel_slider/carousel_slider.dart';
import 'package:creative_nomad/Offers.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';



class TopTrending extends StatefulWidget {
  const TopTrending({Key? key}) : super(key: key);

  // const CategoriesScroller();
  @override
  State<TopTrending> createState() => _TopTrendingState();
}

class _TopTrendingState extends State<TopTrending> {
  // Offers a = new Offers(
  //     'Men',
  //     "Flat",
  //     "50% Off",
  //     "On tshirts",
  //     Colors.orange.shade200,
  //     '../assets/svg/undraw_girl_just_wanna_have_fun_9d5u.svg');

  List<Offers> categories = [

    Offers(
      'Women',
      "Dress To ",
      "Impress",
      "Dresses under ₹ 999",
      Colors.green.shade200,
      Colors.green.shade500,
      'assets/svg/suite.svg',
    ),
    Offers(
      'Kids',
      "Casual wear",
      "Not quite pajamas",
      "Dresses under ₹ 999",
      Colors.orange.shade100,
      Colors.orange.shade300,
      'assets/svg/undraw_Successful_purchase_re_mpig.svg',
    ),
    Offers(
      'Masks',
      "Min",
      "50% Off",
      "On Casual shoes",
      Colors.blue.shade200,
      Colors.blue.shade300,
      'assets/svg/undraw_gone_shopping_vwmc.svg',
    )
  ];
  Widget _buildItemList(Offers offer) {
    return Container(
      // transform: Matrix4.translationValues(100.0, 0.0, 0.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            clipBehavior: Clip.hardEdge,
              decoration: BoxDecoration(
                  color: offer.backgroundColor,
                  
                  borderRadius: BorderRadius.circular(25)),
              width: MediaQuery.of(context).size.width-100,
              height: 170,
              child: Stack(
                children: [
                             Positioned(
                      child: Opacity(opacity:0.4,child: SvgPicture.asset("assets/svg/oval.svg",height: 300,color: offer.oval,)),
                      top: -70,
                      left: 10),
                  Container(
                      alignment: const Alignment(0.7, 0.0),
                      child: SizedBox(
                          child: Opacity(
                              opacity: 0.5,
                              child: SvgPicture.asset(offer.imgUrl)),
                          width: 160)),
                  Positioned(
                    top: 40,
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
        Padding(
          padding: const EdgeInsets.only(bottom:10),
          child: Align(
            alignment: Alignment(-0.9,0),
            child:
          Text("top trending picks".toUpperCase(),style:TextStyle(fontSize: 15,fontWeight: FontWeight.w400))
          ),
        ),
        Expanded(
          child: CarouselSlider(
            // onItemFocus: _onItemFocus,
            // itemSize: 250,
            options: CarouselOptions(
                height: 250.0,
                enlargeCenterPage: true,
                enableInfiniteScroll: true,
                enlargeStrategy: CenterPageEnlargeStrategy.scale,
                initialPage: 0,
                scrollPhysics: BouncingScrollPhysics(),
                viewportFraction: 0.75),
            items: categories.map((x) => _buildItemList(x)).toList(),
          ),
        ),
      ],
    );
  }
}
