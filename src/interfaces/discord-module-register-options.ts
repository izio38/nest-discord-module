import { Type } from '@nestjs/common';
import { ClientEvents } from 'discord.js';

export interface DiscordListener {
  eventName: keyof ClientEvents;
  handler: (...args: any) => void;
}

export interface DiscordModuleRegisterOptions {
  /**
   * @optional
   * A list of controller to be instanciated
   */
  controllers?: Type<any>[];
  /**
   * @optional
   * A list of event to bind
   */
  discordListeners?: DiscordListener[];
  /**
   * @optional
   * Change the Injector name. Default: `discordBot`
   */
  overridedProviderName?: string;
  /**
   * @optional
   * Change the duration (in seconds) within the module say stop
   * (prevent app to be blocked when discord API is down)
   * default 30 seconds
   */
  timeoutDuration?: number;
}
