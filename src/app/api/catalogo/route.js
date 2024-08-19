import { NextResponse } from "next/server";
import getFetch from '../getFetch'

const sleep = (timer) => {
    return new Promise ( (resolve) => setTimeout(resolve, timer))
}

export async function GET() {
    await sleep(1000)
    const productos = await getFetch()

    return NextResponse.json(productos)
}