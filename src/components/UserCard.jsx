export default function userCard({name,age,avt}){
    return <>
        <div>
            <img src={avt} alt="" />
            <p>Họ và tên: {name}</p>
            <p>Age: {age}</p>
        </div>
    </>
}
