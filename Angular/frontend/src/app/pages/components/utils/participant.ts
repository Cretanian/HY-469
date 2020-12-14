export class participant {
  name: string;
  src1: string;
  src2: string;
  src3: string;
  srcProfile?: string;
  team: string;
  isMuted: boolean;
  constructor(name: string, src2: string, isMuted: boolean){
    this.name = name;
    this.src2 = src2;
    this.isMuted = isMuted;
  }
}
