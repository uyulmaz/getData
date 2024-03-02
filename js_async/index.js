console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

const contain = document.getElementById("contain");

const getData = () => {
  const getFetch = fetch("https://restcountries.com/v3.1/all").then(
    (response) =>
      response
        .json()
        .then((res) =>
          res.forEach((element) => {
            let divs = document.createElement("div");
            divs.style.padding = "20px";
            divs.style.float = "left";
            let img = document.createElement("img");
            img.style.height = "100px";
            img.style.width = "100%";
            img.style.backgroundSize = "cover";
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            h3.style.width = "100px";
            h3.style.height = "20px";
            p.style.width = "100px";
            p.style.height = "20px";
            img.src = element.flags.png;

            h3.innerHTML = element.name.common;
            p.innerHTML = element.population;
            divs.append(img, h3, p);
            contain.append(divs);
            console.log(element);
          })
        )
        .catch((err) => console.log(err))
  );
};

getData();

const myFunc = () => {
  const getData = fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((res) => console.log(res[0].name.common))
    .catch((err) => console.log(err));
};

myFunc();
