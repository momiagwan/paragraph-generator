var text=[`Lor ipsum dolor sit amet, consectetur adipisicing elit. Non veritatis perferendis, eveniet culpa commodi est vero magni eligendi architecto esse quos illo neque voluptates, tempore soluta fuga ipsam aspernatur officiis similique earum numquam minus voluptas, asperiores dolore. Architecto consequatur enim dolores corrupti. Delectus doloremque aut minima molestias modi reiciendis. Earum, vel distinctio. A aut voluptate quasi modi, animi similique harum.`,
` more ipsum dolor sit amet consectetur adipisicing elit. Non veritatis perferendis, eveniet culpa commodi est vero magni eligendi architecto esse quos illo neque voluptates, tempore soluta fuga ipsam aspernatur officiis similique earum numquam minus voluptas, asperiores dolore. Architecto consequatur enim dolores corrupti. Delectus doloremque aut minima molestias modi reiciendis. Earum vel distinctio. A aut voluptate quasi modi animi similique harum.`,
`show ipsum dolor sit amet, consectetur adipisicing elit. Non veritatis perferendis, eveniet culpa commodi est vero magni eligendi architecto esse quos illo neque voluptates, tempore soluta fuga ipsam aspernatur officiis similique earum numquam minus voluptas, asperiores dolore. Architecto consequatur enim dolores corrupti. Delectus doloremque aut minima molestias modi reiciendis. Earum, vel distinctio. A aut voluptate quasi modi, animi similique harum.`,
`now ipsum dolor sit amet, consectetur adipisicing elit. Non veritatis perferendis, eveniet culpa commodi est vero magni eligendi architecto esse quos illo neque voluptates, tempore soluta fuga ipsam aspernatur officiis similique earum numquam minus voluptas, asperiores dolore. Architecto consequatur enim dolores corrupti. Delectus doloremque aut minima molestias modi reiciendis. Earum, vel distinctio. A aut voluptate quasi modi, animi similique harum.`,
`how ipsum dolor sit amet, consectetur adipisicing elit. Non veritatis perferendis, eveniet culpa commodi est vero magni eligendi architecto esse quos illo neque voluptates, tempore soluta fuga ipsam aspernatur officiis similique earum numquam minus voluptas, asperiores dolore. Architecto consequatur enim dolores corrupti. Delectus doloremque aut minima molestias modi reiciendis. Earum, vel distinctio. A aut voluptate quasi modi, animi similique harum.`,
`howww ipsum dolor sit amet, consectetur adipisicing elit. Non veritatis perferendis, eveniet culpa commodi est vero magni eligendi architecto esse quos illo neque voluptates, tempore soluta fuga ipsam aspernatur officiis similique earum numquam minus voluptas, asperiores dolore. Architecto consequatur enim dolores corrupti. Delectus doloremque aut minima molestias modi reiciendis. Earum, vel distinctio. A aut voluptate quasi modi, animi similique harum.`,

`bore ipsum dolor sit amet, consectetur adipisicing elit. Non veritatis perferendis, eveniet culpa commodi est vero magni eligendi architecto esse quos illo neque voluptates, tempore soluta fuga ipsam aspernatur officiis similique earum numquam minus voluptas, asperiores dolore. Architecto consequatur enim dolores corrupti. Delectus doloremque aut minima molestias modi reiciendis. Earum, vel distinctio. A aut voluptate quasi modi, animi similique harum.`,
`fore ipsum dolor sit amet, consectetur adipisicing elit. Non veritatis perferendis, eveniet culpa commodi est vero magni eligendi architecto esse quos illo neque voluptates, tempore soluta fuga ipsam aspernatur officiis similique earum numquam minus voluptas, asperiores dolore. Architecto consequatur enim dolores corrupti. Delectus doloremque aut minima molestias modi reiciendis. Earum, vel distinctio. A aut voluptate quasi modi, animi similique harum.`,
`jore ipsum dolor sit amet, consectetur adipisicing elit. Non veritatis perferendis, eveniet culpa commodi est vero magni eligendi architecto esse quos illo neque voluptates, tempore soluta fuga ipsam aspernatur officiis similique earum numquam minus voluptas, asperiores dolore. Architecto consequatur enim dolores corrupti. Delectus doloremque aut minima molestias modi reiciendis. Earum, vel distinctio. A aut voluptate quasi modi, animi similique harum.`
];
const items=document.querySelector("#items")
const dataContainer=document.querySelector("#data")
const generate=()=>{console.log(items.value)
    if (isNaN(items.value) || items.value<0 || items.value>9)
    {var randomIndex=Math.floor(Math.random()*text.length)
     console.log(randomIndex)
dataContainer.innerHTML=`<p> ${text[randomIndex]}</p>`
}
else
{ const data=text.slice(0,items.value);
    console.log(data)
const paras=data.map((d)=>{ return `<p> ${d} </p>`})
console.log(paras)
dataContainer.innerHTML=paras.join(" ");}}