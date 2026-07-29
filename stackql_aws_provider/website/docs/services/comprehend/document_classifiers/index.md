--- 
title: document_classifiers
hide_title: false
hide_table_of_contents: false
keywords:
  - document_classifiers
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

Creates, updates, deletes, gets or lists a <code>document_classifiers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="document_classifiers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.document_classifiers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_document_classifier"
    values={[
        { label: 'describe_document_classifier', value: 'describe_document_classifier' },
        { label: 'list_document_classifiers', value: 'list_document_classifiers' }
    ]}
>
<TabItem value="describe_document_classifier">

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
    <td><CopyableCode code="classifier_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about the document classifier, including the number of documents used for training the classifier, the number of documents used for test the classifier, and an accuracy rating.</td>
</tr>
<tr>
    <td><CopyableCode code="data_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_classifier_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the document classifier. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:document-classifier/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that training the document classifier completed.</td>
</tr>
<tr>
    <td><CopyableCode code="flywheel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the flywheel (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>The input data configuration that you supplied when you created the document classifier for training.</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code for the language of the documents that the classifier was trained on. (en, es, fr, de, it, pt, ar, hi, ja, ko, zh, zh-TW)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the classifier.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Indicates the mode in which the specific classifier was trained. This also indicates the format of input documents and the format of the confusion matrix. Each classifier can only be trained in one mode and this cannot be changed once the classifier is trained. (MULTI_CLASS, MULTI_LABEL)</td>
</tr>
<tr>
    <td><CopyableCode code="model_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" (pattern: &lt;code&gt;^\p&#123;ASCII&#125;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>Provides output results configuration parameters for custom classifier jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="source_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source model. This model was imported from a different Amazon Web Services account to create the document classifier model in your Amazon Web Services account. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:document-classifier/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the document classifier. If the status is TRAINED the classifier is ready to use. If the status is TRAINED_WITH_WARNINGS the classifier training succeeded, but you should review the warnings returned in the CreateDocumentClassifier response. If the status is FAILED you can see additional information about why the classifier wasn't trained in the Message field. (SUBMITTED, TRAINING, DELETING, STOP_REQUESTED, STOPPED, IN_ERROR, TRAINED, TRAINED_WITH_WARNING)</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the document classifier was submitted for training.</td>
</tr>
<tr>
    <td><CopyableCode code="training_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that training of the document classifier was completed. Indicates the time when the training completes on documentation classifiers. You are billed for the time interval between this time and the value of TrainingStartTime.</td>
</tr>
<tr>
    <td><CopyableCode code="training_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time when the training starts on documentation classifiers. You are billed for the time interval between this time and the value of TrainingEndTime.</td>
</tr>
<tr>
    <td><CopyableCode code="version_name" /></td>
    <td><code>string</code></td>
    <td>The version name that you assigned to the document classifier. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="volume_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" (pattern: &lt;code&gt;^\p&#123;ASCII&#125;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see Amazon VPC.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_document_classifiers">

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
    <td><CopyableCode code="classifier_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about the document classifier, including the number of documents used for training the classifier, the number of documents used for test the classifier, and an accuracy rating.</td>
</tr>
<tr>
    <td><CopyableCode code="data_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_classifier_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the document classifier. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:document-classifier/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that training the document classifier completed.</td>
</tr>
<tr>
    <td><CopyableCode code="flywheel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the flywheel (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>The input data configuration that you supplied when you created the document classifier for training.</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code for the language of the documents that the classifier was trained on. (en, es, fr, de, it, pt, ar, hi, ja, ko, zh, zh-TW)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the classifier.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Indicates the mode in which the specific classifier was trained. This also indicates the format of input documents and the format of the confusion matrix. Each classifier can only be trained in one mode and this cannot be changed once the classifier is trained. (MULTI_CLASS, MULTI_LABEL)</td>
</tr>
<tr>
    <td><CopyableCode code="model_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" (pattern: &lt;code&gt;^\p&#123;ASCII&#125;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>Provides output results configuration parameters for custom classifier jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="source_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source model. This model was imported from a different Amazon Web Services account to create the document classifier model in your Amazon Web Services account. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:document-classifier/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the document classifier. If the status is TRAINED the classifier is ready to use. If the status is TRAINED_WITH_WARNINGS the classifier training succeeded, but you should review the warnings returned in the CreateDocumentClassifier response. If the status is FAILED you can see additional information about why the classifier wasn't trained in the Message field. (SUBMITTED, TRAINING, DELETING, STOP_REQUESTED, STOPPED, IN_ERROR, TRAINED, TRAINED_WITH_WARNING)</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the document classifier was submitted for training.</td>
</tr>
<tr>
    <td><CopyableCode code="training_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that training of the document classifier was completed. Indicates the time when the training completes on documentation classifiers. You are billed for the time interval between this time and the value of TrainingStartTime.</td>
</tr>
<tr>
    <td><CopyableCode code="training_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the time when the training starts on documentation classifiers. You are billed for the time interval between this time and the value of TrainingEndTime.</td>
</tr>
<tr>
    <td><CopyableCode code="version_name" /></td>
    <td><code>string</code></td>
    <td>The version name that you assigned to the document classifier. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="volume_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" (pattern: &lt;code&gt;^\p&#123;ASCII&#125;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
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
    <td><a href="#describe_document_classifier"><CopyableCode code="describe_document_classifier" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the properties associated with a document classifier.</td>
</tr>
<tr>
    <td><a href="#list_document_classifiers"><CopyableCode code="list_document_classifiers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the document classifiers that you have created.</td>
</tr>
<tr>
    <td><a href="#create_document_classifier"><CopyableCode code="create_document_classifier" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DocumentClassifierName"><code>DocumentClassifierName</code></a>, <a href="#parameter-DataAccessRoleArn"><code>DataAccessRoleArn</code></a>, <a href="#parameter-InputDataConfig"><code>InputDataConfig</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see Training classifier models in the Comprehend Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_document_classifier"><CopyableCode code="delete_document_classifier" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a previously created document classifier Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use.</td>
</tr>
<tr>
    <td><a href="#stop_training_document_classifier"><CopyableCode code="stop_training_document_classifier" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DocumentClassifierArn"><code>DocumentClassifierArn</code></a></td>
    <td></td>
    <td>Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.</td>
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
    defaultValue="describe_document_classifier"
    values={[
        { label: 'describe_document_classifier', value: 'describe_document_classifier' },
        { label: 'list_document_classifiers', value: 'list_document_classifiers' }
    ]}
>
<TabItem value="describe_document_classifier">

Gets the properties associated with a document classifier.

```sql
SELECT
classifier_metadata,
data_access_role_arn,
document_classifier_arn,
end_time,
flywheel_arn,
input_data_config,
language_code,
message,
mode,
model_kms_key_id,
output_data_config,
source_model_arn,
status,
submit_time,
training_end_time,
training_start_time,
version_name,
volume_kms_key_id,
vpc_config
FROM aws.comprehend.document_classifiers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_document_classifiers">

Gets a list of the document classifiers that you have created.

```sql
SELECT
classifier_metadata,
data_access_role_arn,
document_classifier_arn,
end_time,
flywheel_arn,
input_data_config,
language_code,
message,
mode,
model_kms_key_id,
output_data_config,
source_model_arn,
status,
submit_time,
training_end_time,
training_start_time,
version_name,
volume_kms_key_id,
vpc_config
FROM aws.comprehend.document_classifiers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_document_classifier"
    values={[
        { label: 'create_document_classifier', value: 'create_document_classifier' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_document_classifier">

Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see Training classifier models in the Comprehend Developer Guide.

```sql
INSERT INTO aws.comprehend.document_classifiers (
DocumentClassifierName,
VersionName,
DataAccessRoleArn,
Tags,
InputDataConfig,
OutputDataConfig,
ClientRequestToken,
LanguageCode,
VolumeKmsKeyId,
VpcConfig,
Mode,
ModelKmsKeyId,
ModelPolicy,
region
)
SELECT 
'{{ DocumentClassifierName }}' /* required */,
'{{ VersionName }}',
'{{ DataAccessRoleArn }}' /* required */,
'{{ Tags }}',
'{{ InputDataConfig }}' /* required */,
'{{ OutputDataConfig }}',
'{{ ClientRequestToken }}',
'{{ LanguageCode }}' /* required */,
'{{ VolumeKmsKeyId }}',
'{{ VpcConfig }}',
'{{ Mode }}',
'{{ ModelKmsKeyId }}',
'{{ ModelPolicy }}',
'{{ region }}'
RETURNING
document_classifier_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: document_classifiers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the document_classifiers resource.
    - name: DocumentClassifierName
      value: "{{ DocumentClassifierName }}"
      description: |
        The name of the document classifier.
    - name: VersionName
      value: "{{ VersionName }}"
      description: |
        The version name given to the newly created classifier. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The version name must be unique among all models with the same classifier name in the Amazon Web Services account/Amazon Web Services Region.
    - name: DataAccessRoleArn
      value: "{{ DataAccessRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
    - name: Tags
      description: |
        Tags to associate with the document classifier. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: InputDataConfig
      description: |
        Specifies the format and location of the input data for the job.
      value:
        DataFormat: "{{ DataFormat }}"
        S3Uri: "{{ S3Uri }}"
        TestS3Uri: "{{ TestS3Uri }}"
        LabelDelimiter: "{{ LabelDelimiter }}"
        AugmentedManifests:
          - S3Uri: "{{ S3Uri }}"
            Split: "{{ Split }}"
            AttributeNames: "{{ AttributeNames }}"
            AnnotationDataS3Uri: "{{ AnnotationDataS3Uri }}"
            SourceDocumentsS3Uri: "{{ SourceDocumentsS3Uri }}"
            DocumentType: "{{ DocumentType }}"
        DocumentType: "{{ DocumentType }}"
        Documents:
          S3Uri: "{{ S3Uri }}"
          TestS3Uri: "{{ TestS3Uri }}"
        DocumentReaderConfig:
          DocumentReadAction: "{{ DocumentReadAction }}"
          DocumentReadMode: "{{ DocumentReadMode }}"
          FeatureTypes:
            - "{{ FeatureTypes }}"
    - name: OutputDataConfig
      description: |
        Specifies the location for the output files from a custom classifier job. This parameter is required for a request that creates a native document model.
      value:
        S3Uri: "{{ S3Uri }}"
        KmsKeyId: "{{ KmsKeyId }}"
        FlywheelStatsS3Prefix: "{{ FlywheelStatsS3Prefix }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
    - name: LanguageCode
      value: "{{ LanguageCode }}"
      description: |
        The language of the input documents. You can specify any of the languages supported by Amazon Comprehend. All documents must be in the same language.
      valid_values: ['en', 'es', 'fr', 'de', 'it', 'pt', 'ar', 'hi', 'ja', 'ko', 'zh', 'zh-TW']
    - name: VolumeKmsKeyId
      value: "{{ VolumeKmsKeyId }}"
      description: |
        ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    - name: VpcConfig
      description: |
        Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see Amazon VPC.
      value:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Subnets:
          - "{{ Subnets }}"
    - name: Mode
      value: "{{ Mode }}"
      description: |
        Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class (single-label) mode or multi-label mode. Multi-class mode identifies a single class label for each document and multi-label mode identifies one or more class labels for each document. Multiple labels for an individual document are separated by a delimiter. The default delimiter between labels is a pipe (|).
      valid_values: ['MULTI_CLASS', 'MULTI_LABEL']
    - name: ModelKmsKeyId
      value: "{{ ModelKmsKeyId }}"
      description: |
        ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    - name: ModelPolicy
      value: "{{ ModelPolicy }}"
      description: |
        The resource-based policy to attach to your custom document classifier model. You can use this policy to allow another Amazon Web Services account to import your custom model. Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy: "{\"attribute\": \"value\", \"attribute\": [\"value\"]}" To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values: '{"attribute": "value", "attribute": ["value"]}'
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_document_classifier"
    values={[
        { label: 'delete_document_classifier', value: 'delete_document_classifier' }
    ]}
>
<TabItem value="delete_document_classifier">

Deletes a previously created document classifier Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use.

```sql
DELETE FROM aws.comprehend.document_classifiers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_training_document_classifier"
    values={[
        { label: 'stop_training_document_classifier', value: 'stop_training_document_classifier' }
    ]}
>
<TabItem value="stop_training_document_classifier">

Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.

```sql
EXEC aws.comprehend.document_classifiers.stop_training_document_classifier 
@region='{{ region }}' --required 
@@json=
'{
"DocumentClassifierArn": "{{ DocumentClassifierArn }}"
}'
;
```
</TabItem>
</Tabs>
