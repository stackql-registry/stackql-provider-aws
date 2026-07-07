--- 
title: fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets
  - iotfleetwise
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

Creates, updates, deletes, gets or lists a <code>fleets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.fleets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fleet"
    values={[
        { label: 'get_fleet', value: 'get_fleet' },
        { label: 'list_fleets', value: 'list_fleets' }
    ]}
>
<TabItem value="get_fleet">

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
    <td>The ID of the fleet. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the fleet was created in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the fleet. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the fleet was last updated, in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="signalCatalogArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a signal catalog associated with the fleet.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fleets">

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
    <td>The unique ID of the fleet. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the fleet was created, in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the fleet. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the fleet was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="signalCatalogArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signal catalog associated with the fleet.</td>
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
    <td><a href="#get_fleet"><CopyableCode code="get_fleet" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a fleet.</td>
</tr>
<tr>
    <td><a href="#list_fleets"><CopyableCode code="list_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information for each created fleet in an Amazon Web Services account. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.</td>
</tr>
<tr>
    <td><a href="#create_fleet"><CopyableCode code="create_fleet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-fleetId"><code>fleetId</code></a>, <a href="#parameter-signalCatalogArn"><code>signalCatalogArn</code></a></td>
    <td></td>
    <td>Creates a fleet that represents a group of vehicles. You must create both a signal catalog and vehicles before you can create a fleet. For more information, see Fleets in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#associate_vehicle_fleet"><CopyableCode code="associate_vehicle_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vehicleName"><code>vehicleName</code></a>, <a href="#parameter-fleetId"><code>fleetId</code></a></td>
    <td></td>
    <td>Adds, or associates, a vehicle with a fleet.</td>
</tr>
<tr>
    <td><a href="#update_fleet"><CopyableCode code="update_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-fleetId"><code>fleetId</code></a></td>
    <td></td>
    <td>Updates the description of an existing fleet.</td>
</tr>
<tr>
    <td><a href="#delete_fleet"><CopyableCode code="delete_fleet" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a fleet. Before you delete a fleet, all vehicles must be dissociated from the fleet. For more information, see Delete a fleet (AWS CLI) in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_vehicle_fleet"><CopyableCode code="disassociate_vehicle_fleet" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vehicleName"><code>vehicleName</code></a>, <a href="#parameter-fleetId"><code>fleetId</code></a></td>
    <td></td>
    <td>Removes, or disassociates, a vehicle from a fleet. Disassociating a vehicle from a fleet doesn't delete the vehicle.</td>
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
    defaultValue="get_fleet"
    values={[
        { label: 'get_fleet', value: 'get_fleet' },
        { label: 'list_fleets', value: 'list_fleets' }
    ]}
>
<TabItem value="get_fleet">

Retrieves information about a fleet.

```sql
SELECT
id,
arn,
creationTime,
description,
lastModificationTime,
signalCatalogArn
FROM aws.iotfleetwise.fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fleets">

Retrieves information for each created fleet in an Amazon Web Services account. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.

```sql
SELECT
id,
arn,
creationTime,
description,
lastModificationTime,
signalCatalogArn
FROM aws.iotfleetwise.fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fleet"
    values={[
        { label: 'create_fleet', value: 'create_fleet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fleet">

Creates a fleet that represents a group of vehicles. You must create both a signal catalog and vehicles before you can create a fleet. For more information, see Fleets in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
INSERT INTO aws.iotfleetwise.fleets (
fleetId,
description,
signalCatalogArn,
tags,
region
)
SELECT 
'{{ fleetId }}' /* required */,
'{{ description }}',
'{{ signalCatalogArn }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
id,
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fleets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fleets resource.
    - name: fleetId
      value: "{{ fleetId }}"
      description: |
        The unique ID of the fleet to create.
    - name: description
      value: "{{ description }}"
      description: |
        A brief description of the fleet to create.
    - name: signalCatalogArn
      value: "{{ signalCatalogArn }}"
      description: |
        The Amazon Resource Name (ARN) of a signal catalog.
    - name: tags
      description: |
        Metadata that can be used to manage the fleet.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_vehicle_fleet"
    values={[
        { label: 'associate_vehicle_fleet', value: 'associate_vehicle_fleet' },
        { label: 'update_fleet', value: 'update_fleet' }
    ]}
>
<TabItem value="associate_vehicle_fleet">

Adds, or associates, a vehicle with a fleet.

```sql
UPDATE aws.iotfleetwise.fleets
SET 
vehicleName = '{{ vehicleName }}',
fleetId = '{{ fleetId }}'
WHERE 
region = '{{ region }}' --required
AND vehicleName = '{{ vehicleName }}' --required
AND fleetId = '{{ fleetId }}' --required;
```
</TabItem>
<TabItem value="update_fleet">

Updates the description of an existing fleet.

```sql
UPDATE aws.iotfleetwise.fleets
SET 
fleetId = '{{ fleetId }}',
description = '{{ description }}'
WHERE 
region = '{{ region }}' --required
AND fleetId = '{{ fleetId }}' --required
RETURNING
id,
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fleet"
    values={[
        { label: 'delete_fleet', value: 'delete_fleet' }
    ]}
>
<TabItem value="delete_fleet">

Deletes a fleet. Before you delete a fleet, all vehicles must be dissociated from the fleet. For more information, see Delete a fleet (AWS CLI) in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
DELETE FROM aws.iotfleetwise.fleets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_vehicle_fleet"
    values={[
        { label: 'disassociate_vehicle_fleet', value: 'disassociate_vehicle_fleet' }
    ]}
>
<TabItem value="disassociate_vehicle_fleet">

Removes, or disassociates, a vehicle from a fleet. Disassociating a vehicle from a fleet doesn't delete the vehicle.

```sql
EXEC aws.iotfleetwise.fleets.disassociate_vehicle_fleet 
@region='{{ region }}' --required 
@@json=
'{
"vehicleName": "{{ vehicleName }}", 
"fleetId": "{{ fleetId }}"
}'
;
```
</TabItem>
</Tabs>
