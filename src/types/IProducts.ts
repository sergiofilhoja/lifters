export interface IColor {
  nome: string;
  codigo: string;
}

export interface IPhoto {
  url: string;
  capa: boolean;
}

export interface IProduct {
  titulo: string;
  valor: string;
  descricao: string;
  categoria: string;
  cores: IColor[];
  tamanhos: string[];
  fotos: IPhoto[];
  data: IProduct;
}
