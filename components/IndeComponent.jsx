import {
  faSquareCaretDown,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function IndeComponent({ num, setNum,max }) {
  return (
    <div className="m-4 space-x-2">
      <button
        disabled={num == 0 ? true : false}
        onClick={() => {
          setNum(num - 1);
        }}
        className="bg__primary w-8 h-8 pt-1 rounded-lg"
      >
        <FontAwesomeIcon icon={faSquareCaretUp} inverse />
      </button>
      <button
        disabled={num == (max-1) ? true : false}
        onClick={() => {
          setNum(num + 1);
        }}
        className="bg__primary w-8 h-8 pt-1 rounded-lg"
      >
        <FontAwesomeIcon icon={faSquareCaretDown} inverse />
      </button>
      <span className='text-2xl font-bold text-slate-50 mx-2'>Halaman: {num+1} dari {max}</span>
    </div>
  );
}
