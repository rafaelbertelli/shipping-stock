import { Controller, Get, Res, Query, Req, Delete, Post, Inject, UseInterceptors, Headers } from '@nestjs/common';
import { Response, Request } from 'express'

@Controller('items')
export class ItemsController {

  @Get()
  findAll(@Req() req: Request, @Res() res: Response, @Query() params: string) {
    const items = req.params
    console.log('.....', items)

    res.send(items)
    res.status(400).json({})
  }

  @Get("/:id?")
  findOne(@Req() req: Request, @Res() res: Response, @Query() params: string) {
    const items = req.query
    console.log('.....', items)

    // res.send(items)
    res.status(400).json({ message: "NOOOO" })
  }

}
