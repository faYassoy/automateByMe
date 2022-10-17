import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { render } from "react-dom";

export function CertyComponent({ data, img64, colors,rincian }) {
  const [storage, setstorage] = useState({border:'#000000'});
  useEffect(() => {
    setstorage(sessionStorage)
  }, []);

  const selected = (e) => {
    sessionStorage.setItem("id", e.target.id);
    let element = document.getElementById(e.target.id);
    element.classList.add("selected");
    element.classList.add("bg-sky-200");
    console.log(sessionStorage.getItem("id"));
   
    setTimeout(() => {
      element.classList.remove("selected");
    }, 300);
    setTimeout(() => {
      element.classList.remove("bg-sky-200");
      // element.classList.remove("selected");
    },5000);
  };

  return (
    <div className=" w-[900px] h-[600px] ml-8 my-4 col-span-3" id="2export">
      <div className="relative z-0">
        <div className="absolute z-50 h-full overflow-hidden">
          <div
            id="container"
            style={{ color: `${colors.text}` }}
            className="text-center w-[900px]  font-serif font-bold -translate-x"
          >
            <div className="flex w-[86%] h-36 mx-[7%] p-5">
              <div id='intansi warper' className="hidden">
                <div className="w-[18%] p-2">
                  <img src="/favicon.ico" alt="" />
                </div>
                <div className="w-full h-[70%]">
                  <p
                    id="intansi"
                    onClick={selected}
                    className="w-[86%] mx-[7%]  text-2xl font-extrabold cursor-pointer"
                  >
                    Piagam Penghargaan
                  </p>
                </div>
                <div className="w-[18%] p-2">
                  <img src="/favicon.ico" alt="" />
                </div>
              </div>
            </div>
            <p
              id="judul"
              onClick={selected}
              className="w-[86%] mx-[7%] tracking-[5px] text-5xl font-extrabold font-display cursor-pointer"
            >
              Piagam Penghargaan
            </p>
            {/* <p className='tracking-[5px] my-2 '>OF ACHIEVEMENT</p> */}
            <p className="tracking-[2px] text-lg mt-6 ">Di Berikan Kepada :</p>
            <p
              id="nama"
              onClick={selected}
              style={{ borderColor :`${colors.border}`}}
              className={`mt-2 w-[60%] mx-[20%] pb-2 border-b-4 text-3xl font-extrabold cursor-pointer`} 
            >
              {data.nama}
            </p>
            <p className="tracking-[2px] text-lg mt-8 ">Sebagai :</p>
            <p
              id="juara"
              onClick={selected}
              className="w-[60%] mx-[20%] tracking-[5px] text-4xl font-extrabold cursor-pointer"
            >
              {data.juara}
            </p>
            <p
              id="rincian"
              onClick={selected}
              className="h-20 tracking-widest px-[175px] translate-y-[20px] cursor-pointer"
            >
              For her membership and contribution in lomba {data.lomba} {rincian} with the
              Lyon General Hospital started in 2003. Today we want to thank the
              professionalism and collaboration in the industry.
            </p>
            <div className="flex px-[150px] translate-y-[80px] ml-4 z-20 justify-between">
              <div id='ttd2' style={{ borderColor: `${colors.border}` }} className="w-1/3 border-b-2">hhgh</div>
              <div id='ttd1' style={{ borderColor: `${colors.border}`,display:"none" }} className=" mx-auto w-1/3 border-b-2">wkwkwk</div>
              <div id='ttd1'></div>
              <div id='ttd2' style={{ borderColor: `${colors.border}` }} className="w-1/3 border-b-2 ">jgjg</div>
            </div>
          </div>
        </div>

        <span className="-z-50">
          <Image
            src={`${img64}`}
            width={900}
            height={600}
            onContextMenu={(e) => e.preventDefault()}
          />
          {/* <Image src={`/bgs/c1.svg`} width={900} height={600} onContextMenu={(e) => e.preventDefault()} /> */}
        </span>
      </div>
    </div>
  );
}
