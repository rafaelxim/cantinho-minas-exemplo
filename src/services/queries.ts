import { gql } from "@apollo/client";
import Config from "../config.json";

console.log({ "Config.template": Config.template });

export const GET_MENUS = gql`
query {
  menus(
    filters: {
      template: { name: { eq: "${Config.template}" } }      
    }
  ) {
    data {
      id
      attributes {        
        name
        url
      }
    }
  }
}

`;

export const GET_SLIDERS = gql`
  query {
    sliders(
      filters: {
        template: { name: { eq: "${Config.template}" } }
      }
    )  {
      data {
        attributes {
          type
          mainTitle
          subTitle
          media1540x940 {
            data {
              attributes {
                formats
                hash
                ext
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ABOUT = gql`
  query {
    abouts(
      filters: {
        template: { name: { eq: "${Config.template}" } }
      }
    ) {
      data {
        attributes {
          Titulo1
          titulo2
          titulo3
          paragrafo1
          paragrafo2
          paragrafo3
          img1_520x540 {
            data {
              attributes {
                hash
                ext
              }
            }
          }
          img2_410x390 {
            data {
              attributes {
                hash
                ext
              }
            }
          }
          img3_630x460 {
            data {
              attributes {
                hash
                ext
              }
            }
          }
          img4_300x300 {
            data {
              attributes {
                hash
                ext
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CHEFS = gql`
  query {
    chefs(
      filters: {
        template: { name: { eq: "${Config.template}" } }
      }
    ) {
      data {
        attributes {
          facebook
          twitter
          instagram
          nome
          cargo
          detalhes
          habilidade1
          habilidade2
          habilidade3
          pctHabilidade1
          pctHabilidade2
          pctHabilidade3
          img_410x410 {
            data {
              attributes {
                hash
                ext
              }
            }
          }
        }
      }
    }
  }
`;

export const SINGLE_DATA = gql`
  query {
    singleDataRestaurantOnes(
      filters: { template: { name: { eq: "${Config.template}" } } }
    ) {
      data {
        attributes {
          diferencial1
          diferencial2
          diferencial3
          descDiferencial1
          descDiferencial2
          descDiferencial3
          paralax1_title
          cardapioDesc
          phone
          facebook
          twitter
          instagram
          youtube
          reservaText
          galeriaText
          email
          endereco
          mapsLink         
          footerImg_1540x652 {
            data {
              attributes{
                hash
                ext
              }
            }
          }
          galeriaImages {
            data {
             attributes{
               hash
               ext
             }
           }
         }
          reservaImg_1540x798{
            data {
              attributes{
                hash
                ext
              }
            }
          }
          logo250x44 {
            data {
              attributes {
                hash
                ext
              }
            }
          }
          cardapioImg_630x500{
            data {
              attributes{
                hash
                ext
              }
            }
          }
          paralax1_video {
            data {
              attributes {
                hash
                ext
              }
            }
          }
          paralax1_img_1540x645 {
            data {
              attributes {
                hash
                ext
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_MENU_SECTIONS = gql`
query {
  menuSections(filters: { template: { name: { eq: "${Config.template}" } } }) {
    data {
      id
      attributes {
        label
        menu_items {
          data {
            attributes {
              name
              price
              description
            }
          }
        }
      }
    }
  }
}

`;
