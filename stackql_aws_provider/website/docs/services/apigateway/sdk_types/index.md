--- 
title: sdk_types
hide_title: false
hide_table_of_contents: false
keywords:
  - sdk_types
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>sdk_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sdk_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.sdk_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sdk_type"
    values={[
        { label: 'get_sdk_type', value: 'get_sdk_type' },
        { label: 'get_sdk_types', value: 'get_sdk_types' }
    ]}
>
<TabItem value="get_sdk_type">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of an SdkType instance.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_properties" /></td>
    <td><code>array</code></td>
    <td>A list of configuration properties of an SdkType.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of an SdkType.</td>
</tr>
<tr>
    <td><CopyableCode code="friendly_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of an SdkType instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_sdk_types">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of an SdkType instance.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_properties" /></td>
    <td><code>array</code></td>
    <td>A list of configuration properties of an SdkType.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of an SdkType.</td>
</tr>
<tr>
    <td><CopyableCode code="friendly_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of an SdkType instance.</td>
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
    <td><a href="#get_sdk_type"><CopyableCode code="get_sdk_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sdktype_id"><code>sdktype_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an SDK type.</td>
</tr>
<tr>
    <td><a href="#get_sdk_types"><CopyableCode code="get_sdk_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Gets SDK types</td>
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
<tr id="parameter-sdktype_id">
    <td><CopyableCode code="sdktype_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the queried SdkType instance.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sdk_type"
    values={[
        { label: 'get_sdk_type', value: 'get_sdk_type' },
        { label: 'get_sdk_types', value: 'get_sdk_types' }
    ]}
>
<TabItem value="get_sdk_type">

Gets an SDK type.

```sql
SELECT
id,
configuration_properties,
description,
friendly_name
FROM aws.apigateway.sdk_types
WHERE sdktype_id = '{{ sdktype_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_sdk_types">

Gets SDK types

```sql
SELECT
id,
configuration_properties,
description,
friendly_name
FROM aws.apigateway.sdk_types
WHERE region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>
