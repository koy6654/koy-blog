import { MDXRemote } from 'next-mdx-remote/rsc';
import Divider from '@components/ui/divider';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostFileDataByName } from '@/utils/functions/gray-matter';
import { MdxFiles } from '@/utils/enums';
import remarkGfm from 'remark-gfm';

export interface MdxViewerSlug {
  params: {
    slug: MdxFiles;
  };
}

interface CodeBlockProps {
  children: any;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  const className = children.props.className;
  const language = className ? className.replace(/language-/, '') : '';

  const childrenString = children.props.children;

  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus}>
      {childrenString}
    </SyntaxHighlighter>
  );
};

const MdxComponents = {
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <Divider {...props} orientation="horizontal" />
  ),
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mt-6 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold mt-5 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-semibold mt-4 mb-2" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-xl font-semibold mt-3 mb-2" {...props} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="text-lg font-semibold mt-2 mb-1" {...props} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 className="text-base font-semibold mt-1 mb-1" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-2 mb-0 text-base" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc mt-2 mb-4" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal mt-2 mb-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="ml-4" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-black dark:text-gray-300" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-blue-500 hover:underline dark:text-blue-300"
      {...props}
    />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="max-w-full h-auto" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 pl-4 italic text-black dark:text-gray-400 mt-4 mb-4"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-[#ececec] text-[#0d0d0d] p-1 rounded dark:bg-[#424242] dark:text-[#FFFFFF]"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLElement>) => {
    return <CodeBlock>{props.children}</CodeBlock>;
  },
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <table
      className="w-full border border-gray-300 dark:border-[#fff3] border-collapse text-sm mt-[10px] mb-[10px]"
      {...props}
    />
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-gray-100 dark:bg-[#2c2c2c]" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="p-2 border border-gray-300 dark:border-[#fff3] font-semibold text-left"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="p-2 border border-gray-200 dark:border-[#fff3] align-top"
      {...props}
    />
  ),
  MdxDivider: (props: React.HTMLAttributes<HTMLDivElement>) => (
    <>
      <br />
      <br />
      <Divider />
      <br />
      <br />
    </>
  ),
};

async function MdxViewer({ page }: { page: MdxFiles }) {
  const post = getPostFileDataByName(page);

  return (
    <MDXRemote
      source={post.content}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [],
        },
      }}
      components={MdxComponents}
    />
  );
}

export default MdxViewer;
