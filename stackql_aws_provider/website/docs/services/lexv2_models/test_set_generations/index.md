--- 
title: test_set_generations
hide_title: false
hide_table_of_contents: false
keywords:
  - test_set_generations
  - lexv2_models
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

Creates, updates, deletes, gets or lists a <code>test_set_generations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_set_generations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.test_set_generations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_test_set_generation"
    values={[
        { label: 'describe_test_set_generation', value: 'describe_test_set_generation' }
    ]}
>
<TabItem value="describe_test_set_generation">

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
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time for the test set generation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The test set description for the test set generation.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>The reasons the test set generation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="generation_data_source" /></td>
    <td><code>object</code></td>
    <td>The data source of the test set used for the test set generation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last update for the test set generation.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The roleARN of the test set used for the test set generation. (pattern: &lt;code&gt;^arn:aws:iam::&#91;0-9&#93;&#123;12&#125;:role/.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_location" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 storage location for the test set generation.</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_generation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the test set generation. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_generation_status" /></td>
    <td><code>string</code></td>
    <td>The status for the test set generation. (Generating, Ready, Failed, Pending)</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the test set created for the generated test set. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_name" /></td>
    <td><code>string</code></td>
    <td>The test set name for the generated test set. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_test_set_generation"><CopyableCode code="describe_test_set_generation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_set_generation_id"><code>test_set_generation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets metadata information about the test set generation.</td>
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
<tr id="parameter-test_set_generation_id">
    <td><CopyableCode code="test_set_generation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the test set generation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_test_set_generation"
    values={[
        { label: 'describe_test_set_generation', value: 'describe_test_set_generation' }
    ]}
>
<TabItem value="describe_test_set_generation">

Gets metadata information about the test set generation.

```sql
SELECT
creation_date_time,
description,
failure_reasons,
generation_data_source,
last_updated_date_time,
role_arn,
storage_location,
test_set_generation_id,
test_set_generation_status,
test_set_id,
test_set_name
FROM aws.lexv2_models.test_set_generations
WHERE test_set_generation_id = '{{ test_set_generation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
