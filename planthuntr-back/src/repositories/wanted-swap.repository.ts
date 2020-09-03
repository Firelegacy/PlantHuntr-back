import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {WantedSwap, WantedSwapRelations, Plant, PlantDeal} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PlantDealRepository} from './plant-deal.repository';
import {PlantRepository} from './plant.repository';

export class WantedSwapRepository extends DefaultCrudRepository<
  WantedSwap,
  typeof WantedSwap.prototype.id_swap,
  WantedSwapRelations
> {

  public readonly id_plant: HasOneRepositoryFactory<Plant, typeof WantedSwap.prototype.id_swap>;
  public readonly id_plant_deal: HasOneRepositoryFactory<PlantDeal, typeof WantedSwap.prototype.id_swap>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('PlantDealRepository') protected plantDealRepositoryGetter: Getter<PlantDealRepository>,
    @repository.getter('PlantRepository') protected plantRepositoryGetter: Getter<PlantRepository>
  ) {
    super(WantedSwap, dataSource);
    this.id_plant = this.createHasOneRepositoryFactoryFor('id_plant', plantRepositoryGetter);
    this.id_plant_deal = this.createHasOneRepositoryFactoryFor('id_plant_deal', plantDealRepositoryGetter);
  }
}
