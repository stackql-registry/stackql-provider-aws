--- 
title: model_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - model_versions
  - frauddetector
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

Creates, updates, deletes, gets or lists a <code>model_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.model_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_version"
    values={[
        { label: 'get_model_version', value: 'get_model_version' },
        { label: 'describe_model_versions', value: 'describe_model_versions' }
    ]}
>
<TabItem value="get_model_version">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The model version ARN. (pattern: &lt;code&gt;^arn\:aws&#91;a-z-&#93;&#123;0,15&#125;\:frauddetector\:&#91;a-z0-9-&#93;&#123;3,20&#125;\:&#91;0-9&#93;&#123;12&#125;\:&#91;^\s&#93;&#123;2,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="externalEventsDetail" /></td>
    <td><code>object</code></td>
    <td>The details of the external events data used for training the model version. This will be populated if the trainingDataSource is EXTERNAL_EVENTS</td>
</tr>
<tr>
    <td><CopyableCode code="ingestedEventsDetail" /></td>
    <td><code>object</code></td>
    <td>The details of the ingested events data used for training the model version. This will be populated if the trainingDataSource is INGESTED_EVENTS.</td>
</tr>
<tr>
    <td><CopyableCode code="modelId" /></td>
    <td><code>string</code></td>
    <td>The model ID. (pattern: &lt;code&gt;^&#91;0-9a-z_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modelType" /></td>
    <td><code>string</code></td>
    <td>The model type. (ONLINE_FRAUD_INSIGHTS, TRANSACTION_FRAUD_INSIGHTS, ACCOUNT_TAKEOVER_INSIGHTS)</td>
</tr>
<tr>
    <td><CopyableCode code="modelVersionNumber" /></td>
    <td><code>string</code></td>
    <td>The model version number. (pattern: &lt;code&gt;^&#91;1-9&#93;&#91;0-9&#93;&#123;0,3&#125;\.&#91;0-9&#93;&#123;1,2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The model version status. Possible values are: TRAINING_IN_PROGRESS TRAINING_COMPLETE ACTIVATE_REQUESTED ACTIVATE_IN_PROGRESS ACTIVE INACTIVATE_REQUESTED INACTIVATE_IN_PROGRESS INACTIVE ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="trainingDataSchema" /></td>
    <td><code>object</code></td>
    <td>The training data schema.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingDataSource" /></td>
    <td><code>string</code></td>
    <td>The training data source. (EXTERNAL_EVENTS, INGESTED_EVENTS)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_model_versions">

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
    <td><CopyableCode code="modelVersionDetails" /></td>
    <td><code>array</code></td>
    <td>The model version details.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next token.</td>
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
    <td><a href="#get_model_version"><CopyableCode code="get_model_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of the specified model version.</td>
</tr>
<tr>
    <td><a href="#describe_model_versions"><CopyableCode code="describe_model_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version.</td>
</tr>
<tr>
    <td><a href="#create_model_version"><CopyableCode code="create_model_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelId"><code>modelId</code></a>, <a href="#parameter-modelType"><code>modelType</code></a>, <a href="#parameter-trainingDataSource"><code>trainingDataSource</code></a>, <a href="#parameter-trainingDataSchema"><code>trainingDataSchema</code></a></td>
    <td></td>
    <td>Creates a version of the model using the specified model type and model id.</td>
</tr>
<tr>
    <td><a href="#update_model_version_status"><CopyableCode code="update_model_version_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelId"><code>modelId</code></a>, <a href="#parameter-modelType"><code>modelType</code></a>, <a href="#parameter-modelVersionNumber"><code>modelVersionNumber</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the status of a model version. You can perform the following status updates: Change the TRAINING_IN_PROGRESS status to TRAINING_CANCELLED. Change the TRAINING_COMPLETE status to ACTIVE. Change ACTIVE to INACTIVE.</td>
</tr>
<tr>
    <td><a href="#update_model_version"><CopyableCode code="update_model_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelId"><code>modelId</code></a>, <a href="#parameter-modelType"><code>modelType</code></a>, <a href="#parameter-majorVersionNumber"><code>majorVersionNumber</code></a></td>
    <td></td>
    <td>Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.</td>
</tr>
<tr>
    <td><a href="#delete_model_version"><CopyableCode code="delete_model_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a model version. You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version. When you delete a model version, Amazon Fraud Detector permanently deletes that model version and the data is no longer stored in Amazon Fraud Detector.</td>
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
    defaultValue="get_model_version"
    values={[
        { label: 'get_model_version', value: 'get_model_version' },
        { label: 'describe_model_versions', value: 'describe_model_versions' }
    ]}
>
<TabItem value="get_model_version">

Gets the details of the specified model version.

```sql
SELECT
arn,
externalEventsDetail,
ingestedEventsDetail,
modelId,
modelType,
modelVersionNumber,
status,
trainingDataSchema,
trainingDataSource
FROM aws.frauddetector.model_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_model_versions">

Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version.

```sql
SELECT
modelVersionDetails,
nextToken
FROM aws.frauddetector.model_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_model_version"
    values={[
        { label: 'create_model_version', value: 'create_model_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_model_version">

Creates a version of the model using the specified model type and model id.

```sql
INSERT INTO aws.frauddetector.model_versions (
modelId,
modelType,
trainingDataSource,
trainingDataSchema,
externalEventsDetail,
ingestedEventsDetail,
tags,
region
)
SELECT 
'{{ modelId }}' /* required */,
'{{ modelType }}' /* required */,
'{{ trainingDataSource }}' /* required */,
'{{ trainingDataSchema }}' /* required */,
'{{ externalEventsDetail }}',
'{{ ingestedEventsDetail }}',
'{{ tags }}',
'{{ region }}'
RETURNING
modelId,
modelType,
modelVersionNumber,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the model_versions resource.
    - name: modelId
      value: "{{ modelId }}"
      description: |
        The model ID.
    - name: modelType
      value: "{{ modelType }}"
      description: |
        The model type.
      valid_values: ['ONLINE_FRAUD_INSIGHTS', 'TRANSACTION_FRAUD_INSIGHTS', 'ACCOUNT_TAKEOVER_INSIGHTS']
    - name: trainingDataSource
      value: "{{ trainingDataSource }}"
      description: |
        The training data source location in Amazon S3.
      valid_values: ['EXTERNAL_EVENTS', 'INGESTED_EVENTS']
    - name: trainingDataSchema
      description: |
        The training data schema.
      value:
        modelVariables:
          - "{{ modelVariables }}"
        labelSchema:
          labelMapper: "{{ labelMapper }}"
          unlabeledEventsTreatment: "{{ unlabeledEventsTreatment }}"
    - name: externalEventsDetail
      description: |
        Details of the external events data used for model version training. Required if trainingDataSource is EXTERNAL_EVENTS.
      value:
        dataLocation: "{{ dataLocation }}"
        dataAccessRoleArn: "{{ dataAccessRoleArn }}"
    - name: ingestedEventsDetail
      description: |
        Details of the ingested events data used for model version training. Required if trainingDataSource is INGESTED_EVENTS.
      value:
        ingestedEventsTimeWindow:
          startTime: "{{ startTime }}"
          endTime: "{{ endTime }}"
    - name: tags
      description: |
        A collection of key and value pairs.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_model_version_status"
    values={[
        { label: 'update_model_version_status', value: 'update_model_version_status' },
        { label: 'update_model_version', value: 'update_model_version' }
    ]}
>
<TabItem value="update_model_version_status">

Updates the status of a model version. You can perform the following status updates: Change the TRAINING_IN_PROGRESS status to TRAINING_CANCELLED. Change the TRAINING_COMPLETE status to ACTIVE. Change ACTIVE to INACTIVE.

```sql
UPDATE aws.frauddetector.model_versions
SET 
modelId = '{{ modelId }}',
modelType = '{{ modelType }}',
modelVersionNumber = '{{ modelVersionNumber }}',
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required
AND modelId = '{{ modelId }}' --required
AND modelType = '{{ modelType }}' --required
AND modelVersionNumber = '{{ modelVersionNumber }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
<TabItem value="update_model_version">

Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.

```sql
UPDATE aws.frauddetector.model_versions
SET 
modelId = '{{ modelId }}',
modelType = '{{ modelType }}',
majorVersionNumber = '{{ majorVersionNumber }}',
externalEventsDetail = '{{ externalEventsDetail }}',
ingestedEventsDetail = '{{ ingestedEventsDetail }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND modelId = '{{ modelId }}' --required
AND modelType = '{{ modelType }}' --required
AND majorVersionNumber = '{{ majorVersionNumber }}' --required
RETURNING
modelId,
modelType,
modelVersionNumber,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model_version"
    values={[
        { label: 'delete_model_version', value: 'delete_model_version' }
    ]}
>
<TabItem value="delete_model_version">

Deletes a model version. You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version. When you delete a model version, Amazon Fraud Detector permanently deletes that model version and the data is no longer stored in Amazon Fraud Detector.

```sql
DELETE FROM aws.frauddetector.model_versions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
