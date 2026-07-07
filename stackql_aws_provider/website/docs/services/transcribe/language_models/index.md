--- 
title: language_models
hide_title: false
hide_table_of_contents: false
keywords:
  - language_models
  - transcribe
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

Creates, updates, deletes, gets or lists a <code>language_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="language_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transcribe.language_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_language_model"
    values={[
        { label: 'describe_language_model', value: 'describe_language_model' },
        { label: 'list_language_models', value: 'list_language_models' }
    ]}
>
<TabItem value="describe_language_model">

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
    <td><CopyableCode code="BaseModelName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Transcribe standard language model, or base model, used to create your custom language model. (NarrowBand, WideBand)</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified custom language model was created. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If ModelStatus is FAILED, FailureReason contains information about why the custom language model request failed. See also: Common Errors.</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location of the input files used to train and tune your custom language model, in addition to the data access role ARN (Amazon Resource Name) that has permissions to access these data.</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language code used to create your custom language model. Each custom language model must contain terms in only one language, and the language you select for your custom language model must match the language of your training and tuning data. For a list of supported languages and their associated language codes, refer to the Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe Medical. (en-US, hi-IN, es-US, en-GB, en-AU, de-DE, ja-JP)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified custom language model was last modified. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelName" /></td>
    <td><code>string</code></td>
    <td>A unique name, chosen by you, for your custom language model. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModelStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the specified custom language model. When the status displays as COMPLETED the model is ready for use. (IN_PROGRESS, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="UpgradeAvailability" /></td>
    <td><code>boolean</code></td>
    <td>Shows if a more current base model is available for use with the specified custom language model. If false, your custom language model is using the most up-to-date base model. If true, there is a newer base model available than the one your language model is using. Note that to update a base model, you must recreate the custom language model using the new base model. Base model upgrades for existing custom language models are not supported.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_language_models">

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
    <td><CopyableCode code="Models" /></td>
    <td><code>array</code></td>
    <td>Provides information about the custom language models that match the criteria specified in your request.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If NextToken is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the NextToken parameter in your results output, then run your request again including NextToken with the value of the copied string. Repeat as needed to view all your results. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
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
    <td><a href="#describe_language_model"><CopyableCode code="describe_language_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the specified custom language model. This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If you tried to create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help identify the reason for this failure.</td>
</tr>
<tr>
    <td><a href="#list_language_models"><CopyableCode code="list_language_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned. To get detailed information about a specific custom language model, use the operation.</td>
</tr>
<tr>
    <td><a href="#create_language_model"><CopyableCode code="create_language_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a>, <a href="#parameter-BaseModelName"><code>BaseModelName</code></a>, <a href="#parameter-ModelName"><code>ModelName</code></a>, <a href="#parameter-InputDataConfig"><code>InputDataConfig</code></a></td>
    <td></td>
    <td>Creates a new custom language model. When creating a new custom language model, you must specify: If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model The location of your training and tuning files (this must be an Amazon S3 URI) The language of your model A unique name for your model</td>
</tr>
<tr>
    <td><a href="#delete_language_model"><CopyableCode code="delete_language_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using ModelName. custom language model names are case sensitive.</td>
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
    defaultValue="describe_language_model"
    values={[
        { label: 'describe_language_model', value: 'describe_language_model' },
        { label: 'list_language_models', value: 'list_language_models' }
    ]}
>
<TabItem value="describe_language_model">

Provides information about the specified custom language model. This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If you tried to create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help identify the reason for this failure.

```sql
SELECT
BaseModelName,
CreateTime,
FailureReason,
InputDataConfig,
LanguageCode,
LastModifiedTime,
ModelName,
ModelStatus,
UpgradeAvailability
FROM aws.transcribe.language_models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_language_models">

Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned. To get detailed information about a specific custom language model, use the operation.

```sql
SELECT
Models,
NextToken
FROM aws.transcribe.language_models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_language_model"
    values={[
        { label: 'create_language_model', value: 'create_language_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_language_model">

Creates a new custom language model. When creating a new custom language model, you must specify: If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model The location of your training and tuning files (this must be an Amazon S3 URI) The language of your model A unique name for your model

```sql
INSERT INTO aws.transcribe.language_models (
LanguageCode,
BaseModelName,
ModelName,
InputDataConfig,
Tags,
region
)
SELECT 
'{{ LanguageCode }}' /* required */,
'{{ BaseModelName }}' /* required */,
'{{ ModelName }}' /* required */,
'{{ InputDataConfig }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
BaseModelName,
InputDataConfig,
LanguageCode,
ModelName,
ModelStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: language_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the language_models resource.
    - name: LanguageCode
      value: "{{ LanguageCode }}"
      description: |
        The language code that represents the language of your model. Each custom language model must contain terms in only one language, and the language you select for your custom language model must match the language of your training and tuning data. For a list of supported languages and their associated language codes, refer to the Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe Medical. A custom language model can only be used to transcribe files in the same language as the model. For example, if you create a custom language model using US English (en-US), you can only apply this model to files that contain English audio.
      valid_values: ['en-US', 'hi-IN', 'es-US', 'en-GB', 'en-AU', 'de-DE', 'ja-JP']
    - name: BaseModelName
      value: "{{ BaseModelName }}"
      description: |
        The Amazon Transcribe standard language model, or base model, used to create your custom language model. Amazon Transcribe offers two options for base models: Wideband and Narrowband. If the audio you want to transcribe has a sample rate of 16,000 Hz or greater, choose WideBand. To transcribe audio with a sample rate less than 16,000 Hz, choose NarrowBand.
      valid_values: ['NarrowBand', 'WideBand']
    - name: ModelName
      value: "{{ ModelName }}"
      description: |
        A unique name, chosen by you, for your custom language model. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom language model with the same name as an existing custom language model, you get a ConflictException error.
    - name: InputDataConfig
      description: |
        Contains the Amazon S3 location of the training data you want to use to create a new custom language model, and permissions to access this location. When using InputDataConfig, you must include these sub-parameters: S3Uri, which is the Amazon S3 location of your training data, and DataAccessRoleArn, which is the Amazon Resource Name (ARN) of the role that has permission to access your specified Amazon S3 location. You can optionally include TuningDataS3Uri, which is the Amazon S3 location of your tuning data. If you specify different Amazon S3 locations for training and tuning data, the ARN you use must have permissions to access both locations.
      value:
        S3Uri: "{{ S3Uri }}"
        TuningDataS3Uri: "{{ TuningDataS3Uri }}"
        DataAccessRoleArn: "{{ DataAccessRoleArn }}"
    - name: Tags
      description: |
        Adds one or more custom tags, each in the form of a key:value pair, to a new custom language model at the time you create this new model. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_language_model"
    values={[
        { label: 'delete_language_model', value: 'delete_language_model' }
    ]}
>
<TabItem value="delete_language_model">

Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using ModelName. custom language model names are case sensitive.

```sql
DELETE FROM aws.transcribe.language_models
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
