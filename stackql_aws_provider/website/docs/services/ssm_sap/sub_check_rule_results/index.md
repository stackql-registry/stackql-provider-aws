--- 
title: sub_check_rule_results
hide_title: false
hide_table_of_contents: false
keywords:
  - sub_check_rule_results
  - ssm_sap
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

Creates, updates, deletes, gets or lists a <code>sub_check_rule_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sub_check_rule_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_sap.sub_check_rule_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_sub_check_rule_results"
    values={[
        { label: 'list_sub_check_rule_results', value: 'list_sub_check_rule_results' }
    ]}
>
<TabItem value="list_sub_check_rule_results">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of what the rule validates.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the rule result. (pattern: &lt;code&gt;&#91;&#123;&#93;?&#91;0-9a-fA-F&#93;&#123;8&#125;-(&#91;0-9a-fA-F&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-fA-F&#93;&#123;12&#125;&#91;&#125;&#93;?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message providing details about the rule result.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Additional metadata associated with the rule result.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the rule result. (PASSED, FAILED, WARNING, INFO, UNKNOWN)</td>
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
    <td><a href="#list_sub_check_rule_results"><CopyableCode code="list_sub_check_rule_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the rules of a specified sub-check belonging to a configuration check operation.</td>
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
    defaultValue="list_sub_check_rule_results"
    values={[
        { label: 'list_sub_check_rule_results', value: 'list_sub_check_rule_results' }
    ]}
>
<TabItem value="list_sub_check_rule_results">

Lists the rules of a specified sub-check belonging to a configuration check operation.

```sql
SELECT
description,
id,
message,
metadata,
status
FROM aws.ssm_sap.sub_check_rule_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
