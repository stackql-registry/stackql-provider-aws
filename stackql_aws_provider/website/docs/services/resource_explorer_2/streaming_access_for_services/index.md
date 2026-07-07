--- 
title: streaming_access_for_services
hide_title: false
hide_table_of_contents: false
keywords:
  - streaming_access_for_services
  - resource_explorer_2
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

Creates, updates, deletes, gets or lists a <code>streaming_access_for_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streaming_access_for_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_explorer_2.streaming_access_for_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_streaming_access_for_services"
    values={[
        { label: 'list_streaming_access_for_services', value: 'list_streaming_access_for_services' }
    ]}
>
<TabItem value="list_streaming_access_for_services">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when streaming access was granted to the Amazon Web Services service, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="ServicePrincipal" /></td>
    <td><code>string</code></td>
    <td>The service principal of the Amazon Web Services service that has streaming access to your Resource Explorer data. A service principal is a unique identifier for an Amazon Web Services service.</td>
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
    <td><a href="#list_streaming_access_for_services"><CopyableCode code="list_streaming_access_for_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Amazon Web Services services that have been granted streaming access to your Resource Explorer data. Streaming access allows Amazon Web Services services to receive real-time updates about your resources as they are indexed by Resource Explorer.</td>
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
    defaultValue="list_streaming_access_for_services"
    values={[
        { label: 'list_streaming_access_for_services', value: 'list_streaming_access_for_services' }
    ]}
>
<TabItem value="list_streaming_access_for_services">

Returns a list of Amazon Web Services services that have been granted streaming access to your Resource Explorer data. Streaming access allows Amazon Web Services services to receive real-time updates about your resources as they are indexed by Resource Explorer.

```sql
SELECT
CreatedAt,
ServicePrincipal
FROM aws.resource_explorer_2.streaming_access_for_services
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
