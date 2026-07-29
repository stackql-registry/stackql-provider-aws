--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
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

Creates, updates, deletes, gets or lists a <code>models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_model"
    values={[
        { label: 'describe_model', value: 'describe_model' },
        { label: 'list_models', value: 'list_models' }
    ]}
>
<TabItem value="describe_model">

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
    <td><CopyableCode code="containers" /></td>
    <td><code>array</code></td>
    <td>The containers in the inference pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_recommendation" /></td>
    <td><code>object</code></td>
    <td>A set of recommended deployment configurations for the model.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_network_isolation" /></td>
    <td><code>boolean</code></td>
    <td>If True, no inbound or outbound network calls can be made to or from the model container.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that you specified for the model. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_execution_config" /></td>
    <td><code>object</code></td>
    <td>Specifies details of how containers in a multi-container endpoint are called.</td>
</tr>
<tr>
    <td><CopyableCode code="model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td>Name of the SageMaker model. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;\-a-zA-Z0-9&#93;*&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_container" /></td>
    <td><code>object</code></td>
    <td>Describes the container, as part of model definition.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_models">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:model/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the model that you want a summary for. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;\-a-zA-Z0-9&#93;*&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
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
    <td><a href="#describe_model"><CopyableCode code="describe_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a model that you created using the CreateModel API.</td>
</tr>
<tr>
    <td><a href="#list_models"><CopyableCode code="list_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists models created with the CreateModel API.</td>
</tr>
<tr>
    <td><a href="#create_model"><CopyableCode code="create_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a></td>
    <td></td>
    <td>Creates a model in SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions. Use this API to create a model if you want to use SageMaker hosting services or run a batch transform job. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API. SageMaker then deploys all of the containers that you defined for the model in the hosting environment. To run a batch transform using your model, you start a job with the CreateTransformJob API. SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location. In the request, you also provide an IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role.</td>
</tr>
<tr>
    <td><a href="#delete_model"><CopyableCode code="delete_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a model. The DeleteModel API deletes only the model entry that was created in SageMaker when you called the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model.</td>
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
    defaultValue="describe_model"
    values={[
        { label: 'describe_model', value: 'describe_model' },
        { label: 'list_models', value: 'list_models' }
    ]}
>
<TabItem value="describe_model">

Describes a model that you created using the CreateModel API.

```sql
SELECT
containers,
creation_time,
deployment_recommendation,
enable_network_isolation,
execution_role_arn,
inference_execution_config,
model_arn,
model_name,
primary_container,
vpc_config
FROM aws.sagemaker.models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_models">

Lists models created with the CreateModel API.

```sql
SELECT
creation_time,
model_arn,
model_name
FROM aws.sagemaker.models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model"
    values={[
        { label: 'create_model', value: 'create_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model">

Creates a model in SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions. Use this API to create a model if you want to use SageMaker hosting services or run a batch transform job. To host your model, you create an endpoint configuration with the CreateEndpointConfig API, and then create an endpoint with the CreateEndpoint API. SageMaker then deploys all of the containers that you defined for the model in the hosting environment. To run a batch transform using your model, you start a job with the CreateTransformJob API. SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location. In the request, you also provide an IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role.

```sql
INSERT INTO aws.sagemaker.models (
ModelName,
PrimaryContainer,
Containers,
InferenceExecutionConfig,
ExecutionRoleArn,
Tags,
VpcConfig,
EnableNetworkIsolation,
region
)
SELECT 
'{{ ModelName }}' /* required */,
'{{ PrimaryContainer }}',
'{{ Containers }}',
'{{ InferenceExecutionConfig }}',
'{{ ExecutionRoleArn }}',
'{{ Tags }}',
'{{ VpcConfig }}',
{{ EnableNetworkIsolation }},
'{{ region }}'
RETURNING
model_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the models resource.
    - name: ModelName
      value: "{{ ModelName }}"
      description: |
        The name of the new model.
    - name: PrimaryContainer
      description: |
        The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions.
      value:
        ContainerHostname: "{{ ContainerHostname }}"
        Image: "{{ Image }}"
        ImageConfig:
          RepositoryAccessMode: "{{ RepositoryAccessMode }}"
          RepositoryAuthConfig:
            RepositoryCredentialsProviderArn: "{{ RepositoryCredentialsProviderArn }}"
        Mode: "{{ Mode }}"
        ModelDataUrl: "{{ ModelDataUrl }}"
        ModelDataSource:
          S3DataSource:
            S3Uri: "{{ S3Uri }}"
            S3DataType: "{{ S3DataType }}"
            CompressionType: "{{ CompressionType }}"
            ModelAccessConfig:
              AcceptEula: {{ AcceptEula }}
            HubAccessConfig:
              HubContentArn: "{{ HubContentArn }}"
            ManifestS3Uri: "{{ ManifestS3Uri }}"
            ETag: "{{ ETag }}"
            ManifestEtag: "{{ ManifestEtag }}"
        AdditionalModelDataSources:
          - ChannelName: "{{ ChannelName }}"
            S3DataSource:
              S3Uri: "{{ S3Uri }}"
              S3DataType: "{{ S3DataType }}"
              CompressionType: "{{ CompressionType }}"
              ModelAccessConfig:
                AcceptEula: {{ AcceptEula }}
              HubAccessConfig:
                HubContentArn: "{{ HubContentArn }}"
              ManifestS3Uri: "{{ ManifestS3Uri }}"
              ETag: "{{ ETag }}"
              ManifestEtag: "{{ ManifestEtag }}"
        Environment: "{{ Environment }}"
        ModelPackageName: "{{ ModelPackageName }}"
        InferenceSpecificationName: "{{ InferenceSpecificationName }}"
        MultiModelConfig:
          ModelCacheSetting: "{{ ModelCacheSetting }}"
    - name: Containers
      description: |
        Specifies the containers in the inference pipeline.
      value:
        - ContainerHostname: "{{ ContainerHostname }}"
          Image: "{{ Image }}"
          ImageConfig:
            RepositoryAccessMode: "{{ RepositoryAccessMode }}"
            RepositoryAuthConfig:
              RepositoryCredentialsProviderArn: "{{ RepositoryCredentialsProviderArn }}"
          Mode: "{{ Mode }}"
          ModelDataUrl: "{{ ModelDataUrl }}"
          ModelDataSource:
            S3DataSource:
              S3Uri: "{{ S3Uri }}"
              S3DataType: "{{ S3DataType }}"
              CompressionType: "{{ CompressionType }}"
              ModelAccessConfig:
                AcceptEula: {{ AcceptEula }}
              HubAccessConfig:
                HubContentArn: "{{ HubContentArn }}"
              ManifestS3Uri: "{{ ManifestS3Uri }}"
              ETag: "{{ ETag }}"
              ManifestEtag: "{{ ManifestEtag }}"
          AdditionalModelDataSources: "{{ AdditionalModelDataSources }}"
          Environment: "{{ Environment }}"
          ModelPackageName: "{{ ModelPackageName }}"
          InferenceSpecificationName: "{{ InferenceSpecificationName }}"
          MultiModelConfig:
            ModelCacheSetting: "{{ ModelCacheSetting }}"
    - name: InferenceExecutionConfig
      description: |
        Specifies details of how containers in a multi-container endpoint are called.
      value:
        Mode: "{{ Mode }}"
    - name: ExecutionRoleArn
      value: "{{ ExecutionRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs. Deploying on ML compute instances is part of model hosting. For more information, see SageMaker Roles. To be able to pass this role to SageMaker, the caller of this API must have the iam:PassRole permission.
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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
        Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model"
    values={[
        { label: 'delete_model', value: 'delete_model' }
    ]}
>
<TabItem value="delete_model">

Deletes a model. The DeleteModel API deletes only the model entry that was created in SageMaker when you called the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model.

```sql
DELETE FROM aws.sagemaker.models
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
