import 'package:creative_nomad/home.dart';
import 'package:creative_nomad/menu.dart';
import 'package:creative_nomad/products.dart';
import 'package:flutter/material.dart';
import 'package:flutter_zoom_drawer/flutter_zoom_drawer.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class CartDetails {
  int productId;
  int quantity;
  CartDetails(this.productId, this.quantity);
}

class _MyHomePageState extends State<MyHomePage> {
  String currentPage="Account";
getScreen(){
  if(currentPage=="Account"|| currentPage=="Wallet") return HomePage();
  else return ProductsPage();
}
  @override
  Widget build(BuildContext context) {
    return ZoomDrawer(
      menuScreen: MenuPage(
        menuChange: (item){
          setState(() {
           currentPage = item.toString();
          });
        }
      ),
      mainScreen: getScreen(),
      style: DrawerStyle.Style1,
      backgroundColor: Colors.black,
      
      // slideWidth:
      //     MediaQuery.of(context).size.width * (ZoomDrawer.of( ? .45 : 0.65),
    );
  }
}
