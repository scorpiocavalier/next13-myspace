const posts = [
  {
    title: 'Introduction to Web Development',
    slug: 'introduction-to-web-development',
    content:
      'Embark on a journey into the world of web development and learn about HTML, CSS, and JavaScript.'
  },
  {
    title: 'Responsive Design Principles',
    slug: 'responsive-design-principles',
    content:
      'Discover the key principles behind creating responsive and mobile-friendly websites that adapt to various screen sizes.'
  },
  {
    title: 'Exploring Modern UI Frameworks',
    slug: 'exploring-modern-ui-frameworks',
    content:
      'Dive into the realm of modern UI frameworks like React, Vue, and Angular, and understand how they streamline web development.'
  },
  {
    title: 'The Power of Backend Technologies',
    slug: 'power-of-backend-technologies',
    content:
      'Uncover the backend technologies that drive web applications, including server-side scripting, databases, and APIs.'
  },
  {
    title: 'Exploring JavaScript Arrays',
    slug: 'exploring-javascript-arrays',
    content:
      'In this post, we delve into the world of JavaScript arrays and discover various methods for manipulation.'
  },
  {
    title: 'The Art of CSS Flexbox',
    slug: 'art-of-css-flexbox',
    content:
      'Learn the intricacies of CSS flexbox and how to create responsive layouts with ease.'
  },
  {
    title: 'Mastering Python Functions',
    slug: 'mastering-python-functions',
    content:
      'A comprehensive guide to mastering Python functions, including parameter passing, return values, and scoping.'
  }
];

import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getServerSession();

  return NextResponse.json(posts);
}
