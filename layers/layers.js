var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_0.png" /> Babelankota<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_1.png" /> Bahagia<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_2.png" /> Bantargebang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_3.png" /> Bekasijaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_4.png" /> Bintara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_5.png" /> Bintarajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_6.png" /> Bojongkulur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_7.png" /> Bojongmenteng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_8.png" /> Bojongrawalumbu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_9.png" /> Burangkeng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_10.png" /> Cakung Timur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_11.png" /> Ciansana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_12.png" /> Cijengkol<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_13.png" /> Cikeasudik<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_14.png" /> Ciketingudik<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_15.png" /> Cikiwul<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_16.png" /> Cilangkap<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_17.png" /> Cimuning<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_18.png" /> Cipinangmelayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_19.png" /> Durenjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_20.png" /> Halimperdanakusuma<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_21.png" /> Harapanbaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_22.png" /> Harapanjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_23.png" /> Harapanmulia<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_24.png" /> Harjamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_25.png" /> Jakamulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_26.png" /> Jakasampurna<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_27.png" /> Jakasetia<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_28.png" /> Jatiasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_29.png" /> Jatibening<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_30.png" /> Jatikarya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_31.png" /> Jatikramat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_32.png" /> Jatiluhur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_33.png" /> Jatimakmur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_34.png" /> Jatimekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_35.png" /> Jatimulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_36.png" /> Jatimurni<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_37.png" /> Jatirahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_38.png" /> Jatirangga<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_39.png" /> Jatiranggon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_40.png" /> Jatirasa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_41.png" /> Jatisampurna<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_42.png" /> Jatisari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_43.png" /> Jatiwaringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_44.png" /> Jatiwarna<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_45.png" /> Kaliabangtengah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_46.png" /> Kalibaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_47.png" /> Karangsatria<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_48.png" /> Kayuringinjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_49.png" /> Kebalen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_50.png" /> Kranji<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_51.png" /> Lambangjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_52.png" /> Lambangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_53.png" /> Lewinanggung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_54.png" /> Limusnunggal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_55.png" /> Lubangbuaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_56.png" /> Margahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_57.png" /> Margajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_58.png" /> Medansatria<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_59.png" /> Mustikajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_60.png" /> Mustikasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_61.png" /> Nagrak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_62.png" /> Padurenan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_63.png" /> Pasirangin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_64.png" /> Pejuang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_65.png" /> Pekayonjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_66.png" /> Pengasinan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_67.png" /> Pondokkelapa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_68.png" /> Pondokkopi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_69.png" /> Pondokranggon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_70.png" /> Pulogebang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_71.png" /> Pusakarakyat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_72.png" /> Sepanjangjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_73.png" /> Setiaasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_74.png" /> Setiamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_75.png" /> Setu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_76.png" /> Sukatani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_77.png" /> Sumurbatu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_78.png" /> Tamanrahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_79.png" /> Tapos<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_80.png" /> Telukpucung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_81.png" /> Ujungmenteng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_0_82.png" /> <br />'
        });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'KDPBPS': 'inline label', 'FCODE': 'inline label', 'LUASWH': 'inline label', 'UUPP': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'KDEBPS': 'inline label', 'KDEPUM': 'inline label', 'KDCBPS': 'inline label', 'KDCPUM': 'inline label', 'KDBBPS': 'inline label', 'KDBPUM': 'inline label', 'WADMKD': 'inline label', 'WIADKD': 'inline label', 'WADMKC': 'inline label', 'WIADKC': 'inline label', 'WADMKK': 'inline label', 'WIADKK': 'inline label', 'WADMPR': 'inline label', 'WIADPR': 'inline label', 'TIPADM': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_ADMINISTRASIDESA_AR_25K_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});