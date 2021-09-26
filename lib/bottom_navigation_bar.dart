import 'package:flare_flutter/flare_actor.dart';
import 'package:flutter/material.dart';

class MenuItem {
  final String name;
  final Color color;
  final double x;
  MenuItem({required this.name, required this.color, required this.x});
}

class NavBar extends StatefulWidget {
  createState() => NavBarState();
}

class NavBarState extends State<NavBar> {
  List items = [
    MenuItem(x: -1.0, name: 'logo', color: Colors.lightBlue),
    MenuItem(x: -0.5, name: 'menu', color: Colors.purple),
    MenuItem(x: 0.0, name: 'camera', color: Colors.greenAccent),
    MenuItem(x: 0.5, name: 'cart', color: Colors.pink),
    MenuItem(x: 1.0, name: 'head', color: Colors.yellow),
  ];

  late MenuItem active;

  @override
  void initState() {
    super.initState();

    active = items[0]; // <-- 1. Activate a menu item
  }

  Widget _flare(MenuItem item) {
    return GestureDetector(
      child: AspectRatio(
        aspectRatio: 0.932,
        child: Padding(
          padding: EdgeInsets.only(top: 20),
          child: FlareActor(
            'assets/flare/${item.name}.flr',
            alignment: Alignment.center,
            fit: BoxFit.contain,
            animation: item.name == active.name ? 'go' : 'idle',
          ),
        ),
      ),
      onTap: () {
        setState(() {
          active = item;
        });
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        height: 80,
        color: Colors.white,
        child: Stack(
          children: [
            // AnimatedContainer(
            //   duration: const Duration(milliseconds: 200),
            //   alignment: Alignment(active.x, -1),
            //   child: AnimatedContainer(
            //     duration: const Duration(milliseconds: 100),
            //     height: 10,
            //     width: w * 0.2,
            //     color: active.color,
            //   ),
            // ),
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [...items.map((item) {
                  return _flare(item);
                }).toList(),]
              ),
            )
          ],
        ),
      ),
    );
  }
}
