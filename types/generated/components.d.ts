import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksButton extends Struct.ComponentSchema {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface BlocksCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    buttonLink: Schema.Attribute.Component<'blocks.link', false>;
    Description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    Name: Schema.Attribute.String;
    Number: Schema.Attribute.Integer;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY', 'TERTIARY']>;
  };
}

export interface BlocksLink extends Struct.ComponentSchema {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface BlocksMarkdownText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_markdown_texts';
  info: {
    displayName: 'MarkdownText';
  };
  attributes: {
    paragraph: Schema.Attribute.RichText;
  };
}

export interface BlocksMedia extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media';
  info: {
    displayName: 'Media';
  };
  attributes: {
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksStat extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats';
  info: {
    description: '';
    displayName: 'stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionBlogOverview extends Struct.ComponentSchema {
  collectionName: 'components_section_blog_overviews';
  info: {
    description: '';
    displayName: 'BlogOverview';
  };
  attributes: {
    blogposts: Schema.Attribute.Relation<'oneToMany', 'api::blogpost.blogpost'>;
    Heading: Schema.Attribute.String;
    Subtext: Schema.Attribute.Text;
  };
}

export interface SectionCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_section_case_studies';
  info: {
    description: '';
    displayName: 'CaseStudies';
  };
  attributes: {
    case_studies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    Heading: Schema.Attribute.String;
    Subtext: Schema.Attribute.Text;
  };
}

export interface SectionCustomerLogos extends Struct.ComponentSchema {
  collectionName: 'components_section_customer_logos';
  info: {
    description: '';
    displayName: 'CustomerLogos';
  };
  attributes: {};
}

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'blocks.button', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Text;
    stats: Schema.Attribute.Component<'blocks.stat', true>;
  };
}

export interface SectionServices extends Struct.ComponentSchema {
  collectionName: 'components_section_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    Subtext: Schema.Attribute.Text;
  };
}

export interface SectionStudiesAndWhitepapers extends Struct.ComponentSchema {
  collectionName: 'components_section_studies_and_whitepapers';
  info: {
    displayName: 'StudiesAndWhitepapers';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    studies_and_whitepapers: Schema.Attribute.Relation<
      'oneToMany',
      'api::study-and-whitepaper.study-and-whitepaper'
    >;
    Subtext: Schema.Attribute.Text;
  };
}

export interface SectionTeam extends Struct.ComponentSchema {
  collectionName: 'components_section_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Subtext: Schema.Attribute.Text;
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
  };
}

export interface SectionTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_section_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Subtext: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.button': BlocksButton;
      'blocks.card': BlocksCard;
      'blocks.link': BlocksLink;
      'blocks.markdown-text': BlocksMarkdownText;
      'blocks.media': BlocksMedia;
      'blocks.stat': BlocksStat;
      'section.blog-overview': SectionBlogOverview;
      'section.case-studies': SectionCaseStudies;
      'section.customer-logos': SectionCustomerLogos;
      'section.hero': SectionHero;
      'section.services': SectionServices;
      'section.studies-and-whitepapers': SectionStudiesAndWhitepapers;
      'section.team': SectionTeam;
      'section.testimonials': SectionTestimonials;
    }
  }
}
