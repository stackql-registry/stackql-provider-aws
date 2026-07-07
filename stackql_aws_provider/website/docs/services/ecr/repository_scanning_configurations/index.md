--- 
title: repository_scanning_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_scanning_configurations
  - ecr
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

Creates, updates, deletes, gets or lists a <code>repository_scanning_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_scanning_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.repository_scanning_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_repository_scanning_configuration"
    values={[
        { label: 'batch_get_repository_scanning_configuration', value: 'batch_get_repository_scanning_configuration' }
    ]}
>
<TabItem value="batch_get_repository_scanning_configuration">

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
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>Any failures associated with the call.</td>
</tr>
<tr>
    <td><CopyableCode code="scanningConfigurations" /></td>
    <td><code>array</code></td>
    <td>The scanning configuration for the requested repositories.</td>
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
    <td><a href="#batch_get_repository_scanning_configuration"><CopyableCode code="batch_get_repository_scanning_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the scanning configuration for one or more repositories.</td>
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
    defaultValue="batch_get_repository_scanning_configuration"
    values={[
        { label: 'batch_get_repository_scanning_configuration', value: 'batch_get_repository_scanning_configuration' }
    ]}
>
<TabItem value="batch_get_repository_scanning_configuration">

Gets the scanning configuration for one or more repositories.

```sql
SELECT
failures,
scanningConfigurations
FROM aws.ecr.repository_scanning_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
