class Product {
  late String id;
  late String imageUrl;
  late String title;
  late String description;
  late String price;
  late List<String> assets; 
  Product({required this.id,
      required this.description,required this.imageUrl, required this.title, required this.price,required this.assets});
}
