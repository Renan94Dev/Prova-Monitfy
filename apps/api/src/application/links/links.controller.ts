import { Controller, Get, Inject, Param, Res } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Response } from 'express';
import { LINKS_SERVICE_TOKEN } from 'src/constants';
import { LinksService } from 'src/domain/services/LinkService';

@Controller('/')
export class LinksController {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    @Inject(LINKS_SERVICE_TOKEN) private readonly linksService: LinksService,
  ) {}

  @Get('custom/:shortcode')
  async redirectHandler(
    @Param('shortcode') shortCode: string,
    @Res() response: Response,
  ) {
    const url = await this.linksService.findLink(shortCode);

    if (url) {
      this.eventEmitter.emit('link.access', shortCode);
      return response.status(301).redirect(url);
    }

    return response.status(301).send('/');
  }

  @OnEvent('link.access')
  async linkAccessHandler(@Param('shortcode') shortCode: string) {
    await this.linksService.registerLinkAccess(shortCode);
  }
}
