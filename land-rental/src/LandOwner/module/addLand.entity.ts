// import { AddLandPicture } from './addLandPicture.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Landowner } from './landownerpersonal.entity';

@Entity('landProfile')
export class LandProfile {
  @PrimaryGeneratedColumn()
  landid: number;

  @Column()
  landname: string;

  @Column({ type: 'text', nullable: true }) // Add a description column
  description: string;

  @Column({ nullable: true }) // Add a location column
  location: string;

  @Column({ type: 'text', nullable: true }) // Add a size column
  size: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true }) // Add a price column
  price: number;

  @ManyToOne(() => Landowner, (owner) => owner.landProfiles)
  owner: Landowner;

  //
  //
  //   @OneToMany(() => AddLandPicture, (landProfile) => landProfile.profile)
  //   landProfilepicture: AddLandPicture[];
}
