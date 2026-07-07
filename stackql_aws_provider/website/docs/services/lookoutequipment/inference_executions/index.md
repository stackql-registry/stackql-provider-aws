--- 
title: inference_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_executions
  - lookoutequipment
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

Creates, updates, deletes, gets or lists an <code>inference_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inference_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lookoutequipment.inference_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_inference_executions"
    values={[
        { label: 'list_inference_executions', value: 'list_inference_executions' }
    ]}
>
<TabItem value="list_inference_executions">

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
    <td><CopyableCode code="InferenceExecutionSummaries" /></td>
    <td><code>array</code></td>
    <td>Provides an array of information about the individual inference executions returned from the ListInferenceExecutions operation, including model used, inference scheduler, data configuration, and so on. If you don't supply the InferenceSchedulerName request parameter, or if you supply the name of an inference scheduler that doesn't exist, ListInferenceExecutions returns an empty array in InferenceExecutionSummaries.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token indicating where to continue the listing of inference executions. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_inference_executions"><CopyableCode code="list_inference_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all inference executions that have been performed by the specified inference scheduler.</td>
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
    defaultValue="list_inference_executions"
    values={[
        { label: 'list_inference_executions', value: 'list_inference_executions' }
    ]}
>
<TabItem value="list_inference_executions">

Lists all inference executions that have been performed by the specified inference scheduler.

```sql
SELECT
InferenceExecutionSummaries,
NextToken
FROM aws.lookoutequipment.inference_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
