import React from 'react';
import CheckLIstChildren from './CheckListChildren';
import CheckListForm from './CheckListForm';

const CheckList = ({pComponentId, checks, onCheckClick, onCheckListSubmit}) => (
    //checkListをクリックするとフォームとリストが展開
    <div className="checkList">
        チェックリストの作成…
        <ul>
            <CheckListForm pId={pComponentId} onSubmit={onCheckListSubmit}/>
            {checks.map(check => (
                //チェックリストの項目の親IDが一致するものだけ表示
                //check.pId.id === pComponentId &&
                !function(){
                        if(check.pId === pComponentId){
                            return(
                                <CheckLIstChildren 
                                key={check.id}
                                id={check.id}
                                onCheckClick={onCheckClick} 
                                text={check.text} 
                                completed={check.completed} 
                                />
                            );
                        }
                    }
                
            ))}
        </ul>
    </div>
);

export default CheckList;