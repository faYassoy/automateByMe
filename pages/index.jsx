import { DockerComponent } from "../components/DockerComponent";
import { CertyComponent } from "../components/CertyComponent";
import React, { useEffect, useState } from "react";
import { get } from "./api/crudNoAuth";
import base64Img from "../public/bgs/base64Img.js";
// import CanvasComponent from '../components/CanvasComponent';
// import { parseExcel } from './api/mockserver';

const Index = () => {
  const [data, setData] = useState([
    { nama: "fauzan", juara: "satu", lomba: "sabar" },
  ]);
  const [num, setNum] = useState(0);
  const [img64, setImg64] = useState(base64Img.c1);
  const [colors, setColors] = useState({text: "#000000",border: "#000000"});
  const [rincian, setRincian] = useState(``);
  // const [parentStorage, setParentStorage] = useState({});

  useEffect(async () => {
    let response = await get("data");

    if (response.status == 200) {
      setData(response.data[0].data);
    }
    // setParentStorage(sessionStorage)
  }, []);
  const handlerRincian=(e)=>{
    setRincian(e.target.value)
    
  }
  // console.log(num);
  return (
    <div className="grid grid-cols-4 w-screen h-screen overflow-hidden">
      <CertyComponent data={data[num]} img64={img64} colors={colors} rincian={rincian} />

      <DockerComponent
        num={num}
        setNum={setNum}
        data={data}
        setImg64={setImg64}
        colors={colors}
        setColors={setColors}
        handlerRincian={handlerRincian}
      />
    </div>
  );
};

export default Index;

{
  /* <Link href="TestComponent/component">
  <ButtonComponent label="Cek Input Component" bg={"primary"} />
</Link>

<Link href="TestComponent/button-component">
  <ButtonComponent label="Cek Button Component" bg={"primary"} />
</Link>

<Link href="TestComponent/other-component">
  <ButtonComponent label="Cek Other Component" bg={"primary"} />
</Link>

<Link href="/sidebar">
  <ButtonComponent label="Cek Sidebar" bg={"primary"} />
</Link>

<Link href="TestComponent/table">
  <ButtonComponent label="Cek Table" bg={"primary"} />
</Link>

<Link href="TestComponent/table-plus">
  <ButtonComponent label="Cek Table Plus" bg={"primary"} />
</Link>

<Link href="TestComponent/table-crud">
  <ButtonComponent label="Cek Table Crud" bg={"primary"} />
</Link>

<Link href="TestComponent/form">
  <ButtonComponent label="Cek Form" bg={"primary"} />
</Link> */
}
