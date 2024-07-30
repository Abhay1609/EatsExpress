export class apiResponse{
    constructor(
        stausCode,
        message="Success",
        data,

    ){
        this.stausCode=stausCode
        this.message=message
        this.data=data
        this.success=stausCode<400
    }
}