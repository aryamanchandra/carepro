import Image from "next/image";

export default function DoctorIcon() {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={"/doctor.svg"} alt="image" width={15} style={{paddingLeft:"3px", paddingRight:"2px"}}/>
    )
}