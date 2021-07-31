// This post interface is created based on the post types on the API_END
// It is used for ensuring correct type of posts are returned.

export interface Post {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: string;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  topic: any[];
  group: any[];
  _event_location: string;
  _event_venue: string;
  _event_registration: string;
  _start_day: string;
  _start_month: string;
  _start_year: string;
  _end_day: string;
  _end_month: string;
  _end_year: string;
  _links: PostLinks;
  _embedded: Embedded;
}

export interface Embedded {
  author: EmbeddedAuthor[];
  'wp:term': Array<EmbeddedWpTerm[]>;
}

export interface EmbeddedAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: { [key: string]: string };
  user_job_title: string;
  user_website_title: string;
  user_google: string;
  user_twitter: string;
  user_facebook: string;
  user_photo: string;
  user_location: string;
  _links: AuthorLinks;
}

export interface AuthorLinks {
  self: About[];
  collection: About[];
}

export interface About {
  href: string;
}

export interface EmbeddedWpTerm {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  _links: WpTermLinks;
}

export interface WpTermLinks {
  self: About[];
  collection: About[];
  about: About[];
  'wp:post_type': About[];
  curies: Cury[];
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface PostLinks {
  self: About[];
  collection: About[];
  about: About[];
  author: ReplyElement[];
  replies: ReplyElement[];
  'version-history': VersionHistory[];
  'predecessor-version': PredecessorVersion[];
  'wp:attachment': About[];
  'wp:term': LinksWpTerm[];
  curies: Cury[];
}

export interface ReplyElement {
  embeddable: boolean;
  href: string;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface LinksWpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}