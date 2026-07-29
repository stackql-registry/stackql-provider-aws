--- 
title: mapped_resource_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - mapped_resource_configurations
  - kinesisvideo
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

Creates, updates, deletes, gets or lists a <code>mapped_resource_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mapped_resource_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.mapped_resource_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_mapped_resource_configuration"
    values={[
        { label: 'describe_mapped_resource_configuration', value: 'describe_mapped_resource_configuration' }
    ]}
>
<TabItem value="describe_mapped_resource_configuration">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Kinesis Video Stream resource, associated with the stream. (pattern: &lt;code&gt;arn:&#91;a-z\d-&#93;+:kinesisvideo:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:&#91;a-z&#93;+/&#91;a-zA-Z0-9_.-&#93;+/&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the associated resource for the kinesis video stream.</td>
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
    <td><a href="#describe_mapped_resource_configuration"><CopyableCode code="describe_mapped_resource_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the most current information about the stream. The streamName or streamARN should be provided in the input.</td>
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
    defaultValue="describe_mapped_resource_configuration"
    values={[
        { label: 'describe_mapped_resource_configuration', value: 'describe_mapped_resource_configuration' }
    ]}
>
<TabItem value="describe_mapped_resource_configuration">

Returns the most current information about the stream. The streamName or streamARN should be provided in the input.

```sql
SELECT
arn,
type
FROM aws.kinesisvideo.mapped_resource_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
