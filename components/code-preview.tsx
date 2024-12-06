import React from 'react';

export function CodePreview() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] mb-12">
      {/* Dark code editor background */}
      <div className="h-[465px] w-[1233px] absolute !m-[0] right-[-18px] bottom-[-33.85px] rounded-mini bg-mediumspringgreen-100 overflow-hidden shrink-0 [transform:_rotate(-1.5deg)] [transform-origin:0_0]" />

      <div className="absolute inset-0 bg-black rounded-xl border-[4px] border-[#00FF9D] overflow-hidden">
        <pre className="p-8 text-sm font-mono">
          <code>
            <span className="text-pink-500">var</span>
            <span className="text-white"> ww = w.</span>
            <span className="text-[#61DAFB]">width</span>
            <span className="text-white">();</span>
            {'\n\n'}
            <span className="text-pink-500">if</span>
            <span className="text-white"> (y + th + ay >= b &&</span>
            {'\n    '}
            <span className="text-white">y {'<='} b + wh + ay &&</span>
            {'\n    '}
            <span className="text-white">x + tw + ax >= a &&</span>
            {'\n    '}
            <span className="text-white">x {'<='} a + ww + ax) {'{'}</span>
            {'\n    '}
            <span className="text-[#6A9955]">// trigger the custom event</span>
            {'\n    '}
            <span className="text-pink-500">if</span>
            <span className="text-white"> (!t.appeared) t.</span>
            <span className="text-[#61DAFB]">trigger</span>
            <span className="text-white">(&apos;appear&apos;, settings.data);</span>
            {'\n'}
            <span className="text-white">{'}'}</span>
          </code>
        </pre>
      </div>

      {/* Overlaid HTML preview */}
      <div className="absolute top-1/2 right-0 transform translate-x-[10%] -translate-y-1/2 bg-white p-6 rounded-lg border-[4px] border-[#00FF9D] rotate-6 shadow-[8px_8px_0px_#00FF9D] z-10">
        <pre className="font-mono text-sm whitespace-pre-wrap">
          <code>{`<body>
<h1>why kids learn coding </h1>

<hr>

<p> </p>

<p>Coding is new fuel in economy</p>

<ul>
  <li>Communicate effectively with technical teammates. ..</li>
</ul>`}</code>
        </pre>
      </div>
    </div>
  );
}

