import { NextResponse } from "next/server";
import mockApi from '../../../utils/mockApi.json'

export async function GET(request, {params}) {

    const {marca} = params;
    console.log("esto es marca", marca);
    const productsMarca =  mockApi.filter((item) => (item.marca.toLocaleLowerCase() === marca.toLocaleLowerCase()))
    console.log("esto es productsMarca", productsMarca);

    

    return NextResponse.json(productsMarca)
}