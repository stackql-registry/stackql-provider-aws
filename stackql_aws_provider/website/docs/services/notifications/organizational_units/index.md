--- 
title: organizational_units
hide_title: false
hide_table_of_contents: false
keywords:
  - organizational_units
  - notifications
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

Creates, updates, deletes, gets or lists an <code>organizational_units</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizational_units" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.organizational_units" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_organizational_units"
    values={[
        { label: 'list_organizational_units', value: 'list_organizational_units' }
    ]}
>
<TabItem value="list_organizational_units">

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
    <td><CopyableCode code="organizational_unit" /></td>
    <td><code>string</code></td>
    <td>The list of organizational units that match the specified criteria.</td>
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
    <td><a href="#list_organizational_units"><CopyableCode code="list_organizational_units" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-notificationConfigurationArn"><code>notificationConfigurationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of organizational units associated with a notification configuration.</td>
</tr>
<tr>
    <td><a href="#associate_organizational_unit"><CopyableCode code="associate_organizational_unit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-organizational_unit_id"><code>organizational_unit_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-notificationConfigurationArn"><code>notificationConfigurationArn</code></a></td>
    <td></td>
    <td>Associates an organizational unit with a notification configuration.</td>
</tr>
<tr>
    <td><a href="#disassociate_organizational_unit"><CopyableCode code="disassociate_organizational_unit" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-organizational_unit_id"><code>organizational_unit_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-notificationConfigurationArn"><code>notificationConfigurationArn</code></a></td>
    <td></td>
    <td>Removes the association between an organizational unit and a notification configuration.</td>
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
<tr id="parameter-notificationConfigurationArn">
    <td><CopyableCode code="notificationConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the notification configuration used to filter the organizational units.</td>
</tr>
<tr id="parameter-organizational_unit_id">
    <td><CopyableCode code="organizational_unit_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the organizational unit to disassociate.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of organizational units to return in a single call. Valid values are 1-100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results. Use the value returned in the previous response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_organizational_units"
    values={[
        { label: 'list_organizational_units', value: 'list_organizational_units' }
    ]}
>
<TabItem value="list_organizational_units">

Returns a list of organizational units associated with a notification configuration.

```sql
SELECT
organizational_unit
FROM aws.notifications.organizational_units
WHERE notificationConfigurationArn = '{{ notificationConfigurationArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_organizational_unit"
    values={[
        { label: 'associate_organizational_unit', value: 'associate_organizational_unit' }
    ]}
>
<TabItem value="associate_organizational_unit">

Associates an organizational unit with a notification configuration.

```sql
UPDATE aws.notifications.organizational_units
SET 
notificationConfigurationArn = '{{ notificationConfigurationArn }}'
WHERE 
organizational_unit_id = '{{ organizational_unit_id }}' --required
AND region = '{{ region }}' --required
AND notificationConfigurationArn = '{{ notificationConfigurationArn }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_organizational_unit"
    values={[
        { label: 'disassociate_organizational_unit', value: 'disassociate_organizational_unit' }
    ]}
>
<TabItem value="disassociate_organizational_unit">

Removes the association between an organizational unit and a notification configuration.

```sql
EXEC aws.notifications.organizational_units.disassociate_organizational_unit 
@organizational_unit_id='{{ organizational_unit_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"notificationConfigurationArn": "{{ notificationConfigurationArn }}"
}'
;
```
</TabItem>
</Tabs>
