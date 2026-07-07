--- 
title: available_managed_rule_group_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - available_managed_rule_group_versions
  - wafv2
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

Creates, updates, deletes, gets or lists an <code>available_managed_rule_group_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="available_managed_rule_group_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.available_managed_rule_group_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_available_managed_rule_group_versions"
    values={[
        { label: 'list_available_managed_rule_group_versions', value: 'list_available_managed_rule_group_versions' }
    ]}
>
<TabItem value="list_available_managed_rule_group_versions">

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
    <td><CopyableCode code="CurrentDefaultVersion" /></td>
    <td><code>string</code></td>
    <td>The name of the version that's currently set as the default. (pattern: &lt;code&gt;^&#91;\w#:\.\-/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Versions" /></td>
    <td><code>array</code></td>
    <td>The versions that are currently available for the specified managed rule group. If you specified a Limit in your request, this might not be the full list.</td>
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
    <td><a href="#list_available_managed_rule_group_versions"><CopyableCode code="list_available_managed_rule_group_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the available versions for the specified managed rule group.</td>
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
    defaultValue="list_available_managed_rule_group_versions"
    values={[
        { label: 'list_available_managed_rule_group_versions', value: 'list_available_managed_rule_group_versions' }
    ]}
>
<TabItem value="list_available_managed_rule_group_versions">

Returns a list of the available versions for the specified managed rule group.

```sql
SELECT
CurrentDefaultVersion,
NextMarker,
Versions
FROM aws.wafv2.available_managed_rule_group_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
