import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const commonStyles = "";
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <nav class="w-64 border-r flex flex-col">
      <ul class="container flex flex-col">
        <li class={`${commonStyles} ${active("/")}`}>
          <a href="/">Home</a>
        </li>
        <li class={`${commonStyles} ${active("/streamed")}`}>
          <a href="/streamed">Streamed</a>
        </li>
        <li class={`${commonStyles} ${active("/deferred")}`}>
          <a href="/deferred">Deferred</a>
        </li>
        <li class={`${commonStyles} ${active("/mixed")}`}>
          <a href="/mixed">Mixed</a>
        </li>
        <li class={`${commonStyles} ${active("/with-error")}`}>
          <a href="/with-error">With Error</a>
        </li>
        <li class={`${commonStyles} ${active("/hydration")}`}>
          <a href="/hydration">Hydration</a>
        </li>
        <li class={`${commonStyles} ${active("/prefetch")}`}>
          <a href="/prefetch">Prefetch</a>
        </li>
        <li class={`${commonStyles} ${active("/batch-methods")}`}>
          <a href="/batch-methods">Batching Methods</a>
        </li>
      </ul>
    </nav>
  );
}
