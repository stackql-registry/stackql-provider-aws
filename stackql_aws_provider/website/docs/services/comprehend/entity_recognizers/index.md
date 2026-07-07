--- 
title: entity_recognizers
hide_title: false
hide_table_of_contents: false
keywords:
  - entity_recognizers
  - comprehend
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

Creates, updates, deletes, gets or lists an <code>entity_recognizers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entity_recognizers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.entity_recognizers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_entity_recognizer"
    values={[
        { label: 'describe_entity_recognizer', value: 'describe_entity_recognizer' },
        { label: 'list_entity_recognizers', value: 'list_entity_recognizers' }
    ]}
>
<TabItem value="describe_entity_recognizer">

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
    <td><CopyableCode code="DataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the recognizer creation completed.</td>
</tr>
<tr>
    <td><CopyableCode code="EntityRecognizerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the entity recognizer. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:entity-recognizer/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FlywheelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the flywheel (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The input data properties of an entity recognizer.</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language of the input documents. All documents must be in the same language. Only English ("en") is currently supported. (en, es, fr, de, it, pt, ar, hi, ja, ko, zh, zh-TW)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of the recognizer.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" (pattern: &lt;code&gt;^\p&#123;ASCII&#125;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputDataConfig" /></td>
    <td><code>object</code></td>
    <td>Output data configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="RecognizerMetadata" /></td>
    <td><code>object</code></td>
    <td>Provides information about an entity recognizer.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source model. This model was imported from a different Amazon Web Services account to create the entity recognizer model in your Amazon Web Services account. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:entity-recognizer/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Provides the status of the entity recognizer. (SUBMITTED, TRAINING, DELETING, STOP_REQUESTED, STOPPED, IN_ERROR, TRAINED, TRAINED_WITH_WARNING)</td>
</tr>
<tr>
    <td><CopyableCode code="SubmitTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the recognizer was submitted for processing.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that training of the entity recognizer was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that training of the entity recognizer started.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionName" /></td>
    <td><code>string</code></td>
    <td>The version name you assigned to the entity recognizer. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" (pattern: &lt;code&gt;^\p&#123;ASCII&#125;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see Amazon VPC.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_entity_recognizers">

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
    <td><CopyableCode code="DataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the recognizer creation completed.</td>
</tr>
<tr>
    <td><CopyableCode code="EntityRecognizerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the entity recognizer. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:entity-recognizer/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FlywheelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the flywheel (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The input data properties of an entity recognizer.</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language of the input documents. All documents must be in the same language. Only English ("en") is currently supported. (en, es, fr, de, it, pt, ar, hi, ja, ko, zh, zh-TW)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of the recognizer.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" (pattern: &lt;code&gt;^\p&#123;ASCII&#125;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputDataConfig" /></td>
    <td><code>object</code></td>
    <td>Output data configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="RecognizerMetadata" /></td>
    <td><code>object</code></td>
    <td>Provides information about an entity recognizer.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source model. This model was imported from a different Amazon Web Services account to create the entity recognizer model in your Amazon Web Services account. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:entity-recognizer/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Provides the status of the entity recognizer. (SUBMITTED, TRAINING, DELETING, STOP_REQUESTED, STOPPED, IN_ERROR, TRAINED, TRAINED_WITH_WARNING)</td>
</tr>
<tr>
    <td><CopyableCode code="SubmitTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the recognizer was submitted for processing.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that training of the entity recognizer was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that training of the entity recognizer started.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionName" /></td>
    <td><code>string</code></td>
    <td>The version name you assigned to the entity recognizer. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" (pattern: &lt;code&gt;^\p&#123;ASCII&#125;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see Amazon VPC.</td>
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
    <td><a href="#describe_entity_recognizer"><CopyableCode code="describe_entity_recognizer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.</td>
</tr>
<tr>
    <td><a href="#list_entity_recognizers"><CopyableCode code="list_entity_recognizers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list. The results of this list are not in any particular order. Please get the list and sort locally if needed.</td>
</tr>
<tr>
    <td><a href="#create_entity_recognizer"><CopyableCode code="create_entity_recognizer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RecognizerName"><code>RecognizerName</code></a>, <a href="#parameter-DataAccessRoleArn"><code>DataAccessRoleArn</code></a>, <a href="#parameter-InputDataConfig"><code>InputDataConfig</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted, you can check job status using the DescribeEntityRecognizer API.</td>
</tr>
<tr>
    <td><a href="#delete_entity_recognizer"><CopyableCode code="delete_entity_recognizer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use.</td>
</tr>
<tr>
    <td><a href="#stop_training_entity_recognizer"><CopyableCode code="stop_training_entity_recognizer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EntityRecognizerArn"><code>EntityRecognizerArn</code></a></td>
    <td></td>
    <td>Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.</td>
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
    defaultValue="describe_entity_recognizer"
    values={[
        { label: 'describe_entity_recognizer', value: 'describe_entity_recognizer' },
        { label: 'list_entity_recognizers', value: 'list_entity_recognizers' }
    ]}
>
<TabItem value="describe_entity_recognizer">

Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.

```sql
SELECT
DataAccessRoleArn,
EndTime,
EntityRecognizerArn,
FlywheelArn,
InputDataConfig,
LanguageCode,
Message,
ModelKmsKeyId,
OutputDataConfig,
RecognizerMetadata,
SourceModelArn,
Status,
SubmitTime,
TrainingEndTime,
TrainingStartTime,
VersionName,
VolumeKmsKeyId,
VpcConfig
FROM aws.comprehend.entity_recognizers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_entity_recognizers">

Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list. The results of this list are not in any particular order. Please get the list and sort locally if needed.

```sql
SELECT
DataAccessRoleArn,
EndTime,
EntityRecognizerArn,
FlywheelArn,
InputDataConfig,
LanguageCode,
Message,
ModelKmsKeyId,
OutputDataConfig,
RecognizerMetadata,
SourceModelArn,
Status,
SubmitTime,
TrainingEndTime,
TrainingStartTime,
VersionName,
VolumeKmsKeyId,
VpcConfig
FROM aws.comprehend.entity_recognizers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_entity_recognizer"
    values={[
        { label: 'create_entity_recognizer', value: 'create_entity_recognizer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_entity_recognizer">

Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted, you can check job status using the DescribeEntityRecognizer API.

```sql
INSERT INTO aws.comprehend.entity_recognizers (
RecognizerName,
VersionName,
DataAccessRoleArn,
Tags,
InputDataConfig,
ClientRequestToken,
LanguageCode,
VolumeKmsKeyId,
VpcConfig,
ModelKmsKeyId,
ModelPolicy,
region
)
SELECT 
'{{ RecognizerName }}' /* required */,
'{{ VersionName }}',
'{{ DataAccessRoleArn }}' /* required */,
'{{ Tags }}',
'{{ InputDataConfig }}' /* required */,
'{{ ClientRequestToken }}',
'{{ LanguageCode }}' /* required */,
'{{ VolumeKmsKeyId }}',
'{{ VpcConfig }}',
'{{ ModelKmsKeyId }}',
'{{ ModelPolicy }}',
'{{ region }}'
RETURNING
EntityRecognizerArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: entity_recognizers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the entity_recognizers resource.
    - name: RecognizerName
      value: "{{ RecognizerName }}"
      description: |
        The name given to the newly created recognizer. Recognizer names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name must be unique in the account/Region.
    - name: VersionName
      value: "{{ VersionName }}"
      description: |
        The version name given to the newly created recognizer. Version names can be a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same recognizer name in the account/Region.
    - name: DataAccessRoleArn
      value: "{{ DataAccessRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
    - name: Tags
      description: |
        Tags to associate with the entity recognizer. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: InputDataConfig
      description: |
        Specifies the format and location of the input data. The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created.
      value:
        DataFormat: "{{ DataFormat }}"
        EntityTypes:
          - Type: "{{ Type }}"
        Documents:
          S3Uri: "{{ S3Uri }}"
          TestS3Uri: "{{ TestS3Uri }}"
          InputFormat: "{{ InputFormat }}"
        Annotations:
          S3Uri: "{{ S3Uri }}"
          TestS3Uri: "{{ TestS3Uri }}"
        EntityList:
          S3Uri: "{{ S3Uri }}"
        AugmentedManifests:
          - S3Uri: "{{ S3Uri }}"
            Split: "{{ Split }}"
            AttributeNames: "{{ AttributeNames }}"
            AnnotationDataS3Uri: "{{ AnnotationDataS3Uri }}"
            SourceDocumentsS3Uri: "{{ SourceDocumentsS3Uri }}"
            DocumentType: "{{ DocumentType }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
    - name: LanguageCode
      value: "{{ LanguageCode }}"
      description: |
        You can specify any of the following languages: English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), German ("de"), or Portuguese ("pt"). If you plan to use this entity recognizer with PDF, Word, or image input files, you must specify English as the language. All training documents must be in the same language.
      valid_values: ['en', 'es', 'fr', 'de', 'it', 'pt', 'ar', 'hi', 'ja', 'ko', 'zh', 'zh-TW']
    - name: VolumeKmsKeyId
      value: "{{ VolumeKmsKeyId }}"
      description: |
        ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    - name: VpcConfig
      description: |
        Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see Amazon VPC.
      value:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Subnets:
          - "{{ Subnets }}"
    - name: ModelKmsKeyId
      value: "{{ ModelKmsKeyId }}"
      description: |
        ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    - name: ModelPolicy
      value: "{{ ModelPolicy }}"
      description: |
        The JSON resource-based policy to attach to your custom entity recognizer model. You can use this policy to allow another Amazon Web Services account to import your custom model. Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy: "{\"attribute\": \"value\", \"attribute\": [\"value\"]}" To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values: '{"attribute": "value", "attribute": ["value"]}'
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_entity_recognizer"
    values={[
        { label: 'delete_entity_recognizer', value: 'delete_entity_recognizer' }
    ]}
>
<TabItem value="delete_entity_recognizer">

Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use.

```sql
DELETE FROM aws.comprehend.entity_recognizers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_training_entity_recognizer"
    values={[
        { label: 'stop_training_entity_recognizer', value: 'stop_training_entity_recognizer' }
    ]}
>
<TabItem value="stop_training_entity_recognizer">

Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.

```sql
EXEC aws.comprehend.entity_recognizers.stop_training_entity_recognizer 
@region='{{ region }}' --required 
@@json=
'{
"EntityRecognizerArn": "{{ EntityRecognizerArn }}"
}'
;
```
</TabItem>
</Tabs>
