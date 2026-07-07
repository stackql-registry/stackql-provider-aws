--- 
title: autoshifts
hide_title: false
hide_table_of_contents: false
keywords:
  - autoshifts
  - arc_zonal_shift
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

Creates, updates, deletes, gets or lists an <code>autoshifts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autoshifts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_zonal_shift.autoshifts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_autoshifts"
    values={[
        { label: 'list_autoshifts', value: 'list_autoshifts' }
    ]}
>
<TabItem value="list_autoshifts">

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
    <td><CopyableCode code="awayFrom" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone (for example, use1-az1) that traffic is shifted away from for a resource when Amazon Web Services starts an autoshift. Until the autoshift ends, traffic for the resource is instead directed to other Availability Zones in the Amazon Web Services Region. An autoshift can end for a resource, for example, when Amazon Web Services ends the autoshift for the Availability Zone or when you disable zonal autoshift for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time (in UTC) when the autoshift ended.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time (in UTC) when the autoshift started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status for an autoshift. (ACTIVE, COMPLETED)</td>
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
    <td><a href="#list_autoshifts"><CopyableCode code="list_autoshifts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns the autoshifts for an Amazon Web Services Region. By default, the call returns only ACTIVE autoshifts. Optionally, you can specify the status parameter to return COMPLETED autoshifts.</td>
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
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specifies that you want to receive the next page of results. Valid only if you received a nextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's nextToken response to request the next page of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the autoshift.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_autoshifts"
    values={[
        { label: 'list_autoshifts', value: 'list_autoshifts' }
    ]}
>
<TabItem value="list_autoshifts">

Returns the autoshifts for an Amazon Web Services Region. By default, the call returns only ACTIVE autoshifts. Optionally, you can specify the status parameter to return COMPLETED autoshifts.

```sql
SELECT
awayFrom,
endTime,
startTime,
status
FROM aws.arc_zonal_shift.autoshifts
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND status = '{{ status }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
