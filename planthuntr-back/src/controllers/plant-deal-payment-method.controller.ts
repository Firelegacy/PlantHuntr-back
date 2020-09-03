import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
PlantDeal,
DealPayment,
PaymentMethod,
} from '../models';
import {PlantDealRepository} from '../repositories';

export class PlantDealPaymentMethodController {
  constructor(
    @repository(PlantDealRepository) protected plantDealRepository: PlantDealRepository,
  ) { }

  @get('/plant-deals/{id}/payment-methods', {
    responses: {
      '200': {
        description: 'Array of PlantDeal has many PaymentMethod through DealPayment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(PaymentMethod)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<PaymentMethod>,
  ): Promise<PaymentMethod[]> {
    return this.plantDealRepository.paymentMethods(id).find(filter);
  }

  @post('/plant-deals/{id}/payment-methods', {
    responses: {
      '200': {
        description: 'create a PaymentMethod model instance',
        content: {'application/json': {schema: getModelSchemaRef(PaymentMethod)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof PlantDeal.prototype.id_deal,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PaymentMethod, {
            title: 'NewPaymentMethodInPlantDeal',
            exclude: ['id_payment_method'],
          }),
        },
      },
    }) paymentMethod: Omit<PaymentMethod, 'id_payment_method'>,
  ): Promise<PaymentMethod> {
    return this.plantDealRepository.paymentMethods(id).create(paymentMethod);
  }

  @patch('/plant-deals/{id}/payment-methods', {
    responses: {
      '200': {
        description: 'PlantDeal.PaymentMethod PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PaymentMethod, {partial: true}),
        },
      },
    })
    paymentMethod: Partial<PaymentMethod>,
    @param.query.object('where', getWhereSchemaFor(PaymentMethod)) where?: Where<PaymentMethod>,
  ): Promise<Count> {
    return this.plantDealRepository.paymentMethods(id).patch(paymentMethod, where);
  }

  @del('/plant-deals/{id}/payment-methods', {
    responses: {
      '200': {
        description: 'PlantDeal.PaymentMethod DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(PaymentMethod)) where?: Where<PaymentMethod>,
  ): Promise<Count> {
    return this.plantDealRepository.paymentMethods(id).delete(where);
  }
}
