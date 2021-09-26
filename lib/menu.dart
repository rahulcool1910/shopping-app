
import 'package:flutter/material.dart';
import 'package:flutter_zoom_drawer/flutter_zoom_drawer.dart';

class MenuPage extends StatefulWidget {

  final  ValueChanged<String> menuChange;
  MenuPage({Key? key, required this.menuChange}) : super(key: key);
   @override
  State<MenuPage> createState() => _MenuPageState();
}

class MenuItem{
  late String name;
  late IconData icon;
  MenuItem(String name,IconData icon){
    this.name=name;
    this.icon=icon;
  }
}

class _MenuPageState extends State<MenuPage> {
  List<MenuItem> primaryMenuItem=[
    MenuItem('Account',Icons.account_circle_outlined),
    MenuItem('Wishlist',Icons.favorite),
    MenuItem('Wallet',Icons.payment_outlined),
    MenuItem('Orders',Icons.checkroom_outlined),
  ];
  List<MenuItem> secondaryMenuItem=[
    MenuItem('FAQs',Icons.help_outline),
    MenuItem('Contact Us',Icons.email_outlined),
    MenuItem('More',Icons.more_vert_outlined)
  ];
  List<MenuItem> tertiaryMenuItem=[
    MenuItem('logout',Icons.logout_outlined),
  ];



  @override
  void initState() {
    super.initState();

  }



Widget customDivider()=>SizedBox(
      height: 30,
      width: 150,
      child: Center(
        child: Padding(
          padding: const EdgeInsets.only(left:12),
          child: Container(
            height: 2,
            decoration: const BoxDecoration(
              border: Border(
                bottom:BorderSide(width: 2,color:Colors.white),
              ),
            ),
          ),
        ),
      ),
    );

Widget buildMenuItem(MenuItem item)=> ListTile(
  minLeadingWidth: 20,
  leading: Icon(item.icon,color: Colors.red,),
  title:Text(item.name,style:TextStyle(color: Colors.white),
  ),
  onTap: (){
    widget.menuChange(item.name);
    ZoomDrawer.of(context)!.close();
  },
);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body:SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [

            Padding(
              padding: const EdgeInsets.only(top:25.0,left: 25),
              child: Image.asset("assets/Avatar1.png",width: 50,),
            ),

            Padding(
              padding: const EdgeInsets.all(17.0),
              child: Text("Rahul R",style:TextStyle(fontSize: 25,color: Colors.white)),
            ),
            customDivider(),
            ...primaryMenuItem.map( buildMenuItem).toList(),
            customDivider(),
            ...secondaryMenuItem.map( buildMenuItem).toList(),
            customDivider(),
            ...tertiaryMenuItem.map( buildMenuItem).toList(),
          ],
        )

      )
    );
  }
}
