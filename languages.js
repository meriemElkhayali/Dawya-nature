let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".tit"),
     descr = document.querySelector(".description");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("lang")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
     })
})

let data = {
    french: {
     title: "Propos de nous",
        description: "Faulkner semble rarement sous-estimer, et ses histoires ont une forte saveur de-le passé. Sa langue et son sujet sont riches en traditionsMatériel. Un sudiste pourrait bien soupçonner que seul un lecteur imprégné de sympathieconnaissance du Sud traditionnel pouvait parfaitement comprendre Faulkner. Faulkner peut sembler,parfois, être un sudiste parlant à et pour les sudistes. Mais, comme, en vertu de leur qualités imaginatives et symboliques, les récits d'Hemingway sont plus que journalistiques croquis, donc, en vertu de leurs qualités exploratoires et analytiques, les récits de Faulkner sont plus que des contes du Sud:"
     },
     english: {
          title: "About us",
        description: "Faulkner seldom seems to understate, and his stories carry a heavy flavour of the past. Both his language and his subject matter are rich in traditional material. A Southerner might well suspect that only a reader steeped in sympathetic knowledge of the traditional South could fully understand Faulkner. Faulkner may seem, at times, to be a Southerner speaking to and for Southerners. But, as, by virtue of their imaginative and symbolic qualities, Hemingway’s narratives are more than journalistic sketches, so, by virtue of their explorative and analytic qualities, Faulkner’s narratives are more than Southern tales."
     },
     spanish: {
          title: "Sobre nosotros",
          description: 'Faulkner rara vez parece subestimar, y sus historias tienen un fuerte sabor a el pasado. Tanto su lenguaje como su temática son ricos en tradiciones material. Un sureño bien podría sospechar que sólo un lector empapado de simpatía El conocimiento del Sur tradicional podía comprender plenamente a Faulkner. Faulkner puede parecer, a veces, ser un sureño que habla a y para los sureños. Pero, como, en virtud de su Cualidades imaginativas y simbólicas, las narrativas de Hemingway son más que periodísticas. bocetos, así, en virtud de sus cualidades exploratorias y analíticas, las narraciones de Faulkner son más que cuentos sureños.'
     },
     arabic: {
          title: "معلومات عنا",
        description: 'نادرًا ما يبدو أن فولكنر يقلل من قيمتها ، وتحمل قصصه نكهة ثقيلة الماضي. لغته وموضوعه غنيان بالتقاليد مواد. قد يشك مواطن جنوبي في أن القارئ هو الوحيد المتعاطف  معرفة الجنوب التقليدي يمكن أن تفهم تماما فولكنر. قد يبدو فولكنر ، في بعض الأحيان ، أن تكون جنوبيًا يتحدث إلى الجنوبيين ومن أجلهم. ولكن ، بحكم الصفات الخيالية والرمزية ، روايات همنغواي هي أكثر من مجرد صحفية اسكتشات ، بحكم خصائصها الاستكشافية والتحليلية ، فإن سرديات فولكنر هي أكثر من حكايات جنوبية.'
   }
}