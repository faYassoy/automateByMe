import { faAlignCenter, faAlignLeft, faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { elementToSVG } from "dom-to-svg";
import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import { ButtonComponent } from "./base_component";
import { IndeComponent } from "./IndeComponent";

export function DockerComponent({
  num,
  setNum,
  data,
  setImg64,
  colors,
  setColors,
  handlerRincian
}) {
  const [text, setText] = useState("#000000");
  const [part, setPart] = useState("#000000");
  const [border, setBorder] = useState("#000000");
  const [storage, setStorage] = useState({});
  const [activeAlign, setActiveAlign] = useState('-translate-x');
  const [selector, setSelector] = useState({ttd1:{},ttd2:{}});
  

  useEffect(() => {
    setStorage(sessionStorage);
    setSelector({ttd1:document.querySelector('#ttd1'),ttd2:document.querySelectorAll('#ttd2')})
  }, []);
  const max = data.length;


  const exportsvg = () => {
    const svgDocument = elementToSVG(document.getElementById("2export"));
    const svgString = new XMLSerializer().serializeToString(svgDocument);
    // console.log(svgString);
    const svg = svgString;
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-10" });
    saveAs(blob, "Innova.svg");
  };

  const exportall = () => {
    for (let i = 0; i < data.length; i++) {
      setTimeout(() => {
        // console.log(data[i])
        exportsvg();
      }, 2000);

      setNum(i);
    }
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const ImgUpload = (e) => {
    const file = e.target.files[0];
    if (file == undefined) {
      return null;
    } else {
      console.log(file);
      getBase64(file).then((base64) => {
        localStorage["bgBase64"] = base64;
        console.debug("file stored", base64);
      });
    }
  };
  const alignContent=(align)=>{
    let element = document.getElementById("container");
    element.classList.replace(activeAlign,align)
    setActiveAlign(align)
  }
  const partColor=(color)=>{
    switch (storage.id) {
      case 'judul':
        document.getElementById('judul').style.color=color
        break;

      case 'nama':
        document.getElementById('nama').style.color=color
        break;

      case 'juara':
        document.getElementById('juara').style.color=color
        break;

      
    }
  }
  //   const changeColor=(e)=>{
  //     let color=e.target.value
  //     let id=e.target.id
  //     // console.log('color: '+color+' || id: '+id)
  //   }
console.log(selector);
  return (
    <div className="bg-zinc-700 px-4 h-full text-lg text-slate-50 font-bold ">
      <IndeComponent num={num} setNum={setNum} max={max} />

      <div className="space-x-4">
        <ButtonComponent
          onClick={() => {
            exportsvg();
          }}
          bg={"primary"}
          label={`Export One`}
        />
        <ButtonComponent
          onClick={() => {
            exportall();
          }}
          bg={"primary"}
          label={`Export All`}
        />
      </div>

      <div className="my-4 w-full">
        <p className="">Background</p>
        <input
          type="file"
          id="background"
          onChange={ImgUpload}
          className=" p-2 bg-slate-50 rounded-lg"
        />
        <button
          className="h-11 w-11 mx-2 bg-sky-400 text-slate-50 rounded-lg "
          onClick={() => {
            let input = document.getElementById("background").value;
            !input ? null : setImg64(localStorage.getItem("bgBase64"));
          }}
        >
          Ok
        </button>
      </div>
      <div className=" flex">
        <div className=" space-x-1 w-1/3">
          <p className="m-2">Warna Text</p>
          <div className="flex">
            <input
              onChange={(e) => setText(e.target.value)}
              className="w-10 h-10 rounded-md"
              type="color"
              name="colorslide"
              id="text"
              value={text}

            />
            <button
              className="h-10 w-10 mx-2 bg-sky-400 text-slate-50 rounded-lg "
              onClick={() => {
                setColors({ ...colors, text: text });
                // console.log(colors);
              }}
            >
              Ok
            </button>
          </div>
        </div>

        <div className={`space-x-1 w-1/3`}>
          <p className="m-2">Warna Individu </p>
          <div className="flex">
            <input
              onChange={(e) => setPart(e.target.value)}
              className="w-10 h-10 rounded-md"
              type="color"
              name="colorslide"
              id="part"
              value={part}
            />
            <button
              className="h-10 w-10 mx-2 bg-sky-400 text-slate-50 rounded-lg "
              onClick={() => {partColor(part)}}
            >
              Ok
            </button>
          </div>
        </div>

        <div className={`space-x-1 w-1/3`}>
          <p className="m-2">Warna Border </p>
          <div className="flex">
            <input
              onChange={(e) => setBorder(e.target.value)}
              className="w-10 h-10 rounded-md"
              type="color"
              name="colorslide"
              id="part"
              value={border}
            />
            <button
              className="h-10 w-10 mx-2 bg-sky-400 text-slate-50 rounded-lg "
              onClick={() => {setColors({...colors,border:border})}}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
      <div className="flex mx-2 w-full mt-4">
        <div className="w-1/2">
          <p >Alignment</p>
          <div className="  space-x-1 mt-2 flex text-lg text-slate-50 font-bold">
            <button
              className="h-10 w-10 pt-1 bg-sky-400 text-slate-50 rounded-lg "
              onClick={() => {alignContent('-translate-x-[12%]')}}
            >
              <FontAwesomeIcon icon={faAlignLeft} size="2x" />
            </button>

            <button
              className="h-10 w-10 pt-1 bg-sky-400 text-slate-50 rounded-lg "
              onClick={() => {alignContent('-translate-x')}}
            >
              <FontAwesomeIcon icon={faAlignCenter} size="2x" />
            </button>

            <button
              className="h-10 w-10 pt-1 bg-sky-400 text-slate-50 rounded-lg "
              onClick={() => {alignContent('translate-x-[12%]')}}
            >
              <FontAwesomeIcon icon={faAlignRight} size="2x" />
            </button>
          </div>
        </div>
        <div className="w-1/2">
        <p >Jumlah Ttd</p>
          <div className=" space-x-1 mt-2 flex text-lg text-slate-50 font-bold">
            <button
              className="h-10 w-10 pt-1 bg-sky-400 text-slate-50 rounded-lg "
              onClick={() => {
                selector.ttd1.style.display="block"
                selector.ttd2.forEach((elm)=>elm.classList.add('hidden'))
                
              }}
            >
              1
            </button>

            <button
              className="h-10 w-10 pt-1 bg-sky-400 text-slate-50 rounded-lg "
              onClick={() => {
                selector.ttd1.style.display="none"
                selector.ttd2.forEach((elm)=>elm.classList.remove('hidden'))
              }}
            >
              2
            </button>
          </div>
        </div>
      </div>
        <div className="w-full mt-4">
          <p>Rincian</p>
          <textarea onChange={handlerRincian} className="text-black rounded-xl p-2" id="rincian" cols="48" rows="5"/>
        </div>
    </div>
  );
}
