export default function withCenter(WrappedComponent){
    function NewComponent(){
        return <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:600}}>
            <WrappedComponent />
        </div>
    }
   return NewComponent;
}