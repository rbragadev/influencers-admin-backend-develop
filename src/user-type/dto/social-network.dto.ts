import { IsInt, IsString } from 'class-validator';
import { SocialNetwork } from '../entities/social-network.entity';

export class SocialNetworkDto extends SocialNetwork {
  /**
   * O social_network_id é uma chave unica
   * É referenciado em outras tabelas,
   * @example 1
   */
  @IsInt()
  social_network_id: number;

  /**
   * O social_network_name é o nome da rede social
   * @example instagram
   */
  @IsString()
  social_network_name: string;

  /**
   * site principal da rede social
   * @example https://instagram.com
   */
  @IsString()
  social_network_user_url_base: string;

  /**
   * O icone da rede social em banco
   * utilizar os tamanhos 00px x 00px formato: jpg
   * @example https://instagram.com/logo.jpg
   */
  @IsString()
  social_network_icon: string;

  /**
   * O status pode ser ativo ou inativo
   * @example active | inactive
   */
  @IsString()
  status: string;
}
