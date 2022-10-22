async function runAJAX() {
  const res = await fetch("https://imdb-api.com/en/API/InTheaters/k_b6v1rgho");
  const rs = await res.json();
  console.log(rs.items);
}

runAJAX();