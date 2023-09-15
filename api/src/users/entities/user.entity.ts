import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'tinyint', nullable: false })
  enabled: boolean;

  @Column({ type: 'timestamp', name: 'create_date' })
  createDate: Date;

  @Column({ type: 'timestamp', name: 'update_date' })
  updateDate: Date;
}
