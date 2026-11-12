
// menu_data.js - Same data as menu_data.dart but for GitHub Pages
const appMenus = [
  {id:'home', title:'الرئيسية', icon:'🏠', items:[
    {id:'home_main', title:'الرئيسية', subtitle:'الصفحة الرئيسية'},
    {id:'my_tasks', title:'مهامي', subtitle:'المهام الخاصة فيك'},
    {divider:true},
    {id:'where_product', title:'أين أجد المنتج؟', subtitle:'تبحث عن المنتج وين موجود'},
    {id:'branch_products', title:'منتجات الفرع', subtitle:'منتجات فرعك'},
    {id:'expected_transfer', title:'التحويل المتوقع', subtitle:'التحويلات اللي متوقع توصلك'},
    {id:'receive_shipment', title:'استلام شحنة', subtitle:'استلام الشحنات'},
    {divider:true},
    {header:true, title:'التحليل والتقارير'},
    {id:'sub_analysis', title:'تحليل فرعي'},
    {id:'reports', title:'التقارير'},
    {id:'monthly_reports', title:'التقارير الشهرية'},
  ]},
  {id:'orders', title:'الطلبات', icon:'🛒', items:[
    {id:'product_order', title:'طلبات المنتج'},
    {id:'products_orders', title:'طلبات المنتجات'},
  ]},
  {id:'messages', title:'المراسلات', icon:'✉️', items:[
    {id:'official', title:'المراسلات الرسمية'},
    {id:'internal', title:'المحادثات الداخلية'},
    {id:'payments', title:'ملفات الدفعات'},
  ]},
  {id:'reference', title:'المرجع', icon:'📖', items:[
    {id:'responsibilities', title:'المسؤوليات'},
    {id:'instructions', title:'الآليات والتعليمات'},
    {id:'id_cards', title:'بطاقات التعريف'},
  ]},
  {id:'account', title:'حسابي', icon:'👤', items:[
    {id:'my_account', title:'حسابي والبريد'},
    {id:'app_control', title:'التحكم في التطبيق والتطوير'},
  ]},
];
const orderTabs = [
  {id:'incoming', title:'الوارد إلى فرعي', icon:'📥'},
  {id:'my_orders', title:'طلباتي', icon:'🧺'},
  {id:'waiting', title:'بانتظار الرد فقط', icon:'⏳'},
];
