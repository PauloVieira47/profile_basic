function trocaTema() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  const imagem = document.querySelector(".profile img");
  if (html.classList.contains("dark")) {
    imagem.setAttribute(
      "src",
      "https://scontent.cdninstagram.com/v/t51.82787-19/721266117_18367469101233677_8430617706248412974_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=104&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy44MjguQzMifQ%3D%3D&_nc_ohc=a8gDlKmZug0Q7kNvwECYTZ1&_nc_oc=AdqLgqXeYoEswWtlF-sLBdSvxtwxeazSruVxHi7namXUFMqg0iZzWmLM1iq_1FQpauFSd63jTvPQe56EO1xKHi3b&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=UCn5jsEZSzeGJzdFtzX4uw&_nc_ss=7b6a8&oh=00_Af_pW3B-Zh1Yjb5yCfbOzhCMosvUe1aGFuiMk3C5U9_f-A&oe=6A2F982E",
    );
    imagem.setAttribute("alt", "foto de perfil ");
  } else {
    imagem.setAttribute(
      "src",
      "https://scontent.fbnu4-1.fna.fbcdn.net/v/t1.6435-9/83494938_647562966047482_5223964981208285184_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=xl0Vw5BiG00Q7kNvwFY8cpr&_nc_oc=Ado2f6ONbXbEdvaQSVhDNae44Vy6FTsDEcD5C0pxg3rSFu3TlRcKQvbet0AwkG3duYB_LNUFxi1tiPn0j2rr2KMB&_nc_zt=23&_nc_ht=scontent.fbnu4-1.fna&_nc_gid=pP_a2HJKIWy2PosZRoOyUw&_nc_ss=7b2a8&oh=00_Af8AtuaiSoe41Mg84mcaSHOtoN4B5mekO8XFx1k4XDwItA&oe=6A529CED",
    );
    imagem.setAttribute("alt", "foto do facebook");
  }
}
