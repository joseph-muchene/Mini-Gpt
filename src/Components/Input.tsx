import { ChangeEvent } from "react";
import { FaPaperPlane } from 'react-icons/fa'

type PropInterface = {
  sourceText: string,
  setSourceText: any,
  handleState: any
}
export default function Input({ sourceText,
  setSourceText, handleState }: PropInterface) {


  return (
    <div>
      <form className="container" onSubmit={handleState}>
        <div className="form-group mt-3">


          <textarea
            className="form-control  "
            id=""
            placeholder="write prompt"
            name="source"
            value={sourceText}
            onChange={(event: ChangeEvent<any>) => setSourceText(event.currentTarget.value)}
            cols={10}
            rows={5}
          ></textarea>
        </div>

        <div className="form-group">

          <button className="my-3 btn btn-secondary" type="submit">submit <FaPaperPlane /></button>
        </div>
      </form>
    </div>
  );
}
