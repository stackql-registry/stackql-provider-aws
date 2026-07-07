--- 
title: endpoint_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_configs
  - sagemaker
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>endpoint_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoint_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.endpoint_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_endpoint_config"
    values={[
        { label: 'describe_endpoint_config', value: 'describe_endpoint_config' },
        { label: 'list_endpoint_configs', value: 'list_endpoint_configs' }
    ]}
>
<TabItem value="describe_endpoint_config">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="AsyncInferenceConfig" /></td>
    <td><code>object</code></td>
    <td>Returns the description of an endpoint configuration created using the CreateEndpointConfig API.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the endpoint configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataCaptureConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration to control how SageMaker AI captures inference data.</td>
</tr>
<tr>
    <td><CopyableCode code="EnableNetworkIsolation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointConfigArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint configuration. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:endpoint-config/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointConfigName" /></td>
    <td><code>string</code></td>
    <td>Name of the SageMaker endpoint configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that you assigned to the endpoint configuration. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExplainerConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration parameters for an explainer.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MetricsConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration parameters for utilization metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductionVariants" /></td>
    <td><code>array</code></td>
    <td>An array of ProductionVariant objects, one for each model that you want to host at this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="ShadowProductionVariants" /></td>
    <td><code>array</code></td>
    <td>An array of ProductionVariant objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_endpoint_configs">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the endpoint configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointConfigArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint configuration. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:endpoint-config/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointConfigName" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint configuration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_endpoint_config"><CopyableCode code="describe_endpoint_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the description of an endpoint configuration created using the CreateEndpointConfig API.</td>
</tr>
<tr>
    <td><a href="#list_endpoint_configs"><CopyableCode code="list_endpoint_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists endpoint configurations.</td>
</tr>
<tr>
    <td><a href="#create_endpoint_config"><CopyableCode code="create_endpoint_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointConfigName"><code>EndpointConfigName</code></a>, <a href="#parameter-ProductionVariants"><code>ProductionVariants</code></a></td>
    <td></td>
    <td>Creates an endpoint configuration that SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want SageMaker to provision. Then you call the CreateEndpoint API. Use this API if you want to use SageMaker hosting services to deploy models into production. In the request, you define a ProductionVariant, for each model that you want to deploy. Each ProductionVariant parameter also describes the resources that you want SageMaker to provision. This includes the number and type of ML compute instances to deploy. If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read.</td>
</tr>
<tr>
    <td><a href="#delete_endpoint_config"><CopyableCode code="delete_endpoint_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an endpoint configuration. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration. You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_endpoint_config"
    values={[
        { label: 'describe_endpoint_config', value: 'describe_endpoint_config' },
        { label: 'list_endpoint_configs', value: 'list_endpoint_configs' }
    ]}
>
<TabItem value="describe_endpoint_config">

Returns the description of an endpoint configuration created using the CreateEndpointConfig API.

```sql
SELECT
AsyncInferenceConfig,
CreationTime,
DataCaptureConfig,
EnableNetworkIsolation,
EndpointConfigArn,
EndpointConfigName,
ExecutionRoleArn,
ExplainerConfig,
KmsKeyId,
MetricsConfig,
ProductionVariants,
ShadowProductionVariants,
VpcConfig
FROM aws.sagemaker.endpoint_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_endpoint_configs">

Lists endpoint configurations.

```sql
SELECT
CreationTime,
EndpointConfigArn,
EndpointConfigName
FROM aws.sagemaker.endpoint_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_endpoint_config"
    values={[
        { label: 'create_endpoint_config', value: 'create_endpoint_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_endpoint_config">

Creates an endpoint configuration that SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the CreateModel API, to deploy and the resources that you want SageMaker to provision. Then you call the CreateEndpoint API. Use this API if you want to use SageMaker hosting services to deploy models into production. In the request, you define a ProductionVariant, for each model that you want to deploy. Each ProductionVariant parameter also describes the resources that you want SageMaker to provision. This includes the number and type of ML compute instances to deploy. If you are hosting multiple models, you also assign a VariantWeight to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read.

```sql
INSERT INTO aws.sagemaker.endpoint_configs (
EndpointConfigName,
ProductionVariants,
DataCaptureConfig,
Tags,
KmsKeyId,
AsyncInferenceConfig,
ExplainerConfig,
ShadowProductionVariants,
ExecutionRoleArn,
VpcConfig,
EnableNetworkIsolation,
MetricsConfig,
region
)
SELECT 
'{{ EndpointConfigName }}' /* required */,
'{{ ProductionVariants }}' /* required */,
'{{ DataCaptureConfig }}',
'{{ Tags }}',
'{{ KmsKeyId }}',
'{{ AsyncInferenceConfig }}',
'{{ ExplainerConfig }}',
'{{ ShadowProductionVariants }}',
'{{ ExecutionRoleArn }}',
'{{ VpcConfig }}',
{{ EnableNetworkIsolation }},
'{{ MetricsConfig }}',
'{{ region }}'
RETURNING
EndpointConfigArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: endpoint_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the endpoint_configs resource.
    - name: EndpointConfigName
      value: "{{ EndpointConfigName }}"
      description: |
        The name of the endpoint configuration. You specify this name in a CreateEndpoint request.
    - name: ProductionVariants
      description: |
        An array of ProductionVariant objects, one for each model that you want to host at this endpoint.
      value:
        - VariantName: "{{ VariantName }}"
          ModelName: "{{ ModelName }}"
          InitialInstanceCount: {{ InitialInstanceCount }}
          InstanceType: "{{ InstanceType }}"
          InstancePools: "{{ InstancePools }}"
          VariantInstanceProvisionTimeoutInSeconds: {{ VariantInstanceProvisionTimeoutInSeconds }}
          InitialVariantWeight: {{ InitialVariantWeight }}
          AcceleratorType: "{{ AcceleratorType }}"
          CoreDumpConfig:
            DestinationS3Uri: "{{ DestinationS3Uri }}"
            KmsKeyId: "{{ KmsKeyId }}"
          ServerlessConfig:
            MemorySizeInMB: {{ MemorySizeInMB }}
            MaxConcurrency: {{ MaxConcurrency }}
            ProvisionedConcurrency: {{ ProvisionedConcurrency }}
          VolumeSizeInGB: {{ VolumeSizeInGB }}
          ModelDataDownloadTimeoutInSeconds: {{ ModelDataDownloadTimeoutInSeconds }}
          ContainerStartupHealthCheckTimeoutInSeconds: {{ ContainerStartupHealthCheckTimeoutInSeconds }}
          EnableSSMAccess: {{ EnableSSMAccess }}
          ManagedInstanceScaling:
            Status: "{{ Status }}"
            MinInstanceCount: {{ MinInstanceCount }}
            MaxInstanceCount: {{ MaxInstanceCount }}
            ScaleInPolicy:
              Strategy: "{{ Strategy }}"
              MaximumStepSize: {{ MaximumStepSize }}
              CooldownInMinutes: {{ CooldownInMinutes }}
          RoutingConfig:
            RoutingStrategy: "{{ RoutingStrategy }}"
          InferenceAmiVersion: "{{ InferenceAmiVersion }}"
          CapacityReservationConfig:
            CapacityReservationPreference: "{{ CapacityReservationPreference }}"
            MlReservationArn: "{{ MlReservationArn }}"
    - name: DataCaptureConfig
      description: |
        Configuration to control how SageMaker AI captures inference data.
      value:
        EnableCapture: {{ EnableCapture }}
        InitialSamplingPercentage: {{ InitialSamplingPercentage }}
        DestinationS3Uri: "{{ DestinationS3Uri }}"
        KmsKeyId: "{{ KmsKeyId }}"
        CaptureOptions:
          - CaptureMode: "{{ CaptureMode }}"
        CaptureContentTypeHeader:
          CsvContentTypes:
            - "{{ CsvContentTypes }}"
          JsonContentTypes:
            - "{{ JsonContentTypes }}"
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. The KmsKeyId can be any of the following formats: Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab Key ARN: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab Alias name: alias/ExampleAlias Alias name ARN: arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias The KMS key policy must grant permission to the IAM role that you specify in your CreateEndpoint, UpdateEndpoint requests. For more information, refer to the Amazon Web Services Key Management Service section Using Key Policies in Amazon Web Services KMS Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a KmsKeyId when using an instance type with local storage. If any of the models that you specify in the ProductionVariants parameter use nitro-based instances with local storage, do not specify a value for the KmsKeyId parameter. If you specify a value for KmsKeyId when using any nitro-based instances with local storage, the call to CreateEndpointConfig fails. For a list of instance types that support local instance storage, see Instance Store Volumes. For more information about local instance storage encryption, see SSD Instance Store Volumes.
    - name: AsyncInferenceConfig
      description: |
        Specifies configuration for how an endpoint performs asynchronous inference. This is a required field in order for your Endpoint to be invoked using InvokeEndpointAsync.
      value:
        ClientConfig:
          MaxConcurrentInvocationsPerInstance: {{ MaxConcurrentInvocationsPerInstance }}
        OutputConfig:
          KmsKeyId: "{{ KmsKeyId }}"
          S3OutputPath: "{{ S3OutputPath }}"
          NotificationConfig:
            SuccessTopic: "{{ SuccessTopic }}"
            ErrorTopic: "{{ ErrorTopic }}"
            IncludeInferenceResponseIn:
              - "{{ IncludeInferenceResponseIn }}"
          S3FailurePath: "{{ S3FailurePath }}"
    - name: ExplainerConfig
      description: |
        A member of CreateEndpointConfig that enables explainers.
      value:
        ClarifyExplainerConfig:
          EnableExplanations: "{{ EnableExplanations }}"
          InferenceConfig:
            FeaturesAttribute: "{{ FeaturesAttribute }}"
            ContentTemplate: "{{ ContentTemplate }}"
            MaxRecordCount: {{ MaxRecordCount }}
            MaxPayloadInMB: {{ MaxPayloadInMB }}
            ProbabilityIndex: {{ ProbabilityIndex }}
            LabelIndex: {{ LabelIndex }}
            ProbabilityAttribute: "{{ ProbabilityAttribute }}"
            LabelAttribute: "{{ LabelAttribute }}"
            LabelHeaders:
              - "{{ LabelHeaders }}"
            FeatureHeaders:
              - "{{ FeatureHeaders }}"
            FeatureTypes:
              - "{{ FeatureTypes }}"
          ShapConfig:
            ShapBaselineConfig:
              MimeType: "{{ MimeType }}"
              ShapBaseline: "{{ ShapBaseline }}"
              ShapBaselineUri: "{{ ShapBaselineUri }}"
            NumberOfSamples: {{ NumberOfSamples }}
            UseLogit: {{ UseLogit }}
            Seed: {{ Seed }}
            TextConfig:
              Language: "{{ Language }}"
              Granularity: "{{ Granularity }}"
    - name: ShadowProductionVariants
      description: |
        An array of ProductionVariant objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants. If you use this field, you can only specify one variant for ProductionVariants and one variant for ShadowProductionVariants.
      value:
        - VariantName: "{{ VariantName }}"
          ModelName: "{{ ModelName }}"
          InitialInstanceCount: {{ InitialInstanceCount }}
          InstanceType: "{{ InstanceType }}"
          InstancePools: "{{ InstancePools }}"
          VariantInstanceProvisionTimeoutInSeconds: {{ VariantInstanceProvisionTimeoutInSeconds }}
          InitialVariantWeight: {{ InitialVariantWeight }}
          AcceleratorType: "{{ AcceleratorType }}"
          CoreDumpConfig:
            DestinationS3Uri: "{{ DestinationS3Uri }}"
            KmsKeyId: "{{ KmsKeyId }}"
          ServerlessConfig:
            MemorySizeInMB: {{ MemorySizeInMB }}
            MaxConcurrency: {{ MaxConcurrency }}
            ProvisionedConcurrency: {{ ProvisionedConcurrency }}
          VolumeSizeInGB: {{ VolumeSizeInGB }}
          ModelDataDownloadTimeoutInSeconds: {{ ModelDataDownloadTimeoutInSeconds }}
          ContainerStartupHealthCheckTimeoutInSeconds: {{ ContainerStartupHealthCheckTimeoutInSeconds }}
          EnableSSMAccess: {{ EnableSSMAccess }}
          ManagedInstanceScaling:
            Status: "{{ Status }}"
            MinInstanceCount: {{ MinInstanceCount }}
            MaxInstanceCount: {{ MaxInstanceCount }}
            ScaleInPolicy:
              Strategy: "{{ Strategy }}"
              MaximumStepSize: {{ MaximumStepSize }}
              CooldownInMinutes: {{ CooldownInMinutes }}
          RoutingConfig:
            RoutingStrategy: "{{ RoutingStrategy }}"
          InferenceAmiVersion: "{{ InferenceAmiVersion }}"
          CapacityReservationConfig:
            CapacityReservationPreference: "{{ CapacityReservationPreference }}"
            MlReservationArn: "{{ MlReservationArn }}"
    - name: ExecutionRoleArn
      value: "{{ ExecutionRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform actions on your behalf. For more information, see SageMaker AI Roles. To be able to pass this role to Amazon SageMaker AI, the caller of this action must have the iam:PassRole permission.
    - name: VpcConfig
      description: |
        Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC.
      value:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Subnets:
          - "{{ Subnets }}"
    - name: EnableNetworkIsolation
      value: {{ EnableNetworkIsolation }}
      description: |
        Sets whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers.
    - name: MetricsConfig
      description: |
        The configuration parameters for utilization metrics.
      value:
        EnableEnhancedMetrics: {{ EnableEnhancedMetrics }}
        MetricPublishFrequencyInSeconds: {{ MetricPublishFrequencyInSeconds }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_endpoint_config"
    values={[
        { label: 'delete_endpoint_config', value: 'delete_endpoint_config' }
    ]}
>
<TabItem value="delete_endpoint_config">

Deletes an endpoint configuration. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete endpoints created using the configuration. You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.

```sql
DELETE FROM aws.sagemaker.endpoint_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
