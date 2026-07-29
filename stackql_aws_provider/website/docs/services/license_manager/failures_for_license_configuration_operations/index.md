--- 
title: failures_for_license_configuration_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - failures_for_license_configuration_operations
  - license_manager
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

Creates, updates, deletes, gets or lists a <code>failures_for_license_configuration_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="failures_for_license_configuration_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.failures_for_license_configuration_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_failures_for_license_configuration_operations"
    values={[
        { label: 'list_failures_for_license_configuration_operations', value: 'list_failures_for_license_configuration_operations' }
    ]}
>
<TabItem value="list_failures_for_license_configuration_operations">

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
    <td><CopyableCode code="license_operation_failure_list" /></td>
    <td><code>array</code></td>
    <td>License configuration operations that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results.</td>
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
    <td><a href="#list_failures_for_license_configuration_operations"><CopyableCode code="list_failures_for_license_configuration_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the license configuration operations that failed.</td>
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
    defaultValue="list_failures_for_license_configuration_operations"
    values={[
        { label: 'list_failures_for_license_configuration_operations', value: 'list_failures_for_license_configuration_operations' }
    ]}
>
<TabItem value="list_failures_for_license_configuration_operations">

Lists the license configuration operations that failed.

```sql
SELECT
license_operation_failure_list,
next_token
FROM aws.license_manager.failures_for_license_configuration_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
