

slideshow_dict = [
["trou",""],
["adele",""],
["amster_canal",""],
["aniv_adrien",""],
["apero_pm",""],
["barque_bath",""],
["bateau_grece",""],
["bath_group",""],
["bath1",""],
["besties",""],
["bjr_glace",""],
["bretagne",""],
["caire_kite",""],
["cat_st",""],
["cc_mariage_thibaut",""],
["cc_plage_kenya",""],
["ced_zebre",""],
["cedric_barque_bath",""],
["cedric_zebres",""],
["central_hall",""],
["chat_grece",""],
["cheval",""],
["chien_bretagne",""],
["claire_bandanna",""],
["claire_bouc",""],
["claire_carte",""],
["claire_degree",""],
["claire_degree_tong",""],
["claire_dog_egypt",""],
["claire_giraffe",""],
["claire_moto",""],
["claire_mtrl",""],
["claire_plage_kenya",""],
["color_bd",""],
["cows",""],
["croco",""],
["dents_salou",""],
["depart_amsterdame",""],
["diane_nvl_an",""],
["echec_emilie",""],
["egypt_start",""],
["fav_cc",""],
["fiancailles",""],
["folie_montgn",""],
["grd_mere_claire",""],
["grdpr_mmilou",""],
["ikea",""],
["img_061",""],
["irland",""],
["italie",""],
["kiss_screen",""],
["kiss_toue",""],
["kite_ced",""],
["la_toue",""],
["loire_tour",""],
["lux_copains",""],
["mag",""],
["mariane_turc",""],
["mayorque",""],
["ml",""],
["mtrl_ced",""],
["noel",""],
["noel_perrin",""],
["ny_highline",""],
["papecet",""],
["paris_eiffel",""],
["pauline_soiree",""],
["pont_var",""],
["ptidej_mariage",""],
["rivers_canada",""],
["salou_bb",""],
["scarf",""],
["soeurs_claire",""],
["soire",""],
["squirel",""],
["sumo",""],
["surf_martin",""],
["sw",""],
["trad3",""],
["tradi",""],
["yvan_bar",""],
["zimm_wed",""]


]

var simg =  document.getElementById('slideshow_img')


function slideLeft (){
   var i = simg.getAttribute("idx");
  i--;
  if (i <0 ) i = slideshow_dict.length -1
  console.log(i)
  setImg(i)
}


function slideRight (){
  var i = simg.getAttribute("idx");
  i++;
  if (i >= slideshow_dict.length) i = 0
  setImg(i)


}


function setImg(i){

  simg.style.backgroundImage =  "url('./img/slideshow/"+slideshow_dict[i][0]+".jpg')";
  simg.setAttribute("idx", i);
  document.getElementById('slideshow_comment').innerText = slideshow_dict[i][1]

}



document.getElementById('slideshow_L').addEventListener("click", slideLeft)
document.getElementById('slideshow_R').addEventListener("click", slideRight)


setImg(0)
