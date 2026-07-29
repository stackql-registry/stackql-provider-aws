--- 
title: managed_thing_schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_thing_schemas
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>managed_thing_schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_thing_schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.managed_thing_schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_managed_thing_schemas"
    values={[
        { label: 'list_managed_thing_schemas', value: 'list_managed_thing_schemas' }
    ]}
>
<TabItem value="list_managed_thing_schemas">

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
    <td><CopyableCode code="capability_id" /></td>
    <td><code>string</code></td>
    <td>The id of the capability for a managed thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9./&#93;+(@\d+\.\d+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The id of the endpoint for a managed thing. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>The validation schema for one schema item associated with a managed thing.</td>
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
    <td><a href="#list_managed_thing_schemas"><CopyableCode code="list_managed_thing_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EndpointIdFilter"><code>EndpointIdFilter</code></a>, <a href="#parameter-CapabilityIdFilter"><code>CapabilityIdFilter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List schemas associated with a managed thing.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The managed thing id.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CapabilityIdFilter">
    <td><CopyableCode code="CapabilityIdFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on a capability id.</td>
</tr>
<tr id="parameter-EndpointIdFilter">
    <td><CopyableCode code="EndpointIdFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on an endpoint id.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_managed_thing_schemas"
    values={[
        { label: 'list_managed_thing_schemas', value: 'list_managed_thing_schemas' }
    ]}
>
<TabItem value="list_managed_thing_schemas">

List schemas associated with a managed thing.

```sql
SELECT
capability_id,
endpoint_id,
schema
FROM aws.iot_managed_integrations.managed_thing_schemas
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND EndpointIdFilter = '{{ EndpointIdFilter }}'
AND CapabilityIdFilter = '{{ CapabilityIdFilter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
