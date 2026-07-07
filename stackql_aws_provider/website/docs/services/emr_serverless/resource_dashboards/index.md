--- 
title: resource_dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_dashboards
  - emr_serverless
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

Creates, updates, deletes, gets or lists a <code>resource_dashboards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_dashboards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_serverless.resource_dashboards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_dashboard"
    values={[
        { label: 'get_resource_dashboard', value: 'get_resource_dashboard' }
    ]}
>
<TabItem value="get_resource_dashboard">

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
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>A URL to the resource dashboard. For an active resource, this URL opens the live application UI. For a terminated resource, this URL opens the persistent application UI. This value is not included in the response if the URL is not available.</td>
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
    <td><a href="#get_resource_dashboard"><CopyableCode code="get_resource_dashboard" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a URL that you can use to access the application UIs for a specified resource, such as a session. For resources in a running state, the application UI is a live user interface such as the Spark web UI. For terminated resources, the application UI is a persistent application user interface such as the Spark History Server. The URL is valid for one hour after you generate it. To access the application UI after that hour elapses, you must invoke the API again to generate a new URL.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application that the resource belongs to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resourceId">
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource to access the dashboard for. Currently, only Session is supported.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_dashboard"
    values={[
        { label: 'get_resource_dashboard', value: 'get_resource_dashboard' }
    ]}
>
<TabItem value="get_resource_dashboard">

Returns a URL that you can use to access the application UIs for a specified resource, such as a session. For resources in a running state, the application UI is a live user interface such as the Spark web UI. For terminated resources, the application UI is a persistent application user interface such as the Spark History Server. The URL is valid for one hour after you generate it. To access the application UI after that hour elapses, you must invoke the API again to generate a new URL.

```sql
SELECT
url
FROM aws.emr_serverless.resource_dashboards
WHERE application_id = '{{ application_id }}' -- required
AND resourceId = '{{ resourceId }}' -- required
AND resourceType = '{{ resourceType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
