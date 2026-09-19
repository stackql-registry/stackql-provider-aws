--- 
title: evaluation_form_ai_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_form_ai_versions
  - connect
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

Creates, updates, deletes, gets or lists an <code>evaluation_form_ai_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluation_form_ai_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.evaluation_form_ai_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_evaluation_form_ai_versions"
    values={[
        { label: 'list_evaluation_form_ai_versions', value: 'list_evaluation_form_ai_versions' }
    ]}
>
<TabItem value="list_evaluation_form_ai_versions">

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
    <td><CopyableCode code="ai_version_summaries" /></td>
    <td><code>array</code></td>
    <td>The list of AI version summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results.</td>
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
    <td><a href="#list_evaluation_form_ai_versions"><CopyableCode code="list_evaluation_form_ai_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contactInteractionType"><code>contactInteractionType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the available AI versions for evaluation forms in the specified Connect Customer instance.</td>
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
<tr id="parameter-contactInteractionType">
    <td><CopyableCode code="contactInteractionType" /></td>
    <td><code>string</code></td>
    <td>The contact interaction type for the evaluation form.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
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
    defaultValue="list_evaluation_form_ai_versions"
    values={[
        { label: 'list_evaluation_form_ai_versions', value: 'list_evaluation_form_ai_versions' }
    ]}
>
<TabItem value="list_evaluation_form_ai_versions">

Lists the available AI versions for evaluation forms in the specified Connect Customer instance.

```sql
SELECT
ai_version_summaries,
next_token
FROM aws.connect.evaluation_form_ai_versions
WHERE instance_id = '{{ instance_id }}' -- required
AND contactInteractionType = '{{ contactInteractionType }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
