--- 
title: group_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - group_resources
  - synthetics
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

Creates, updates, deletes, gets or lists a <code>group_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.synthetics.group_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_group_resources"
    values={[
        { label: 'list_group_resources', value: 'list_group_resources' }
    ]}
>
<TabItem value="list_group_resources">

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
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>An array of ARNs. These ARNs are for the canaries that are associated with the group.</td>
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
    <td><a href="#list_group_resources"><CopyableCode code="list_group_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_identifier"><code>group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns a list of the ARNs of the canaries that are associated with the specified group.</td>
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
<tr id="parameter-group_identifier">
    <td><CopyableCode code="group_identifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the group to return information for. You can specify the group name, the ARN, or the group ID as the GroupIdentifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_group_resources"
    values={[
        { label: 'list_group_resources', value: 'list_group_resources' }
    ]}
>
<TabItem value="list_group_resources">

This operation returns a list of the ARNs of the canaries that are associated with the specified group.

```sql
SELECT
resource
FROM aws.synthetics.group_resources
WHERE group_identifier = '{{ group_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
