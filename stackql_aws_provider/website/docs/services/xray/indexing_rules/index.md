--- 
title: indexing_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - indexing_rules
  - xray
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

Creates, updates, deletes, gets or lists an <code>indexing_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexing_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.indexing_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_indexing_rules"
    values={[
        { label: 'get_indexing_rules', value: 'get_indexing_rules' }
    ]}
>
<TabItem value="get_indexing_rules">

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
    <td><CopyableCode code="IndexingRules" /></td>
    <td><code>array</code></td>
    <td>Retrieves all indexing rules.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token returned by a previous request to retrieve the next page of indexes.</td>
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
    <td><a href="#get_indexing_rules"><CopyableCode code="get_indexing_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all indexing rules. Indexing rules are used to determine the server-side sampling rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see Transaction Search.</td>
</tr>
<tr>
    <td><a href="#update_indexing_rule"><CopyableCode code="update_indexing_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Rule"><code>Rule</code></a></td>
    <td></td>
    <td>Modifies an indexing rule’s configuration. Indexing rules are used for determining the sampling rate for spans indexed from CloudWatch Logs. For more information, see Transaction Search.</td>
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
    defaultValue="get_indexing_rules"
    values={[
        { label: 'get_indexing_rules', value: 'get_indexing_rules' }
    ]}
>
<TabItem value="get_indexing_rules">

Retrieves all indexing rules. Indexing rules are used to determine the server-side sampling rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see Transaction Search.

```sql
SELECT
IndexingRules,
NextToken
FROM aws.xray.indexing_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_indexing_rule"
    values={[
        { label: 'update_indexing_rule', value: 'update_indexing_rule' }
    ]}
>
<TabItem value="update_indexing_rule">

Modifies an indexing rule’s configuration. Indexing rules are used for determining the sampling rate for spans indexed from CloudWatch Logs. For more information, see Transaction Search.

```sql
UPDATE aws.xray.indexing_rules
SET 
Name = '{{ Name }}',
Rule = '{{ Rule }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Rule = '{{ Rule }}' --required
RETURNING
IndexingRule;
```
</TabItem>
</Tabs>
