import { ObjectType, Field, ID } from "type-graphql";
import { Entity, ObjectIdColumn, Column } from "typeorm";

@ObjectType()
@Entity()
export class Todo {
  @ObjectIdColumn()
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @Column("text")
  title: string;

  @Field(() => String)
  @Column("boolean")
  isDone: boolean;
}
