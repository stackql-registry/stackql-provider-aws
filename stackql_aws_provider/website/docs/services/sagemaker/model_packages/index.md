--- 
title: model_packages
hide_title: false
hide_table_of_contents: false
keywords:
  - model_packages
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

Creates, updates, deletes, gets or lists a <code>model_packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.model_packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_model_package"
    values={[
        { label: 'describe_model_package', value: 'describe_model_package' },
        { label: 'list_model_packages', value: 'list_model_packages' }
    ]}
>
<TabItem value="describe_model_package">

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
    <td><CopyableCode code="additional_inference_specifications" /></td>
    <td><code>array</code></td>
    <td>An array of additional Inference Specification objects. Each additional Inference Specification specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="approval_description" /></td>
    <td><code>string</code></td>
    <td>A description provided for the model approval. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certify_for_marketplace" /></td>
    <td><code>boolean</code></td>
    <td>Whether the model package is certified for listing on Amazon Web Services Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp specifying when the model package was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_metadata_properties" /></td>
    <td><code>object</code></td>
    <td>The metadata properties associated with the model package versions.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The machine learning domain of the model package you specified. Common machine learning domains include computer vision and natural language processing.</td>
</tr>
<tr>
    <td><CopyableCode code="drift_check_baselines" /></td>
    <td><code>object</code></td>
    <td>Represents the drift check baselines that can be used when the model monitor is set using the model package. For more information, see the topic on Drift Detection against Previous Baselines in SageMaker Pipelines in the Amazon SageMaker Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="inference_specification" /></td>
    <td><code>object</code></td>
    <td>Details about inference jobs that you can run with models based on this model package.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the model package was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_storage_type" /></td>
    <td><code>string</code></td>
    <td>The storage type of the model package. (Restricted)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_properties" /></td>
    <td><code>object</code></td>
    <td>Metadata properties of the tracking entity, trial, or trial component.</td>
</tr>
<tr>
    <td><CopyableCode code="model_approval_status" /></td>
    <td><code>string</code></td>
    <td>The approval status of the model package. (Approved, Rejected, PendingManualApproval)</td>
</tr>
<tr>
    <td><CopyableCode code="model_card" /></td>
    <td><code>object</code></td>
    <td>The model card associated with the model package. Since ModelPackageModelCard is tied to a model package, it is a specific usage of a model card and its schema is simplified compared to the schema of ModelCard. The ModelPackageModelCard schema does not include model_package_details, and model_overview is composed of the model_creator and model_artifact properties. For more information about the model package model card schema, see Model package model card schema. For more information about the model card associated with the model package, see View the Details of a Model Version. When you set IncludedData to MetadataOnly in the request, ModelCardStatus is preserved and ModelCardContent is sanitized to include only the following JSON paths, when present in the model card: model_overview.model_id model_overview.model_name intended_uses.risk_rating model_package_details.model_package_group_name model_package_details.model_package_arn Because the ModelPackageModelCard schema does not include model_package_details and limits model_overview to model_creator and model_artifact, the sanitized ModelCardContent for a model package typically contains only intended_uses.risk_rating if it was provided when the model card was created. To retrieve the complete ModelCardContent, set IncludedData to AllData or omit the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="model_life_cycle" /></td>
    <td><code>object</code></td>
    <td>A structure describing the current state of the model in its life cycle.</td>
</tr>
<tr>
    <td><CopyableCode code="model_metrics" /></td>
    <td><code>object</code></td>
    <td>Metrics for the model.</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model package. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-package/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_description" /></td>
    <td><code>string</code></td>
    <td>A brief summary of the model package. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_group_name" /></td>
    <td><code>string</code></td>
    <td>If the model is a versioned model, the name of the model group that the versioned model belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_name" /></td>
    <td><code>string</code></td>
    <td>The name of the model package being described. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_registration_type" /></td>
    <td><code>string</code></td>
    <td>The package registration type of the model package output. (Logged, Registered)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the model package. (Pending, InProgress, Completed, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_status_details" /></td>
    <td><code>object</code></td>
    <td>Details about the current status of the model package.</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_version" /></td>
    <td><code>integer</code></td>
    <td>The version of the model package.</td>
</tr>
<tr>
    <td><CopyableCode code="sample_payload_url" /></td>
    <td><code>string</code></td>
    <td>The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path points to a single gzip compressed tar archive (.tar.gz suffix).</td>
</tr>
<tr>
    <td><CopyableCode code="security_config" /></td>
    <td><code>object</code></td>
    <td>The KMS Key ID (KMSKeyId) used for encryption of model package information.</td>
</tr>
<tr>
    <td><CopyableCode code="skip_model_validation" /></td>
    <td><code>string</code></td>
    <td>Indicates if you want to skip model validation. (All, None)</td>
</tr>
<tr>
    <td><CopyableCode code="source_algorithm_specification" /></td>
    <td><code>object</code></td>
    <td>Details about the algorithm that was used to create the model package.</td>
</tr>
<tr>
    <td><CopyableCode code="source_uri" /></td>
    <td><code>string</code></td>
    <td>The URI of the source for the model package. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;&#123;0,1024&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task" /></td>
    <td><code>string</code></td>
    <td>The machine learning task you specified that your model package accomplishes. Common machine learning tasks include object detection and image classification.</td>
</tr>
<tr>
    <td><CopyableCode code="validation_specification" /></td>
    <td><code>object</code></td>
    <td>Configurations for one or more transform jobs that SageMaker runs to test the model package.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_model_packages">

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
    <td>A timestamp that shows when the model package was created.</td>
</tr>
<tr>
    <td><CopyableCode code="model_approval_status" /></td>
    <td><code>string</code></td>
    <td>The approval status of the model. This can be one of the following values. APPROVED - The model is approved REJECTED - The model is rejected. PENDING_MANUAL_APPROVAL - The model is waiting for manual approval. (Approved, Rejected, PendingManualApproval)</td>
</tr>
<tr>
    <td><CopyableCode code="model_life_cycle" /></td>
    <td><code>object</code></td>
    <td>A structure describing the current state of the model in its life cycle.</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model package. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:model-package/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the model package. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_group_name" /></td>
    <td><code>string</code></td>
    <td>If the model package is a versioned model, the model group that the versioned model belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_name" /></td>
    <td><code>string</code></td>
    <td>The name of the model package. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_registration_type" /></td>
    <td><code>string</code></td>
    <td>The package registration type of the model package summary. (Logged, Registered)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_status" /></td>
    <td><code>string</code></td>
    <td>The overall status of the model package. (Pending, InProgress, Completed, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="model_package_version" /></td>
    <td><code>integer</code></td>
    <td>If the model package is a versioned model, the version of the model.</td>
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
    <td><a href="#describe_model_package"><CopyableCode code="describe_model_package" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the specified model package, which is used to create SageMaker models or list them on Amazon Web Services Marketplace. If you provided a KMS Key ID when you created your model package, you will see the KMS Decrypt API call in your CloudTrail logs when you use this API. To call this operation without requiring kms:Decrypt permission on the customer-managed key, set IncludedData to MetadataOnly; the response is returned with the embedded ModelCard.ModelCardContent field sanitized. To create models in SageMaker, buyers can subscribe to model packages listed on Amazon Web Services Marketplace.</td>
</tr>
<tr>
    <td><a href="#list_model_packages"><CopyableCode code="list_model_packages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the model packages that have been created.</td>
</tr>
<tr>
    <td><a href="#create_model_package"><CopyableCode code="create_model_package" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a model package that you can use to create SageMaker models or list on Amazon Web Services Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker. To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for InferenceSpecification. To create a model from an algorithm resource that you created or subscribed to in Amazon Web Services Marketplace, provide a value for SourceAlgorithmSpecification. There are two types of model packages: Versioned - a model that is part of a model group in the model registry. Unversioned - a model package that is not part of a model group.</td>
</tr>
<tr>
    <td><a href="#update_model_package"><CopyableCode code="update_model_package" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ModelPackageArn"><code>ModelPackageArn</code></a></td>
    <td></td>
    <td>Updates a versioned model.</td>
</tr>
<tr>
    <td><a href="#delete_model_package"><CopyableCode code="delete_model_package" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a model package. A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</td>
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
    defaultValue="describe_model_package"
    values={[
        { label: 'describe_model_package', value: 'describe_model_package' },
        { label: 'list_model_packages', value: 'list_model_packages' }
    ]}
>
<TabItem value="describe_model_package">

Returns a description of the specified model package, which is used to create SageMaker models or list them on Amazon Web Services Marketplace. If you provided a KMS Key ID when you created your model package, you will see the KMS Decrypt API call in your CloudTrail logs when you use this API. To call this operation without requiring kms:Decrypt permission on the customer-managed key, set IncludedData to MetadataOnly; the response is returned with the embedded ModelCard.ModelCardContent field sanitized. To create models in SageMaker, buyers can subscribe to model packages listed on Amazon Web Services Marketplace.

```sql
SELECT
additional_inference_specifications,
approval_description,
certify_for_marketplace,
created_by,
creation_time,
customer_metadata_properties,
domain,
drift_check_baselines,
inference_specification,
last_modified_by,
last_modified_time,
managed_storage_type,
metadata_properties,
model_approval_status,
model_card,
model_life_cycle,
model_metrics,
model_package_arn,
model_package_description,
model_package_group_name,
model_package_name,
model_package_registration_type,
model_package_status,
model_package_status_details,
model_package_version,
sample_payload_url,
security_config,
skip_model_validation,
source_algorithm_specification,
source_uri,
task,
validation_specification
FROM aws.sagemaker.model_packages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_model_packages">

Lists the model packages that have been created.

```sql
SELECT
creation_time,
model_approval_status,
model_life_cycle,
model_package_arn,
model_package_description,
model_package_group_name,
model_package_name,
model_package_registration_type,
model_package_status,
model_package_version
FROM aws.sagemaker.model_packages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model_package"
    values={[
        { label: 'create_model_package', value: 'create_model_package' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_package">

Creates a model package that you can use to create SageMaker models or list on Amazon Web Services Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker. To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for InferenceSpecification. To create a model from an algorithm resource that you created or subscribed to in Amazon Web Services Marketplace, provide a value for SourceAlgorithmSpecification. There are two types of model packages: Versioned - a model that is part of a model group in the model registry. Unversioned - a model package that is not part of a model group.

```sql
INSERT INTO aws.sagemaker.model_packages (
ModelPackageName,
ModelPackageGroupName,
ModelPackageDescription,
ModelPackageRegistrationType,
InferenceSpecification,
ValidationSpecification,
SourceAlgorithmSpecification,
CertifyForMarketplace,
Tags,
ModelApprovalStatus,
MetadataProperties,
ModelMetrics,
ClientToken,
Domain,
Task,
SamplePayloadUrl,
CustomerMetadataProperties,
DriftCheckBaselines,
AdditionalInferenceSpecifications,
SkipModelValidation,
SourceUri,
SecurityConfig,
ModelCard,
ModelLifeCycle,
ManagedStorageType,
region
)
SELECT 
'{{ ModelPackageName }}',
'{{ ModelPackageGroupName }}',
'{{ ModelPackageDescription }}',
'{{ ModelPackageRegistrationType }}',
'{{ InferenceSpecification }}',
'{{ ValidationSpecification }}',
'{{ SourceAlgorithmSpecification }}',
{{ CertifyForMarketplace }},
'{{ Tags }}',
'{{ ModelApprovalStatus }}',
'{{ MetadataProperties }}',
'{{ ModelMetrics }}',
'{{ ClientToken }}',
'{{ Domain }}',
'{{ Task }}',
'{{ SamplePayloadUrl }}',
'{{ CustomerMetadataProperties }}',
'{{ DriftCheckBaselines }}',
'{{ AdditionalInferenceSpecifications }}',
'{{ SkipModelValidation }}',
'{{ SourceUri }}',
'{{ SecurityConfig }}',
'{{ ModelCard }}',
'{{ ModelLifeCycle }}',
'{{ ManagedStorageType }}',
'{{ region }}'
RETURNING
model_package_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_packages
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_packages resource.
    - name: ModelPackageName
      value: "{{ ModelPackageName }}"
      description: |
        The name of the model package. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen). This parameter is required for unversioned models. It is not applicable to versioned models.
    - name: ModelPackageGroupName
      value: "{{ ModelPackageGroupName }}"
      description: |
        The name or Amazon Resource Name (ARN) of the model package group that this model version belongs to. This parameter is required for versioned models, and does not apply to unversioned models.
    - name: ModelPackageDescription
      value: "{{ ModelPackageDescription }}"
      description: |
        A description of the model package.
    - name: ModelPackageRegistrationType
      value: "{{ ModelPackageRegistrationType }}"
      description: |
        The package registration type of the model package input.
      valid_values: ['Logged', 'Registered']
    - name: InferenceSpecification
      description: |
        Specifies details about inference jobs that you can run with models based on this model package, including the following information: The Amazon ECR paths of containers that contain the inference code and model artifacts. The instance types that the model package supports for transform jobs and real-time endpoints used for inference. The input and output content formats that the model package supports for inference.
      value:
        Containers:
          - ContainerHostname: "{{ ContainerHostname }}"
            Image: "{{ Image }}"
            ImageDigest: "{{ ImageDigest }}"
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
            ProductId: "{{ ProductId }}"
            Environment: "{{ Environment }}"
            ModelInput:
              DataInputConfig: "{{ DataInputConfig }}"
            Framework: "{{ Framework }}"
            FrameworkVersion: "{{ FrameworkVersion }}"
            NearestModelName: "{{ NearestModelName }}"
            AdditionalModelDataSources: "{{ AdditionalModelDataSources }}"
            AdditionalS3DataSource:
              S3DataType: "{{ S3DataType }}"
              S3Uri: "{{ S3Uri }}"
              CompressionType: "{{ CompressionType }}"
              ETag: "{{ ETag }}"
            ModelDataETag: "{{ ModelDataETag }}"
            IsCheckpoint: {{ IsCheckpoint }}
            BaseModel:
              HubContentName: "{{ HubContentName }}"
              HubContentVersion: "{{ HubContentVersion }}"
              RecipeName: "{{ RecipeName }}"
        SupportedTransformInstanceTypes:
          - "{{ SupportedTransformInstanceTypes }}"
        SupportedRealtimeInferenceInstanceTypes:
          - "{{ SupportedRealtimeInferenceInstanceTypes }}"
        SupportedContentTypes:
          - "{{ SupportedContentTypes }}"
        SupportedResponseMIMETypes:
          - "{{ SupportedResponseMIMETypes }}"
    - name: ValidationSpecification
      description: |
        Specifies configurations for one or more transform jobs that SageMaker runs to test the model package.
      value:
        ValidationRole: "{{ ValidationRole }}"
        ValidationProfiles:
          - ProfileName: "{{ ProfileName }}"
            TransformJobDefinition:
              MaxConcurrentTransforms: {{ MaxConcurrentTransforms }}
              MaxPayloadInMB: {{ MaxPayloadInMB }}
              BatchStrategy: "{{ BatchStrategy }}"
              Environment: "{{ Environment }}"
              TransformInput:
                DataSource:
                  S3DataSource: "{{ S3DataSource }}"
                ContentType: "{{ ContentType }}"
                CompressionType: "{{ CompressionType }}"
                SplitType: "{{ SplitType }}"
              TransformOutput:
                S3OutputPath: "{{ S3OutputPath }}"
                Accept: "{{ Accept }}"
                AssembleWith: "{{ AssembleWith }}"
                KmsKeyId: "{{ KmsKeyId }}"
              TransformResources:
                InstanceType: "{{ InstanceType }}"
                InstanceCount: {{ InstanceCount }}
                VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
                TransformAmiVersion: "{{ TransformAmiVersion }}"
    - name: SourceAlgorithmSpecification
      description: |
        Details about the algorithm that was used to create the model package.
      value:
        SourceAlgorithms:
          - ModelDataUrl: "{{ ModelDataUrl }}"
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
            ModelDataETag: "{{ ModelDataETag }}"
            AlgorithmName: "{{ AlgorithmName }}"
    - name: CertifyForMarketplace
      value: {{ CertifyForMarketplace }}
      description: |
        Whether to certify the model package for listing on Amazon Web Services Marketplace. This parameter is optional for unversioned models, and does not apply to versioned models.
    - name: Tags
      description: |
        A list of key value pairs associated with the model. For more information, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference Guide. If you supply ModelPackageGroupName, your model package belongs to the model group you specify and uses the tags associated with the model group. In this case, you cannot supply a tag argument.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ModelApprovalStatus
      value: "{{ ModelApprovalStatus }}"
      description: |
        Whether the model is approved for deployment. This parameter is optional for versioned models, and does not apply to unversioned models. For versioned models, the value of this parameter must be set to Approved to deploy the model.
      valid_values: ['Approved', 'Rejected', 'PendingManualApproval']
    - name: MetadataProperties
      description: |
        Metadata properties of the tracking entity, trial, or trial component.
      value:
        CommitId: "{{ CommitId }}"
        Repository: "{{ Repository }}"
        GeneratedBy: "{{ GeneratedBy }}"
        ProjectId: "{{ ProjectId }}"
    - name: ModelMetrics
      description: |
        A structure that contains model metrics reports.
      value:
        ModelQuality:
          Statistics:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
          Constraints:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
        ModelDataQuality:
          Statistics:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
          Constraints:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
        Bias:
          Report:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
          PreTrainingReport:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
          PostTrainingReport:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
        Explainability:
          Report:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token that guarantees that the call to this API is idempotent.
    - name: Domain
      value: "{{ Domain }}"
      description: |
        The machine learning domain of your model package and its components. Common machine learning domains include computer vision and natural language processing.
    - name: Task
      value: "{{ Task }}"
      description: |
        The machine learning task your model package accomplishes. Common machine learning tasks include object detection and image classification. The following tasks are supported by Inference Recommender: "IMAGE_CLASSIFICATION" | "OBJECT_DETECTION" | "TEXT_GENERATION" |"IMAGE_SEGMENTATION" | "FILL_MASK" | "CLASSIFICATION" | "REGRESSION" | "OTHER". Specify "OTHER" if none of the tasks listed fit your use case.
    - name: SamplePayloadUrl
      value: "{{ SamplePayloadUrl }}"
      description: |
        The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). This archive can hold multiple files that are all equally used in the load test. Each file in the archive must satisfy the size constraints of the InvokeEndpoint call.
    - name: CustomerMetadataProperties
      value: "{{ CustomerMetadataProperties }}"
      description: |
        The metadata properties associated with the model package versions.
    - name: DriftCheckBaselines
      description: |
        Represents the drift check baselines that can be used when the model monitor is set using the model package. For more information, see the topic on Drift Detection against Previous Baselines in SageMaker Pipelines in the Amazon SageMaker Developer Guide.
      value:
        Bias:
          ConfigFile:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
          PreTrainingConstraints:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
          PostTrainingConstraints:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
        Explainability:
          Constraints:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
          ConfigFile:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
        ModelQuality:
          Statistics:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
          Constraints:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
        ModelDataQuality:
          Statistics:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
          Constraints:
            ContentType: "{{ ContentType }}"
            ContentDigest: "{{ ContentDigest }}"
            S3Uri: "{{ S3Uri }}"
    - name: AdditionalInferenceSpecifications
      description: |
        An array of additional Inference Specification objects. Each additional Inference Specification specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.
      value:
        - Name: "{{ Name }}"
          Description: "{{ Description }}"
          Containers: "{{ Containers }}"
          SupportedTransformInstanceTypes: "{{ SupportedTransformInstanceTypes }}"
          SupportedRealtimeInferenceInstanceTypes: "{{ SupportedRealtimeInferenceInstanceTypes }}"
          SupportedContentTypes: "{{ SupportedContentTypes }}"
          SupportedResponseMIMETypes: "{{ SupportedResponseMIMETypes }}"
    - name: SkipModelValidation
      value: "{{ SkipModelValidation }}"
      description: |
        Indicates if you want to skip model validation.
      valid_values: ['All', 'None']
    - name: SourceUri
      value: "{{ SourceUri }}"
      description: |
        The URI of the source for the model package. If you want to clone a model package, set it to the model package Amazon Resource Name (ARN). If you want to register a model, set it to the model ARN.
    - name: SecurityConfig
      description: |
        The KMS Key ID (KMSKeyId) used for encryption of model package information.
      value:
        KmsKeyId: "{{ KmsKeyId }}"
    - name: ModelCard
      description: |
        The model card associated with the model package. Since ModelPackageModelCard is tied to a model package, it is a specific usage of a model card and its schema is simplified compared to the schema of ModelCard. The ModelPackageModelCard schema does not include model_package_details, and model_overview is composed of the model_creator and model_artifact properties. For more information about the model package model card schema, see Model package model card schema. For more information about the model card associated with the model package, see View the Details of a Model Version.
      value:
        ModelCardContent: "{{ ModelCardContent }}"
        ModelCardStatus: "{{ ModelCardStatus }}"
    - name: ModelLifeCycle
      description: |
        A structure describing the current state of the model in its life cycle.
      value:
        Stage: "{{ Stage }}"
        StageStatus: "{{ StageStatus }}"
        StageDescription: "{{ StageDescription }}"
    - name: ManagedStorageType
      value: "{{ ManagedStorageType }}"
      description: |
        The storage type of the model package.
      valid_values: ['Restricted']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_model_package"
    values={[
        { label: 'update_model_package', value: 'update_model_package' }
    ]}
>
<TabItem value="update_model_package">

Updates a versioned model.

```sql
UPDATE aws.sagemaker.model_packages
SET 
ModelPackageArn = '{{ ModelPackageArn }}',
ModelApprovalStatus = '{{ ModelApprovalStatus }}',
ModelPackageRegistrationType = '{{ ModelPackageRegistrationType }}',
ApprovalDescription = '{{ ApprovalDescription }}',
CustomerMetadataProperties = '{{ CustomerMetadataProperties }}',
CustomerMetadataPropertiesToRemove = '{{ CustomerMetadataPropertiesToRemove }}',
AdditionalInferenceSpecificationsToAdd = '{{ AdditionalInferenceSpecificationsToAdd }}',
InferenceSpecification = '{{ InferenceSpecification }}',
SourceUri = '{{ SourceUri }}',
ModelCard = '{{ ModelCard }}',
ModelLifeCycle = '{{ ModelLifeCycle }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND ModelPackageArn = '{{ ModelPackageArn }}' --required
RETURNING
model_package_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model_package"
    values={[
        { label: 'delete_model_package', value: 'delete_model_package' }
    ]}
>
<TabItem value="delete_model_package">

Deletes a model package. A model package is used to create SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in SageMaker.

```sql
DELETE FROM aws.sagemaker.model_packages
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
