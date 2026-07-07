--- 
title: audience_models
hide_title: false
hide_table_of_contents: false
keywords:
  - audience_models
  - cleanroomsml
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

Creates, updates, deletes, gets or lists an <code>audience_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="audience_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.audience_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_audience_model"
    values={[
        { label: 'get_audience_model', value: 'get_audience_model' },
        { label: 'list_audience_models', value: 'list_audience_models' }
    ]}
>
<TabItem value="get_audience_model">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the audience model. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="audienceModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the audience model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the audience model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the audience model. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The KMS key ARN used for the audience model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:kms:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the audience model. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the status of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that are assigned to the audience model.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingDataEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date specified for the training window.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingDataStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date specified for the training window.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingDatasetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the training dataset that was used for this audience model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:training-dataset/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the audience model was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_audience_models">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the audience model. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="audienceModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the audience model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the audience model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the audience model. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the audience model. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="trainingDatasetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the training dataset that was used for the audience model. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:training-dataset/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the audience model was updated.</td>
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
    <td><a href="#get_audience_model"><CopyableCode code="get_audience_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-audience_model_arn"><code>audience_model_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an audience model</td>
</tr>
<tr>
    <td><a href="#list_audience_models"><CopyableCode code="list_audience_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of audience models.</td>
</tr>
<tr>
    <td><a href="#create_audience_model"><CopyableCode code="create_audience_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-trainingDatasetArn"><code>trainingDatasetArn</code></a></td>
    <td></td>
    <td>Defines the information necessary to create an audience model. An audience model is a machine learning model that Clean Rooms ML trains to measure similarity between users. Clean Rooms ML manages training and storing the audience model. The audience model can be used in multiple calls to the StartAudienceGenerationJob API.</td>
</tr>
<tr>
    <td><a href="#delete_audience_model"><CopyableCode code="delete_audience_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-audience_model_arn"><code>audience_model_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specifies an audience model that you want to delete. You can't delete an audience model if there are any configured audience models that depend on the audience model.</td>
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
<tr id="parameter-audience_model_arn">
    <td><CopyableCode code="audience_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the audience model that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_audience_model"
    values={[
        { label: 'get_audience_model', value: 'get_audience_model' },
        { label: 'list_audience_models', value: 'list_audience_models' }
    ]}
>
<TabItem value="get_audience_model">

Returns information about an audience model

```sql
SELECT
name,
audienceModelArn,
createTime,
description,
kmsKeyArn,
status,
statusDetails,
tags,
trainingDataEndTime,
trainingDataStartTime,
trainingDatasetArn,
updateTime
FROM aws.cleanroomsml.audience_models
WHERE audience_model_arn = '{{ audience_model_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_audience_models">

Returns a list of audience models.

```sql
SELECT
name,
audienceModelArn,
createTime,
description,
status,
trainingDatasetArn,
updateTime
FROM aws.cleanroomsml.audience_models
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_audience_model"
    values={[
        { label: 'create_audience_model', value: 'create_audience_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_audience_model">

Defines the information necessary to create an audience model. An audience model is a machine learning model that Clean Rooms ML trains to measure similarity between users. Clean Rooms ML manages training and storing the audience model. The audience model can be used in multiple calls to the StartAudienceGenerationJob API.

```sql
INSERT INTO aws.cleanroomsml.audience_models (
trainingDataStartTime,
trainingDataEndTime,
name,
trainingDatasetArn,
kmsKeyArn,
tags,
description,
region
)
SELECT 
'{{ trainingDataStartTime }}',
'{{ trainingDataEndTime }}',
'{{ name }}' /* required */,
'{{ trainingDatasetArn }}' /* required */,
'{{ kmsKeyArn }}',
'{{ tags }}',
'{{ description }}',
'{{ region }}'
RETURNING
audienceModelArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: audience_models
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the audience_models resource.
    - name: trainingDataStartTime
      value: "{{ trainingDataStartTime }}"
    - name: trainingDataEndTime
      value: "{{ trainingDataEndTime }}"
    - name: name
      value: "{{ name }}"
    - name: trainingDatasetArn
      value: "{{ trainingDatasetArn }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_audience_model"
    values={[
        { label: 'delete_audience_model', value: 'delete_audience_model' }
    ]}
>
<TabItem value="delete_audience_model">

Specifies an audience model that you want to delete. You can't delete an audience model if there are any configured audience models that depend on the audience model.

```sql
DELETE FROM aws.cleanroomsml.audience_models
WHERE audience_model_arn = '{{ audience_model_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
