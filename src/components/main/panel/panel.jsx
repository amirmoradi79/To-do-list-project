import './panel.css'

export function Panel() {

    return (
        <>

            <div className='panle'>
                <div className="input-border">
                    <input className="input-nameList" type="text" placeholder="Add to Here" />
                    <button className="button-add">+</button>
                </div>
                <div>
                    <select name="categories" id="categories" className='categories'>
                        <option value="all">All</option>
                        <option value="done">Done</option>
                        <option value="undone">Undone</option>
                    </select>
                </div>
            </div> 
            <div className='tasks'> 
                

            </div>

        </>
    )

}