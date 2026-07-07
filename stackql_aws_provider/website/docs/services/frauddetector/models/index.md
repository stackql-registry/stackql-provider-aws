--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
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

Creates, updates, deletes, gets or lists a <code>models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_models"
    values={[
        { label: 'get_models', value: 'get_models' }
    ]}
>
<TabItem value="get_models">

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
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>The array of models.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page token to be used in subsequent requests.</td>
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
    <td><a href="#get_models"><CopyableCode code="get_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets one or more models. Gets all models for the Amazon Web Services account if no model type and no model id provided. Gets all models for the Amazon Web Services account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 1 and 10. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning.</td>
</tr>
<tr>
    <td><a href="#create_model"><CopyableCode code="create_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelId"><code>modelId</code></a>, <a href="#parameter-modelType"><code>modelType</code></a>, <a href="#parameter-eventTypeName"><code>eventTypeName</code></a></td>
    <td></td>
    <td>Creates a model using the specified model type.</td>
</tr>
<tr>
    <td><a href="#update_model"><CopyableCode code="update_model" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelId"><code>modelId</code></a>, <a href="#parameter-modelType"><code>modelType</code></a></td>
    <td></td>
    <td>Updates model description.</td>
</tr>
<tr>
    <td><a href="#delete_model"><CopyableCode code="delete_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a model. You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version. When you delete a model, Amazon Fraud Detector permanently deletes that model and the data is no longer stored in Amazon Fraud Detector.</td>
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
    defaultValue="get_models"
    values={[
        { label: 'get_models', value: 'get_models' }
    ]}
>
<TabItem value="get_models">

Gets one or more models. Gets all models for the Amazon Web Services account if no model type and no model id provided. Gets all models for the Amazon Web Services account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 1 and 10. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning.

```sql
SELECT
models,
nextToken
FROM aws.frauddetector.models
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

Creates a model using the specified model type.

```sql
INSERT INTO aws.frauddetector.models (
modelId,
modelType,
description,
eventTypeName,
tags,
region
)
SELECT 
'{{ modelId }}' /* required */,
'{{ modelType }}' /* required */,
'{{ description }}',
'{{ eventTypeName }}' /* required */,
'{{ tags }}',
'{{ region }}'
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
    - name: modelId
      value: "{{ modelId }}"
      description: |
        The model ID.
    - name: modelType
      value: "{{ modelType }}"
      description: |
        The model type.
      valid_values: ['ONLINE_FRAUD_INSIGHTS', 'TRANSACTION_FRAUD_INSIGHTS', 'ACCOUNT_TAKEOVER_INSIGHTS']
    - name: description
      value: "{{ description }}"
      description: |
        The model description.
    - name: eventTypeName
      value: "{{ eventTypeName }}"
      description: |
        The name of the event type.
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
    defaultValue="update_model"
    values={[
        { label: 'update_model', value: 'update_model' }
    ]}
>
<TabItem value="update_model">

Updates model description.

```sql
UPDATE aws.frauddetector.models
SET 
modelId = '{{ modelId }}',
modelType = '{{ modelType }}',
description = '{{ description }}'
WHERE 
region = '{{ region }}' --required
AND modelId = '{{ modelId }}' --required
AND modelType = '{{ modelType }}' --required;
```
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

Deletes a model. You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version. When you delete a model, Amazon Fraud Detector permanently deletes that model and the data is no longer stored in Amazon Fraud Detector.

```sql
DELETE FROM aws.frauddetector.models
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
