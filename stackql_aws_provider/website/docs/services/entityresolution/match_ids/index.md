--- 
title: match_ids
hide_title: false
hide_table_of_contents: false
keywords:
  - match_ids
  - entityresolution
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

Creates, updates, deletes, gets or lists a <code>match_ids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="match_ids" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.entityresolution.match_ids" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_match_id"
    values={[
        { label: 'get_match_id', value: 'get_match_id' }
    ]}
>
<TabItem value="get_match_id">

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
    <td><CopyableCode code="match_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifiers for this group of match records.</td>
</tr>
<tr>
    <td><CopyableCode code="match_rule" /></td>
    <td><code>string</code></td>
    <td>The rule the record matched on.</td>
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
    <td><a href="#get_match_id"><CopyableCode code="get_match_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_name"><code>workflow_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the corresponding Match ID of a customer record if the record has been processed in a rule-based matching workflow. You can call this API as a dry run of an incremental load on the rule-based matching workflow.</td>
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
<tr id="parameter-workflow_name">
    <td><CopyableCode code="workflow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_match_id"
    values={[
        { label: 'get_match_id', value: 'get_match_id' }
    ]}
>
<TabItem value="get_match_id">

Returns the corresponding Match ID of a customer record if the record has been processed in a rule-based matching workflow. You can call this API as a dry run of an incremental load on the rule-based matching workflow.

```sql
SELECT
match_id,
match_rule
FROM aws.entityresolution.match_ids
WHERE workflow_name = '{{ workflow_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
