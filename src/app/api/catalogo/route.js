import { NextResponse } from "next/server";
import getFetch from '../getFetch'
import getData from "../getData";

const sleep = (timer) => {
    return new Promise ( (resolve) => setTimeout(resolve, timer))
}

export async function GET() {
    await sleep(1000)
    const productos = await getData()

    return NextResponse.json(productos)
}


