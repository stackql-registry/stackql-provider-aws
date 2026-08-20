--- 
title: virtual_interface_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_interface_routes
  - directconnect
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

Creates, updates, deletes, gets or lists a <code>virtual_interface_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_interface_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.virtual_interface_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_virtual_interface_routes"
    values={[
        { label: 'list_virtual_interface_routes', value: 'list_virtual_interface_routes' }
    ]}
>
<TabItem value="list_virtual_interface_routes">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="routes" /></td>
    <td><code>array</code></td>
    <td>The routes for the virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual interface.</td>
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
    <td><a href="#list_virtual_interface_routes"><CopyableCode code="list_virtual_interface_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the routes for the specified virtual interface. Use the routeDirection filter to control which routes are returned: accepted: routes received from the customer network over the virtual interface. advertised: routes advertised to the customer network over the virtual interface.</td>
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
    defaultValue="list_virtual_interface_routes"
    values={[
        { label: 'list_virtual_interface_routes', value: 'list_virtual_interface_routes' }
    ]}
>
<TabItem value="list_virtual_interface_routes">

Lists the routes for the specified virtual interface. Use the routeDirection filter to control which routes are returned: accepted: routes received from the customer network over the virtual interface. advertised: routes advertised to the customer network over the virtual interface.

```sql
SELECT
next_token,
routes,
virtual_interface_id
FROM aws.directconnect.virtual_interface_routes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
