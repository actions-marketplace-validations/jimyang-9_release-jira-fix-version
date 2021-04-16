import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// shows how the runner will run a javascript action with env / stdout protocol
// TODO: toggle real (for dev) vs mock env
test.skip('test runs', () => {
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  const output = cp.execFileSync(np, [ip], options).toString()
  expect(output.length).toBeGreaterThan(0)
})
