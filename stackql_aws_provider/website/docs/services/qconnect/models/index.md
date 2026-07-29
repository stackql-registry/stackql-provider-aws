--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
  - qconnect
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_models"
    values={[
        { label: 'list_models', value: 'list_models' }
    ]}
>
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
    <td><CopyableCode code="cross_region_status" /></td>
    <td><code>string</code></td>
    <td>The cross-region availability status of the model. NONE indicates the model is only available in a single region, REGIONAL indicates the model is available through regional inference, and GLOBAL indicates the model is available through global cross-region inference. (NONE, REGIONAL, GLOBAL)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="end_of_life_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the model will reach end of life and no longer be available for use.</td>
</tr>
<tr>
    <td><CopyableCode code="legacy_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the model lifecycle will transition from ACTIVE to LEGACY.</td>
</tr>
<tr>
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="model_lifecycle" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle of the model. ACTIVE indicates the model is recommended for use and LEGACY indicates the model is still usable but is deprecated. (ACTIVE, LEGACY)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_ai_prompt_types" /></td>
    <td><code>array</code></td>
    <td>The list of AI Prompt types that the model supports.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_prompt_caching" /></td>
    <td><code>boolean</code></td>
    <td>Whether the model supports prompt caching.</td>
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
    <td><a href="#list_models"><CopyableCode code="list_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-aiPromptType"><code>aiPromptType</code></a>, <a href="#parameter-modelLifecycle"><code>modelLifecycle</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the models available to an Amazon Q in Connect assistant in the assistant's Amazon Web Services Region. The available models are determined by the region of the specified assistant.</td>
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
<tr id="parameter-assistant_id">
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN. The assistant's region determines which models are available.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-aiPromptType">
    <td><CopyableCode code="aiPromptType" /></td>
    <td><code>string</code></td>
    <td>The type of the AI Prompt to filter models by. When specified, only models that support the given AI Prompt type are returned.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-modelLifecycle">
    <td><CopyableCode code="modelLifecycle" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of models to filter by. When specified, only models with the given lifecycle status are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_models"
    values={[
        { label: 'list_models', value: 'list_models' }
    ]}
>
<TabItem value="list_models">

Lists the models available to an Amazon Q in Connect assistant in the assistant's Amazon Web Services Region. The available models are determined by the region of the specified assistant.

```sql
SELECT
cross_region_status,
display_name,
end_of_life_timestamp,
legacy_timestamp,
model_id,
model_lifecycle,
supported_ai_prompt_types,
supports_prompt_caching
FROM aws.qconnect.models
WHERE assistant_id = '{{ assistant_id }}' -- required
AND region = '{{ region }}' -- required
AND aiPromptType = '{{ aiPromptType }}'
AND modelLifecycle = '{{ modelLifecycle }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
