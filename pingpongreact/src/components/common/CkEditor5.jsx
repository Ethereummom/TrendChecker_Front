import React, { useEffect, useRef, memo } from 'react';
import { CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CkEditor(){

    return (
        <div className='ckEditor-container'>
            <CKEditor
                editor = {ClassicEditor}
                data = '<p>Hello from CKEditor 5!</p>'
                onChange={(event,editor) => {
                    const data = editor.getData();
                    console.log(data);
                }}>
            </CKEditor>
        </div>
    )
}
export default CkEditor;