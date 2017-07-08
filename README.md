# yzFolder

Win10 folder browser on electron.

## Stack

There's no app (yet), so the only interesting thing here is the stack.

<table>
<tr><td>UX<br>(front&nbsp;end)</td><td><b>React, hosted in Electron, coded in TypeScript.</b><br>Specifically TypeScript + React, **without** webpack nor babel, if I can get away with it.
</td></tr>
<tr><td>middle<br>(api&nbsp;layer)</td><td>I'm going to try to keep all I/O, and external calls, and "service compute" out of the UI thread (using WebWorker and async).  That might introduce x-thread and/or IPC delays, but I hope to offset that by <b>heavily caching</b> and <b>aggresively rendering cached data</b>.
<tr><td>cache / storage layer</td><td>Varied.  But I plan to experiment with Chrome's internal options (LocalStorage, IndexDB), raw JSON (aka node's native), Redis, Postgres, and possibly MSSQL express on Win10.</td></tr>
<tr><td>UX of "cache"</td><td>Using data from cache (aka possibly stale data) will require new UX experiments.  I am trying to make cached data rendering intuitive, and maybe even pleasant, using color and/or subtle transitions.
<hr>
If the user knows what they're looking at is from cache, most of the time they know if the content of a folder has changed before the app can finish loading the file list, or well enough to intuitively decide if the data is "good" enough to start the next step in their naviation, or start refreshing their memory about what was in the folder the last time they viewed it.
</td></tr>
</table>

## CSS Framework

I'm not a CSS guru.  Need somthing based on CSS grid or flexbox (i.e. not bootstrap).  I might start with [BassCSS](http://basscss.com).
