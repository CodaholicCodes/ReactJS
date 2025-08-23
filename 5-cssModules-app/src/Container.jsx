import css from './Container.module.css'
const Container=(props)=>{
 return <>
 <div className={css.container}>
    This is our content
    </div>
 {props.children}
    </>;
}
export default Container;