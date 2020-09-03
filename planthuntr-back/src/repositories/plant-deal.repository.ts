import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {PlantDeal, PlantDealRelations, User, CollectionItem, Auction, PaymentMethod, DealPayment} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {CollectionItemRepository} from './collection-item.repository';
import {AuctionRepository} from './auction.repository';
import {DealPaymentRepository} from './deal-payment.repository';
import {PaymentMethodRepository} from './payment-method.repository';

export class PlantDealRepository extends DefaultCrudRepository<
  PlantDeal,
  typeof PlantDeal.prototype.id_deal,
  PlantDealRelations
> {

  public readonly user: BelongsToAccessor<User, typeof PlantDeal.prototype.id_deal>;

  public readonly id_collection_item: HasOneRepositoryFactory<CollectionItem, typeof PlantDeal.prototype.id_deal>;

  public readonly id_plant_deal: HasOneRepositoryFactory<Auction, typeof PlantDeal.prototype.id_deal>;

  public readonly paymentMethods: HasManyThroughRepositoryFactory<PaymentMethod, typeof PaymentMethod.prototype.id_payment_method,
          DealPayment,
          typeof PlantDeal.prototype.id_deal
        >;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('CollectionItemRepository') protected collectionItemRepositoryGetter: Getter<CollectionItemRepository>, @repository.getter('AuctionRepository') protected auctionRepositoryGetter: Getter<AuctionRepository>, @repository.getter('DealPaymentRepository') protected dealPaymentRepositoryGetter: Getter<DealPaymentRepository>, @repository.getter('PaymentMethodRepository') protected paymentMethodRepositoryGetter: Getter<PaymentMethodRepository>,
  ) {
    super(PlantDeal, dataSource);
    this.paymentMethods = this.createHasManyThroughRepositoryFactoryFor('paymentMethods', paymentMethodRepositoryGetter, dealPaymentRepositoryGetter,);
    this.id_plant_deal = this.createHasOneRepositoryFactoryFor('id_plant_deal', auctionRepositoryGetter);
    this.registerInclusionResolver('id_plant_deal', this.id_plant_deal.inclusionResolver);
    this.id_collection_item = this.createHasOneRepositoryFactoryFor('id_collection_item', collectionItemRepositoryGetter);
    this.registerInclusionResolver('id_collection_item', this.id_collection_item.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
