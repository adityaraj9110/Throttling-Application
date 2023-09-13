const arr = [
  "https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1688716290056-c727b0983742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1694290124012-c1d19f091e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1687360728559-53fe4fedf36c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

const throtling = (func, delay) => {
  let timer;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func(...args);
        timer = null;
      }, delay);
    }
  };
};




document.querySelector("#center").addEventListener(
  "mousemove",
  throtling((e) => {
    const div = document.createElement("div");
    div.classList.add("imageDiv");
    document.body.appendChild(div);

    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";

    const img = document.createElement("img");
    img.classList.add("img");
    img.setAttribute("src", arr[Math.floor(Math.random() * 4)]);
    div.appendChild(img);

    gsap.to(img, {
      y: 0,
      ease: Power1,
    });

    gsap.to(img, {
      y: "100%",
      ease: Power1,
      delay: 500,
    });

    setTimeout(() => {
      div.remove();
    }, 1500);
  }, 400)
);

