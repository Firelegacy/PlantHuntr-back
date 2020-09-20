import {Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user";

@Entity({name: "collection"})
export class Collection {

    @PrimaryGeneratedColumn(
        "uuid",
        {name: "id_collection"})
    id: string;

    @Index({unique: true})
    @OneToOne(type => User)
    @JoinColumn({
        referencedColumnName: "id"
    })
    user: User;
}