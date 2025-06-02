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
    image: Schema.Attribute.Media<'images'>;
    TextBox1: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 12;
      }>;
    TextBox2: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 12;
      }>;
    TextBox3: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 12;
      }>;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY', 'TERTIARY']>;
  };
}

export interface BlocksCardBig extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_bigs';
  info: {
    description: '';
    displayName: 'cardBig';
  };
  attributes: {
    buttonLink: Schema.Attribute.Component<'blocks.link', true>;
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    number: Schema.Attribute.Integer;
    paragraph: Schema.Attribute.Text;
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

export interface SectionCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_section_case_studies';
  info: {
    displayName: 'CaseStudies';
  };
  attributes: {
    case_studies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    Subtext: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface SectionCustomerLogos extends Struct.ComponentSchema {
  collectionName: 'components_section_customer_logos';
  info: {
    description: '';
    displayName: 'CustomerLogos';
  };
  attributes: {
    customer_logos: Schema.Attribute.Relation<
      'oneToMany',
      'api::customer-logo.customer-logo'
    >;
  };
}

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'blocks.button', false>;
    CustomerLogos: Schema.Attribute.Component<'section.customer-logos', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Text;
  };
}

export interface SectionServices extends Struct.ComponentSchema {
  collectionName: 'components_section_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    services: Schema.Attribute.Component<'blocks.card', true>;
    Subtext: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.button': BlocksButton;
      'blocks.card': BlocksCard;
      'blocks.card-big': BlocksCardBig;
      'blocks.link': BlocksLink;
      'blocks.markdown-text': BlocksMarkdownText;
      'blocks.media': BlocksMedia;
      'section.case-studies': SectionCaseStudies;
      'section.customer-logos': SectionCustomerLogos;
      'section.hero': SectionHero;
      'section.services': SectionServices;
    }
  }
}
