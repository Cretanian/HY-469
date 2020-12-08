import { ContactsController } from './contacts/contacts.controller';
import { MessagesController } from './messages/messages.controller';
import { UserController } from './user/user.controller';
import * as express from 'express';
import { ResourceController } from '../shared';
import { ITask, TaskModel } from '@app/models';
import { FilesController } from './files/files.controller';
import { SocketEventsController } from './socket-events/socket-events.controller';
import { ExampleController } from './example/example.controller';
import { TeamsListController } from './Cretanian/lists/teams-list/teams-list.controller';
import { SmarthomeListController } from './Cretanian/lists/smarthome-list/smarthome-list.controller';
import { OnlineDevicesListController } from './Cretanian/lists/online-devices-list/online-devices-list.controller';
import { FilesHeadersController } from './Cretanian/files-headers/files-headers.controller';
import { ChatHeadersController } from './Cretanian/chat-headers/chat-header.controller';
import { ExplorerCalendarHeaderListController } from './Cretanian/lists/explorer-calendar-header-list/explorer-calendar-header-list.controller';
import { TeamCalendarHeaderListController } from './Cretanian/lists/team-calendar-header-list/team-calendar-header-list.controller';
import { TeamDayCalendarListController } from './Cretanian/lists/team-day-calendar-list/team-explorer-day-calendar-list.controller';
import { InOutDevicesController } from './Cretanian/InOut-devices/inout-devices.controller';
import { OutVideoController } from './Cretanian/out-video/out-video.controller';

const apiV1Router = express.Router();

apiV1Router
  // Sockets events routes
  .use(
    '/socket-events',
    new SocketEventsController().applyRoutes()
  )

  // Sockets events routes
  .use(
    '/files',
    new FilesController().applyRoutes()
  )

  // Task routes
  .use(
    '/tasks',
    new ResourceController<ITask>(TaskModel).applyRoutes()
  )

  // Example routes
  .use(
    '/example',
    new ExampleController().applyRoutes()
  )

  .use(
    '/contacts',
    new ContactsController().applyRoutes()
  )

  .use(
    '/messages',
    new MessagesController().applyRoutes()
  )
  
  .use(
    '/user',
    new UserController().applyRoutes()
  )

  /* Cretanian */
  .use(
    '/smarthome-list',
    new SmarthomeListController().applyRoutes()
  )

  .use(
    '/online-devices-list',
    new OnlineDevicesListController().applyRoutes()
  )
  
  .use(
    '/files-headers',
    new FilesHeadersController().applyRoutes()
  )

  .use(
    '/chat-headers',
    new ChatHeadersController().applyRoutes()
  )

  .use(
    '/explorer-calendar-headers-list',
    new ExplorerCalendarHeaderListController().applyRoutes()
  )

  .use(
    '/team-header-calendar-list',
    new TeamCalendarHeaderListController().applyRoutes()
  )

  .use(
    '/team-day-calendar-list',
    new TeamDayCalendarListController().applyRoutes()
  )

  .use(
    '/in-out-devices',
    new InOutDevicesController().applyRoutes()
  )

  .use(
    '/out-video',
    new OutVideoController().applyRoutes()
  )
 
  .use(
    '/teams-list',
    new TeamsListController().applyRoutes()
  );
  
export { apiV1Router };