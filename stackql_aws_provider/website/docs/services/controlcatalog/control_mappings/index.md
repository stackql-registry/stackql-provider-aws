--- 
title: control_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - control_mappings
  - controlcatalog
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

Creates, updates, deletes, gets or lists a <code>control_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="control_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controlcatalog.control_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_control_mappings"
    values={[
        { label: 'list_control_mappings', value: 'list_control_mappings' }
    ]}
>
<TabItem value="list_control_mappings">

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
    <td><CopyableCode code="ControlArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the control in the mapping. (pattern: &lt;code&gt;arn:(aws(?:&#91;-a-z&#93;*)?):(controlcatalog|controltower):&#91;a-zA-Z0-9-&#93;*::control/&#91;0-9a-zA-Z_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Mapping" /></td>
    <td><code>object</code></td>
    <td>The details of the mapping relationship, for example, containing framework, common control, or related control information.</td>
</tr>
<tr>
    <td><CopyableCode code="MappingType" /></td>
    <td><code>string</code></td>
    <td>The type of mapping relationship between the control and other entities. (FRAMEWORK, COMMON_CONTROL, RELATED_CONTROL)</td>
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
    <td><a href="#list_control_mappings"><CopyableCode code="list_control_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a paginated list of control mappings from the Control Catalog. Control mappings show relationships between controls and other entities, such as common controls or compliance frameworks.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results on a page or for an API request call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_control_mappings"
    values={[
        { label: 'list_control_mappings', value: 'list_control_mappings' }
    ]}
>
<TabItem value="list_control_mappings">

Returns a paginated list of control mappings from the Control Catalog. Control mappings show relationships between controls and other entities, such as common controls or compliance frameworks.

```sql
SELECT
ControlArn,
Mapping,
MappingType
FROM aws.controlcatalog.control_mappings
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
