--- 
title: project_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - project_versions
  - rekognition
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

Creates, updates, deletes, gets or lists a <code>project_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.project_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_project_versions"
    values={[
        { label: 'describe_project_versions', value: 'describe_project_versions' }
    ]}
>
<TabItem value="describe_project_versions">

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
    <td><CopyableCode code="BaseModelVersion" /></td>
    <td><code>string</code></td>
    <td>The base detection model version used to create the project version.</td>
</tr>
<tr>
    <td><CopyableCode code="BillableTrainingTimeInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The duration, in seconds, that you were billed for a successful training of the model version. This value is only returned if the model version has been successfully trained.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix datetime for the date and time that training started.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationResult" /></td>
    <td><code>object</code></td>
    <td>The training results. EvaluationResult is only returned if training is successful.</td>
</tr>
<tr>
    <td><CopyableCode code="Feature" /></td>
    <td><code>string</code></td>
    <td>The feature that was customized. (CONTENT_MODERATION, CUSTOM_LABELS)</td>
</tr>
<tr>
    <td><CopyableCode code="FeatureConfig" /></td>
    <td><code>object</code></td>
    <td>Feature specific configuration that was applied during training.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The identifer for the AWS Key Management Service key (AWS KMS key) that was used to encrypt the model during training. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,2048&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ManifestSummary" /></td>
    <td><code>object</code></td>
    <td>The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxInferenceUnits" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of inference units Amazon Rekognition uses to auto-scale the model. Applies only to Custom Labels projects. For more information, see StartProjectVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="MinInferenceUnits" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of inference units used by the model. Applies only to Custom Labels projects. For more information, see StartProjectVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputConfig" /></td>
    <td><code>object</code></td>
    <td>The location where training results are saved.</td>
</tr>
<tr>
    <td><CopyableCode code="ProjectVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the project version. (pattern: &lt;code&gt;(^arn:&#91;a-z\d-&#93;+:rekognition:&#91;a-z\d-&#93;+:\d&#123;12&#125;:project\/&#91;a-zA-Z0-9_.\-&#93;&#123;1,255&#125;\/version\/&#91;a-zA-Z0-9_.\-&#93;&#123;1,255&#125;\/&#91;0-9&#93;+$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceProjectVersionArn" /></td>
    <td><code>string</code></td>
    <td>If the model version was copied from a different project, SourceProjectVersionArn contains the ARN of the source model version. (pattern: &lt;code&gt;(^arn:&#91;a-z\d-&#93;+:rekognition:&#91;a-z\d-&#93;+:\d&#123;12&#125;:project\/&#91;a-zA-Z0-9_.\-&#93;&#123;1,255&#125;\/version\/&#91;a-zA-Z0-9_.\-&#93;&#123;1,255&#125;\/&#91;0-9&#93;+$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the model version. (TRAINING_IN_PROGRESS, TRAINING_COMPLETED, TRAINING_FAILED, STARTING, RUNNING, FAILED, STOPPING, STOPPED, DELETING, COPYING_IN_PROGRESS, COPYING_COMPLETED, COPYING_FAILED, DEPRECATED, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A descriptive message for an error or warning that occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="TestingDataResult" /></td>
    <td><code>object</code></td>
    <td>Contains information about the testing results.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingDataResult" /></td>
    <td><code>object</code></td>
    <td>Contains information about the training results.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingEndTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix date and time that training of the model ended.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionDescription" /></td>
    <td><code>string</code></td>
    <td>A user-provided description of the project version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_. ()':,;?&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_project_versions"><CopyableCode code="describe_project_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists and describes the versions of an Amazon Rekognition project. You can specify up to 10 model or adapter versions in ProjectVersionArns. If you don't specify a value, descriptions for all model/adapter versions in the project are returned. This operation requires permissions to perform the rekognition:DescribeProjectVersions action.</td>
</tr>
<tr>
    <td><a href="#create_project_version"><CopyableCode code="create_project_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProjectArn"><code>ProjectArn</code></a>, <a href="#parameter-VersionName"><code>VersionName</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a></td>
    <td></td>
    <td>Creates a new version of Amazon Rekognition project (like a Custom Labels model or a custom adapter) and begins training. Models and adapters are managed as part of a Rekognition project. The response from CreateProjectVersion is an Amazon Resource Name (ARN) for the project version. The FeatureConfig operation argument allows you to configure specific model or adapter settings. You can provide a description to the project version by using the VersionDescription argment. Training can take a while to complete. You can get the current status by calling DescribeProjectVersions. Training completed successfully if the value of the Status field is TRAINING_COMPLETED. Once training has successfully completed, call DescribeProjectVersions to get the training results and evaluate the model. This operation requires permissions to perform the rekognition:CreateProjectVersion action. The following applies only to projects with Amazon Rekognition Custom Labels as the chosen feature: You can train a model in a project that doesn't have associated datasets by specifying manifest files in the TrainingData and TestingData fields. If you open the console after training a model with manifest files, Amazon Rekognition Custom Labels creates the datasets for you using the most recent manifest files. You can no longer train a model version for the project by specifying manifest files. Instead of training with a project without associated datasets, we recommend that you use the manifest files to create training and test datasets for the project.</td>
</tr>
<tr>
    <td><a href="#delete_project_version"><CopyableCode code="delete_project_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels model or a custom adapter. You can't delete a project version if it is running or if it is training. To check the status of a project version, use the Status field returned from DescribeProjectVersions. To stop a project version call StopProjectVersion. If the project version is training, wait until it finishes. This operation requires permissions to perform the rekognition:DeleteProjectVersion action.</td>
</tr>
<tr>
    <td><a href="#detect_custom_labels"><CopyableCode code="detect_custom_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProjectVersionArn"><code>ProjectVersionArn</code></a>, <a href="#parameter-Image"><code>Image</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel object provides the label name (Name), the level of confidence that the image contains the object (Confidence), and object location information, if it exists, for the label on the image (Geometry). To filter labels that are returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created during training. For more information, see Assumed threshold in the Amazon Rekognition Custom Labels Developer Guide. Amazon Rekognition Custom Labels metrics expresses an assumed threshold as a floating point value between 0-1. The range of MinConfidence normalizes the threshold value to a percentage value (0-100). Confidence responses from DetectCustomLabels are also returned as a percentage. You can use MinConfidence to change the precision and recall or your model. For more information, see Analyzing an image in the Amazon Rekognition Custom Labels Developer Guide. If you don't specify a value for MinConfidence, DetectCustomLabels returns labels based on the assumed threshold of each label. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectCustomLabels action. For more information, see Analyzing an image in the Amazon Rekognition Custom Labels Developer Guide.</td>
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
    defaultValue="describe_project_versions"
    values={[
        { label: 'describe_project_versions', value: 'describe_project_versions' }
    ]}
>
<TabItem value="describe_project_versions">

Lists and describes the versions of an Amazon Rekognition project. You can specify up to 10 model or adapter versions in ProjectVersionArns. If you don't specify a value, descriptions for all model/adapter versions in the project are returned. This operation requires permissions to perform the rekognition:DescribeProjectVersions action.

```sql
SELECT
BaseModelVersion,
BillableTrainingTimeInSeconds,
CreationTimestamp,
EvaluationResult,
Feature,
FeatureConfig,
KmsKeyId,
ManifestSummary,
MaxInferenceUnits,
MinInferenceUnits,
OutputConfig,
ProjectVersionArn,
SourceProjectVersionArn,
Status,
StatusMessage,
TestingDataResult,
TrainingDataResult,
TrainingEndTimestamp,
VersionDescription
FROM aws.rekognition.project_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_project_version"
    values={[
        { label: 'create_project_version', value: 'create_project_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_project_version">

Creates a new version of Amazon Rekognition project (like a Custom Labels model or a custom adapter) and begins training. Models and adapters are managed as part of a Rekognition project. The response from CreateProjectVersion is an Amazon Resource Name (ARN) for the project version. The FeatureConfig operation argument allows you to configure specific model or adapter settings. You can provide a description to the project version by using the VersionDescription argment. Training can take a while to complete. You can get the current status by calling DescribeProjectVersions. Training completed successfully if the value of the Status field is TRAINING_COMPLETED. Once training has successfully completed, call DescribeProjectVersions to get the training results and evaluate the model. This operation requires permissions to perform the rekognition:CreateProjectVersion action. The following applies only to projects with Amazon Rekognition Custom Labels as the chosen feature: You can train a model in a project that doesn't have associated datasets by specifying manifest files in the TrainingData and TestingData fields. If you open the console after training a model with manifest files, Amazon Rekognition Custom Labels creates the datasets for you using the most recent manifest files. You can no longer train a model version for the project by specifying manifest files. Instead of training with a project without associated datasets, we recommend that you use the manifest files to create training and test datasets for the project.

```sql
INSERT INTO aws.rekognition.project_versions (
ProjectArn,
VersionName,
OutputConfig,
TrainingData,
TestingData,
Tags,
KmsKeyId,
VersionDescription,
FeatureConfig,
region
)
SELECT 
'{{ ProjectArn }}' /* required */,
'{{ VersionName }}' /* required */,
'{{ OutputConfig }}' /* required */,
'{{ TrainingData }}',
'{{ TestingData }}',
'{{ Tags }}',
'{{ KmsKeyId }}',
'{{ VersionDescription }}',
'{{ FeatureConfig }}',
'{{ region }}'
RETURNING
ProjectVersionArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: project_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the project_versions resource.
    - name: ProjectArn
      value: "{{ ProjectArn }}"
      description: |
        The ARN of the Amazon Rekognition project that will manage the project version you want to train.
    - name: VersionName
      value: "{{ VersionName }}"
      description: |
        A name for the version of the project version. This value must be unique.
    - name: OutputConfig
      description: |
        The Amazon S3 bucket location to store the results of training. The bucket can be any S3 bucket in your AWS account. You need s3:PutObject permission on the bucket.
      value:
        S3Bucket: "{{ S3Bucket }}"
        S3KeyPrefix: "{{ S3KeyPrefix }}"
    - name: TrainingData
      description: |
        Specifies an external manifest that the services uses to train the project version. If you specify TrainingData you must also specify TestingData. The project must not have any associated datasets.
      value:
        Assets:
          - GroundTruthManifest:
              S3Object:
                Bucket: "{{ Bucket }}"
                Name: "{{ Name }}"
                Version: "{{ Version }}"
    - name: TestingData
      description: |
        Specifies an external manifest that the service uses to test the project version. If you specify TestingData you must also specify TrainingData. The project must not have any associated datasets.
      value:
        Assets:
          - GroundTruthManifest:
              S3Object:
                Bucket: "{{ Bucket }}"
                Name: "{{ Name }}"
                Version: "{{ Version }}"
        AutoCreate: {{ AutoCreate }}
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A set of tags (key-value pairs) that you want to attach to the project version.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt training images, test images, and manifest files copied into the service for the project version. Your source images are unaffected. The key is also used to encrypt training results and manifest files written to the output Amazon S3 bucket (OutputConfig). If you choose to use your own KMS key, you need the following permissions on the KMS key. kms:CreateGrant kms:DescribeKey kms:GenerateDataKey kms:Decrypt If you don't specify a value for KmsKeyId, images copied into the service are encrypted using a key that AWS owns and manages.
    - name: VersionDescription
      value: "{{ VersionDescription }}"
      description: |
        A description applied to the project version being created.
    - name: FeatureConfig
      description: |
        Feature-specific configuration of the training job. If the job configuration does not match the feature type associated with the project, an InvalidParameterException is returned.
      value:
        ContentModeration:
          ConfidenceThreshold: {{ ConfidenceThreshold }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_project_version"
    values={[
        { label: 'delete_project_version', value: 'delete_project_version' }
    ]}
>
<TabItem value="delete_project_version">

Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels model or a custom adapter. You can't delete a project version if it is running or if it is training. To check the status of a project version, use the Status field returned from DescribeProjectVersions. To stop a project version call StopProjectVersion. If the project version is training, wait until it finishes. This operation requires permissions to perform the rekognition:DeleteProjectVersion action.

```sql
DELETE FROM aws.rekognition.project_versions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detect_custom_labels"
    values={[
        { label: 'detect_custom_labels', value: 'detect_custom_labels' }
    ]}
>
<TabItem value="detect_custom_labels">

This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel object provides the label name (Name), the level of confidence that the image contains the object (Confidence), and object location information, if it exists, for the label on the image (Geometry). To filter labels that are returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created during training. For more information, see Assumed threshold in the Amazon Rekognition Custom Labels Developer Guide. Amazon Rekognition Custom Labels metrics expresses an assumed threshold as a floating point value between 0-1. The range of MinConfidence normalizes the threshold value to a percentage value (0-100). Confidence responses from DetectCustomLabels are also returned as a percentage. You can use MinConfidence to change the precision and recall or your model. For more information, see Analyzing an image in the Amazon Rekognition Custom Labels Developer Guide. If you don't specify a value for MinConfidence, DetectCustomLabels returns labels based on the assumed threshold of each label. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectCustomLabels action. For more information, see Analyzing an image in the Amazon Rekognition Custom Labels Developer Guide.

```sql
EXEC aws.rekognition.project_versions.detect_custom_labels 
@region='{{ region }}' --required 
@@json=
'{
"ProjectVersionArn": "{{ ProjectVersionArn }}", 
"Image": "{{ Image }}", 
"MaxResults": {{ MaxResults }}, 
"MinConfidence": {{ MinConfidence }}
}'
;
```
</TabItem>
</Tabs>
