import Uppy from '../../../../src/core/Core.js'
import Dummy from '../../../../src/plugins/Dummy'
import Tus10 from '../../../../src/plugins/Tus10.js'
import Modal from '../../../../src/plugins/Modal.js'
import DragDrop from '../../../../src/plugins/DragDrop.js'
import GoogleDrive from '../../../../src/plugins/GoogleDrive.js'
import ProgressBar from '../../../../src/plugins/ProgressBar.js'
import Dashboard from '../../../../src/plugins/Dashboard'

import { UPPY_SERVER } from '../env'

const uppy = new Uppy({debug: true, autoProceed: false})
uppy
  .use(Modal, {trigger: '#uppyModalOpener'})
  .use(Dashboard, {target: Modal})
  .use(DragDrop, {target: Modal})
  .use(GoogleDrive, {target: Modal, host: UPPY_SERVER})
  .use(Dummy, {target: Modal})
  .use(Tus10, {endpoint: 'http://master.tus.io:8080/files/'})
  .use(ProgressBar, {target: 'body'})
  .run()
