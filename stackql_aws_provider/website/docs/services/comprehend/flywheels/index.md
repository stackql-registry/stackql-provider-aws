--- 
title: flywheels
hide_title: false
hide_table_of_contents: false
keywords:
  - flywheels
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

Creates, updates, deletes, gets or lists a <code>flywheels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flywheels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.flywheels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_flywheel"
    values={[
        { label: 'describe_flywheel', value: 'describe_flywheel' },
        { label: 'list_flywheels', value: 'list_flywheels' }
    ]}
>
<TabItem value="describe_flywheel">

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
    <td><CopyableCode code="active_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the active model version. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:(document-classifier|entity-recognizer)/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the flywheel.</td>
</tr>
<tr>
    <td><CopyableCode code="data_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_lake_s3_uri" /></td>
    <td><code>string</code></td>
    <td>Amazon S3 URI of the data lake location. (pattern: &lt;code&gt;s3:​//&#91;a-z0-9&#93;&#91;\.\-a-z0-9&#93;&#123;1,61&#125;&#91;a-z0-9&#93;(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_security_config" /></td>
    <td><code>object</code></td>
    <td>Data security configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="flywheel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the flywheel. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified time for the flywheel.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_flywheel_iteration" /></td>
    <td><code>string</code></td>
    <td>The most recent flywheel iteration. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;8&#125;T&#91;0-9&#93;&#123;6&#125;Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of the flywheel.</td>
</tr>
<tr>
    <td><CopyableCode code="model_type" /></td>
    <td><code>string</code></td>
    <td>Model type of the flywheel's model. (DOCUMENT_CLASSIFIER, ENTITY_RECOGNIZER)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the flywheel. (CREATING, ACTIVE, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_config" /></td>
    <td><code>object</code></td>
    <td>Configuration about the model associated with a flywheel.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_flywheels">

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
    <td><CopyableCode code="flywheel_summary_list" /></td>
    <td><code>array</code></td>
    <td>A list of flywheel properties retrieved by the service in response to the request.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Identifies the next page of results to return.</td>
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
    <td><a href="#describe_flywheel"><CopyableCode code="describe_flywheel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides configuration information about the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_flywheels"><CopyableCode code="list_flywheels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the flywheels that you have created.</td>
</tr>
<tr>
    <td><a href="#create_flywheel"><CopyableCode code="create_flywheel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FlywheelName"><code>FlywheelName</code></a>, <a href="#parameter-DataAccessRoleArn"><code>DataAccessRoleArn</code></a>, <a href="#parameter-DataLakeS3Uri"><code>DataLakeS3Uri</code></a></td>
    <td></td>
    <td>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model. When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model. To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake. To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_flywheel"><CopyableCode code="update_flywheel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FlywheelArn"><code>FlywheelArn</code></a></td>
    <td></td>
    <td>Update the configuration information for an existing flywheel.</td>
</tr>
<tr>
    <td><a href="#delete_flywheel"><CopyableCode code="delete_flywheel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.</td>
</tr>
<tr>
    <td><a href="#start_flywheel_iteration"><CopyableCode code="start_flywheel_iteration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FlywheelArn"><code>FlywheelArn</code></a></td>
    <td></td>
    <td>Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.</td>
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
    defaultValue="describe_flywheel"
    values={[
        { label: 'describe_flywheel', value: 'describe_flywheel' },
        { label: 'list_flywheels', value: 'list_flywheels' }
    ]}
>
<TabItem value="describe_flywheel">

Provides configuration information about the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

```sql
SELECT
active_model_arn,
creation_time,
data_access_role_arn,
data_lake_s3_uri,
data_security_config,
flywheel_arn,
last_modified_time,
latest_flywheel_iteration,
message,
model_type,
status,
task_config
FROM aws.comprehend.flywheels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_flywheels">

Gets a list of the flywheels that you have created.

```sql
SELECT
flywheel_summary_list,
next_token
FROM aws.comprehend.flywheels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_flywheel"
    values={[
        { label: 'create_flywheel', value: 'create_flywheel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_flywheel">

A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model. When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model. To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake. To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

```sql
INSERT INTO aws.comprehend.flywheels (
FlywheelName,
ActiveModelArn,
DataAccessRoleArn,
TaskConfig,
ModelType,
DataLakeS3Uri,
DataSecurityConfig,
ClientRequestToken,
Tags,
region
)
SELECT 
'{{ FlywheelName }}' /* required */,
'{{ ActiveModelArn }}',
'{{ DataAccessRoleArn }}' /* required */,
'{{ TaskConfig }}',
'{{ ModelType }}',
'{{ DataLakeS3Uri }}' /* required */,
'{{ DataSecurityConfig }}',
'{{ ClientRequestToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
active_model_arn,
flywheel_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flywheels
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flywheels resource.
    - name: FlywheelName
      value: "{{ FlywheelName }}"
      description: |
        Name for the flywheel.
    - name: ActiveModelArn
      value: "{{ ActiveModelArn }}"
      description: |
        To associate an existing model with the flywheel, specify the Amazon Resource Number (ARN) of the model version. Do not set TaskConfig or ModelType if you specify an ActiveModelArn.
    - name: DataAccessRoleArn
      value: "{{ DataAccessRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend the permissions required to access the flywheel data in the data lake.
    - name: TaskConfig
      description: |
        Configuration about the model associated with the flywheel. You need to set TaskConfig if you are creating a flywheel for a new model.
      value:
        LanguageCode: "{{ LanguageCode }}"
        DocumentClassificationConfig:
          Mode: "{{ Mode }}"
          Labels:
            - "{{ Labels }}"
        EntityRecognitionConfig:
          EntityTypes:
            - Type: "{{ Type }}"
    - name: ModelType
      value: "{{ ModelType }}"
      description: |
        The model type. You need to set ModelType if you are creating a flywheel for a new model.
      valid_values: ['DOCUMENT_CLASSIFIER', 'ENTITY_RECOGNIZER']
    - name: DataLakeS3Uri
      value: "{{ DataLakeS3Uri }}"
      description: |
        Enter the S3 location for the data lake. You can specify a new S3 bucket or a new folder of an existing S3 bucket. The flywheel creates the data lake at this location.
    - name: DataSecurityConfig
      description: |
        Data security configurations.
      value:
        ModelKmsKeyId: "{{ ModelKmsKeyId }}"
        VolumeKmsKeyId: "{{ VolumeKmsKeyId }}"
        DataLakeKmsKeyId: "{{ DataLakeKmsKeyId }}"
        VpcConfig:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          Subnets:
            - "{{ Subnets }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
    - name: Tags
      description: |
        The tags to associate with this flywheel.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_flywheel"
    values={[
        { label: 'update_flywheel', value: 'update_flywheel' }
    ]}
>
<TabItem value="update_flywheel">

Update the configuration information for an existing flywheel.

```sql
UPDATE aws.comprehend.flywheels
SET 
FlywheelArn = '{{ FlywheelArn }}',
ActiveModelArn = '{{ ActiveModelArn }}',
DataAccessRoleArn = '{{ DataAccessRoleArn }}',
DataSecurityConfig = '{{ DataSecurityConfig }}'
WHERE 
region = '{{ region }}' --required
AND FlywheelArn = '{{ FlywheelArn }}' --required
RETURNING
flywheel_properties;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_flywheel"
    values={[
        { label: 'delete_flywheel', value: 'delete_flywheel' }
    ]}
>
<TabItem value="delete_flywheel">

Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

```sql
DELETE FROM aws.comprehend.flywheels
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_flywheel_iteration"
    values={[
        { label: 'start_flywheel_iteration', value: 'start_flywheel_iteration' }
    ]}
>
<TabItem value="start_flywheel_iteration">

Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

```sql
EXEC aws.comprehend.flywheels.start_flywheel_iteration 
@region='{{ region }}' --required 
@@json=
'{
"FlywheelArn": "{{ FlywheelArn }}", 
"ClientRequestToken": "{{ ClientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
