import 'package:flutter/material.dart';

class Offers {
  late String title;
  late String heading;
  late String off;
  late String on;
  late Color backgroundColor;
  Color? oval=Colors.white;
  late String imgUrl;

  Offers(
    String title,
    String heading,
    String off,
    String on,
    Color backgroundColor,
    Color ?oval,
    String imgUrl,
  ) {
    this.title = title;
    this.heading = heading;
    this.off = off;
    this.on = on;
    this.oval =oval;
    this.backgroundColor = backgroundColor;
    this.imgUrl = imgUrl;
  }
}
