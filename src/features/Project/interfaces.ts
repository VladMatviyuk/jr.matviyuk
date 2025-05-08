export type IImageSrc = string;
export type ITechnology = string;
export type IProjectDescription = string;
export type ILinkProject = {title: string, link: string };

export type IProject = {
  imageSrc: IImageSrc,
  links: ILinkProject[],
  description: IProjectDescription,
  technologies: ITechnology[],
};