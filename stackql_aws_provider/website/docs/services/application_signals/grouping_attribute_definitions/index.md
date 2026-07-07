--- 
title: grouping_attribute_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - grouping_attribute_definitions
  - application_signals
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

Creates, updates, deletes, gets or lists a <code>grouping_attribute_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="grouping_attribute_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.grouping_attribute_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_grouping_attribute_definitions"
    values={[
        { label: 'list_grouping_attribute_definitions', value: 'list_grouping_attribute_definitions' }
    ]}
>
<TabItem value="list_grouping_attribute_definitions">

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
    <td><CopyableCode code="GroupingAttributeDefinitions" /></td>
    <td><code>array</code></td>
    <td>An array of structures, where each structure contains information about one grouping attribute definition, including the grouping name, source keys, and default values.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Include this value in your next use of this API to get the next set of grouping attribute definitions.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the grouping configuration was last updated. When used in a raw HTTP Query API, it is formatted as epoch time in seconds.</td>
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
    <td><a href="#list_grouping_attribute_definitions"><CopyableCode code="list_grouping_attribute_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-AwsAccountId"><code>AwsAccountId</code></a>, <a href="#parameter-IncludeLinkedAccounts"><code>IncludeLinkedAccounts</code></a></td>
    <td>Returns the current grouping configuration for this account, including all custom grouping attribute definitions that have been configured. These definitions determine how services are logically grouped based on telemetry attributes, Amazon Web Services tags, or predefined mappings.</td>
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
<tr id="parameter-AwsAccountId">
    <td><CopyableCode code="AwsAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID to retrieve grouping attribute definitions for. Use this when accessing grouping configurations from a different account in cross-account monitoring scenarios.</td>
</tr>
<tr id="parameter-IncludeLinkedAccounts">
    <td><CopyableCode code="IncludeLinkedAccounts" /></td>
    <td><code>boolean</code></td>
    <td>If you are using this operation in a monitoring account, specify true to include grouping attributes from source accounts in the returned data.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Include this value, if it was returned by the previous operation, to get the next set of grouping attribute definitions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_grouping_attribute_definitions"
    values={[
        { label: 'list_grouping_attribute_definitions', value: 'list_grouping_attribute_definitions' }
    ]}
>
<TabItem value="list_grouping_attribute_definitions">

Returns the current grouping configuration for this account, including all custom grouping attribute definitions that have been configured. These definitions determine how services are logically grouped based on telemetry attributes, Amazon Web Services tags, or predefined mappings.

```sql
SELECT
GroupingAttributeDefinitions,
NextToken,
UpdatedAt
FROM aws.application_signals.grouping_attribute_definitions
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND AwsAccountId = '{{ AwsAccountId }}'
AND IncludeLinkedAccounts = '{{ IncludeLinkedAccounts }}'
;
```
</TabItem>
</Tabs>
